# Pilot resilience checks

Date: 2026-10-16. This continues the user's implementation/testing request. It preserves the accepted reward, sound-review and local-data contracts.

## Confirmed issues and fixes

| Finding                                                                | Result                                                                                                                       |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Introduction header/title overflowed at 320px with 200% root text size | Header wraps and the heading can wrap long words; no horizontal loss in the tested matrix                                    |
| Synchronous IndexedDB quota exceptions exposed raw browser text        | Quota failures now explain space/retry in Romanian, preserving the transaction rollback                                      |
| End dialog had no accessible name                                      | Native dialog now references its title and description                                                                       |
| End-save error appeared behind the active modal                        | Error is announced and shown inside the modal, with retry/continue actions; End errors are separate from general read errors |
| Anonymous setup required profile IndexedDB and Web Locks               | A failure offers an explicitly temporary base wheel, with no profile credit or configuration writes                          |

The temporary wheel skips saved-configuration hydration and prevents its save/delete operations. It preserves the existing library, uses the public content already loaded, and displays “Fără salvare”. This does not add offline loading or synchronize anything. It restores the promised anonymous-play path when local storage or browser locking is unavailable.

## Evidence

The command shares the existing browser-QA prerequisite: externally installed Playwright, with `WORD_WHEEL_PLAYWRIGHT_PATH` pointing to it when it is not resolvable locally. This machine used `/Users/darius/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright`; no project dependency was added.

`pnpm run check:practice-resilience` uses isolated Chrome with `hasTouch`, mobile emulation and reduced motion. It drives real browser `tap()` actions, not merely a resized desktop layout. It verifies:

- Introduction, activity, pronunciation, backups and pre-play at 100/150/200% root text sizing and 320/390/768/1440px widths, including tab-text clipping. This is a text-resizing probe, not a complete browser-zoom or assistive-technology audit.
- Result focus after saving, synthesized-touch spin/close, reduced-motion medal delivery and absence of confetti canvas in that case.
- A simulated quota failure on result close leaves zero completed turns and one pending result; retry yields exactly one turn/medal.
- A quota failure on End remains visible in the named dialog. Cancelling returns to usable play without a stale End error; retry ends the same session with no extra credit.
- Missing IndexedDB, missing Web Locks and combined blocked storage each lead to temporary play. The profile-to-anonymous escape is exercised. A seeded one-word configuration is ignored by the temporary wheel, retained byte for byte, and no Word Wheel configuration writes occur.

The full practice browser suite and existing wheel browser regression also pass for the changed wheel path. Domain checks, lint and production build pass. Final verification runs against the production server on port 3000, stopping it before builds. All 85 route checks pass, including an unknown-target 404. Content validation passes with the same 13 pre-existing image-size warnings and zero reviewed sound mappings. Matching, gameplay compatibility and setup-storage checks pass. The final production build/lint and domain suite pass. The final full practice/backup browser suite also passes after the End-error cleanup. Changed-file formatting, local Markdown links and `git diff --check` pass.

The collaborative browser separately reproduced blocked storage and a quota failure in a synthetic profile, then removed the fault and successfully resumed/ended play. No real child data was used. Captures:

- Mobile blocked-storage recovery: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb4sfhs-657b0374.png`
- Mobile temporary result, with “Fără salvare” visible: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb4swt1-ea7a386f.png`
- Desktop End-dialog quota failure: `/Users/darius/.t3/userdata/browser-artifacts/browser-screenshot-localhost-mvb4wxdf-32321943.png`

The current production server is left on port 3000. No deployment was performed.

## Standards and limits

The work uses [W3C resize-text guidance](https://www.w3.org/WAI/WCAG21/Understanding/resize-text) and the [WAI modal-dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) to choose the probes and dialog fix. Passing these focused checks is not a WCAG conformance claim.

No physical iPhone/Android, VoiceOver/TalkBack, browser-native text settings or installed-mode result is claimed. WebKit was not installed for this batch; the subsequent [cross-browser checks](cross-browser-checks.md) installed it externally and passed this suite. Romanian mappings remain unreviewed. Continue the [pilot checklist](pilot-checklist.md) and [next prompt](next-implementation-prompt.md). No dependencies, vocabulary or deployment changed.
