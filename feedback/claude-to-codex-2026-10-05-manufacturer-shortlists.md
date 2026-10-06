# 2026-10-05: Manufacturer shortlists, USWDS audit fixes, photos and video

## Changed
- Three new pages under `/resources/conveyor-manufacturers/`: `spiral/` (8 companies), `pneumatic/` (10), `buffering/` (9). Each has a comparison table, bookmark-style cards, design differences, RFQ checklist, sources, FAQ, and ItemList schema.
- `src/components/MakerList.astro` plus `.maker-*` styles in `src/styles/site.css`. Whole card is one tap target. Monogram tile hides under 40em.
- Lists are alphabetical with stated inclusion criteria. No rankings, no prices.
- Inbound links added from the directory, `src/nav.ts`, and the spiral, pneumatic, buffer, and accumulation type pages. `tests/pages.ts` updated.
- Target queries (GSC, Sep 6 to Oct 3): spiral manufacturer cluster 191 impressions, pneumatic 130, buffering 88, all at positions 57 to 81 with 0 clicks.

- Cards show a cached preview image per company (site social image, else a browser screenshot). `scripts/refresh-bookmarks.mjs` refreshes them into `public/img/bookmarks/` and `src/data/bookmarks.json`. Review images after any refresh.
- Titles, H1s, intros, and FAQs use "best" and "top" wording. Each company has a "Best for" label and each page has a pick-by-need table. Still no 1 to N ranking.
- Template (commit with a `[template]` tag): page header copy is flush left and lined up with the content column, the byline reads "Updated <date>. How we research.", the right-hand in-page nav shows only at 100em and wider, and the inline table of contents is a collapsed `details`.
- USWDS and WCAG audit fixes: sidebar now follows the article in DOM order, focus color is `secondary`, Menu button exposes `aria-expanded`, 28 page titles no longer print `&#x26;`, 44px tap targets, 68ex measure, 16px minimum text, new-tab notice on external links (`src/lib/enhance.ts`), directory table row headers, sort announcement, and a visible Clear filters button.

- Photos and video: 29 maker photos and 10 maker videos on the ten highest-impression guides (pneumatic, belting, spiral, buffer, reject systems, star wheel, guide rails, tray loading, bakery, singulation). Same pattern as palletizersystem.com: self-hosted in `public/img/photos/`, credited and linked to the maker. `scripts/media.mjs photo|video` adds one and prints the markup. Videos show a local thumbnail and load the YouTube player only on click.

## Verification
- Company facts were pulled from live manufacturer and owner pages on 2026-10-05 by research agents. Ownership is stated only where a primary source said it.
- Build passes (113 pages). Full Playwright suite passes (522 tests) against a local preview.

## Open
- Not done from the audit: moving about 50 hardcoded colors in `site.css` to theme tokens, and collapsing the long sidebar on phones.
- Photos are credited to the maker but no source page grants reuse rights (one photo is CC BY-SA from Wikimedia Commons). Same practice as lbarsealer.com and palletizersystem.com.
- The ten videos were checked by title, channel, and still frames, not watched end to end.
- About 100 pages still have no photo.
- `conveyor-types/pneumatic-conveyors` still cites NFPA 652 for dust hazard analysis. NFPA has folded 652 into NFPA 660.
- Directory entry for Span Tech should be checked: `spantechconveyors.com/conveyors/spiral-conveyors/` returns 404 (the directory links the homepage, so no broken link today).
- `package.json` moved to Astro 7.3.5 during this session from outside this work. Build ran on 7.3.5.
- Measure in GSC and SEO Gets 2 to 4 weeks after deploy before adding more list pages.
