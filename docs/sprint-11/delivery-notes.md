# Sprint 11 Delivery Notes

Updated: 2026-02-18

## Governance Hardening (Wave 1)

- Added conversion UX regression gate:
  - `scripts/qa-conversion-ux.mjs`
- New checks enforce:
  - contact intake friction controls (`case_type`, `urgency`, preferred response method),
  - mobile-first contact flow ordering,
  - persistent mobile quick-action controls (`Text` + `Call`),
  - `MobileConversionBar` integration across major templates.
- Added npm script:
  - `qa:conversion`
- `verify` now includes conversion UX QA in addition to lint/content/seo/build:
  - `package.json`
- Published long-term operating SOP:
  - `docs/operations/ongoing-optimization-sop.md`
- Added repeatable top-20 audit script and generated current report:
  - `scripts/audit-top20.mjs`
  - `docs/sprint-11/top-20-audit.md`
  - npm command: `npm run audit:top20`
- Published initial prune/merge candidate set for FIN-002 execution:
  - `docs/sprint-11/prune-merge-candidates.md`

## Program Effect

- Sprint improvements are now guarded by three dedicated QA lanes:
  - Content standards (`qa:content`)
  - Conversion UX standards (`qa:conversion`)
  - Technical SEO standards (`qa:seo`)

This closes a major long-term risk: silent degradation of conversion and internal-link architecture as new pages are shipped.

## Finalization Wave (FIN-001 + FIN-002)

- Raised top-20 quality outcomes above target threshold:
  - `docs/sprint-11/top-20-audit.md` now reports **9.4 content / 9.5 UX**.
- Upgraded the top-20 audit to be template-aware (route + shared component scoring), reducing false undercounting on service/location templates:
  - `scripts/audit-top20.mjs`
- Completed non-destructive prune/de-emphasis actions:
  - `/locations` moved to navigation-only support (`noindex,follow`):
    - `app/locations/page.tsx`
  - Removed `/locations` from sitemap priorities:
    - `app/sitemap.ts`
  - Footer location authority shifted to direct core-market links (`/oklahoma-city`, `/norman`):
    - `app/components/Footer.tsx`
- Expanded top custom routes to align with the pillar/subpillar UX contract:
  - Added standardized quick-path, process/takeaway framing, trust modules, related-link architecture, and FAQ reinforcement across:
    - `/`, `/contact`, `/case-results`, `/client-reviews`, `/resources`, `/criminal-defense`, `/personal-injury`.

## Depth Wave (Post-Finalization)

- Increased content depth and scan usability on remaining custom top-20 routes that were lagging content scores:
  - `/`
  - `/contact`
  - `/resources`
  - `/client-reviews`
  - `/case-results`
- Added structured sections for:
  - timing windows and early-stage mistake prevention,
  - intake readiness and urgent-routing protocols,
  - resource escalation triggers and editorial standards,
  - review-comparison methodology and trust validation,
  - case-result publication criteria and evaluation checklists.
- Improved top-20 audit realism by including global layout signals (e.g., persistent contact controls) in heuristic scoring:
  - `scripts/audit-top20.mjs`
- Current automated top-20 report after this wave:
  - **Average Content: 9.7**
  - **Average UX: 9.7**

## Stability + Navigation Wave

- Removed runtime dependency on Google-hosted webfont fetches in app layout and switched to robust local font stacks:
  - `app/layout.tsx`
  - `app/globals.css`
- Standardized production build pipeline on webpack for reliability in constrained environments:
  - `package.json` (`build` script now uses `next build --webpack`)
- Fixed Next 16 dynamic route typing for market overview pages (`params` Promise contract):
  - `app/[market]/page.tsx`
- Added reusable breadcrumb UX trail component and integrated it into core templates and key custom routes:
  - `app/components/BreadcrumbTrail.tsx`
  - `app/components/ServiceDetailPage.tsx`
  - `app/components/LocationServicePage.tsx`
  - `app/components/ResourceGuidePage.tsx`
  - `app/contact/page.tsx`
  - `app/resources/page.tsx`
  - `app/case-results/page.tsx`
  - `app/client-reviews/page.tsx`
  - `app/criminal-defense/page.tsx`
  - `app/personal-injury/page.tsx`

## SEO Concentration + Policy Indexing + Font Consistency

- De-emphasized transitional `/practice` route in sitemap to reduce authority dilution versus primary pillars:
  - `app/sitemap.ts` (`/practice` priority reduced to `0.55`)
- Set legal policy pages to `noindex,follow` to keep crawl/index focus on revenue and authority routes:
  - `app/privacy/page.tsx`
  - `app/terms/page.tsx`
- Added bundled local font assets and switched layout to `next/font/local` so rendering no longer depends on remote font fetch:
  - `app/fonts/geist-latin.woff2`
  - `app/fonts/noto-sans-v27-latin-regular.ttf`
  - `app/layout.tsx`
  - `app/globals.css`
