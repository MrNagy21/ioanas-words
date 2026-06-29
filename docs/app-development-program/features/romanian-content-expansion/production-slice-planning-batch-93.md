# Batch 93 Production Slice Planning: Slice 5 V/F Top-Up

Batch: Romanian Content Expansion Batch 93.

Status: planning-only for Slice 5; no production content added.

Last updated: 2026-06-28.

## Scope Guard

Batch 93 is planning-only for Slice 5 from `slice-plan-index-batch-76.md`. It does not add production JSON records, content manifests, image assets, placeholders, route or schema changes, loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Slice 5 words, preserving Batch 76 order:

`șuviță`, `movilă`, `servietă`, `farfurie`, `fereastră`, `făină`, `fermă`, `frate`, `fotografie`, `foarfecă`, `fântână`, `focă`, `afine`, `bufniță`, `cartof`

Rows stay inactive until a later image-brief/contact-sheet batch, orchestrator image QA, production promotion, and content validation.

## Source, Spelling, And Duplicate Checks

Source basis:

- Batch 75 marked every Slice 5 row as `priority` or `reserve`, not `hold`.
- Batch 76 selected these rows for Slice 5 and recorded the main risks: `șuviță`, `movilă`, `servietă`, `frate`, `fotografie`, and `fântână` need strict imageability/sense checks; `frate` is a person row and needs style consistency review; `servietă` must not skew too adult-office if accepted.
- Direct source pages were checked on 2026-06-28 for all planned spellings. dexonline pages confirmed the spellings and usable senses for every row except `farfurie`, where the dexonline page could not be extracted through the browser tool; `farfurie` was checked against Wikționar.
- `șuviță` is planned as one small lock of hair, ideally on a simple child-safe head/hair cue, not loose abstract hair strands.
- `movilă` is planned as a small rounded mound of earth or sand, not a large hill, grave, construction pile, or ambiguous brown blob.
- `servietă` is planned as a school satchel / small school bag sense, not an adult office briefcase.
- `frate` is planned as a child sibling row. It must use a friendly boy/older-child sibling cue and avoid adult portrait, family-role ambiguity, or gender stereotypes beyond the noun's grammatical meaning.
- `fotografie` is planned as a simple photo print or framed photo with a generic landscape/object inside, not a camera, phone screen, ID photo, or text-bearing document.
- `fântână` is planned as a small outdoor water fountain/well with visible basin/water, not a dark deep well, unsafe hole, disaster/water leak, or medical drinking fountain.

Source labels:

- `S1` dexonline `șuviță`: https://dexonline.ro/definitie/%C8%99uvi%C8%9B%C4%83
- `S2` dexonline `movilă`: https://dexonline.ro/definitie/movil%C4%83
- `S3` dexonline `servietă`: https://dexonline.ro/definitie/serviet%C4%83
- `S4` Wikționar `farfurie`: https://ro.wiktionary.org/wiki/farfurie
- `S5` dexonline `fereastră`: https://dexonline.ro/definitie/fereastr%C4%83
- `S6` dexonline `făină`: https://dexonline.ro/definitie/f%C4%83in%C4%83
- `S7` dexonline `fermă`: https://dexonline.ro/definitie/ferm%C4%83
- `S8` dexonline `frate`: https://dexonline.ro/definitie/frate
- `S9` dexonline `fotografie`: https://dexonline.ro/definitie/fotografie
- `S10` dexonline `foarfecă`: https://dexonline.ro/definitie/foarfec%C4%83
- `S11` dexonline `fântână`: https://dexonline.ro/definitie/f%C3%A2nt%C3%A2n%C4%83
- `S12` dexonline `focă`: https://dexonline.ro/definitie/foc%C4%83
- `S13` dexonline `afine`: https://dexonline.ro/definitie/afine
- `S14` dexonline `bufniță`: https://dexonline.ro/definitie/bufni%C8%9B%C4%83
- `S15` dexonline `cartof`: https://dexonline.ro/definitie/cartof

Duplicate and collision checks:

```txt
Candidate exact words: șuviță, movilă, servietă, farfurie, fereastră, făină, fermă, frate, fotografie, foarfecă, fântână, focă, afine, bufniță, cartof
Checked against all current content/ro/words-*.json rows by exact word/display, normalized form, planned ID, and planned image path.
Result: no exact word/display collisions, no normalized collisions, no planned ID collisions, and no planned image-path collisions.
Current totals at audit time: 539 total Romanian records, 536 approved words, 536 ready images, 0 approved placeholders, 3 rejected audit-trail rows.
```

Current baseline coverage before Slice 5 planning:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `Ș` | 18 | 32 | 50 |
| `M` | 26 | 58 | 84 |
| `S` | 25 | 41 | 66 |
| `F` | 18 | 15 | 33 |
| `A` | 18 | 233 | 251 |
| `B` | 36 | 37 | 73 |
| `C` | 70 | 95 | 165 |
| `V` | 26 | 21 | 47 |

If all Slice 5 rows are later promoted with ready images, the direct starts-with deltas would be `Ș +1`, `M +1`, `S +1`, `F +9`, `A +1`, `B +1`, and `C +1`.

Notable mixed-pool deltas if all rows are later promoted:

| Target | Before | After | Delta |
| --- | ---: | ---: | ---: |
| `F` | 33 | 45 | +12 |
| `Ă` | 214 | 224 | +10 |
| `R` | 219 | 227 | +8 |
| `I` | 217 | 225 | +8 |
| `A` | 251 | 258 | +7 |
| `T` | 143 | 149 | +6 |
| `N` | 159 | 163 | +4 |
| `V` | 47 | 50 | +3 |
| `C` | 165 | 168 | +3 |
| `Ș` | 50 | 51 | +1 |
| `M` | 84 | 86 | +2 |
| `S` | 66 | 68 | +2 |

## Planning Decisions

- All `15` Slice 5 rows remain active planning candidates.
- No row is blocked at this planning stage.
- `șuviță`, `movilă`, `servietă`, `frate`, `fotografie`, and `fântână` require stricter imageability review than the stronger single-object rows.
- `șuviță` remains active only if the image clearly reads as a lock of hair. Use a simple hair/head cue; avoid loose strands that could read as thread, string, or dirt.
- `movilă` remains active as a small mound of earth or sand. It must not look like a grave, pile of waste, mountain, hill landscape, or generic brown blob.
- `servietă` remains active only in a child/school direction, such as a simple school satchel or small school bag. Avoid adult office, laptop bag, business papers, money, brand, or legal/professional cues.
- `farfurie`, `fereastră`, `făină`, `fermă`, `foarfecă`, `focă`, `afine`, `bufniță`, and `cartof` have clear source-supported visual directions and should be straightforward if kept uncluttered.
- `fermă` is a small scene rather than a single object; keep the image to one simple barn/fence/field cue with low object count.
- `frate` is a person row. It must be child-safe, friendly, and consistent with existing person rows; avoid adult portrait, baby-only cue, multiple siblings if that confuses the singular label, and any family-structure claim beyond a generic boy sibling.
- `fotografie` should show the photo print as the object, not a camera. The image inside the photo should be generic and text-free.
- `foarfecă` must be child-safe scissors with rounded tips or a classroom craft feel, not sharp adult scissors in a dangerous pose.
- `fântână` uses the fountain/well sense but must avoid unsafe depth or dark holes. A small outdoor fountain/well with a basin and water is acceptable.

## Planned Canonical Rows

All future production rows should use `source: ["manual"]`, `license: "app-owned"`, `status: "approved"`, and `imageStatus: "ready"` only if promoted with a reviewed final `256 x 256 px` WebP image. Do not promote any row without its accepted final image.

| # | Display | Canonical file | Stable ID | Planned image path | Normalized | Category | Part of speech | Difficulty | Age band | Source plan | Alt text direction |
| ---: | --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
| 1 | `șuviță` | `content/ro/words-ș.json` | `ro-sh-suvita` | `/images/ro/ș/ro-sh-suvita.webp` | `suvita` | `body` | `noun` | 3 | `4-6` | `S1`, manual, app-owned, approved only with ready image | `O șuviță de păr` |
| 2 | `movilă` | `content/ro/words-m.json` | `ro-m-movila` | `/images/ro/m/ro-m-movila.webp` | `movila` | `nature` | `noun` | 3 | `4-6` | `S2`, manual, app-owned, approved only with ready image | `O movilă mică de pământ` |
| 3 | `servietă` | `content/ro/words-s.json` | `ro-s-servieta` | `/images/ro/s/ro-s-servieta.webp` | `servieta` | `school` | `noun` | 3 | `4-6` | `S3`, manual, app-owned, approved only with ready image | `O servietă de școală` |
| 4 | `farfurie` | `content/ro/words-f.json` | `ro-f-farfurie` | `/images/ro/f/ro-f-farfurie.webp` | `farfurie` | `household` | `noun` | 1 | `4-6` | `S4`, manual, app-owned, approved only with ready image | `O farfurie simplă` |
| 5 | `fereastră` | `content/ro/words-f.json` | `ro-f-fereastra` | `/images/ro/f/ro-f-fereastra.webp` | `fereastra` | `household` | `noun` | 1 | `4-6` | `S5`, manual, app-owned, approved only with ready image | `O fereastră cu perdele` |
| 6 | `făină` | `content/ro/words-f.json` | `ro-f-faina` | `/images/ro/f/ro-f-faina.webp` | `faina` | `food` | `noun` | 2 | `4-6` | `S6`, manual, app-owned, approved only with ready image | `Un bol cu făină` |
| 7 | `fermă` | `content/ro/words-f.json` | `ro-f-ferma` | `/images/ro/f/ro-f-ferma.webp` | `ferma` | `nature` | `noun` | 2 | `4-6` | `S7`, manual, app-owned, approved only with ready image | `O fermă cu hambar` |
| 8 | `frate` | `content/ro/words-f.json` | `ro-f-frate` | `/images/ro/f/ro-f-frate.webp` | `frate` | `family` | `noun` | 2 | `4-6` | `S8`, manual, app-owned, approved only with ready image | `Un frate zâmbitor` |
| 9 | `fotografie` | `content/ro/words-f.json` | `ro-f-fotografie` | `/images/ro/f/ro-f-fotografie.webp` | `fotografie` | `household` | `noun` | 2 | `4-6` | `S9`, manual, app-owned, approved only with ready image | `O fotografie într-o ramă` |
| 10 | `foarfecă` | `content/ro/words-f.json` | `ro-f-foarfeca` | `/images/ro/f/ro-f-foarfeca.webp` | `foarfeca` | `school` | `noun` | 2 | `4-6` | `S10`, manual, app-owned, approved only with ready image | `O foarfecă pentru hârtie` |
| 11 | `fântână` | `content/ro/words-f.json` | `ro-f-fantana` | `/images/ro/f/ro-f-fantana.webp` | `fantana` | `nature` | `noun` | 3 | `4-6` | `S11`, manual, app-owned, approved only with ready image | `O fântână cu apă` |
| 12 | `focă` | `content/ro/words-f.json` | `ro-f-foca` | `/images/ro/f/ro-f-foca.webp` | `foca` | `animal` | `noun` | 1 | `4-6` | `S12`, manual, app-owned, approved only with ready image | `O focă prietenoasă` |
| 13 | `afine` | `content/ro/words-a.json` | `ro-a-afine` | `/images/ro/a/ro-a-afine.webp` | `afine` | `food` | `noun` | 1 | `4-6` | `S13`, manual, app-owned, approved only with ready image | `Afine albastre` |
| 14 | `bufniță` | `content/ro/words-b.json` | `ro-b-bufnita` | `/images/ro/b/ro-b-bufnita.webp` | `bufnita` | `animal` | `noun` | 2 | `4-6` | `S14`, manual, app-owned, approved only with ready image | `O bufniță prietenoasă` |
| 15 | `cartof` | `content/ro/words-c.json` | `ro-c-cartof` | `/images/ro/c/ro-c-cartof.webp` | `cartof` | `food` | `noun` | 1 | `4-6` | `S15`, manual, app-owned, approved only with ready image | `Un cartof` |

## Speech Target And Image Brief Planning

| Display | Primary target | Secondary targets | Target positions | Syllables | Clusters | Image brief direction | Risks and notes |
| --- | --- | --- | --- | ---: | --- | --- | --- |
| `șuviță` | `Ș` | `V`, `Ț`, `Ă` | `Ș` initial; `V/Ț` medial; `Ă` final | 3 | none | One lock of hair on a simple head/hair cue, large and clear, no face detail needed. | Visually subtle; avoid thread/string or loose hair mess. |
| `movilă` | `V` | `M`, `L`, `Ă` | `V` medial; `M` initial; `L` medial; `Ă` final | 3 | none | Small rounded mound of earth or sand on simple ground, maybe one tiny grass tuft. | Abstract risk; avoid grave, trash pile, mountain, or generic blob. |
| `servietă` | `V` | `S`, `T`, `Ă` | `V` medial; `S` initial; `T` medial; `Ă` final | 3 | none | Child school satchel or small school bag, no papers/text, no adult office setting. | Must not skew adult-business. |
| `farfurie` | `F` | `R` | `F` initial; `R` medial | 4 | none | Simple plate, maybe with colored rim or a small safe food cue. | Strong object; avoid text/pattern clutter. |
| `fereastră` | `F` | `R`, `S`, `Ă` | `F` initial; `R/S` medial; `Ă` final | 3 | `str` | Window with curtains and sky outside, centered as an object. | Strong object; no house facade clutter. |
| `făină` | `F` | `Ă`, `N` | `F` initial; `Ă` medial; `N` medial/final | 2 | none | Bowl or small pile of white flour with spoon, no text bag. | Avoid sugar/salt confusion by using flour dust/bowl. |
| `fermă` | `F` | `R`, `M`, `Ă` | `F` initial; `R/M` medial; `Ă` final | 2 | none | Simple red barn/farm scene with fence/field, very low detail. | Scene row; keep readable at wheel size. |
| `frate` | `F` | `R`, `T` | `F` initial cluster; `R/T` medial | 2 | `fr` | Friendly boy sibling figure, simple child portrait or standing child. | Person row; style consistency and child-safe framing required. |
| `fotografie` | `F` | `T`, `G`, `R` | `F` initial; `T/G/R` medial | 5 | none | One photo print or framed photo showing a generic mountain/flower, no text. | Long word but concrete; image must be photo object, not camera. |
| `foarfecă` | `F` | `R`, `C`, `Ă` | `F` initial; `R/C` medial; `Ă` final | 3 | none | Child-safe scissors for paper, rounded tips, centered. | Avoid weapon-like angle or sharp danger cue. |
| `fântână` | `F` | `Â`, `T`, `N`, `Ă` | `F` initial; `Â/T/N` medial; `Ă` final | 3 | `nt` | Small outdoor water fountain/well with basin and visible water, bright setting. | Choose safe fountain/well sense; no deep dark hole. |
| `focă` | `F` | `C`, `Ă` | `F` initial; `C` medial; `Ă` final | 2 | none | Friendly seal animal sitting on ice/rock, no circus. | Strong animal row; avoid performance props. |
| `afine` | `F` | `A`, `N` | `F` medial; `A` initial; `N` medial | 3 | none | Blueberries in a small pile or bowl, large round berries. | Plural natural food row; avoid grapes. |
| `bufniță` | `F` | `B`, `N`, `Ț`, `Ă` | `F` medial; `B` initial; `N/Ț` medial; `Ă` final | 3 | none | Friendly owl with big eyes on a branch, non-scary. | Avoid night/scary mood. |
| `cartof` | `F` | `C`, `R`, `T` | `F` final; `C` initial; `R/T` medial | 2 | `rt` | One or two potatoes, earthy but clean, simple shape. | Strong food row; avoid rocks. |

## Route, Loader, And Validation Impact

Planning-only Batch 93 has no immediate route, loader, schema, content validation, gameplay, matching, setup-storage, build, or browser-route impact.

If later promoted, affected manifests and routes are:

- `content/ro/words-ș.json` and `/ro/play/sh`
- `content/ro/words-m.json` and `/ro/play/m`
- `content/ro/words-s.json` and `/ro/play/s`
- `content/ro/words-f.json` and `/ro/play/f`
- `content/ro/words-a.json` and `/ro/play/a`
- `content/ro/words-b.json` and `/ro/play/b`
- `content/ro/words-c.json` and `/ro/play/c`

Final public images would be added under matching canonical `public/images/ro/<letter>/` folders. No new route aliases, letter manifests, loaders, schema fields, placeholder rules, or speech-target production metadata should be needed.

Promotion validation must verify:

- schema shape and required metadata;
- unique IDs and normalized values;
- canonical starting-letter bucket placement for `ș`, `m`, `s`, `f`, `a`, `b`, and `c`;
- `word`, `display`, `normalized`, `id`, and image path consistency;
- `source`, `license`, `status`, and `imageStatus` values;
- image paths exist for all approved rows;
- final images are `.webp`, `256 x 256 px`, and within documented size limits;
- no placeholder image is introduced;
- `/ro/play/sh`, `/ro/play/m`, `/ro/play/s`, `/ro/play/f`, `/ro/play/a`, `/ro/play/b`, `/ro/play/c`, `/admin/words`, and `/admin/releases/2` reflect the promoted rows after production changes.

## Active Image-Brief Candidate List

No rows are blocked in Batch 93. Active candidates for the next image-brief/contact-sheet batch, preserving order:

1. `șuviță`
2. `movilă`
3. `servietă`
4. `farfurie`
5. `fereastră`
6. `făină`
7. `fermă`
8. `frate`
9. `fotografie`
10. `foarfecă`
11. `fântână`
12. `focă`
13. `afine`
14. `bufniță`
15. `cartof`

## Ready-To-Copy Next Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 94.

Read:
AGENTS.md
docs/agent-brief.md
docs/spec.md
docs/plan.md
docs/status.md
docs/image-pipeline.md
docs/app-development-program/speech-therapy-content-guidance.md
docs/app-development-program/features/romanian-content-expansion/spec.md
docs/app-development-program/features/romanian-content-expansion/plan.md
docs/app-development-program/features/romanian-content-expansion/status.md
docs/app-development-program/features/romanian-content-expansion/high-value-target-top-up-worksheet-batch-75.md
docs/app-development-program/features/romanian-content-expansion/implementation-orchestrator-prompt-batch-76.md
docs/app-development-program/features/romanian-content-expansion/slice-plan-index-batch-76.md
docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-93.md

Task: Batch 94 image briefs, one unlabeled contact sheet, production promotion, and QA for Batch 93 Slice 5 only.

Create image briefs and one unlabeled contact sheet for these active Slice 5 candidates, preserving order:
șuviță, movilă, servietă, farfurie, fereastră, făină, fermă, frate, fotografie, foarfecă, fântână, focă, afine, bufniță, cartof.

The human has waived the separate image-approval stop for orchestrator-run image batches, but QA is not waived. Proceed through image generation, circular-mask QA, production promotion, validation, and documentation unless a critical exception appears.

Constraints:
- Do not add placeholders.
- Do not make clinical claims.
- Follow docs/image-pipeline.md: high-clarity child-friendly pixel art, square cells, full square backgrounds or transparency, no text, no numbers, no logos, no brands, no copyrighted characters, one centered subject per cell, clear at wheel size, and circular-mask-safe composition.
- Pay special attention to risks recorded in production-slice-planning-batch-93.md: `șuviță` must read as a lock of hair, not thread/string; `movilă` must avoid grave/trash/mountain/blob readings; `servietă` must be school-like, not adult office; `fermă` is a small scene row; `frate` is a person row and needs style consistency; `fotografie` must be the photo object, not a camera; `foarfecă` must be child-safe; `fântână` must use a safe fountain/well sense with no dark deep hole.
- Crop only accepted cells, optimize final `256 x 256 px` lossless `.webp` assets under canonical paths, add only the active rows to production JSON, update `/admin/releases/2`, update content-derived fixtures only if tests require it, write promotion and QA docs, update statuses, run all required verification, and perform localhost checks against `http://localhost:3000`.

After writing, run:
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run check:setup-storage
pnpm run build
git diff --check
```

## Verification

Batch 93 is documentation-only. Verification passed on 2026-06-28:

```txt
git diff --check
```
