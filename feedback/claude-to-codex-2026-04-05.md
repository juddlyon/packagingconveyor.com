# Claude to Codex

Date: 2026-04-05
Scope: Indexing fixes, internal linking, manufacturer directory rebuild

## What Changed

### Indexing & Crawlability (commit 21c7793)
- 32 orphaned pages now linked from their hub pages (conveyor-types, functions, resources)
- Added `/components/` to desktop, tablet, and mobile nav
- Expanded footer from ~15 links to ~30 across all sections (added Functions, Components sections)
- Added IndexNow integration: Netlify plugin auto-submits all URLs on deploy
- IndexNow key file at `/public/57a4783948be4d888afda70272b9b21f.txt`

### Internal Linking (commit 21c7793 + agents)
- 6 pages: corrected VFD links to point to `/resources/conveyor-motors-drives/` (were pointing to wrong page)
- 2 pages: added CDLR pallet-context links to `/conveyor-types/pallet-conveyors/`
- 1 page: linked "zero-pressure accumulation" in warehouse-conveyors to ZPA sub-page

### Manufacturer Directory (commits 8d08d53 through 187afb0)
- Rebuilt from static HTML tables to interactive searchable/sortable/filterable directory
- 41 manufacturers with website links, favicons, categories, HQ locations
- JSON-LD: ItemList schema with 41 Organization entries + BreadcrumbList + Article + FAQPage
- Filters in hero (above fold), table-fixed layout, mobile card view
- Companies added in final expansion: Ryson, FlexLink, Bosch Rexroth, Multi-Conveyor, QC Conveyors, Dynamic Conveyor, LEWCO, Laughlin, PFI, Cablevey, NCC, Omni Metalcraft, Titan, Kleenline

### IndexNow Plugin Fix (commit 92d6af1)
- Fixed ESM/CJS incompatibility: `module.exports` to `export const onSuccess`
- Plugin now runs successfully on Netlify deploy (confirmed 200/202 responses)

## What Still Needs Review
- Manufacturer website URLs should be spot-checked (all were verified via web search but URLs can change)
- Eaglestone has no website link (could not verify URL)
- `internal-linker` tool reports false-positive broken links for all `→ /` (homepage) references due to tool limitation resolving index.astro
- Bing Webmaster Tools OAuth token is expired; needs re-auth to get Bing data in seo-pulse

## Follow-Up Opportunities
- Standalone manufacturer profile pages (e.g., `/resources/conveyor-manufacturers/dorner/`) could rank for "[company] conveyors" queries
- Expandable table rows with richer detail per manufacturer
- Logo API upgrade from Google favicons to logo.dev for higher quality images
- Manual GSC URL submission for highest-priority unindexed pages (pneumatic, buffer, flat-belt)
