# Child-first practice workspace

Completed locally 2026-10-26. This amendment supersedes earlier manual-goal prerequisites and selectable reward pace. Mode: Operate. Scope: local child selection, child profiles, practice preparation, target counting and participation rewards. No commit or deployment was made for this update.

## Agreed flow

The adult opens **Copii**, sees each child’s animal, nickname, practiced-word count, medal count and active targets, then enters that child’s focused profile. The same sequence applies on phones and desktop. Prepare/resume leads the profile; activity, target progress, medals and adult pronunciation observations follow. Optional target management stays below progress. Shared saved wheels and protected backups remain available.

Starting a real round atomically creates or reactivates its target for the selected child. Preparing, previewing or saving a reusable configuration creates no child goal. An archived target reuses its ID and history. A group such as CHE is one target. Anonymous play and the public demo create no child records.

Each closed word counts toward practice with the chosen wheel target. Keep, remove and interruption recovery use the same exactly-once commit. Starting or merely displaying a word earns no participation. A repeated word counts again when closed. Adults can still add a target manually for later practice.

## Counting and data contract

Canonical document schema 4 adds optional `practiceGoalId` to a session, pending word and committed turn. The target is captured with the pending word and copied into its committed turn. References must belong to the same child and match the session target. Reviewed `goals` attributions retain their independent presence, absence, position and mapping version. An unknown mapping stays unknown.

A goal’s participation total counts the union of explicit wheel-target practice and reviewed matches, once per word. Reviewed sound/position statistics use reviewed matches alone. This preserves existing reviewed credit and never infers another sound from spelling. An R wheel does not automatically add S because an unreviewed word appears to contain S.

Schema 1/2 migration still normalizes legacy wheel configurations explicitly. Schema 3 is validated before schema-4 migration. Historical turns do not receive invented target IDs or retroactive awards. Existing open sessions adopt their target on resume for future words only; an old already-pending word retains its original attribution. New schema-4 backups preserve target practice and reward promises. Both whole-workspace and child-scoped password-protected backups retain their existing ownership and restore rules. Older app builds cannot read schema 4 and should be reloaded before continued use.

## Medals

One visible participation schedule: 1, 3, 5, 10, then every 10 words. No pace selector. Existing award IDs and earned medals remain. Migration records the old overall next milestone and retains each goal’s next milestone, deriving it from its old pace when necessary. After the promised medal is earned, subsequent milestones use the unified schedule. No retrospective medal burst occurs. Goal progress fills the interval since its last medal. Pronunciation observations do not change any reward.

Choosing the shorter schedule is a pilot design decision for small starter wheels, not a demonstrated clinical optimum. The preschool experiment linked in `research.md` concerns feedback and challenge progression, not every-10 versus every-20 medal comparisons. Preserve that distinction in claims.

## Layout contract

Preserve approved pixel animals and word pictures, system type, warm ivory, teal navigation and coral press actions. Use separated list rows and continuous sections. No card within card. The child list fills the readable workspace; opening a profile replaces the list at every breakpoint. Return to **Toți copiii** is explicit. Long names and target lists wrap. Controls remain reachable on short screens and enlarged text. Settings are secondary to preparing a round.

## Verification

Final verification on the production build passed:

- `pnpm run build` with TypeScript, `pnpm run lint`, `pnpm run check:practice`, `pnpm run check:setup-storage`, `pnpm run check:matching` and `pnpm run check:gameplay`.
- `pnpm run validate:content`, with existing image-size warnings and zero reviewed sound mappings. No inferred phonetic credit is enabled.
- WebKit 26.5 full `check:practice-browser`, including encrypted child/workspace restore, ownership/recovery and demo isolation; `check:practice-resilience`, `check:release-regressions` and final `check:onboarding-browser`.
- New `pnpm run check:child-workspace` in headless WebKit 26.5 and headed Chrome 155. Both cover mobile and desktop, 200% text and short landscape, goal creation only on start, no goal on preview, exactly-once close, two first-word participation medals, archived goal reactivation with history, and no phonetic inference or credit to another child.
- All 85 public routes return 200; four invalid routes return 404.

Expanded domain checks also cover sequence targets, duplicate close/recovery, overlapping reviewed credit, encrypted round-trip, invalid target references, schema-3 migration and preserved reward promises. Canonical schema 4 preserves earned medals and the next promised threshold; historical turns receive no retrospective target labels.

The fresh finish review returned `disposition: ship`. All six mobile/desktop captures were valid and no material fixes remained. Its approval covers the children menu, focused profile, target preview and onboarding continuity. It does not establish whole-app, clinical or physical-device readiness. This extension keeps the existing visual system and assets. Source review used direct reads because the graph catalog has no Word Wheel index.

| Screen         | Phone capture                                                                                          | Desktop capture                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Children menu  | [Phone](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-26/chromium-children-menu-mobile.png)  | [Desktop](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-26/chromium-children-menu-desktop.png)  |
| Child profile  | [Phone](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-26/chromium-child-profile-mobile.png)  | [Desktop](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-26/chromium-child-profile-desktop.png)  |
| Target preview | [Phone](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-26/chromium-target-preview-mobile.png) | [Desktop](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-26/chromium-target-preview-desktop.png) |

The local production server runs on port 3000. [Secure Tailscale practice](https://dariuss-macbook-pro-2.tail1ee9b4.ts.net:9443/ro/practice) returned 200. Opening requires a connection; child records and protected backup/restore remain local to the browser. Physical iPhone/Android and assistive-technology checks, therapist feedback and user-arranged Romanian mapping review remain pending. Deploy only on an explicit request for this update.

## User test

1. Open Copii with several profiles. Check names, animals, totals and target summaries. Enter one child and return with Toți copiii on phone and desktop.
2. Prepare and save an R wheel, then leave its preview. R must not yet appear as a newly tracked target. Return to the prepared wheel and start. R appears immediately, with zero practiced words and no new medal.
3. Close a word using Keep or Remove. Overall and R practice increase once. A second close does nothing. Check the progress bar, award text and medal collection.
4. Archive R, start another R round, and check that R is reactivated with its history intact. Start CHE for another child and confirm one CHE target, isolated from the first child.
5. Interrupt an open word, reload and resume. It is counted once; a queued medal remains available. Unreviewed sound/position statistics must still show no verified evidence.
6. Restore an older protected backup. History and medals remain, and the next promised threshold is preserved. Export and restore the updated child and full workspace. Confirm adult pronunciation ratings still have no effect on rewards.

## Next implementation prompt

```text
Continue GP9 acceptance for the locally completed 2026-10-26 child-first workspace. Read AGENTS.md, docs/agent-brief.md, docs/spec.md, docs/plan.md, docs/status.md and this amendment. Local automated checks and the scoped six-capture finish review pass. Use the six user tests above to collect actual iPhone Safari/Android Chrome and assistive-technology results through the secure Tailscale app, then record therapist feedback and user-arranged Romanian mapping review. Do not mark missing human evidence complete. Preserve schema-4 migration, earned medals and the next promised threshold, historical attribution, target-versus-phonetic separation, exactly-once counting, configuration locks, stale-edit protection, protected restore and online-required messaging. Do not infer sound mappings from spelling. Fix only evidenced acceptance findings and record actual verification. Deploy only when explicitly requested for this change.
```
