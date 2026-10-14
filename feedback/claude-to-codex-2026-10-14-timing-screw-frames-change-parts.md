# 2026-10-14: Timing screw, conveyor frames, change parts pages (consolidation)

## Why
GSC (56 days) showed queries landing on pages built for other topics: timing screws (~80 impr, pos 6-49), conveyor frames (~365 impr, pos 44-57), change parts and quick-change (~300 impr). Each topic already lived as a section on another page, so the new pages became the main page for each topic and the old sections were cut to summaries with links.

## Changed
- New `/conveyor-functions/infeed-outfeed/timing-screw/`. Star-wheel and infeed-outfeed timing screw and sync sections cut to summaries.
- New `/components/conveyor-frames/`. The design-guide components "Conveyor Frames" section was cut to one paragraph.
- New `/components/change-parts/`. Star-wheel changeover and quick-change sections and FAQs were shortened. The Nercon and Krones figures and the retrofit checklist moved to the new page.
- Nav, components hub cards, tests/pages.ts. Inbound links from guide-rails, conveyor-parts, flat-belt, indexing, slug-loading, infeed-outfeed.
- Header layout: hero pages drop the sidebar offset, and hero photos have rounded corners.

## Verification
- Build passes (117 pages), no broken internal links, Playwright 542 passed.

## Open
- The timing screw page reuses Septimatech photos (no usable alternative found). Septimatech concentration is now higher.
- Unsourced qualitative claims: 316 vs chlorides, caustic on aluminum, T-slot residue, acetal stiffer than UHMW, change parts machine table rows.
- Watch star-wheel rankings (best page) after the trim. If quick-change queries drop, restore a fuller quick-change section.
- Request indexing in GSC for the 3 new URLs.
