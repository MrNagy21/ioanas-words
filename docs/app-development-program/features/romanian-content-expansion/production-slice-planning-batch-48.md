# Batch 48 Production Slice Planning: Second Batch 43 Queue

Batch: Romanian Content Expansion Batch 48.

Status: complete; production slice planned; no production content added.

Last updated: 2026-06-02.

## Scope Guard

This batch is planning-only. It does not add production JSON records, image assets, placeholders, route or schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Planning sources:

- `docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-44.md`
- `docs/app-development-program/features/romanian-content-expansion/status.md`

Canonical Batch 47 baseline:

- approved words: `382`;
- ready images: `382`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3` (`ghicitoare`, `miez`, and `stinghie`);
- new playable letters `K`, `Q`, `W`, `X`, and `Y` are already enabled;
- `cameră web` remains in `content/ro/words-c.json`;
- `iac` remains in `content/ro/words-i.json`;
- `webcam` and `yak` must not be reintroduced unless the human explicitly reopens those decisions.

## Source Verification

Source labels used in this document:

- `S1` dexonline `kimono`: https://dexonline.ro/definitie/kimono/1119385
- `S2` dexonline `karate`: https://dexonline.ro/definitie/karate
- `S3` dexonline `kilt`: https://dexonline.ro/definitie/kilt
- `S4` dexonline `yoga`: https://dexonline.ro/definitie/yoga
- `S5` dexonline `tren`: https://dexonline.ro/definitie/tren
- `S6` dexonline `tractor`: https://dexonline.ro/definitie/tractor
- `S7` dexonline `tablă`: https://dexonline.ro/definitie/tabl%C4%83
- `S8` dexonline `tigaie`: https://dexonline.ro/definitie/tigaie
- `S9` dexonline `tamburină`: https://dexonline.ro/definitie/tamburin%C4%83
- `S10` dexonline `trandafir`: https://dexonline.ro/definitie/trandafir
- `S11` dexonline `ventilator`: https://dexonline.ro/definitie/ventilator
- `S12` dexonline `vopsea`: https://dexonline.ro/definitie/vopsea
- `S13` dexonline `volan`: https://dexonline.ro/definitie/volan
- `S14` dexonline `vestă`: https://dexonline.ro/definitie/vest%C4%83
- `S15` dexonline `vânătă`: https://dexonline.ro/definitie/v%C3%A2n%C4%83t%C4%83

Verification decisions:

- All `15` suggested rows are defensible for planning from the human-approved Batch 43 pool after source, safety, and imageability checks.
- `kimono`, `karate`, `kilt`, and `yoga` remain learnable stretch rows, not assumed child-known Romanian preschool vocabulary.
- `karate` is accepted only with a nonviolent child-safe sport image direction: one solo practice pose, no opponent, no impact, no weapons, no injury, no aggressive mood.
- `kilt` is accepted as a concrete clothing stretch row, with a culture-neutral garment-only image direction.
- `yoga` is accepted as a calm exercise/action row, with no spiritual, medical, therapy, or wellness claims in content or imagery.
- `tablă` must use the school-board sense, not the board-game, sheet-metal, or table/list senses.
- `volan` must use the vehicle steering-wheel sense, not a clothing frill.
- `vânătă` must use the eggplant/aubergine food sense, not a bruise or color adjective.
- `tigaie` does not improve the `GI` sequence target under the current exact matcher because `gi` is not adjacent in `tigaie`.

## Planned Canonical Rows

All planned records should use `source: ["manual"]`, `license: "app-owned"`, `status: "approved"`, and `imageStatus: "ready"` only when promoted with reviewed final images in the later production batch. Do not promote any row without its reviewed final image.

| # | Display | Canonical file | Stable ID | Planned image path | Normalized | Category | Difficulty | Source check | Metadata and image brief direction |
| ---: | --- | --- | --- | --- | --- | --- | ---: | --- | --- |
| 1 | `kimono` | `content/ro/words-k.json` | `ro-k-kimono` | `/images/ro/k/ro-k-kimono.webp` | `kimono` | `clothing` | 3 | `S1` | Noun, age band `4-6`; one simple kimono robe with belt, garment-only, no person stereotype or cultural costume clutter. |
| 2 | `karate` | `content/ro/words-k.json` | `ro-k-karate` | `/images/ro/k/ro-k-karate.webp` | `karate` | `sport` | 3 | `S2` | Noun, age band `4-6`; one friendly child-safe solo karate practice stance in plain uniform, no opponent, hit, weapon, injury, or aggression. |
| 3 | `kilt` | `content/ro/words-k.json` | `ro-k-kilt` | `/images/ro/k/ro-k-kilt.webp` | `kilt` | `clothing` | 3 | `S3` | Noun, age band `4-6`; one tartan pleated kilt garment, centered and clear, no person stereotype or busy costume scene. |
| 4 | `yoga` | `content/ro/words-y.json` | `ro-y-yoga` | `/images/ro/y/ro-y-yoga.webp` | `yoga` | `action` | 3 | `S4` | Noun, age band `4-6`; one calm child-safe exercise pose on a simple mat, no spiritual symbols, medical framing, or wellness claim. |
| 5 | `tren` | `content/ro/words-t.json` | `ro-t-tren` | `/images/ro/t/ro-t-tren.webp` | `tren` | `vehicle` | 1 | `S5` | Noun, age band `4-6`; one friendly train with locomotive and a small carriage, no smoke overload, text, or railway danger. |
| 6 | `tractor` | `content/ro/words-t.json` | `ro-t-tractor` | `/images/ro/t/ro-t-tractor.webp` | `tractor` | `vehicle` | 1 | `S6` | Noun, age band `4-6`; one farm tractor, clear large wheels, no brand, no driver required, no complex farm scene. |
| 7 | `tablă` | `content/ro/words-t.json` | `ro-t-tabla` | `/images/ro/t/ro-t-tabla.webp` | `tabla` | `school` | 1 | `S7` | Noun, age band `4-6`; one classroom blackboard/greenboard with blank surface, no letters, numbers, math symbols, or board-game pieces. |
| 8 | `tigaie` | `content/ro/words-t.json` | `ro-t-tigaie` | `/images/ro/t/ro-t-tigaie.webp` | `tigaie` | `household` | 1 | `S8` | Noun, age band `4-6`; one frying pan with handle, no stove flame, hot oil splash, brand, or busy kitchen scene. |
| 9 | `tamburină` | `content/ro/words-t.json` | `ro-t-tamburina` | `/images/ro/t/ro-t-tamburina.webp` | `tamburina` | `music` | 2 | `S9` | Noun, age band `4-6`; one tambourine with jingles, no musical-note symbols, no hands required, no text. |
| 10 | `trandafir` | `content/ro/words-t.json` | `ro-t-trandafir` | `/images/ro/t/ro-t-trandafir.webp` | `trandafir` | `nature` | 1 | `S10` | Noun, age band `4-6`; one rose flower with simple stem and leaves, thorn-safe framing, no bouquet clutter, no adult/romantic scene. |
| 11 | `ventilator` | `content/ro/words-v.json` | `ro-v-ventilator` | `/images/ro/v/ro-v-ventilator.webp` | `ventilator` | `household` | 2 | `S11` | Noun, age band `4-6`; one household fan with visible blades behind grille, no danger framing, cord clutter, brand, or hospital ventilator reading. |
| 12 | `vopsea` | `content/ro/words-v.json` | `ro-v-vopsea` | `/images/ro/v/ro-v-vopsea.webp` | `vopsea` | `art` | 1 | `S12` | Noun, age band `4-6`; one open paint can with brush or colorful paint swatch, no label, no spill mess, no wall-painting scene. |
| 13 | `volan` | `content/ro/words-v.json` | `ro-v-volan` | `/images/ro/v/ro-v-volan.webp` | `volan` | `vehicle` | 1 | `S13` | Noun, age band `4-6`; one steering wheel, maybe with tiny dashboard context, no car logo, no driver, no racing/speed danger. |
| 14 | `vestă` | `content/ro/words-v.json` | `ro-v-vesta` | `/images/ro/v/ro-v-vesta.webp` | `vesta` | `clothing` | 2 | `S14` | Noun, age band `4-6`; one simple sleeveless vest, no safety/police/military vest, no brand or text. |
| 15 | `vânătă` | `content/ro/words-v.json` | `ro-v-vanata` | `/images/ro/v/ro-v-vanata.webp` | `vanata` | `food` | 2 | `S15` | Noun, age band `4-6`; one eggplant/aubergine vegetable with green cap, no bruise/color-adjective reading, no extra vegetable clutter. |

## Route, Loader, And Validation Impact

Existing manifests, routes, and loaders can accept this slice without structural changes:

- no new letter manifests are needed because `content/ro/words-k.json` and `words-y.json` already exist from the first requested expansion slice;
- no new playable letters, route aliases, loader imports, matching helpers, setup/play routing changes, admin inventory changes, schema changes, or validation-rule changes are planned;
- Batch 50 promotion would edit only `content/ro/words-k.json`, `content/ro/words-y.json`, `content/ro/words-t.json`, and `content/ro/words-v.json`;
- final image assets would be added under existing directories in `public/images/ro/k`, `public/images/ro/y`, `public/images/ro/t`, and `public/images/ro/v`;
- compatibility fixtures or content-count assertions may need count updates in the promotion batch if they encode affected route target counts;
- `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `git diff --check` should run in the later promotion and QA batches.

No `Ă` or `Â` starts-with rows are planned, and no `Q`, `W`, `X`, `webcam`, or `yak` rows are added or reopened by this batch.

## Coverage Impact

Current production content remains unchanged in Batch 48: `382` approved words, `382` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.

If all `15` planned rows are later promoted with ready images, the planned content total becomes `397` approved words, `397` ready images, and `0` approved placeholders.

Requested-target deltas using current exact matcher semantics:

| Target | Before starts | Before contains | Before mixed | Planned starts | Planned contains | Planned mixed | Delta |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `Ă` | 0 | 156 | 156 | 0 | 160 | 160 | `+4` contains |
| `Â` | 0 | 11 | 11 | 0 | 12 | 12 | `+1` contains |
| `K` | 2 | 1 | 3 | 5 | 1 | 6 | `+3` starts |
| `Y` | 1 | 0 | 1 | 2 | 0 | 2 | `+1` starts |
| `L` | 14 | 78 | 92 | 14 | 82 | 96 | `+4` contains |
| `R` | 14 | 138 | 152 | 14 | 144 | 158 | `+6` contains |
| `S` | 17 | 28 | 45 | 17 | 30 | 47 | `+2` contains |
| `T` | 11 | 81 | 92 | 17 | 86 | 103 | `+6` starts, `+5` contains |
| `V` | 9 | 14 | 23 | 14 | 14 | 28 | `+5` starts |
| `B` | 23 | 21 | 44 | 23 | 23 | 46 | `+2` contains |
| `D` | 9 | 18 | 27 | 9 | 19 | 28 | `+1` contains |

Targets with no planned delta from this slice: `Q`, `W`, `X`, `CE`, `CI`, `GE`, `GI`, `GHE`, `CHE`, `CHI`, `Ș`, `Ț`, and `J`.

Per-word requested-target impact:

| Display | Starts-with impact | Contains-only impact |
| --- | --- | --- |
| `kimono` | `K` | none |
| `karate` | `K` | `R`, `T` |
| `kilt` | `K` | `L`, `T` |
| `yoga` | `Y` | none |
| `tren` | `T` | `R` |
| `tractor` | `T` | `R` |
| `tablă` | `T` | `Ă`, `L`, `B` |
| `tigaie` | `T` | none |
| `tamburină` | `T` | `Ă`, `R`, `B` |
| `trandafir` | `T` | `R`, `D` |
| `ventilator` | `V` | `L`, `R`, `T` |
| `vopsea` | `V` | `S` |
| `volan` | `V` | `L` |
| `vestă` | `V` | `Ă`, `S`, `T` |
| `vânătă` | `V` | `Ă`, `Â`, `T` |

## Deferred Or Preserved Decisions

No suggested row was deferred in this planning batch.

Preserved decisions:

- do not force `Ă` or `Â` starts-with rows;
- do not pad `Q`, `W`, or `Y` with obscure words;
- keep `cameră web` in `C`;
- keep `iac` in `I`;
- do not reintroduce `webcam` or `yak` unless the human explicitly reopens those decisions;
- keep speech-target details in planning docs for now, not production manifests.

## Batch 49 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 48.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/requested-letter-and-sound-expansion-batch-41.md
7. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
8. docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md
9. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-44.md
10. docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-45.md
11. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-48.md
12. docs/app-development-program/features/romanian-content-expansion/status.md
13. docs/status.md

Goal:

Execute Batch 49: write production image briefs and generate one contact sheet for the Batch 48 planned second slice, then stop for human image review.

Use the exact planned display/order from Batch 48:

1. kimono
2. karate
3. kilt
4. yoga
5. tren
6. tractor
7. tablă
8. tigaie
9. tamburină
10. trandafir
11. ventilator
12. vopsea
13. volan
14. vestă
15. vânătă

For each word, write an image brief with:

- stable word ID;
- display word;
- canonical image path;
- short Romanian alt text;
- category;
- one clear subject;
- specific ambiguity/safety notes from Batch 48;
- pixel-art style requirements from docs/image-pipeline.md.

Then generate one unlabeled contact sheet in the same order. Follow docs/image-pipeline.md:

- refined, lightly dimensional pixel art;
- full square background or transparency;
- circular-safe composition;
- no text, letters, numbers, logos, brands, watermarks, copyrighted characters, clutter, scary content, violence, weapons, injury, police/military framing, medical framing, or confusing extra objects;
- for karate, use one solo child-safe practice pose with no opponent or impact;
- for yoga, use one calm exercise pose with no spiritual, medical, therapy, or wellness claim;
- for tablă, show a blank school board, not the board game or sheet metal;
- for volan, show a steering wheel, not clothing trim;
- for vânătă, show eggplant/aubergine, not a bruise or color adjective;
- compare visually against the current on-brand reference set before asking for review.

Do not crop cells, optimize WebP assets, edit production JSON, add placeholders, change routes, change schema, add speech-target production metadata, add database/auth/billing/admin features, add AI pronunciation, or make clinical claims in Batch 49. Stop after the contact sheet and ask the human to review it.

Update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md, run git diff --check, and provide a ready-to-copy prompt for Batch 50 production promotion and verification.
```
