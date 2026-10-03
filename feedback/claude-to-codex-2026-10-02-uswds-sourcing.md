# 2026-10-02: USWDS port and sourcing pass (deployed)

## Changed
- Template: Tailwind removed. USWDS docs layout (header, sidenav from `src/nav.ts`, breadcrumbs from BreadcrumbList schema, in-page nav, accordions, collections). Colors ported in `src/styles/theme.scss`.
- Dates: `src/lib/lastmod.mjs` reads the last git commit per page, ignoring commits tagged `[template]`. Feeds sitemap `lastmod`, the visible "Updated" line, and Article `dateModified`. Tag layout-only commits with `[template]`.
- `src/components/SpecChecklist.astro`: printable RFQ checklist.
- 26 pages: numbers sourced (inline link plus Sources section) or qualified. Diagrams on star-wheel, tray-loading, singulation, reject-systems.
- Errors fixed: belt pull friction (example was about 6x low), conveyor-safety cited ANSI B56.1 (forklifts) and misused OSHA Table O-10, motors page applied the fan cube law to conveyors, cleanroom cited a wiper standard, homepage speed formula, gravity slope, 50 broken card links on /conveyor-types/.
- Reject-systems title and meta rewritten for CTR. SEO Gets annotation logged 2026-10-02.

## Open
- VERIFY notes left (10): conveyor-types/index, mdr, reject-systems (2), motors-drives, metering, conveyor-engineering, pharma index, cleanroom.
- About 60 pages have titles over 60 chars or descriptions over 160. Not touched, to keep this release measurable.
- The other ~80 pages have not had the sourcing pass yet.
- Watch 2 to 4 weeks in GSC before the next template or title change.
