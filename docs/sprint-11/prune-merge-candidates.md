# Prune / Merge Candidates

Updated: 2026-02-18

## Decision Rules

1. Keep service pages as conversion owners; do not prune core money pages.
2. Prefer merge or de-emphasis for overlap pages that do not own unique intent.
3. Keep market pages indexed only when they support clear location intent and conversion adjacency.

## FIN-002 Actions Completed

1. De-emphasized broad directory route `/locations` from index strategy:
   - Set route metadata to `robots: noindex,follow`.
   - Removed `/locations` from sitemap output.
2. Shifted footer location authority to core conversion markets:
   - Replaced generic `/locations` footer link with direct links to `/oklahoma-city` and `/norman`.
3. Retained `/practice` as a controlled transitional hub because header IA still uses “Practice Areas.”
4. Retained overlap-prone resource/service pairs with explicit intent boundaries (guide intent vs representation intent).

## Candidate Set (Post-Execution)

| Candidate | Current Role | Risk | Status |
|---|---|---|---|
| `/practice` | Transitional hub between top-level practice pillars | Medium overlap | Retained with monitoring. |
| `/resources/oklahoma-bond-and-release-conditions` vs `/criminal-defense/probation-violation` | Related compliance/defense topics | Medium overlap | Retained with strict intent split. |
| `/resources/oklahoma-felony-case-timeline` vs criminal subpillars | Educational timeline overlaps category pages | Low-medium overlap | Retained as cluster asset. |
| `/locations` | Broad directory page | Medium crawl dilution | De-indexed; kept for user navigation only. |
| lower-demand city overviews | Market discovery pages | Medium crawl dilution | Retained; authority routing biased toward core city and county conversion pages. |

## Next Cycle Triggers

1. Prune when a page has no unique-intent owner in the cannibalization map.
2. Prune when internal-link contribution is weak across two consecutive cycles.
3. Prune when a route cannot pass content + UX threshold after two editorial iterations.
