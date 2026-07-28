# Kernal & Associates website

Next.js 16 website for Kernal & Associates, deployed through Netlify.

## Local development

Requirements:

- Node.js 24 (see `.nvmrc`)
- npm

Install and start the Next.js site:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). This is enough for page and browser review. To exercise Netlify routing and Functions locally, use `netlify dev` from the Netlify CLI.

## Environment variables

Copy `.env.example` to `.env.local` for local-only values. Do not commit `.env.local` or credentials.

- `NEXT_PUBLIC_SITE_URL` — canonical production origin.
- `NEXT_PUBLIC_CONTACT_EMAIL` — displayed contact email.
- `NEXT_PUBLIC_PRIMARY_PHONE_E164` — displayed and tracked phone number.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4 measurement ID. Leave blank until the production property is ready.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION` — optional webmaster-verification tokens.

## Contact form

The public form posts to `/api/contact`, implemented by `netlify/functions/contact.ts`. The Function validates and sanitizes the request, checks the consent version, enforces the chosen reply method, blocks malformed and cross-origin requests, and applies Netlify rate limiting before forwarding the accepted fields to the hidden Netlify Forms blueprint at `public/__forms.html`.

Keep the React form, server Function, and static blueprint field names aligned. `npm run qa:conversion` checks that contract. Netlify notification recipients are configured in the Netlify site settings, not in this repository.

Do not use real client facts for form testing. Submit a clearly labeled test lead on a deploy preview only after the recipient has authorized it, then confirm both the Netlify submission and notification delivery.

Treat Netlify form entries as intake records containing personal information. Periodically remove test, spam, and stale submissions under the firm’s approved retention policy, and limit dashboard access to people who need it.

## Verification

Run the same release gate used by continuous integration:

```bash
npm run browser:install
npm run verify
npm audit --omit=dev --audit-level=high
```

The browser install is a one-time local setup. The verification command runs linting, TypeScript checks, contact-Function tests, content and search-engine optimization checks, a production build, rendered-route checks, keyboard and accessibility-tree coverage for the frequently asked questions accordion, and Lighthouse budgets for representative pages.

## Deployment

Production deploys are Git-based through Netlify and should follow a reviewed pull request or an explicitly approved direct push. Before publishing:

1. Run the verification commands above.
2. Review the Netlify deploy preview on desktop and mobile.
3. Confirm `/robots.txt`, `/sitemap.xml`, canonical URLs, social previews, redirects, and security headers.
4. If analytics is enabled, verify call, text, form-start, form-success, and thank-you attribution with test traffic only.
5. Confirm the Netlify form notification with an authorized test submission.

In Google Analytics 4, mark only the guarded `thank_you_view` event as the lead key event. Do not mark ordinary `/success` page views or `form_submit_success` as additional lead key events, or one inquiry can be counted twice.

If production regresses, restore the last known-good Netlify deploy first, then diagnose and fix forward in the repository.
