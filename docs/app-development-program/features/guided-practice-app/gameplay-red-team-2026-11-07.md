# Gameplay red-team review and release

The owner requested a thorough independent GPT-6.1 Sol review at Max effort, fixes for all findings and deployment of the new version. On 2026-11-07 the owner explicitly approved committing and pushing to `main`, which triggers the existing GitHub/Vercel production integration. The application release is deployed and public verification passes.

## Independent review

Reviewer: GPT-6.1 Sol, `reasoningEffort=max`.

<t3-thread://v2/eb7d8df3-e557-49c7-9f6f-f3d9dd79fdbf/thread:delegated-task:command%3Amcp%3A91ff8893-e10d-4508-b594-7c4615d46b9c%3Adelegate-task%3A435a72dc-c301-4e88-ad13-86d64dc49423>

The reviewer inspected the full pending audio diff and its anonymous/demo/tracked gameplay, setup/storage, session/reward/observation, mapping, migration and encrypted-backup dependencies against `c775289`. It reproduced five defects in Chrome and WebKit and returned **HOLD** for that snapshot. It made no repository changes. Original evidence and reproduction scripts are in `/Users/darius/.t3/userdata/artifacts/vorbini-independent-review-2026-11-07/`.

The graph catalog has no Word Wheel project. Both review and fixes use direct source evidence. This is a bounded code and automated-browser review, not proof that every possible gameplay or physical-device failure has been excluded.

## Fixes

1. **P1, abandoned session claim:** `practice-player.tsx` now retains the session lease while initialization settles. The transaction rejects an abandoned claim before changing its owner or recovering a word. Cleanup cannot abort the acquired lock while the claim is pending. The two-tab regression pauses the real database open, exits tab A, proves its lease remains held, queues B, then releases A. A writes no revision; B alone claims the session, and its displayed word earns no credit until closure.
2. **P2, unseen hidden result:** `wheel-game.tsx` cancels unfinished spin timers on hiding or page exit and guards result presentation while hidden. A cancelled spin creates no pending word. Tests cover normal multiword spins and the last-word spiral, then reload/resume with zero turns or awards. A result displayed before hiding still recovers exactly once across repeated resumes.
3. **P2, silent adult celebration:** workspace gesture listeners now remain active while sound is enabled and run before asynchronous click work. A click-only pagehide/return/celebrate test produces the three-note chord without toggling sound. Muted celebrations remain silent, and restoring visibility does not replay sound automatically.
4. **P2, busy-modal focus:** the result container accepts focus and reports busy state while all actions are disabled. A capture-phase keyboard trap contains Tab/Shift+Tab even with no enabled actions; a focus guard rejects background focus. Focus returns to Keep when saving completes and to the wheel on actual dismissal. Tests pause initial pending persistence and close writes, exercise both tab directions and forced background focus, and inspect phone/desktop captures.
5. **P3, wrong tracked mode label:** tracked play supplies the frozen session mode to the wheel status label. Starts-with, interior-only and mixed labels are checked on initial resume, after a medal and after another reload/resume. The practice pool and historical session configuration are not rewritten.

These fixes prevent future false credit. They do not retrospectively alter stored turns or medals, change the schema, or infer reviewed phonetic attribution.

## Regression harness

`pnpm run check:gameplay-recovery` preserves reproductions for all five findings in either engine. It uses isolated synthetic records and the app's actual store/session functions. `WORD_WHEEL_BASE_URL` can target the deployed origin for the release smoke test. Native page hiding is simulated; native database, browser locks, rendering, focus and audio contexts are exercised.

The existing resilience suite now uses the actual Back label from backups and waits for enabled result actions before testing post-save focus. The protected-restore suite waits for persisted replacement rather than an already-hidden profile-list button. The new suite also waits for route prefetches before replacing/closing documents, avoiding WebKit teardown access-control errors without suppressing runtime errors. Its initial development runs corrected the empty-pending value and the last-word wheel-only control; final results are recorded below and in global status.

## Verification and release gate

Production build/TypeScript, repository lint, practice/migration/encryption, matching, setup-storage and gameplay checks pass on Node 24.22.1 with pinned pnpm 11.1.2. Content validation passes with the existing 13 image-size warnings and zero reviewed phonetic mappings. The production dependency audit reports no known vulnerabilities. Scoped formatting and whitespace checks pass.

The new five-finding regression passes in Chrome 156 and WebKit 27.2. Full practice/protected-backup journeys pass in headed Chrome and WebKit. WebKit resilience, existing release regressions and onboarding pass. Both engines pass the wheel component regression, including last-word spiral, reduced motion, keep/remove/replace, focus, completion, rerenders and timer cleanup. Both sound suites pass 45 spins across three letters, mute, chimes/medals, recovery and demo isolation. All 88 public routes and four Romanian 404 cases pass locally.

Fix evidence is in `/Users/darius/.t3/userdata/artifacts/vorbini-red-team-fixes-2026-11-07/`. The original independent HOLD is not being relabelled as a second independent approval: the parent implemented the fixes and verified them through regressions. No additional reviewer was started for these focused corrections.

## Deployment and public verification

Application commit `9abdeffb6d6675fb3a8bae8537cd0f4c4ec4a9b2` was committed and pushed to `main` after explicit authorization. GitHub production deployment `7621026818` reports success at 12:17 UTC on 2026-11-07. The public app is [cuvinte.ioananagy.eu](https://cuvinte.ioananagy.eu/ro); the deployment URL returned by GitHub/Vercel is [ioanas-words-icalbjred-mrnagy21s-projects.vercel.app](https://ioanas-words-icalbjred-mrnagy21s-projects.vercel.app). Public QA targets the custom origin, not an assumed-accessible immutable URL. A subsequent documentation-only commit records this evidence without changing application code.

Public HTTPS checks pass:

- All 88 routes and four Romanian/noindex 404 cases.
- The five-finding recovery suite in Chrome 156 and WebKit 27.2, including real two-tab lock/transaction ordering, hidden-spin cancellation, visible-word recovery, adult audio, busy-modal focus and frozen mode labels.
- WebKit's sound suite: 45 repeated spins across three letters without document reload, context reuse/source cleanup, suspension/page-cache recovery, touch entry, mute, word/medal sounds and isolated demo.
- Full practice/protected-backup journeys in headed Chrome and WebKit: rollback, exactly-once result counting/recovery, ownership, observations, encrypted per-child/full restore, shared-library preservation, manifest assets and the explicit cold-offline limit. Their request assertions report no unexpected external or non-GET/HEAD app requests.
- A shared-browser public spin confirmed sound opted in, a running context, a displayed word and the new `aria-busy` attribute. The temporary incognito tab was closed afterward.

All profiles and records were synthetic in isolated contexts. The recovery suite uses its existing `WORD_WHEEL_BASE_URL` setting. Generated copies of the unchanged sound/practice suites replace only the localhost origin and helper import paths; `run-public-qa.mjs` and those copies are retained alongside logs and captures at `/Users/darius/.t3/userdata/artifacts/vorbini-live-release-2026-11-07/`.

No hostname, redirect, account, hosted database or child record was changed by publishing. The same production application remains available locally on port 3000. Maintenance implementation and release are complete; the remaining acceptance below is not a release-status claim.

## Remaining acceptance

Actual iPhone Safari/home-screen listening, Silent Mode, calls/Bluetooth/background behavior, Android and assistive-technology checks remain unverified. Romanian mapping review and therapist acceptance remain GP9 gates. These are not completed by desktop WebKit or by deploying this maintenance release. Opening still requires a connection; protected backups and records remain browser-local.

## Next prompt

```text
Continue Vorbini GP9 acceptance in /Users/darius/mrNagySSC/ioana/word-wheel. Read AGENTS.md, docs/status.md, gameplay-red-team-2026-11-07.md and audio-reliability-2026-11-07.md. Application commit 9abdeff is deployed at https://cuvinte.ioananagy.eu/ro with successful GitHub deployment 7621026818 and public Chrome/WebKit recovery/protected-backup, WebKit sound and route checks. The five Sol Max review findings are fixed; do not restart the maintenance release or claim a second independent approval. Preserve local records, content, schema, reward and encrypted-backup contracts. Collect actual iPhone Safari/home-screen and Android results for Silent Mode, 50 normal spins, calls/background/Bluetooth recovery, installation and protected backup. Use the audio report's checklist and record model, OS/browser, origin and exact preceding action for failures. Continue user-arranged Romanian mapping review and therapist feedback without inventing phonetic credit. Keep online-required messaging and the current hostname. Do not clear actual child data or publish further changes without a new explicit request. Update the actual acceptance evidence and next prompt.
```
