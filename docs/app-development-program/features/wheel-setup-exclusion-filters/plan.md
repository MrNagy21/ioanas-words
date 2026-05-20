# Wheel Setup Exclusion Filters Implementation Plan

This plan is split into small implementation batches. Update this feature `status.md` after each batch. Update global `docs/status.md` when this feature starts, completes, or materially changes the next task.

## Batch 0: Spec Package

Status: Complete; Romanian letter inventory expanded in Batch 4 follow-up

Tasks:

- Create `spec.md`, `plan.md`, `status.md`, and `next-implementation-prompt.md`.
- Record the recommendation to use a four-step setup wizard.
- Record research sources for accessibility, mobile usability, and speech-practice boundary decisions.
- Update global app specs and status so the feature is discoverable.

Exit criteria:

- Another agent can implement the feature without the original conversation.
- Non-goals explicitly prevent content expansion, database, auth, billing, AI pronunciation, and clinical-claim scope creep.

Verification:

```txt
Review markdown for consistency and handoff quality.
No build required for spec-only work.
```

## Batch 1: Exclusion Target Registry And Matching Helpers

Status: Complete

Tasks:

- Add a helper that returns selectable exclusion targets for a locale from Romanian exclusion letters and enabled practice targets.
- Use prefixed keys such as `letter:r` and `sequence:ghe`.
- Exclude or disable the active target from the selectable list.
- Add shared helper logic that filters words containing any excluded target.
- Keep matching based on existing exact locale-aware helpers.
- Add unit or compatibility coverage for Romanian diacritics and sequence targets.

Exit criteria:

- The app can derive the exact exclusion target list for Romanian.
- Filtering `F` starts-with words by `R` leaves the expected `6` words.
- Filtering uses shared helpers, not component-local string logic.

Suggested verification:

```txt
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:matching
```

## Batch 2: Setup Storage Schema Migration

Status: Complete

Tasks:

- Add `excludedTargetKeys` to `WheelSetupConfig`.
- Migrate existing local v1 setup configs to v2 with `excludedTargetKeys: []`.
- Ignore invalid stored exclusion keys.
- Preserve active setup and saved setup behavior.
- Update setup summary helpers to include exclusions when present.

Exit criteria:

- Existing local saved configurations continue to load.
- New saved configurations persist exclusions.
- Saved configuration cards can display `Fără R` or omit the phrase when empty.

Suggested verification:

```txt
pnpm run lint
pnpm exec tsc --noEmit --incremental false
```

Browser/local-storage check:

```txt
http://localhost:3000/ro/setup/f
```

## Batch 3: Filtering Data Flow And Counts

Status: Complete

Tasks:

- Apply exclusions after inclusion-mode selection and before word source selection.
- Recompute available counts when inclusion mode or exclusions change.
- Clamp selected word IDs to the filtered eligible pool.
- Clamp wheel count to the filtered available count.
- Add empty-state logic for exclusions that remove all words.
- Keep all gameplay content canonical and static.

Exit criteria:

- `Toate` means all words after mode and exclusion rules.
- `Aleg manual` only shows words after mode and exclusion rules.
- Empty filtered pools are recoverable by removing exclusions or changing mode.

Suggested verification:

```txt
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
```

## Batch 4: Four-Step Setup UI

Status: Complete

Tasks:

- Change setup wizard steps to `Reguli`, `Evită`, `Cuvinte`, `Final`.
- Build the `Evită sunete` step with letter and group chips.
- Use `aria-pressed` and visible selected state for chips.
- Show immediate impact counts.
- Block continuation when exclusions empty a non-empty base pool.
- Keep mobile layout usable with fixed bottom navigation and one main scroll surface.
- Keep desktop/tablet layout compact without overusing empty space.
- Follow-up bug fix: apply saved exclusions on the play route so the wheel never displays excluded words after setup start.
- Follow-up UX fix: show the full 31-letter Romanian alphabet in the exclusion picker, including `Ă`, `Â`, `K`, `Q`, `W`, `X`, and `Y`, without enabling those as starting-letter practice buckets.

Exit criteria:

- Mobile setup remains usable at `320 x 568`, `360 x 780`, and `390 x 844`.
- Desktop setup uses the available workspace cleanly.
- Step 2 makes the exclusion behavior understandable without long instructions.

Suggested verification:

```txt
pnpm run lint
pnpm exec tsc --noEmit --incremental false
```

Browser verification:

```txt
http://localhost:3000/ro/setup/f
http://localhost:3000/ro/setup/ghe
```

## Batch 5: Play Route, Save/Load, And Summary Integration

Status: Partially complete; play-route enforcement implemented in Batch 4 follow-up

Tasks:

- Ensure applied setup saves exclusions before navigating to play. Complete.
- Ensure `/ro/play/<target>` uses the active setup with exclusions. Complete.
- Show concise play-screen status such as `F · La început · fără R` on mobile if it fits.
- Preserve wheel-first play layout.
- Ensure result modal remove/replace/reset respects the filtered pool. Complete.
- Include exclusions in saved setup chooser summaries. Complete.

Exit criteria:

- Starting from setup with `Fără R` never shows excluded words on the wheel.
- Saved configurations with exclusions can be started, edited, deleted, and recreated.
- Play-screen status remains compact.

Suggested verification:

```txt
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
```

Browser verification:

```txt
http://localhost:3000/ro/setup/f
http://localhost:3000/ro/play/f
```

## Batch 6: Final QA And Documentation

Status: Not started

Tasks:

- Run all required validation.
- Run browser checks on mobile and desktop.
- Update this feature `status.md`.
- Update global `docs/status.md`.
- Update the next ready-to-copy prompt if follow-up work remains.

Exit criteria:

- Exclusion filters work end to end.
- Docs reflect the implemented behavior.
- Any blocked verification is explicitly recorded with the exact reason.

Required verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run build
git diff --check
```

Browser verification:

```txt
http://localhost:3000/ro/setup/f
http://localhost:3000/ro/play/f
http://localhost:3000/ro/setup/ghe
```
