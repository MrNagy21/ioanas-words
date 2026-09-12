# Demo release

Date: 2026-09-12

Production demo: https://ioanas-words.vercel.app/ro

Production revision tested: `850a54b53b69fd3c8f09a846360f032178c8f06a`, fast-forwarded to `main` with explicit user authorization. App changes are in `600ffca`; `850a54b` adds release documentation and route QA.

GitHub production deployment `6412669605` reported success. Its immutable URL is https://ioanas-words-aulph4ugm-mrnagy21s-projects.vercel.app. Use the public demo URL above for testers.

The earlier preview at https://ioanas-words-awqyfg7lx-mrnagy21s-projects.vercel.app built successfully but required Vercel sign-in. The user then authorized production deployment and production smoke testing. The production alias loads anonymously; no protection settings changed.

## Included changes

The release includes the session, completion, focus, and responsive-layout fixes documented in `docs/demo-readiness-review.md`. It also adds a labeled result-close button that keeps the word, balances result actions on narrow phones, reduces repeated setup text, makes disabled setup navigation visible, adds hover/press feedback, and updates the Romanian browser title and description.

No production word manifests or image assets changed. Gameplay remains static, anonymous, and database-free.

## Automated and browser checks

Local content validation, lint, gameplay, matching, setup-storage checks, the component browser regression, and the production build pass. The close button was checked visually at `320×568` and preserves the selected word. Existing image-size warnings remain below the validator's hard limit.

The final local component browser regression and all 82 local routes passed again before promotion. On production, `pnpm run check:demo-routes -- https://ioanas-words.vercel.app` passed all 82 public routes, covering home, every enabled setup/play route, content-review routes, and the icon. An invalid target returned HTTP 404.

The in-app browser verified the released Romanian title and completed these production checks on 2026-09-12:

- D starts-with, 15 visible words from 25 eligible words. Normal-duration spins counted down exactly `15 → 14 → 13 → 12 → 11 → 10 → 9 → 8 → 7 → 6 → 5 → 4 → 3 → 2 → 1 → 0`. The 10 unused words did not refill the wheel.
- Completion focused `Ai terminat roata!`. The card and actions fit at `320×568` and `568×320`. Replay restored exactly 15 words and wheel focus.
- Resized the live round from `390×844` portrait to `844×390` landscape with two words left, then to `320×568` during the final result. The round remained intact. These are desktop viewport checks, not physical-device rotation results.
- GHI exclusion G reduced 15 eligible words to zero and disabled progression with an explanation. Clearing exclusions restored progression.
- GHI manual selection of only `dreptunghi` produced a one-word wheel, omitted replacement, preserved the word on result close, completed on removal, and replayed only `dreptunghi`.
- Result focus started on Keep; Shift+Tab wrapped to Close, Tab returned to Keep, and Escape returned focus to the wheel. No browser console errors were captured during the gameplay checks.
- Opened the production content-release review page and confirmed release summaries and word images rendered.

No additional application changes were needed after the production smoke test.

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

## Remaining verification

The implementation and production smoke test are complete. Real iPhone Safari and Android Chrome checks remain pending, including rotation, browser toolbar changes, and the software keyboard. The user has not supplied device results. Do not describe desktop viewport tests as physical-device coverage.

Ready-to-copy follow-up prompt:

> Complete the physical-device checklist in docs/demo-release.md against https://ioanas-words.vercel.app/ro on a real iPhone with Safari and a real Android phone with Chrome. Record models, OS/browser versions, rotation and keyboard results in docs/status.md. Fix confirmed release issues without changing approved vocabulary or product scope.
