# Sprint 9 Delivery Notes

Updated: 2026-02-18

## Technical SEO Hardening (Wave 1)

### Completed

- Expanded sitemap coverage for market overview routes generated from market slug inventory:
  - `app/sitemap.ts`
  - Added dynamic `/${market}` overview entries for non-dedicated city/county pages
- Completed metadata/canonical wiring for Sprint 8 resource pages:
  - `/resources/oklahoma-felony-case-timeline`
  - `/resources/oklahoma-bond-and-release-conditions`
  - `/resources/oklahoma-uninsured-motorist-claim-guide`
  - `/resources/oklahoma-truck-accident-evidence-guide`
- Updated schema page-name and breadcrumb mappings for new resource pages:
  - `lib/schema/builders.ts`
- Added dynamic schema naming support for non-dedicated market overview pages:
  - `getPageName()` now returns market-specific titles for `/${market}` routes

### QA Automation Added

- New automated SEO standards gate:
  - `scripts/qa-seo-standards.mjs`
- Checks include:
  - Sitemap market-route coverage structure
  - Resource route inclusion in sitemap and schema maps
  - Canonical/OpenGraph URL presence in resource metadata
  - Resource-link presence on priority money pages
  - Dynamic market schema naming coverage
- Added npm scripts:
  - `qa:seo`
  - `verify` now runs `lint`, `qa:content`, `qa:seo`, and `build`

### Internal-Link and Cannibalization Pass (`SEO-002`)

- Status: `done`
- Bidirectional resource-to-money-page linking expanded in Sprint 8.
- Market overview templates now include direct links into resource guides and resources hub:
  - `lib/content/location-market-page-specs.ts`
- Market service subpillar templates now include direct resource links in criminal and injury related-link blocks:
  - `lib/content/city-subpillars.ts`
  - Cannibalization control map published:
    - `docs/sprint-9/cannibalization-map.md`
  - SEO QA automation extended to enforce intent disambiguation and market-template resource-link coverage:
    - `scripts/qa-seo-standards.mjs`
