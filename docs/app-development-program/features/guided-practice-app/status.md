# Guided practice app status

Published 2026-10-26: the approved workspace, automatic targets, profile settings, navigation, Vorbini branding, legal drafts and footer are deployed together. See the [current release report](release-2026-10-26.md) and [updated acceptance checklist](acceptance-test-checklist.md). Earlier entries below describe their individual local checkpoints.

2026-10-26: [Focused profile settings](profile-settings-surface.md) are implemented and locally verified. Six described profile destinations replace the long combined page. Sound selection and pronunciation use labelled native radios; activity, medals, observations, celebrations and settings open as separate tasks. Profile backup entry selects that child by default. Browser Back/Forward follows profile and pronunciation navigation, and choosing a child resets to its home. This extension changes no schema, counting, reward or reviewed-mapping contracts.

Production build/TypeScript, lint, practice domain checks and scoped formatting pass. The new `check:profile-settings` passes in headed Chrome 155 and WebKit 26.5 at narrow phone, portrait, landscape and desktop sizes, including 200% text. WebKit full practice/protected restore, resilience, release regression, child-workspace and onboarding suites pass. A later targeted check found multi-letter picker overflow at 390px/200% text. The corrected grid grows with text; production build/TypeScript and both focused browser suites pass again with individual letter/group label overflow assertions. All eight original captures were refreshed, with an additional enlarged-text group capture; all nine were opened and validated. Documentation and the final full regression run are complete. The final reviewer scored the documentation, full regression run and enlarged-text fixes resolved and returned `disposition: ship` for those fixes only. No commit, push or deployment was made for this extension. Physical-device, assistive-technology, therapist and Romanian mapping acceptance remain pending.

2026-10-26: [Child-first workspace and automatic target tracking](child-first-workspace.md) are complete locally. Schema 4 separates explicit wheel-target participation from reviewed sound/position credit and preserves history, earned medals and the next promised milestone. One visible schedule replaces selectable reward pace. No commit or deployment was made for this update; the published pilot below remains the previous version.

Final build/TypeScript, lint, content, practice/migration/backup, setup-storage, matching and gameplay checks pass. WebKit 26.5 passes full practice/protected restore, resilience, release regressions and onboarding. The new `pnpm run check:child-workspace` passes in headless WebKit 26.5 and headed Chrome 155 at mobile/desktop sizes, 200% text and short landscape. All 85 public routes and four invalid-route 404s pass. A fresh finish review returned `disposition: ship`, accepted all six captures and requested no material fixes within the menu/profile/target-preview/onboarding scope. Physical-device, assistive-technology, therapist and Romanian mapping acceptance remain pending. The [amendment](child-first-workspace.md) records captures, test coverage and the next prompt.

Last updated: 2026-10-26.

## Current phase

GP0–GP7 implementation is complete and locally verified. GP8 adds manifest/icons; offline caching is explicitly deferred. GP9 remains: human Romanian mapping review, physical-device checks and a therapist-led usability pilot. The pilot is now deployed at [ioanas-words.vercel.app/ro/practice](https://ioanas-words.vercel.app/ro/practice). GP9 human acceptance and clinical validation are not complete.

Open `/ro/about?show=1` for the introduction, `/ro/practice` for the adult workspace, `/ro/demo` for the isolated example, or `/ro` for anonymous play. The production server is running on port 3000 after `pnpm run build` and `pnpm run start --port 3000`.

## Published pilot

The [release audit](release-audit-2026-10-24.md) records Astra high's four findings, their corrections and final CODEDEPLOY: APPROVE. Reviewed code `779ac39` was deployed through the existing GitHub/Vercel connection. Public-origin full practice/backup tests pass in Chrome/WebKit; onboarding/setup, routes and normal-profile Chrome installability pass too. The app can be added to a home screen, but requires a connection to open. Actual device/therapist/Romanian review remains pending.

## Wheel setup refinement

The [wheel setup refinement](wheel-setup-clarity.md) addresses the user's next phone finding. All four steps use a flat layout, the selected count explicitly names words on the wheel, and saving expands as an optional task. Final build/lint and focused Chrome/WebKit checks pass; both full practice/backup journeys also pass before the last scoped width correction. Actual phone acceptance remains pending.

## Focused onboarding

The [2026-10-24 redesign](onboarding-redesign.md) replaces the rejected inline guide with five full-page setup tasks. Profile creation, optional goals, exact starter pictures and real play happen inside the guide. Existing rounds resume; Help/exit preserve saved records. Final build, lint and Chrome/WebKit onboarding checks pass, with corrected phone/desktop screenshots. The finish verdict is `ship` for the scored footer-overlap fix only. User acceptance of the new phone flow remains pending.

## Acceptance handoff

The user requested agent-owned local QA before their tests. The [2026-10-18 QA report](production-qa-2026-10-18.md) records Next/ESLint config 16.4.2, Sharp 0.35.5, zero production audit advisories, one unpatched lint-only finding, Romanian 404 recovery and passing build/content/domain checks, all six browser suites, 85 public routes and four invalid-route cases. The [acceptance checklist](acceptance-test-checklist.md) lists features, expected behaviour and a results template. This historical checkpoint was ready for local acceptance testing. The 2026-10-24 release above completes deployed-origin verification; Romanian review, physical phones and therapist feedback remain.

## Latest rendering checks

[Medal rendering checks](medal-visibility-checks.md) add actual screenshot-pixel assertions during confetti and after resizing. The final full journey passes in visible Chrome and headless WebKit; WebKit resilience, build, lint and all 85 routes pass. Chrome 155 headless capture artifacts remain documented, with an explicit headed QA option. Approved UI and reward behavior are preserved. Screenshots and rebuilt blank reviewer packets now use a persistent artifact folder.

## Reviewer handoff

The [reviewer handoff](reviewer-handoff.md) now provides generated S/R packets, Romanian instructions and generator/validator commands. All 596 words per packet remain unknown; no production mapping changed. CLI checks, content validation, TypeScript, lint, all 85 routes and a fresh Chrome practice suite pass. Human approval, physical devices and therapist feedback remain pending.

## Latest medal and button refinement

The user-requested award/mobile refinement is complete. See [medal-button-refinement.md](medal-button-refinement.md) for the warmer award text, illustrated choices, shared action styles, mobile stacking and screenshots. Chrome/WebKit full practice suites, WebKit resilience, Chrome wheel regression, build, lint and domain checks pass. Data and reward rules are unchanged.

## Latest cross-browser checks

WebKit now passes the full practice/backup journey, resilience suite and existing wheel regression. Chrome also passes the updated practice journey. See [cross-browser-checks.md](cross-browser-checks.md) for versions, screenshots, navigation-test changes and the distinction from physical Safari. No app or dependency change was needed; GP9's human review/device/pilot gates remain.

## Latest resilience work

Focused hardening is complete: enlarged-text reflow, quota retry, named End dialog with visible errors, and a temporary anonymous fallback when local saving/locking is unavailable. See [resilience-checks.md](resilience-checks.md) for the new `check:practice-resilience` command, actual evidence and remaining device limits. This does not enable offline launch or sound credits.

## Latest refinement

The UI/copy refinement is complete and locally tested. See [ui-refinement.md](ui-refinement.md) for the mobile detail navigation, sound disclosure, picture history, warmer Romanian text and fresh evidence. The [pilot checklist](pilot-checklist.md) is ready for GP9; physical-device/reviewer results remain unfilled.

## Batch status

| Batch                     | Status                                                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| GP0 contracts/feasibility | Complete; accepted decisions recorded in [gp0-contracts.md](gp0-contracts.md)                                     |
| GP1 local data            | Complete; transactional IndexedDB, schema migrations, revisions, failure rollback and setup compatibility         |
| GP2 profiles/goals        | Complete; create/edit/archive/delete, identity isolation and selected goals                                       |
| GP3 shared setups/preview | Code complete; exact prepared-word preview, reviewed/unknown distinction, goal detours. Real sound review pending |
| GP4 durable play          | Complete; close accounting, pending recovery, exclusive ownership, keep/remove and confirmed end                  |
| GP5 statistics/rewards    | Complete; dated observations/corrections, activity, goal positions, collections, separate adult celebrations      |
| GP6 protected backups     | Complete; both scopes, bounded encryption/validation, preview and atomic replacement                              |
| GP7 guided entry          | Complete; responsive introduction, isolated demo, returning-adult routing and restartable guide                   |
| GP8 installation/offline  | Manifest/icons added. Physical installation unverified; offline caching explicitly deferred                       |
| GP9 pilot/release         | Local and public-origin QA complete; deployed pilot; review/device/pilot acceptance outstanding                   |

## Accepted decisions

- Count each closed result once. Keep/remove/X/Escape all count. Repeated spins are new turns.
- Recovery counts an already displayed persisted pending turn once, keeps its word and queues any prize for that child. Merely hiding a tab does nothing; shutdown saving is not guaranteed.
- Credit all reviewed matching active goals, once per goal per turn. Global totals do not double-count overlaps; unselected sounds receive no goal credit. Positions are overlapping statistics, not medals.
- The user accepted a versioned sound-mapping sidecar keyed by existing word IDs and will arrange Romanian review. There are **zero reviewed mappings**; the 596-row worksheet is spelling triage only. Overall participation works now; no sound attribution is inferred from letters.
- The user approved unrated plus the 0–5 pronunciation labels in the contracts. Ratings describe adult judgment of pronunciation, never independence or app-measured accuracy. Corrections/lower ratings do not alter rewards.
- Adult progress medals require explicit action and may appear now or next play. They have distinct artwork.
- Standard: 1, 5, 10, 20, then every 20. Frequent: 1, 3, 5, 10, then every 10. Every counted word fills the next-medal bar; pace changes preserve the promised next medal. No XP/multipliers.
- Password-protected whole-app and per-child backups are implemented. No cloud synchronization, plaintext-export UI, account or hosted database.
- Missing/unknown/no-match goals permit general practice. Goal setup returns to the prepared wheel. Adult wheel configurations are shared across children.

## Known framework log

The `NoFallbackError` diagnostic is reproduced only when rejecting an unknown static route with HTTP 404. Valid app routes return 200 without new server errors; the current server remains running. This matches the upstream Next.js logging issue, recorded in [implementation-report.md](implementation-report.md). No application workaround or dependency change was needed.

## Verification and remaining work

See [implementation-report.md](implementation-report.md) for commands, viewport evidence, persistence/recovery checks, encryption limits and the explicit online-required decision. Existing content remains 599 records, 596 approved ready images, zero approved placeholders. No vocabulary/image replacements or dependencies were added.

Use the [ready-to-copy next prompt](next-implementation-prompt.md) for GP9. Do not restart scaffolding, repeat the full product interview or mark unreviewed mappings as absent.
