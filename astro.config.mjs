// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { lastModified } from './src/lib/lastmod.mjs';
import { readFile, readdir, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// Writes the 1200 x 630 JPG behind every og:image the layout emits, cut from that page's lead photo.
// Photos close to the social shape are cropped to fill it. Tall or very wide photos are fitted whole on white so the machine is not cut off.
const ogImages = {
  name: 'og-images',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      const pages = (await readdir(dir, { recursive: true })).filter(f => f.endsWith('.html'));
      const names = new Set();
      for (const page of pages) for (const m of (await readFile(new URL(page, dir), 'utf8')).matchAll(/property="og:image" content="[^"]*\/img\/og\/([\w-]+)\.jpg"/g)) names.add(m[1]);
      await mkdir(new URL('img/og/', dir), { recursive: true });
      for (const name of names) {
        const photo = sharp(fileURLToPath(new URL(`./public/img/photos/${name}.webp`, import.meta.url)));
        const { width, height } = await photo.metadata();
        const ratio = width / height;
        const fit = ratio >= 1.6 && ratio <= 2.3 ? { fit: 'cover', position: 'attention' } : { fit: 'contain', background: '#ffffff' };
        await photo.resize({ width: 1200, height: 630, ...fit }).flatten({ background: '#ffffff' }).jpeg({ quality: 82, mozjpeg: true }).toFile(fileURLToPath(new URL(`img/og/${name}.jpg`, dir)));
      }
      logger.info(`${names.size} social images for ${pages.length} pages`);
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://packagingconveyor.com',
  integrations: [sitemap({
    filter: (page) => !page.includes('/thank-you'),
    serialize: (item) => {
      // Category hubs and homepage get highest priority
      if (item.url.endsWith('.com/') || item.url.match(/\/(conveyor-types|industries|conveyor-functions|resources)\/$/)) {
        item.priority = 1.0;
        item.changefreq = 'weekly';
      } else if (item.url.includes('/about') || item.url.includes('/privacy') || item.url.includes('/terms')) {
        item.priority = 0.3;
        item.changefreq = 'monthly';
      } else {
        item.priority = 0.8;
        item.changefreq = 'weekly';
      }
      // Real content edit date from git, not the build time.
      const modified = lastModified(new URL(item.url).pathname);
      if (modified) item.lastmod = modified;
      return item;
    },
  }), ogImages],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ['./node_modules/@uswds/uswds/packages'],
          quietDeps: true,
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
        },
      },
    },
  },
});
