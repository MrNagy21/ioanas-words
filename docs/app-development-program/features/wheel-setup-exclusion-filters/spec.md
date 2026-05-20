# Wheel Setup Exclusion Filters Specification

## Purpose

Add optional sound and letter exclusions to the wheel setup flow so an adult can focus practice on one Romanian target while avoiding other targets that may interfere with the child-facing exercise.

Example:

- selected target: `F`;
- inclusion mode: `La început`;
- excluded target: `R`;
- resulting pool: approved words that start with `F` and do not contain `R` anywhere.

This supports practical setup cases such as practicing `F` words while avoiding `R` words, without forcing the adult to manually inspect and deselect every conflicting word.

## Recommendation

Use a four-step setup wizard:

1. `Reguli` - choose target position: `La început`, `În interior`, `Amestec`.
2. `Evită` - optionally choose letters or sound groups to exclude.
3. `Cuvinte` - choose all filtered words or an exact manual subset from the filtered pool.
4. `Final` - choose wheel count, optionally save, and start.

Do not add exclusion as a fourth card beside the existing three inclusion modes. Inclusion mode and exclusion filtering answer different questions:

- inclusion mode: where the selected target should appear;
- exclusion filter: which other targets should not appear at all.

Keeping exclusion in its own step gives the feature enough space on mobile, makes the counts easier to understand, and keeps step 1 focused.

## Background

The current setup route already supports:

- dedicated `/ro/setup/<target>` setup route;
- three inclusion modes;
- all-words versus manual word source;
- exact word picking;
- wheel word count;
- local saved configurations;
- start without saving.

The current data model does not support excluding another target from the selected pool. Adults can approximate this only by manual word picking, which is slow and error-prone for larger word pools.

Current example from the approved Romanian content:

- `F` starts-with pool has `17` approved words.
- Excluding `R` leaves `6`: `față`, `fustă`, `fotoliu`, `fasole`, `fetiță`, `fulgi`.
- Without a rule-based exclusion filter, the adult must know and manually remove every `fr...` or other `r` word.

## Goals

- Let the adult choose zero or more excluded Romanian targets.
- Excluded targets include the full 31-letter Romanian alphabet and enabled Romanian sequence practice targets.
- Apply exclusions before all/manual word source selection.
- Update all visible counts after exclusions.
- Keep manual word picking limited to the filtered eligible pool.
- Keep saved configurations target-scoped and local for v1.
- Preserve static-first gameplay with no database, auth, billing, account, server API, or AI dependency.
- Preserve exact Romanian matching and diacritic distinctions.
- Keep the setup UI parent-friendly without making clinical claims.
- Keep mobile setup usable on `320 x 568`, `360 x 780`, and `390 x 844` viewports.

## Non-Goals

- No new Romanian words.
- No image generation or image replacement.
- No content metadata expansion unless needed only for target registry typing.
- No database.
- No authentication.
- No billing.
- No accounts.
- No teacher dashboard.
- No AI pronunciation.
- No clinical diagnosis, treatment recommendations, scoring, or progress tracking.
- No automatic recommendation of which sounds to exclude.
- No broad phonetic transcription engine in v1.

## Research Notes

Recorded on 2026-05-20.

- W3C WCAG 2.2 covers accessibility across disabilities and devices and notes that accessibility work often improves usability generally. Source: https://www.w3.org/TR/wcag/
- WCAG 2.2 target-size guidance treats targets smaller than `24 x 24` CSS pixels as undersized unless spacing compensates. This setup feature should keep tap targets comfortably above that baseline, especially for mobile chips and stepper controls. Source: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- ASHA's speech sound disorders practice portal states that treatment selection depends on factors such as age, error type, severity, intelligibility impact, and multilingual considerations. This app should therefore expose configurable practice filters without recommending clinical choices or implying treatment selection. Source: https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/
- ASHA also describes target selection and treatment strategies as clinician-guided and variable. The product should support adult/clinician-entered setup preferences, not infer or prescribe them. Source: https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/
- Nielsen Norman Group's iPad usability research notes that some users skip instructions to reach the functional experience. Keep this setup flow operational and concise, with counts and labels doing the work instead of long instructional copy. Source: https://media.nngroup.com/media/reports/free/iPad_App_and_Website_Usability_2nd_Edition.pdf
- `limbaromana.net` lists the Romanian alphabet as 31 letters: `aăâbcdefghiîjklmnopqrsștțuvwxyz`, and separately describes `ci`, `gi`, `ce`, `ge`, `chi`, `ghi`, `che`, and `ghe` as compound letter sequences outside the alphabet. Source: https://limbaromana.net/fonetica/fonologia/ortografia-si-ortoepia/alfabetul-limbii-romane/

## Target Registry

The exclusion picker must use the adult-facing avoid-target inventory:

- the full 31-letter Romanian alphabet for `ro`, including letters that are not currently enabled as starts-with practice tiles;
- enabled Romanian sequence targets from `content/ro/practice-targets.json`.

For Romanian today, that means:

- `A`, `Ă`, `Â`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `Î`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `Ș`, `T`, `Ț`, `U`, `V`, `W`, `X`, `Y`, `Z`;
- sequence targets: `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, `GHI`.

This does not enable new starts-with letter buckets, add words, or broaden child-facing target selection. It only lets an adult exclude letters that may appear inside otherwise eligible words.

Recommended internal shape:

```ts
type ExclusionTarget = Readonly<{
  key: string; // "letter:r" or "sequence:ghe"
  id: string;
  label: string;
  kind: "letter" | "sequence";
}>;
```

Use a prefixed `key` rather than a bare `id` so future locales can safely support overlapping target IDs across target kinds.

## Matching Rules

Exclusion matching is exact target containment.

For every word in the selected inclusion-mode pool:

1. Lowercase `word.word` and `word.display` with the locale-aware helper path.
2. For each excluded target, use the same exact target-value matching path as inclusion matching.
3. Exclude the word if either `word.word` or `word.display` contains any excluded target.

Rules:

- Use `wordContainsTarget(locale, word, excludedTarget)` or a shared helper built on it.
- Do not use folded `normalized` for exclusion matching.
- Keep Romanian diacritics distinct:
  - `a`, `ă`, and `â` are separate;
  - `i` and `î` are separate;
  - `s` and `ș` are separate;
  - `t` and `ț` are separate.
- Sequence targets are literal Romanian orthographic groups, not a full phonetic transcription system.
- Excluding `R` removes any word containing `r` anywhere.
- Excluding `CE` removes words containing the literal `ce` sequence anywhere.
- Exclusion filtering must never duplicate or mutate canonical content records.

## Current Target Rule

The selected setup target should be disabled in the exclusion picker by default.

Example:

- On `/ro/setup/f`, `F` should appear disabled or not appear in the exclusion picker.
- On `/ro/setup/ghe`, `GHE` should appear disabled or not appear.

Recommended UX: show it disabled only if doing so helps explain why it cannot be chosen. Otherwise omit it to reduce noise.

Do not allow excluding the active target in v1. It usually empties or contradicts the practice pool and creates confusing states.

## Four-Step UX

### Step 1: Reguli

Keep step 1 focused on inclusion position:

- `La început`;
- `În interior`;
- `Amestec`.

Each option should show counts based on the unexcluded mode pool unless the UI can clearly show both original and filtered counts after step 2. Avoid packing exclusion chips into this step on mobile.

### Step 2: Evită

Purpose: choose optional targets that should not appear in the words.

Suggested Romanian labels:

- step label: `Evită`;
- title: `Evită sunete`;
- empty state: `Niciun sunet evitat`;
- selected summary: `Fără R` or `Fără R, Ș`;
- clear action: `Șterge excluderile`;
- target groups:
  - `Litere`;
  - `Grupuri`.

Use selectable chips or compact buttons:

- visually selected state;
- `aria-pressed`;
- minimum touch target comfortably above WCAG's `24 x 24` CSS pixel baseline;
- enough spacing to prevent accidental taps;
- no long instructional paragraph.

Show immediate impact:

- current included pool count;
- filtered count after exclusions;
- number removed by exclusions.

Example:

```txt
17 disponibile
6 rămân fără R
11 eliminate
```

If no exclusions are selected, show:

```txt
17 disponibile
Niciun sunet evitat
```

If exclusions empty the pool, block continuation to step 3 and show a compact recovery state:

```txt
Nu există cuvinte pentru F fără R și Ș.
Scoate o excludere sau schimbă regula.
```

### Step 3: Cuvinte

The source choice now operates on the filtered eligible pool.

Rules:

- `Toate` means all words after inclusion mode and exclusions.
- `Aleg manual` shows only words after inclusion mode and exclusions.
- If exclusions change, remove now-invalid selected word IDs from the custom selection.
- If all custom selected words become invalid, return to `Toate` or show a clear empty custom state.

The all-words preview should include the exclusion summary when applicable:

```txt
Toate cuvintele
6 cuvinte
Fără R
```

Manual picker search remains locale-aware display search.

### Step 4: Final

The final step should summarize the complete setup:

- target;
- inclusion mode;
- exclusions;
- available filtered words;
- word source;
- wheel word count;
- optional save name.

Suggested summary:

```txt
Litera F
La început
Fără R
6 disponibile
6 pe roată
```

The wheel count must be bounded by the filtered available count and the existing `MAX_WHEEL_WORD_COUNT`.

Saved configuration cards should include exclusions:

```txt
Fără R · La început · 6 pe roată · toate cuvintele
```

If no exclusions are selected, omit the exclusion phrase rather than showing noisy text.

## Data Flow

Recommended filtering order:

1. Resolve selected locale and setup target.
2. Build the base pool from inclusion mode:
   - `startsWithWords`;
   - `containsOnlyWords`;
   - `mixedWords`.
3. Remove words containing any excluded target.
4. Resolve word source:
   - all filtered words;
   - selected word IDs that still exist in the filtered pool.
5. Bound wheel word count by the resulting available count.
6. Save/apply the resolved config.

Do not apply exclusions after manual selection only. Exclusions are a rule layer and must constrain the available pool before word picking.

## Storage

Update the local setup config shape to include exclusions.

Recommended shape:

```ts
type WheelSetupConfig = Readonly<{
  mode: WordInclusionMode;
  excludedTargetKeys: readonly string[];
  wheelWordCount: number;
  wordSelectionMode: WheelWordSelectionMode;
  selectedWordIds: readonly string[];
}>;
```

Migration:

- Existing v1 local configs should migrate with `excludedTargetKeys: []`.
- Keep saved setup data anonymous and non-sensitive.
- Bump `WHEEL_SETUP_SCHEMA_VERSION` to `2`, or implement an explicit parser that accepts both v1 and v2.
- Preserve the same local storage key unless there is a strong reason to isolate the migration.

Saved configuration entities should remain future database-ready:

- target key;
- name;
- inclusion mode;
- excluded target keys;
- wheel word count;
- word selection mode;
- selected word IDs;
- created timestamp;
- updated timestamp.

## Empty And Edge States

Required states:

- No exclusions selected.
- One exclusion selected.
- Multiple exclusions selected.
- Exclusion removes some words.
- Exclusion removes all words.
- Inclusion mode has no words before exclusions.
- Manual selected words become invalid after exclusions change.
- Saved v1 configurations load after migration.
- Invalid stored exclusion keys are ignored.
- Excluding the active target is impossible.

If the base inclusion mode has zero words before exclusions, the UI should point the adult back to mode selection rather than blaming exclusions.

If exclusions empty a previously non-empty pool, show the exclusion recovery state.

## Accessibility

- Use real `button` controls for chips.
- Use `aria-pressed` for selected exclusion chips.
- Ensure keyboard focus is visible and not obscured by the sticky mobile footer.
- Keep target sizes and spacing comfortable on mobile.
- Announce count changes through visible text; add an `aria-live="polite"` region only if testing shows screen readers do not get enough feedback from the updated summary.
- Do not rely on color alone for selected state.
- Ensure disabled active-target chips are programmatically disabled if shown.

## Copy Guidelines

Keep copy parent-friendly and non-clinical.

Use:

- `Evită sunete`;
- `Fără R`;
- `Niciun sunet evitat`;
- `6 rămân`;
- `11 eliminate`.

Avoid:

- `diagnostic`;
- `treatment`;
- `therapy plan`;
- `disorder`;
- `mispronunciation scoring`;
- `recommended target`.

The app can support adult-entered practice preferences, but must not tell the adult which clinical choices are correct.

## Verification

Required command verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run build
git diff --check
```

If `pnpm run build` is blocked by the known local Next SWC darwin/arm64 code-signature issue, record the exact failure and still run TypeScript, lint, content validation, gameplay, matching, and browser checks.

Required browser verification against the user-running dev server on port `3000`:

- `/ro/setup/f` at `390 x 844`;
- `/ro/setup/f` at `320 x 568`;
- `/ro/setup/f` desktop `1280 x 720`;
- select `La început`, exclude `R`, confirm filtered count is `6`;
- confirm step 3 all-words preview shows only words without `R`;
- confirm manual picker does not show `frunză`, `floare`, `fluture`, `fular`, `furculiță`, `frizerie`, `frizură`, `fulger`, `frigider`, `fragi`, or `frânghie`;
- start the wheel and confirm `/ro/play/f` does not render excluded words;
- save and reload a setup with `Fără R`;
- load an old v1 saved setup if available or simulate one in local storage and confirm it migrates with no exclusions.

Also verify at least one sequence target:

- `/ro/setup/ghe`;
- active target `GHE` cannot be excluded;
- excluding `R` or another enabled target updates counts without breaking route behavior.
