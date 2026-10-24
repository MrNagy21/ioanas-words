# Local production QA and acceptance handoff

Date: 2026-10-18. Candidate build: `_A5AzzTgmnPfpSTQgnKFC`. Source baseline: `11bcf9b` plus the current uncommitted working tree. Local production server: `http://localhost:3000`.

The candidate is ready for the user's acceptance tests after the checks below. This is not a deployed release or completed physical-device/therapist pilot. Use the [feature-by-feature checklist](acceptance-test-checklist.md) for the human test and return findings by checklist ID.

## Changes made during QA

The initial production dependency audit reported 31 advisories: 3 critical, 15 high, 11 moderate and 2 low. Updated Next.js and its matching ESLint config from 16.2.6 to the stable 16.4.2 release, Sharp from 0.34.5 to 0.35.5, and compatible transitive resolutions in the pinned lockfile. React, the Node/pnpm pins, data schemas, encryption format, content and reward rules remain unchanged. A frozen-lockfile install passes. No audit ignore, unofficial fork or broad dependency override was added.

The [Next.js 16.3.8 security release](https://github.com/vercel/next.js/releases/tag/v16.3.8) records fixes included in the newer [16.4.2 stable release](https://github.com/vercel/next.js/releases/tag/v16.4.2). The final `pnpm audit --prod` reports **zero known vulnerabilities**. This is a registry audit result at the recorded date, not a guarantee against undiscovered vulnerabilities.

The complete development audit retains one high finding in `braces@3.0.3`, reached only through `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch`. The registry's latest official version is still 3.0.3, and the [advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) lists no patched release. The production dependency audit excludes this lint-only path. The finding remains visible; follow the [upstream issue](https://github.com/micromatch/braces/issues/73) and refresh the lockfile when an official fix exists. Do not run lint with attacker-supplied glob patterns.

Added a Romanian missing-page screen with direct routes to the adult app, anonymous play and explanation. It reuses the shared button styles, fills the phone action column and permits scrolling on short screens. No profile read/write is needed to render the screen. A screenshot inspection caught content-width phone actions; the final CSS and browser assertion now require full-column actions.

Expanded the actual UI journey to cover nickname/avatar editing, goal pace changes, archive/reactivate, all five guide steps, persisted sound on/off and recovery navigation preserving the entire saved document. Sound remains a committed-storage preference; the test waits for its transaction instead of requiring an optimistic checkbox state.

## Verification

| Check                                                          | Result                                                                                                         |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Frozen-lockfile installation                                   | Pass                                                                                                           |
| Production dependency audit                                    | Pass, zero advisories                                                                                          |
| Full dependency audit                                          | One unpatched lint-only advisory, disclosed above                                                              |
| Content and sound mapping validation                           | Pass, 13 existing image-size warnings; zero reviewed sound targets/rows                                        |
| Matching, gameplay compatibility, setup storage                | Pass                                                                                                           |
| Practice/session/reward/encryption domain checks               | Pass                                                                                                           |
| Sound review packet checks                                     | Pass                                                                                                           |
| Lint, TypeScript and production build                          | Pass                                                                                                           |
| Full practice/backup journey, visible Chrome 155.0.8059.82     | Pass                                                                                                           |
| Full practice/backup journey, headless WebKit 26.5             | Pass                                                                                                           |
| Resilience suite, Chrome and WebKit                            | Pass in both                                                                                                   |
| Original wheel regression, Chrome and WebKit                   | Pass in both                                                                                                   |
| Public routes                                                  | 85 pass                                                                                                        |
| Invalid play/setup target, unsupported locale and missing page | Four Romanian 404 responses, noindex and recovery links verified                                               |
| Saved-data request observation                                 | Only same-origin GET/HEAD requests in the exercised practice/backup journey; no remote write requests observed |

Both full practice suites were rerun after the final recovery layout change. Medal geometry covers 320×568, 390×844, 568×320, 844×390 and 1440×900. Adult workspace checks also cover tablet widths. Screenshot-pixel assertions verify the medal action during live confetti and after resizing. The recovery screen checks phone/landscape/desktop fit and navigation without changing child records, rewards or shared settings.

Resilience checks cover synthesized touch, reduced motion, enlarged text, quota rollback/retry, the named End dialog, focus and temporary anonymous play with blocked storage. The wheel suite covers keep/remove/Escape, focus trapping, replacement, final-word spin continuity, countdown without hidden refilling, replay, target changes and timer cleanup. Domain checks cover overlapping synthetic goal attribution, pending-word deduplication, child isolation, pace preservation, rating corrections and encrypted backup round trips/tamper rejection. These synthetic sound cases do not approve real Romanian mappings.

The first expanded runs exposed test assumptions: an exact wrapped-select label did not match its accessible name, and Playwright's immediate checkbox check preceded the IndexedDB commit. Corrected the locators and waited for persisted state; no error assertions or request findings were filtered to make the journey pass.

## Framework diagnostic and browser limits

The old invalid-target `NoFallbackError` matches [Next.js issue 90537](https://github.com/vercel/next.js/issues/90537). Its proposed fixes were still open when researched. On this updated local build, the four invalid-route probes returned the intended 404 without that diagnostic appearing in the observed server output. This is a local outcome, not a claim about which upstream patch fixed it or every possible missing URL.

Visible Chrome is the verified Chrome screenshot mode. The earlier Chrome 155 headless/live-canvas artifacts remain described in [medal-visibility-checks.md](medal-visibility-checks.md); the audit did not establish an upstream graphics fix. The collaborative preview twice returned `Preview automation snapshot timed out after 15000ms.` The documented external Playwright workflow provided the evidence instead.

The graph catalog still has no Word Wheel index. Source findings use bounded direct reads and searches, not graph coverage. Physical phones, operating-system file handling, installation and assistive technology have not been verified by these desktop engine tests.

## Screenshots and audit artifacts

The captures use synthetic profiles and the local production app:

- [Phone medal](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-18/chromium-mobile-first-medal.png).
- [Phone protected restore preview](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-18/chromium-mobile-restore-preview.png).
- [Desktop child activity](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-18/chromium-desktop-child-workspace.png).
- [Phone recovery navigation](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-18/chromium-mobile-recovery.png).

The same persistent artifact folder holds WebKit equivalents, desktop/landscape medal frames and JSON dependency audits before/after the updates. They are QA artifacts outside the repository, not application assets.

## Acceptance and release

The user confirmed that review packets and phone results have not returned, and asked for local QA followed by their own tests. The [acceptance checklist](acceptance-test-checklist.md) covers introduction/demo, guidance, profiles, goals, setup/shared wheels, play/counting/recovery, rewards/history, adult observations, sound, backups and responsive/error states. It separates three blocked real-mapping checks and provides a result template.

Romanian mapping bytes are unchanged, SHA-256 `a0475c80c4bc9be5e0aa7c3fcb761e5ca9fe76b120dcd414a8d132193f966136`. Overall participation works; verified sound and position credit still waits for the user-arranged review. Ratings remain adult judgments, independent of rewards.

Next: collect acceptance feedback, test the candidate on actual iPhone Safari/Android Chrome through a secure reachable preview, integrate genuine reviewed mappings, and complete the therapist walkthrough. Offline cold launch is explicitly deferred. No deployment, commit, merge, public-demo update or clinical validation was made. A deployable local build does not replace a deployed-preview smoke test. The [next-batch prompt](next-implementation-prompt.md) keeps those gates explicit.
