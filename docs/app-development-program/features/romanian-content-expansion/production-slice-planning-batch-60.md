# Batch 60 Production Slice Planning: Fifth Batch 43 Queue

Batch: Romanian Content Expansion Batch 60.

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
- `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-56.md`
- `docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-59.md`

Canonical Batch 59 baseline:

- approved words: `427`;
- ready images: `427`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3` (`ghicitoare`, `miez`, and `stinghie`);
- playable rare-letter routes `K`, `Q`, `W`, `X`, and `Y` are enabled;
- `cameră web` remains in `content/ro/words-c.json`;
- `iac` remains in `content/ro/words-i.json`;
- `webcam` and `yak` must not be reintroduced unless the human explicitly reopens those decisions.

## Slice Decision

Batch 60 selects another quality-gated slice from the remaining Batch 43 pool. The selected rows are mostly strong child-known candidates deferred from Batch 56, with `bomboană` added as a simple high-familiarity replacement for `sticluță`.

Selected order:

1. `locomotivă`
2. `sac`
3. `soră`
4. `gălușcă`
5. `fundiță`
6. `punguță`
7. `covor`
8. `cravată`
9. `lavetă`
10. `porumbel`
11. `roabă`
12. `cabană`
13. `pădure`
14. `medalie`
15. `bomboană`

Deferred:

- `sticluță`, because `sticlă` was just promoted and required human correction to represent a glass bottle rather than `flacon`; adding the diminutive immediately would increase visual and lexical confusion.
- `bibliotecă`, still accepted for a later slice, but less immediately useful than `bomboană` for a small child-known object/food image.
- Stretch rows such as `radiator`, `râmă`, `roză`, `sacou`, `șoim`, `șnur`, `ștampilă`, `șezlong`, `tacâm`, `țarc`, `țambal`, `țipar`, `țiglă`, `viespe`, `dantelă`, `degetar`, `daltă`, `dudă`, `jder`, `jambiere`, `jardinieră`, `joben`, `jantă`, `rășină`, `coțofană`, `șurubelniță`, `bondar`, `cojoc`, `bijuterie`, `gingie`, `gheorgină`, and `răchită` remain available for future planning, but should be weighed more strictly for familiarity, image clarity, and word length.

## Source Verification

Source labels used in this document:

- `S1` dexonline `locomotivă`: https://dexonline.ro/definitie/locomotiv%C4%83
- `S2` dexonline `sac`: https://dexonline.ro/definitie/sac
- `S3` dexonline `soră`: https://dexonline.ro/definitie/sor%C4%83
- `S4` dexonline `gălușcă`: https://dexonline.ro/definitie/g%C4%83lu%C8%99c%C4%83
- `S5` dexonline `fundiță`: https://dexonline.ro/definitie/fundi%C8%9B%C4%83
- `S6` dexonline `punguță`: https://dexonline.ro/definitie/pungu%C8%9B%C4%83
- `S7` dexonline `covor`: https://dexonline.ro/definitie/covor
- `S8` dexonline `cravată`: https://dexonline.ro/definitie/cravat%C4%83
- `S9` dexonline `lavetă`: https://dexonline.ro/definitie/lavet%C4%83
- `S10` dexonline `porumbel`: https://dexonline.ro/definitie/porumbel
- `S11` dexonline `roabă`: https://dexonline.ro/definitie/roab%C4%83
- `S12` dexonline `cabană`: https://dexonline.ro/definitie/caban%C4%83
- `S13` dexonline `pădure`: https://dexonline.ro/definitie/p%C4%83dure
- `S14` dexonline `medalie`: https://dexonline.ro/definitie/medalie
- `S15` dexonline `bomboană`: https://dexonline.ro/definitie/bomboan%C4%83

Verification decisions:

- All `15` rows are from the human-reviewed Batch 43 candidate pool and remain defensible for planning after source, safety, imageability, duplicate, and recent-near-duplicate checks.
- `locomotivă` is accepted now even though `tren` was recently promoted; it should show a locomotive engine clearly, not a full train scene that duplicates the `tren` asset.
- `soră` is acceptable under the existing person/family image policy, but the image brief must keep the depiction warm, generic, non-identifying, and child-safe.
- `gălușcă` is accepted only if the dumpling is visually clear as food and not a vague beige blob at thumbnail size.
- `fundiță` should show a bow/ribbon accessory, not a hair-only detail that disappears in the circular thumbnail.
- `punguță` should show a small bag/pouch, not candy packaging with text or a shopping bag with a logo.
- `cravată` should show a necktie as a simple clothing object, not adult office/business framing.
- `lavetă` should show a cleaning cloth, distinct from `burete` and not a dirty rag.
- `porumbel` should show a friendly pigeon/dove-like bird without city mess, droppings, or crowded scenery.
- `roabă` should show a wheelbarrow, not a person pushing it or a construction hazard scene.
- `cabană` and `pădure` are broader scene-like images; keep them icon-simple and avoid dark, scary, abandoned, or crowded scenery.
- `medalie` should show a medal with ribbon and no letters, numbers, awards text, flag, brand, or military framing.
- `bomboană` should show one wrapped candy or a small candy pair with no brand, logo, or choking-risk framing.

## Planned Canonical Rows

All planned records should use `source: ["manual"]`, `license: "app-owned"`, `status: "approved"`, and `imageStatus: "ready"` only when promoted with reviewed final images in the later production batch. Do not promote any row without its reviewed final image.

| # | Display | Canonical file | Stable ID | Planned image path | Normalized | Category | Difficulty | Source check | Metadata and image brief direction |
| ---: | --- | --- | --- | --- | --- | --- | ---: | --- | --- |
| 1 | `locomotivă` | `content/ro/words-l.json` | `ro-l-locomotiva` | `/images/ro/l/ro-l-locomotiva.webp` | `locomotiva` | `vehicle` | 2 | `S1` | Noun, age band `4-6`; one locomotive engine, clear front/side shape, no long train scene, smoke overload, railway danger, logo, or text. |
| 2 | `sac` | `content/ro/words-s.json` | `ro-s-sac` | `/images/ro/s/ro-s-sac.webp` | `sac` | `household` | 1 | `S2` | Noun, age band `4-6`; one simple sack/bag, tied or open, no brand, label, money bag, trash, or clutter. |
| 3 | `soră` | `content/ro/words-s.json` | `ro-s-sora` | `/images/ro/s/ro-s-sora.webp` | `sora` | `family` | 1 | `S3` | Noun, age band `4-6`; friendly generic girl/older sister figure, no real-person likeness, no baby-care scene, no text, no stereotypes. |
| 4 | `gălușcă` | `content/ro/words-g.json` | `ro-g-galusca` | `/images/ro/g/ro-g-galusca.webp` | `galusca` | `food` | 2 | `S4` | Noun, age band `4-6`; one or small group of dumplings in a simple bowl/plate, clear food cue, no soup clutter or beige blob ambiguity. |
| 5 | `fundiță` | `content/ro/words-f.json` | `ro-f-fundita` | `/images/ro/f/ro-f-fundita.webp` | `fundita` | `clothing` | 1 | `S5` | Noun, age band `4-6`; one clear bow/ribbon accessory, centered, no hair/person required, no tiny strands, no gift-label text. |
| 6 | `punguță` | `content/ro/words-p.json` | `ro-p-punguta` | `/images/ro/p/ro-p-punguta.webp` | `punguta` | `household` | 1 | `S6` | Noun, age band `4-6`; one small pouch/bag, no package label, shopping logo, candy branding, or confusing purse reading. |
| 7 | `covor` | `content/ro/words-c.json` | `ro-c-covor` | `/images/ro/c/ro-c-covor.webp` | `covor` | `household` | 1 | `S7` | Noun, age band `4-6`; one rolled or flat rug with simple pattern, no text, no busy room scene, distinct from blanket/towel. |
| 8 | `cravată` | `content/ro/words-c.json` | `ro-c-cravata` | `/images/ro/c/ro-c-cravata.webp` | `cravata` | `clothing` | 2 | `S8` | Noun, age band `4-6`; one necktie object, no adult office scene, suit body, business/money context, logo, or pattern text. |
| 9 | `lavetă` | `content/ro/words-l.json` | `ro-l-laveta` | `/images/ro/l/ro-l-laveta.webp` | `laveta` | `household` | 2 | `S9` | Noun, age band `4-6`; one folded cleaning cloth, clean and colorful, no dirty rag, sponge duplicate, chemical bottle, or sink clutter. |
| 10 | `porumbel` | `content/ro/words-p.json` | `ro-p-porumbel` | `/images/ro/p/ro-p-porumbel.webp` | `porumbel` | `animal` | 1 | `S10` | Noun, age band `4-6`; one friendly pigeon/dove-like bird, simple ground perch optional, no city mess, no droppings, no crowded flock. |
| 11 | `roabă` | `content/ro/words-r.json` | `ro-r-roaba` | `/images/ro/r/ro-r-roaba.webp` | `roaba` | `outdoor` | 2 | `S11` | Noun, age band `4-6`; one empty wheelbarrow, clear wheel and handles, no construction danger, person, heavy load, or clutter. |
| 12 | `cabană` | `content/ro/words-c.json` | `ro-c-cabana` | `/images/ro/c/ro-c-cabana.webp` | `cabana` | `place` | 2 | `S12` | Noun, age band `4-6`; one small friendly cabin, simple daylight scene, no dark forest, abandoned house, smoke/fire, or complex landscape. |
| 13 | `pădure` | `content/ro/words-p.json` | `ro-p-padure` | `/images/ro/p/ro-p-padure.webp` | `padure` | `nature` | 1 | `S13` | Noun, age band `4-6`; small group of bright trees representing a forest, no scary woods, night, wild animals, or scene clutter. |
| 14 | `medalie` | `content/ro/words-m.json` | `ro-m-medalie` | `/images/ro/m/ro-m-medalie.webp` | `medalie` | `object` | 1 | `S14` | Noun, age band `4-6`; one medal with ribbon, no numbers, letters, flag, military framing, brand, or winner podium. |
| 15 | `bomboană` | `content/ro/words-b.json` | `ro-b-bomboana` | `/images/ro/b/ro-b-bomboana.webp` | `bomboana` | `food` | 1 | `S15` | Noun, age band `4-6`; one wrapped candy or two simple candies, no brand, text, choking-risk scene, pile clutter, or adult sweet packaging. |

## Route, Loader, And Validation Impact

Existing manifests, routes, and loaders can accept this slice without structural changes:

- no new letter manifests are needed;
- no new playable letters, route aliases, loader imports, matching helpers, setup/play routing changes, admin inventory changes, schema changes, or validation-rule changes are planned;
- Batch 62 promotion would edit only `content/ro/words-l.json`, `content/ro/words-s.json`, `content/ro/words-g.json`, `content/ro/words-f.json`, `content/ro/words-p.json`, `content/ro/words-c.json`, `content/ro/words-r.json`, `content/ro/words-m.json`, and `content/ro/words-b.json`;
- final image assets would be added under existing directories in `public/images/ro/l`, `public/images/ro/s`, `public/images/ro/g`, `public/images/ro/f`, `public/images/ro/p`, `public/images/ro/c`, `public/images/ro/r`, `public/images/ro/m`, and `public/images/ro/b`;
- compatibility fixtures or content-count assertions may need count updates in the promotion batch if they encode affected route target counts;
- `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check` should run in the later image/promotion/QA flow as appropriate.

No `Ă` or `Â` starts-with rows are planned, and no `Q`, `W`, `X`, `webcam`, or `yak` rows are added or reopened by this batch.

## Coverage Impact

Current production content remains unchanged in Batch 60: `427` approved words, `427` ready images, `0` approved placeholders, and `3` rejected audit-trail rows.

If all `15` planned rows are later promoted with ready images, the planned content total becomes `442` approved words, `442` ready images, and `0` approved placeholders.

Requested-target deltas using current exact matcher semantics:

| Target | Before starts | Before contains | Before mixed | Planned starts | Planned contains | Planned mixed | Delta |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `Ă` | 0 | 174 | 174 | 0 | 185 | 185 | `+11` contains |
| `L` | 20 | 87 | 107 | 22 | 90 | 112 | `+2` starts, `+3` contains |
| `R` | 18 | 153 | 171 | 19 | 158 | 177 | `+1` starts, `+5` contains |
| `S` | 22 | 31 | 53 | 24 | 31 | 55 | `+2` starts |
| `Ș` | 13 | 28 | 41 | 13 | 29 | 42 | `+1` contains |
| `T` | 17 | 91 | 108 | 17 | 94 | 111 | `+3` contains |
| `Ț` | 6 | 40 | 46 | 6 | 42 | 48 | `+2` contains |
| `V` | 16 | 15 | 31 | 16 | 19 | 35 | `+4` contains |
| `B` | 30 | 24 | 54 | 31 | 27 | 58 | `+1` starts, `+3` contains |
| `D` | 11 | 22 | 33 | 11 | 25 | 36 | `+3` contains |

Targets with no planned delta from this slice: `Â`, `K`, `Q`, `W`, `X`, `Y`, `CE`, `CI`, `GE`, `GI`, `GHE`, `GHI`, `CHE`, `CHI`, and `J`.

Per-word requested-target impact:

| Display | Starts-with impact | Contains-only impact |
| --- | --- | --- |
| `locomotivă` | `L` | `Ă`, `T`, `V` |
| `sac` | `S` | none |
| `soră` | `S` | `Ă`, `R` |
| `gălușcă` | none for requested starts | `Ă`, `L`, `Ș` |
| `fundiță` | none for requested starts | `Ă`, `Ț`, `D` |
| `punguță` | none for requested starts | `Ă`, `Ț` |
| `covor` | none for requested starts | `R`, `V` |
| `cravată` | none for requested starts | `Ă`, `R`, `T`, `V` |
| `lavetă` | `L` | `Ă`, `T`, `V` |
| `porumbel` | none for requested starts | `L`, `R`, `B` |
| `roabă` | `R` | `Ă`, `B` |
| `cabană` | none for requested starts | `Ă`, `B` |
| `pădure` | none for requested starts | `Ă`, `R`, `D` |
| `medalie` | none for requested starts | `L`, `D` |
| `bomboană` | `B` | `Ă` |

## Preserved Decisions

Preserved decisions:

- do not force `Ă` or `Â` starts-with rows;
- do not pad `Q`, `W`, or `Y` with obscure words;
- keep `cameră web` in `C`;
- keep `iac` in `I`;
- do not reintroduce `webcam` or `yak` unless the human explicitly reopens those decisions;
- keep speech-target details in planning docs for now, not production manifests;
- avoid adding near-duplicate diminutives immediately after a corrected base word when the child-facing image distinction would be weak.

## Batch 61 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 60.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
7. docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md
8. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-60.md
9. docs/app-development-program/features/romanian-content-expansion/status.md
10. docs/status.md

Goal:

Execute Batch 61: write production image briefs and generate one contact sheet for the Batch 60 planned fifth slice, then stop for human image review.

Use the exact planned display/order from Batch 60:

1. locomotivă
2. sac
3. soră
4. gălușcă
5. fundiță
6. punguță
7. covor
8. cravată
9. lavetă
10. porumbel
11. roabă
12. cabană
13. pădure
14. medalie
15. bomboană

For each word, write an image brief with:

- stable word ID;
- display word;
- canonical image path;
- short Romanian alt text;
- category;
- one clear subject;
- specific ambiguity/safety notes from Batch 60;
- pixel-art style requirements from docs/image-pipeline.md.

Then generate one unlabeled contact sheet in the same order. Follow docs/image-pipeline.md:

- refined, lightly dimensional pixel art;
- full square background or transparency;
- circular-safe composition;
- no text, letters, numbers, logos, brands, watermarks, copyrighted characters, clutter, scary content, violence, weapons, injury, police/military framing, medical framing, adult/business framing, or confusing extra objects;
- for locomotivă, show a locomotive engine rather than a duplicate full-train scene;
- for soră, use a generic child-safe family/person depiction;
- for gălușcă, make the dumpling visibly food, not a vague beige blob;
- for fundiță and punguță, keep the shape large and circle-safe;
- for cravată, avoid adult office/business cues;
- for lavetă, distinguish it from burete and avoid dirty-rag framing;
- for porumbel, avoid city mess or droppings;
- for roabă, avoid construction hazards;
- for cabană and pădure, keep the image bright, simple, and non-scary;
- for medalie and bomboană, avoid all text, numbers, labels, and branding;
- compare visually against the current on-brand reference set before asking for review.

Do not crop cells, optimize WebP assets, edit production JSON, add placeholders, change routes, change schema, add speech-target production metadata, add database/auth/billing/admin features, add AI pronunciation, or make clinical claims in Batch 61. Stop after the contact sheet and ask the human to review it.

Update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md, run git diff --check, and provide a ready-to-copy prompt for Batch 62 production promotion and verification.
```
