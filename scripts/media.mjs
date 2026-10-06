// Explicit maintenance command: adds a self-hosted photo or a click-to-load YouTube video and prints the markup to paste into a page.
// Same conventions as palletizersystem.com (docs/writing-brief.md there): real maker photos, credited and linked, in public/img/photos/.
//   node scripts/media.mjs photo <image file or URL> <name> "<Maker>" <maker page URL>
//   node scripts/media.mjs video <YouTube id or URL>
// Photos: white background, max 1000 px wide, .webp and .avif plus -480 copies when the source is over 600 px wide.
// Videos: checks the id against YouTube oEmbed, saves the thumbnail locally, and prints a figure that loads the player only on click.
import { mkdir, readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import dns from 'node:dns';

// Some hosts time out over IPv6 from Node. Prefer IPv4.
dns.setDefaultResultOrder('ipv4first');

const dir = new URL('../public/img/photos/', import.meta.url);
await mkdir(dir, { recursive: true });
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
const out = file => fileURLToPath(new URL(file, dir));
const exists = file => access(out(file)).then(() => true, () => false);
const esc = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');

async function load(source) {
  if (!/^https?:/.test(source)) return readFile(source);
  const response = await fetch(source, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${source}`);
  return Buffer.from(await response.arrayBuffer());
}

// Writes name.webp/.avif (and -480 copies) and returns the final width and height.
async function save(buffer, name) {
  const flat = sharp(buffer, { limitInputPixels: 60_000_000 }).rotate().flatten({ background: '#ffffff' });
  const { width: sourceWidth } = await flat.metadata();
  const full = await flat.clone().resize({ width: 1000, withoutEnlargement: true }).png().toBuffer({ resolveWithObject: true });
  await sharp(full.data).webp({ quality: 80 }).toFile(out(`${name}.webp`));
  await sharp(full.data).avif({ quality: 60 }).toFile(out(`${name}.avif`));
  if (full.info.width > 480) {
    await sharp(full.data).resize({ width: 480 }).webp({ quality: 80 }).toFile(out(`${name}-480.webp`));
    await sharp(full.data).resize({ width: 480 }).avif({ quality: 60 }).toFile(out(`${name}-480.avif`));
  }
  return { width: full.info.width, height: full.info.height, sourceWidth };
}

const [kind, ...args] = process.argv.slice(2);
if (kind === 'photo') {
  const [source, name, maker, makerUrl] = args;
  if (!source || !/^[a-z0-9-]+$/.test(name ?? '') || !maker || !/^https:/.test(makerUrl ?? '')) throw new Error('Usage: media.mjs photo <file or URL> <lowercase-name> "<Maker>" <https maker page URL>');
  if (await exists(`${name}.webp`)) throw new Error(`${name}.webp already exists. Pick another name.`);
  const { width, height, sourceWidth } = await save(await load(source), name);
  if (sourceWidth < 400) console.error(`Warning: source is only ${sourceWidth} px wide.`);
  console.log(`<figure class="photo"><img src="/img/photos/${name}.webp" width="${width}" height="${height}" alt="WHAT THE PHOTO SHOWS." loading="lazy" decoding="async" /><figcaption>CAPTION. <span class="photo-credit">Photo: <a href="${esc(makerUrl)}" target="_blank" rel="noopener noreferrer">${esc(maker)}</a></span></figcaption></figure>`);
} else if (kind === 'video') {
  const id = (args[0] ?? '').match(/(?:v=|youtu\.be\/|embed\/|^)([\w-]{11})(?:[&?].*)?$/)?.[1];
  if (!id) throw new Error('Usage: media.mjs video <YouTube id or URL>');
  const watch = `https://www.youtube.com/watch?v=${id}`;
  const meta = await fetch(`https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(watch)}`, { headers: { 'User-Agent': UA } });
  if (!meta.ok) throw new Error(`YouTube oEmbed returned HTTP ${meta.status}: the video is missing, private, or not embeddable.`);
  const { title, author_name: author, author_url: authorUrl } = await meta.json();
  const name = `yt-${id.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
  let thumb;
  for (const size of ['maxresdefault', 'sddefault', 'hqdefault']) {
    try { thumb = await load(`https://i.ytimg.com/vi/${id}/${size}.jpg`); break; } catch {}
  }
  if (!thumb) throw new Error('No thumbnail found.');
  // Crop to 16:9 so letterboxed 4:3 thumbnails lose their black bars.
  const cropped = await sharp(thumb).resize({ width: 1000, height: 563, fit: 'cover', withoutEnlargement: false }).png().toBuffer();
  const { width, height } = await save(cropped, name);
  console.log(`title: ${title}\nchannel: ${author} (${authorUrl})`);
  console.log(`<figure class="video"><a class="video__link" href="${watch}" data-youtube="${id}"><img src="/img/photos/${name}.webp" width="${width}" height="${height}" alt="" loading="lazy" decoding="async" /><span class="video__play">Play video: ${esc(title)}</span></a><figcaption>CAPTION. <span class="photo-credit">Video: <a href="${esc(authorUrl)}" target="_blank" rel="noopener noreferrer">${esc(author)}</a> on YouTube</span></figcaption></figure>`);
} else {
  throw new Error('Usage: media.mjs photo|video ...');
}
