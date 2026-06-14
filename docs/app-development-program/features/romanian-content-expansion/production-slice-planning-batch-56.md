# Batch 56 Production Slice Planning: Fourth Batch 43 Queue

Batch: Romanian Content Expansion Batch 56.

Status: complete; production slice planned; no production content added.

Last updated: 2026-06-12.

## Scope Guard

This batch is planning-only. It does not add production JSON records, image assets, placeholders, route or schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Planning sources:

- `docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md`
- `docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-44.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-48.md`
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-52.md`
- `docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-55.md`

Canonical Batch 55 baseline:

- approved words: `412`;
- ready images: `412`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3` (`ghicitoare`, `miez`, and `stinghie`);
- playable rare-letter routes `K`, `Q`, `W`, `X`, and `Y` are enabled;
- `cameră web` remains in `content/ro/words-c.json`;
- `iac` remains in `content/ro/words-i.json`;
- `webcam` and `yak` must not be reintroduced unless the human explicitly reopens those decisions.

## Slice Decision

Batch 56 selects another safe strong-word slice from the remaining Batch 43 pool. The selected rows are concrete, child-friendly, imageable, and useful for still-thin or high-value coverage in `B`, `D`, `Ș`, `Ț`, `V`, `CI`, `L`, and `R`.

Selected order:

1. `biberon`
2. `borcan`
3. `burete`
4. `brad`
5. `bluză`
6. `bancă`
7. `dormitor`
8. `periuță`
9. `brățară`
10. `sticlă`
11. `șină`
12. `vierme`
13. `vișine`
14. `papuci`
15. `lădiță`

Deferred from the same safe pool for later slices: `locomotivă`, `sac`, `soră`, `gălușcă`, `fundiță`, `sticluță`, `punguță`, `covor`, `cravată`, `lavetă`, `porumbel`, `roabă`, `cabană`, `pădure`, and `medalie`.

`locomotivă` remains deferred because `tren` is already recent production content and another train-adjacent vehicle is not needed before safer object/clothing/food coverage. `soră` remains acceptable under the existing person/family policy, but this slice avoids a person image while enough object rows remain. `gălușcă` remains accepted but its dumpling visual is less universally clear than the chosen rows. `pădure` and `cabană` remain good candidates but are broader scene-like images, so they are deferred behind simpler single-object subjects.

## Source Verification

Source labels used in this document:

- `S1` dexonline `biberon`: https://dexonline.ro/definitie/biberon
- `S2` dexonline `borcan`: https://dexonline.ro/definitie/borcan
- `S3` dexonline `burete`: https://dexonline.ro/definitie/burete
- `S4` dexonline `brad`: https://dexonline.ro/definitie/brad
- `S5` dexonline `bluză`: https://dexonline.ro/definitie/bluz%C4%83
- `S6` dexonline `bancă`: https://dexonline.ro/definitie/banc%C4%83
- `S7` dexonline `dormitor`: https://dexonline.ro/definitie/dormitor
- `S8` dexonline `periuță`: https://dexonline.ro/definitie/periu%C8%9B%C4%83
- `S9` dexonline `brățară`: https://dexonline.ro/definitie/br%C4%83%C8%9Bar%C4%83
- `S10` dexonline `sticlă`: https://dexonline.ro/definitie/sticl%C4%83
- `S11` dexonline `șină`: https://dexonline.ro/definitie/%C8%99in%C4%83
- `S12` dexonline `vierme`: https://dexonline.ro/definitie/vierme
- `S13` dexonline `vișină`: https://dexonline.ro/definitie/vi%C8%99in%C4%83
- `S14` dexonline `papuc`: https://dexonline.ro/definitie/papuc
- `S15` dexonline `lădiță`: https://dexonline.ro/definitie/l%C4%83di%C8%9B%C4%83

Verification decisions:

- All `15` rows are from the human-reviewed Batch 43 candidate pool and remain defensible for planning after source, safety, imageability, and duplicate checks.
- `bancă` must use the park bench sense, not the financial institution, school desk, or abstract banking sense.
- `sticlă` must use the bottle sense, not the material, window pane, lens, or broken glass.
- `șină` must show a rail/train-track piece, not an abstract line or narrow strip.
- `periuță` should use the toothbrush sense, not the figurative or regional senses.
- `vișine` uses the natural plural fruit row from singular `vișină`, consistent with existing plural concrete rows.
- `papuci` uses the footwear/slippers sense from singular `papuc`, and should not show branded shoes or outdoor sandals if the thumbnail becomes ambiguous.
- `brad` should be a fir tree, not a holiday-only decorated Christmas tree unless later human review explicitly wants that seasonal reading.
- `vierme` must be friendly and non-scary; avoid dirt, decay, or parasite framing.
- `dormitor` is accepted only if the image stays simple enough at thumbnail size, preferably a bed-centered bedroom icon rather than a busy room scene.
- `lădiță` should show a small crate/box, not a drawer, coffin-like box, or cluttered storage scene.

## Planned Canonical Rows

All planned records should use `source: ["manual"]`, `license: "app-owned"`, `status: "approved"`, and `imageStatus: "ready"` only when promoted with reviewed final images in the later production batch. Do not promote any row without its reviewed final image.

| # | Display | Canonical file | Stable ID | Planned image path | Normalized | Category | Difficulty | Source check | Metadata and image brief direction |
| ---: | --- | --- | --- | --- | --- | --- | ---: | --- | --- |
| 1 | `biberon` | `content/ro/words-b.json` | `ro-b-biberon` | `/images/ro/b/ro-b-biberon.webp` | `biberon` | `household` | 1 | `S1` | Noun, age band `4-6`; one baby bottle with simple cap/nipple shape, no baby, no feeding scene, no measurement text. |
| 2 | `borcan` | `content/ro/words-b.json` | `ro-b-borcan` | `/images/ro/b/ro-b-borcan.webp` | `borcan` | `household` | 1 | `S2` | Noun, age band `4-6`; one clear jar with lid, optionally simple jam or pickles inside, no label, text, or brand. |
| 3 | `burete` | `content/ro/words-b.json` | `ro-b-burete` | `/images/ro/b/ro-b-burete.webp` | `burete` | `household` | 1 | `S3` | Noun, age band `4-6`; one cleaning sponge, bright rectangular shape, no dirty sink, mold, mushroom, or bath clutter. |
| 4 | `brad` | `content/ro/words-b.json` | `ro-b-brad` | `/images/ro/b/ro-b-brad.webp` | `brad` | `nature` | 1 | `S4` | Noun, age band `4-6`; one plain evergreen fir tree, no ornaments, gifts, text, snowstorm, or holiday-only cues. |
| 5 | `bluză` | `content/ro/words-b.json` | `ro-b-bluza` | `/images/ro/b/ro-b-bluza.webp` | `bluza` | `clothing` | 1 | `S5` | Noun, age band `4-6`; one simple blouse/top garment, front view, no person, logo, pattern text, military/workwear reading, or brand. |
| 6 | `bancă` | `content/ro/words-b.json` | `ro-b-banca` | `/images/ro/b/ro-b-banca.webp` | `banca` | `household` | 2 | `S6` | Noun, age band `4-6`; one simple park bench with seat and backrest, no money, bank building, school desk, person, or city clutter. |
| 7 | `dormitor` | `content/ro/words-d.json` | `ro-d-dormitor` | `/images/ro/d/ro-d-dormitor.webp` | `dormitor` | `household` | 2 | `S7` | Noun, age band `4-6`; simple bedroom icon centered on a bed and maybe tiny nightstand, no person, messy room, or dark/scary night scene. |
| 8 | `periuță` | `content/ro/words-p.json` | `ro-p-periuta` | `/images/ro/p/ro-p-periuta.webp` | `periuta` | `household` | 1 | `S8` | Noun, age band `4-6`; one toothbrush, no toothpaste brand, teeth/mouth close-up, bathroom clutter, or text. |
| 9 | `brățară` | `content/ro/words-b.json` | `ro-b-bratara` | `/images/ro/b/ro-b-bratara.webp` | `bratara` | `clothing` | 2 | `S9` | Noun, age band `4-6`; one simple bracelet as an object, distinct from `braț`, no hand/person required, no luxury jewelry framing. |
| 10 | `sticlă` | `content/ro/words-s.json` | `ro-s-sticla` | `/images/ro/s/ro-s-sticla.webp` | `sticla` | `household` | 1 | `S10` | Noun, age band `4-6`; one intact bottle, preferably empty or filled with water, no broken glass, alcohol shape, label, or material-only sheet. |
| 11 | `șină` | `content/ro/words-ș.json` | `ro-sh-sina` | `/images/ro/ș/ro-sh-sina.webp` | `sina` | `vehicle` | 2 | `S11` | Noun, age band `4-6`; one short piece of railway track/rail, no train required, no danger scene, no abstract stripe or metal strip. |
| 12 | `vierme` | `content/ro/words-v.json` | `ro-v-vierme` | `/images/ro/v/ro-v-vierme.webp` | `vierme` | `animal` | 2 | `S12` | Noun, age band `4-6`; one friendly worm on a clean simple ground patch, no decay, parasite, scary face, or messy soil. |
| 13 | `vișine` | `content/ro/words-v.json` | `ro-v-visine` | `/images/ro/v/ro-v-visine.webp` | `visine` | `food` | 1 | `S13` | Plural noun, age band `4-6`; small pair or cluster of sour cherries with stems, no label, package, jam jar, or generic red-berry ambiguity. |
| 14 | `papuci` | `content/ro/words-p.json` | `ro-p-papuci` | `/images/ro/p/ro-p-papuci.webp` | `papuci` | `clothing` | 1 | `S14` | Plural noun, age band `4-6`; one pair of simple house slippers, no feet, brand, shoe store scene, or outdoor boot/sandal confusion. |
| 15 | `lădiță` | `content/ro/words-l.json` | `ro-l-ladita` | `/images/ro/l/ro-l-ladita.webp` | `ladita` | `household` | 2 | `S15` | Noun, age band `4-6`; one small wooden or plastic crate/box, open top, no drawer, coffin-like shape, or cluttered storage scene. |

## Route, Loader, And Validation Impact

Existing manifests, routes, and loaders can accept this slice without structural changes:

- no new letter manifests are needed;
- no new playable letters, route aliases, loader imports, matching helpers, setup/play routing changes, admin inventory changes, schema changes, or validation-rule changes are planned;
- Batch 58 promotion would edit only `content/ro/words-b.json`, `content/ro/words-d.json`, `content/ro/words-p.json`, `content/ro/words-s.json`, `content/ro/words-ș.json`, `content/ro/words-v.json`, and `content/ro/words-l.json`;
- final image assets would be added under existing directories in `public/images/ro/b`, `public/images/ro/d`, `public/images/ro/p`, `public/images/ro/s`, `public/images/ro/ș`, `public/images/ro/v`, and `public/images/ro/l`;
- compatibility fixtures or content-count assertions may need count updates in the promotion batch if they encode affected route target counts;
- `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check` should run in the later promotion and QA batches.

No `Ă` or `Â` starts-with rows are planned, and no `Q`, `W`, `X`, `webcam`, or `yak` rows are added or reopened by this batch.

## Coverage Impact

Current production content remains unchanged in Batch 56: `412` approved words, `412` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.

If all `15` planned rows are later promoted with ready images, the planned content total becomes `427` approved words, `427` ready images, and `0` approved placeholders.

Requested-target deltas using current exact matcher semantics:

| Target | Before starts | Before contains | Before mixed | Planned starts | Planned contains | Planned mixed | Delta |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `Ă` | 0 | 167 | 167 | 0 | 174 | 174 | `+7` contains |
| `CI` | 9 | 10 | 19 | 9 | 11 | 20 | `+1` contains |
| `L` | 19 | 85 | 104 | 20 | 87 | 107 | `+1` starts, `+2` contains |
| `R` | 18 | 145 | 163 | 18 | 153 | 171 | `+8` contains |
| `S` | 21 | 31 | 52 | 22 | 31 | 53 | `+1` starts |
| `Ș` | 12 | 27 | 39 | 13 | 28 | 41 | `+1` starts, `+1` contains |
| `T` | 17 | 88 | 105 | 17 | 91 | 108 | `+3` contains |
| `Ț` | 6 | 37 | 43 | 6 | 40 | 46 | `+3` contains |
| `V` | 14 | 15 | 29 | 16 | 15 | 31 | `+2` starts |
| `B` | 23 | 24 | 47 | 30 | 24 | 54 | `+7` starts |
| `D` | 10 | 20 | 30 | 11 | 22 | 33 | `+1` starts, `+2` contains |

Targets with no planned delta from this slice: `Â`, `K`, `Q`, `W`, `X`, `Y`, `CE`, `GE`, `GI`, `GHE`, `GHI`, `CHE`, `CHI`, and `J`.

Per-word requested-target impact:

| Display | Starts-with impact | Contains-only impact |
| --- | --- | --- |
| `biberon` | `B` | `R` |
| `borcan` | `B` | `R` |
| `burete` | `B` | `R`, `T` |
| `brad` | `B` | `R`, `D` |
| `bluză` | `B` | `Ă`, `L` |
| `bancă` | `B` | `Ă` |
| `dormitor` | `D` | `R`, `T` |
| `periuță` | none for requested starts | `Ă`, `R`, `Ț` |
| `brățară` | `B` | `Ă`, `R`, `Ț` |
| `sticlă` | `S` | `Ă`, `L`, `T` |
| `șină` | `Ș` | `Ă` |
| `vierme` | `V` | `R` |
| `vișine` | `V` | `Ș` |
| `papuci` | none for requested starts | `CI` |
| `lădiță` | `L` | `Ă`, `Ț`, `D` |

## Preserved Decisions

Preserved decisions:

- do not force `Ă` or `Â` starts-with rows;
- do not pad `Q`, `W`, or `Y` with obscure words;
- keep `cameră web` in `C`;
- keep `iac` in `I`;
- do not reintroduce `webcam` or `yak` unless the human explicitly reopens those decisions;
- keep speech-target details in planning docs for now, not production manifests.

## Batch 57 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 56.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
7. docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md
8. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-56.md
9. docs/app-development-program/features/romanian-content-expansion/status.md
10. docs/status.md

Goal:

Execute Batch 57: write production image briefs and generate one contact sheet for the Batch 56 planned fourth slice, then stop for human image review.

Use the exact planned display/order from Batch 56:

1. biberon
2. borcan
3. burete
4. brad
5. bluză
6. bancă
7. dormitor
8. periuță
9. brățară
10. sticlă
11. șină
12. vierme
13. vișine
14. papuci
15. lădiță

For each word, write an image brief with:

- stable word ID;
- display word;
- canonical image path;
- short Romanian alt text;
- category;
- one clear subject;
- specific ambiguity/safety notes from Batch 56;
- pixel-art style requirements from docs/image-pipeline.md.

Then generate one unlabeled contact sheet in the same order. Follow docs/image-pipeline.md:

- refined, lightly dimensional pixel art;
- full square background or transparency;
- circular-safe composition;
- no text, letters, numbers, logos, brands, watermarks, copyrighted characters, clutter, scary content, violence, weapons, injury, police/military framing, medical framing, or confusing extra objects;
- for bancă, show a park bench, not a bank, school desk, or money;
- for sticlă, show an intact bottle, not broken glass, a window pane, or abstract material;
- for șină, show rail/train-track, not an abstract line or strip;
- for periuță, show a toothbrush, not a mouth close-up;
- for brad, show a plain fir tree, not a holiday-only decorated tree;
- for vierme, keep the worm friendly and non-scary;
- compare visually against the current on-brand reference set before asking for review.

Do not add production JSON records, crop cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Update the feature status and global docs/status.md, run git diff --check, and provide the Batch 58 prompt for human-accepted image promotion.
```
