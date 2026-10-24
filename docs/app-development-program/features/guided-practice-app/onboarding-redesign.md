# Focused onboarding redesign

Completed locally on 2026-10-24. Production build `B5uQVZrpGJmAe9TrzDnTp` is running on port 3000. No deployment was made.

The user's iPhone screenshot showed the old inline guide competing with the profile dashboard. This replaces that guide with five full-page tasks. Automated checks of the old layout did not establish that it was intuitive.

## What changed

1. A short welcome uses existing animal artwork and one main action.
2. The adult creates a nickname/avatar or chooses an existing child.
3. The adult chooses an optional sound. Skipping keeps existing goals.
4. Up to eight real word pictures show the exact starter wheel. The adult can change its target or choose another subset.
5. A brief handover starts real saved play. An existing round is resumed without replacement.

Each page has one coral primary action, a quiet exit to profiles, progress and Back. The dashboard is hidden during setup. Phone controls fill the available width; desktop forms stay constrained. The custom-wheel explanation lives above the primary action inside the footer so it cannot disappear beneath it. Help reopens the complete setup. `/ro/practice?guide=1` also opens it for adults who already completed the previous guide.

The former `practice-guide.tsx` is removed. `practice-onboarding.tsx` owns the focused pages; `profile-workspace.tsx` connects their writes and play handover. A neutral loading page avoids flashing an empty dashboard while local data loads.

## Saved-data behaviour

Canonical IndexedDB schema remains 3. Existing onboarding preferences remain compatible. The optional, per-tab `word-wheel.onboarding.v2` session-storage draft keeps the selected child, step and exact word IDs. Invalid or stale selections return to picture review. Profile and goal changes use the existing revision-checked save transaction. A failed profile save stays on the form and retry creates one profile.

Starting a new round and completing onboarding share one transaction. Reopening Help with an active round offers resume rather than replacement. Exiting the guide preserves profiles, shared configurations, activity, observations and medals. This does not change counting, reward schedules, pronunciation ratings, encryption, mappings or content.

## Verification

Checks used synthetic browser contexts and existing approved catalog images. No real child records were needed.

| Check                                               | Result                                           |
| --------------------------------------------------- | ------------------------------------------------ |
| Final production build and TypeScript               | Pass, 88 generated pages                         |
| Final ESLint                                        | Pass                                             |
| New onboarding journey, headed Chrome 155.0.8059.85 | Pass after footer fix                            |
| New onboarding journey, headless WebKit 26.5        | Pass after footer fix                            |
| Full practice/backup journey in both engines        | Pass before final scoped footer adjustment       |
| WebKit storage/touch/text resilience                | Pass before final scoped footer adjustment       |
| Practice domain/encryption checks                   | Pass                                             |
| Public routes                                       | 85 valid routes and four Romanian 404 cases pass |
| Tailscale HTTPS guide                               | HTTP 200, TLS verification result 0              |

The new `check:onboarding-browser` checks fresh setup, actual profile/goal writes, quota failure and retry, reload without duplicate profiles, exact preview-to-play words, app and browser Back/Forward, optional goals, corrupted draft recovery, first real medal, existing-round resume, Help/exit preservation and explicit guide entry. Every page is checked at 320×568, 390×844, 568×320 and 1440×900 with root text at 100% and 200%. Primary actions remain reachable and the guide has no horizontal overflow. These simulations do not prove physical keyboard, Safari toolbar or assistive-technology behaviour.

A fresh WebKit phone context also loaded the Tailscale guide successfully with HTTP 200 and confirmed a secure context with IndexedDB, Web Locks and Web Crypto available. It did not write child records.

The practice and resilience scripts now explicitly leave onboarding when testing the separate adult workspace. Their guide checks use the full-page Help flow.

T3 browser automation was attempted twice and returned `Preview automation snapshot timed out after 15000ms.` Testing then used the repository's external Playwright workflow. The graph catalog had no Word Wheel index, so implementation discovery used direct source reads and searches, without graph evidence.

## Visual finish

Impeccable was used for this extension. The [direction contract](onboarding-surface.md) preserves the established ivory, teal, coral, system type and approved pixel artwork. No new raster assets were generated.

The fresh finish review returned `disposition: fix` for one issue: custom-wheel supporting copy was partly hidden by the footer in phone and desktop captures. After moving that copy into the footer and recapturing the same seven files, a fresh verdict pass marked it resolved, found no fix-induced regressions and returned `disposition: ship`. That verdict covers the scored overflow fix only. It is not whole-app production approval or physical-phone evidence. The documenter merged the implemented guidance into `DESIGN.md` and the direction contract.

## Screenshots and repeat command

Evidence is retained at `/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/`. Both engines have welcome, profile, sound, words and handover phone captures, plus welcome and words desktop captures. The R sound and S wheel screenshots show a deliberate target change in the automated journey, not an unexplained automatic mismatch.

- [Phone welcome](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/chromium-onboarding-welcome-mobile.png)
- [Phone profile task](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/chromium-onboarding-profile-mobile.png)
- [Phone picture wheel, corrected footer](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/chromium-onboarding-words-mobile.png)
- [Desktop picture wheel, corrected footer](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24/chromium-onboarding-words-desktop.png)

Use the pinned Node 24/pnpm environment, an already-running server on port 3000 and the external Playwright installation:

```bash
WORD_WHEEL_PLAYWRIGHT_PATH=/Users/darius/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright WORD_WHEEL_QA_ARTIFACT_DIR=/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24 WORD_WHEEL_HEADED=1 pnpm run check:onboarding-browser
WORD_WHEEL_PLAYWRIGHT_PATH=/Users/darius/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright WORD_WHEEL_QA_ARTIFACT_DIR=/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-24 WORD_WHEEL_BROWSER=webkit pnpm run check:onboarding-browser
```

## User test and remaining gates

Open [the focused guide over Tailscale](https://dariuss-macbook-pro-2.tail1ee9b4.ts.net:9443/ro/practice?guide=1) from a device on the same tailnet. Keep the Mac awake. Existing Serve services on 443 and 8443 remain unchanged; 9443 forwards to local port 3000. Each browser and origin has separate local records.

The [acceptance checklist](acceptance-test-checklist.md) starts with the new sequence and lists the rest of the implemented functions. Actual iPhone/Android and therapist feedback are still needed, especially whether first setup can be completed without coaching. The user's earlier phone screenshot is a real failure report; the new sequence still needs their acceptance. Romanian mappings remain unknown until reviewed packets arrive. Offline cold launch remains deferred. No deployment, commit or merge was made.

Continue with the [ready-to-copy GP9 prompt](next-implementation-prompt.md).
