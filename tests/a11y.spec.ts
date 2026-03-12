import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { path: '/', name: 'Homepage' },
  { path: '/about/', name: 'About' },
  { path: '/privacy/', name: 'Privacy' },
  { path: '/terms/', name: 'Terms' },
  { path: '/thank-you/', name: 'Thank You' },
  { path: '/conveyor-types/', name: 'Conveyor Types' },
  { path: '/conveyor-types/roller-conveyors/', name: 'Roller Conveyors' },
  { path: '/conveyor-types/roller-conveyors/gravity/', name: 'Gravity Roller' },
  { path: '/conveyor-types/roller-conveyors/powered/', name: 'Powered Roller' },
  { path: '/conveyor-types/accumulation-conveyors/', name: 'Accumulation' },
  { path: '/conveyor-types/transfer-conveyors/', name: 'Transfer' },
  { path: '/conveyor-types/cdlr-conveyors/', name: 'CDLR' },
  { path: '/conveyor-types/mdr-conveyors/', name: 'MDR' },
  { path: '/conveyor-types/live-roller-conveyors/', name: 'Live Roller' },
  { path: '/conveyor-types/vertical-reciprocating/', name: 'VRC' },
  { path: '/industries/', name: 'Industries' },
  { path: '/industries/food-conveyors/', name: 'Food Conveyors' },
  { path: '/industries/food-conveyors/sanitary/', name: 'Sanitary' },
  { path: '/industries/packaging-line-conveyors/', name: 'Packaging Line' },
  { path: '/industries/packaging-line-conveyors/pallet/', name: 'Pallet' },
  { path: '/conveyor-functions/', name: 'Functions' },
  { path: '/conveyor-functions/tray-loading/', name: 'Tray Loading' },
  { path: '/conveyor-functions/indexing-conveyors/', name: 'Indexing' },
  { path: '/conveyor-functions/collating-laning/', name: 'Collating & Laning' },
  { path: '/conveyor-functions/reject-systems/', name: 'Reject Systems' },
  { path: '/resources/', name: 'Resources' },
  { path: '/resources/automated-conveyor-systems/', name: 'Automated Systems' },
  { path: '/resources/conveyor-cost-guide/', name: 'Cost Guide' },
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
