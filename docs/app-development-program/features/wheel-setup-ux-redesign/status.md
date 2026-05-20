# Wheel Setup UX Redesign Status

Last updated: 2026-05-19

## Current Status

Status: Implementation complete; local command and browser QA passed.

The feature now replaces the initial `Setează roata` modal journey with a dedicated static setup route at `/<locale>/setup/<target>`. `/ro` letter and practice-target tiles enter setup first, while `/ro/play/<target>` remains the wheel play route. The play screen keeps a compact `Setează` entry that routes back to setup with the current active local configuration loaded.

## Completed

- Created `docs/app-development-program/features/wheel-setup-ux-redesign/spec.md`.
- Recorded cross-device UX direction for desktop, tablet, and mobile.
- Recorded expected setup entry flow when saved configurations exist and when none exist.
- Recorded local anonymous storage constraints and future database compatibility expectations.
- Recorded research sources for modal/sheet usage, mobile filtering, accessibility, and browser storage.
- Added `docs/app-development-program/features/wheel-setup-ux-redesign/plan.md`.
- Added `app/[locale]/setup/[letter]/page.tsx` using the same static target validation as play routes.
- Routed `/ro` letter and practice-target tiles to `/ro/setup/<target>`.
- Updated play-screen `Setează` and empty-wheel setup entry to route into the setup journey instead of opening the old setup modal.
- Added shared setup helpers in `src/game/wheel-setup.ts` for target route segments, storage keys, mode counts, valid selected words, default configs, and config normalization.
- Added `src/components/wheel-setup-screen.tsx` with:
  - saved-configuration chooser when saved setups exist;
  - direct editor entry when none exist;
  - default all-words option;
  - start without saving;
  - save named local configurations;
  - load/edit saved configurations as drafts;
  - delete confirmation for saved configurations;
  - explicit `Toate cuvintele` versus `Aleg cuvintele` source control;
  - `Resetează la toate cuvintele`;
  - desktop/tablet inline searchable word picker;
  - mobile full-screen drill-in word picker.
- Kept setup storage in versioned `localStorage` under `word-wheel.setup.v1`; no database, auth, billing, admin editing, new content, image changes, AI pronunciation, or clinical claims were added.
- Fixed mobile setup QA issue where the sticky summary inherited `top: 0` and covered editor controls; the summary now behaves as a bottom action bar on phones.
- Improved the desktop/tablet setup editor after screenshot review on 2026-05-19:
  - widened the setup app frame for setup routes;
  - replaced the cramped left-column editor with a full-width top control band;
  - moved the searchable word picker into the primary workspace below the controls;
  - kept the start summary as a separate right-side action panel;
  - prevented custom empty selection from collapsing the wheel count control to `max 0`;
  - hid reset-to-all actions until they are applicable.
- Browser QA against `http://localhost:3000` passed:
  - `/ro` exposes setup links and no direct play links from selection tiles;
  - desktop `1280 x 720` setup route uses a three-column workspace with inline word picker and no horizontal overflow;
  - tablet `820 x 1180` setup route uses a two-column workspace with summary below and no horizontal overflow;
  - mobile `390 x 844` setup route uses a scrollable full-screen setup flow, bottom start action, and full-screen drill-in word picker with search and `Gata`;
  - saving a named setup shows the chooser on the next setup visit;
  - deleting a saved setup requires confirmation naming the setup and removes the local saved item.
- Follow-up browser QA after the setup layout redesign passed against `http://localhost:3000`:
  - desktop `1600 x 900` setup route uses a `1320 x 820` setup frame, full-width control band, wide word picker, right-side summary, and no horizontal overflow;
  - tablet `820 x 1180` setup route uses a two-column control band, inline picker, and no horizontal overflow;
  - mobile `390 x 844` setup route keeps the drill-in picker entry, fixed bottom start action, and no horizontal overflow.
- Reworked the editor again after product review on 2026-05-19 into a true three-step wizard:
  - Step 1: choose mode, wheel count, and all/custom source;
  - Step 2: review all words or pick exact words;
  - Step 3: optional local save and start.
- The wizard uses a desktop/tablet side stepper, a mobile top stepper, one primary decision surface per step, and a fixed mobile bottom navigation area.
- Follow-up browser QA for the wizard passed against `http://localhost:3000`:
  - desktop `1600 x 900` renders side stepper plus a single wizard card with no horizontal overflow;
  - tablet `820 x 1180` renders a narrower side stepper plus wizard card with no horizontal overflow;
  - mobile `390 x 844` renders compact top steps and fixed bottom navigation; step 2 and step 3 navigation work.
- Fixed mobile scroll ownership after review: the setup workspace and wizard shell no longer compete for scroll on phones; the wizard card body is the single mobile scroll container, with the footer fixed outside it. The custom word list also no longer creates a nested mobile scroll trap.
- Follow-up mobile scroll QA passed at `390 x 844`: step 1 scrolls through the wizard card body, step 2 custom word picking scrolls through the same body, and the fixed footer remains visible.
- Verification passed on 2026-05-19:
  - `pnpm run validate:content` passed with existing image-size warnings only;
  - `pnpm run lint` passed;
  - `pnpm exec tsc --noEmit --incremental false` passed;
  - `pnpm run build` passed and statically generated setup routes.

## Implementation Notes

- Selecting a saved configuration from the chooser requires explicit `Pornește roata`.
- Editing a saved configuration loads it into a draft; saving creates a named local configuration instead of overwriting the existing saved item.
- Unsaved setup drafts are not preserved after leaving the setup route.
- The default all-words setup is saved as the active local config only when the user starts the wheel.
- UX references reviewed on 2026-05-19 for the wizard redesign:
  - shadcn/ui form documentation for grouped form structure and accessible form primitives: https://ui.shadcn.com/docs/forms
  - Tailwind UI settings screens for preference-page grouping and clear section hierarchy: https://tailwindcss.com/plus/ui-blocks/application-ui/page-examples/settings-screens
  - Material Design stepper guidance for using steppers when a task is sequential and avoiding overuse on short forms: https://m1.material.io/components/steppers.html
  - Flowbite stepper examples for responsive horizontal/vertical step-progress patterns: https://flowbite.com/docs/components/stepper/
- UX references reviewed on 2026-05-19 for the mobile setup compression pass:
  - Apple Human Interface Guidelines buttons guidance, including the 44x44 pt minimum hit-region rule: https://developer.apple.com/design/human-interface-guidelines/buttons
  - Apple Human Interface Guidelines layout guidance for fitting interface structure to available screens: https://developer.apple.com/design/human-interface-guidelines/layout
  - Material Design tabs guidance for compact full-width mobile tab rows and 48dp tab touch targets: https://m1.material.io/components/tabs.html
  - Android Accessibility Help touch target guidance for 48x48dp targets: https://support.google.com/accessibility/android/answer/7101858

## Open Questions

- Rename and overwrite-in-place behavior for saved configurations remains deferred until there is product demand.
- A future account-backed configuration model should decide whether to sync saved configurations across devices.
