# Conversion Attribution Spec

Updated: 2026-02-17

## Scope

- Lead-source capture from URL params, click IDs, and referrer.
- Session-level attribution persistence for form submissions.
- Thank-you page conversion event with attribution context.

## Runtime Components

- Attribution capture:
  - `app/components/LeadAttributionClient.tsx`
- Contact form enrichment:
  - `app/components/ContactForm.tsx`
- Thank-you conversion event:
  - `app/components/SuccessAttribution.tsx`

## Stored Attribution Fields

- `lead_source`
- `phone_variant`
- `landing_page`
- `referrer`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `gclid`
- `gbraid`
- `wbraid`
- `msclkid`
- `fbclid`

## Form Payload Fields

The contact form now submits attribution fields above plus:

- `page_path`
- `page_type`

## Phone Strategy

- Default number comes from `NEXT_PUBLIC_PRIMARY_PHONE_E164`.
- Site uses the primary number only (no dynamic phone swap).

## Event Additions

- `lead_source_captured`
- `thank_you_view`
