import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { path: '/', name: 'Homepage' },
  { path: '/about/', name: 'About' },
  { path: '/privacy/', name: 'Privacy' },
  { path: '/terms/', name: 'Terms' },
  { path: '/thank-you/', name: 'Thank You' },
];

for (const page of pages) {
  test.describe(`${page.name} (${page.path})`, () => {
    test('should have no accessibility violations', async ({ page: p }) => {
      await p.goto(page.path);
      // Wait for stagger animations to complete (max 0.6s delay + 0.5s animation)
      await p.waitForTimeout(1500);
      const results = await new AxeBuilder({ page: p })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      const violations = results.violations.map(v => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        nodes: v.nodes.length,
      }));

      if (violations.length > 0) {
        console.log(`\nA11y violations on ${page.path}:`);
        violations.forEach(v => {
          console.log(`  [${v.impact}] ${v.id}: ${v.description} (${v.nodes} elements)`);
        });
      }

      expect(results.violations).toEqual([]);
    });
  });
}
