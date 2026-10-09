# 2026-10-09: Lead photos and social images

## What changed
- `BaseLayout.astro`: `og:image`, `twitter:image`, and Article/WebPage schema `image` come from the page's first photo. The first photo loads eagerly. Pages with no photo fall back to one site photo.
- `astro.config.mjs`: `og-images` integration writes a 1200 x 630 JPG to `dist/img/og/` for every lead photo at build.
- `public/og-image.svg` removed.
- New maker photos on 85 content pages, added with `scripts/media.mjs`. Existing photos reused on the homepage, 5 hub pages, and 7 manufacturer list pages.
- Vendor spread pass (owner request): Hytrol cut from 23 pages to 7, Dorner from 18 to 7. No maker is credited on more than 9 pages.
- Render and weak-match leads replaced with photographs on magnetic, chain index, bucket elevators, screw, shuttle, packaging-line index, bag-loading, cleanroom.

## Owner decisions (2026-10-09)
- A page gets no photo if none fits. `transfer-conveyors/bump-turn` stays without one.
- Spread photo credits across vendors.

## Needs validation
- Several replacement leads are catalog shots on white (Roach, Automated Conveyor Systems, Omni, Alba) where the removed Hytrol photos showed equipment in use.
- `roller-conveyors/index` photos now show only gravity roller. The page also covers powered roller.
- `bag-loading` lead shows a cleated incline for bagged product with no bags in frame.
- `design-guide/components` lead (QC AS80) kept. It may be a render.
- `transfer-conveyors/pivot` and `shuttle` copy still link Hytrol and Dorner next to photos from other makers.
- Manufacturer list pages lead with one maker's photo. Check this against the neutrality posture.
- `npm test` cannot start its server: `astro preview` in Astro 7 backgrounds itself and Playwright reads that as an early exit. Tests ran against a manually started preview with `reuseExistingServer: true`.
