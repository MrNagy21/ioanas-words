# Gameplay Inclusion Mode Selector Specification

## Feature

Name: Gameplay Inclusion Mode Selector

Route or module:

- `app/[locale]/play/[letter]/page.tsx`
- `src/components/wheel-game.tsx`
- `src/game/word-selection.ts`
- `src/content/loaders.ts`
- `src/content/types.ts`

Program source:

- `docs/app-development-program/roadmap.md`
- `docs/app-development-program/content-architecture.md`
- `docs/app-development-program/word-inclusion-modes.md`
- `docs/app-development-program/review-and-qa.md`
- `docs/app-development-program/features/locale-wide-content-refactor/`

## Problem

The child-facing play route currently behaves as a starts-with-only game. That behavior is correct for the original pilot, but the completed locale-wide content refactor now exposes exact starts-with, contains-only, and mixed word pools for each Romanian target.

The next feature should make those pools usable from the child-facing play screen through a compact setup flow. The app must stay simple for children, keep `starts-with` as the default, and preserve the existing wheel, result modal, remove, reset, and choose-another-letter workflows.

## Goals

- Add a child-facing wheel setup sheet with an inclusion mode selector.
- Keep `starts-with` as the default mode every time a play route loads.
- Support exactly three modes for the selected target:
  - `starts-with`;
  - `contains-only`;
  - `starts-with-or-contains`.
- Reuse the completed locale-wide content API and exact matching helpers.
- Preserve exact Romanian diacritic matching.
- Preserve canonical word ownership and canonical image paths.
- Keep the wheel-first layout from Batch 8.
- Keep result modal behavior clear and unchanged in intent.
- Define remove and reset behavior across all modes.
- Let the user choose how many randomly selected words appear on the wheel from the active mode pool.
- Let the user replace a spun word with a random available off-wheel word when the active mode pool has more eligible words than the current wheel.
- Keep gameplay static-first, anonymous, database-free, and deployable on Vercel without credentials.

## Non-Goals

- No content expansion.
- No new Romanian words.
- No image production.
- No admin editing.
- No authentication.
- No database.
- No upload flow.
- No CSV import/export.
- No billing.
- No accounts.
- No AI pronunciation.
- No practice-target letter groups such as `ce`, `ci`, `ge`, or `gi`.
- No exact manual word picking for the wheel.
- No child-facing link to `/admin/words`.
- No new dev server port.

## Current Code Context

The completed locale-wide content refactor provides:

- `getApprovedWords(locale)`;
- `getWordsStartingWithTarget(locale, target)`;
- `getWordsContainingOnlyTarget(locale, target)`;
- `getMixedWordsForTarget(locale, target)`;
- `getDerivedWordPoolsForTarget(locale, target)`;
- `getImageReadinessCounts(words)`;
- exact matching through `src/content/matching.ts`.

The current gameplay helper provides:

- `WORD_INCLUSION_MODES`;
- `WordInclusionMode`;
- `DEFAULT_WORD_INCLUSION_MODE`;
- `getPlayableWords`;
- `isWordEligibleForMode`.

Implemented compatibility point:

- Batch 1 replaced the play route's `getLetterContent(locale, letter)` gameplay source with enabled-letter validation and `getDerivedWordPoolsForTarget(locale, selectedLetter)`.
- `WheelGame` receives `GameplayContent`, where `content.wordPools` includes starts-with, contains-only, and mixed pools for the selected target.
- Future batches should continue using this mode-ready contract and should not reintroduce `getLetterContent` as the play route gameplay source.

## User Experience

The play screen remains the actual game. It should not become an explanatory page.

The mode selector should live in a focused wheel setup sheet, not as a live setting on the main play surface. The setup sheet appears after choosing a letter and can be reopened from the play screen with a compact `Setează` action. This keeps the wheel-first play state stable while still allowing an adult, teacher, or parent to configure the wheel.

Suggested short Romanian labels:

- `Încep cu`
- `Conțin`
- `Amestecat`

If review shows those labels are too terse, use:

- `Încep cu litera`
- `Conțin litera`
- `Toate`

The selector should show which mode is active through visual state and programmatic state. It may include compact counts if they fit without crowding the setup sheet, for example `Încep cu 10`, but it should not add long child-facing instructional copy.

The setup sheet should also expose a compact wheel-size control. The user chooses how many words should be displayed on the wheel, and the app picks that many words at random from the active mode pool. The user should not choose the exact words in v1. Mode and count changes are applied deliberately from setup; they should not mutate the wheel live while the child is playing.

During play, the main screen should show only the wheel, concise status, spin/reset controls, and the setup entry point. It should not restore the old full word-preview list or keep live mode/count controls visible.

## Mode Behavior

### `starts-with`

Default mode.

Pool definition:

- approved canonical words whose exact lowercased `word` or `display` starts with the selected target.

Child-facing behavior:

- the wheel behaves like the current pilot;
- the selected letter remains the central target;
- remove and reset work as they do today.

### `contains-only`

Pool definition:

- approved canonical words whose exact lowercased `word` or `display` contains the selected target but does not start with it.

Child-facing behavior:

- the wheel shows words that include the selected target inside or later in the word;
- words that start with the selected target are excluded;
- canonical images and alt text are reused from each word's original starting-letter file;
- if no words are available, show an empty state that allows switching modes and choosing another letter.

### `starts-with-or-contains`

Mixed mode.

Pool definition:

- approved starts-with words plus approved contains-only words for the selected target;
- no duplicate word records by ID.

Child-facing behavior:

- the wheel shows both groups together;
- the implementation may shuffle the mixed pool for gameplay if the rule is deterministic within a render and does not duplicate words;
- canonical images and alt text are reused;
- if the pool is large enough to harm wheel readability, the implementation must apply the pool-size rule below.

## Matching Rules

All mode eligibility must use exact Romanian target matching from `src/content/matching.ts`.

Rules:

- Use exact lowercased `word` and `display`.
- Do not use folded `normalized` for gameplay inclusion mode matching.
- Keep Romanian diacritics distinct:
  - `a`, `ă`, and `â` are separate targets;
  - `i` and `î` are separate targets;
  - `s` and `ș` are separate targets;
  - `t` and `ț` are separate targets.

Examples:

- target `s` must not silently include words that only contain `ș`;
- target `ș` must not silently include words that only contain `s`;
- target `a` must not silently include words that only contain `ă` or `â`.

## Data Flow

Recommended implementation:

1. The server play route resolves `locale` and selected `letter`.
2. The server validates the selected target with `getLetter(locale, letter)` or equivalent.
3. The server gets derived pools with `getDerivedWordPoolsForTarget(locale, selectedLetter)`.
4. The server passes the selected letter, locale, and all three derived pools into `WheelGame`.
5. The client stores selected mode state, defaulting to `DEFAULT_WORD_INCLUSION_MODE`.
6. The client stores setup draft state separately from applied wheel state while the setup sheet is open.
7. The client computes visible words from the selected mode pool minus removed word IDs.

Acceptable alternative:

- pass `getApprovedWords(locale)` into `WheelGame` and use `getPlayableWords` for filtering, as long as exact matching still comes from the shared helper path and the component does not reimplement matching logic.

Implementation should avoid keeping `getLetterContent(locale, letter)` as the only gameplay source because that helper is starts-with-only by design.

## Remove, Reset, And Modal Behavior

Removed words are tracked by word ID for the current selected target and page session.

Rules:

- Removing a word removes that word from every mode for the current target until reset.
- Switching modes does not clear removed words.
- Reset restores all removed words for the current target across all modes.
- Navigating to another letter naturally starts a new target session because the route changes.
- Closing the result modal with `Păstrează`, Escape, or the close flow keeps the word available.
- Pressing `Scoate` in the result modal removes the selected word from all current-target mode pools and closes the modal. The current visible wheel should shrink; it should not automatically backfill to the configured target count.
- Pressing a replace action in the result modal replaces the selected on-wheel word with a random eligible word from the same active mode pool that is not already on the wheel and has not been removed, then closes the result modal.
- The replace action is disabled or hidden when there is no eligible off-wheel replacement.
- If the current mode becomes empty after removal, show the empty state for that mode.
- The empty state must allow reset and choosing another letter.
- The empty state should leave setup available if there are words in another mode for the same target.

Modal behavior:

- The result modal continues to show the selected word display and canonical image or placeholder.
- The result modal actions are `Păstrează`, `Scoate`, and, when available, `Înlocuiește`.
- Every result modal action closes the modal.
- The result modal should not include an `Altă literă` navigation action; changing letters remains available from the play screen and empty state.
- The replace action should use concise Romanian copy, for example `Înlocuiește`, if it fits the modal without crowding.
- Focus management, Escape close, Tab trapping, and focus return must continue to work.
- Spin remains disabled while the modal is open or the wheel is spinning.

## Empty States

There are two different empty cases:

1. Mode has no derived words before any removals.
2. Mode became empty because the user removed all words in that mode.

Both should be recoverable.

Required actions:

- reset current target, enabled only when there are removed words;
- choose another letter;
- open setup and switch to another mode when another mode has available words.

Suggested concise Romanian text can be decided during implementation, but it should avoid long explanations. Examples:

- `Nu sunt cuvinte aici.`
- `Ai scos toate cuvintele din acest mod.`

## Pool Size And Wheel Readability

The wheel must remain readable. The starter content is small, but content expansion will make mixed pools larger.

V1 rule for this feature:

- The app has a maximum wheel size of 16 words unless a later browser review changes it.
- The user can choose a target wheel size up to that maximum and up to the active mode's available word count.
- The default target wheel size should preserve the current small-pack feel; if the active mode has fewer words than the default, show all available words.
- The visible wheel words are a random session subset sampled from the active mode pool when setup is applied or reset.
- Applying setup deliberately rebuilds the visible wheel subset.
- Removing a word during play removes it from the current visible wheel without automatic backfill.
- Reset should restore removed words and rebuild the random subset.
- If the active mode has more eligible words than are currently shown, the result modal can replace the selected word with a random off-wheel word from the same active mode pool.
- Replacement should not re-add removed words and should not duplicate a word already on the wheel.

This limit can be revisited after Romanian content expansion and real browser review. The important requirement is that large pools do not create illegible wheel segments.

## Accessibility Requirements

- The segmented control must be keyboard accessible.
- The selected mode must be available through `aria-pressed`, `aria-current`, or an equivalent programmatic state.
- Mode changes in setup should update setup status text and the draft wheel word count.
- Wheel-size changes in setup should update setup status text and the draft wheel word count.
- The existing `aria-live` result/status area should not become noisy.
- Spin targets must remain disabled while animation is running.
- Result modal focus behavior must remain intact.
- Buttons must remain touch-friendly on mobile.
- Text must not overlap wheel labels, controls, or modal content.

## Visual Requirements

- Keep the wheel as the primary visual focus.
- Keep the game within the no-scroll app shell for normal mobile use.
- Use a focused setup sheet for mode/count controls instead of live settings on the play surface.
- Keep the setup entry point compact during play.
- Do not use a marketing-style hero.
- Do not add a child-facing `/admin/words` link.
- Do not restore the old full word preview list.

## Admin Inventory Relationship

The Admin Words Inventory already reports starts-with, contains-only, and mixed counts from the same helper family. This feature does not need to change `/admin/words` unless implementation renames types or helper contracts.

If `/admin/words` is touched, it must remain:

- public;
- read-only;
- not linked from the child-facing app;
- backed by static content helpers.

## Content And Validation

No content files should change for this feature unless a code-level type migration requires shape-only updates.

Validation expectations if code changes:

- existing `validate:content` behavior continues to pass;
- matching fixture checks for Romanian diacritics continue to pass;
- gameplay compatibility checks should be updated or replaced because starts-with-only is no longer the only visible gameplay mode;
- new checks should confirm:
  - default mode equals starts-with;
  - contains-only excludes starts-with words;
  - mixed contains both pools without duplicates;
  - removed word IDs are excluded from every mode.

## Acceptance Criteria

- `/ro/play/<letter>` loads setup with `starts-with` selected by default.
- The child or adult can switch between starts-with, contains-only, and mixed modes in setup.
- The wheel updates when setup is applied.
- The user can choose how many words appear on the wheel within documented limits.
- The app chooses visible wheel words randomly from the active mode pool rather than letting the user pick exact words.
- The result modal can replace the selected word with a random eligible off-wheel word when one is available.
- Starts-with mode preserves the current pilot behavior.
- Contains-only mode excludes words that start with the selected target.
- Mixed mode includes starts-with and contains-only words without duplicate IDs.
- Exact Romanian diacritic matching is preserved.
- Ready images and placeholders render from canonical word data in every mode.
- Result modal shows the selected word and canonical image or placeholder in every mode.
- `Păstrează` keeps the selected word available.
- `Scoate` removes the selected word from all modes for the current target until reset and shrinks the current wheel instead of backfilling.
- `Resetează` restores removed words for all modes for the current target.
- Empty mode states are clear and recoverable.
- Large mode pools remain readable through the documented pool-size rule.
- `/admin/words` remains public, read-only, and unlinked from child-facing navigation.
- No content expansion, database, auth, upload, CSV, billing, accounts, admin editing, or AI pronunciation is introduced.

## QA Plan

Spec-only work:

```txt
Review markdown for consistency and handoff quality.
No build required unless code changes are made.
```

Implementation work:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

If the local Next SWC issue blocks build, document it and run:

```txt
./node_modules/.bin/tsc --noEmit --incremental false
```

If `pnpm` is unavailable in the Codex desktop shell, use the known local pnpm path if present:

```txt
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run validate:content
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run lint
/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm run build
```

Browser verification is required only when `http://localhost:3000` is already running. Do not start another dev server port.

Check:

```txt
http://localhost:3000/ro
http://localhost:3000/ro/play/a
http://localhost:3000/admin/words
```

Expected browser behavior:

- `/ro` still shows the Romanian letter selection.
- `/ro/play/a` opens the wheel setup sheet with starts-with mode selected by default.
- applying setup starts the wheel without page navigation.
- reopening setup, switching mode, and applying setup changes the wheel pool without page navigation.
- contains-only excludes `A` starts-with words.
- mixed includes starts-with plus contains-only words without duplicates.
- modal remove shrinks the wheel without automatic backfill.
- modal replacement swaps in an eligible off-wheel word.
- remove, reset, modal close/keep, modal remove, and choose-another-letter work in all modes.
- `/admin/words` still renders read-only coverage data if touched.
- no child-facing link to `/admin/words` appears.

If `http://localhost:3000` is not reachable, ask the user to start the dev server on port `3000`.

## Rollout Notes

This feature is the bridge between the completed locale-wide content API and the later Romanian content expansion. It should expose the mode selector using current content first, then the inventory can guide which letters need more starts-with or contains-only words.

The next feature after implementation should be Romanian Content Expansion, unless review of the mode selector reveals a required polish or accessibility follow-up.
