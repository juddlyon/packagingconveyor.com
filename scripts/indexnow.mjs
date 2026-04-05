#!/usr/bin/env node
/**
 * IndexNow: submit all sitemap URLs to search engines after deploy.
 * Usage: node scripts/indexnow.mjs
 *
 * Sends the full URL list from sitemap-0.xml to IndexNow (Bing/Yandex/etc).
 * Safe to run on every deploy; IndexNow deduplicates and rate-limits server-side.
 */

const SITE = 'https://packagingconveyor.com';
const KEY = '57a4783948be4d888afda70272b9b21f';
const SITEMAP_URL = `${SITE}/sitemap-0.xml`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

async function main() {
  // Fetch sitemap
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    console.error(`Failed to fetch sitemap: ${res.status}`);
    process.exit(1);
  }

  const xml = await res.text();

  // Extract URLs from <loc> tags
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

  if (urls.length === 0) {
    console.log('No URLs found in sitemap.');
    return;
  }

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  const payload = {
    host: 'packagingconveyor.com',
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  };

  const submit = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  if (submit.ok || submit.status === 202) {
    console.log(`IndexNow accepted: ${submit.status} (${urls.length} URLs)`);
  } else {
    const body = await submit.text().catch(() => '');
    console.error(`IndexNow rejected: ${submit.status} ${body}`);
    process.exit(1);
  }
}

main();
