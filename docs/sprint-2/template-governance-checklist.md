# Sprint 2 Template Governance Checklist

Updated: 2026-02-18

## Scope

This checklist is the release gate for:
- service subpillars (`/criminal-defense/*`, `/personal-injury/*`)
- market-service subpillars (`/market/criminal-defense`, `/market/personal-injury`)

## Hard Standards

1. `ServiceDetailPage` contract is intact:
- on-page jump navigation (`Overview`, `Focus Areas`, `Process`, `FAQ`, `Contact`)
- `Critical Next Steps` section
- trust/proof block before final CTA
- related-link fallback logic to maintain minimum navigation depth
2. `createSubpillarSpec` validation passes:
- exactly `3` focus blocks
- exactly `4` process steps
- exactly `4` FAQs
- exactly `6` related links
- intro and section minimum-depth requirements
- no banned promise language
3. Market routes use only the standards source:
- `getCitySubpillarSpec('<market>', '<service>')`
- shared template rendering via `ServiceDetailPage`

## QA Commands

Run all commands before release:

```bash
npm run lint
npm run qa:content
npm run build
```

Or run full chain:

```bash
npm run verify
```

## Editorial Legal-Safety Gate

Do not publish copy with:
- guarantee language
- certainty of outcome language
- promises of winning

Required disclaimer posture:
- case outcomes depend on facts and law
- no attorney-client relationship until engagement is executed
- no promise of specific result
