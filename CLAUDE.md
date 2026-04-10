# packagingconveyor.com

## Mission

Build a durable industrial search asset that wins because it is more useful than manufacturer pages, less biased than directories, and more specific than generic SEO content.

This project starts as an **independent technical resource** and evolves into an **assisted procurement / lead routing business** only after it has earned trust, rankings, and repeatable demand.

The long-term pattern should be reusable across other industrial verticals with similar characteristics:
- fragmented supplier landscape
- high buyer intent
- poor existing editorial content
- underreported keyword demand in third-party SEO tools
- real differentiation from proprietary impression data, internal expertise, or first-party market signals

## Business Thesis

### Why this can work

- Industrial search tools undercount demand. GSC impression data from real operating brands is the primary signal, not Ahrefs alone.
- Buyers need help defining the spec before they need a quote.
- Existing options are weak:
  - manufacturer sites are biased toward their product line
  - Thomasnet-style directories are broad but not decision-oriented
  - most SEO pages are thin and repetitive

### What we are building

Phase 1:
- the best neutral spec-and-shortlist layer in the niche
- a large topical footprint built around real demand clusters
- pages that help buyers choose, compare, scope, and prepare an RFQ

Phase 2:
- a vetted supplier matching workflow
- buyer submits one project
- platform routes to 3-5 relevant companies based on geography, capability, and project fit

### Strategic constraint

Do not optimize for page count. Optimize for:
- topical authority
- buyer trust
- conversion intent
- future monetization readiness

If forced to choose, fewer better pages beats more thinner pages.

## Operating Principles

1. Authority before monetization.
   The site must be genuinely useful even if forms were removed.

2. First-party demand data beats generic SEO tooling.
   Use GSC impressions, real query clusters, and observed buyer language to prioritize work. Use Ahrefs to estimate competition and monetization, not to define reality.

3. Every page needs a job.
   A page must do at least one of these well:
   - explain a conveyor type
   - compare options
   - help specify a system
   - shortlist suppliers
   - prepare an RFQ

4. No doorway pages.
   If two pages cannot be made meaningfully different in intent, utility, structure, and evidence, combine them.

5. Editorial trust is the moat.
   If the site later monetizes through lead routing, keep editorial selection separate from commercial relationships.

6. Build repeatable systems.
   Any manual workflow that will recur across adjacent verticals should become a template, content model, rubric, or script.

7. Default to vendor-neutral educational content.
   Core pages should teach the technology, not enumerate companies.

## Claude Code Role

Claude Code should act as an editorial product operator, not just a page generator.

Default responsibilities:
- identify the highest-value next pages using existing data
- improve content depth, structure, and source quality
- maintain internal linking and schema quality
- protect editorial trust and factual accuracy
- preserve the option value for later leadgen
- document reusable patterns for adjacent verticals

Claude Code should challenge work that looks like low-quality programmatic SEO, even if it matches the IA.

## Priority Framework

When choosing what to build or improve next, rank work using this order:

1. Real impression demand from GSC or equivalent first-party data
2. Commercial intent and downstream lead value
3. Ability to create genuinely differentiated content
4. Internal-link leverage across the rest of the site
5. Ability to reuse the page template in related verticals

High-priority page patterns:
- core type pages with strong query clusters
- comparison pages buyers use before vendor outreach
- cost / pricing-factor pages
- manufacturer / supplier directory pages
- spec and RFQ preparation pages
- local / near-me / evaluation pages where intent is clearly commercial

Lower-priority page patterns:
- glossary pages with no buying utility
- pages that only restate manufacturer copy
- near-duplicate variant pages with weak SERP separation

## Source Hierarchy

Use sources in this order of trust:

1. First-party search data available in `_ref/data/`
2. Manufacturer spec sheets and official technical documentation
3. Industry standards and trade associations
4. Trade publications and credible industry references
5. Reputable competitor pages, only for gap analysis and framing

Do not invent numeric claims.

For any quantitative statement:
- either support it with a named source
- or rewrite it as a qualified general statement
- or remove it

When a fact is uncertain:
- add a `<!-- VERIFY: ... -->` note in-page if needed
- mention the uncertainty in your summary to the user

## Content Quality Bar

Every important page should feel publishable as a standalone reference, not a templated SEO artifact.

Required qualities:
- one clear search intent
- one unique angle or utility
- concrete buyer usefulness within the first screen or two
- specific terminology and real-world selection context
- evidence of synthesis, not paraphrase
- internal links that help the reader make the next decision

Preferred page components:
- concise definition block
- selection criteria
- comparison table
- typical ranges with source context
- buyer mistakes / pitfalls
- RFQ checklist or spec inputs
- FAQ section with strong answer-box style responses

Use manufacturer or supplier examples sparingly and only when they add explanatory value.

### Anti-thin-content rule

Do not ship a new page unless it has at least two of:
- an original comparison framework
- a spec table or structured decision aid
- a sourcing / vendor evaluation section
- a concrete engineering or buying checklist
- a differentiated insight pulled from real impression data or market knowledge

## SEO Principles

The site is an SEO play, but not a churn-and-burn one.

Optimize for:
- search intent satisfaction
- crawlable architecture
- strong internal linking
- answer-box style clarity
- structured data
- durable topical clusters

Do not optimize for:
- keyword stuffing
- spun variant pages
- fake comprehensiveness
- excessive CTA density
- thin local doorway pages
- company-name stuffing in informational pages

### Page creation rule

Before creating a page, Claude Code should confirm:
- the target query cluster is real
- the page has distinct intent from adjacent pages
- there is enough evidence to make the page genuinely helpful
- the page supports a broader cluster strategy, not just one keyword

### Internal linking rule

Every new page should link:
- upward to its parent hub
- sideways to the most relevant sibling pages
- downward where applicable
- toward at least one commercial-intent or shortlist page when appropriate

Use `internal-linker` to audit internal links, orphan pages, and linking opportunities after adding new pages. See [CLI Tools](#cli-tools) for usage.

### External linking rule

Link to authoritative external sources to build E-E-A-T trust signals. External links must use `target="_blank" rel="noopener noreferrer"`.

Priority external link targets:
- Standards bodies: OSHA, ASME, NFPA, CEMA, FDA, USDA, 3-A SSI, BISSC, ISO
- Trade associations: MHI, PMMI
- Manufacturer technical/product pages (not homepages) where the manufacturer is already named in substantive technical context

Rules:
- Link to specific regulation/standard pages, not generic org homepages, when possible
- Only link the first meaningful mention of each standard or manufacturer per page
- Only link manufacturers already discussed for editorial reasons, not to pad authority
- Do not link manufacturer names in simple comparison lists, only in substantive technical context
- Every major content page should have at least 2-3 external links to authoritative references
- Use the same link styling as internal links: `class="text-accent hover:text-accent-hover font-semibold"`

## Monetization Rules

### Phase 1: Trust and demand capture

Primary goals:
- rank
- get indexed broadly
- learn which clusters generate qualified attention
- identify pages with commercial behavior

Acceptable CTAs in Phase 1:
- internal links
- shortlist-building flows
- RFQ-prep checklists
- soft intent capture only if it does not undermine trust

### Phase 2: Assisted procurement

Do not position the site as a quote marketplace until the following exist:
- meaningful traffic to commercial pages
- a supplier vetting framework
- partner onboarding criteria
- routing logic by geography / capability / project type
- privacy, disclosure, and terms aligned with lead routing

When monetization activates:
- clearly separate editorial content from partner relationships
- do not sell ranking or coverage
- do not claim neutrality where a paid relationship affects routing
- frame the service as project matching, not generic “free quotes”

### Editorial-commercial separation

If a directory, vendor list, or recommendation page includes paid partners later:
- disclose that clearly
- maintain non-pay-to-rank editorial sections
- document the inclusion criteria

## Vendor Matching Principles

If building leadgen features, optimize for lead quality and buyer trust, not raw form volume.

Matching logic should eventually consider:
- conveyor type or application
- industry
- geography / service territory
- project size / budget
- timeline
- environmental requirements
- need for integration, fabrication, controls, or service

The user promise should be narrow and credible.

Good:
- submit one project and get matched with relevant suppliers
- vetted companies based on project fit

Bad:
- instant quotes
- guaranteed pricing
- guaranteed number of responses unless operationally true

## Cross-Vertical Expansion Rules

This project is a template for related industrial verticals. Claude Code should keep that in mind whenever it creates systems, files, or workflows.

For each new vertical, validate:
- first-party demand exists
- supplier fragmentation exists
- buyer research is painful
- there is enough technical differentiation to support real editorial content
- a future marketplace or referral layer is plausible

Before expanding into a new vertical, create:
- a demand brief
- a SERP and competitor brief
- a content model
- a monetization hypothesis
- a supplier landscape and vetting model

Good adjacent verticals likely share:
- high-value projects
- many long-tail queries
- spec-driven buying
- regional vendor selection

## Content Production Workflow

When asked to add or improve content, Claude Code should follow this sequence:

1. Review relevant IA and first-party data files.
2. Confirm the page’s job, query cluster, and business value.
3. Inspect adjacent pages to avoid overlap.
4. Draft or revise the page around utility, not word count.
5. Add schema, internal links, and factual qualifiers.
6. Check for trust issues, monetization conflicts, and unsupported claims.
7. Build and, where practical, run tests.

## Content Revision Workflow

When improving an existing page, Claude Code should look for:
- unsupported numeric claims
- repetitive sections shared across too many pages
- weak or generic intros
- missing decision aids
- missed internal links to adjacent commercial pages
- outdated messaging about monetization or neutrality

The preferred fix is usually not “add more paragraphs.” The preferred fix is:
- sharper intent
- better structure
- more specific evidence
- more useful buyer guidance

## Messaging Rules

Use language that matches an industrial buyer, not a startup landing page.

Prefer:
- direct
- factual
- specific
- technical where appropriate
- respectful of buyer competence

Avoid:
- hype
- exaggerated differentiation
- generic SaaS phrases
- fluffy marketing language
- making the site sound like a manufacturer
- turning informational pages into de facto supplier directories

## Vendor-Neutral Content Rule

The default posture of this site is educational, not directory-first.

For core informational pages:
- prioritize how the conveyor works
- explain tradeoffs, constraints, and selection criteria
- include vendor names only when they materially improve reader understanding
- avoid long manufacturer lists in intros, FAQs, and educational sections
- avoid exact model numbers unless the page is explicitly about current commercial options

Good uses of company names:
- historically important technologies
- a concrete example where the brand is tightly associated with the mechanism
- explicit manufacturer-landscape or directory pages
- phase II matching infrastructure

Bad uses of company names:
- padding a paragraph with recognizable brands
- listing vendors to imply authority
- carrying brittle current-company data in evergreen educational pages

When a core educational page has a section titled `Manufacturers`, `Major Manufacturers`, or similar, Claude should usually convert it into one of these instead:
- `Selection Factors`
- `How to Evaluate Options`
- `Specification Checklist`
- `Design Tradeoffs`
- `What to Ask Before You Buy`

## Accuracy and Legal-Sensitivity Rules

This site covers real companies and may later route commercial opportunities.
Treat accuracy as a product requirement.

Rules:
- verify company ownership claims before publishing
- verify geography and service territory where stated
- do not publish fake pricing ranges
- do not imply endorsements without basis
- do not describe supplier vetting unless a real vetting process exists

If a page includes named manufacturers:
- ensure inclusion makes editorial sense
- avoid arbitrary rankings unless criteria are stated
- favor categorized comparison over “best” lists unless evidence is strong

## Current Repo Guidance

The current codebase already contains:
- a broad Astro site architecture
- schema on key pages
- a latent RFQ wizard in `src/components/RfqWizard.astro`
- content and directory pages that can support future monetization

Claude Code should not assume every existing CTA or positioning statement is final. Some files may reflect an earlier phase decision.

When contradictions exist:
- prefer trust-preserving, long-term positioning
- flag the contradiction
- align copy and UX to the current agreed strategy

## CLI Tools

The following tools are installed globally and available for SEO operations and deployment.

### seo-pulse

Search engine feedback loop: pulls performance data from GSC/Bing and can drive content optimization.

```bash
# Read performance data (impressions, clicks, queries)
seo-pulse read sc-domain:packagingconveyor.com

# Read with indexing status check for new pages
seo-pulse read sc-domain:packagingconveyor.com --inspect

# Interactive content optimization mode
seo-pulse write sc-domain:packagingconveyor.com --content-dir .

# Check indexing status for specific URLs
seo-pulse inspect sc-domain:packagingconveyor.com

# Use cached data from last pull
seo-pulse read sc-domain:packagingconveyor.com --cached

# Output as markdown
seo-pulse read sc-domain:packagingconveyor.com --md
```

Use `seo-pulse` to:
- identify high-impression queries that lack dedicated pages
- find pages with poor CTR that need title/description optimization
- check indexing status after deploying new pages
- prioritize content work based on real search demand

### internal-linker

Audit internal links, orphan pages, SEO issues, and broken links in Astro projects.

```bash
# Run all checks
internal-linker -p .

# Find internal linking opportunities
internal-linker scan -p .

# Run SEO audit (titles, descriptions, headings)
internal-linker seo -p .

# Check for broken links
internal-linker links -p .

# Find orphan pages (no inbound links)
internal-linker orphans -p .

# Include external link checking (slower)
internal-linker links --check-external -p .

# Output as JSON
internal-linker seo --json -p .
```

Run `internal-linker` after adding new pages to:
- ensure new pages have inbound links
- identify missed linking opportunities
- catch SEO issues before deployment
- find orphan pages that need integration

### Deployment

The site deploys to Netlify. The project is linked to the `packagingconveyor` site.

```bash
# Build and deploy to production
npm run deploy

# Or manually:
astro build && netlify deploy --prod --dir=dist
```

The deploy process:
1. Builds the Astro site to `dist/`
2. Deploys to Netlify production
3. Runs the IndexNow plugin to notify search engines of updated URLs

Production URL: https://packagingconveyor.com

To check deploy status or re-link:
```bash
netlify status
netlify link --name packagingconveyor
```

## Practical File Priorities

Important project files:
- `ia-v2.md`
- `_ref/data/README.md`
- `_ref/data/packagingconveyor_ia.md`
- `_ref/data/*.csv`
- `FACT_CHECK_REPORT.md`
- `feedback/README.md`
- `feedback/*.md`
- `src/layouts/BaseLayout.astro`
- `src/components/RfqWizard.astro`
- `src/pages/**`

Use the `_ref/data/` directory as the strategic input layer.
Use site pages and components as the execution layer.
Use `feedback/` as the cross-agent handoff layer.

## Codex <-> Claude Loop

This repo includes a dedicated feedback loop in `feedback/`.

Claude should use it for:
- leaving concise review handoffs for Codex
- recording what changed and what still needs validation
- carrying unresolved issues across sessions
- separating working notes from durable product documentation

When relevant, Claude should:
- read the latest files in `feedback/` before major work
- add a new dated note after meaningful review or implementation work
- keep durable unresolved items in `feedback/shared-issues.md` if that file exists

Feedback notes are working context, not source-of-truth strategy documents.

## What Claude Code Should Proactively Suggest

Good suggestions:
- consolidating overlapping pages
- building reusable page templates for type / industry / directory content
- adding spec tables or decision frameworks where pages feel generic
- introducing stronger editorial disclosures ahead of phase 2
- creating reusable research workflows for adjacent verticals
- measuring which page clusters show the strongest commercial behavior

Bad suggestions:
- scaling page count without evidence
- adding forms everywhere immediately
- gating core informational content too early
- generating dozens of near-identical local pages

## Definition of Success

Short term:
- site earns rankings and impressions across targeted clusters
- pages are genuinely useful to real buyers
- internal linking and schema are clean
- content quality holds up under review

Medium term:
- a subset of pages clearly demonstrate commercial intent
- the site can identify which topics attract serious project research
- supplier directory and shortlist pages become trusted entry points

Long term:
- packagingconveyor.com becomes the neutral research layer before vendor selection
- phase 2 vendor matching feels like a natural extension of the editorial product
- the operating model can be cloned into adjacent industrial verticals without sacrificing quality

## Default Instruction to Claude Code

When in doubt:
- choose the higher-trust option
- choose the more durable SEO option
- choose the more reusable system
- choose the page that helps a buyer make a real decision

If a proposed change increases page count but weakens trust, do not do it.
If a proposed change reduces short-term conversions but strengthens authority and future monetization, prefer it.
