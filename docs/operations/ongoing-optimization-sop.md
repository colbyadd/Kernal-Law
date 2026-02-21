# Ongoing Optimization SOP

Updated: 2026-02-18

## Purpose

Maintain 10/10 content, UX, and SEO quality by enforcing recurring QA, controlled rollout discipline, and periodic pruning.

## Weekly Cadence

1. Run full quality gate:
   - `npm run verify`
2. Review conversion-path quality on P0 routes:
   - `/`
   - `/criminal-defense`
   - `/personal-injury`
   - `/contact`
3. Confirm no regressions in:
   - resource-to-money-page internal links,
   - mobile quick actions,
   - contact intake field completeness.
4. Review new pages for title-intent overlap against existing service/resource owners.

## Biweekly (Sprint Close)

1. Update sprint delivery notes under `docs/sprint-*/delivery-notes.md`.
2. Update status board in `docs/sprint-0/execution-backlog.md`.
3. Validate that newly shipped templates still satisfy:
   - `qa:content`
   - `qa:conversion`
   - `qa:seo`
4. Check for form payload/schema changes and update Netlify form manifests when needed:
   - `public/__forms.html`
   - `public/form-setup.html`

## Monthly Cadence

1. Cannibalization review:
   - Re-check service/resource intent ownership map in `docs/sprint-9/cannibalization-map.md`.
   - Identify duplicate-intent page candidates.
2. Conversion review:
   - Compare `cta_variant` and lead-source trend outputs from analytics intake exports.
   - Keep winning CTA variant as default if clear performance gap is stable.
3. Market quality audit:
   - Spot-check at least 10 city/county pages for local uniqueness and link quality.

## Quarterly Cadence

1. Top-20 page scoring audit against rubric:
   - `docs/sprint-0/10x-content-ux-rubric.md`
2. Prune/merge candidates:
   - Merge or de-emphasize pages with persistent overlap and low strategic value.
3. Re-baseline technical architecture:
   - Sitemap coverage,
   - schema naming consistency,
   - conversion-path continuity on mobile.

## Change-Control Rules

1. Do not ship new page templates without QA script coverage.
2. Do not add new hidden form fields without updating both Netlify form definition files.
3. Do not publish new resource or service clusters without bidirectional internal-link mapping.
4. Keep canonical targets on modern routes; avoid canonical references to redirecting legacy paths.

## Enforcement Commands

- Content standards only: `npm run qa:content`
- Conversion UX only: `npm run qa:conversion`
- Technical SEO only: `npm run qa:seo`
- Full gate before release: `npm run verify`
