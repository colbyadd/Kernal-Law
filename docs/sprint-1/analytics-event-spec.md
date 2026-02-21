# Sprint 1 Analytics Event Spec

Updated: 2026-02-17

## Implementation Mode

- Analytics loader is environment-driven.
- If `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set, GA4 is loaded via `gtag.js`.
- If unset, tracking calls no-op without runtime errors.

## Environment Variables

- `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- `NEXT_PUBLIC_PRIMARY_PHONE_E164=+14053640601`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...` (optional)
- `NEXT_PUBLIC_BING_SITE_VERIFICATION=...` (optional)

## Event Names (Implemented)

- `page_view`
- `cta_click`
- `click_to_call`
- `click_email`
- `map_click`
- `form_submit_start`
- `form_submit_success`
- `lead_source_captured`
- `thank_you_view`
- `scroll_50`
- `scroll_90`

## Event Parameters

- Common:
  - `page_path`
  - `page_type`
- `cta_click`:
  - `cta_name` (from `data-cta`)
- `click_to_call`:
  - `destination` (phone digits from `tel:`)
- `click_email`:
  - `destination` (email from `mailto:`)
- `map_click`:
  - `destination` (clicked URL)
- `form_submit_start`, `form_submit_success`:
  - `form_name`
  - `page_path`
  - `page_type`
  - `lead_source`
  - `phone_variant`
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`
- `lead_source_captured`:
  - `lead_source`
  - `phone_variant`
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`
- `thank_you_view`:
  - `lead_source`
  - `phone_variant`
  - `landing_page`
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`

## Instrumentation Points

- Global delegated click tracking in:
  - `app/components/AnalyticsEvents.tsx`
- SPA pageview and scroll-depth tracking in:
  - `app/components/AnalyticsEvents.tsx`
- Form lifecycle events in:
  - `app/components/ContactForm.tsx`
- Lead source capture in:
  - `app/components/LeadAttributionClient.tsx`
- Thank-you attribution event in:
  - `app/components/SuccessAttribution.tsx`
- GA4 bootstrap in:
  - `app/layout.tsx`

## QA Checklist

- In GA4 debug mode, verify each event fires once per user action.
- Confirm no PII is sent in event params.
- Confirm events still no-op safely when GA ID is absent.
