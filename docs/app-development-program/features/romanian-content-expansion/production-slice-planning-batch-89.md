# Batch 89 Production Slice Planning: Slice 4 D/V Top-Up

Batch: Romanian Content Expansion Batch 89.

Status: planning-only for Slice 4; no production content added.

Last updated: 2026-06-28.

## Scope Guard

Batch 89 is planning-only for Slice 4 from `slice-plan-index-batch-76.md`. It does not add production JSON records, content manifests, image assets, placeholders, route or schema changes, loader changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Slice 4 words, preserving Batch 76 order:

`disc`, `diamant`, `dungă`, `dronă`, `valiză`, `vrabie`, `vulcan`, `val`, `vâslă`, `velier`, `violetă`, `vultur`, `ventuză`, `evantai`, `navă`

Rows stay inactive until a later image-brief/contact-sheet batch, explicit human image review, production promotion, and content validation.

## Source, Spelling, And Duplicate Checks

Source basis:

- Batch 75 marked every Slice 4 row as `priority` or `reserve`, not `hold`.
- Batch 76 selected these rows for Slice 4 and recorded the main risks: `disc`, `dungă`, `val`, and `ventuză` require fixed senses; `dronă` must avoid surveillance or military framing; `vulcan` must avoid disaster/scary framing; `navă` must remain distinct from existing ship and boat words.
- Direct source pages were checked on 2026-06-28 for all planned spellings. dexonline pages confirmed the spellings and usable senses for every row except `evantai`, where the dexonline page could not be extracted through the browser tool; `evantai` was checked against Wikționar, which references DEX '98 via dexonline.
- `disc` has multiple senses. This slice keeps only a child-safe flat circular object / toy flying-disc sense, not an anatomical, religious, train-signal, data-storage, or competitive discus-throwing scene.
- `dungă` is planned as one visible stripe on a child-safe surface, such as a scarf or fabric swatch. It remains active only if the image can read as a single stripe, not an abstract line.
- `dronă` is source-supported through dexonline and DOOM 3. It is active only as a small generic quadcopter toy/gadget with no camera emphasis, no surveillance view, no military color, no weapon, and no emergency framing.
- `val` is planned only as one clear sea/lake wave. Do not use the earthwork, textile roll, or abstract wave-of-events senses.
- `vâslă` is planned only as the boat oar/paddle sense, not the regional grape/grain sense.
- `violetă` is planned as the flower, not a color-only row.
- `ventuză` is source-supported but image-risky because dictionary definitions include medical and animal suction-organ senses. This slice keeps only a simple non-medical suction cup/hook object sense; block later if the image reads as medical treatment, parasite/body anatomy, or an unclear cup.
- `navă` is planned as a large generic ship on water, not a spaceship, aircraft, church nave, warship, pirate ship, or a duplicate-looking `barcă`, `vapor`, or Slice 4 `velier`.

Source labels:

- `S1` dexonline `disc`: https://dexonline.ro/definitie/disc
- `S2` dexonline `diamant`: https://dexonline.ro/definitie/diamant
- `S3` dexonline `dungă`: https://dexonline.ro/definitie/dung%C4%83
- `S4` dexonline `dronă`: https://dexonline.ro/definitie/dron%C4%83
- `S5` dexonline `valiză`: https://dexonline.ro/definitie/valiz%C4%83
- `S6` dexonline `vrabie`: https://dexonline.ro/definitie/vrabie
- `S7` dexonline `vulcan`: https://dexonline.ro/definitie/vulcan
- `S8` dexonline `val`: https://dexonline.ro/definitie/val
- `S9` dexonline `vâslă`: https://dexonline.ro/definitie/vasla
- `S10` dexonline `velier`: https://dexonline.ro/definitie/velier
- `S11` dexonline `violetă`: https://dexonline.ro/definitie/violet%C4%83
- `S12` dexonline `vultur`: https://dexonline.ro/definitie/vultur
- `S13` dexonline `ventuză`: https://dexonline.ro/definitie/ventuz%C4%83
- `S14` Wikționar `evantai`: https://ro.wiktionary.org/wiki/evantai
- `S15` dexonline `navă`: https://dexonline.ro/definitie/nav%C4%83

Duplicate and collision checks:

```txt
Candidate exact words: disc, diamant, dungă, dronă, valiză, vrabie, vulcan, val, vâslă, velier, violetă, vultur, ventuză, evantai, navă
Checked against all current content/ro/words-*.json rows by exact word/display, normalized form, planned ID, and planned image path.
Result: no exact word/display collisions, no normalized collisions, no planned ID collisions, and no planned image-path collisions.
Current totals at audit time: 524 total Romanian records, 521 approved words, 521 ready images, 0 approved placeholders, 3 rejected audit-trail rows.
```

Current baseline coverage before Slice 4 planning:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `D` | 21 | 30 | 51 |
| `V` | 17 | 19 | 36 |
| `E` | 8 | 218 | 226 |
| `N` | 5 | 147 | 152 |

If all Slice 4 rows are later promoted with ready images, the direct starts-with deltas would be `D +4`, `V +9`, `E +1`, and `N +1`.

Notable mixed-pool deltas if all rows are later promoted:

| Target | Before | After | Delta |
| --- | ---: | ---: | ---: |
| `D` | 51 | 55 | +4 |
| `V` | 36 | 47 | +11 |
| `E` | 226 | 231 | +5 |
| `N` | 152 | 159 | +7 |
| `I` | 210 | 217 | +7 |
| `A` | 244 | 251 | +7 |
| `L` | 130 | 137 | +7 |
| `R` | 215 | 219 | +4 |
| `T` | 138 | 143 | +5 |
| `Ă` | 207 | 214 | +7 |
| `Â` | 15 | 16 | +1 |
| `S` | 64 | 66 | +2 |

## Planning Decisions

- All `15` Slice 4 rows remain active planning candidates.
- No row is blocked at this planning stage.
- `disc`, `dungă`, `val`, `ventuză`, and `navă` require stricter human imageability review than the stronger object rows.
- `disc` should be a colorful flat toy disc or simple circular disc, not a music record/CD, sport-throwing event, anatomy cue, religious plate, train signal, or computer disk.
- `diamant` is active as a gemstone row. It is imageable but less functional for ages 4 to 6 than everyday objects, so keep the image simple and non-luxury.
- `dungă` is active only with a concrete support object, preferably one bold stripe on cloth; do not make a free-floating line, road mark, wound/skin crease, or abstract pattern.
- `dronă` is active only as a friendly generic quadcopter. No camera close-up, surveillance screen, soldier, weapon, explosion, camouflage, emergency, or disaster framing.
- `valiză`, `vrabie`, `vâslă`, `velier`, `violetă`, `evantai`, and `diamant` have clear source-supported visual directions and should be straightforward if kept uncluttered.
- `vulcan` is active as a simple educational/nature icon. It may show a calm cone with a tiny red/orange lava cue, but no fleeing people, destroyed homes, ash cloud, fire disaster, lightning, or frightening face.
- `val` must show a single friendly blue wave with sea/lake context. Reject later if it reads as an abstract swirl or if it is too visually close to generic water.
- `vultur` is active as a large bird row, but the image must avoid fierce predator, carcass, heraldic/national, military, or emblematic framing.
- `ventuză` is active but fragile: the image must be a simple suction cup or suction hook on a tile/glass surface, non-medical and non-body-related. If this cannot be made clear at wheel size, block the row before promotion.
- `navă` is active only if the image can distinguish it from existing `barcă` and `vapor`, and from Slice 4 `velier`. Use a larger generic cargo/passenger ship with a hull and bridge, no sails, no steam-paddle cue, no warship, no space/aircraft meaning.

## Planned Canonical Rows

All future production rows should use `source: ["manual"]`, `license: "app-owned"`, `status: "approved"`, and `imageStatus: "ready"` only if promoted with a reviewed final `256 x 256 px` WebP image. Do not promote any row without its accepted final image.

| # | Display | Canonical file | Stable ID | Planned image path | Normalized | Category | Part of speech | Difficulty | Age band | Source plan | Alt text direction |
| ---: | --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
| 1 | `disc` | `content/ro/words-d.json` | `ro-d-disc` | `/images/ro/d/ro-d-disc.webp` | `disc` | `toy` | `noun` | 2 | `4-6` | `S1`, manual, app-owned, approved only with ready image | `Un disc colorat` |
| 2 | `diamant` | `content/ro/words-d.json` | `ro-d-diamant` | `/images/ro/d/ro-d-diamant.webp` | `diamant` | `household` | `noun` | 3 | `4-6` | `S2`, manual, app-owned, approved only with ready image | `Un diamant strălucitor` |
| 3 | `dungă` | `content/ro/words-d.json` | `ro-d-dunga` | `/images/ro/d/ro-d-dunga.webp` | `dunga` | `clothing` | `noun` | 3 | `4-6` | `S3`, manual, app-owned, approved only with ready image | `O dungă pe o eșarfă` |
| 4 | `dronă` | `content/ro/words-d.json` | `ro-d-drona` | `/images/ro/d/ro-d-drona.webp` | `drona` | `toy` | `noun` | 3 | `4-6` | `S4`, manual, app-owned, approved only with ready image | `O dronă mică` |
| 5 | `valiză` | `content/ro/words-v.json` | `ro-v-valiza` | `/images/ro/v/ro-v-valiza.webp` | `valiza` | `household` | `noun` | 1 | `4-6` | `S5`, manual, app-owned, approved only with ready image | `O valiză` |
| 6 | `vrabie` | `content/ro/words-v.json` | `ro-v-vrabie` | `/images/ro/v/ro-v-vrabie.webp` | `vrabie` | `animal` | `noun` | 1 | `4-6` | `S6`, manual, app-owned, approved only with ready image | `O vrabie` |
| 7 | `vulcan` | `content/ro/words-v.json` | `ro-v-vulcan` | `/images/ro/v/ro-v-vulcan.webp` | `vulcan` | `nature` | `noun` | 2 | `4-6` | `S7`, manual, app-owned, approved only with ready image | `Un vulcan simplu` |
| 8 | `val` | `content/ro/words-v.json` | `ro-v-val` | `/images/ro/v/ro-v-val.webp` | `val` | `nature` | `noun` | 2 | `4-6` | `S8`, manual, app-owned, approved only with ready image | `Un val albastru` |
| 9 | `vâslă` | `content/ro/words-v.json` | `ro-v-vasla` | `/images/ro/v/ro-v-vasla.webp` | `vasla` | `vehicle` | `noun` | 2 | `4-6` | `S9`, manual, app-owned, approved only with ready image | `O vâslă de lemn` |
| 10 | `velier` | `content/ro/words-v.json` | `ro-v-velier` | `/images/ro/v/ro-v-velier.webp` | `velier` | `vehicle` | `noun` | 2 | `4-6` | `S10`, manual, app-owned, approved only with ready image | `Un velier cu pânze` |
| 11 | `violetă` | `content/ro/words-v.json` | `ro-v-violeta` | `/images/ro/v/ro-v-violeta.webp` | `violeta` | `nature` | `noun` | 2 | `4-6` | `S11`, manual, app-owned, approved only with ready image | `O violetă mov` |
| 12 | `vultur` | `content/ro/words-v.json` | `ro-v-vultur` | `/images/ro/v/ro-v-vultur.webp` | `vultur` | `animal` | `noun` | 2 | `4-6` | `S12`, manual, app-owned, approved only with ready image | `Un vultur cu aripile deschise` |
| 13 | `ventuză` | `content/ro/words-v.json` | `ro-v-ventuza` | `/images/ro/v/ro-v-ventuza.webp` | `ventuza` | `household` | `noun` | 3 | `4-6` | `S13`, manual, app-owned, approved only with ready image | `O ventuză simplă` |
| 14 | `evantai` | `content/ro/words-e.json` | `ro-e-evantai` | `/images/ro/e/ro-e-evantai.webp` | `evantai` | `household` | `noun` | 2 | `4-6` | `S14`, manual, app-owned, approved only with ready image | `Un evantai deschis` |
| 15 | `navă` | `content/ro/words-n.json` | `ro-n-nava` | `/images/ro/n/ro-n-nava.webp` | `nava` | `vehicle` | `noun` | 3 | `4-6` | `S15`, manual, app-owned, approved only with ready image | `O navă mare pe apă` |

## Speech Target And Image Brief Planning

| Display | Primary target | Secondary targets | Target positions | Syllables | Clusters | Image brief direction | Risks and notes |
| --- | --- | --- | --- | ---: | --- | --- | --- |
| `disc` | `D` | `S`, `C` | `D` initial; `S/C` medial/final cluster | 1 | final `sc` | Centered colorful toy flying disc or plain flat circular disc, large simple shape. | Sense must be fixed; avoid CD/record, anatomy, train, sport event, religious plate, or data-storage cues. |
| `diamant` | `D` | `M`, `T`, `A` | `D` initial; `M/T` medial/final; `A` repeated | 3 | none | Single faceted gemstone, bright but simple, no jewelry brand, no crown/wealth scene. | Less functional child vocabulary; keep as a clean object, not luxury/adult framing. |
| `dungă` | `D` | `G`, `Ă` | `D` initial; `G` medial; `Ă` final | 2 | none | One bold stripe on a scarf/fabric swatch, with surrounding fabric visible. | Can be too abstract; block if it reads as line, wound, crease, road mark, or generic pattern. |
| `dronă` | `D` | `R`, `N`, `Ă` | `D` initial; `R/N` medial; `Ă` final | 2 | `dr` | Small friendly quadcopter toy/gadget, centered, simple propellers. | Avoid surveillance, camera focus, military, weapon, emergency, disaster, camouflage, or scary framing. |
| `valiză` | `V` | `L`, `Z`, `Ă` | `V` initial; `L/Z` medial; `Ă` final | 3 | none | Simple suitcase with handle and wheels, no text, no travel stickers/logos. | Strong child-fit object; keep distinct from existing `geamantan` by using canonical label only in metadata. |
| `vrabie` | `V` | `R`, `B` | `V` initial cluster; `R/B` medial | 3 | `vr` | Small brown sparrow on a branch or ground, friendly and simple. | Good animal row; avoid too much feather detail at wheel size. |
| `vulcan` | `V` | `L`, `C`, `N` | `V` initial; `L/C/N` medial/final | 2 | none | Simple cone-shaped volcano with a small calm lava glow, blue sky, no people. | Must avoid disaster/scary framing, destruction, ash storm, fire spread, panic, or monster face. |
| `val` | `V` | `L` | `V` initial; `L` final | 1 | none | One clear blue wave on water, big silhouette, maybe small foam crest. | Abstract risk; avoid generic swirl, storm, tsunami, or crowded seascape. |
| `vâslă` | `V` | `S`, `L`, `Ă`, `Â` | `V` initial; `S/L` medial; `Ă` final; `Â` medial | 2 | `sl` | One wooden oar/paddle, maybe beside simple water, fully inside circular safe area. | Long thin object; needs circular crop padding and no boat clutter. |
| `velier` | `V` | `L`, `R`, `E` | `V` initial; `L/R` medial/final; `E` repeated | 3 | none | Small sailboat with one or two sails on calm water, clear mast and sail silhouette. | Must stay distinct from `barcă`, `vapor`, and later `navă`; no text or flags. |
| `violetă` | `V` | `T`, `Ă` | `V` initial; `T` medial; `Ă` final | 3 | none | Purple violet flower with green leaves, centered, one clear blossom or small cluster. | Avoid color-only prompt and avoid confusing with generic flower if possible. |
| `vultur` | `V` | `L`, `T`, `R` | `V` initial; `L/T/R` medial/final | 2 | none | Large bird with wings open, calm expression, perched or gliding. | Avoid fierce predator details, carcass/prey, heraldry, national emblem, military symbol, or scary talons. |
| `ventuză` | `V` | `T`, `Z`, `Ă` | `V` initial; `T/Z` medial; `Ă` final | 3 | none | Simple suction cup or suction hook on a clean tile/glass square, object-only. | Highest imageability/safety risk in slice; avoid medical cup, body/skin, parasite, plumbing tool, or unclear goblet. |
| `evantai` | `V` | `E`, `T` | `V` medial; `E` initial; `T` medial | 3 | none | Open folding hand fan in semicircle, simple ribs, no pattern text. | Keep gender-neutral and non-branded; no tiny decorative details. |
| `navă` | `V` | `N`, `Ă` | `V` medial; `N` initial; `Ă` final | 2 | none | Large generic cargo/passenger ship on water, hull plus bridge, no sails. | Must be visually distinct from existing `barcă` and `vapor` and Slice 4 `velier`; avoid warship, pirate ship, spaceship, aircraft, church nave. |

## Route, Loader, And Validation Impact

Planning-only Batch 89 has no immediate route, loader, schema, content validation, gameplay, matching, setup-storage, build, or browser-route impact.

If later promoted, affected manifests and routes are:

- `content/ro/words-d.json` and `/ro/play/d`
- `content/ro/words-v.json` and `/ro/play/v`
- `content/ro/words-e.json` and `/ro/play/e`
- `content/ro/words-n.json` and `/ro/play/n`

Final public images would be added under matching canonical `public/images/ro/<letter>/` folders. No new route aliases, letter manifests, loaders, schema fields, placeholder rules, or speech-target production metadata should be needed.

Promotion validation must verify:

- schema shape and required metadata;
- unique IDs and normalized values;
- canonical starting-letter bucket placement for `d`, `v`, `e`, and `n`;
- `word`, `display`, `normalized`, `id`, and image path consistency;
- `source`, `license`, `status`, and `imageStatus` values;
- image paths exist for all approved rows;
- final images are `.webp`, `256 x 256 px`, and within documented size limits;
- no placeholder image is introduced;
- `/ro/play/d`, `/ro/play/v`, `/ro/play/e`, `/ro/play/n`, `/admin/words`, and `/admin/releases/2` reflect the promoted rows after production changes.

## Active Image-Brief Candidate List

No rows are blocked in Batch 89. Active candidates for the next image-brief/contact-sheet batch, preserving order:

1. `disc`
2. `diamant`
3. `dungă`
4. `dronă`
5. `valiză`
6. `vrabie`
7. `vulcan`
8. `val`
9. `vâslă`
10. `velier`
11. `violetă`
12. `vultur`
13. `ventuză`
14. `evantai`
15. `navă`

## Ready-To-Copy Next Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 90.

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
docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-89.md

Task: Batch 90 image briefs and one unlabeled contact sheet for Batch 89 Slice 4 only.

Create image briefs and one unlabeled review contact sheet for these active Slice 4 candidates, preserving order:
disc, diamant, dungă, dronă, valiză, vrabie, vulcan, val, vâslă, velier, violetă, vultur, ventuză, evantai, navă.

Constraints:
- Do not edit production JSON, content manifests, route/schema/loader code, shared status docs, or public production WebP assets.
- Do not crop cells or optimize final assets.
- Do not add placeholders.
- Do not make clinical claims.
- Follow docs/image-pipeline.md: high-clarity child-friendly pixel art, square cells, full square backgrounds or transparency, no text, no numbers, no logos, no brands, no copyrighted characters, one centered subject per cell, clear at wheel size, and circular-mask-safe composition.
- Pay special attention to risks recorded in production-slice-planning-batch-89.md: `disc` must be a flat toy/circular disc, not a CD/record/anatomy/sport-event cue; `dungă` must be a concrete stripe on fabric or another child-safe object; `dronă` must avoid surveillance, military, weapon, emergency, or disaster framing; `vulcan` must avoid disaster/scary framing; `val` must be one clear wave; `vâslă` needs circular-safe composition as a long object; `vultur` must avoid fierce/heraldic/national framing; `ventuză` must be a simple non-medical suction cup/hook and must not read as body, parasite, plumbing, or medical treatment; `navă` must be distinct from existing `barcă` and `vapor` and from Slice 4 `velier`.
- Stop after creating the review contact sheet and brief document. Ask for human image validation before any production promotion.

After writing, run git diff --check and report changed files plus verification results.
```

## Verification

Batch 89 is documentation-only. Verification passed on 2026-06-28:

```txt
git diff --check
```
