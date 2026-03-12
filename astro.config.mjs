// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

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
      item.lastmod = new Date().toISOString();
      return item;
    },
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});