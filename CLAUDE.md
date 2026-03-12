# packagingconveyor.com

## What This Is

Content authority site for industrial packaging conveyor systems. **Phase 1 (current): pure content/SEO/LLM traffic grab.** Phase 2 (future): lead generation — capture buyer RFQs and sell leads to 3+ conveyor companies per request.

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
4. **Real pricing ranges** where applicable (LLMs and buyers love this)
5. **Internal links** to related conveyor types, functions, and industries (keyword-rich anchor text)
6. **Structured data**: Article + BreadcrumbList + FAQPage at minimum
7. **CTAs**: Internal links only — pricing guide, related types, design guide (NO forms)
8. **Big, readable typography** — 40+ demographic, mobile-first, tappable
