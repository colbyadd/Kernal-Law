# Top-20 Audit (Automated Heuristic)

Updated: 2026-02-21

Method: template-aware heuristic using route + shared component signals for content-depth and UX patterns.

Average Content Score: **9.8**

Average UX Score: **9.7**

| Route | File | Content | UX | Notes |
|---|---|---:|---:|---|
| `/` | `app/page.tsx` | 9.6 | 9.2 | Pass |
| `/criminal-defense` | `app/criminal-defense/page.tsx` | 9.1 | 9.2 | Pass |
| `/criminal-defense/dui-dwi` | `app/criminal-defense/dui-dwi/page.tsx` | 10.0 | 10.0 | Template: service |
| `/criminal-defense/drug-charges` | `app/criminal-defense/drug-charges/page.tsx` | 10.0 | 10.0 | Template: service |
| `/criminal-defense/warrants` | `app/criminal-defense/warrants/page.tsx` | 10.0 | 10.0 | Template: service |
| `/criminal-defense/domestic-violence` | `app/criminal-defense/domestic-violence/page.tsx` | 10.0 | 10.0 | Template: service |
| `/personal-injury` | `app/personal-injury/page.tsx` | 9.1 | 9.2 | Pass |
| `/personal-injury/car-accidents` | `app/personal-injury/car-accidents/page.tsx` | 10.0 | 10.0 | Template: service |
| `/personal-injury/truck-accidents` | `app/personal-injury/truck-accidents/page.tsx` | 10.0 | 10.0 | Template: service |
| `/personal-injury/wrongful-death` | `app/personal-injury/wrongful-death/page.tsx` | 10.0 | 10.0 | Template: service |
| `/personal-injury/catastrophic-injury` | `app/personal-injury/catastrophic-injury/page.tsx` | 10.0 | 10.0 | Template: service |
| `/personal-injury/uninsured-motorist` | `app/personal-injury/uninsured-motorist/page.tsx` | 10.0 | 10.0 | Template: service |
| `/oklahoma-city` | `app/oklahoma-city/page.tsx` | 9.7 | 10.0 | Template: location |
| `/oklahoma-city/criminal-defense` | `app/oklahoma-city/criminal-defense/page.tsx` | 10.0 | 10.0 | Template: service |
| `/oklahoma-city/personal-injury` | `app/oklahoma-city/personal-injury/page.tsx` | 10.0 | 10.0 | Template: service |
| `/norman` | `app/norman/page.tsx` | 9.7 | 10.0 | Template: location |
| `/contact` | `app/contact/page.tsx` | 9.5 | 9.2 | Pass |
| `/case-results` | `app/case-results/page.tsx` | 9.9 | 9.2 | Pass |
| `/client-reviews` | `app/client-reviews/page.tsx` | 9.5 | 9.2 | Pass |
| `/resources` | `app/resources/page.tsx` | 9.6 | 9.2 | Pass |

## Follow-Up

1. Improve routes scoring below 8.5 in either dimension.
2. Re-run this audit weekly after major content or UX changes.
3. Pair this heuristic with human editorial review before final publication decisions.
