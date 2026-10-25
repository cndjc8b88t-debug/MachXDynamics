# machxdynamics.com

Website for MachXDynamics. Eleventy 3, GitHub Pages via GitHub Actions, no JS framework, no tracker, no third-party fonts. Same setup as the FlatSixDynamics site.

- Repo: `cndjc8b88t-debug/MachXDynamics` (public)
- Live domain: `https://machxdynamics.com` (set in Settings → Pages; `CNAME` documents it)
- Pages: `/`, `/privacy/`, `/support/`, `/impressum/` (DE, authoritative), `/imprint/` (EN)

## Local preview

Double-click `preview.command`, or:

```bash
npm ci
npm run serve        # http://localhost:8082/
```

Never open built `.html` files via `file://`; asset paths are root-absolute.

## Deploy

Push to `main` → the workflow `.github/workflows/deploy.yml` builds with Eleventy and publishes `_site/` to GitHub Pages.

**Draft guard:** While `src/_data/site.json` has `"draft": true`, the workflow stops before deploying, and every page carries a DRAFT banner and `noindex`. To go live:

1. Fill every remaining `[[PLATZHALTER: …]]`.
2. Legal review of the rendered pages.
3. Set `"draft": false`, update "Last updated" in the privacy policy, commit, push.

## Content rules

- Allowed: "simulation", "real-time" (as a category term, with the device sentence nearby), "qualitative". Never: "CFD-grade", "accurate", "engineering tool", "validated", "precise". No "in real time" in headlines.
- Always "MachXDynamics" in full, never a short form. No third-party logos or engine names.
- Describe only what the shipped build does. No announcements of future features.
- Legal texts change only after legal review.
