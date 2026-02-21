# Sprint 1 URL Strategy

Updated: 2026-02-17

## Canonical Domain Policy

- Canonical domain: `https://kernallaw.com` (apex, non-`www`).
- `www` host always 301-redirects to apex host.
- `http` always 301-redirects to `https`.

## Redirect Rules Implemented

- `http://www.kernallaw.com/*` -> `https://kernallaw.com/:splat` (`301`, forced)
- `https://www.kernallaw.com/*` -> `https://kernallaw.com/:splat` (`301`, forced)
- `http://kernallaw.com/*` -> `https://kernallaw.com/:splat` (`301`, forced)
- `/contact/success` -> `/success` (`301`)

## Canonical Source of Truth

- `BASE_URL` is defined in `lib/constants.ts`
- Current value: `https://kernallaw.com`
- Used by:
  - `app/layout.tsx` metadata base
  - `app/sitemap.ts`
  - `app/robots.ts`
  - `app/components/JsonLd.tsx`

## Next Steps (Post-Sprint 1)

- Add one-time production verification:
  - `curl -I https://www.kernallaw.com/...` returns `301` to apex.
  - `curl -I http://kernallaw.com/...` returns `301` to `https` apex.
- Submit canonical sitemap in GSC and Bing WMT.
