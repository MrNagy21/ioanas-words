# Demo release

Date: 2026-09-12

Release branch: `codex/demo-release-2026-09-12`

App revision: `600ffca`, based on production revision `1713dfd`.

Preview: https://ioanas-words-awqyfg7lx-mrnagy21s-projects.vercel.app

Vercel deployment ID: `Dug4pCzG1Et5F2DJVpy7rb18V1rN`.

GitHub deployment ID: `6412527644`.

Vercel reports a successful preview build for full revision `600ffca30f8242a10fc9a0cfc6261ba8f1c57e27`. The existing production deployment is unchanged. Anonymous browser access redirects to Vercel sign-in. This URL is therefore not yet ready for external testers without Vercel access or a shareable preview link.

## Included changes

The release includes the session, completion, focus, and responsive-layout fixes documented in `docs/demo-readiness-review.md`. It also adds a labeled result-close button that keeps the word, balances result actions on narrow phones, reduces repeated setup text, makes disabled setup navigation visible, adds hover/press feedback, and updates the Romanian browser title and description.

No production word manifests or image assets changed. Gameplay remains static, anonymous, and database-free.

## Automated and browser checks

Local content validation, lint, gameplay, matching, setup-storage checks, the component browser regression, and the production build pass. The close button was checked visually at `320×568` and preserves the selected word. Existing image-size warnings remain below the validator's hard limit.

Deployed route and gameplay checks are waiting for preview access. The in-app browser reached Vercel sign-in, then GitHub sign-in, instead of the app. The user was asked to sign in or supply a Vercel-generated shareable preview link. No deployment-protection setting was changed.

A reusable anonymous route smoke check is available as `pnpm run check:demo-routes -- <base-url>`. It verifies home, every enabled setup and play route, content-review pages, the icon, and an invalid target. It stops if protection redirects away from the app. It passed locally for all 82 public routes; an invalid target returned HTTP 404. Lint and TypeScript checking pass with this release script.

## Physical-device checklist

Run on a real iPhone in Safari and a real Android phone in Chrome. Emulation and desktop window resizing do not complete this checklist.

1. Open the demo URL from a fresh browser tab. Confirm the letters and sound groups are reachable and no login is required for the intended tester.
2. Choose D, leave the rule at starts-with, go to Final, select 15 words, and start. Keep one result, close another with the close button, then remove words until the wheel is empty. Counts should fall by exactly one per removal. Rotate the phone with two words left, then rotate again on the last result.
3. Confirm completion displays one clear card, its buttons remain reachable, and replay restores 15 words. Rotate on the completion screen and after replay. Show and hide the browser toolbar.
4. Choose GHI, select a single word manually, and start. Confirm the result has no replacement action, removing it completes the round, and replay restores only that word.
5. In GHI setup, exclude G. Confirm progression is disabled with an explanation. Clear the exclusions and confirm the setup works again.

Report the phone model, OS/browser version, portrait/landscape result, any clipped controls, unexpected counts, and the step where a problem occurred. Also note whether the keyboard covers setup search or the configuration name field.

| Check | iPhone Safari | Android Chrome |
| --- | --- | --- |
| Fresh access and home | Pending physical test | Pending physical test |
| 15-to-zero round | Pending physical test | Pending physical test |
| Rotation during play/result | Pending physical test | Pending physical test |
| Completion and replay | Pending physical test | Pending physical test |
| One-word custom round | Pending physical test | Pending physical test |
| Exclusions and keyboard | Pending physical test | Pending physical test |

The user was asked which physical devices are available. No physical-device results have been supplied yet.

## Resume deployed verification

After preview access is available, repeat the full release flow on the preview itself. Record the exact URL, app revision, route results, 15-to-zero countdown, completion/replay, one-word custom round, exclusions, keyboard navigation, and physical-device results here and in `docs/status.md`. The protected preview build is not a substitute for these checks. Use the checklist above for the physical-device handoff.
