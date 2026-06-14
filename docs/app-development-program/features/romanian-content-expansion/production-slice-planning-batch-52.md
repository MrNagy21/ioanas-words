# Batch 52 Production Slice Planning: Third Batch 43 Queue

Batch: Romanian Content Expansion Batch 52.

Status: complete; production slice planned; no production content added.

Last updated: 2026-06-11.

## Scope Guard

This batch is planning-only. It does not add production JSON records, image assets, placeholders, route or schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Planning sources:

- `docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md`
- `docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-44.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-48.md`
- `docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-51.md`

Canonical Batch 51 baseline:

- approved words: `397`;
- ready images: `397`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3` (`ghicitoare`, `miez`, and `stinghie`);
- playable rare-letter routes `K`, `Q`, `W`, `X`, and `Y` are already enabled;
- `cameră web` remains in `content/ro/words-c.json`;
- `iac` remains in `content/ro/words-i.json`;
- `webcam` and `yak` must not be reintroduced unless the human explicitly reopens those decisions.

## Slice Decision

Batch 52 selects a safer strong-word slice instead of another rare-letter stretch slice. The selected rows are concrete, imageable, child-safe, and useful for requested coverage in still-thin starts-with areas such as `L`, `R`, `S`, `D`, and `Ț`.

Selected order:

1. `lebădă`
2. `lopată`
3. `lipici`
4. `lupă`
5. `leagăn`
6. `rac`
7. `ren`
8. `rucsac`
9. `role`
10. `supă`
11. `sare`
12. `semințe`
13. `sită`
14. `dovlecel`
15. `țelină`

Deferred from the same safe pool for later slices: `locomotivă`, `biberon`, `borcan`, `burete`, `brad`, `bluză`, `bancă`, `dormitor`, `periuță`, and `brățară`.

`locomotivă` was deferred because `tren` just entered production in Batch 50, so the next contact sheet should avoid another train-adjacent vehicle unless needed. `bancă` and `dormitor` remain accepted but are more ambiguity-prone or scene-heavy than the chosen rows. `periuță` and `brățară` remain strong future `Ț` contains candidates.

## Source Verification

Source labels used in this document:

- `S1` dexonline `lebădă`: https://dexonline.ro/definitie/leb%C4%83d%C4%83
- `S2` dexonline `lopată`: https://dexonline.ro/definitie/lopata
- `S3` dexonline `lipici`: https://dexonline.ro/definitie/lipici
- `S4` dexonline `lupă`: https://dexonline.ro/definitie/lup%C4%83
- `S5` dexonline `leagăn`: https://dexonline.ro/definitie/leag%C4%83n
- `S6` dexonline `rac`: https://dexonline.ro/definitie/rac
- `S7` dexonline `ren`: https://dexonline.ro/definitie/ren
- `S8` dexonline `rucsac`: https://dexonline.ro/definitie/rucsac
- `S9` dexonline `rolă`: https://dexonline.ro/definitie/rol%C4%83
- `S10` dexonline `supă`: https://dexonline.ro/definitie/sup%C4%83
- `S11` dexonline `sare`: https://dexonline.ro/definitie/sare
- `S12` dexonline `sămânță`: https://dexonline.ro/definitie/s%C4%83m%C3%A2n%C8%9B%C4%83
- `S13` dexonline `sită`: https://dexonline.ro/definitie/sita
- `S14` dexonline `dovlecel`: https://dexonline.ro/definitie/dovlecel
- `S15` dexonline `țelină`: https://dexonline.ro/definitie/%C8%9Belin%C4%83

Verification decisions:

- All `15` rows are from the human-reviewed Batch 43 candidate pool and remain defensible for planning after current source, safety, imageability, and duplicate checks.
- `role` should use the plural roller-skates sense from `rolă`, not a mechanical roller or abstract role sense.
- `semințe` should show simple edible seeds; source verification uses singular `sămânță` and the production display stays plural because existing content already uses natural plural concrete food/object rows.
- `sită` should show a household sieve/strainer, not regional `șiță`, a screen/filter abstraction, or an idiom.
- `dovlecel` is acceptable even with existing `dovleac`, but the image must make the zucchini/courgette distinction clear with a long green vegetable, not a pumpkin.
- `țelină` must use the culinary plant/root sense, not the homonymous untilled-land sense; the image should show celery root with green leaves or celery stalk/root cues.
- `leagăn` should use a playground swing image, not an infant cradle, institution, or figurative sense.
- `sare` should be illustrated as food salt in a small shaker or simple pile, with no text or chemical/science framing.

## Planned Canonical Rows

All planned records should use `source: ["manual"]`, `license: "app-owned"`, `status: "approved"`, and `imageStatus: "ready"` only when promoted with reviewed final images in the later production batch. Do not promote any row without its reviewed final image.

| # | Display | Canonical file | Stable ID | Planned image path | Normalized | Category | Difficulty | Source check | Metadata and image brief direction |
| ---: | --- | --- | --- | --- | --- | --- | ---: | --- | --- |
| 1 | `lebădă` | `content/ro/words-l.json` | `ro-l-lebada` | `/images/ro/l/ro-l-lebada.webp` | `lebada` | `animal` | 1 | `S1` | Noun, age band `4-6`; one white swan in side view on a tiny calm-water base, friendly natural animal, no busy pond scene. |
| 2 | `lopată` | `content/ro/words-l.json` | `ro-l-lopata` | `/images/ro/l/ro-l-lopata.webp` | `lopata` | `household` | 1 | `S2` | Noun, age band `4-6`; one simple garden shovel, clear handle and scoop, no dirt pile clutter or unsafe tool framing. |
| 3 | `lipici` | `content/ro/words-l.json` | `ro-l-lipici` | `/images/ro/l/ro-l-lipici.webp` | `lipici` | `school` | 1 | `S3` | Noun, age band `4-6`; one glue stick or small glue bottle, no label, letters, logo, spill mess, or brand cues. |
| 4 | `lupă` | `content/ro/words-l.json` | `ro-l-lupa` | `/images/ro/l/ro-l-lupa.webp` | `lupa` | `school` | 2 | `S4` | Noun, age band `4-6`; one magnifying glass, clear round lens and handle, no letters, detective theme, or confusing extra objects. |
| 5 | `leagăn` | `content/ro/words-l.json` | `ro-l-leagan` | `/images/ro/l/ro-l-leagan.webp` | `leagan` | `toy` | 1 | `S5` | Noun, age band `4-6`; one empty playground swing with seat and ropes, no child figure required, no cradle or institution sense. |
| 6 | `rac` | `content/ro/words-r.json` | `ro-r-rac` | `/images/ro/r/ro-r-rac.webp` | `rac` | `animal` | 1 | `S6` | Noun, age band `4-6`; one friendly crayfish/crab-like animal with claws softened, no scary pinch action or zodiac symbol. |
| 7 | `ren` | `content/ro/words-r.json` | `ro-r-ren` | `/images/ro/r/ro-r-ren.webp` | `ren` | `animal` | 1 | `S7` | Noun, age band `4-6`; one reindeer in natural side view, clear antlers, no holiday-only costume, sleigh, text, or character framing. |
| 8 | `rucsac` | `content/ro/words-r.json` | `ro-r-rucsac` | `/images/ro/r/ro-r-rucsac.webp` | `rucsac` | `school` | 1 | `S8` | Noun, age band `4-6`; one simple backpack with straps, no logo, text, patches, or cluttered school scene. |
| 9 | `role` | `content/ro/words-r.json` | `ro-r-role` | `/images/ro/r/ro-r-role.webp` | `role` | `toy` | 2 | `S9` | Plural noun, age band `4-6`; one pair of inline skates or roller skates, no feet, speed lines, brand marks, or risky fall scene. |
| 10 | `supă` | `content/ro/words-s.json` | `ro-s-supa` | `/images/ro/s/ro-s-supa.webp` | `supa` | `food` | 1 | `S10` | Noun, age band `4-6`; one warm bowl of soup with spoon optional, no steam overload, text, or hot-spill danger. |
| 11 | `sare` | `content/ro/words-s.json` | `ro-s-sare` | `/images/ro/s/ro-s-sare.webp` | `sare` | `food` | 1 | `S11` | Noun, age band `4-6`; one small salt shaker or simple salt pile, no label, chemical symbol, or confusing sugar reading. |
| 12 | `semințe` | `content/ro/words-s.json` | `ro-s-seminte` | `/images/ro/s/ro-s-seminte.webp` | `seminte` | `food` | 2 | `S12` | Plural noun, age band `4-6`; small pile of sunflower or pumpkin seeds with simple shapes, no package, letters, or tiny unreadable clutter. |
| 13 | `sită` | `content/ro/words-s.json` | `ro-s-sita` | `/images/ro/s/ro-s-sita.webp` | `sita` | `household` | 2 | `S13` | Noun, age band `4-6`; one round kitchen sieve/strainer with visible mesh, no flour cloud, no idiom, no window-screen reading. |
| 14 | `dovlecel` | `content/ro/words-d.json` | `ro-d-dovlecel` | `/images/ro/d/ro-d-dovlecel.webp` | `dovlecel` | `food` | 2 | `S14` | Noun, age band `4-6`; one long green zucchini/courgette, distinct from orange `dovleac`, no sliced complex dish. |
| 15 | `țelină` | `content/ro/words-ț.json` | `ro-tz-telina` | `/images/ro/ț/ro-tz-telina.webp` | `telina` | `food` | 3 | `S15` | Noun, age band `4-6`; celery root with a few green leaves or clear celery vegetable cues, not a field/landscape. |

## Route, Loader, And Validation Impact

Existing manifests, routes, and loaders can accept this slice without structural changes:

- no new letter manifests are needed;
- no new playable letters, route aliases, loader imports, matching helpers, setup/play routing changes, admin inventory changes, schema changes, or validation-rule changes are planned;
- Batch 54 promotion would edit only `content/ro/words-l.json`, `content/ro/words-r.json`, `content/ro/words-s.json`, `content/ro/words-d.json`, and `content/ro/words-ț.json`;
- final image assets would be added under existing directories in `public/images/ro/l`, `public/images/ro/r`, `public/images/ro/s`, `public/images/ro/d`, and `public/images/ro/ț`;
- compatibility fixtures or content-count assertions may need count updates in the promotion batch if they encode affected route target counts;
- `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check` should run in the later promotion and QA batches.

No `Ă` or `Â` starts-with rows are planned, and no `Q`, `W`, `X`, `webcam`, or `yak` rows are added or reopened by this batch.

## Coverage Impact

Current production content remains unchanged in Batch 52: `397` approved words, `397` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.

If all `15` planned rows are later promoted with ready images, the planned content total becomes `412` approved words, `412` ready images, and `0` approved placeholders.

Requested-target deltas using current exact matcher semantics:

| Target | Before starts | Before contains | Before mixed | Planned starts | Planned contains | Planned mixed | Delta |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `Ă` | 0 | 160 | 160 | 0 | 167 | 167 | `+7` contains |
| `T` | 17 | 86 | 103 | 17 | 88 | 105 | `+2` contains |
| `V` | 14 | 14 | 28 | 14 | 15 | 29 | `+1` contains |
| `L` | 14 | 82 | 96 | 19 | 85 | 104 | `+5` starts, `+3` contains |
| `R` | 14 | 144 | 158 | 18 | 145 | 163 | `+4` starts, `+1` contains |
| `S` | 17 | 30 | 47 | 21 | 31 | 52 | `+4` starts, `+1` contains |
| `B` | 23 | 23 | 46 | 23 | 24 | 47 | `+1` contains |
| `D` | 9 | 19 | 28 | 10 | 20 | 30 | `+1` starts, `+1` contains |
| `CE` | 14 | 3 | 17 | 14 | 4 | 18 | `+1` contains |
| `CI` | 9 | 9 | 18 | 9 | 10 | 19 | `+1` contains |
| `Ț` | 5 | 36 | 41 | 6 | 37 | 43 | `+1` starts, `+1` contains |

Targets with no planned delta from this slice: `Â`, `K`, `Q`, `W`, `X`, `Y`, `GE`, `GI`, `GHE`, `CHE`, `CHI`, `Ș`, and `J`.

Per-word requested-target impact:

| Display | Starts-with impact | Contains-only impact |
| --- | --- | --- |
| `lebădă` | `L` | `Ă`, `B`, `D` |
| `lopată` | `L` | `Ă`, `T` |
| `lipici` | `L` | `CI` |
| `lupă` | `L` | `Ă` |
| `leagăn` | `L` | `Ă` |
| `rac` | `R` | none |
| `ren` | `R` | none |
| `rucsac` | `R` | `S` |
| `role` | `R` | `L` |
| `supă` | `S` | `Ă` |
| `sare` | `S` | `R` |
| `semințe` | `S` | `Ț` |
| `sită` | `S` | `Ă`, `T` |
| `dovlecel` | `D` | `V`, `L`, `CE` |
| `țelină` | `Ț` | `Ă`, `L` |

## Preserved Decisions

Preserved decisions:

- do not force `Ă` or `Â` starts-with rows;
- do not pad `Q`, `W`, or `Y` with obscure words;
- keep `cameră web` in `C`;
- keep `iac` in `I`;
- do not reintroduce `webcam` or `yak` unless the human explicitly reopens those decisions;
- keep speech-target details in planning docs for now, not production manifests.

## Batch 53 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 52.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
7. docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md
8. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-52.md
9. docs/app-development-program/features/romanian-content-expansion/status.md
10. docs/status.md

Goal:

Execute Batch 53: write production image briefs and generate one contact sheet for the Batch 52 planned third slice, then stop for human image review.

Use the exact planned display/order from Batch 52:

1. lebădă
2. lopată
3. lipici
4. lupă
5. leagăn
6. rac
7. ren
8. rucsac
9. role
10. supă
11. sare
12. semințe
13. sită
14. dovlecel
15. țelină

For each word, write an image brief with:

- stable word ID;
- display word;
- canonical image path;
- short Romanian alt text;
- category;
- one clear subject;
- specific ambiguity/safety notes from Batch 52;
- pixel-art style requirements from docs/image-pipeline.md.

Then generate one unlabeled contact sheet in the same order. Follow docs/image-pipeline.md:

- refined, lightly dimensional pixel art;
- full square background or transparency;
- circular-safe composition;
- no text, letters, numbers, logos, brands, watermarks, copyrighted characters, clutter, scary content, violence, weapons, injury, police/military framing, medical framing, or confusing extra objects;
- for role, show roller skates, not a mechanical roller or abstract role;
- for sită, show a household sieve/strainer, not a screen, filter abstraction, or regional șiță roof tile;
- for dovlecel, show a long green zucchini/courgette, not a pumpkin;
- for țelină, show the culinary vegetable sense, not land/field;
- for leagăn, show a playground swing, not a baby cradle or institution;
- compare visually against the current on-brand reference set before asking for review.

Do not add production JSON records, crop cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Update the feature status and global docs/status.md, run git diff --check, and provide the Batch 54 prompt for human-accepted image promotion.
```
