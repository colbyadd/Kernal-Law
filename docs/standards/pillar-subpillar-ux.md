# Pillar and Subpillar UX Standard

Updated: 2026-02-18

## Purpose

Enforce one elite-quality system across pillar and subpillar pages:
- consistent UX and conversion behavior
- high legal-content depth
- market-specific uniqueness without layout drift

## Core Rules

1. Form and style can be standardized, but substance cannot be duplicated.
2. Every page must answer: what issue this page solves, why this firm is credible, and what action to take now.
3. Mobile readability takes precedence over desktop embellishment.
4. No page ships without proof, process clarity, and clear CTA sequencing.

## Pillar Standard

Pillar routes are top-level category pages (for example `/criminal-defense`, `/personal-injury`).

Required:
1. Above-the-fold value proposition with one primary CTA and one alternate CTA.
2. Service map linking to all relevant subpillars.
3. Practical process section that explains how cases progress.
4. Proof section (results/reviews/authority) above final CTA.
5. FAQ section for intent capture and risk reduction.
6. Bottom conversion CTA with clear expectation setting.

Depth target:
- 2,500+ words of unique content per pillar page.

## Service Subpillar Standard

Service subpillars are intent pages under a pillar (for example `/criminal-defense/dui-dwi`).

Required section counts:
1. 3 focus blocks
2. 4 process steps
3. 4 FAQs
4. 6 related internal links

Template source:
- `app/components/ServiceDetailPage.tsx`

Type-enforced standard:
- `lib/content/subpillar-standards.ts`

Depth target:
- 1,500+ words of unique content per service subpillar.

## Market-Service Subpillar Standard

Routes follow `/market/pillar` style (for example `/moore/criminal-defense`, `/oklahoma-county/criminal-defense`).

Structure rules:
1. Keep component stack and visual rhythm identical between sibling market pages.
2. Keep CTA order and placement consistent across all market pages.
3. Keep heading hierarchy and spacing consistent to reduce UX variance.

Uniqueness rules (mandatory):
1. Each market page includes unique venue/county context.
2. Each market page includes unique roadway/incident or enforcement context.
3. Each market page includes unique risk framing for local case patterns.
4. At least 35% of body copy must be market-specific language.
5. Internal links must include market-relevant nearby pages, not generic repeats only.

Content model source:
- `lib/content/city-subpillars.ts`

Depth target:
- 1,200+ words of unique content per market subpillar.

## UX Rules

1. Keep nav and wayfinding low-cognitive-load.
2. Make first viewport answer user intent in under 5 seconds.
3. Avoid long text walls; use scannable headings and compact support bullets.
4. Keep conversion actions visible without forcing full-scroll discovery.
5. Keep touch targets and spacing mobile-safe.
6. Avoid interaction traps in navigation or dropdown behavior.

## Trust and Conversion Rules

1. Every money page includes a trust module before final CTA.
2. Every money page links to proof pages (`/case-results`, `/client-reviews`, `/attorney`) where contextually relevant.
3. Contact pathways must include clear expectations and legally safe language.
4. Terms/privacy/SMS consent language must stay synchronized with form consent copy.

## QA Release Gates

Before publishing any pillar/subpillar update:
1. `npm run lint` passes.
2. `npm run qa:content` passes.
3. `npm run build` passes.
4. Required section counts are satisfied.
5. Uniqueness checklist is complete for market pages.
6. Internal links are live and relevant to user intent.
7. CTA tracking labels (`data-cta`) are present for key actions.

Automation reference:
- `scripts/qa-content-standards.mjs`
- `docs/sprint-2/template-governance-checklist.md`

## Editorial Governance

Weekly:
1. Re-score top 20 commercial pages for content and UX.
2. Log pages below threshold (`<8.0`) for next sprint.

Monthly:
1. Refresh stale legal/process language.
2. Revalidate proof modules and outcome framing.
3. Re-check top market pages for uniqueness drift.
