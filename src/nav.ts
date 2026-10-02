// Site sections, generated from page breadcrumbs. Drives the header, sidenav, and footer.
export interface NavLink { label: string; href: string; children?: NavLink[] }

export const sections: NavLink[] = [
  {
    label: 'Conveyor types', href: '/conveyor-types/',
    children: [
      { label: "Accumulation Conveyors", href: '/conveyor-types/accumulation-conveyors/', children: [
        { label: "Minimum-Pressure Accumulation", href: '/conveyor-types/accumulation-conveyors/minimum-pressure/' },
        { label: "Zero-Pressure Accumulation", href: '/conveyor-types/accumulation-conveyors/zero-pressure/' },
      ] },
      { label: "Activated Roller Belt (ARB)", href: '/conveyor-types/activated-roller-belt/' },
      { label: "Belt Conveyors", href: '/conveyor-types/belt-conveyors/' },
      { label: "Bucket Elevators", href: '/conveyor-types/bucket-elevators/' },
      { label: "Buffer Conveyors", href: '/conveyor-types/buffer-conveyors/' },
      { label: "CDLR Conveyors", href: '/conveyor-types/cdlr-conveyors/' },
      { label: "Chain Conveyors", href: '/conveyor-types/chain-conveyors/', children: [
        { label: "Overhead Conveyor Systems", href: '/conveyor-types/chain-conveyors/overhead/' },
      ] },
      { label: "Cleated Belt Conveyors", href: '/conveyor-types/cleated-conveyors/' },
      { label: "Curved Conveyors", href: '/conveyor-types/curved-conveyors/' },
      { label: "Diverting & Merging", href: '/conveyor-types/diverting-merging/', children: [
        { label: "Sortation Systems", href: '/conveyor-types/diverting-merging/sortation/' },
      ] },
      { label: "Drag Chain Conveyors", href: '/conveyor-types/drag-chain-conveyors/' },
      { label: "Flat Belt Conveyors", href: '/conveyor-types/flat-belt-conveyors/' },
      { label: "Flexible Conveyors", href: '/conveyor-types/flexible-conveyors/' },
      { label: "Flighted & Scoop Conveyors", href: '/conveyor-types/flighted-scoop-conveyors/' },
      { label: "Hinged Steel Belt Conveyors", href: '/conveyor-types/hinged-steel-belt/' },
      { label: "Incline Conveyors", href: '/conveyor-types/incline-conveyors/' },
      { label: "Live Roller Conveyors", href: '/conveyor-types/live-roller-conveyors/' },
      { label: "Low-Profile Conveyors", href: '/conveyor-types/low-profile-conveyors/' },
      { label: "Magnetic Conveyors", href: '/conveyor-types/magnetic-conveyors/' },
      { label: "MDR Conveyors", href: '/conveyor-types/mdr-conveyors/' },
      { label: "Modular Conveyors", href: '/conveyor-types/modular-conveyors/' },
      { label: "Monorail & Power-and-Free Conveyors", href: '/conveyor-types/monorail-power-free/' },
      { label: "Pallet Conveyors", href: '/conveyor-types/pallet-conveyors/' },
      { label: "Pneumatic Conveying Systems", href: '/conveyor-types/pneumatic-conveyors/' },
      { label: "Portable Conveyors", href: '/conveyor-types/portable-conveyors/' },
      { label: "Roller Conveyors", href: '/conveyor-types/roller-conveyors/', children: [
        { label: "Gravity Roller", href: '/conveyor-types/roller-conveyors/gravity/' },
        { label: "Powered Roller", href: '/conveyor-types/roller-conveyors/powered/' },
      ] },
      { label: "Screw Conveyors", href: '/conveyor-types/screw-conveyors/' },
      { label: "Serpentine Conveyors", href: '/conveyor-types/serpentine-conveyors/' },
      { label: "Slat Conveyors", href: '/conveyor-types/slat-conveyors/' },
      { label: "Spiral Conveyors", href: '/conveyor-types/spiral-conveyors/' },
      { label: "Stainless Steel Conveyors", href: '/conveyor-types/stainless-steel-conveyors/' },
      { label: "Tabletop Chain Conveyors", href: '/conveyor-types/tabletop-conveyors/' },
      { label: "Telescopic Conveyors", href: '/conveyor-types/telescopic-conveyors/' },
      { label: "Transfer Conveyors", href: '/conveyor-types/transfer-conveyors/', children: [
        { label: "Bump Turn Conveyors", href: '/conveyor-types/transfer-conveyors/bump-turn/' },
        { label: "Pivot Conveyors", href: '/conveyor-types/transfer-conveyors/pivot/' },
        { label: "Shuttle & Reciprocating Conveyors", href: '/conveyor-types/transfer-conveyors/shuttle/' },
      ] },
      { label: "Trough Conveyors", href: '/conveyor-types/trough-conveyors/' },
      { label: "Vacuum Conveyors", href: '/conveyor-types/vacuum-conveyors/' },
      { label: "Vertical Lift Conveyors", href: '/conveyor-types/vertical-lift/' },
      { label: "Vertical Reciprocating Conveyors", href: '/conveyor-types/vertical-reciprocating/' },
      { label: "Vibratory Conveyors & Feeders", href: '/conveyor-types/vibratory-conveyors/' },
      { label: "Washdown Conveyors", href: '/conveyor-types/washdown-conveyors/' },
      { label: "Wire Mesh Belt Conveyors", href: '/conveyor-types/wire-mesh-conveyors/' },
    ],
  },
  {
    label: 'Industries', href: '/industries/',
    children: [
      { label: "Assembly Line Conveyors", href: '/industries/assembly-line-conveyors/' },
      { label: "Automotive Conveyors", href: '/industries/automotive-conveyors/' },
      { label: "Food-Grade Conveyors", href: '/industries/food-conveyors/', children: [
        { label: "Bakery Conveyor Systems", href: '/industries/food-conveyors/bakery/', children: [
          { label: "Cookie & Cracker Packaging", href: '/industries/food-conveyors/bakery/cookie-cracker/' },
        ] },
        { label: "Beverage Conveyors", href: '/industries/food-conveyors/beverage/' },
        { label: "Cooling Conveyors", href: '/industries/food-conveyors/cooling/' },
        { label: "Sanitary Conveyors", href: '/industries/food-conveyors/sanitary/' },
      ] },
      { label: "Mining Conveyors", href: '/industries/mining-conveyors/' },
      { label: "Packaging Line Conveyors", href: '/industries/packaging-line-conveyors/', children: [
        { label: "Case Packing & Case Conveyors", href: '/industries/packaging-line-conveyors/case/', children: [
          { label: "Robotic Case Packing", href: '/industries/packaging-line-conveyors/case/robotic-case-packing/' },
        ] },
        { label: "Pallet Conveyors", href: '/industries/packaging-line-conveyors/pallet/', children: [
          { label: "Pallet Dispensers", href: '/industries/packaging-line-conveyors/pallet/pallet-dispenser/' },
        ] },
      ] },
      { label: "Pharmaceutical & Cleanroom Conveyors", href: '/industries/pharmaceutical-conveyors/', children: [
        { label: "Cleanroom Conveyors", href: '/industries/pharmaceutical-conveyors/cleanroom/' },
      ] },
      { label: "Warehouse & Distribution Conveyors", href: '/industries/warehouse-conveyors/' },
    ],
  },
  {
    label: 'Functions', href: '/conveyor-functions/',
    children: [
      { label: "Bag Loading", href: '/conveyor-functions/bag-loading/' },
      { label: "Ball Transfer Tables", href: '/conveyor-functions/ball-transfer-tables/' },
      { label: "Collating & Laning", href: '/conveyor-functions/collating-laning/' },
      { label: "Indexing Conveyors", href: '/conveyor-functions/indexing-conveyors/' },
      { label: "Infeed & Outfeed Systems", href: '/conveyor-functions/infeed-outfeed/', children: [
        { label: "Star Wheel", href: '/conveyor-functions/infeed-outfeed/star-wheel/' },
      ] },
      { label: "Inspection & Detection", href: '/conveyor-functions/inspection-detection/' },
      { label: "Metering", href: '/conveyor-functions/metering/' },
      { label: "Product Handling: Turn, Flip, Orient, Invert", href: '/conveyor-functions/product-handling/', children: [
        { label: "Spreader Conveyors", href: '/conveyor-functions/product-handling/spreader/' },
      ] },
      { label: "Pusher & Diverter Mechanisms", href: '/conveyor-functions/pusher-diverter/' },
      { label: "Reject Systems", href: '/conveyor-functions/reject-systems/' },
      { label: "Singulation", href: '/conveyor-functions/singulation/' },
      { label: "Slug Loading", href: '/conveyor-functions/slug-loading/' },
      { label: "Stacking Machines & Stackers", href: '/conveyor-functions/stacking-machines/' },
      { label: "Storage Conveyors", href: '/conveyor-functions/storage-conveyors/' },
      { label: "Tray Loading", href: '/conveyor-functions/tray-loading/' },
    ],
  },
  {
    label: 'Resources', href: '/resources/',
    children: [
      { label: "Automated Conveyor Systems", href: '/resources/automated-conveyor-systems/' },
      { label: "Conveyor Belting", href: '/resources/conveyor-belting/' },
      { label: "Conveyor Companies Near You", href: '/resources/conveyor-companies/' },
      { label: "Conveyor Cost Guide", href: '/resources/conveyor-cost-guide/' },
      { label: "Conveyor Design Guide", href: '/resources/conveyor-design-guide/', children: [
        { label: "Engineering", href: '/resources/conveyor-design-guide/conveyor-engineering/' },
        { label: "Frame, Drive & Pulley Design", href: '/resources/conveyor-design-guide/components/' },
      ] },
      { label: "Conveyor Maintenance", href: '/resources/conveyor-maintenance/' },
      { label: "Conveyor Manufacturers", href: '/resources/conveyor-manufacturers/', children: [
        { label: "Custom Conveyor Design", href: '/resources/conveyor-manufacturers/custom/' },
      ] },
      { label: "Conveyor Parts & Replacement", href: '/resources/conveyor-parts/' },
      { label: "Conveyor Safety", href: '/resources/conveyor-safety/' },
      { label: "Conveyor Suppliers", href: '/resources/conveyor-suppliers/' },
      { label: "Motors & Drives", href: '/resources/conveyor-motors-drives/' },
    ],
  },
  {
    label: 'Components', href: '/components/',
    children: [
      { label: "Cleaning Systems", href: '/components/cleaning-systems/' },
      { label: "Guide Rails", href: '/components/guide-rails/' },
    ],
  },
];

export const sectionFor = (path: string) => sections.find(s => path.startsWith(s.href));
