# Sprint 10 Delivery Notes

Updated: 2026-02-18

## CRO Experiment Foundation (CRO-001)

- Added reusable controlled CTA component:
  - `app/components/PrimaryConsultationCta.tsx`
- Added session-based CTA variant assignment with URL override support (`?cta_variant=a|b|control|challenger`):
  - `lib/cro.ts`
- Applied primary CTA copy variants to P0 high-intent pages:
  - `app/components/CinematicHero.tsx`
  - `app/criminal-defense/page.tsx`
  - `app/personal-injury/page.tsx`

## Attribution Expansion for Experiment Measurement

- Added `cta_variant` capture to lead attribution model:
  - `lib/lead-attribution.ts`
  - `app/components/LeadAttributionClient.tsx`
- Added `cta_variant` propagation through form submission payloads and analytics events:
  - `app/components/ContactForm.tsx`
- Added `cta_variant` hidden field to Netlify form manifests:
  - `public/__forms.html`
  - `public/form-setup.html`

## Contact Intake Friction Optimization (CRO-002)

- Reworked contact intake form for faster structured triage:
  - Added `case_type` and `urgency` required selectors.
  - Added `preferred_contact_method` radio inputs.
  - Made freeform incident details optional (quality cues remain through structured fields).
  - Added triage fields into analytics event payload (`form_submit_start` and `form_submit_success`).
  - Added triage fields to Netlify form definitions.
- Updated files:
  - `app/components/ContactForm.tsx`
  - `public/__forms.html`
  - `public/form-setup.html`

## Mobile Conversion Pass (CRO-003)

- Improved mobile contact flow sequencing:
  - Form now renders before office/location details on mobile.
  - Contact form anchor includes scroll offset for better in-page navigation.
- Upgraded mobile persistent quick-action control:
  - Replaced single floating call button with `Text` + `Call Now` dual-action control.
- Added reusable mobile conversion bar to major page templates:
  - `app/components/MobileConversionBar.tsx`
  - Integrated into:
    - `app/page.tsx`
    - `app/contact/page.tsx`
    - `app/criminal-defense/page.tsx`
    - `app/personal-injury/page.tsx`
    - `app/components/ServiceDetailPage.tsx`
    - `app/components/LocationServicePage.tsx`
    - `app/components/ResourceGuidePage.tsx`
- Updated files:
  - `app/contact/page.tsx`
  - `app/components/ContactFab.tsx`

## Status

- `CRO-001` moved to `done`.
- `CRO-002` moved to `done`.
- `CRO-003` moved to `done`.
