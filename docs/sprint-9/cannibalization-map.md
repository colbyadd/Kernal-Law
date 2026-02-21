# Cannibalization Control Map (Sprint 9)

Updated: 2026-02-18

## Intent Ownership Rules

| Cluster | Conversion Page (Owner) | Supporting Resource (Assistant) | Control Rule |
|---|---|---|---|
| DUI defense | `/criminal-defense/dui-dwi` | `/resources/oklahoma-dui-process` | Service page owns hire-intent; guide owns process-intent. |
| Arrest response | `/criminal-defense` | `/resources/what-to-do-after-arrest-oklahoma` | Hub owns representation-intent; guide owns first-48-hours checklist intent. |
| Felony strategy | `/criminal-defense` + felony service pages | `/resources/oklahoma-felony-case-timeline` | Services own case-defense intent; guide owns timeline-education intent. |
| Bond compliance | `/criminal-defense/probation-violation` and local criminal pages | `/resources/oklahoma-bond-and-release-conditions` | Service pages own legal-defense intent; guide owns compliance-workflow intent. |
| Car accident claims | `/personal-injury/car-accidents` | `/resources/what-to-do-after-car-accident-oklahoma` | Service page owns attorney/claim-intent; guide owns immediate-response intent. |
| UM/UIM disputes | `/personal-injury/uninsured-motorist` | `/resources/oklahoma-uninsured-motorist-claim-guide` | Service page owns representation intent; guide owns policy-workflow intent. |
| Truck crash litigation | `/personal-injury/truck-accidents` | `/resources/oklahoma-truck-accident-evidence-guide` | Service page owns litigation-intent; guide owns evidence-preservation intent. |

## Sitewide Anti-Cannibalization Standards

1. Service pages target representation language (`lawyer`, `attorney`, `defense`, `claims`).
2. Resource pages target informational modifiers (`guide`, `what to do`, `timeline`, `evidence`).
3. Every major service page links to at least one mapped resource page.
4. Every resource page links back to at least one mapped conversion page.
5. Market overview and market subpillar templates must pass authority into resource routes.

## Implemented in Sprint 9

- Dynamic market overview titles in schema now resolve to market-specific names (`/${market}` routes).
- Market subpillar templates now include resource links in both criminal and injury related-link blocks.
- Market overview template includes resource links in service and related sections.
- SEO QA automation now validates:
  - route coverage and metadata consistency,
  - intent disambiguation on core service/resource pairs,
  - resource-link presence in market templates.

## Remaining Watch Items

1. Continue weekly checks for title overlap after new page launches.
2. If two pages start targeting the same query family, keep conversion-intent on service pages and move educational variants to resources.
3. Avoid creating market-resource duplicates unless location-specific legal procedure materially differs.
