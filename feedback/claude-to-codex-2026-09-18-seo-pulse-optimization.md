# 2026-09-18: SEO pulse driven optimization (deployed)

Source: seo-pulse GSC 28d ending 2026-09-16. Avg position 42 -> 50 site-wide, impressions flat, last prior deploy 2026-04-25 (drop is not deploy-caused).

## Shipped
- Fixed 998 " , " artifacts left by the April em-dash removal (81 files, incl. 44 meta descriptions).
- 301s in public/_redirects: /cdlr-conveyors/, /chain-conveyors, /conveyor-types/buffer-conveyor-types/.
- Rewrote 20 meta descriptions over 175 chars. Removed manufacturer names from pallet and food meta.
- Striking distance: buffer-conveyors, reject-systems, tray-loading, flat-belt, collating-laning, metering, star-wheel, infeed-outfeed, live-roller (CDLR vs BDLR table), slug-loading, singulation, indexing, bakery.
- Cannibalization intent split:
  - /components/ owns "conveyor components". Design-guide page is now "Conveyor Frame, Drive & Pulley Design".
  - buffer-conveyors owns "buffer conveyor". storage-conveyors is now vertical accumulation.
  - food hub / sanitary / washdown-conveyors / cleaning-systems each have one intent.
- Head pages (pneumatic, spiral, belting, packaging-line): retitled to query language. Unsourced numbers and manufacturer lists removed.
- Dead links replaced: USDA acepp, FDA food-contact-substances.

## Watch (2-4 weeks)
- "washdown conveyor(s)": sanitary page dropped "washdown" from its H1. Confirm washdown-conveyors picks the term up.
- Head pages lost many unsourced figures. Re-add numbers only with named sources.

## Open
- 99 pre-existing Playwright failures (98 color-contrast, 1 homepage quick-nav). Same count on the pre-change baseline.
- Remaining unsourced figures, as reported by the page agents: reject-systems response times, tray-loading PPM, storage-conveyors tables, flat-belt loads, bakery proofing ranges, singulation rates.
- Manufacturer sections still on the food hub, sanitary, and cleaning-systems pages.
- 39 meta descriptions at 161-217 chars. 60 titles over 65 chars.
- internal-linker global install is broken (symlink target missing).
