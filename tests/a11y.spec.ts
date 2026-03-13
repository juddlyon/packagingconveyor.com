import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { allPages } from './pages';

for (const path of allPages) {
  const name = path === '/' ? 'Homepage' : path.replace(/\//g, ' ').trim();
  test.describe(`${name} (${path})`, () => {
    test('should have no accessibility violations', async ({ page }) => {
      await page.goto(path);
      await page.waitForTimeout(1500);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      const violations = results.violations.map(v => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        nodes: v.nodes.length,
      }));

      if (violations.length > 0) {
        console.log(`\nA11y violations on ${path}:`);
        violations.forEach(v => {
          console.log(`  [${v.impact}] ${v.id}: ${v.description} (${v.nodes} elements)`);
        });
      }

      expect(results.violations).toEqual([]);
    });
  });
}
