# Sprint 2 Delivery Notes

Updated: 2026-02-18

## New Route Architecture

- `/criminal-defense`
- `/personal-injury`
- `/locations`

## Wave 1A Money Pages

- `/criminal-defense/dui-dwi`
- `/criminal-defense/drug-charges`
- `/personal-injury/car-accidents`
- `/personal-injury/truck-accidents`

## Wave 1B Money Pages

- `/criminal-defense/domestic-violence`
- `/criminal-defense/assault-battery`
- `/personal-injury/oil-field-injuries`
- `/personal-injury/wrongful-death`

## Wave 2 Money Pages

- `/criminal-defense/sex-crimes`
- `/criminal-defense/theft-fraud`
- `/criminal-defense/expungement`
- `/criminal-defense/probation-violation`
- `/criminal-defense/warrants`
- `/personal-injury/motorcycle-accidents`
- `/personal-injury/catastrophic-injury`
- `/personal-injury/slip-and-fall`
- `/personal-injury/uninsured-motorist`

## Wave 2 Resource Pages

- `/resources`
- `/resources/what-to-do-after-arrest-oklahoma`
- `/resources/oklahoma-dui-process`
- `/resources/what-to-do-after-car-accident-oklahoma`

## Wave 3 Location Pages

- `/moore`
- `/edmond`
- `/midwest-city`
- `/del-city`
- `/yukon`
- `/mustang`

## Wave 4 Location-Service Pages

- `/oklahoma-city/criminal-defense`
- `/oklahoma-city/personal-injury`
- `/norman/criminal-defense`
- `/norman/personal-injury`

## Wave 5 Location-Service Pages

- `/moore/criminal-defense`
- `/moore/personal-injury`
- `/edmond/criminal-defense`
- `/edmond/personal-injury`
- `/midwest-city/criminal-defense`
- `/midwest-city/personal-injury`
- `/del-city/criminal-defense`
- `/del-city/personal-injury`
- `/yukon/criminal-defense`
- `/yukon/personal-injury`
- `/mustang/criminal-defense`
- `/mustang/personal-injury`

## Wave 6 Regional City Subpillars (Within ~100 Miles of OKC)

- `/stillwater/criminal-defense`
- `/stillwater/personal-injury`
- `/shawnee/criminal-defense`
- `/shawnee/personal-injury`
- `/el-reno/criminal-defense`
- `/el-reno/personal-injury`
- `/chickasha/criminal-defense`
- `/chickasha/personal-injury`
- `/guthrie/criminal-defense`
- `/guthrie/personal-injury`
- `/enid/criminal-defense`
- `/enid/personal-injury`
- `/lawton/criminal-defense`
- `/lawton/personal-injury`
- `/ada/criminal-defense`
- `/ada/personal-injury`
- `/choctaw/criminal-defense`
- `/choctaw/personal-injury`
- `/bethany/criminal-defense`
- `/bethany/personal-injury`
- `/newcastle/criminal-defense`
- `/newcastle/personal-injury`
- `/blanchard/criminal-defense`
- `/blanchard/personal-injury`

## Wave 7 County Subpillars (Within ~100 Miles of OKC)

- `/oklahoma-county/criminal-defense`
- `/oklahoma-county/personal-injury`
- `/cleveland-county/criminal-defense`
- `/cleveland-county/personal-injury`
- `/canadian-county/criminal-defense`
- `/canadian-county/personal-injury`
- `/logan-county/criminal-defense`
- `/logan-county/personal-injury`
- `/payne-county/criminal-defense`
- `/payne-county/personal-injury`
- `/pottawatomie-county/criminal-defense`
- `/pottawatomie-county/personal-injury`
- `/grady-county/criminal-defense`
- `/grady-county/personal-injury`
- `/mclain-county/criminal-defense`
- `/mclain-county/personal-injury`
- `/lincoln-county/criminal-defense`
- `/lincoln-county/personal-injury`
- `/comanche-county/criminal-defense`
- `/comanche-county/personal-injury`
- `/garfield-county/criminal-defense`
- `/garfield-county/personal-injury`

## Pillar/Subpillar Standards

- Added typed subpillar standards under:
  - `lib/content/subpillar-standards.ts`
- Added centralized market subpillar content model under:
  - `lib/content/city-subpillars.ts`
- Standardized requirements enforced for location-service subpillars:
  - 3 focus blocks
  - 4 process steps
  - 4 FAQs
  - 6 related internal links

## Conversion Stack Upgrades

- Added session attribution capture:
  - `app/components/LeadAttributionClient.tsx`
  - `lib/lead-attribution.ts`
  - `lib/contact.ts`
- Added lead-source hidden fields on contact form:
  - `page_path`, `page_type`, `landing_page`, `referrer`
  - `lead_source`, `phone_variant`
  - `utm_*` + click IDs (`gclid`, `gbraid`, `wbraid`, `msclkid`, `fbclid`)
- Added thank-you conversion event instrumentation:
  - `app/components/SuccessAttribution.tsx`
- Updated Netlify form definitions to include attribution fields:
  - `public/__forms.html`
  - `public/form-setup.html`

## Trust and Conversion Pages

- `/case-results`
- `/client-reviews`
- `/fees`

## Reusable Components Added

- `app/components/ServiceDetailPage.tsx`
- `app/components/LinkGridSection.tsx`

## Sitewide Wiring Completed

- Navigation updated to surface new service hubs and locations.
- Sitemap includes all new routes with explicit `lastModified` values.
- JSON-LD page-name and breadcrumb mappings include new routes.
- Home, footer, and location pages now link to new hubs/subpages.
- Legacy `/practice/criminal-defense*` and `/practice/personal-injury*` routes now permanently redirect to new canonical hubs.
- Navigation now includes the resources hub for crawl discovery and user pathing.

## Validation

- `npm run lint` passed.
- `npm run build` passed.
