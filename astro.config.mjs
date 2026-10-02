// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { lastModified } from './src/lib/lastmod.mjs';

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
  })],
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
