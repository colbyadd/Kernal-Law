# Sprint 0 URL Baseline Scorecard

Updated: 2026-02-18
Scope: pre-implementation baseline for 10/10 program

## Method

Baseline uses code/content audit only (no GA4 data available yet).

Inputs:
- route inventory from `app/**/page.tsx` (106 routes)
- template audit (`ServiceDetailPage`, `LocationServicePage`, `ResourceGuidePage`)
- manual review of top commercial pages and trust/conversion pages
- UX behavior review (header, mobile menu, CTA hierarchy, form flow)

Scoring model:
- `Content`: 0-10 (depth, uniqueness, proof, intent fit)
- `UX`: 0-10 (clarity, wayfinding, mobile, friction, trust)

## Inventory Summary

- Total page routes: `106`
- Core conversion pages: `7`
- Pillar pages: `5`
- Service subpillars: `17`
- Market hubs: `8`
- Market subpillars: `62`
- Resource pages: `4`
- Other legal/utility pages: `3`

## Program-Level Baseline

- Portfolio content score (weighted by commercial value): `6.1 / 10`
- Portfolio UX score (weighted by commercial value): `7.0 / 10`
- Current state: strong structure, insufficient elite depth and proof consistency.

## Priority URL Scorecard (Top Commercial Set)

| URL | Type | Value Tier | Content | UX | Priority | Target Sprint | Notes |
|---|---|---|---:|---:|---|---|---|
| `/` | Core | P0 | 6.5 | 7.8 | High | S1-S3 | Good presentation; needs stronger proof + intent segmentation above fold. |
| `/criminal-defense` | Pillar | P0 | 7.0 | 7.2 | High | S3 | Strong base, needs deeper strategy blocks and richer first-party proof. |
| `/personal-injury` | Pillar | P0 | 7.0 | 7.2 | High | S4 | Strong base, needs damages/process depth and stronger credibility stack. |
| `/criminal-defense/dui-dwi` | Service subpillar | P0 | 6.2 | 7.0 | High | S3 | Good template quality; needs higher legal nuance and local court detail. |
| `/criminal-defense/drug-charges` | Service subpillar | P0 | 6.0 | 7.0 | High | S3 | Needs evidence-challenge depth and stronger scenario coverage. |
| `/criminal-defense/warrants` | Service subpillar | P0 | 6.0 | 7.0 | High | S3 | Needs practical workflow detail and urgency-focused CTA pathing. |
| `/personal-injury/car-accidents` | Service subpillar | P0 | 6.3 | 7.1 | High | S4 | Needs stronger valuation logic and insurer-negotiation detail. |
| `/personal-injury/truck-accidents` | Service subpillar | P0 | 6.3 | 7.1 | High | S4 | Needs commercial-liability depth and evidence timeline details. |
| `/personal-injury/wrongful-death` | Service subpillar | P0 | 6.1 | 7.0 | High | S4 | Needs damages framework and family decision-path clarity. |
| `/oklahoma-city/criminal-defense` | Market subpillar | P0 | 5.8 | 7.0 | High | S6 | Needs materially more unique OKC venue/enforcement specificity. |
| `/oklahoma-city/personal-injury` | Market subpillar | P0 | 5.8 | 7.0 | High | S6 | Needs unique metro risk patterns and localized claim strategy depth. |
| `/norman/criminal-defense` | Market subpillar | P0 | 5.7 | 7.0 | High | S6 | Template quality is good; uniqueness depth still below elite threshold. |
| `/norman/personal-injury` | Market subpillar | P1 | 5.8 | 7.0 | Medium | S6-S7 | Needs stronger local collision/insurer context. |
| `/edmond/criminal-defense` | Market subpillar | P0 | 5.6 | 6.9 | High | S6 | Needs higher local authority and stronger proof near CTA. |
| `/edmond/personal-injury` | Market subpillar | P1 | 5.7 | 6.9 | Medium | S6-S7 | Needs market-unique claims narrative and stronger internal linking. |
| `/moore/criminal-defense` | Market subpillar | P1 | 5.5 | 6.9 | Medium | S7 | Needs deeper local process content and trust blocks. |
| `/midwest-city/criminal-defense` | Market subpillar | P1 | 5.5 | 6.9 | Medium | S7 | Needs stronger local specificity and cross-link clarity. |
| `/oklahoma-county/criminal-defense` | Market subpillar | P0 | 5.7 | 7.0 | High | S7 | County-level opportunity; needs real county-specific legal depth. |
| `/cleveland-county/criminal-defense` | Market subpillar | P1 | 5.6 | 7.0 | Medium | S7 | Needs stronger county process mapping and court-context detail. |
| `/canadian-county/criminal-defense` | Market subpillar | P1 | 5.6 | 7.0 | Medium | S7 | Needs clear county differentiation vs city pages. |
| `/payne-county/criminal-defense` | Market subpillar | P2 | 5.4 | 6.9 | Medium | S7-S8 | Needs depth and stronger resource support links. |
| `/resources` | Resource hub | P1 | 5.5 | 6.8 | Medium | S8 | Hub needs stronger taxonomy and intent-to-service mapping. |
| `/resources/oklahoma-dui-process` | Resource guide | P1 | 7.0 | 7.3 | Medium | S8 | Good baseline guide; expand authority and decision trees. |
| `/resources/what-to-do-after-arrest-oklahoma` | Resource guide | P1 | 7.1 | 7.3 | Medium | S8 | Good baseline; increase unique legal examples + interlinking. |
| `/resources/what-to-do-after-car-accident-oklahoma` | Resource guide | P1 | 7.0 | 7.3 | Medium | S8 | Good baseline; needs stronger valuation and evidence workflows. |
| `/contact` | Conversion | P0 | 5.8 | 8.0 | High | S10 | Strong conversion shell; reduce friction and sharpen expectation setting. |
| `/attorney` | Trust | P0 | 6.8 | 7.4 | High | S5 | Strong trust page; add stronger authority/proof modules and schema polish. |
| `/case-results` | Trust | P0 | 5.6 | 6.5 | High | S5 | Needs deeper case taxonomy, filters, and narrative proof detail. |
| `/client-reviews` | Trust | P0 | 5.7 | 6.6 | High | S5 | Needs stronger organization, recency framing, and conversion tie-ins. |
| `/locations` | Hub | P1 | 6.2 | 6.8 | Medium | S6-S7 | Valuable hub; needs clearer hierarchy and primary market prioritization. |

## Critical Baseline Findings

1. The architecture is scalable, but many market subpillars are still too close in substance to reach top-tier competitiveness.
2. Proof stack is present but not yet dominant on money pages (especially case results and review integration patterns).
3. UX is much improved in nav clarity, but page-level scan hierarchy and conversion sequencing need tighter consistency.
4. Resource content is promising and should be converted into a stronger authority engine that feeds pillar conversions.
5. Lack of GA4 blocks quantitative attribution; Sprint 0 uses qualitative + structural baseline only.

## Score Uplift Targets

- By Sprint 5: Top 10 commercial URLs average `Content >= 7.8`, `UX >= 8.2`
- By Sprint 8: Top 20 commercial URLs average `Content >= 8.5`, `UX >= 8.7`
- By Sprint 11: Top 20 commercial URLs average `Content >= 9.0`, `UX >= 9.0`
