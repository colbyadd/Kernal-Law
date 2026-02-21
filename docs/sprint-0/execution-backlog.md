# Execution Backlog (10/10 Program)

Updated: 2026-02-18
Status legend: `planned`, `in-progress`, `done`, `blocked`

## P0 Epics

1. EPIC-01: Core UX and conversion architecture
2. EPIC-02: Criminal defense authority build
3. EPIC-03: Personal injury authority build
4. EPIC-04: Proof and trust engine
5. EPIC-05: Market uniqueness at scale
6. EPIC-06: Resource authority engine
7. EPIC-07: Technical SEO and QA hardening

## Ticket Backlog

| ID | Sprint | Epic | Task | Acceptance Criteria | Status |
|---|---|---|---|---|---|
| UX-001 | S1 | EPIC-01 | Finalize global IA and header behavior | Desktop/mobile nav stable, no hover trap, IA approved | done |
| UX-002 | S1 | EPIC-01 | Standardize hero structure for top pages | First viewport shows intent + proof cue + primary CTA | done |
| UX-003 | S1 | EPIC-01 | Standardize CTA hierarchy blocks | Top and bottom CTA consistency on top 10 pages | done |
| UX-004 | S1 | EPIC-01 | Build page scannability checklist | Checklist applied to all P0 pages | done |
| UX-005 | S1 | EPIC-01 | Mobile form friction pass | Contact completion path <= current friction baseline | done |
| TMP-001 | S2 | EPIC-01 | Lock pillar template contract | Required sections enforced and documented | done |
| TMP-002 | S2 | EPIC-05 | Lock market-subpillar uniqueness checklist | 35%+ local unique language standard in QA | done |
| TMP-003 | S2 | EPIC-01 | Add trust-module placement standard | Proof module appears before final CTA on money pages | done |
| TMP-004 | S2 | EPIC-01 | Add editorial legal-safety checklist | No guarantee language, no stale legal claims | done |
| CD-001 | S3 | EPIC-02 | Rebuild `/criminal-defense` depth pass | Content >= 8.5 by rubric | done |
| CD-002 | S3 | EPIC-02 | Rebuild `/criminal-defense/dui-dwi` | Content >= 8.3, UX >= 8.2 | done |
| CD-003 | S3 | EPIC-02 | Rebuild `/criminal-defense/drug-charges` | Content >= 8.3, UX >= 8.2 | done |
| CD-004 | S3 | EPIC-02 | Rebuild `/criminal-defense/warrants` | Content >= 8.2, UX >= 8.2 | done |
| CD-005 | S3 | EPIC-02 | Rebuild two additional high-value criminal pages | Each >= 8.1 content/UX | done |
| PI-001 | S4 | EPIC-03 | Rebuild `/personal-injury` depth pass | Content >= 8.5 by rubric | done |
| PI-002 | S4 | EPIC-03 | Rebuild `/personal-injury/car-accidents` | Content >= 8.3, UX >= 8.2 | done |
| PI-003 | S4 | EPIC-03 | Rebuild `/personal-injury/truck-accidents` | Content >= 8.3, UX >= 8.2 | done |
| PI-004 | S4 | EPIC-03 | Rebuild `/personal-injury/wrongful-death` | Content >= 8.2, UX >= 8.2 | done |
| PI-005 | S4 | EPIC-03 | Rebuild two additional high-value injury pages | Each >= 8.1 content/UX | done |
| PRF-001 | S5 | EPIC-04 | Redesign `/case-results` IA and taxonomy | Improved scan UX and stronger legal-proof framing | done |
| PRF-002 | S5 | EPIC-04 | Redesign `/client-reviews` structure | Better trust readability and conversion adjacency | done |
| PRF-003 | S5 | EPIC-04 | Enhance `/attorney` authority stack | More concrete credentials/process proof | done |
| PRF-004 | S5 | EPIC-04 | Embed trust modules into top service pages | Trust appears before final CTA on all P0 pages | done |
| MKT-001 | S6 | EPIC-05 | Rebuild OKC criminal + injury pages | Both pages >= 8.3 content | done |
| MKT-002 | S6 | EPIC-05 | Rebuild Norman criminal + injury pages | Both pages >= 8.2 content | done |
| MKT-003 | S6 | EPIC-05 | Rebuild Edmond criminal + injury pages | Both pages >= 8.2 content | done |
| MKT-004 | S6 | EPIC-05 | Rebuild Moore + Midwest City criminal pages | Each >= 8.1 content | done |
| MKT-005 | S6 | EPIC-05 | Market wave 1 link architecture pass | All rebuilt pages have intent-matched internal links | done |
| MKT-006 | S7 | EPIC-05 | Rebuild county set wave 2 | Oklahoma/Cleveland/Canadian/Payne + adjacent counties rebuilt | done |
| MKT-007 | S7 | EPIC-05 | Rebuild secondary city set wave 2 | Shawnee/Stillwater/El Reno/etc. from same standard | done |
| MKT-008 | S7 | EPIC-05 | Duplicate-risk QA sweep | No market page fails uniqueness checklist | done |
| RES-001 | S8 | EPIC-06 | Rebuild `/resources` as authority hub | Clear taxonomy and conversion-path mapping | done |
| RES-002 | S8 | EPIC-06 | Expand DUI process guide | Guide reaches >= 8.5 content score | done |
| RES-003 | S8 | EPIC-06 | Expand arrest-response guide | Guide reaches >= 8.5 content score | done |
| RES-004 | S8 | EPIC-06 | Expand car-accident-response guide | Guide reaches >= 8.5 content score | done |
| RES-005 | S8 | EPIC-06 | Publish 4 new high-intent resources | Each mapped to pillar conversion path | done |
| SEO-001 | S9 | EPIC-07 | Schema QA and consistency pass | No critical schema errors on priority pages | done |
| SEO-002 | S9 | EPIC-07 | Internal-link graph cleanup | Cannibalization risks identified and mitigated | done |
| SEO-003 | S9 | EPIC-07 | Metadata/canonical pass | Canonical/meta consistency across top routes | done |
| CRO-001 | S10 | EPIC-01 | CTA copy/placement experiment set | At least 2 controlled variants on P0 pages | done |
| CRO-002 | S10 | EPIC-01 | Contact intake flow optimization | Lower friction without lead-quality drop | done |
| CRO-003 | S10 | EPIC-01 | Mobile conversion pass | Mobile conversion flow reaches UX >= 8.8 | done |
| FIN-001 | S11 | EPIC-07 | Final top-20 scoring audit | Top-20 average >= 9.0 content and UX | done |
| FIN-002 | S11 | EPIC-07 | Prune/merge underperformers | Low-value or duplicate pages cleaned up | done |
| FIN-003 | S11 | EPIC-07 | Publish long-term operating SOP | Weekly/monthly governance documented | done |

## Blockers and Dependencies

1. GA4 property and conversion reporting access (required for quantitative CRO decisions).
2. Ongoing attorney review availability for legal-substance validation.
3. Case outcome/review data quality and publishing constraints.
4. Fast approval cycle for copy and layout decisions.
