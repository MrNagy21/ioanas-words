# Guided practice app build plan

Planning and local implementation: 2026-10-16. GP0–GP7 are implemented and locally verified. GP8 adds the manifest; offline is explicitly deferred. GP9 sound review, physical devices and therapist pilot remain. See [status.md](status.md) and [implementation-report.md](implementation-report.md) for acceptance evidence.

Read [spec.md](spec.md), [status.md](status.md), and [research.md](research.md) alongside the root agent brief. Prefix these batches with `GP` to distinguish them from the already implemented original app batches. Keep the existing wheel and content system; extract supporting responsibilities only when a batch needs them.

## Build order and checkpoints

| Batch | Result                                                            | Depends on                                                     |
| ----- | ----------------------------------------------------------------- | -------------------------------------------------------------- |
| GP0   | Concrete contracts, content-review scope, and offline feasibility | This package                                                   |
| GP1   | Reliable local data and migration foundation                      | GP0 storage contract                                           |
| GP2   | Adult workspace, child profiles, and editable goals               | GP1                                                            |
| GP3   | Shared configurations and goal-aware pre-play screen              | GP2, reviewed mapping contract                                 |
| GP4   | Persisted play sessions, counting, ending, and recovery           | GP3                                                            |
| GP5   | Statistics, pronunciation observations, medals, and celebrations  | GP4, reviewed rating/reward rules                              |
| GP6   | Whole-app and individual-child backup/restore                     | GP5 stable records; export foundations begin in GP1            |
| GP7   | Landing page, isolated demo, and restartable onboarding           | GP3–GP6 journeys stable                                        |
| GP8   | Installability and offline support, if feasible                   | GP0 feasibility and GP4 recovery; tested with GP7 routes       |
| GP9   | Physical-device QA, therapist pilot, and release preparation      | Required batches complete; GP8 included or explicitly deferred |

The first integrated development checkpoint is GP4: create/select a child, choose goals, prepare a wheel, close a word, reopen the app, and see that its participation record is correct. It is not the complete public pilot. Rewards and backups are required before recruiting real users with data they expect to keep.

## GP0: Contracts and feasibility

Produce small, reviewable implementation briefs before adding production schemas or screens:

- Confirm current repository/toolchain state and existing regression results. Use the expected server on port 3000; if unavailable, report it and continue independent checks without starting another server.
- Specify the local store, migration from `word-wheel.setup.v1`, transaction boundaries, schema/version checks, multi-tab ownership, failure recovery, and backup envelopes. Recommend browser-only IndexedDB, explain its tradeoff against the current single localStorage object, and record the chosen approach in an ADR. No hosted database.
- Turn the counting table into a state-machine contract. Include interrupted spins versus displayed pending words, close/remove races, last-word early modal, recovery receipts, same-child reward queues, and changes to active goals.
- Audit candidate sound/position coverage using existing words. Present the proposed static mapping schema, reviewed target identities, ambiguous sequence matches, and review workload. Get the human's decision on the concrete production content contract before changing it.
- Specify the pronunciation-quality slider anchors, unrated state, and scale version. Confirm Romanian wording with the human/reviewer. Do not use independence labels.
- Draft Frequent/Standard reward schedules and behaviour after the last initially planned medal. Separate tuning values from evidence. Keep the agreed overall ladder as the starting proposal.
- Specify backup file protection and user-facing transfer guidance before real child records are collected. This decision must be visible, not an accidental consequence of an implementation library.
- Create the route/screen map and mobile wireflow using the established visual identity. Separate landing/history layouts from the no-scroll play board. If UI design skills are used, follow their product-context workflow before new screens.
- Run a bounded PWA feasibility investigation against the pinned Next.js version. Check app navigation, content/image cache paths, cold offline launch, update behaviour, and package maintenance if a dependency is proposed. Separate installability from offline capability. Do not add push infrastructure.

Deliverables: ADR, local record/backup contracts, state-machine cases, sound-review report and proposed schema, rating/reward drafts, screen map, and offline recommendation. Record evidence and remaining human decisions in feature status. Blocking one production mapping decision must not stop independent local-storage work after its own contract is settled.

Exit: downstream batches have concrete interfaces and tests to implement. Any clinical/content schema or release-scope decision still pending has an explicit owner and affected batch. Do not mark offline feasible without evidence.

## GP1: Local data foundation

- Add the storage adapter and pure domain records. Keep rendering outside these modules.
- Add validation, migrations, stable IDs, transaction helpers, and corruption/write-failure reporting.
- Migrate existing named/active configurations once without losing exclusions, manual word IDs, or target identities. Preserve the legacy source until verified.
- Build validated export/import primitives early, even though adult backup UI arrives in GP6.
- Add single-session mutation ownership and observable updates across tabs.

Meaningful checks: legacy fixtures, repeated migration, unknown/corrupt data, denied/quota storage, failed transaction, duplicate event/award insertion, and rollback. Avoid tests that merely restate type definitions.

Exit: saved records survive reload, failures are visible, and migrations/restore primitives cannot silently erase existing setups. No real child data is required for these tests.

## GP2: Profiles, goals, and adult workspace

- Build the profile picker, create/edit/delete flow, and child workspace with unmistakable child context.
- Add reviewed goal choices, goal activation/archive, and independent per-goal reward frequency. Preserve history when a goal is archived or reactivated.
- Support a profile with no goals and general anonymous practice. Do not force account registration, real names, diagnoses, or a PIN.
- Keep setup/help/backups in adult navigation. Add recovery messages for missing/deleted profiles and storage failures.
- Use approved avatar art with recorded provenance; no placeholder child-facing asset release.

Checks: two profiles never share history or rewards; deleting one leaves the other and shared library intact; keyboard/phone flows work; reload does not flash another child's data.

Exit: an adult can create/select a child and edit that child's goals without entering play. Existing anonymous game routes remain usable.

## GP3: Shared configuration library and pre-play summary

- Expose all adult configurations in one library, with target filtering and explicit edit/copy/delete actions. Reuse the current wizard and its exclusion/manual selection rules.
- Finish reviewed sound mapping needed for enabled pilot goals. Keep review evidence, completeness, and content-version validation in the repository.
- Prepare a concrete wheel subset, then show its child, configuration, and possible goal credits. Keep that subset stable through Start.
- Support missing-goal and no-match messages plus nonblocking general practice. A goal-edit detour returns to the intact draft.
- Preserve existing direct target links. Starting tracked play requires explicit child context; direct anonymous play must never silently attribute to the last child.

Checks: reviewed multi-goal matches, repeated target deduplication, Romanian diacritics, ambiguous letter groups, zero matches versus unknown coverage, exclusions, empty eligible pools, duplicate configuration names/IDs, and snapshot stability.

Exit: the adult can reuse a saved wheel for different children and see truthful, child-specific credit eligibility. Production goal credit waits for the declared mapping review; no literal-match shortcut disguised as phonetic evidence.

## GP4: Durable play and turn accounting

- Introduce a session controller around the existing wheel. Keep the visual/animation behaviour and no-refill subset semantics unless a confirmed bug requires a change.
- Move setup/replacement/reset management out of child play. Retain keep/remove, accessible result dismissal, spin, and a clear End action after closing a result.
- Persist displayed pending turns and commit participation on result closure. Apply round changes and award eligibility transactionally.
- Finish on empty wheel or confirmed End. Record early-ended and interrupted sessions without treating either as failure.
- Resume remaining words and recover pending displayed turns once. Never credit a spin whose result was never shown. Do not count a temporary background tab change as a close.
- Preserve goal/mapping snapshots per turn and configuration snapshots per session. Handle missing content after an app update without inventing practice.

Checks: every row in the spec counting table; rapid double taps; Escape/close/remove races; last-word result while the wheel still animates; reload before/after commit; same-target rerender; target switch; another child opened first; concurrent tabs; interrupted animation; old configuration edited/deleted; reward queue replay without duplicate ownership.

Exit: the GP4 integrated checkpoint works and new persistence tests supplement the existing wheel browser regression. Counting is auditable from turn records, not reconstructed from animation state.

## GP5: Statistics and reward experience

- Build adult history, per-goal counters, distinct-word totals, reviewed position breakdowns, and dated pronunciation-quality observations.
- Implement versioned Frequent/Standard participation rules, permanent award identities, and a child-owned collection.
- Add explicit adult progress celebration actions, immediately presentable or queued for the same child. Slider edits alone award nothing.
- Adapt the existing confetti into brief, skippable celebration sequences. Bundle simultaneous awards; support static reduced-motion presentation and optional sound, off by default.
- Produce/review optimized medal art and optional choice variants. Preserve consistent visual identity and license/provenance records.
- Keep rating values out of child play. Provide useful empty history/collection states without implying failure or requiring a streak.

Checks: same word repeated versus distinct words; one turn credits multiple selected goals once; no unselected vowel credits; no historical re-credit after new goals; frequency changes preserve earned awards and existing progress; lower/corrected ratings remove nothing; replayed effects cannot mint awards; unknown position is not zero; totals across overlapping goals/positions are labelled correctly.

Exit: the adult can distinguish recorded participation from their own pronunciation observations; the child can understand a reward's reason. Milestone values remain pilot hypotheses, not therapeutic prescriptions.

## GP6: Backup and restore UI

- Expose whole-app and single-child exports and validated preview/restore flows.
- Include an export-current-data option before replacement. Show the exact selected scope and confirmation.
- Implement identity/configuration conflict handling without overwriting other children or shared configurations.
- Restore records atomically, including pending turn/award presentation state. Do not merge histories.
- Add profile deletion and backup guidance consistent with the chosen file protection. Explain local storage, device loss, cleared browser data, and manual transfer plainly.

Checks: round-trip both scopes; restore same file twice; older supported schema; newer unsupported schema; truncated/malformed/oversized file; invalid references; collision with shared configuration; interruption during restore; a file containing other-child records in a single-profile envelope; queued celebration and pending-turn deduplication; failed write leaves current state intact.

Exit: an adult can recover one child without changing anyone else, or replace the full app deliberately. Real pilot data collection waits for this batch.

## GP7: Introduction, demo, onboarding, and help

- Build the mobile/desktop one-page explanation with real product examples, clear Start/Try demo actions, local-saving explanation, and appropriate creator credit. Avoid clinical outcome claims.
- Build a transient demo using approved content. Sample awards cannot be confused with saved child achievements.
- Guide the first real profile → goals → wheel → preview → result actions journey. Make it skippable, resumable, and restartable from Help without resetting data.
- Route returning adults to the workspace while keeping the public introduction available. Preserve bookmarked existing setup/play links.
- Add help for goal credit, adult ratings, sound/motion settings, backup/restore, and any installation/offline limitations.

Checks: new visitor without stored data; returning adult; deleted last profile; skipped/restarted guide; demo followed by real play; browser Back; keyboard on small phones; long Romanian labels; enlarged text. No internal setup detail should leak into child play.

Exit: someone unfamiliar with Word Wheel can complete the first activity without developer coaching, and return to the same child/configuration later.

## GP8: Conditional installability and offline work

Follow GP0's evidence. Add the manifest/icons and installation guidance without requiring installation. If offline caching is included, implement a versioned asset plan for app shell, navigation, static content, and images. Verify readiness before labelling an activity downloaded. Show honest uncached/offline error states.

Checks: airplane-mode cold launch after preparation, all required images, direct setup/play navigation, interruption recovery offline, storage pressure/download failure, install mode on iOS/Android, cache upgrade, older open tab, and deferred update during active play. Local child data must survive cache replacement. Test the pinned app build, not an isolated service-worker sample.

Exit: installation and offline support each have a separate verified status. If offline is too costly or unreliable, record the bounded findings and defer it as permitted by the user. Do not defer core local saving or recovery with it.

## GP9: Pilot and release

- Run the applicable automated commands below and retain regression evidence. Revalidate approved content even when only mapping metadata changed.
- Verify a deployable preview before release. Review public routes for accidental exposure of child records and truthful local/offline language.
- Test real iPhone Safari and Android Chrome, plus tablet/desktop. Include rotation, browser chrome, keyboard, enlarged text, focus, background/resume, and backup file handling.
- Run a small therapist-led pilot, with a parent walkthrough of the same flow. Observe first setup, returning setup, selecting the correct child, understanding goal credit, and understanding local backup.
- Observe whether children understand rewards, can stop comfortably, and rush words to trigger effects. Adjust pacing/art based on observations rather than maximising screen time. Record qualitative findings, not clinical effectiveness claims.
- Record which human reviewed mappings and slider wording. List known limitations, offline decision, release revision, backup compatibility, and recovery/rollback instructions.
- Obtain release authorization for the concrete preview, deploy if requested, and repeat route/core-journey smoke tests. Any missing physical-device or content review remains visible.

Exit: a verified pilot release with no silent data loss, duplicate participation, wrong-child attribution, or unreviewed sound claims. If a gate fails, continue fixing it rather than describing the feature as production-ready.

## Verification commands and evidence

Use the pinned package manager and Node version in `package.json`. Establish a baseline in GP0; this planning task does not claim these checks have been rerun.

```sh
pnpm run validate:content
pnpm run lint
pnpm run check:matching
pnpm run check:gameplay
pnpm run check:setup-storage
pnpm run check:wheel-browser
pnpm run build
pnpm run check:demo-routes -- http://localhost:3000
git diff --check
```

Add focused domain/storage/backup checks using the repository's existing test approach. Their exact commands must be recorded when added. Update the route smoke checks for approved new routes. The existing browser regression has documented tooling prerequisites in `docs/demo-readiness-review.md`; report missing prerequisites, don't silently omit it.

Use `http://localhost:3000` for route/browser verification. Do not start another dev server or select a different port. Validate a deployed preview separately from local development. Scope checks to each change, then run the complete regression at the integrated checkpoint and release.

After every batch: update this feature's status and root `docs/status.md`, record checks/limitations, and provide a ready-to-copy prompt for the next batch. Do not commit, merge, or deploy as an implied consequence of a planning-only task.
