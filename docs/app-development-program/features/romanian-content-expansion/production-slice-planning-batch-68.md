# Batch 68 Production Slice Planning: Seventh Batch 43 Queue

Batch: Romanian Content Expansion Batch 68.

Status: complete; active slice promoted in Batch 70; `răchită` removed.

Last updated: 2026-06-13.

## Scope Guard

This batch was planning-only when executed. It did not add production JSON records, image assets, placeholders, route or schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims. The active `14`-word slice was later promoted in Batch 70.

Planning sources:

- `docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md`
- `docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-44.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-48.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-52.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-56.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-60.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-64.md`
- `docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-67.md`

Canonical Batch 67 baseline:

- total Romanian records: `460`;
- approved words: `457`;
- ready images: `457`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3` (`ghicitoare`, `miez`, and `stinghie`);
- `tacâmuri` is the promoted production row; `tacâm` was not added;
- playable rare-letter routes `K`, `Q`, `W`, `X`, and `Y` are enabled;
- `cameră web` remains in `content/ro/words-c.json`;
- `iac` remains in `content/ro/words-i.json`;
- `webcam` and `yak` must not be reintroduced unless the human explicitly reopens those decisions.

## Slice Decision

Batch 68 selects another strict stretch slice from the remaining already human-reviewed Batch 43 candidate pool. The strongest common rows have already been planned and promoted, so this slice intentionally favors concrete, imageable stretch nouns that can still be reviewed and rejected at the image gate if the no-label visual is weak.

After Batch 69 human image review, `răchită` was removed from the active slice because the word is not familiar enough and the image cannot make the meaning inferable without labels. The active promotion candidate count became `14`, and those `14` rows were promoted in Batch 70.

Selected order:

1. `șnur`
2. `țambal`
3. `țipar`
4. `dantelă`
5. `degetar`
6. `daltă`
7. `dudă`
8. `jder`
9. `jambiere`
10. `rășină`
11. `bondar`
12. `cojoc`
13. `bijuterie`
14. `gingie`

Deferred:

- `răchită`, because the human rejected it after image review as too unfamiliar and not inferable from no-label art.
- `râmă`, because `vierme` was recently promoted and the two worm concepts remain visually close without labels.
- `roză`, because `trandafir` was recently promoted and already covers the rose concept.
- `gheorgină`, because the spelling/source check was not clean enough for this batch; do not plan it until the standard form is verified.
- `valiză`, because Batch 64 explicitly said not to reopen the `valiză` / `geamantan` near-synonym tradeoff without a new human decision.
- `vânt`, because it remains visually represented only through effects on other objects and is still too ambiguous for a no-label production image.
- `ketchup`, `quokka`, `wombat` / `vombat`, `webcam`, `yak`, `yacht`, and other rare-letter reopen rows remain out of scope without a new human decision.
- `doctor`, `balerină`, `vrăjitor`, `șanț`, `șah`, `cenușă`, `măceșe`, `celofan`, `vecin`, `rege`, and `încheietură` remain held because their person, medical, fantasy, safety, abstraction, duplicate, or image-clarity tradeoffs need a separate deliberate choice.

## Source Verification

Source labels used in this document:

- `S1` dexonline `șnur`: https://dexonline.ro/definitie/%C8%99nur
- `S2` dexonline `țambal`: https://dexonline.ro/definitie/%C8%9Bambal
- `S3` dexonline `țipar`: https://dexonline.ro/definitie/%C8%9Bipar
- `S4` dexonline `dantelă`: https://dexonline.ro/definitie/dantel%C4%83
- `S5` dexonline `degetar`: https://dexonline.ro/definitie/degetar
- `S6` dexonline `daltă`: https://dexonline.ro/definitie/dalt%C4%83
- `S7` dexonline `dudă`: https://dexonline.ro/definitie/duda
- `S8` dexonline `jder`: https://dexonline.ro/definitie/jder
- `S9` dexonline `jambieră`: https://dexonline.ro/definitie/jambier%C4%83
- `S10` dexonline `rășină`: https://dexonline.ro/definitie/r%C4%83%C8%99in%C4%83
- `S11` dexonline `bondar`: https://dexonline.ro/definitie/bondar
- `S12` dexonline `cojoc`: https://dexonline.ro/definitie/cojoc
- `S13` dexonline `bijuterie`: https://dexonline.ro/definitie/bijuterie
- `S14` dexonline `gingie`: https://dexonline.ro/definitie/gingie
- `S15` dexonline `răchită`: https://dexonline.ro/definitie/r%C4%83chit%C4%83

Verification decisions:

- The active `14` rows are from the human-reviewed Batch 43 candidate pool and remain planning candidates only until image review and promotion.
- `șnur` is accepted only with a cord/string object image that stays distinct from existing `șiret`, `mărțișor`, and `yo-yo` string visuals.
- `țambal` and `țipar` are less familiar exact-`Ț` starts rows, but both are concrete enough for a reviewable stretch slice.
- `dantelă`, `degetar`, `daltă`, and `dudă` are accepted as D starts stretch rows, with image clarity monitored closely.
- `jder`, `jambiere`, `cojoc`, and `bijuterie` support the weak `J` starts/interior area but remain stretch vocabulary.
- `gingie` is accepted because it is source-supported and useful for `GI`; the image must stay neutral, clean, and non-medical.
- `rășină` is a nature stretch row that adds interior `Ș`; after human feedback, its image must clearly show amber resin coming from tree bark or a trunk.
- `răchită` was removed from the active slice after human review; do not promote it from the Batch 69 original contact sheet.
- `bondar` is accepted as a concrete insect row, but the image must be clearly distinct from existing `albină` and recently promoted `viespe`.

## Planned Canonical Rows

All planned records should use `source: ["manual"]`, `license: "app-owned"`, `status: "approved"`, and `imageStatus: "ready"` only when promoted with reviewed final images in the later production batch. Do not promote any row without its reviewed final image.

| # | Display | Canonical file | Stable ID | Planned image path | Normalized | Category | Difficulty | Source check | Metadata and image brief direction |
| ---: | --- | --- | --- | --- | --- | --- | ---: | --- | --- |
| 1 | `șnur` | `content/ro/words-ș.json` | `ro-sh-snur` | `/images/ro/ș/ro-sh-snur.webp` | `snur` | `household` | 3 | `S1` | Noun, age band `4-6`; one twisted colorful cord/string segment, centered, no shoe, no plug, no knot clutter, and distinct from `șiret`. |
| 2 | `țambal` | `content/ro/words-ț.json` | `ro-tz-tambal` | `/images/ro/ț/ro-tz-tambal.webp` | `tambal` | `toy` | 3 | `S2` | Noun, age band `4-6`; one simple țambal/cimbalom-like instrument with small mallets, no musician, no stage, no text, and no dense strings. |
| 3 | `țipar` | `content/ro/words-ț.json` | `ro-tz-tipar` | `/images/ro/ț/ro-tz-tipar.webp` | `tipar` | `animal` | 3 | `S3` | Noun, age band `4-6`; one friendly eel-like fish, side view, no scary teeth, murky water, fishing hook, or danger framing. |
| 4 | `dantelă` | `content/ro/words-d.json` | `ro-d-dantela` | `/images/ro/d/ro-d-dantela.webp` | `dantela` | `clothing` | 3 | `S4` | Noun, age band `4-6`; one small white lace strip or folded lace fabric with simple holes, not a busy pattern tile or wedding/adult scene. |
| 5 | `degetar` | `content/ro/words-d.json` | `ro-d-degetar` | `/images/ro/d/ro-d-degetar.webp` | `degetar` | `household` | 3 | `S5` | Noun, age band `4-6`; one thimble object with dotted texture, no finger/needle action, no sharp needle, no sewing clutter. |
| 6 | `daltă` | `content/ro/words-d.json` | `ro-d-dalta` | `/images/ro/d/ro-d-dalta.webp` | `dalta` | `household` | 3 | `S6` | Noun, age band `4-6`; one static chisel tool with rounded-safe presentation, no hand, hammer strike, sharp-action pose, injury cue, or workshop clutter. |
| 7 | `dudă` | `content/ro/words-d.json` | `ro-d-duda` | `/images/ro/d/ro-d-duda.webp` | `duda` | `food` | 3 | `S7` | Noun, age band `4-6`; one ripe mulberry fruit or very small cluster on a leaf, no generic berry pile, stain, jam, or branch clutter. |
| 8 | `jder` | `content/ro/words-j.json` | `ro-j-jder` | `/images/ro/j/ro-j-jder.webp` | `jder` | `animal` | 3 | `S8` | Noun, age band `4-6`; one small friendly marten-like animal in side view, no hunting, teeth, dark forest, or scary pose. |
| 9 | `jambiere` | `content/ro/words-j.json` | `ro-j-jambiere` | `/images/ro/j/ro-j-jambiere.webp` | `jambiere` | `clothing` | 3 | `S9` | Plural noun, age band `4-6`; one pair of leg warmers/leggings-like garment pieces, no person required, no sports injury or medical brace reading. |
| 10 | `rășină` | `content/ro/words-r.json` | `ro-r-rasina` | `/images/ro/r/ro-r-rasina.webp` | `rasina` | `nature` | 3 | `S10` | Noun, age band `4-6`; one amber drop of resin on a clean piece of tree bark, no sticky mess, insect trap, wound, or dark forest. |
| 11 | `bondar` | `content/ro/words-b.json` | `ro-b-bondar` | `/images/ro/b/ro-b-bondar.webp` | `bondar` | `animal` | 3 | `S11` | Noun, age band `4-6`; one friendly round bumblebee with fuzzy body, distinct from `albină` and `viespe`, no sting attack or swarm. |
| 12 | `cojoc` | `content/ro/words-c.json` | `ro-c-cojoc` | `/images/ro/c/ro-c-cojoc.webp` | `cojoc` | `clothing` | 3 | `S12` | Noun, age band `4-6`; one simple traditional sheepskin coat garment, no person stereotype, no costume scene, no cultural clutter. |
| 13 | `bijuterie` | `content/ro/words-b.json` | `ro-b-bijuterie` | `/images/ro/b/ro-b-bijuterie.webp` | `bijuterie` | `clothing` | 3 | `S13` | Noun, age band `4-6`; one simple child-safe jewelry item such as a pendant or bead bracelet, no luxury/adult framing, gems pile, money, logo, or tiny detail clutter. |
| 14 | `gingie` | `content/ro/words-g.json` | `ro-g-gingie` | `/images/ro/g/ro-g-gingie.webp` | `gingie` | `body` | 3 | `S14` | Noun, age band `4-6`; one clean simplified smiling mouth detail showing pink gum near teeth, no blood, dental tools, pain, medical setting, or scary close-up. |

## Route, Loader, And Validation Impact

Existing manifests, routes, and loaders can accept this slice without structural changes:

- no new letter manifests are needed;
- no new playable letters, route aliases, loader imports, matching helpers, setup/play routing changes, admin inventory changes, schema changes, or validation-rule changes are planned;
- Batch 70 promotion would edit only `content/ro/words-ș.json`, `content/ro/words-ț.json`, `content/ro/words-d.json`, `content/ro/words-j.json`, `content/ro/words-r.json`, `content/ro/words-b.json`, `content/ro/words-c.json`, and `content/ro/words-g.json`;
- final image assets would be added under existing directories in `public/images/ro/ș`, `public/images/ro/ț`, `public/images/ro/d`, `public/images/ro/j`, `public/images/ro/r`, `public/images/ro/b`, `public/images/ro/c`, and `public/images/ro/g`;
- compatibility fixtures or content-count assertions may need count updates in the promotion batch if they encode affected route target counts;
- `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check` should run in the later image/promotion/QA flow as appropriate.

No `Ă` or `Â` starts-with rows are planned, and no `Q`, `W`, `X`, `webcam`, `yak`, `wombat`, `vombat`, `quokka`, or `ketchup` rows are added or reopened by this batch.

## Coverage Impact

Current production content remains unchanged in Batch 68: `457` approved words, `457` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.

If all `14` active planned rows are later promoted with ready images, the planned content total becomes `471` approved words, `471` ready images, and `0` approved placeholders.

Requested-target deltas using current exact matcher semantics:

| Target | Before starts | Before contains | Before mixed | Planned starts | Planned contains | Planned mixed | Delta |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `Ă` | 0 | 192 | 192 | 0 | 196 | 196 | `+4` contains |
| `GE` | 9 | 6 | 15 | 9 | 7 | 16 | `+1` contains |
| `GI` | 6 | 9 | 15 | 7 | 9 | 16 | `+1` starts |
| `L` | 22 | 95 | 117 | 22 | 98 | 120 | `+3` contains |
| `R` | 20 | 162 | 182 | 21 | 169 | 190 | `+1` starts, `+7` contains |
| `Ș` | 17 | 29 | 46 | 18 | 30 | 48 | `+1` starts, `+1` contains |
| `T` | 18 | 98 | 116 | 18 | 102 | 120 | `+4` contains |
| `Ț` | 8 | 44 | 52 | 10 | 44 | 54 | `+2` starts |
| `B` | 32 | 29 | 61 | 34 | 31 | 65 | `+2` starts, `+2` contains |
| `D` | 11 | 27 | 38 | 15 | 29 | 44 | `+4` starts, `+2` contains |
| `J` | 8 | 9 | 17 | 10 | 11 | 21 | `+2` starts, `+2` contains |

Targets with no planned delta from this slice: `Â`, `K`, `Q`, `W`, `X`, `Y`, `CE`, `GHE`, and `GHI`.

Per-word requested-target impact:

| Display | Starts-with impact | Contains-only impact |
| --- | --- | --- |
| `șnur` | `Ș` | `R` |
| `țambal` | `Ț` | `L`, `B` |
| `țipar` | `Ț` | `R` |
| `dantelă` | `D` | `Ă`, `L`, `T` |
| `degetar` | `D` | `GE`, `R`, `T` |
| `daltă` | `D` | `Ă`, `L`, `T` |
| `dudă` | `D` | `Ă` |
| `jder` | `J` | `R`, `D` |
| `jambiere` | `J` | `R`, `B` |
| `rășină` | `R` | `Ă`, `Ș` |
| `bondar` | `B` | `R`, `D` |
| `cojoc` | none for requested starts | `J` |
| `bijuterie` | `B` | `R`, `T`, `J` |
| `gingie` | `GI` | none |

## Preserved Decisions

- do not force `Ă` or `Â` starts-with rows;
- do not pad `Q`, `W`, or `Y` with obscure words;
- keep `cameră web` in `C`;
- keep `iac` in `I`;
- do not reintroduce `webcam` or `yak` unless the human explicitly reopens those decisions;
- keep speech-target details in planning docs for now, not production manifests;
- continue to avoid near-duplicate diminutives and recent visual lookalikes when safer stretch rows remain.

## Verification

Batch 68 is documentation-only. Verification:

```txt
git diff --check
```

## Batch 69 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 68.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-68.md
6. docs/app-development-program/features/romanian-content-expansion/status.md
7. docs/status.md

Goal:

Execute Batch 69: image briefs and one review-only contact sheet for the Batch 68 planned slice. Do not crop cells, optimize public WebP assets, add production JSON rows, replace images, or change routes/schema in this batch.

Use the Batch 68 active selected order:

1. șnur
2. țambal
3. țipar
4. dantelă
5. degetar
6. daltă
7. dudă
8. jder
9. jambiere
10. rășină
11. bondar
12. cojoc
13. bijuterie
14. gingie

Tasks:

- Write per-word image briefs from `production-slice-planning-batch-68.md`.
- Generate one unlabeled contact sheet in exact row-major order.
- Follow `docs/image-pipeline.md`: refined pixel-art style, no text/logos/labels, full square backgrounds, generous gutters, one centered subject per cell, and circular-mask-safe padding.
- Pay special attention to semantic risks: `șnur` vs `șiret`, `țambal` as an instrument, `dudă` as mulberry, `daltă` as a safe static tool, `bondar` vs `albină`/`viespe`, `gingie` as visible gum tissue without medical/scary cues, and `rășină` visibly coming from tree bark or a trunk.
- Create a comparison sheet against representative current production assets if useful for style/scale review.
- Stop for human image review after the contact sheet. Do not promote anything until the human explicitly accepts cells.
- Run `git diff --check`.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with the review artifact paths and the Batch 70 promotion prompt.

Do not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
```
