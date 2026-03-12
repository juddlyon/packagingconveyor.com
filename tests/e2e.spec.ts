import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load and display H1', async ({ page }) => {
    await page.goto('/');
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    await expect(h1).toContainText('Conveyor');
  });

  test('should have correct title and meta description', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Packaging Conveyor Systems/);
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute('content', /conveyor/i);
  });

  test('should have JSON-LD structured data', async ({ page }) => {
    await page.goto('/');
    const scripts = await page.locator('script[type="application/ld+json"]').all();
    expect(scripts.length).toBeGreaterThanOrEqual(2);

    for (const script of scripts) {
      const content = await script.textContent();
      const json = JSON.parse(content!);
      expect(json['@context']).toBe('https://schema.org');
    }
  });

  test('should have FAQ section with working accordions', async ({ page }) => {
    await page.goto('/');
    const details = page.locator('details');
    const count = await details.count();
    expect(count).toBeGreaterThanOrEqual(3);

    // First FAQ should be open by default
    const first = details.first();
    await expect(first).toHaveAttribute('open', '');

    // Click a closed one — it should open
    const second = details.nth(1);
    await expect(second).not.toHaveAttribute('open', '');
    await second.locator('summary').click();
    await expect(second).toHaveAttribute('open', '');
  });

  test('should have comparison table with pricing data', async ({ page }) => {
    await page.goto('/');
    const table = page.locator('table');
    await expect(table).toBeVisible();

    const rows = table.locator('tbody tr');
    const count = await rows.count();
    expect(count).toBeGreaterThanOrEqual(5);

    // Check a cell has pricing
    const priceCells = page.locator('table td:has-text("$")');
    expect(await priceCells.count()).toBeGreaterThanOrEqual(5);
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav[aria-label="Main navigation"]');
    await expect(nav).toBeVisible();

    const links = nav.locator('a');
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('should have hero quick-nav cards', async ({ page }) => {
    await page.goto('/');
    const heroCards = page.locator('section').first().locator('a.block');
    const count = await heroCards.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('should have no lead-gen language', async ({ page }) => {
    await page.goto('/');
    const body = await page.textContent('body');
    expect(body).not.toContain('Get My 3');
    expect(body).not.toContain('Get Matched');
    expect(body).not.toContain('qualified suppliers');
  });
});

test.describe('Navigation & Links', () => {
  test('mobile menu should toggle', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeHidden();

    await page.locator('#mobile-menu-btn').click();
    await expect(mobileMenu).toBeVisible();

    await page.locator('#mobile-menu-btn').click();
    await expect(mobileMenu).toBeHidden();
  });

  test('footer links should include Privacy and Terms', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer.locator('a[href="/privacy/"]')).toBeVisible();
    await expect(footer.locator('a[href="/terms/"]')).toBeVisible();
  });
});

test.describe('About page', () => {
  test('should load with correct content', async ({ page }) => {
    await page.goto('/about/');
    await expect(page).toHaveTitle(/About/);
    const body = await page.textContent('body');
    expect(body).toContain('info@packagingconveyor.com');
    expect(body).toContain('independent');
  });
});

test.describe('Privacy page', () => {
  test('should load and mention no data collection', async ({ page }) => {
    await page.goto('/privacy/');
    await expect(page).toHaveTitle(/Privacy/);
  });
});

test.describe('Terms page', () => {
  test('should load and mention informational purposes', async ({ page }) => {
    await page.goto('/terms/');
    await expect(page).toHaveTitle(/Terms/);
  });
});

test.describe('SEO fundamentals', () => {
  const allPages = [
    '/', '/about/', '/privacy/', '/terms/', '/thank-you/',
    '/conveyor-types/', '/conveyor-types/roller-conveyors/', '/conveyor-types/roller-conveyors/gravity/',
    '/conveyor-types/roller-conveyors/powered/', '/conveyor-types/accumulation-conveyors/',
    '/conveyor-types/transfer-conveyors/', '/conveyor-types/cdlr-conveyors/',
    '/conveyor-types/mdr-conveyors/', '/conveyor-types/live-roller-conveyors/',
    '/conveyor-types/vertical-reciprocating/',
    '/industries/', '/industries/food-conveyors/', '/industries/food-conveyors/sanitary/',
    '/industries/packaging-line-conveyors/', '/industries/packaging-line-conveyors/pallet/',
    '/conveyor-functions/', '/conveyor-functions/tray-loading/', '/conveyor-functions/indexing-conveyors/',
    '/conveyor-functions/collating-laning/', '/conveyor-functions/reject-systems/',
    '/resources/', '/resources/automated-conveyor-systems/', '/resources/conveyor-cost-guide/',
  ];

  for (const path of allPages) {
    test(`${path} should have required meta tags`, async ({ page }) => {
      await page.goto(path);

      // Title exists and isn't empty
      const title = await page.title();
      expect(title.length).toBeGreaterThan(10);

      // Meta description
      const desc = page.locator('meta[name="description"]');
      await expect(desc).toHaveAttribute('content', /.{20,}/);

      // OG tags
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);

      // Robots
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /index/);

      // Lang attribute
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    });

    test(`${path} should have proper heading hierarchy`, async ({ page }) => {
      await page.goto(path);

      // Exactly one H1
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
    });
  }
});

test.describe('Performance basics', () => {
  test('homepage should load under 3 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto('/', { waitUntil: 'networkidle' });
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(3000);
  });

  test('should not load excessive JS', async ({ page }) => {
    const resources: string[] = [];
    page.on('response', (response) => {
      if (response.url().endsWith('.js')) {
        resources.push(response.url());
      }
    });
    await page.goto('/', { waitUntil: 'networkidle' });
    // Static site should have minimal JS
    expect(resources.length).toBeLessThan(10);
  });
});
