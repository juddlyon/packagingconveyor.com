# packagingconveyor.com

## What This Is

**Informational resource site** for industrial packaging conveyor systems. We are NOT a conveyor manufacturer, integrator, or supplier. We do not sell conveyors. We aggregate and present publicly available technical information to help buyers research conveyor systems.

**Phase 1 (current): pure content/SEO/LLM traffic grab.** Phase 2 (future): lead generation — capture buyer RFQs and connect them with conveyor companies.

- **98 pages** across 4 pillars: conveyor types (43), industries (18), functions (17), resources (18) + homepage
- **EMD SEO play**: 31 exact-match domains 301-redirect to relevant pages
- **Real addressable market**: ~1.2M impressions/mo (Ahrefs shows 82K but underreports B2B industrial terms by 10-50x per GSC cross-reference)

## Current Phase: PHASE 1 — Content Authority (3 months)

**Goal:** Rank for 50+ long-tail queries, build email list, prove traffic to future lead-buy partners.

**Strategy:**
- NO forms. No email capture. No lead gen. No promises about supplier matching. ZERO friction.
- Every page is a deep, genuine technical resource (2,000+ words, comparison tables, specs, pricing ranges)
- CTAs are internal links to other content (pricing guide, design guide, type pages)
- FAQ schemas on every page for Google featured snippets + LLM citation
- Internal linking with keyword-rich anchor text
- Structured data on everything (FAQPage, Article, BreadcrumbList, HowTo)
- Optimize for LLM consumption: clear factual content, answer-box style blocks, real data points

**What we DON'T do in Phase 1:**
- No forms of ANY kind (no RFQ wizard, no email capture, nothing)
- No "get matched with suppliers" language
- No lead selling (no partners, no legal framework yet)
- Zero friction — a 50-year-old packaging engineer should be able to get exactly what they need without clicking a single form field

**Phase 1 content priorities:**
1. P1 pages (23 highest-volume) — ship first
2. P2 pages (51 expansion) — ship second
3. P3 pages (23 authority/long-tail) — ship third
4. Every page: rich content, internal links, FAQ section, structured data

**Phase 1 success metrics:**
- Google Search Console impressions growth week-over-week
- Pages indexed in Google
- Rankings for target long-tail queries
- Time on site / pages per session (are engineers actually using this?)
- LLM citation checks (ask ChatGPT/Claude about conveyor topics, see if we appear)

## Phase 2 — Lead Generation (after traffic proof)

**Trigger:** Consistent organic traffic, 50+ ranking queries, proof-of-concept data to show conveyor companies.

**Before launch, need:**
- Lead buyer partners (conveyor manufacturers/integrators willing to pay per lead)
- Legal framework (lead selling agreement, privacy policy update, terms of service)
- FTC compliance review (can't promise "3 suppliers" unless we deliver)

**Phase 2 adds:**
- RFQ wizard re-enabled on hot pages (code already built, just needs re-integration)
- "Get matched with 3+ qualified suppliers" messaging returns
- Lead routing to partners
- Revenue tracking per lead

## Tech Stack

- **Framework:** Astro (SSG)
- **CSS:** Tailwind v4 (`@theme` directive for design tokens)
- **Content:** MDX content collections (planned), frontmatter carries SEO metadata
- **Deployment:** Netlify (auto-deploy from `main` branch)
- **Build:** `npm run build` → `dist/`
- **Design:** "Industrial Editorial" — Big Shoulders Display + Nunito Sans + IBM Plex Mono. 18px base font for 40+ buyer demographic.

## Key Files

- `ia-v2.md` — Full 98-page information architecture with URLs, H1s, keywords, content briefs, phased build order
- `IMAGE_LIST.md` — Running list of ~90 needed illustrations (prosource.org style reference)
- `_ref/data/` — Ahrefs keyword exports, competitor data, 4 GSC property exports (Benchmark, Kleenline, Shuttleworth, Statera)
- `src/components/RfqWizard.astro` — Lead gen wizard (Phase 2, code preserved but not active)
- `src/styles/global.css` — Full design system with theme tokens

## Infrastructure

- **GitHub:** github.com/juddlyon/packagingconveyor.com
- **Netlify:** app.netlify.com/projects/packagingconveyor (site ID: a8da54b6-05a2-441e-bb49-438adb218686)
- **Live URL:** https://packagingconveyor.com

## Content Page Requirements (Phase 1)

Every content page must have:
1. **2,000+ word** genuine technical content (not filler)
2. **Comparison table** or spec table where applicable
3. **FAQ section** (3-5 questions) with FAQPage schema markup
4. **Internal links** to related conveyor types, functions, and industries (keyword-rich anchor text)
5. **Structured data**: Article + BreadcrumbList + FAQPage at minimum
6. **CTAs**: Internal links only — pricing guide, related types, design guide (NO forms)
7. **Big, readable typography** — 40+ demographic, mobile-first, tappable

## CRITICAL: Content Accuracy Rules

**We are an informational resource, NOT a manufacturer.** Every claim must be defensible.

- **NO specific pricing.** Do not publish dollar amounts for conveyors. Pricing varies wildly by configuration, manufacturer, volume, and project scope. Saying "$5,000–$15,000" is irresponsible if we can't back it up. Instead: describe pricing *factors* (length, load, environment, motor type) and tell readers to get quotes from manufacturers.
- **NO specs we can't source.** Every quantitative claim (speed, load capacity, dimensions, throughput) must come from a verifiable manufacturer spec sheet, CEMA standard, or engineering reference. If we can't find a source, we don't publish the number.
- **Cite sources.** When referencing manufacturer data, name the manufacturer. When referencing standards, cite the CEMA standard number. This builds E-E-A-T and protects us legally.
- **Use ranges and qualifiers.** "Typically 50–200 FPM" with a source is fine. "Runs at 150 FPM" without context is not.
- **Flag uncertainty.** If a fact can't be verified from 2+ sources, add `<!-- VERIFY: [what needs checking] -->` in the HTML so it gets caught in review.
- **We aggregate public information.** We don't conduct original testing, we don't have lab data, we don't make performance claims. We compile, organize, and explain what manufacturers publish.
