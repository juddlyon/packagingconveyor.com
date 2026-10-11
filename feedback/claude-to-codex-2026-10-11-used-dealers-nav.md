# 2026-10-11: Used conveyor dealers page, Manufacturers in primary nav

## Changed
- New page `/resources/conveyor-manufacturers/used/`: 9 used conveyor sellers (8 dealers, 1 listing marketplace), alphabetical, with a where-to-look table by conveyor type, a new-versus-used table, an inspection table, a dealer RFQ checklist, sources, FAQ, and ItemList schema. No prices.
- `src/nav.ts`: `Manufacturers` is now a top-level section (header, sidenav, footer), placed before `Resources` because `sectionFor` takes the first prefix match. Its children are the three shortlists, the used page, and custom design.
- `MakerList.astro` takes an optional `buildsLabel` (default `Builds`). The used page passes `Sells`.
- Inbound links to the used page from the directory, the resources index, and the related lists on the supplier guide, cost guide, and gravity roller page. `tests/pages.ts` updated.
- 9 preview images added through `scripts/refresh-bookmarks.mjs` and reviewed.

## Verification
- Seller facts were read from each seller's own pages on 2026-10-11. Testing, guarantee, and sale terms are stated only where the seller states them.
- Build passes (114 pages). Full Playwright suite passes (527 tests).

## Open
- Demand basis is Ahrefs (about 4,450 US searches a month across the top 40 "used conveyor" terms, difficulty 0 to 1) plus Statera GSC ("used pallet conveyor", 732 impressions). This site had no used-intent impressions before the page. The SERP for "used conveyors" was not checked in Ahrefs.
- Frain Industries was left out: its about page now describes new equipment rental only. Machinio, EquipNet, Bid on Equipment, and Warehouse1 blocked automated fetches and were not verified, so they are not listed.
- `scripts/refresh-bookmarks.mjs` only finds cards written as `{ name: '...', url: '...'`. The three older shortlists put `best` between them, so the script no longer sees their URLs.
- Astro 7 `astro preview` now runs in the background, so the Playwright `webServer` command exits early. Tests ran against a preview started by hand with `reuseExistingServer: true`. Port 4322 was also taken by another project.
- Google reported the three Oct 5 shortlists as "URL is unknown to Google" on 2026-10-11. Request indexing in GSC.
