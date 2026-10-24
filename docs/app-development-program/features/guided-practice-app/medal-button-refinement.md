# Medal and mobile button refinement

Completed 2026-10-16 after the user rejected the flat award copy and cramped mobile controls.

## What changed

The saved-profile celebration now opens with "Bravo, [name]!", names the earned milestone and says "Ai câștigat o medalie pentru exersare!". Multiple awards use plural wording. Adult-triggered progress awards retain their distinct medal color and explicitly celebrate a step forward; they do not claim app-measured pronunciation accuracy.

Medal designs show artwork, a label and a check on the selection. The main action says "Păstrează medalia" or "Păstrează medaliile" and spans the phone width below the choices. The warm ivory page uses larger artwork and a brief arrival animation. Existing confetti remains, with reduced-motion behavior preserved. The heading receives focus when the award opens. Busy/error behavior remains available; design choices are disabled during saving.

Portrait uses a vertical composition with controls near the bottom. Compact portrait reduces artwork before controls. Short landscape uses two columns. The demo shares the same component and keeps its explicit no-saving explanation.

The shared primary/secondary action classes now use 14px corners, a visible lower edge and a short press response. They apply to introduction, profiles, preparation, wheel setup, gameplay, results and dialogs. Narrow adult forms stack actions; guide navigation keeps a compact pair where appropriate. A two-action game footer now fills two columns instead of reserving a third empty column. Navigation links, profile cards and tabs keep their own roles.

The button reference was [Animata's Duolingo button](https://animata.design/docs/button/duolingo). The implementation uses project CSS and native buttons/links, with no Animata package, Tailwind or animation dependency added. Reward thresholds, counting, ratings and stored award titles are unchanged, so no data migration is needed.

## Verification

- Production build with TypeScript, lint and practice domain checks pass.
- Full practice/backup browser suites pass in Chrome 155.0.8059.82 and Playwright WebKit 26.5.
- Both full suites verify medal controls fit 320×568, 390×844, 568×320, 844×390 and 1440×900. Changing the illustration does not add practice credit; the selected flower is saved with the award.
- WebKit resilience checks pass, including 100/150/200% root text sizes, synthesized-touch medal selection, reduced motion and saving failures/retries. Enlarged content may scroll; it does not overflow horizontally in the tested matrix.
- Existing Chrome wheel regression passes, including result focus, keep/remove/replace, countdown, replay, setup rerenders and responsive layouts.

The first new layout assertion caught an inherited 46px medal action in wide, short landscape. The medal-specific minimum fixes that case. The final checks pass with controls at least 48px across the matrix; the portrait phone save action is 52px. A separate collaborative-browser check confirmed the normal 320×568 award fits without scrolling.

The production server remains on port 3000. Source discovery used direct reads because the graph catalog has no Word Wheel project. Physical-phone, assistive-technology, Romanian mapping review and therapist pilot gates remain as recorded in the [pilot checklist](pilot-checklist.md). No deployment was made.

## Screenshots

The captures use synthetic profiles in the local production app:

- [Phone award and illustrated choices](/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb5vrnw-4bae14a5.png).
- [Phone End dialog with stacked actions](/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb5vs1y-7100693c.png).
- [Desktop child workspace](/tmp/word-wheel-medal-redesign/chromium-desktop-child-workspace.png).

The first two are collaborative Chrome captures at a 390×844 CSS viewport. The desktop capture comes from the passing Chrome suite at 1440×900. These verify browser layouts, not physical iPhone operation.

Continue with the [next-batch prompt](next-implementation-prompt.md).
