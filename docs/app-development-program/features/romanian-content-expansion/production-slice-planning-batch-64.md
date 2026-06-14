# Batch 64 Production Slice Planning: Sixth Batch 43 Queue

Batch: Romanian Content Expansion Batch 64.

Status: complete; production slice planned; no production content added.

Last updated: 2026-06-13.

## Scope Guard

This batch is planning-only. It does not add production JSON records, image assets, placeholders, route or schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Planning sources:

- `docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md`
- `docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-44.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-48.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-52.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-56.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-60.md`
- `docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-63.md`

Canonical Batch 63 baseline:

- total Romanian records: `445`;
- approved words: `442`;
- ready images: `442`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3` (`ghicitoare`, `miez`, and `stinghie`);
- playable rare-letter routes `K`, `Q`, `W`, `X`, and `Y` are enabled;
- `cameră web` remains in `content/ro/words-c.json`;
- `iac` remains in `content/ro/words-i.json`;
- `webcam` and `yak` must not be reintroduced unless the human explicitly reopens those decisions.

## Slice Decision

Batch 64 selects a stricter stretch slice from the remaining Batch 43 pool. Most strong child-known rows have already been planned and promoted, so this slice chooses concrete, imageable, child-safe stretch nouns that improve underfilled monitored starts-with areas without forcing rare-letter padding.

Selected order:

1. `bibliotecă`
2. `radiator`
3. `sacou`
4. `șoim`
5. `ștampilă`
6. `șezlong`
7. `tacâmuri`
8. `țarc`
9. `țiglă`
10. `viespe`
11. `șurubelniță`
12. `joben`
13. `jantă`
14. `coțofană`
15. `jardinieră`

Deferred:

- `sticluță`, because `sticlă` was recently corrected and promoted and the diminutive remains a near-duplicate visual risk.
- `râmă`, because `vierme` was recently promoted and the two worm concepts are visually close for a no-label image.
- `roză`, because `trandafir` was recently promoted and already covers the rose concept.
- `șnur`, because existing `șiret`, `mărțișor`, and `yo-yo` images already rely on string/cord visuals.
- `țambal` and `țipar`, because they are more weakly familiar than the selected `Ț` rows.
- `dantelă`, `degetar`, `daltă`, and `dudă`, because image clarity, familiarity, or safety tradeoffs are weaker than the selected rows.
- `jambiere`, `jder`, `cojoc`, `bijuterie`, `gingie`, `gheorgină`, and `răchită`, because they remain less familiar, more visually awkward, or more culturally narrow for this slice.
- `ketchup`, `quokka`, `wombat` / `vombat`, `valiză`, and `vânt`; do not reopen rare-letter or ambiguity tradeoffs without a new human decision.

## Source Verification

Source labels used in this document:

- `S1` dexonline `bibliotecă`: https://dexonline.ro/definitie/bibliotec%C4%83
- `S2` dexonline `radiator`: https://dexonline.ro/definitie/radiator
- `S3` dexonline `sacou`: https://dexonline.ro/definitie/sacou
- `S4` dexonline `șoim`: https://dexonline.ro/definitie/%C8%99oim
- `S5` dexonline `ștampilă`: https://dexonline.ro/definitie/%C8%99tampil%C4%83
- `S6` dexonline `șezlong`: https://dexonline.ro/definitie/%C8%99ezlong
- `S7` dexonline `tacâm`: https://dexonline.ro/definitie/tac%C3%A2m
- `S8` dexonline `țarc`: https://dexonline.ro/definitie/%C8%9Barc
- `S9` dexonline `țiglă`: https://dexonline.ro/definitie/%C8%9Bigl%C4%83
- `S10` dexonline `viespe`: https://dexonline.ro/definitie/viespe
- `S11` dexonline `șurubelniță`: https://dexonline.ro/definitie/%C8%99urubelni%C8%9B%C4%83
- `S12` dexonline `joben`: https://dexonline.ro/definitie/joben
- `S13` dexonline `jantă`: https://dexonline.ro/definitie/jant%C4%83
- `S14` dexonline `coțofană`: https://dexonline.ro/definitie/co%C8%9Bofan%C4%83
- `S15` dexonline `jardinieră`: https://dexonline.ro/definitie/jardinier%C4%83

Verification decisions:

- All `15` rows are from the human-reviewed Batch 43 candidate pool and remain defensible for planning after source, duplicate, safety, imageability, and recent-near-duplicate checks.
- `bibliotecă` should use the bookcase/bookshelf sense, not a public institution or software-library sense, because a bookcase is concrete and child-readable.
- `radiator` should show a home heating radiator, not a car radiator or technical appliance cutaway.
- `sacou` should show a simple jacket/blazer garment, not adult business framing and not a duplicate of `jachetă`.
- `șoim` and `coțofană` are accepted as learnable bird rows; the images must use clear species cues while staying simple and non-scary.
- `ștampilă` should show a school/office stamp object without ink mess, text, logos, or official-document framing.
- `șezlong` should show a simple lounge chair, not a beach scene dominated by scenery or an adult vacation context.
- During Batch 66 promotion, the human revised planned `tacâm` to the more usual plural `tacâmuri`; the production image should still use the tableware/cutlery sense, preferably fork/spoon/knife set with a safe rounded knife cue and no restaurant clutter.
- `țarc` should show a child-safe enclosure or playpen/fence, not an animal trap, cage, or confinement scene.
- `țiglă` should show roof tiles or one clear red/orange tile, not a full roof scene that duplicates `acoperiș`.
- `viespe` should be a friendly, non-threatening wasp icon and remain visually distinct from existing `albină`.
- `șurubelniță` is long but concrete; show one screwdriver safely as a static tool, no sharp action, hand, repair scene, or injury cue.
- `joben` should show a top hat clearly distinct from existing generic `pălărie` and `magician` imagery.
- `jantă` should show a wheel rim, not the whole `roată`, tire, or car.
- `jardinieră` should show a long balcony/window planter box, distinct from existing round `ghiveci`.

## Planned Canonical Rows

All planned records should use `source: ["manual"]`, `license: "app-owned"`, `status: "approved"`, and `imageStatus: "ready"` only when promoted with reviewed final images in the later production batch. Do not promote any row without its reviewed final image.

| # | Display | Canonical file | Stable ID | Planned image path | Normalized | Category | Difficulty | Source check | Metadata and image brief direction |
| ---: | --- | --- | --- | --- | --- | --- | ---: | --- | --- |
| 1 | `bibliotecă` | `content/ro/words-b.json` | `ro-b-biblioteca` | `/images/ro/b/ro-b-biblioteca.webp` | `biblioteca` | `school` | 2 | `S1` | Noun, age band `4-6`; one simple bookcase/bookshelf with a few colorful books, no room scene, no reading text, no software/library-building sense. |
| 2 | `radiator` | `content/ro/words-r.json` | `ro-r-radiator` | `/images/ro/r/ro-r-radiator.webp` | `radiator` | `household` | 3 | `S2` | Noun, age band `4-6`; one home heating radiator with simple fins, no car part, pipes clutter, hot-danger symbol, or technical cutaway. |
| 3 | `sacou` | `content/ro/words-s.json` | `ro-s-sacou` | `/images/ro/s/ro-s-sacou.webp` | `sacou` | `clothing` | 3 | `S3` | Noun, age band `4-6`; one simple blazer/jacket garment, front view, no person, office, money, briefcase, logo, or text. |
| 4 | `șoim` | `content/ro/words-ș.json` | `ro-sh-soim` | `/images/ro/ș/ro-sh-soim.webp` | `soim` | `animal` | 3 | `S4` | Noun, age band `4-6`; one calm falcon/hawk-like bird in side view, clear beak and wing shape, no hunting prey, claws attack, or scary mood. |
| 5 | `ștampilă` | `content/ro/words-ș.json` | `ro-sh-stampila` | `/images/ro/ș/ro-sh-stampila.webp` | `stampila` | `school` | 3 | `S5` | Noun, age band `4-6`; one rubber stamp object with blank base, no readable imprint, official seal, office paperwork, logo, or ink mess. |
| 6 | `șezlong` | `content/ro/words-ș.json` | `ro-sh-sezlong` | `/images/ro/ș/ro-sh-sezlong.webp` | `sezlong` | `household` | 3 | `S6` | Noun, age band `4-6`; one simple lounge chair, centered, no adult vacation scene, beach clutter, brand pattern, or person. |
| 7 | `tacâmuri` | `content/ro/words-t.json` | `ro-t-tacamuri` | `/images/ro/t/ro-t-tacamuri.webp` | `tacamuri` | `household` | 2 | `S7` | Noun, age band `4-6`; one small fork/spoon/rounded knife set, no plate text, restaurant setting, sharp-danger framing, or poultry-parts sense. |
| 8 | `țarc` | `content/ro/words-ț.json` | `ro-tz-tarc` | `/images/ro/ț/ro-tz-tarc.webp` | `tarc` | `household` | 3 | `S8` | Noun, age band `4-6`; one simple child-safe playpen/fenced enclosure, no trapped animal, cage bars, locked gate, or confinement mood. |
| 9 | `țiglă` | `content/ro/words-ț.json` | `ro-tz-tigla` | `/images/ro/ț/ro-tz-tigla.webp` | `tigla` | `household` | 3 | `S9` | Noun, age band `4-6`; one or a few red/orange roof tiles, no full house scene, no construction hazard, and distinct from `acoperiș`. |
| 10 | `viespe` | `content/ro/words-v.json` | `ro-v-viespe` | `/images/ro/v/ro-v-viespe.webp` | `viespe` | `animal` | 3 | `S10` | Noun, age band `4-6`; one friendly wasp with yellow-black body and narrow waist, no sting attack, fear marks, swarm, or duplicate bee reading. |
| 11 | `șurubelniță` | `content/ro/words-ș.json` | `ro-sh-surubelnita` | `/images/ro/ș/ro-sh-surubelnita.webp` | `surubelnita` | `household` | 3 | `S11` | Noun, age band `4-6`; one static screwdriver with colorful handle, no hand, screw action, sharp pose, toolbox clutter, logo, or injury cue. |
| 12 | `joben` | `content/ro/words-j.json` | `ro-j-joben` | `/images/ro/j/ro-j-joben.webp` | `joben` | `clothing` | 3 | `S12` | Noun, age band `4-6`; one black top hat, simple shape, no magician, rabbit, person, formal adult scene, logo, or text. |
| 13 | `jantă` | `content/ro/words-j.json` | `ro-j-janta` | `/images/ro/j/ro-j-janta.webp` | `janta` | `vehicle` | 3 | `S13` | Noun, age band `4-6`; one clean wheel rim, not a full car wheel or tire, no car logo, racing context, repair scene, or text. |
| 14 | `coțofană` | `content/ro/words-c.json` | `ro-c-cotofana` | `/images/ro/c/ro-c-cotofana.webp` | `cotofana` | `animal` | 3 | `S14` | Noun, age band `4-6`; one magpie-like black-and-white bird with long tail, no stealing-object joke, dark mood, crowded branch, or text. |
| 15 | `jardinieră` | `content/ro/words-j.json` | `ro-j-jardiniera` | `/images/ro/j/ro-j-jardiniera.webp` | `jardiniera` | `household` | 3 | `S15` | Noun, age band `4-6`; one long rectangular planter box with simple flowers/green plants, distinct from round `ghiveci`, no window/building clutter. |

## Route, Loader, And Validation Impact

Existing manifests, routes, and loaders can accept this slice without structural changes:

- no new letter manifests are needed;
- no new playable letters, route aliases, loader imports, matching helpers, setup/play routing changes, admin inventory changes, schema changes, or validation-rule changes are planned;
- Batch 66 promotion would edit only `content/ro/words-b.json`, `content/ro/words-r.json`, `content/ro/words-s.json`, `content/ro/words-ș.json`, `content/ro/words-t.json`, `content/ro/words-ț.json`, `content/ro/words-v.json`, `content/ro/words-j.json`, and `content/ro/words-c.json`;
- final image assets would be added under existing directories in `public/images/ro/b`, `public/images/ro/r`, `public/images/ro/s`, `public/images/ro/ș`, `public/images/ro/t`, `public/images/ro/ț`, `public/images/ro/v`, `public/images/ro/j`, and `public/images/ro/c`;
- compatibility fixtures or content-count assertions may need count updates in the promotion batch if they encode affected route target counts;
- `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check` should run in the later image/promotion/QA flow as appropriate.

No `Ă` or `Â` starts-with rows are planned, and no `Q`, `W`, `X`, `webcam`, `yak`, `wombat`, `vombat`, `quokka`, or `ketchup` rows are added or reopened by this batch.

## Coverage Impact

Current production content remains unchanged in Batch 64: `442` approved words, `442` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.

If all `15` planned rows are later promoted with ready images, the planned content total becomes `457` approved words, `457` ready images, and `0` approved placeholders.

Requested-target deltas using current exact matcher semantics:

| Target | Before starts | Before contains | Before mixed | Planned starts | Planned contains | Planned mixed | Delta |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `Ă` | 0 | 185 | 185 | 0 | 192 | 192 | `+7` contains |
| `Â` | 0 | 12 | 12 | 0 | 13 | 13 | `+1` contains |
| `L` | 22 | 90 | 112 | 22 | 95 | 117 | `+5` contains |
| `R` | 19 | 158 | 177 | 20 | 162 | 182 | `+1` starts, `+4` contains |
| `S` | 24 | 31 | 55 | 25 | 32 | 57 | `+1` starts, `+1` contains |
| `Ș` | 13 | 29 | 42 | 17 | 29 | 46 | `+4` starts |
| `T` | 17 | 94 | 111 | 18 | 98 | 116 | `+1` starts, `+4` contains |
| `Ț` | 6 | 42 | 48 | 8 | 44 | 52 | `+2` starts, `+2` contains |
| `V` | 16 | 19 | 35 | 17 | 19 | 36 | `+1` starts |
| `B` | 31 | 27 | 58 | 32 | 29 | 61 | `+1` starts, `+2` contains |
| `D` | 11 | 25 | 36 | 11 | 27 | 38 | `+2` contains |
| `J` | 5 | 9 | 14 | 8 | 9 | 17 | `+3` starts |

Targets with no planned delta from this slice: `K`, `Q`, `W`, `X`, `Y`, `CE`, `CI`, `GE`, `GI`, `GHE`, `GHI`, `CHE`, and `CHI`.

Per-word requested-target impact:

| Display | Starts-with impact | Contains-only impact |
| --- | --- | --- |
| `bibliotecă` | `B` | `Ă`, `L`, `T` |
| `radiator` | `R` | `T`, `D` |
| `sacou` | `S` | none |
| `șoim` | `Ș` | none |
| `ștampilă` | `Ș` | `Ă`, `L`, `T` |
| `șezlong` | `Ș` | `L` |
| `tacâmuri` | `T` | `Â`, `R` |
| `țarc` | `Ț` | `R` |
| `țiglă` | `Ț` | `Ă`, `L` |
| `viespe` | `V` | `S` |
| `șurubelniță` | `Ș` | `Ă`, `L`, `R`, `Ț`, `B` |
| `joben` | `J` | `B` |
| `jantă` | `J` | `Ă`, `T` |
| `coțofană` | none for requested starts | `Ă`, `Ț` |
| `jardinieră` | `J` | `Ă`, `R`, `D` |

## Preserved Decisions

Preserved decisions:

- do not force `Ă` or `Â` starts-with rows;
- do not pad `Q`, `W`, or `Y` with obscure words;
- keep `cameră web` in `C`;
- keep `iac` in `I`;
- do not reintroduce `webcam` or `yak` unless the human explicitly reopens those decisions;
- keep speech-target details in planning docs for now, not production manifests;
- continue to avoid near-duplicate diminutives and recent visual lookalikes when safer stretch rows remain.

## Verification

Batch 64 is documentation-only. Verification:

```txt
git diff --check
```

## Batch 65 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 64.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
7. docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md
8. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-64.md
9. docs/app-development-program/features/romanian-content-expansion/status.md
10. docs/status.md

Goal:

Execute Batch 65: write production image briefs and generate one ordered, unlabeled contact sheet for the Batch 64 planned slice, then stop for human image review.

Use this exact planned display/order:

1. bibliotecă
2. radiator
3. sacou
4. șoim
5. ștampilă
6. șezlong
7. tacâmuri
8. țarc
9. țiglă
10. viespe
11. șurubelniță
12. joben
13. jantă
14. coțofană
15. jardinieră

Tasks:

- Keep the batch review-only: do not add production JSON records, crop cells into public assets, optimize WebP files, replace existing assets, add placeholders, or change routes/schema/loaders.
- Follow `docs/image-pipeline.md`, including the established pixel-art style, full-square background, no text/logos, and circular-mask-safe composition.
- For each word, record the exact image brief direction from Batch 64 plus any extra ambiguity controls needed for thumbnail recognition.
- Generate one ordered contact sheet with generous gutters and no labels inside the generated image.
- Include a comparison/brand review note using representative existing production assets.
- Stop after contact-sheet generation and ask for human image review before any promotion.
- Update `docs/app-development-program/features/romanian-content-expansion/status.md`, `docs/status.md`, and `docs/next-image-batch-prompt.md`.
- Provide the Batch 66 ready-to-copy prompt for promoting only human-accepted cells with full validation.

Run:

git diff --check
```
