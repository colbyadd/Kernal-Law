# Sprint 1 Schema Architecture Plan

Updated: 2026-02-17

## Current State

- Global schema and breadcrumbs are emitted from:
  - `app/components/JsonLd.tsx` (`use client`)
- FAQ schema is emitted in:
  - `app/components/FaqSection.tsx` (`use client`)
- Page-specific schema exists on location/attorney/testimonial pages.

## Risks in Current Pattern

- Schema in client components can be delayed by hydration.
- Mixed schema ownership makes duplication/conflicts more likely.
- Review schema needs strict ongoing compliance with visible source data.

## Sprint 1 Decisions

- Keep existing schema output live (no ranking-risk breakage).
- Standardize domain source (`BASE_URL`) and crawl metadata sources first.
- Create migration plan to server-rendered JSON-LD in next sprint.

## Sprint 2 Refactor Plan

1. Move base schema generation into server components.
2. Keep FAQ JSON-LD generated server-side per page template.
3. Centralize schema builders under a single module tree, then call from pages.
4. Add schema tests for:
   - required keys
   - duplicated `@id`
   - malformed URLs

## Validation Standard

- Google Rich Results Test: no errors on eligible types.
- Schema.org validator: no critical errors.
- Spot-check rendered source in production HTML (not only hydrated DOM).
