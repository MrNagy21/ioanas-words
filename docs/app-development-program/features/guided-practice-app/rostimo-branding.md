# Branding and navigation

Latest direction, 2026-10-26: the user selected Vorbini, retaining the logo and visual identity. Primary actions now use logo plum, secondary hover stays lilac and phone menu hover does not stick. Earlier approval below records the initial decision.

The user approved Rostimo and the smiling speech-bubble, rounded lettering, cream, plum and apricot direction on 2026-10-26. This follows the navigation and branding work transferred from the Cartoon Studio thread. No trademark availability has been established.

## Implemented locally

Adult menus share a labelled chevron Back button. Returning to a parent uses the existing browser-history entry rather than adding another parent entry. Profile editing returns to settings; backup and library screens return to the originating profile. Browser Back/Forward and reload preserve menu context. The mobile header is shorter, with the profile heading at 125px in the 390×844 test.

The identity uses a smiling speech-bubble mark, the name Vorbini, self-hosted Nunito Sans, warm cream, plum primary actions and lilac secondary controls. It appears on the public introduction, onboarding, profiles, setup, play and celebrations. Manifest and app icons use the same identity. The font license is retained at `public/fonts/NunitoSans-LICENSE.txt`. Browser storage identifiers, backup format and child records are unchanged by the navigation/branding work.

The setup logo is visible, setup selections use the approved palette, and demo, preparation and medal screens include the shared identity. PRODUCT.md and DESIGN.md now record the approved name and visual system. The final refinement aligns browser chrome and installed-app theme with the cream page background and declares the light color scheme for native controls. Browser zoom remains available.

## Verification

- Production build, including TypeScript, and lint pass on Node 24.22.1.
- `scripts/qa/check-brand-navigation.mjs` passes in headed Chrome 155 and headless WebKit 26.5. It checks parent navigation, browser Back/Forward, editing cancel, backup/library returns, reload, unchanged fixture records, mobile/desktop overflow, manifest and icons.
- `check:profile-settings` passes on the latest build in WebKit 26.5, including 320px, enlarged text, sound selection, observations, corrections, failure recovery and profile isolation.
- `check:onboarding-browser` passes in WebKit 26.5, including enlarged text, the first real medal, reload and Help/resume without duplicate records. Its reload assertion now checks the retained child profile rather than expecting a return to the child list.
- The initial WebKit page sweep moved away while link prefetches were pending and reported access-control errors for those requests. Waiting for network idle between full-page captures makes the same test pass without filtering errors or changing app code.
- Localhost and the existing Tailscale HTTPS practice route return 200.

After approval, the final build/TypeScript, lint, scoped formatting, WebKit navigation suite, rendered title/theme metadata, manifest theme and Tailscale HTTPS checks pass. The final mobile and desktop profile captures and mobile setup capture were inspected.

Fresh screenshots are in `/Users/darius/.t3/userdata/artifacts/rostimo-branding-2026-10-26/`. The parent inspected mobile profile, setup, demo, introduction, onboarding and letters, plus desktop profile. The JSON report records the final WebKit navigation result.

- [Mobile profile](/Users/darius/.t3/userdata/artifacts/rostimo-branding-2026-10-26/webkit-brand-profile-390.png)
- [Mobile setup](/Users/darius/.t3/userdata/artifacts/rostimo-branding-2026-10-26/webkit-brand-setup-390.png)
- [Desktop profile](/Users/darius/.t3/userdata/artifacts/rostimo-branding-2026-10-26/webkit-brand-profile-1440.png)

## User check

Open the [local Tailscale app](https://dariuss-macbook-pro-2.tail1ee9b4.ts.net:9443/ro/practice). Choose a child and open sounds, pronunciation, activity and settings. Try each in-app Back button, then browser Back/Forward. Edit and cancel, open a backup, and reload an activity screen. Check the compact header and touch controls on a physical phone.

The visual direction and Vorbini name are approved. Physical-device, assistive-technology, therapist and Romanian mapping review remain pending. No commit, push or deployment was made in this handoff. No new delegated audit was requested or started.

Next implementation prompt:

```text
Continue Vorbini GP9 acceptance. Read AGENTS.md, docs/status.md, rostimo-branding.md and the guided-practice acceptance checklist. The speech-bubble identity is approved, with cream, plum primary buttons and lilac secondary buttons. Vorbini is the selected name. Preserve the tested menu-history behavior, local records, protected backups and participation rules. Incorporate actual phone, assistive-technology and therapist feedback, plus user-arranged Romanian mappings after validation. Fix evidenced issues and rerun affected checks. Keep port 3000 and the existing Tailscale setup. Do not deploy without an explicit request.
```

## Button refinement verification

The 2026-10-26 follow-up rebuild and WebKit navigation suite pass. Headed Chrome verifies computed primary default/hover and secondary hover/disabled colors. WebKit touch onboarding verifies plum after hydration; the first ad-hoc probe ran before the button mounted and was corrected to wait for it. Final phone profile/setup and desktop introduction captures were inspected in `/Users/darius/.t3/userdata/artifacts/word-wheel-plum-buttons-2026-10-26/`. The main action style is shared by setup, onboarding, profile preparation, saves, play and medal collection. The user subsequently selected Vorbini; trademark clearance is not claimed.

## Vorbini rename verification

The selected name is applied to the shared wordmark, accessible app names, document/admin titles, Apple home-screen title, manifest and named icon URLs. Existing logo files remain available for previously loaded pages; the artwork and installed-app manifest ID are unchanged. Production build/TypeScript, lint, scoped formatting and WebKit navigation pass. Tailscale response checks confirm Vorbini and all new icon URLs. The phone profile/setup and desktop introduction captures were inspected in `/Users/darius/.t3/userdata/artifacts/vorbini-branding-2026-10-26/`. No deployment was made.
