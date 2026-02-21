# Sprint 1 Account Handoff Checklist

Updated: 2026-02-17

## GA4 Setup (When Ready)

1. Create GA4 property for `kernallaw.com`.
2. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...` in Netlify environment variables.
3. Set phone env vars:
   - `NEXT_PUBLIC_PRIMARY_PHONE_E164=+14053640601`
4. Deploy and verify events in GA4 DebugView:
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

## Search Console / Bing

1. Confirm GSC already verified for canonical domain (`https://kernallaw.com`).
2. Submit sitemap: `https://kernallaw.com/sitemap.xml`.
3. Verify no significant coverage errors for key routes.
4. Add Bing Webmaster verification token if needed:
   - `NEXT_PUBLIC_BING_SITE_VERIFICATION=...`

## Redirect Validation

1. Confirm `www` redirects to apex with 301.
2. Confirm `http` redirects to `https` with 301.
3. Confirm no redirect loops on canonical URLs.
