# PackagingConveyor.com — Information Architecture v2

Consolidated IA document. 98 pages across 5 pillars.
Last updated: 2026-03-12

---

## Table of Contents

1. [Business Model](#business-model)
2. [Tech Stack](#tech-stack)
3. [Page Entry Format](#page-entry-format)
4. [Site Map](#site-map)
   - [Homepage](#homepage-1-page)
   - [Conveyor Types Pillar](#conveyor-types-pillar-43-pages)
   - [Industries Pillar](#industries-pillar-18-pages)
   - [Conveyor Functions Pillar](#conveyor-functions-pillar-17-pages)
   - [Resources Pillar](#resources-pillar-18-pages)
5. [EMD Domain Redirect Map](#emd-domain-redirect-map)
6. [Phased Build Order](#phased-build-order)
7. [Lead Capture Strategy](#lead-capture-strategy)
8. [Schema Markup Plan](#schema-markup-plan)
9. [Internal Linking Strategy](#internal-linking-strategy)

---

## Business Model

**Lead generation site.** The site captures buyer RFQs through forms on every page and sells each lead to ~3 conveyor companies simultaneously (HomeAdvisor/Angi model for B2B industrial).

**Value prop to the buyer:** "Tell us what you need, get matched with 3 qualified conveyor suppliers who'll compete for your business."

**Value prop to conveyor companies:** "We deliver pre-qualified conveyor buyer leads directly to your inbox. You only compete with 2 other suppliers per lead."

Every page must have a lead capture angle:
- **Hot lead pages** get prominent multi-step forms
- **Warm pages** get sidebar/inline CTAs
- **Info pages** get gated content (PDF downloads, calculators) that capture email

---

## Tech Stack

- **Framework:** Astro + Tailwind CSS
- **Content:** MDX content collections; frontmatter carries SEO metadata
- **Output:** SSG (static), deployed to Netlify
- **Lead capture:** Multi-step RFQ wizard forms
- **Directory:** Filterable manufacturer directory
- **Schema markup:** Product, FAQ, BreadcrumbList, LocalBusiness

---

## Page Entry Format

Each page entry includes:

| Field | Description |
|-------|-------------|
| URL | Slug |
| H1 | Page heading |
| Type | Homepage / Category / Hub / Sub-page |
| Pillar | home / types / industries / functions / resources |
| Phase | P0 / P1 / P2 / P3 |
| Keywords | Primary keywords with volume, KD, CPC (Ahrefs) and GSC impressions where available |
| Content brief | 2-3 sentences |
| Lead capture | Form type and CTA |
| Internal links | Parent + children |

---

## Site Map

### Homepage (1 page)

---

#### Page 1: `/`

- **H1:** Packaging Conveyor Systems | Find the Right Conveyor for Your Line
- **Type:** Homepage
- **Pillar:** home
- **Phase:** P0
- **Keywords:** packaging conveyor (4,830 vol, KD 5, $2.30 CPC), conveyor systems (3,600 vol, KD 19)
- **Brief:** Hub landing page. Conveyor type selector tool. Hero: "Get matched with 3 conveyor suppliers." Below fold: conveyor type grid, industry cards, function selector, featured directory CTA.
- **Lead capture:** Primary hero form — multi-step RFQ wizard ("What type of conveyor? What industry? What's your timeline?") → matched with 3 suppliers.
- **Internal links:**
  - Parent: none
  - Children: `/conveyor-types/`, `/industries/`, `/conveyor-functions/`, `/resources/`

---

### Conveyor Types Pillar (43 pages)

---

#### Page 2: `/conveyor-types/`

- **H1:** Types of Conveyors: Complete Guide to Packaging Conveyor Systems
- **Type:** Category
- **Pillar:** types
- **Phase:** P1
- **Keywords:** types of conveyors (200 vol, KD 0), types of conveyor systems (250 vol, KD 16), conveyor types (200 vol, KD 0)
- **Brief:** Visual grid/matrix of all conveyor types with thumbnail, key specs, "best for" tags. Interactive filter by product type, weight, environment, industry.
- **Lead capture:** Conveyor type quiz → "Not sure which type? Tell us your application" → 3-supplier match.
- **Internal links:**
  - Parent: `/`
  - Children: all type hub pages

---

#### Page 3: `/conveyor-types/roller-conveyors/`

- **H1:** Roller Conveyors: Types, Applications & Specifications
- **Type:** Hub
- **Pillar:** types
- **Phase:** P1
- **Keywords:** roller conveyor (14,180 vol, KD 1, $2.95 CPC)
- **Brief:** Comprehensive guide to roller types (gravity, powered, live, MDR). Comparison table by load capacity, speed, application.
- **Lead capture:** "Get roller conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: `gravity/`, `powered/`

---

#### Page 4: `/conveyor-types/roller-conveyors/gravity/`

- **H1:** Gravity Roller Conveyors
- **Type:** Sub-page
- **Pillar:** types
- **Phase:** P1
- **Keywords:** gravity roller conveyor (2,950 vol, KD 0, $2.50 CPC)
- **Brief:** Unpowered gravity roller systems. Selection by product weight, decline angle.
- **Lead capture:** Supplier directory link
- **Internal links:**
  - Parent: `/conveyor-types/roller-conveyors/`
  - Children: none

---

#### Page 5: `/conveyor-types/roller-conveyors/powered/`

- **H1:** Powered & Live Roller Conveyors
- **Type:** Sub-page
- **Pillar:** types
- **Phase:** P1
- **Keywords:** powered roller conveyor (1,200 vol, KD 0, $4.40 CPC)
- **Brief:** Powered roller, live roller, MDR systems. Zone-controlled accumulation.
- **Lead capture:** "Configure your powered roller system — get 3 quotes"
- **Internal links:**
  - Parent: `/conveyor-types/roller-conveyors/`
  - Children: none

---

#### Page 6: `/conveyor-types/accumulation-conveyors/`

- **H1:** Accumulation Conveyors: Zero-Pressure & Minimum-Pressure
- **Type:** Hub
- **Pillar:** types
- **Phase:** P1
- **Keywords:** accumulation conveyor (2,030 vol, KD 0, $1.96 CPC). GSC: 12,721 imp (Shuttleworth), 5,338 imp (Kleenline). Additional sections for "buffer conveyor" (6,312 GSC imp), "minimum pressure accumulation" (2,405 GSC imp), "low pressure accumulation" (1,708 GSC imp).
- **Brief:** Zero-pressure, minimum-pressure, slug-mode accumulation. How it solves packaging line bottlenecks. Buffer capacity calculator.
- **Lead capture:** "Size your accumulation system — get 3 quotes"
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 7: `/conveyor-types/transfer-conveyors/`

- **H1:** Transfer Conveyors: Right-Angle, 90° & Multi-Directional
- **Type:** Hub
- **Pillar:** types
- **Phase:** P1
- **Keywords:** transfer conveyor (3,410 vol, KD 0, $1.88 CPC)
- **Brief:** All transfer methods: pop-up, right-angle, turntable, push diverter. Comparison matrix.
- **Lead capture:** Supplier matching by transfer type
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: `shuttle/`, `bump-turn/`, `pivot/`

---

#### Page 8: `/conveyor-types/cdlr-conveyors/`

- **H1:** CDLR: Chain Driven Live Roller Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P1
- **Keywords:** cdlr conveyor (350 vol, KD 0, $1.28 CPC). GSC: cdlr pallet conveyor 420 imp.
- **Brief:** How CDLR works, when to use vs MDR or belt. Heavy-duty pallet/case handling.
- **Lead capture:** Quote request → 3 suppliers
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 9: `/conveyor-types/mdr-conveyors/`

- **H1:** MDR: Motor Driven Roller Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P1
- **Keywords:** mdr conveyor (350 vol, KD 0, $1.60 CPC), motorized conveyor (150 vol, KD 1, $5.58 CPC). GSC: mdr conveyors 1,919 imp, mdr pallet conveyor 1,293 imp.
- **Brief:** MDR technology, zone control, 24VDC systems. The modern standard for packaging accumulation. MDR vs line-shaft vs belt-driven comparison.
- **Lead capture:** "Get MDR conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 10: `/conveyor-types/live-roller-conveyors/`

- **H1:** Live Roller Conveyor Systems
- **Type:** Hub
- **Pillar:** types
- **Phase:** P1
- **Keywords:** live roller conveyor (300 vol, KD 0, $6.00 CPC!), belt driven live roller (200 vol, KD 0), line shaft conveyor (80 vol, KD 0, $3.50 CPC). Highest CPC terms in the entire dataset.
- **Brief:** Belt-driven live roller, line-shaft, chain-driven live roller comparison. Zone control, accumulation capability.
- **Lead capture:** "Get live roller quotes from 3 suppliers" — premium lead form given $6+ CPC
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 11: `/conveyor-types/vertical-reciprocating/`

- **H1:** Vertical Reciprocating Conveyors (VRCs)
- **Type:** Hub
- **Pillar:** types
- **Phase:** P1
- **Keywords:** vertical reciprocating conveyor (900 vol, KD 1, $1.60 CPC), vertical conveyor (500 vol, KD 2). GSC: vertical lift conveyor 473 imp.
- **Brief:** VRC types, load capacities, safety codes. vs freight elevator vs spiral comparison.
- **Lead capture:** "Get VRC quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 12: `/conveyor-types/chain-conveyors/`

- **H1:** Chain Conveyors: Drag Chain, Slat Chain & Overhead
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** chain conveyor (9,190 vol, KD 2, $1.81 CPC)
- **Brief:** Chain-driven types overview. Drag chain, slat chain, overhead.
- **Lead capture:** Directory of chain conveyor manufacturers
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: `overhead/`, `/conveyor-types/drag-chain-conveyors/`

---

#### Page 13: `/conveyor-types/chain-conveyors/overhead/`

- **H1:** Overhead Conveyor Systems
- **Type:** Sub-page
- **Pillar:** types
- **Phase:** P2
- **Keywords:** overhead conveyor (3,060 vol, KD 3, $1.90 CPC)
- **Brief:** Monorail and power-and-free systems for paint lines, assembly, cooling.
- **Lead capture:** "Get overhead conveyor quotes"
- **Internal links:**
  - Parent: `/conveyor-types/chain-conveyors/`
  - Children: none

---

#### Page 14: `/conveyor-types/drag-chain-conveyors/`

- **H1:** Drag Chain & Tubular Drag Conveyors
- **Type:** Sub-page (under chain-conveyors)
- **Pillar:** types
- **Phase:** P2
- **Keywords:** drag chain conveyor (500 vol, KD 0, $1.70 CPC), tubular drag conveyor (150 vol, KD 1, $3.00 CPC)
- **Brief:** Drag chain for bulk/harsh environments. Tubular drag for food-grade enclosed conveying.
- **Lead capture:** Quote request → 3 suppliers
- **Internal links:**
  - Parent: `/conveyor-types/chain-conveyors/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 15: `/conveyor-types/spiral-conveyors/`

- **H1:** Spiral & Vertical Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** spiral conveyor (4,620 vol, KD 5, $2.04 CPC)
- **Brief:** Spiral conveyors for elevation changes. Spiral vs incline vs VRC comparison.
- **Lead capture:** Supplier matching
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 16: `/conveyor-types/diverting-merging/`

- **H1:** Diverting & Merging Conveyors for Packaging Lines
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** diverting conveyor (2,270 vol, KD 0, $2.15 CPC). GSC: conveyor diverter 5,060 imp (19 clicks), diverting conveyor 4,278 imp, diverter conveyor 3,482 imp (38 clicks).
- **Brief:** Split and combine product flows. Diverter types, merging strategies, laning, singulation.
- **Lead capture:** "Design your diverting/merging solution — get 3 quotes"
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: `sortation/`

---

#### Page 17: `/conveyor-types/diverting-merging/sortation/`

- **H1:** Conveyor Sortation Systems
- **Type:** Sub-page
- **Pillar:** types
- **Phase:** P2
- **Keywords:** sortation conveyor (2,500 vol, KD 0, $2.17 CPC)
- **Brief:** High-speed sortation: cross-belt, tilt-tray, sliding shoe.
- **Lead capture:** "Get sortation system quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-types/diverting-merging/`
  - Children: none

---

#### Page 18: `/conveyor-types/flexible-conveyors/`

- **H1:** Flexible & Expandable Conveyor Systems
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** flexible conveyor (2,760 vol, KD 3, $2.73 CPC)
- **Brief:** Portable roller/skatewheel for loading docks. Gravity flex vs powered flex.
- **Lead capture:** Supplier directory
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 19: `/conveyor-types/screw-conveyors/`

- **H1:** Screw Conveyors: Types, Design & Engineering Guide
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** screw conveyor (2,300 vol, KD 8, $1.58 CPC)
- **Brief:** Screw types, flight designs, trough configs. PDF lead magnet.
- **Lead capture:** PDF download gate + "Get screw conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 20: `/conveyor-types/bucket-elevators/`

- **H1:** Bucket Elevators & Bucket Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** bucket elevator (1,250 vol, KD 1, $1.70 CPC)
- **Brief:** Vertical bulk elevation. Capacity sizing by material density.
- **Lead capture:** Quote request → 3 suppliers
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 21: `/conveyor-types/flat-belt-conveyors/`

- **H1:** Flat Belt & Slider Bed Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** flat belt conveyor (850 vol, KD 0, $2.53 CPC)
- **Brief:** Horizontal transport on flat belt over slider bed. Light-duty packaging, inspection, label application.
- **Lead capture:** Supplier matching
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 22: `/conveyor-types/cleated-conveyors/`

- **H1:** Cleated Belt Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** cleated conveyor (650 vol, KD 0, $1.55 CPC)
- **Brief:** Cleats/flights for incline transport and product separation.
- **Lead capture:** Quote request → 3 suppliers
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 23: `/conveyor-types/wire-mesh-conveyors/`

- **H1:** Wire Mesh Belt Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** wire mesh conveyor (300 vol, KD 0, $1.93 CPC)
- **Brief:** Open-mesh for cooling, drying, washing, oven. Temperature and airflow ratings.
- **Lead capture:** "Get food processing conveyor quotes"
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 24: `/conveyor-types/hinged-steel-belt/`

- **H1:** Hinged Steel Belt Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** hinged steel belt conveyor (200 vol, KD 0, $1.50 CPC)
- **Brief:** Heavy-duty metal belt for chip/scrap removal, stamping, harsh environments.
- **Lead capture:** Supplier directory
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 25: `/conveyor-types/trough-conveyors/`

- **H1:** Trough Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** trough conveyor (280 vol, KD 0, $2.50 CPC). GSC: 8,129 imp (Kleenline) — Ahrefs underreports 33x!
- **Brief:** Troughed belt for bulk material handling. Trough angles, idler configs.
- **Lead capture:** Quote request → 3 suppliers
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 26: `/conveyor-types/vibratory-conveyors/`

- **H1:** Vibratory Conveyors, Feeders & Hoppers
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** vibratory conveyor (1,910 vol, KD 3, $1.38 CPC). GSC: 4,480 imp (Benchmark).
- **Brief:** Vibratory conveyor + feeder + hopper. Orientation, singulation, metering.
- **Lead capture:** "Get feeder system quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 27: `/conveyor-types/tabletop-conveyors/`

- **H1:** Tabletop Chain & Mat Top Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** tabletop conveyor (690 vol, KD 0, $1.66 CPC). GSC: mat chain 3,947 imp, table top chain conveyor 3,724 imp.
- **Brief:** Low-profile for bottles, cans, cartons. Sanitary versions for dairy/beverage.
- **Lead capture:** Supplier directory
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 28: `/conveyor-types/pneumatic-conveyors/`

- **H1:** Pneumatic Conveyor Systems
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** pneumatic conveyor (500 vol, KD 1, $2.00 CPC), pneumatic vacuum conveyor (150 vol, KD 1, $3.50 CPC)
- **Brief:** Dense phase, dilute phase, vacuum pneumatic. For powders, granules, bulk.
- **Lead capture:** "Get pneumatic conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 29: `/conveyor-types/vacuum-conveyors/`

- **H1:** Vacuum Conveyor Systems
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** vacuum conveyor (600 vol, KD 1, $1.90 CPC), vacuum conveyor for powder (70 vol, KD 1, $4.50 CPC)
- **Brief:** Vacuum conveying for pharmaceutical powders, food ingredients, fine materials.
- **Lead capture:** Quote form → 3 suppliers
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 30: `/conveyor-types/slat-conveyors/`

- **H1:** Slat Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** slat conveyor (500 vol, KD 1, $1.70 CPC)
- **Brief:** Heavy-duty slat conveyors for hot, heavy, or abrasive products. Automotive and industrial.
- **Lead capture:** Supplier matching
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 31: `/conveyor-types/telescopic-conveyors/`

- **H1:** Telescopic & Extendable Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** telescopic conveyor (350 vol, KD 3, $3.50 CPC), telescoping conveyor (250 vol, KD 1, $4.00 CPC)
- **Brief:** Loading dock automation. Telescopic belt and roller for truck loading/unloading.
- **Lead capture:** "Get telescopic conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 32: `/conveyor-types/stainless-steel-conveyors/`

- **H1:** Stainless Steel Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** stainless steel conveyor (400 vol, KD 0, $0.90 CPC), stainless steel auger conveyor (60 vol, KD 0, $3.24 CPC)
- **Brief:** Material-focused page. SS 304 vs 316 selection. Cross-links to food, pharma, sanitary pages.
- **Lead capture:** "Get stainless steel conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 33: `/conveyor-types/activated-roller-belt/`

- **H1:** Activated Roller Belt (ARB) Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** GSC: activated roller belt sorter 2,159 imp, arb conveyors 926 imp, activated roller belt conveyor 571 imp. Ahrefs: minimal data (blind spot).
- **Brief:** ARB technology for high-speed, gentle sortation and diverting. Omni-directional product routing.
- **Lead capture:** "Get ARB conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 34: `/conveyor-types/flighted-scoop-conveyors/`

- **H1:** Flighted & Scoop Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** GSC: flighted conveyor 1,449 imp, flight conveyor 1,281 imp, scoop flight 1,034 imp. Ahrefs blind spot.
- **Brief:** Flighted belt and scoop conveyors for elevating individual products, bulk portioning.
- **Lead capture:** Quote request → 3 suppliers
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 35: `/conveyor-types/vertical-lift/`

- **H1:** Vertical Lift & Box Elevator Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P2
- **Keywords:** GSC: box elevator conveyor 990 imp, vertical lift conveyor 473 imp. Combined with VRC page or standalone.
- **Brief:** Continuous vertical lifts and case/box elevators for mezzanine transitions.
- **Lead capture:** Quote request → 3 suppliers
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 36: `/conveyor-types/transfer-conveyors/shuttle/`

- **H1:** Shuttle & Reciprocating Conveyors
- **Type:** Sub-page
- **Pillar:** types
- **Phase:** P2
- **Keywords:** shuttle conveyor (600 vol, KD 0, $1.60 CPC). GSC: shuttle conveyor 4,794 imp, reciprocating conveyor 2,598 imp (11 clicks).
- **Brief:** Reciprocating and shuttle transfer for multi-lane distribution and palletizing.
- **Lead capture:** Supplier matching
- **Internal links:**
  - Parent: `/conveyor-types/transfer-conveyors/`
  - Children: none

---

#### Page 37: `/conveyor-types/incline-conveyors/`

- **H1:** Incline & Decline Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P3
- **Keywords:** incline conveyor (1,460 vol, KD 0, $1.84 CPC)
- **Brief:** Incline belts, z-frame, noseover. Comparison vs bucket elevator vs spiral.
- **Lead capture:** Supplier matching
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 38: `/conveyor-types/modular-conveyors/`

- **H1:** Modular Conveyor Systems
- **Type:** Hub
- **Pillar:** types
- **Phase:** P3
- **Keywords:** modular conveyor (740 vol, KD 4, $1.93 CPC)
- **Brief:** Modular plastic belt and aluminum frame. Reconfigurable, easy sanitation.
- **Lead capture:** Directory + quote form
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 39: `/conveyor-types/curved-conveyors/`

- **H1:** Curved Belt Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P3
- **Keywords:** curved conveyor (200 vol, KD 0, $1.50 CPC)
- **Brief:** Belt and roller with curved sections. Curve radii, belt tracking, tapered rollers.
- **Lead capture:** Link to design guide
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none

---

#### Page 40: `/conveyor-types/magnetic-conveyors/`

- **H1:** Magnetic Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P3
- **Keywords:** magnetic conveyor (350 vol, KD 0, $1.30 CPC)
- **Brief:** Magnetic conveyors for metal cans, lids, parts handling. Incline and vertical capability.
- **Lead capture:** Supplier directory
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 41: `/conveyor-types/portable-conveyors/`

- **H1:** Portable & Mobile Conveyor Systems
- **Type:** Hub
- **Pillar:** types
- **Phase:** P3
- **Keywords:** portable conveyor (300 vol, KD 0, $1.30 CPC), mobile conveyor (150 vol, KD 0, $1.50 CPC)
- **Brief:** Portable conveyors for temporary lines, seasonal operations, loading docks.
- **Lead capture:** Supplier matching
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 42: `/conveyor-types/monorail-power-free/`

- **H1:** Monorail & Power-and-Free Conveyor Systems
- **Type:** Sub-page (under chain or overhead)
- **Pillar:** types
- **Phase:** P3
- **Keywords:** power and free conveyor (250 vol, KD 0, $1.10 CPC), monorail conveyor (100 vol, KD 0, $2.00 CPC)
- **Brief:** Overhead monorail and power-and-free for paint lines, assembly, automotive.
- **Lead capture:** Quote form → 3 suppliers
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 43: `/conveyor-types/serpentine-conveyors/`

- **H1:** Serpentine Conveyors
- **Type:** Hub
- **Pillar:** types
- **Phase:** P3
- **Keywords:** GSC: serpentine conveyor 1,309 imp, serpentine conveyors 1,100 imp. Ahrefs blind spot.
- **Brief:** Serpentine/S-curve conveyors for accumulation, cooling, drying in compact footprint.
- **Lead capture:** Supplier matching
- **Internal links:**
  - Parent: `/conveyor-types/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 44: `/conveyor-types/transfer-conveyors/bump-turn/`

- **H1:** Bump Turn Conveyors
- **Type:** Sub-page
- **Pillar:** types
- **Phase:** P3
- **Keywords:** GSC: bump turn conveyor 851 imp (10 clicks, pos 7.7). Already ranking!
- **Brief:** Bump turn technology for 90° product rotation on conveyor lines.
- **Lead capture:** Supplier matching
- **Internal links:**
  - Parent: `/conveyor-types/transfer-conveyors/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 45: `/conveyor-types/transfer-conveyors/pivot/`

- **H1:** Pivot Conveyors
- **Type:** Sub-page
- **Pillar:** types
- **Phase:** P3
- **Keywords:** GSC: pivot conveyor 1,369 imp (pos 25.5)
- **Brief:** Pivot-style conveyor sections for routing product flow between lines.
- **Lead capture:** Supplier matching
- **Internal links:**
  - Parent: `/conveyor-types/transfer-conveyors/`
  - Children: none
- **Note:** NEW — GSC discovery

---

### Industries Pillar (18 pages)

---

#### Page 46: `/industries/`

- **H1:** Conveyor Systems by Industry: Food, Packaging, Pharma & More
- **Type:** Category
- **Pillar:** industries
- **Phase:** P1
- **Keywords:** industry conveyor (550 vol, KD 12, $1.10 CPC)
- **Brief:** Industry selector. Cards for each vertical with relevant conveyor types, certifications, links.
- **Lead capture:** Industry-specific lead form routing
- **Internal links:**
  - Parent: `/`
  - Children: all industry hub pages

---

#### Page 47: `/industries/food-conveyors/`

- **H1:** Food-Grade Conveyor Systems: Sanitary, Washdown & USDA
- **Type:** Hub
- **Pillar:** industries
- **Phase:** P1
- **Keywords:** food conveyor (4,330 vol, KD 2, $2.22 CPC). GSC: food conveyor system 3,161 imp, food packaging conveyor 3,049 imp.
- **Brief:** Sanitary standards (USDA, 3-A, BISSC). Material selection. Target: food plant engineers.
- **Lead capture:** "Get matched with 3 food conveyor specialists"
- **Internal links:**
  - Parent: `/industries/`
  - Children: `sanitary/`, `bakery/`, `cooling/`, `beverage/`

---

#### Page 48: `/industries/food-conveyors/sanitary/`

- **H1:** Sanitary & Washdown Conveyors
- **Type:** Sub-page
- **Pillar:** industries
- **Phase:** P1
- **Keywords:** sanitary conveyor (1,800 vol, KD 2, $2.50 CPC). GSC: sanitary conveyors 3,927 imp, wash down conveyor 2,710 imp, washdown conveyor 2,485 imp.
- **Brief:** Washdown-rated conveyors. IP ratings, CIP/COP, belt materials.
- **Lead capture:** "Get sanitary conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/industries/food-conveyors/`
  - Children: none

---

#### Page 49: `/industries/food-conveyors/bakery/`

- **H1:** Bakery Conveyor Systems
- **Type:** Sub-page
- **Pillar:** industries
- **Phase:** P2
- **Keywords:** bakery conveyor (700 vol, KD 0, $1.50 CPC). GSC: bakery conveyors 2,404 imp, bakery conveyor 2,152 imp.
- **Brief:** Bread, cookies, pastry, snack production. Cooling spirals, oven conveyors.
- **Lead capture:** Bakery specialist directory
- **Internal links:**
  - Parent: `/industries/food-conveyors/`
  - Children: `cookie-cracker/`

---

#### Page 50: `/industries/food-conveyors/bakery/cookie-cracker/`

- **H1:** Cookie & Cracker Packaging Conveyors
- **Type:** Sub-page
- **Pillar:** industries
- **Phase:** P2
- **Keywords:** GSC: cookie packaging machine 2,521 imp, cracker packaging 1,313 imp, cookie wrapping machine 906 imp. Ahrefs blind spot.
- **Brief:** Dedicated to cookie/cracker handling — fragile product, stacking, wrapping, tray loading.
- **Lead capture:** "Get cookie/cracker packaging quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/industries/food-conveyors/bakery/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 51: `/industries/food-conveyors/cooling/`

- **H1:** Cooling Conveyors for Food & Bakery
- **Type:** Sub-page
- **Pillar:** industries
- **Phase:** P2
- **Keywords:** cooling conveyor (470 vol, KD 0, $1.67 CPC). GSC: cooling conveyor 2,189 imp.
- **Brief:** Ambient and forced-air cooling. Spiral coolers, mesh-belt tunnels.
- **Lead capture:** "Get cooling conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/industries/food-conveyors/`
  - Children: none

---

#### Page 52: `/industries/food-conveyors/beverage/`

- **H1:** Bottle & Beverage Conveyor Systems
- **Type:** Sub-page
- **Pillar:** industries
- **Phase:** P3
- **Keywords:** bottle conveyor (350 vol, KD 0, $2.67 CPC). GSC: bottle conveyor systems 765 imp.
- **Brief:** Bottles, cans, cartons. Air conveyors, laned conveyors, accumulation.
- **Lead capture:** Supplier matching
- **Internal links:**
  - Parent: `/industries/food-conveyors/`
  - Children: none

---

#### Page 53: `/industries/packaging-line-conveyors/`

- **H1:** Packaging Line Conveyor Systems
- **Type:** Hub
- **Pillar:** industries
- **Phase:** P1
- **Keywords:** packaging line conveyor (3,600 vol, KD 0, $2.59 CPC). GSC: 16,435 imp.
- **Brief:** Conveyor integration in packaging lines. Primary/secondary/tertiary flow.
- **Lead capture:** "Design your packaging line layout — get 3 quotes"
- **Internal links:**
  - Parent: `/industries/`
  - Children: `pallet/`, `case/`

---

#### Page 54: `/industries/packaging-line-conveyors/pallet/`

- **H1:** Pallet Conveyor Systems
- **Type:** Sub-page
- **Pillar:** industries
- **Phase:** P1
- **Keywords:** pallet conveyor (2,680 vol, KD 1, $2.79 CPC). GSC: pallet conveyor 17,966 imp (Ahrefs 22x underreport!), pallet conveyors 8,089 imp, pallet conveyor systems 5,223 imp.
- **Brief:** Heavy-duty pallet handling. Integration with palletizers and stretch wrappers.
- **Lead capture:** "Get pallet conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/industries/packaging-line-conveyors/`
  - Children: `pallet-dispenser/`

---

#### Page 55: `/industries/packaging-line-conveyors/pallet/pallet-dispenser/`

- **H1:** Pallet Dispensers & Destackers
- **Type:** Sub-page
- **Pillar:** industries
- **Phase:** P2
- **Keywords:** GSC: pallet dispenser 4,454 imp, pallet dispensers 2,735 imp, empty pallet dispenser 1,359 imp, automatic pallet dispenser 1,289 imp. Ahrefs blind spot.
- **Brief:** Automatic pallet dispensing and destacking for end-of-line palletizing.
- **Lead capture:** "Get pallet dispenser quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/industries/packaging-line-conveyors/pallet/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 56: `/industries/packaging-line-conveyors/case/`

- **H1:** Case Packing & Case Conveyor Systems
- **Type:** Sub-page
- **Pillar:** industries
- **Phase:** P2
- **Keywords:** case conveyor (300 vol, KD 0, $2.50 CPC). GSC: case conveyor systems 5,130 imp, case conveyor 3,701 imp.
- **Brief:** Conveyors connecting case erectors, packers, sealers.
- **Lead capture:** Supplier directory
- **Internal links:**
  - Parent: `/industries/packaging-line-conveyors/`
  - Children: `robotic-case-packing/`

---

#### Page 57: `/industries/packaging-line-conveyors/case/robotic-case-packing/`

- **H1:** Robotic Case Packing Systems
- **Type:** Sub-page
- **Pillar:** industries
- **Phase:** P2
- **Keywords:** GSC: robotic case packing 4,430 imp, robotic case packer 3,958 imp, robotic case packers 2,935 imp, pouch case packer 1,810 imp. Ahrefs blind spot.
- **Brief:** Robotic pick-and-place case packing. End effectors, vision-guided, multi-SKU.
- **Lead capture:** "Get robotic case packing quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/industries/packaging-line-conveyors/case/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 58: `/industries/pharmaceutical-conveyors/`

- **H1:** Pharmaceutical & Cleanroom Conveyor Systems
- **Type:** Hub
- **Pillar:** industries
- **Phase:** P3
- **Keywords:** pharmaceutical conveyor (170 vol, KD 0, $3.50 CPC). GSC: pharmaceutical conveyors 3,352 imp, pharmaceutical conveyor systems 1,376 imp.
- **Brief:** Cleanroom-rated, GMP compliance. Low volume but PREMIUM leads.
- **Lead capture:** "Request a pharma conveyor consultation" — premium lead form
- **Internal links:**
  - Parent: `/industries/`
  - Children: `cleanroom/`

---

#### Page 59: `/industries/pharmaceutical-conveyors/cleanroom/`

- **H1:** Cleanroom Conveyor Systems
- **Type:** Sub-page
- **Pillar:** industries
- **Phase:** P3
- **Keywords:** GSC: cleanroom conveyor 667 imp, clean room conveyor 992 imp, cleanroom conveyors 298 imp.
- **Brief:** ISO Class 5-8 cleanroom conveyors. HEPA filtration, particle generation specs.
- **Lead capture:** Premium consultation form
- **Internal links:**
  - Parent: `/industries/pharmaceutical-conveyors/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 60: `/industries/warehouse-conveyors/`

- **H1:** Warehouse & Distribution Conveyor Systems
- **Type:** Hub
- **Pillar:** industries
- **Phase:** P2
- **Keywords:** warehouse conveyor systems (600 vol, KD 24, $0.60 CPC), automated warehouse conveyor systems (150 vol, KD 3, $6.00 CPC). GSC: e-commerce conveyor solutions 921 imp.
- **Brief:** Sortation, order fulfillment, e-commerce distribution. Integration with WMS.
- **Lead capture:** "Get warehouse conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/industries/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 61: `/industries/assembly-line-conveyors/`

- **H1:** Assembly Line Conveyor Systems
- **Type:** Hub
- **Pillar:** industries
- **Phase:** P2
- **Keywords:** assembly line conveyor systems (150 vol, KD 0, $4.00 CPC), assembly conveyor systems (100 vol, KD 0, $3.48 CPC). All KD 0!
- **Brief:** Workstation conveyors for manufacturing assembly. Ergonomic height, ESD-safe options.
- **Lead capture:** "Get assembly line conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/industries/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 62: `/industries/automotive-conveyors/`

- **H1:** Automotive Conveyor Systems
- **Type:** Hub
- **Pillar:** industries
- **Phase:** P2
- **Keywords:** GSC: automotive conveyors 3,461 imp, automotive conveyor systems 2,178 imp, automotive conveyor 2,103 imp, automotive lineside conveyor 967 imp. Ahrefs blind spot.
- **Brief:** Assembly plant conveyors, lineside delivery, paint line overhead, body-in-white handling.
- **Lead capture:** "Get automotive conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/industries/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 63: `/industries/mining-conveyors/`

- **H1:** Mining & Aggregate Conveyor Systems
- **Type:** Hub
- **Pillar:** industries
- **Phase:** P3
- **Keywords:** mining conveyor (200 vol, KD 0, $2.00 CPC), concrete conveyor (150 vol, KD 0, $1.35 CPC)
- **Brief:** Heavy-duty conveyors for mining, aggregate, concrete. Troughed belt, overland.
- **Lead capture:** Quote request → 3 suppliers
- **Internal links:**
  - Parent: `/industries/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

### Conveyor Functions Pillar (17 pages)

---

#### Page 64: `/conveyor-functions/`

- **H1:** Conveyor Functions: What Do You Need Your Conveyor to Do?
- **Type:** Category
- **Pillar:** functions
- **Phase:** P1
- **Brief:** Task-based selector. Unique angle no competitor has. "I need to accumulate / divert / load trays / stack / index / reject / collate."
- **Lead capture:** Function-based lead routing
- **Internal links:**
  - Parent: `/`
  - Children: all function hub pages

---

#### Page 65: `/conveyor-functions/tray-loading/`

- **H1:** Automatic Tray Loading & Unloading Systems
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P1
- **Keywords:** GSC: automatic tray loader 4,345 imp, tray loading 3,225 imp, tray loader 2,638 imp. 44K+ total impressions. Ahrefs blind spot.
- **Brief:** Hidden gem page. Bakery, snack, produce, ready meals.
- **Lead capture:** "Find tray loading systems — get 3 quotes"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none

---

#### Page 66: `/conveyor-functions/indexing-conveyors/`

- **H1:** Indexing Conveyors for Precision Positioning
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P1 (UPGRADED from P2 — GSC shows massive demand)
- **Keywords:** indexing conveyor (540 vol, KD 0, $1.57 CPC). GSC: indexing conveyor 14,349 imp, 142 clicks (Ahrefs 48x underreport!).
- **Brief:** Servo-driven indexing for pick-and-place, filling, assembly.
- **Lead capture:** "Get indexing conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none

---

#### Page 67: `/conveyor-functions/collating-laning/`

- **H1:** Collating & Laning Conveyors
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P1
- **Keywords:** GSC: laning conveyor 2,134 imp, collating conveyor 860 imp, collation conveyor 1,059 imp, chicaning conveyor 1,041 imp, product laning 522 imp. 50,000+ combined imp across all properties!
- **Brief:** Multi-lane product distribution, collation for case packing, chicaning for serpentine routing. Uses insider vocabulary competitors can't replicate.
- **Lead capture:** "Design your laning/collating solution — get 3 quotes"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 68: `/conveyor-functions/reject-systems/`

- **H1:** Conveyor Reject Systems
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P1
- **Keywords:** GSC: reject conveyor 2,226 imp (19 clicks, pos 3.4), conveyor reject system 2,057 imp (9 clicks), rejection conveyor 704 imp, case reject conveyor 346 imp. 7,600+ combined imp.
- **Brief:** Pneumatic, pusher, and diverter reject for failed QC product. Integration with metal detectors, checkweighers, vision systems.
- **Lead capture:** "Get reject system quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 69: `/conveyor-functions/stacking-machines/`

- **H1:** Stacking Machines & Conveyor Stackers
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P2
- **Keywords:** stacking machine (700 vol, KD 0, $0.99 CPC). GSC: stacking machine 2,630 imp, stacking conveyor 3,830 imp, stacking machines 3,164 imp, counter stacker 1,156 imp.
- **Brief:** Automatic stacking. Count-and-stack, layer forming, stack-and-wrap.
- **Lead capture:** "Get stacking machine quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none

---

#### Page 70: `/conveyor-functions/infeed-outfeed/`

- **H1:** Infeed & Outfeed Conveyor Systems
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P2
- **Keywords:** infeed conveyor (180 vol, KD 0, $2.50 CPC). GSC: infeed conveyor 1,174 imp, wrapper feeder 1,133 imp, cartoner infeeds 1,021 imp.
- **Brief:** Infeed/outfeed for packaging machines. Timing screws, starwheels, servo infeeds.
- **Lead capture:** "Integrate your packaging machine — get 3 quotes"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: `star-wheel/`

---

#### Page 71: `/conveyor-functions/infeed-outfeed/star-wheel/`

- **H1:** Star Wheel Feeders & Disc Feeders
- **Type:** Sub-page
- **Pillar:** functions
- **Phase:** P3
- **Keywords:** GSC: star wheel conveyor 683 imp, star wheel feeder 141 imp, disc feeder 203 imp.
- **Brief:** Star wheel and disc feeding for bottle/container timing on packaging lines.
- **Lead capture:** Supplier matching
- **Internal links:**
  - Parent: `/conveyor-functions/infeed-outfeed/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 72: `/conveyor-functions/product-handling/`

- **H1:** Product Handling: Turning, Flipping, Orienting & Inverting
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P2
- **Keywords:** product handling (260 vol, KD 1, $1.85 CPC). GSC: rotating conveyor 3,466 imp (34 clicks), product turner 868 imp, product orienter 916 imp.
- **Brief:** Turners, flippers, inverters, orienters for labeling, inspection, packaging prep.
- **Lead capture:** "Get product handling quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: `spreader/`

---

#### Page 73: `/conveyor-functions/product-handling/spreader/`

- **H1:** Spreader Conveyors
- **Type:** Sub-page
- **Pillar:** functions
- **Phase:** P2
- **Keywords:** GSC: spreader conveyor 1,190 imp (17 clicks, pos 3.2!), spreader conveyors 688 imp. Already ranking at position 3!
- **Brief:** Product spreading for even distribution across belt width. For freezing, drying, coating.
- **Lead capture:** Supplier matching
- **Internal links:**
  - Parent: `/conveyor-functions/product-handling/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 74: `/conveyor-functions/storage-conveyors/`

- **H1:** Storage Conveyors & Accumulation Buffers
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P2
- **Keywords:** storage conveyor (200 vol, KD 0, $2.00 CPC). GSC: accumulation table conveyor 2,514 imp, vertical accumulation buffer 1,949 imp.
- **Brief:** Spiral accumulators, LIFO/FIFO buffers, dynamic storage.
- **Lead capture:** "Size your buffer system — get 3 quotes"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none

---

#### Page 75: `/conveyor-functions/slug-loading/`

- **H1:** Slug Loading & Slug Conveyor Systems
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P2
- **Keywords:** GSC: slug conveyor 1,230 imp, slug loading 728 imp, slug loaders 624 imp, infeed slug loader 657 imp. Ahrefs blind spot.
- **Brief:** Product slug formation and loading for case packing, cartoning. Count-based and length-based slugs.
- **Lead capture:** "Get slug loading quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 76: `/conveyor-functions/pusher-diverter/`

- **H1:** Conveyor Pusher & Diverter Mechanisms
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P2
- **Keywords:** GSC: conveyor pusher 1,086 imp (20 clicks, pos 3.4), pusher conveyor 996 imp (17 clicks), conveyor pusher mechanism 509 imp (20 clicks). Already ranking with clicks!
- **Brief:** Pusher bars, pneumatic pushers, servo pushers for diverting, lane loading, case packing.
- **Lead capture:** "Get pusher/diverter quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 77: `/conveyor-functions/inspection-detection/`

- **H1:** Conveyor Metal Detectors & Inspection Systems
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P2
- **Keywords:** conveyor metal detector (300 vol, KD 0, $2.50 CPC), industrial metal detector conveyor (150 vol, KD 0, $6.00 CPC!), checkweigher conveyor (100 vol, KD 0, $5.00 CPC).
- **Brief:** Metal detection, checkweighers, vision inspection, reject mechanisms on packaging lines.
- **Lead capture:** "Get inspection system quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 78: `/conveyor-functions/ball-transfer-tables/`

- **H1:** Ball Transfer Tables & Conveyor Transfers
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P3
- **Keywords:** ball transfer table (300 vol, KD 0, $2.78 CPC — highest CPC in original IA)
- **Brief:** Omni-directional ball transfer.
- **Lead capture:** Quote form → 3 suppliers
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none

---

#### Page 79: `/conveyor-functions/singulation/`

- **H1:** Singulation Conveyors
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P3
- **Keywords:** GSC: singulation conveyor 922 imp (pos 8.0), singulating 421 imp.
- **Brief:** Single-filing product from bulk or multi-lane to single lane for scanning, labeling, packaging.
- **Lead capture:** "Get singulation conveyor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 80: `/conveyor-functions/metering/`

- **H1:** Metering Conveyors
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P3
- **Keywords:** GSC: metering conveyor 248 imp, tray metering conveyor 697 imp.
- **Brief:** Precision speed/spacing control for feeding packaging machines at exact product intervals.
- **Lead capture:** Quote form → 3 suppliers
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 81: `/conveyor-functions/bag-loading/`

- **H1:** Bag Loading & Automated Bag Handling
- **Type:** Hub
- **Pillar:** functions
- **Phase:** P3
- **Keywords:** GSC: bag loader 838 imp, automated bag loading 441 imp, automatic bag loader 263 imp.
- **Brief:** Automated bag loading for case packing, palletizing. Pouch, pillow bag, stand-up pouch handling.
- **Lead capture:** "Get bag loading system quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/conveyor-functions/`
  - Children: none
- **Note:** NEW — GSC discovery

---

### Resources Pillar (18 pages)

---

#### Page 82: `/resources/`

- **H1:** Conveyor Buyer Resources: Guides, Directory & Engineering Tools
- **Type:** Category
- **Pillar:** resources
- **Phase:** P1
- **Brief:** Buyer journey hub. Three paths: Find a Manufacturer, Design Your System, Automate Your Line.
- **Lead capture:** Path-based lead routing
- **Internal links:**
  - Parent: `/`
  - Children: all resource pages

---

#### Page 83: `/resources/automated-conveyor-systems/`

- **H1:** Automated Conveyor Systems for Manufacturing
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P1
- **Keywords:** automated conveyor systems (3,460 vol, KD 2, $2.21 CPC). GSC: automated conveyor systems 12,612 imp.
- **Brief:** Automation overview: controls, sensors, PLCs, VFDs, vision. ROI calculator.
- **Lead capture:** "Get an automation assessment — matched with 3 integrators"
- **Internal links:**
  - Parent: `/resources/`
  - Children: none

---

#### Page 84: `/resources/conveyor-cost-guide/`

- **H1:** Conveyor Cost & Pricing Guide
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P1
- **Keywords:** conveyor for sale (150 vol, KD 0), conveyor belt for sale (300 vol, KD 1, $1.39 CPC), conveyor price (50 vol, KD 0, $2.50 CPC), used conveyor for sale (100 vol, KD 0). 900+ combined vol, ALL KD 0-1.
- **Brief:** Pricing ranges by conveyor type, used vs new, total cost of ownership. The buying guide page. "Don't overpay — get 3 competitive quotes."
- **Lead capture:** "Get 3 competitive quotes to compare" — strongest transactional CTA on the site
- **Internal links:**
  - Parent: `/resources/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 85: `/resources/conveyor-manufacturers/`

- **H1:** Packaging Conveyor Manufacturers & Suppliers Directory
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P2
- **Keywords:** conveyor manufacturers (9,970 vol, KD 60, $3.26 CPC)
- **Brief:** THE MONETIZATION HUB. Filterable directory by type, industry, region. Free basic + premium listings.
- **Lead capture:** Paid listings + lead routing to OEMs. Visitor submits RFQ → routed to 3 matching manufacturers.
- **Internal links:**
  - Parent: `/resources/`
  - Children: `custom/`

---

#### Page 86: `/resources/conveyor-manufacturers/custom/`

- **H1:** Custom Conveyor Design & Engineering
- **Type:** Sub-page
- **Pillar:** resources
- **Phase:** P2
- **Keywords:** custom conveyor (1,090 vol, KD 16, $3.50 CPC). GSC: custom conveyor 2,335-4,512 imp across properties.
- **Brief:** RFQ template for custom projects. Featured custom builders.
- **Lead capture:** Multi-step RFQ form → route to 3 custom builders
- **Internal links:**
  - Parent: `/resources/conveyor-manufacturers/`
  - Children: none

---

#### Page 87: `/resources/conveyor-companies/`

- **H1:** Conveyor Companies & Suppliers Near You
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P2
- **Keywords:** conveyor companies (400 vol, KD 59, $3.00 CPC), conveyor manufacturers near me (150 vol, KD 21, $6.00 CPC!), conveyor companies near me (150 vol, KD 59, $3.88 CPC). Extremely high CPC.
- **Brief:** Regional supplier listings, "near me" optimization. Not the same as the directory — this is a geo-targeted resource.
- **Lead capture:** Location-based RFQ → routed to 3 regional suppliers
- **Internal links:**
  - Parent: `/resources/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 88: `/resources/conveyor-parts/`

- **H1:** Conveyor Parts & Replacement Components
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P2
- **Keywords:** conveyor parts (800 vol, KD 0, $1.50 CPC), conveyor belt parts (450 vol, KD 1)
- **Brief:** Comprehensive parts directory. Rollers, belts, bearings, motors, drives, guards, sensors.
- **Lead capture:** Parts supplier matching
- **Internal links:**
  - Parent: `/resources/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 89: `/resources/conveyor-belting/`

- **H1:** Conveyor Belt Types & Material Selection Guide
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P2
- **Keywords:** conveyor belts (2,300 vol, KD 22), conveyor belting (700 vol, KD 4), types of conveyor belts (200 vol, KD 4), food conveyor belts (100 vol, KD 1, $2.50 CPC), fda approved conveyor belts (60 vol, $6.00 CPC!).
- **Brief:** Belt material selection: rubber, PVC, polyurethane, silicone, metal, modular plastic. FDA/USDA compliant options.
- **Lead capture:** "Get belt quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/resources/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 90: `/resources/conveyor-maintenance/`

- **H1:** Conveyor Maintenance & Troubleshooting Guide
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P2
- **Keywords:** conveyor maintenance (250 vol, KD 0), conveyor belt replacement (250 vol, KD 1), conveyor belt tensioner (250 vol, KD 0), conveyor tracking (150 vol, KD 0), conveyor repair near me (80 vol, KD 0, $4.00 CPC). 1,330 combined vol.
- **Brief:** Preventive maintenance schedules, troubleshooting common problems, belt tracking, tension adjustment.
- **Lead capture:** "Need conveyor service? Get matched with 3 service providers"
- **Internal links:**
  - Parent: `/resources/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 91: `/resources/conveyor-installation/`

- **H1:** Conveyor Installation Guide & Services
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P2
- **Keywords:** conveyor installation (500 vol, KD 0, $1.40 CPC), conveyor installation companies (250 vol, KD 5, $3.50 CPC). 1,050 combined vol.
- **Brief:** Installation planning, rigging, commissioning. Regional installer directory.
- **Lead capture:** "Get matched with 3 conveyor installation companies"
- **Internal links:**
  - Parent: `/resources/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 92: `/resources/types-of-conveyor-systems/`

- **H1:** Types of Conveyor Systems: Complete Overview
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P2
- **Keywords:** types of conveyor systems (250 vol, KD 16), what is a conveyor system (150 vol, KD 5), how do conveyor belts work (150 vol, KD 1). 1,450 combined vol.
- **Brief:** Educational overview linking to every conveyor type page. Top-of-funnel authority builder. Massive internal linking hub.
- **Lead capture:** "Not sure which type? Take our conveyor selector quiz" → 3-supplier match
- **Internal links:**
  - Parent: `/resources/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 93: `/resources/turnkey-packaging-lines/`

- **H1:** Turnkey Packaging Line Solutions
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P2
- **Keywords:** GSC: turnkey canning line 1,166 imp, turnkey packaging lines 1,117 imp, turnkey conveyor solutions 1,020 imp, turnkey conveyor systems 745 imp. 12,900 combined imp.
- **Brief:** Single-source packaging line design, build, install. From concept to commissioning. "One RFQ, 3 turnkey providers."
- **Lead capture:** "Get turnkey packaging line quotes from 3 providers" — highest-value lead type
- **Internal links:**
  - Parent: `/resources/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 94: `/resources/conveyor-design-guide/`

- **H1:** Conveyor System Design Guide
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P3
- **Keywords:** conveyor design guide (7,890 vol, KD 5, $2.09 CPC), conveyor engineering (400 vol, KD 1)
- **Brief:** Engineering reference. Speed calc, throughput sizing. PDF lead magnet.
- **Lead capture:** PDF download gate → email nurture → supplier matching
- **Internal links:**
  - Parent: `/resources/`
  - Children: `components/`, `conveyor-engineering/`

---

#### Page 95: `/resources/conveyor-design-guide/components/`

- **H1:** Conveyor Components & Parts Guide
- **Type:** Sub-page
- **Pillar:** resources
- **Phase:** P3
- **Keywords:** conveyor components (2,200 vol, KD 0, $2.13 CPC)
- **Brief:** Rollers, bearings, motors, drives, frames. MRO content.
- **Lead capture:** Parts supplier directory
- **Internal links:**
  - Parent: `/resources/conveyor-design-guide/`
  - Children: none

---

#### Page 96: `/resources/conveyor-design-guide/conveyor-engineering/`

- **H1:** Conveyor Engineering & System Design
- **Type:** Sub-page
- **Pillar:** resources
- **Phase:** P3
- **Keywords:** conveyor system design (400 vol, KD 2), conveyor engineering (400 vol, KD 1), conveyor design (300 vol, KD 0)
- **Brief:** Engineering calculations, layout planning, specification writing.
- **Lead capture:** PDF download gate + "Get engineering consultation from 3 firms"
- **Internal links:**
  - Parent: `/resources/conveyor-design-guide/`
  - Children: none
- **Note:** NEW — GSC discovery

---

#### Page 97: `/resources/conveyor-safety/`

- **H1:** Conveyor Safety & Guarding Guide
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P3
- **Keywords:** conveyor safety (150 vol, KD 3), conveyor guarding (150 vol, KD 5, $2.50 CPC), osha conveyor safety (150 vol, KD 5), conveyor safety netting (70 vol, KD 0, $5.00 CPC).
- **Brief:** OSHA compliance, guarding types, nip point protection, e-stop requirements, lockout/tagout.
- **Lead capture:** "Get conveyor safety audit — matched with 3 specialists"
- **Internal links:**
  - Parent: `/resources/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

#### Page 98: `/resources/conveyor-motors-drives/`

- **H1:** Conveyor Motors, Drives & Speed Control
- **Type:** Hub
- **Pillar:** resources
- **Phase:** P3
- **Keywords:** conveyor motor (200 vol, KD 0), conveyor control systems (200 vol, KD 0, $3.00 CPC), conveyor speed control (100 vol, KD 0)
- **Brief:** Motor types, VFDs, servo drives, gear reducers. Motor sizing guide.
- **Lead capture:** "Get drive/motor quotes from 3 suppliers"
- **Internal links:**
  - Parent: `/resources/`
  - Children: none
- **Note:** NEW — Ahrefs gap page

---

## EMD Domain Redirect Map

All 301 redirects from exact-match domains to target pages.

| # | Domain | 301 Target | Tier |
|---|--------|-----------|------|
| 1 | packagingconveyor.com | `/` | PRIMARY |
| 2 | conveyordesignguide.com | `/resources/conveyor-design-guide/` | Must Buy |
| 3 | foodconveyorsystem.com | `/industries/food-conveyors/` | Must Buy |
| 4 | foodpackagingconveyor.com | `/industries/packaging-line-conveyors/` | Must Buy |
| 5 | transferconveyor.com | `/conveyor-types/transfer-conveyors/` | Must Buy |
| 6 | divertingconveyor.com | `/conveyor-types/diverting-merging/` | Must Buy |
| 7 | trayloadingsystem.com | `/conveyor-functions/tray-loading/` | Must Buy |
| 8 | stackingmachine.com | `/conveyor-functions/stacking-machines/` | Must Buy |
| 9 | infeedconveyor.com | `/conveyor-functions/infeed-outfeed/` | Must Buy |
| 10 | washdownconveyor.com | `/industries/food-conveyors/sanitary/` | High Value |
| 11 | flatbeltconveyor.com | `/conveyor-types/flat-belt-conveyors/` | High Value |
| 12 | troughconveyor.com | `/conveyor-types/trough-conveyors/` | High Value |
| 13 | cleatedconveyor.com | `/conveyor-types/cleated-conveyors/` | High Value |
| 14 | shuttleconveyor.com | `/conveyor-types/transfer-conveyors/shuttle/` | High Value |
| 15 | cookiepackagingmachine.com | `/industries/food-conveyors/bakery/` | High Value |
| 16 | coolingconveyor.com | `/industries/food-conveyors/cooling/` | High Value |
| 17 | indexingconveyor.com | `/conveyor-functions/indexing-conveyors/` | High Value |
| 18 | storageconveyor.com | `/conveyor-functions/storage-conveyors/` | High Value |
| 19 | cdlrconveyor.com | `/conveyor-types/cdlr-conveyors/` | High Value |
| 20 | collatingconveyor.com | `/conveyor-functions/collating-laning/` | Strategic |
| 21 | productturner.com | `/conveyor-functions/product-handling/` | Strategic |
| 22 | mergingconveyor.com | `/conveyor-types/diverting-merging/` | Strategic |
| 23 | reciprocatingconveyor.com | `/conveyor-types/transfer-conveyors/shuttle/` | Strategic |
| 24 | productconveyor.com | `/` | Strategic |
| 25 | activatedrollerbelt.com | `/conveyor-types/activated-roller-belt/` | Strategic |
| 26 | invertingconveyor.com | `/conveyor-functions/product-handling/` | Strategic |
| 27 | flippingconveyor.com | `/conveyor-functions/product-handling/` | Strategic |
| 28 | spreaderconveyor.com | `/conveyor-functions/product-handling/spreader/` | Strategic |
| 29 | singulationconveyor.com | `/conveyor-functions/singulation/` | Strategic |
| 30 | pharmaconveyor.com | `/industries/pharmaceutical-conveyors/` | Nice |
| 31 | curvedconveyor.com | `/conveyor-types/curved-conveyors/` | Nice |

---

## Phased Build Order

### Phase 0 — Foundation (Week 1)

Site framework, design system, lead capture form system, schema markup templates.

| # | URL | Notes |
|---|-----|-------|
| 1 | `/` | Homepage (4,830 vol) |

### Phase 1 — Launch (Weeks 1-4) — 23 pages

| # | URL | Volume / Signal |
|---|-----|-----------------|
| 2 | `/conveyor-types/` | Category |
| 3 | `/conveyor-types/roller-conveyors/` | 14,180 vol |
| 4 | `/conveyor-types/roller-conveyors/gravity/` | 2,950 vol |
| 5 | `/conveyor-types/roller-conveyors/powered/` | 1,200 vol, $4.40 CPC |
| 6 | `/conveyor-types/accumulation-conveyors/` | 2,030 vol + 12,721 GSC imp |
| 7 | `/conveyor-types/transfer-conveyors/` | 3,410 vol |
| 8 | `/conveyor-types/cdlr-conveyors/` | 350 vol |
| 9 | `/conveyor-types/mdr-conveyors/` | NEW, 350 vol + $5.58 CPC + 1,919 GSC imp |
| 10 | `/conveyor-types/live-roller-conveyors/` | NEW, $6.00 CPC (highest in dataset!) |
| 11 | `/conveyor-types/vertical-reciprocating/` | NEW, 900 vol |
| 12 | `/industries/` | Category |
| 13 | `/industries/food-conveyors/` | 4,330 vol |
| 14 | `/industries/food-conveyors/sanitary/` | 1,800 vol + 3,927 GSC imp |
| 15 | `/industries/packaging-line-conveyors/` | 3,600 vol |
| 16 | `/industries/packaging-line-conveyors/pallet/` | 2,680 vol + 17,966 GSC imp |
| 17 | `/conveyor-functions/` | Category |
| 18 | `/conveyor-functions/tray-loading/` | 44K GSC imp |
| 19 | `/conveyor-functions/indexing-conveyors/` | 540 vol + 14,349 GSC imp (UPGRADED) |
| 20 | `/conveyor-functions/collating-laning/` | NEW, 50K+ GSC imp |
| 21 | `/conveyor-functions/reject-systems/` | NEW, 7,600 GSC imp |
| 22 | `/resources/` | Category |
| 23 | `/resources/automated-conveyor-systems/` | 3,460 vol |
| 24 | `/resources/conveyor-cost-guide/` | NEW, transactional intent, KD 0 |

### Phase 2 — Expansion (Weeks 5-10) — 51 pages

| # | URL | Volume / Signal |
|---|-----|-----------------|
| 25 | `/conveyor-types/transfer-conveyors/shuttle/` | 600 vol + 4,794 GSC |
| 26 | `/conveyor-types/chain-conveyors/` | 9,190 vol |
| 27 | `/conveyor-types/chain-conveyors/overhead/` | 3,060 vol |
| 28 | `/conveyor-types/drag-chain-conveyors/` | NEW, 500 vol |
| 29 | `/conveyor-types/spiral-conveyors/` | 4,620 vol |
| 30 | `/conveyor-types/diverting-merging/` | 2,270 vol + 5,060 GSC |
| 31 | `/conveyor-types/diverting-merging/sortation/` | 2,500 vol |
| 32 | `/conveyor-types/flexible-conveyors/` | 2,760 vol |
| 33 | `/conveyor-types/screw-conveyors/` | 2,300 vol |
| 34 | `/conveyor-types/bucket-elevators/` | 1,250 vol |
| 35 | `/conveyor-types/flat-belt-conveyors/` | 850 vol |
| 36 | `/conveyor-types/cleated-conveyors/` | 650 vol |
| 37 | `/conveyor-types/wire-mesh-conveyors/` | 300 vol |
| 38 | `/conveyor-types/hinged-steel-belt/` | 200 vol |
| 39 | `/conveyor-types/trough-conveyors/` | 280 vol + 8,129 GSC (33x!) |
| 40 | `/conveyor-types/vibratory-conveyors/` | 1,910 vol + 4,480 GSC |
| 41 | `/conveyor-types/tabletop-conveyors/` | 690 vol + 3,947 GSC |
| 42 | `/conveyor-types/pneumatic-conveyors/` | NEW, 500 vol |
| 43 | `/conveyor-types/vacuum-conveyors/` | NEW, 600 vol |
| 44 | `/conveyor-types/slat-conveyors/` | NEW, 500 vol |
| 45 | `/conveyor-types/telescopic-conveyors/` | NEW, 350 vol, $3.50 CPC |
| 46 | `/conveyor-types/stainless-steel-conveyors/` | NEW, 400 vol |
| 47 | `/conveyor-types/activated-roller-belt/` | NEW, 2,159 GSC |
| 48 | `/conveyor-types/flighted-scoop-conveyors/` | NEW, 1,449 GSC |
| 49 | `/conveyor-types/vertical-lift/` | NEW, 990 GSC |
| 50 | `/industries/food-conveyors/bakery/` | 700 vol + 2,404 GSC |
| 51 | `/industries/food-conveyors/bakery/cookie-cracker/` | NEW, 2,521 GSC |
| 52 | `/industries/food-conveyors/cooling/` | 470 vol + 2,189 GSC |
| 53 | `/industries/packaging-line-conveyors/case/` | 300 vol + 5,130 GSC |
| 54 | `/industries/packaging-line-conveyors/case/robotic-case-packing/` | NEW, 4,430 GSC |
| 55 | `/industries/packaging-line-conveyors/pallet/pallet-dispenser/` | NEW, 4,454 GSC |
| 56 | `/industries/warehouse-conveyors/` | NEW, 600 vol |
| 57 | `/industries/assembly-line-conveyors/` | NEW, 150 vol, $4.00 CPC |
| 58 | `/industries/automotive-conveyors/` | NEW, 3,461 GSC |
| 59 | `/conveyor-functions/stacking-machines/` | 700 vol + 3,830 GSC |
| 60 | `/conveyor-functions/infeed-outfeed/` | 180 vol + 1,174 GSC |
| 61 | `/conveyor-functions/product-handling/` | 260 vol + 3,466 GSC |
| 62 | `/conveyor-functions/product-handling/spreader/` | NEW, 1,190 GSC (pos 3.2!) |
| 63 | `/conveyor-functions/storage-conveyors/` | 200 vol + 2,514 GSC |
| 64 | `/conveyor-functions/slug-loading/` | NEW, 1,230 GSC |
| 65 | `/conveyor-functions/pusher-diverter/` | NEW, 1,086 GSC (pos 3.4) |
| 66 | `/conveyor-functions/inspection-detection/` | NEW, 300 vol, $6.00 CPC |
| 67 | `/resources/conveyor-manufacturers/` | 9,970 vol |
| 68 | `/resources/conveyor-manufacturers/custom/` | 1,090 vol, $3.50 CPC |
| 69 | `/resources/conveyor-companies/` | NEW, 400 vol, $6.00 CPC |
| 70 | `/resources/conveyor-parts/` | NEW, 800 vol |
| 71 | `/resources/conveyor-belting/` | NEW, 2,300 vol |
| 72 | `/resources/conveyor-maintenance/` | NEW, 1,330 vol |
| 73 | `/resources/conveyor-installation/` | NEW, 1,050 vol |
| 74 | `/resources/types-of-conveyor-systems/` | NEW, 1,450 vol |
| 75 | `/resources/turnkey-packaging-lines/` | NEW, 12,900 GSC |

### Phase 3 — Authority (Weeks 11-16) — 23 pages

| # | URL | Volume / Signal |
|---|-----|-----------------|
| 76 | `/conveyor-types/incline-conveyors/` | 1,460 vol |
| 77 | `/conveyor-types/modular-conveyors/` | 740 vol |
| 78 | `/conveyor-types/curved-conveyors/` | 200 vol |
| 79 | `/conveyor-types/magnetic-conveyors/` | NEW, 350 vol |
| 80 | `/conveyor-types/portable-conveyors/` | NEW, 300 vol |
| 81 | `/conveyor-types/monorail-power-free/` | NEW, 250 vol |
| 82 | `/conveyor-types/serpentine-conveyors/` | NEW, 1,309 GSC |
| 83 | `/conveyor-types/transfer-conveyors/bump-turn/` | NEW, 851 GSC |
| 84 | `/conveyor-types/transfer-conveyors/pivot/` | NEW, 1,369 GSC |
| 85 | `/industries/food-conveyors/beverage/` | 350 vol |
| 86 | `/industries/pharmaceutical-conveyors/` | 170 vol, $3.50 CPC |
| 87 | `/industries/pharmaceutical-conveyors/cleanroom/` | NEW, 992 GSC |
| 88 | `/industries/mining-conveyors/` | NEW, 200 vol |
| 89 | `/conveyor-functions/ball-transfer-tables/` | 300 vol, $2.78 CPC |
| 90 | `/conveyor-functions/infeed-outfeed/star-wheel/` | NEW, 683 GSC |
| 91 | `/conveyor-functions/singulation/` | NEW, 922 GSC |
| 92 | `/conveyor-functions/metering/` | NEW, 697 GSC |
| 93 | `/conveyor-functions/bag-loading/` | NEW, 838 GSC |
| 94 | `/resources/conveyor-design-guide/` | 7,890 vol |
| 95 | `/resources/conveyor-design-guide/components/` | 2,200 vol |
| 96 | `/resources/conveyor-design-guide/conveyor-engineering/` | NEW, 400 vol |
| 97 | `/resources/conveyor-safety/` | NEW, 750 vol |
| 98 | `/resources/conveyor-motors-drives/` | NEW, 700 vol |

---

## Lead Capture Strategy

### Form Types by Page Temperature

#### Hot Lead Form (multi-step RFQ wizard)

**Used on:** homepage, all $3+ CPC pages, pallet, robotic case packing, turnkey, MDR, live roller, custom, pharma

- **Step 1:** What type of conveyor/system?
- **Step 2:** Your application (industry, product, weight, speed)
- **Step 3:** Timeline & budget range
- **Step 4:** Contact info
- **Output:** Lead routed to 3 matched suppliers

#### Warm Lead Form (sidebar/inline CTA)

**Used on:** most hub pages, mid-range CPC

- Single form: name, email, phone, brief description
- CTA: "Get matched with 3 suppliers"

#### Info Capture (gated content)

**Used on:** design guide, engineering, safety, maintenance

- PDF download, calculator access, checklist
- Email capture → nurture sequence → eventually match with suppliers

### Value Propositions

**To buyers:** "Tell us what you need. We'll match you with 3 qualified conveyor suppliers who compete for your business. Free, no obligation."

**To conveyor companies:** "We deliver pre-qualified conveyor buyer leads directly to your inbox. You only compete with 2 other suppliers per lead."

---

## Schema Markup Plan

### Every page gets:

- `BreadcrumbList` — full breadcrumb path
- `FAQPage` — 3-5 FAQs per page (targets People Also Ask)
- `WebPage` with `speakable` — for voice search

### Product/service pages additionally get:

- `Product` schema with `AggregateOffer` (price ranges where applicable)

### Directory pages get:

- `ItemList` of `LocalBusiness` entries

---

## Internal Linking Strategy

1. **Vertical links:** Every page links to parent and all children (breadcrumb + child grid)
2. **Cross-pillar links:** Every type page links to relevant industry and function pages (e.g., tabletop → beverage, accumulation → storage-conveyors)
3. **Comparison links:** Hub pages include "vs" comparison tables linking to alternative types
4. **CTA links:** Every page links to directory and cost guide
5. **Related pages:** Sidebar widget showing 3-5 related pages by pillar intersection

---

## Page Count Summary

| Pillar | Original | New (Ahrefs) | New (GSC) | Total |
|--------|----------|-------------|-----------|-------|
| Homepage | 1 | 0 | 0 | **1** |
| Conveyor Types | 25 | 13 | 5 | **43** |
| Industries | 10 | 4 | 4 | **18** |
| Conveyor Functions | 7 | 1 | 9 | **17** |
| Resources | 5 | 10 | 2 | **17** |
| **TOTAL** | **48** | **28** | **20** | **98*** |

*Note: Resources pillar has 17 listed pages + the category page = 18 total including `/resources/`. Grand total is 98 pages (1 homepage + 43 types + 18 industries + 17 functions + 18 resources = 97 content pages + 1 homepage = 98 — the category pages are counted within each pillar).
