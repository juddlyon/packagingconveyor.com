// Explicit maintenance command (ported from austin-furniture). Fetches a preview image for each manufacturer card:
// the page's Open Graph / Twitter image, or a browser screenshot when there is none. Builds use the checked-in cache.
// Usage: node scripts/refresh-bookmarks.mjs [--force] [--screenshot=<url part>,<url part>]
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import sharp from 'sharp';
import { chromium } from 'playwright';

const root = new URL('../', import.meta.url);
const pagesDir = new URL('src/pages/resources/conveyor-manufacturers/', root);
const manifestURL = new URL('src/data/bookmarks.json', root);
const imageDir = new URL('public/img/bookmarks/', root);
const force = process.argv.includes('--force');
const forceShot = (process.argv.find(a => a.startsWith('--screenshot='))?.split('=')[1] ?? '').split(',').filter(Boolean);
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

await mkdir(imageDir, { recursive: true });
await mkdir(new URL('src/data/', root), { recursive: true });
let previews = {};
try { previews = JSON.parse(await readFile(manifestURL, 'utf8')); } catch {}

const targets = new Set();
for (const file of await readdir(pagesDir)) {
  if (!file.endsWith('.astro')) continue;
  const content = await readFile(new URL(file, pagesDir), 'utf8');
  for (const m of content.matchAll(/\{ name: '[^']+', url: '(https:\/\/[^']+)'/g)) targets.add(m[1]);
}

const domainOf = url => new URL(url).hostname.replace(/^www\./, '');
const fileFor = url => `${domainOf(url).replace(/[^a-z0-9.-]/g, '')}-${createHash('sha256').update(url).digest('hex').slice(0, 8)}.webp`;

async function fetchLimited(url, limit) {
  const response = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'text/html,image/*' }, signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const body = Buffer.from(await response.arrayBuffer());
  if (body.length > limit) throw new Error('Response too large');
  return { body, url: response.url };
}

function socialImage(html) {
  const metas = {};
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const key = tag.match(/\b(?:property|name)=["']([^"']+)["']/i)?.[1]?.toLowerCase();
    const content = tag.match(/\bcontent=["']([^"']+)["']/i)?.[1];
    if (key && content && !metas[key]) metas[key] = content.replaceAll('&amp;', '&');
  }
  return metas['og:image:secure_url'] || metas['og:image'] || metas['twitter:image'] || metas['twitter:image:src'];
}

async function fromSocial(url) {
  const page = await fetchLimited(url, 5_000_000);
  const candidate = socialImage(page.body.toString('utf8'));
  if (!candidate) throw new Error('No social preview');
  const imageURL = new URL(candidate, page.url);
  const asset = await fetchLimited(imageURL.href, 12_000_000);
  const image = sharp(asset.body, { limitInputPixels: 40_000_000 });
  const info = await image.metadata();
  if (info.width < 300 || info.height < 150) throw new Error('Preview too small');
  await image.resize(600, 400, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(fileURLToPath(new URL(fileFor(url), imageDir)));
  return { image: `/img/bookmarks/${fileFor(url)}`, source: imageURL.href, fetched: new Date().toISOString().slice(0, 10) };
}

let browser;
async function fromScreenshot(url) {
  browser ??= await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1200, height: 800 }, userAgent: UA, ignoreHTTPSErrors: true });
  const page = await context.newPage();
  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    if (!response || response.status() >= 400) throw new Error(`HTTP ${response?.status()}`);
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    // Clear consent banners: decline where a button exists, then hide the common consent containers.
    const decline = page.getByRole('button', { name: /^(reject all|decline|deny|use necessary cookies only|necessary only|accept all|allow all|accept|i agree|agree|got it|ok)$/i }).first();
    await decline.click({ timeout: 2500 }).catch(() => {});
    await page.addStyleTag({ content: '#CybotCookiebotDialog,#CybotCookiebotDialogBodyUnderlay,#onetrust-consent-sdk,#usercentrics-root,[id*="cookie" i],[class*="cookie" i],[id*="consent" i],[class*="consent" i],[aria-label*="cookie" i]{display:none!important}' }).catch(() => {});
    await page.waitForTimeout(600);
    const shot = await page.screenshot({ type: 'png' });
    await sharp(shot).resize(600, 400, { fit: 'cover', position: 'top' }).webp({ quality: 78 }).toFile(fileURLToPath(new URL(fileFor(url), imageDir)));
    return { image: `/img/bookmarks/${fileFor(url)}`, source: url, fetched: new Date().toISOString().slice(0, 10), kind: 'screenshot' };
  } finally { await context.close(); }
}

for (const url of targets) {
  const shotOnly = forceShot.some(part => url.includes(part));
  if (previews[url]?.image && !force && !shotOnly) { console.log(`cached     ${url}`); continue; }
  try {
    if (shotOnly) throw new Error('screenshot requested');
    previews[url] = await fromSocial(url);
    console.log(`social     ${url}`);
  } catch (error) {
    try {
      previews[url] = await fromScreenshot(url);
      console.log(`screenshot ${url} (${error.message})`);
    } catch (shotError) {
      console.log(`fallback   ${url}: ${error.message}; ${shotError.message}`);
    }
  }
}
await browser?.close();
await writeFile(manifestURL, JSON.stringify(Object.fromEntries(Object.entries(previews).sort()), null, 2) + '\n');
console.log(`${Object.keys(previews).length} cached previews for ${targets.size} links`);
