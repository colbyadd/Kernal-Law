# Sprint 1 QA Release Gates

Updated: 2026-02-17

## Blockers (Must Pass Before Release)

1. `npm run lint` passes.
2. `npm run build` passes.
3. Canonical domain checks pass:
   - non-`www` is canonical
   - `www` and `http` redirect to `https://kernallaw.com`
4. Sitemap and robots are valid:
   - `/sitemap.xml` reachable
   - `/robots.txt` references canonical sitemap
5. Analytics safety:
   - site works with and without `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - event tracking emits only non-PII fields
6. Form flow intact:
   - submit -> success page behavior unchanged
   - `form_submit_start` and `form_submit_success` fire when GA is enabled

## Post-Deploy Verification

1. GA4 debug view receives:
   - `page_view`
   - `cta_click`
   - `click_to_call`
   - `click_email`
   - `map_click`
   - `form_submit_start`
   - `form_submit_success`
   - `scroll_50`
   - `scroll_90`
2. GSC and Bing verification tags render once IDs are provided.
3. Security headers are present and CSP still permits required scripts.
