// Build-time HTML enhancements for guide content: accessible scrollable tables
// that stack on small screens without JavaScript, and responsive AVIF photos with a WebP fallback.
const text = (html: string) => html.replace(/<[^>]+>/g, '').trim();

function tables(html: string) {
  return html.replace(/<table>([\s\S]*?)<\/table>/g, (_, inner: string, offset: number) => {
    const heading = [...html.slice(0, offset).matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].pop();
    const label = heading ? text(heading[1]) : 'Data table';
    const labels = [...(inner.match(/<thead>[\s\S]*?<\/thead>/)?.[0] ?? '').matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)].map(m => text(m[1]).replaceAll('"', '&quot;'));
    const body = inner
      .replace(/<thead>([\s\S]*?)<\/thead>/, (t: string) => t.replace(/<th(?=[\s>])/g, '<th scope="col"'))
      .replace(/<tbody>([\s\S]*?)<\/tbody>/, (t: string) => t.replace(/<tr>([\s\S]*?)<\/tr>/g, (_r: string, row: string) => {
        let i = 0;
        return `<tr>${row.replace(/<td(?=[\s>])/g, () => `<td data-label="${labels[i++] ?? ''}"`)}</tr>`;
      }));
    return `<div class="table-scroll" role="region" tabindex="0" aria-label="${label} (table)"><table class="usa-table${labels.length >= 5 ? ' usa-table--compact' : ''} stack-mobile">${body}</table></div>`;
  });
}

function picture(img: string, sizes: string) {
  const m = img.match(/src="\/img\/photos\/([\w-]+)\.webp"[^>]*?width="(\d+)"/);
  if (!m) return img;
  const [, name, width] = m;
  const srcset = (ext: string) => `${Number(width) > 480 ? `/img/photos/${name}-480.${ext} 480w, ` : ''}/img/photos/${name}.${ext} ${width}w`;
  return `<picture><source type="image/avif" srcset="${srcset('avif')}" sizes="${sizes}" />${img.replace('<img ', `<img srcset="${srcset('webp')}" sizes="${sizes}" `)}</picture>`;
}

function photos(html: string) {
  const imgs = /<img [^>]*src="\/img\/photos\/[^"]+\.webp"[^>]*>/g;
  return html
    .replace(/<div class="photo-row">[\s\S]*?<\/div>(?=\s*(?:<|$))/g, row => row.replace(imgs, img => picture(img, '(min-width: 64em) 320px, (min-width: 40em) 45vw, 100vw')))
    .replace(/(?<!<\/source>|\/>)<img [^>]*src="\/img\/photos\/[^"]+\.webp"[^>]*>/g, img => picture(img, '(min-width: 64em) 720px, 100vw'));
}

export const enhance = (html: string) => photos(tables(html));
