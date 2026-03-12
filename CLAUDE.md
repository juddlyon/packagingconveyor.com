# packagingconveyor.com

## What This Is

Lead generation site for industrial packaging conveyor systems. Captures buyer RFQs and sells each lead to ~3 conveyor companies simultaneously (HomeAdvisor/Angi model for B2B industrial).

- **98 pages** across 4 pillars: conveyor types (43), industries (18), functions (17), resources (18) + homepage
- **EMD SEO play**: 31 exact-match domains 301-redirect to relevant pages
- **Real addressable market**: ~1.2M impressions/mo (Ahrefs shows 82K but underreports B2B industrial terms by 10-50x per GSC cross-reference)

## Tech Stack

- **Framework:** Astro (SSG)
- **CSS:** Tailwind
- **Content:** MDX content collections, frontmatter carries SEO metadata
- **Deployment:** Netlify (auto-deploy from `main` branch)
- **Build:** `npm run build` → `dist/`

## Key Files

- `ia-v2.md` — Full 98-page information architecture with URLs, H1s, keywords, content briefs, lead capture approach, phased build order
- `_ref/data/` — Ahrefs keyword exports, competitor data, 4 GSC property exports (Benchmark, Kleenline, Shuttleworth, Statera)
- `_ref/data/packagingconveyor_illustration_spec.md` — Visual style guide

## Infrastructure

- **GitHub:** github.com/juddlyon/packagingconveyor.com
- **Netlify:** app.netlify.com/projects/packagingconveyor (site ID: a8da54b6-05a2-441e-bb49-438adb218686)
- **Live URL:** https://packagingconveyor.com

## Build Phases

- **P0:** Homepage (1 page)
- **P1:** 23 pages — highest-volume + GSC-validated demand
- **P2:** 51 pages — expansion
- **P3:** 23 pages — authority/long-tail

## Lead Capture Model

Every page has a lead capture angle:
- **Hot pages** ($3+ CPC, transactional): Multi-step RFQ wizard → matched with 3 suppliers
- **Warm pages** (mid CPC): Sidebar/inline CTA → "Get matched with 3 suppliers"
- **Info pages** (educational): Gated content (PDF, calculators) → email capture → nurture
