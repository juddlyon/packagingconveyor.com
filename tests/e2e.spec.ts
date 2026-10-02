import { test, expect } from '@playwright/test';
import { allPages } from './pages';

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
    const buttons = page.locator('.usa-accordion .usa-accordion__button');
    const count = await buttons.count();
    expect(count).toBeGreaterThanOrEqual(3);

    await expect(buttons.first()).toHaveAttribute('aria-expanded', 'true');

    const second = buttons.nth(1);
    await expect(second).toHaveAttribute('aria-expanded', 'false');
    await second.click();
    await expect(second).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator(`#${await second.getAttribute('aria-controls')}`)).toBeVisible();
  });

  test('should have comparison table with pricing data', async ({ page }) => {
    await page.goto('/');
    const table = page.locator('table');
    await expect(table).toBeVisible();

    const rows = table.locator('tbody tr');
    const count = await rows.count();
    expect(count).toBeGreaterThanOrEqual(5);

    const priceCells = page.locator('table td:has-text("$")');
    expect(await priceCells.count()).toBeGreaterThanOrEqual(5);
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav[aria-label="Primary navigation"]');
    await expect(nav).toBeVisible();

    const links = nav.locator('a');
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('should have conveyor type collection', async ({ page }) => {
    await page.goto('/');
    const items = page.locator('.usa-collection__item');
    const count = await items.count();
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

    const mobileMenu = page.locator('.usa-nav');
    await expect(mobileMenu).toBeHidden();

    await page.locator('.usa-menu-btn').click();
    await expect(mobileMenu).toBeVisible();

    await page.locator('.usa-nav__close').click();
    await expect(mobileMenu).toBeHidden();
  });

  test('footer links should include Privacy and Terms', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer.locator('a[href="/privacy/"]')).toBeVisible();
    await expect(footer.locator('a[href="/terms/"]')).toBeVisible();
  });
});

test.describe('SEO fundamentals', () => {
  for (const path of allPages) {
    test(`${path} should have required meta tags`, async ({ page }) => {
      await page.goto(path);

      const title = await page.title();
      expect(title.length).toBeGreaterThan(10);

      const desc = page.locator('meta[name="description"]');
      await expect(desc).toHaveAttribute('content', /.{20,}/);

      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);

      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /index/);

      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    });

    test(`${path} should have proper heading hierarchy`, async ({ page }) => {
      await page.goto(path);
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
    });

    test(`${path} should have canonical URL`, async ({ page }) => {
      await page.goto(path);
      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveAttribute('href', /packagingconveyor\.com/);
    });

    test(`${path} should have JSON-LD structured data`, async ({ page }) => {
      await page.goto(path);
      const scripts = await page.locator('script[type="application/ld+json"]').all();
      expect(scripts.length).toBeGreaterThanOrEqual(2);
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
    expect(resources.length).toBeLessThan(10);
  });
});
