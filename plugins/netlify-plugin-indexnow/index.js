const SITE = 'https://packagingconveyor.com';
const KEY = '57a4783948be4d888afda70272b9b21f';
const SITEMAP_URL = `${SITE}/sitemap-0.xml`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

export const onSuccess = async function () {
    try {
      const res = await fetch(SITEMAP_URL);
      if (!res.ok) {
        console.log(`IndexNow: could not fetch sitemap (${res.status}), skipping`);
        return;
      }

      const xml = await res.text();
      const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

      if (urls.length === 0) {
        console.log('IndexNow: no URLs in sitemap, skipping');
        return;
      }

      console.log(`IndexNow: submitting ${urls.length} URLs...`);

      const submit = await fetch(INDEXNOW_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          host: 'packagingconveyor.com',
          key: KEY,
          keyLocation: `${SITE}/${KEY}.txt`,
          urlList: urls,
        }),
      });

      if (submit.ok || submit.status === 202) {
        console.log(`IndexNow: accepted (${submit.status}, ${urls.length} URLs)`);
      } else {
        const body = await submit.text().catch(() => '');
        console.log(`IndexNow: rejected (${submit.status}) ${body}`);
      }
    } catch (err) {
      console.log(`IndexNow: error: ${err.message}`);
    }
};
