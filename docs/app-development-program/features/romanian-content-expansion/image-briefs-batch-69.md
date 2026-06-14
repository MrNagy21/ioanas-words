# Batch 69 Image Briefs And Contact Sheet

Batch: Romanian Content Expansion Batch 69.

Status: complete; accepted cells and corrective variants promoted in Batch 70.

Last updated: 2026-06-13.

## Scope Guard

Batch 69 is review-only. It does not add production JSON records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

The planned source slice is `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-68.md`. After human review, `răchită` was removed from the active promotion candidate list, so Batch 70 must not promote it from the original contact sheet.

## Global Image Requirements

- refined, lightly dimensional pixel art compatible with the current production pack;
- one centered subject per square cell;
- full square background or transparency, with no gutters, side bars, rectangular panels, or cut-background artifacts inside cells;
- subject must fit comfortably inside the inscribed circle of each square cell so circular UI masks clip only background;
- no labels, captions, text, letters, numbers, logos, watermarks, brands, copyrighted characters, clutter, scary content, violence, weapons, injury, police/military framing, medical framing, adult/business framing, or confusing extra objects;
- use varied soft colors and local-color outlines;
- compare against the production reference direction from `docs/image-pipeline.md`, especially current string, instrument, insect, clothing, tool, and nature/object icons.

## Contact Sheet

Review contact sheet:

- `assets/image-sources/ro/batch-69/contact-sheet.png`

The sheet is ordered row-major according to the table below. The cells are intentionally unlabeled; use this table for review mapping.

Comparison sheet:

- `assets/image-sources/ro/batch-69/comparison-sheet.png`

The comparison sheet mixes representative existing production assets with selected Batch 69 cells for style/scale review only. It is not a crop source for production promotion.

Corrective contact sheet:

- `assets/image-sources/ro/batch-69/corrective-contact-sheet-1.png`

The corrective sheet is ordered row-major as:

1. `gingie` variant A
2. `gingie` variant B
3. `gingie` variant C
4. `gingie` variant D
5. `rășină` variant A
6. `rășină` variant B
7. `rășină` variant C
8. `rășină` variant D

The corrective sheet is the review source for `gingie` and `rășină` only. The human selected the first image for both words, and Batch 70 promoted those two first corrective variants.

## Review Notes

Initial visual check:

- all `15` original cells are present in the requested row-major order;
- the contact sheet has no labels, captions, letters, numbers, logos, or watermarks;
- all cells use full square backgrounds with generous gutters;
- the overall style is close to the current refined pixel-art production direction;
- subjects are generally padded for circular UI masks;
- cell `14` / `gingie` was rejected for clarity because it did not show gums strongly enough;
- cell `7` / `dudă` needs human confirmation that it reads as mulberry rather than generic berry cluster;
- cell `10` / `rășină` needs a stronger tree-origin cue so it does not read as honey or syrup;
- cell `11` / `bondar` should be checked against existing `albină` and `viespe` for a fuzzy bumblebee reading;
- cell `6` / `daltă` is a tool and should be checked for child-safe static presentation, though it does not show action or injury.

Human review attention points:

- cell `1` / `șnur`: confirm it reads as cord/string and not `șiret`, rope toy, or cable;
- cell `2` / `țambal`: confirm it reads as the intended instrument, not a tray, board game, or generic stringed table;
- cell `3` / `țipar`: confirm it reads as an eel-like fish and not a worm or snake;
- cell `4` / `dantelă`: confirm lace holes/details stay readable without looking like a doily duplicate or wedding object;
- cell `5` / `degetar`: confirm thimble reading is clear;
- cell `6` / `daltă`: confirm safe static chisel reading and circular crop comfort;
- cell `7` / `dudă`: confirm mulberry reading and not grapes/blackberries;
- cell `8` / `jder`: confirm marten-like animal reading and non-scary mood;
- cell `9` / `jambiere`: confirm pair-of-leg-warmers reading and not socks/boots/medical braces;
- cell `10` / `rășină`: confirm resin-on-bark reading and not honey/syrup;
- cell `11` / `bondar`: confirm fuzzy bumblebee reading distinct from `albină` and `viespe`;
- cell `12` / `cojoc`: confirm coat/garment reading and not generic jacket only;
- cell `13` / `bijuterie`: confirm one jewelry item is acceptable and not too adult/luxury;
- cell `14` / `gingie`: confirm gum/gingiva meaning is visible without medical/scary framing;
- cell `15` / `răchită` was removed from the active slice because the word is too unfamiliar and not inferable enough from a no-label image.

Human feedback and corrective pass:

- `gingie` must clearly refer to gums, not just teeth or lips.
- `rășină` must more clearly show resin coming from a tree, bark, or trunk.
- `răchită` must be completely removed from this production slice; do not crop or promote the original cell.
- Generated `assets/image-sources/ro/batch-69/corrective-contact-sheet-1.png` with four `gingie` variants in the top row and four `rășină` variants in the bottom row.
- The human selected the first corrective `gingie` image and the first corrective `rășină` image.
- Visual self-check: all four `gingie` variants show prominent pink gum tissue around teeth; all four `rășină` variants show amber resin attached to bark, trunk, or cut wood; all corrective cells have full square backgrounds and comfortable circular-mask padding.

Brand/style comparison note:

- `comparison-sheet.png` was generated from existing production references plus selected Batch 69 cells.
- The Batch 69 cells are broadly compatible with the existing pack in palette, outline weight, dimensionality, and subject scale.
- The remaining review risks are semantic rather than style-only: `dudă`, corrected `rășină`, corrected `gingie`, `țambal`, and `jambiere`.

## Briefs

| # | Stable ID | Display | Planned image path | Alt text | Category | One clear subject | Safety and ambiguity notes |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | `ro-sh-snur` | `șnur` | `/images/ro/ș/ro-sh-snur.webp` | `Un șnur colorat.` | `household` | One twisted colorful cord/string segment. | Distinct from `șiret`; no shoe, cable, plug, knot clutter, or toy scene. |
| 2 | `ro-tz-tambal` | `țambal` | `/images/ro/ț/ro-tz-tambal.webp` | `Un țambal simplu.` | `toy` | One small cimbalom-like instrument with tiny mallets. | No musician, stage, text, dense strings, or confusing board/tray reading. |
| 3 | `ro-tz-tipar` | `țipar` | `/images/ro/ț/ro-tz-tipar.webp` | `Un țipar prietenos.` | `animal` | One eel-like fish in side view. | No scary teeth, hook, fishing scene, dark water, or snake/worm ambiguity if avoidable. |
| 4 | `ro-d-dantela` | `dantelă` | `/images/ro/d/ro-d-dantela.webp` | `O bucată de dantelă albă.` | `clothing` | One small white lace strip or folded lace fabric. | No wedding dress, adult scene, busy repeating pattern, or unreadable detail. |
| 5 | `ro-d-degetar` | `degetar` | `/images/ro/d/ro-d-degetar.webp` | `Un degetar metalic.` | `household` | One metal sewing thimble with dotted texture. | No finger, needle action, sharp needle, sewing clutter, or medical cap reading. |
| 6 | `ro-d-dalta` | `daltă` | `/images/ro/d/ro-d-dalta.webp` | `O daltă simplă.` | `household` | One static chisel tool with handle and metal blade. | No hand, hammer strike, injury cue, workshop clutter, or sharp-action framing. |
| 7 | `ro-d-duda` | `dudă` | `/images/ro/d/ro-d-duda.webp` | `O dudă coaptă pe o frunză.` | `food` | One ripe mulberry or tiny cluster on a leaf. | Avoid generic grape/blackberry reading, stains, jam, branch clutter, or berry pile. |
| 8 | `ro-j-jder` | `jder` | `/images/ro/j/ro-j-jder.webp` | `Un jder prietenos.` | `animal` | One small friendly marten-like animal in side view. | No hunting, teeth, dark forest, scary pose, or extra animals. |
| 9 | `ro-j-jambiere` | `jambiere` | `/images/ro/j/ro-j-jambiere.webp` | `O pereche de jambiere mov.` | `clothing` | One pair of soft leg warmers. | No person required, no medical brace, sports injury cue, socks/boots confusion, or logo. |
| 10 | `ro-r-rasina` | `rășină` | `/images/ro/r/ro-r-rasina.webp` | `O picătură de rășină pe scoarță.` | `nature` | One amber resin drop clearly attached to tree bark, trunk, or cut wood. | Use a human-accepted corrective variant only; no honey/syrup reading, trapped insect, wound, sticky mess, or dark forest. |
| 11 | `ro-b-bondar` | `bondar` | `/images/ro/b/ro-b-bondar.webp` | `Un bondar pufos.` | `animal` | One fuzzy round bumblebee. | Distinct from existing `albină` and `viespe`; no sting attack, swarm, fear marks, or scary face. |
| 12 | `ro-c-cojoc` | `cojoc` | `/images/ro/c/ro-c-cojoc.webp` | `Un cojoc simplu.` | `clothing` | One simple sheepskin coat garment. | No person stereotype, costume scene, cultural clutter, or text. |
| 13 | `ro-b-bijuterie` | `bijuterie` | `/images/ro/b/ro-b-bijuterie.webp` | `O bijuterie cu pandantiv.` | `clothing` | One simple pendant necklace or bead bracelet. | No luxury/adult framing, gem pile, money, tiny clutter, logo, or text. |
| 14 | `ro-g-gingie` | `gingie` | `/images/ro/g/ro-g-gingie.webp` | `O gingie roz lângă dinți.` | `body` | One clean simplified mouth or tooth-row detail with prominent pink gum tissue. | Use a human-accepted corrective variant only; no blood, dental tools, pain, medical setting, scary close-up, or tooth-only reading. |

Removed from active promotion:

| Display | Original planned path | Reason |
| --- | --- | --- |
| `răchită` | `/images/ro/r/ro-r-rachita.webp` | Human rejected as too unfamiliar and not inferable enough from no-label art. |

## Generation Prompt

```txt
Create one unlabeled 5-column by 3-row contact sheet for a children's Romanian vocabulary game. The sheet contains exactly 15 equal square cells in row-major order, with generous pale gutters between cells. No labels, captions, text, letters, numbers, logos, watermarks, or brands anywhere.

Global style: high-clarity cheerful handcrafted pixel art, polished educational game icon style, lightly dimensional, visible refined 96x96 to 128x128 pixel-art construction upscaled cleanly, clean silhouettes, rounded friendly shapes, simple readable details, soft playful varied colors, darkened local-color outlines, simple highlights, one small contact shadow only if useful. Each cell is a complete square icon background in very pale warm off-white or very pale sky-blue; the background must fill the full square cell, not a smaller rectangle or cut-out.

Circular safety: each subject must fit comfortably inside the inscribed circle of its square cell. Leave generous padding near corners and edges so a circular UI mask clips only background, never the important subject. Long or wide objects should be centered and scaled down so they remain safe inside a circular thumbnail.

Audience and safety: children ages 4 to 6. One clear subject per cell. No text, letters, numbers, logos, watermarks, brands, copyrighted characters, clutter, scary mood, violence, weapons, injury, police/military framing, medical framing, adult/business framing, realistic 3D render, photorealism, emoji style, blurry edges, low contrast, noisy dithering, or extra unrelated objects.

Cells in exact row-major order:
1. twisted cord/string: one colorful twisted cord segment, clear rope/string object; no shoe, no plug, no electrical cable, no big knot clutter, distinct from a shoelace.
2. țambal/cimbalom instrument: one simple small trapezoid string instrument with two tiny mallets; no musician, no stage, no text, no dense unreadable strings.
3. eel-like fish: one friendly eel-like fish in side view; no scary teeth, no hook, no fishing scene, no murky dark water, no danger mood.
4. lace fabric: one small white lace strip or folded lace fabric with simple holes; no wedding dress, no adult scene, no busy repeating pattern tile.
5. thimble: one small metal sewing thimble with dotted texture; no finger, no needle action, no sharp needle, no sewing clutter.
6. chisel tool: one static chisel with wood handle and metal blade, presented safely; no hand, no hammer strike, no sharp action, no injury cue, no workshop clutter.
7. mulberry fruit: one ripe mulberry or very small cluster on a simple green leaf; no generic berry pile, no jam, no stain, no branch clutter.
8. marten-like animal: one small friendly marten-like animal in side view, warm brown fur, long body and tail; no hunting, no teeth, no dark forest, no scary pose.
9. leg warmers: one pair of soft leg warmers / jambiere garment pieces, standing or folded clearly as clothing; no person, no medical brace, no sports injury cue.
10. tree resin: one amber drop of resin on a clean piece of tree bark; no sticky mess, no trapped insect, no wound, no dark forest.
11. bumblebee: one friendly round fuzzy bumblebee with yellow-black body, distinct from a smooth wasp and from a honeybee; no sting attack, no swarm, no fear marks.
12. sheepskin coat: one simple traditional sheepskin coat garment, front view, warm wool trim; no person, no stereotype, no costume scene, no cultural clutter.
13. jewelry item: one simple child-safe jewelry item such as a pendant necklace or bead bracelet; no luxury/adult framing, no gem pile, no money, no tiny detail clutter.
14. gum/gingiva: one clean simplified smiling mouth detail showing pink gum near white teeth; no blood, no dental tools, no pain, no medical setting, no scary close-up.
15. willow/osier branch: one simple willow/răchită branch or small bundle of flexible twigs with green leaves; no basket, no dense tree scene, no clutter.
```

Generation metadata:

- generation mode: built-in `image_gen` tool;
- generated source path: `/Users/darius/.codex/generated_images/019eb5dc-2504-7cc1-8942-b7f414803d47/ig_0f18b80ea7c4e35d016a2cedeaa7dc8191906733df479da847.png`;
- workspace review copy: `assets/image-sources/ro/batch-69/contact-sheet.png`;
- corrective generated source path: `/Users/darius/.codex/generated_images/019eb5dc-2504-7cc1-8942-b7f414803d47/ig_0693e77be75a245a016a2cf18d05208191801e95d54ae82500.png`;
- corrective workspace review copy: `assets/image-sources/ro/batch-69/corrective-contact-sheet-1.png`;
- generated date: 2026-06-13;
- reviewer status: accepted; first corrective `gingie` and first corrective `rășină` selected by the human;
- production status: promoted in Batch 70 for `14` active cells; `răchită` removed and not promoted.

## Batch 70 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 69.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-68.md
6. docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-69.md
7. docs/app-development-program/features/romanian-content-expansion/status.md
8. docs/status.md

Goal:

Execute Batch 70 only after the human has reviewed `assets/image-sources/ro/batch-69/contact-sheet.png` and `assets/image-sources/ro/batch-69/corrective-contact-sheet-1.png` and explicitly accepted cells or variants. Promote only human-accepted cells.

Use the Batch 69 original contact-sheet row-major mapping:

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
15. răchită - removed, do not promote

Use the Batch 69 corrective contact-sheet row-major mapping:

1. gingie variant A
2. gingie variant B
3. gingie variant C
4. gingie variant D
5. rășină variant A
6. rășină variant B
7. rășină variant C
8. rășină variant D

Active promotion candidates:

1. șnur - original contact sheet cell 1
2. țambal - original contact sheet cell 2
3. țipar - original contact sheet cell 3
4. dantelă - original contact sheet cell 4
5. degetar - original contact sheet cell 5
6. daltă - original contact sheet cell 6
7. dudă - original contact sheet cell 7
8. jder - original contact sheet cell 8
9. jambiere - original contact sheet cell 9
10. rășină - human-accepted corrective variant only
11. bondar - original contact sheet cell 11
12. cojoc - original contact sheet cell 12
13. bijuterie - original contact sheet cell 13
14. gingie - human-accepted corrective variant only

Removed candidate:

- răchită - do not crop, do not optimize, and do not add a production JSON row.

Tasks:

- Record the human acceptance/rejection decision for every active original cell and every corrective variant.
- For accepted original cells only, crop from the original contact sheet in fixed order.
- For accepted `gingie` and `rășină` variants only, crop from `corrective-contact-sheet-1.png`; do not use the first-sheet `gingie` or `rășină` cells unless the human explicitly reverses that decision.
- Follow docs/image-pipeline.md exactly: normalize full-square backgrounds, preserve padding, check thumbnail readability, run circular-mask QA, process through the refined pixel-art workflow, and promote `256 x 256 px` lossless WebP files.
- Add production JSON rows only for accepted cells, using the canonical files, IDs, normalized forms, categories, difficulty values, image paths, and alt text from Batch 68 and Batch 69.
- Do not promote rejected, unclear, or removed cells; if any cell needs regeneration, keep that work review-only in a later focused image batch.
- Run `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Verify `http://localhost:3000` routes only if the expected dev server is running on port `3000`; if sandboxed localhost checks fail, retry outside the sandbox before marking the server unavailable. Do not start another server or use another port.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with totals, asset sizes, verification, and the next prompt.

Do not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
```
