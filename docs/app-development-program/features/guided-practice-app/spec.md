# Guided practice app specification

## Current behavior amendment: 2026-10-26

The [child-first workspace amendment](child-first-workspace.md) supersedes manual-goal prerequisites, selectable reward pace and the schema-3 ceiling. Starting adds or reactivates the selected child’s target. Closed words earn chosen-target participation credit separately from reviewed phonetic statistics. Existing history and the next promised reward are preserved.

Status: Local implementation complete for GP0–GP7; GP8 manifest added, offline deferred; GP9 review and pilot release gates remain.
Planning date: 2026-10-16.
Implementation evidence: [implementation-report.md](implementation-report.md).
Sources: the product interview in this thread, [research](research.md), and the source review at revision `11bcf9b`.

## Purpose and precedence

Make Word Wheel useful for an adult guiding a child through Romanian pronunciation practice. The adult prepares the activity; the child spins, sees pictures, and collects rewards. Each child's activity and adult-entered pronunciation observations stay on the device.

Therapists are the primary pilot audience. Parents use the same core journey. Children remain approximately 4 to 6 years old. Mobile portrait is the primary layout, with usable tablet, landscape, and desktop layouts.

This package supersedes the original restrictions against a public landing page and local child progress screens. It does not authorize accounts, billing, a hosted database, remote progress storage, recording, AI scoring, or diagnostic/treatment claims. Public words and images remain static. The original anonymous game remains available.

Use [plan.md](plan.md) for the build order, [status.md](status.md) for remaining decisions, and [next-implementation-prompt.md](next-implementation-prompt.md) for the next batch. Intermediate batches are development checkpoints, not claims that the complete pilot is ready.

## Final interview decisions

- The adult owns a reusable wheel configuration library available for every child. It is not a separate library per child or an adult online account.
- Each child has a local nickname/code, avatar, selected practice goals, history, rewards, and adult-entered observations. No diagnosis, contact details, date of birth, or case notes are required.
- Each goal has a separately editable reward frequency. Pronunciation ratings never automatically determine frequency or prize size.
- The pronunciation slider records how well the adult judges the child to pronounce the target. The rejected independence/support scale must not return. A dated observation is not an automatic accuracy measurement or validated assessment.
- Keep both word-result actions: keep the word for future spins, or remove it from this round. Configuration editing belongs to the adult outside play.
- Count a word when its result is intentionally closed, including keep, remove, the close button, and Escape. Merely rendering the result does not normally count. Repeated spins landing on the same word are separate turns.
- Interruption recovery is the explicit exception: an already displayed pending word is counted once on recovery, and any earned celebration waits for the same child. This is an agreed approximation of participation, not evidence that the child spoke.
- End is available after the result is closed, with confirmation. A round also ends when the wheel becomes empty. Stopping early keeps activity and rewards. Clearing a wheel earns no additional participation credit.
- One completed turn gives one overall credit and at most one credit to each matching active child goal. It can count towards several goals. Repeated occurrences of a target within a word do not multiply goal credit. Unselected targets, including vowels, receive no goal credit.
- Adding a goal affects future turns only. Removing it preserves earned medals and historical activity.
- Medals are global and per goal. Reviewed beginning/middle/end information belongs in statistics; position medals are deferred.
- Special progress celebrations require an explicit adult action. Saving or correcting the pronunciation slider alone never awards a prize.
- Celebrations occur between words, can be skipped, respect reduced motion, and have optional sound that defaults off. Ratings and other children's records stay out of child play.
- A pre-play screen explains which goals the prepared wheel can contribute towards. Missing goals and no matching goals are distinct recoverable states. General practice is allowed and earns overall credit only when no goals match.
- First-use guidance is skippable and restartable from Help. A public one-page introduction and an isolated playable demo explain the product. Returning adults can go directly to their local workspace.
- Whole-app and individual-child backup/restore are in scope. Restore replaces the selected scope after preview and confirmation; history merging is deferred.
- Installability and offline play are conditional on an early feasibility check. No mandatory installation, push notifications, or promised background execution.
- Configuration-only sharing between adults, XP, currency, shops, leaderboards, streak penalties, spoken word recordings, and cloud sync are outside this pilot.

## Source baseline before implementation

Evidence is from direct source reads. `list_projects` returned no index for this repository, so there is no graph or graph-coverage evidence.

- `app/page.tsx` redirects to `/ro`. Existing locale, setup, and play routes provide the letter/sequence game.
- `src/components/wheel-setup-screen.tsx` implements the four-step adult setup and saved setup editing.
- `src/game/wheel-setup-storage.ts` stores configurations in `localStorage` under `word-wheel.setup.v1`, with schema version 2 and support for earlier data. Saved setups currently have a `targetKey`.
- `src/components/wheel-game.tsx` contains the spin/result flow, in-memory round state, keep/remove/replace actions, and live setup controls. The new child mode must retain keep/remove while moving replacement and configuration changes out of play.
- `src/components/wheel-completion-celebration.ts` already provides confetti with reduced-motion handling. Reuse the effects where appropriate; make participation rewards independent of clearing the wheel.
- `src/content/matching.ts` uses literal `startsWith`/`includes` matching against the word/display spelling. It preserves diacritics. It is not a reviewed sound-position classifier.
- `src/content/types.ts` has no reviewed sound-presence/position mapping on `ContentWord`. The sequence target manifest is navigation metadata, not a phonetic inventory.
- Existing checks cover content, matching, game compatibility, saved setups, browser regression, and route smoke tests. Previous release docs still have physical-device checks pending.

## Main journeys

### First visit and general access

1. Read the short introduction or open the app directly.
2. Try an explicitly labelled demo, or start local setup.
3. Create a child profile and optionally select goals.
4. Choose or prepare a wheel using the existing setup capabilities.
5. Review the child, wheel, and eligible goal credits; start play.
6. Close results, keep or remove words, then end or empty the wheel.
7. See the session summary, earned rewards, and a clear route back to the child's workspace.

The demo uses isolated transient state and illustrative rewards. It cannot create real activity, alter adult configurations, or award profile medals. Help can restart the explainer without resetting data. Keep general anonymous play available without requiring a profile.

New guided wheels suggest 8 words; existing saved sizes remain unchanged. Adults can configure larger wheels. Play is untimed, and keeping a word allows repeated practice without a fixed spin limit.

### Returning adult

Open the workspace, select a child, resume a saved activity or choose a configuration, review goal eligibility, and start. Always show the active child's nickname/avatar before play. Do not silently continue under the last child when the adult intended another.

The child's workspace provides Start/Resume, Goals, Practice history, and Rewards. The adult workspace also provides the shared configuration library, profile management, Help, sound/motion preferences, and backups. Start with one resumable activity per child. Starting another explicitly closes the previous one while preserving its recorded activity.

### Goal preview

- Build the preview from the actual prepared wheel subset, not the entire eligible content pool. Starting must use that same subset. Subsequent reconfiguration invalidates the preview.
- Say the wheel **can** contribute to the listed goals. Each turn credits only the matches of the word actually shown and closed.
- If counts are displayed, they mean eligible distinct words in this wheel, not future practice credits. Counts across goals may overlap.
- With no configured goals, offer Set up goals and Continue with general practice.
- With goals but no matching words, offer Change wheel, Edit goals, and Continue with general practice.
- A goal-edit detour restores the selected child and draft configuration, then recomputes the preview. No lost exclusions, manual word choices, or saved configuration edits.
- Incomplete sound review must be distinguishable from a reviewed zero match. Never silently claim complete coverage when mappings are missing.

### Adult observations and celebrations

Each observation stores the goal, timestamp, adult-entered rating, and rating-scale version. Preserve history; corrections are explicit. The observation is private to the adult area and is not a percentage of correct pronunciations.

The user approved an unrated state plus the 0–5 pilot labels in [gp0-contracts.md](gp0-contracts.md). Do not substitute an independence scale, auto-rate from turns, or invent a standardized clinical interpretation. Include an unrated state distinct from the lowest rating.

An explicit Celebrate progress action creates a separate milestone record for the child and target. Offer Celebrate now or Queue for next play. A descriptive preset such as a new step with R identifies the achievement without claiming the app measured it. Slider corrections and lower ratings do not revoke prizes. The collection distinguishes adult-recognised milestones from participation medals.

## Counting and recovery contract

The counting unit is a uniquely identified turn, not a component render, elapsed time, phoneme occurrence, or wheel completion.

| Event                                      | Overall credit            | Goal credit                  | Wheel and reward behaviour                                      |
| ------------------------------------------ | ------------------------- | ---------------------------- | --------------------------------------------------------------- |
| Spin begins; result not shown              | None                      | None                         | No participation event, even if interrupted.                    |
| Result shown                               | Pending only              | Pending snapshot             | Save the pending turn and its goal/mapping context.             |
| Keep, close, or Escape                     | One, once                 | One per matching active goal | Keep word; show newly earned celebration after closing.         |
| Remove                                     | One, once                 | One per matching active goal | Remove only from current round; empty wheel can finish.         |
| Duplicate close, rerender, rotation        | None additional           | None additional              | Same turn ID cannot be committed twice.                         |
| New spin lands on same word                | One on its close          | Normal matching credit       | New turn ID; distinct-word total remains unchanged.             |
| Confirm End after result closed            | None additional           | None additional              | Finish session; preserve all records and prizes.                |
| Cancel End                                 | None                      | None                         | Continue the existing session.                                  |
| Reload after displayed pending result      | One recovery credit, once | Use saved context            | Keep the word by default; queue rewards for the same child.     |
| Switch tabs/apps and return without reload | None automatically        | None automatically           | Save state; do not mistake temporary hiding for result closure. |

Persist changes during use, not only in exit handlers. Use the visibility lifecycle as a save opportunity, not a promise to execute after shutdown. When recovering a displayed pending turn, commit it once and return to a stable wheel state; do not show it as a fresh uncounted result. Retain its word unless a recorded remove action already committed.

Practice event, round mutation, award creation, and pending-turn clearance need one logical transaction. Celebration display is separate from award ownership. A queue entry records that the child still has a celebration to see; opening another profile cannot consume it. A crash during an animation may replay the presentation, but must never duplicate the award or practice count.

Use frozen configuration/word snapshots for sessions and capture the active goals and reviewed mapping version for each pending turn. Configuration edits/deletion never rewrite active or historical sessions. Goal edits affect subsequent turns, not a displayed pending turn or historical credit. Recompute the preview on resume if its goal context changed.

## Local data and architecture

Implemented: a small browser-only IndexedDB repository with explicit schemas, migrations, transactions, and export validation. This is local browser storage, not a hosted gameplay database or new server service. Keep the React UI independent of storage through a narrow repository interface. The [storage ADR](gp0-contracts.md) records the native implementation; no dependency was added.

Suggested module responsibilities:

- `src/practice/`: profiles, goals, session state machine, turn attribution, observations, reward rules, and statistics derivation.
- `src/storage/`: browser adapter, schema migration, backup parsing, atomic restore, and write-failure recovery.
- `src/components/practice/`: adult workspace, profile/goal screens, preview, summaries, collection, and help.
- `src/content/`: reviewed sound mapping loader and validation, alongside existing literal selection helpers.

Record responsibilities are below. The validated implementation in `src/practice/model.ts` defines document schema version 3; encrypted backup format version 1 wraps it.

| Record                   | Responsibility                                                                                 |
| ------------------------ | ---------------------------------------------------------------------------------------------- |
| ChildProfile             | Stable local ID, nickname/code, avatar, dates.                                                 |
| PracticeGoal             | Child, reviewed target ID, active/archive state, frequency setting.                            |
| WheelConfiguration       | Adult library entry, target, inclusion/exclusion/manual selection rules, version.              |
| PracticeSession          | Child, configuration snapshot, prepared/remaining word IDs, session state, dates.              |
| PracticeTurn             | Unique turn ID, session/word, shown and closed times, attribution snapshot, completion reason. |
| PronunciationObservation | Child/goal, adult rating, timestamp, scale version, correction linkage.                        |
| RewardAward              | Child, rule version or explicit adult action, source, earned time, immutable identity.         |
| CelebrationQueue         | Award reference and presentation state, scoped to its child.                                   |
| AppPreferences           | Onboarding state, sound/motion choices, backup reminder state.                                 |

Store IDs and small historical labels/snapshots, not image copies in each profile. Canonical images stay shared. Do not put profile names, ratings, or histories into URLs, server-rendered markup, analytics, or public content files. Local IDs are not authentication. The adult area prevents accidental changes; device/browser security remains the access boundary.

Migration must preserve all valid existing configurations and exclusion rules. Treat the current local setup store as a source to migrate once, with stable IDs and rollback/export evidence. Retain the source until the new store validates successfully. Do not silently overwrite malformed or unknown-version data with an empty store. Surface saving failures to the adult; never show an unsaved medal as durably saved. Allow explicit temporary/general play if durable storage is unavailable, with truthful messaging.

Guard concurrent tabs and asynchronous hydration. At minimum, only one tab may mutate a given active session, while stale screens must refresh before editing/restoring. No duplicate turn or award can be created by repeated clicks, React effect replay, recovery, or restore.

## Sound mapping and position statistics

Selection filters may continue using the existing literal matching behaviour. Goal attribution needs a separate reviewed contract. Do not equate CE/CI/CHE/CHI sequence navigation with phoneme identity or count every character inside a sequence as an independent sound.

The user accepted a versioned static sidecar keyed by canonical word ID and reviewed target ID, leaving word/image identity intact. It must express reviewed presence/absence and review completeness, with zero or more `initial`, `medial`, and `final` positions when verified. Unreviewed is distinct from absent. Exact shape, target grouping, and reviewer approval are required before production content schema changes.

Use a native Romanian speech-language reviewer for ambiguous mappings and scale wording. Every enabled pilot goal needs a declared coverage boundary. Do not quietly narrow the user's goal list to make review easier; bring a concrete coverage report and any proposed staged release to the human. Work on storage and UI can continue while review is pending, but public sound credit cannot claim unreviewed coverage.

For a turn, intersect reviewed word matches with the child's active goals. Overall credit is one. Each matching goal gets one, even if its sound repeats. For statistics, a word may contribute to multiple reviewed position buckets for the same target; label these as overlapping, not a partition of its total. Unknown position is shown separately and earns no invented position credit. Versioned historical attribution does not silently change when content is updated.

No new vocabulary or word images are required by this feature. Continue content validation for any eventual metadata changes.

## Rewards and statistics

The adult sees practice turns, distinct words, dates/sessions including unfinished activities, per-goal totals, reviewed position breakdowns, earned rewards, and the separate observation history. Never present participation as pronunciation accuracy. Use language such as words practised rather than words said correctly. A sound count is a word-turn containing a reviewed target, not a tally of actual spoken repetitions.

Use one predictable participation collection. The final accepted Standard schedule is 1, 5, 10, 20, then every 20 words; Frequent is 1, 3, 5, 10, then every 10. Overall medals use Standard; goals have editable pace. Every closed or recovered word advances the overall next-medal bar; only reviewed matching turns advance a goal. These are pilot settings, not research-derived prescriptions. No XP or multipliers.

Default engineering policy for pace changes: preserve earned medals and progress; do not move the current promised milestone further away. Apply a new pace to subsequent milestones and explain its effective timing. Make the rule version part of persisted award eligibility. Schedules are accepted; preserve their separation from pronunciation ratings.

Bundle simultaneous medals into one short, skippable presentation. Artwork can vary or be chosen by the child, without paid or random prizes. Larger milestone animations express a particular achievement; a higher pronunciation rating does not make all future rewards more valuable. Do not delay closing a result, ending play, or returning focus until an animation finishes. Reduced motion retains the same award in a static presentation.

## Backup and restore

- Whole-app export contains all local profiles, histories, goals, observations, awards, pending activity, shared configurations, preferences, and schema versions.
- Individual-child export contains only that child's records plus referenced configurations/snapshots needed to use them. It must not contain other children's data or unrelated library entries.
- Preview scope, dates, and record counts. Validate the entire file, references, schema versions, sizes, and IDs before mutation.
- Whole-app restore replaces the complete local scope after confirmation and an offer to export the current state. Child restore replaces a clearly selected existing identity or imports a new one, without touching unrelated profiles.
- Restore is atomic. A failed or unsupported restore leaves existing data intact. Do not merge event histories in the pilot.
- A configuration conflict during child restore must not overwrite a shared configuration used by others. Reuse an identical definition or import a separately identified copy and remap references.
- Preserve turn/award identities and queue state. Restoring the same file twice cannot add its totals twice or replay all historical medals as newly earned.
- The user chose password-protected backups. Use versioned AES-GCM encryption and PBKDF2-SHA256 with fresh salt/IV; no password storage or recovery. Explain password loss before download. There is no readable-JSON UI or automatic synchronization.
- Profile deletion requires confirmation and removes its activity, goals, observations, rewards, and pending celebrations while preserving the adult's shared library and other children.

## Mobile, accessibility, installation, and offline

Keep normal play within the viewport. Let the landing page, history, goals, and setup content scroll where needed; the old no-scroll rule does not justify clipped controls or inaccessible text at enlarged font sizes. Preserve modal focus management, keyboard actions, labelled controls, sufficient contrast, and reduced-motion handling.

Test phone portrait and short landscape, tablet, desktop, virtual keyboard, browser toolbar changes, and focus after every close/end/restore route. Use real iPhone Safari and Android Chrome for the release checks. Desktop resizing is supporting evidence only.

Separate installability from offline readiness. The Next.js manifest mechanism supports the installation work, but caching must cover the actual app routes, content data, and required images. A downloaded-pack indicator is valid only after verifying all required assets. A first visit without a connection must show an honest recovery state. Service-worker updates must not reset data or force a mid-session reload. Remove obsolete caches without deleting profile records.

GP8 adds a manifest and icons on the pinned framework version. Offline caching is explicitly deferred: no service worker, downloaded-pack promise or offline launch support. The pilot requires a connection to open/load content; local records persist separately. Physical installation remains a device check. See [implementation-report.md](implementation-report.md).

## Acceptance and rollout

The complete pilot requires the following, not just a working wheel:

1. A first-time adult can understand the app, create a profile, choose goals, prepare a wheel, and start without developer help.
2. Every real session names its child, previews eligible goals, preserves configuration snapshots, and counts each closed/recovered turn once.
3. General practice works with no goals, and the demo cannot pollute saved records.
4. Goal attribution and any position labels have documented review coverage. Child records are isolated.
5. Observations measure adult-rated pronunciation quality. Ratings and participation rewards remain independent; milestone celebrations require adult intent.
6. Interruptions, changing targets, same-target rerenders, repeated words, empty wheels, and multi-tab access cannot duplicate or erase saved participation.
7. Both backup scopes round-trip, restore failures are non-destructive, and deletions affect only the intended scope.
8. Existing approved vocabulary, diacritics, image identity, exclusions, and no-refill wheel behaviour remain correct.
9. Accessibility and physical-device checks pass. Offline support is either proven and labelled accurately or explicitly deferred.
10. A small therapist-led pilot checks usefulness, setup friction, child understanding of rewards, distraction, and rushing. No measured clinical benefit is claimed from that pilot.

The first rollout is a reviewed pilot. Deployment is a separate release action after a concrete preview and verification report; this planning request does not itself publish the new app.
