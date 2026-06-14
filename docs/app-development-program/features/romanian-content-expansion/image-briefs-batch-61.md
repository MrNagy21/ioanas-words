# Batch 61 Image Briefs And Contact Sheet

Batch: Romanian Content Expansion Batch 61.

Status: complete; accepted cells promoted in Batch 62.

Last updated: 2026-06-12.

## Scope Guard

Batch 61 is review-only. It does not add production JSON records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

The planned source slice is `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-60.md`.

## Global Image Requirements

- refined, lightly dimensional pixel art compatible with the current production pack;
- one centered subject per square cell;
- full square background or transparency, with no gutters, side bars, rectangular panels, or cut-background artifacts inside cells;
- subject must fit comfortably inside the inscribed circle of each square cell so circular UI masks clip only background;
- no labels, captions, text, letters, numbers, logos, watermarks, brands, copyrighted characters, clutter, scary content, violence, weapons, injury, police/military framing, medical framing, adult/business framing, or confusing extra objects;
- use varied soft colors and local-color outlines;
- compare against the production reference direction from `docs/image-pipeline.md`, including recent accepted household, food, clothing, animal, vehicle, and object icons such as `biberon`, `brad`, `brățară`, `sticlă`, `șină`, `vierme`, `papuci`, `lădiță`, `tren`, `supă`, and `rucsac`.

## Contact Sheet

Review contact sheet:

- `assets/image-sources/ro/batch-61/contact-sheet.png`

The sheet is ordered row-major according to the table below. The cells are intentionally unlabeled; use this table for review mapping.

Corrective review contact sheet:

- `assets/image-sources/ro/batch-61/corrective-contact-sheet-1.png`

The corrective sheet is ordered row-major with four replacement options for `gălușcă` only. Each cell should show one singular `gălușcă` in a spoon.

## Review Notes

Initial visual check:

- all `15` cells are present in the requested row-major order;
- the sheet has no labels, captions, letters, numbers, logos, or watermarks;
- all cells use full square backgrounds with no cut panels;
- the overall style is close to the current refined pixel-art production direction;
- subjects are generally padded for circular UI masks.

Human review attention points:

- cell `1` / `locomotivă`: confirm it reads as a locomotive engine and does not duplicate the recent full `tren` image too closely;
- cell `3` / `soră`: confirm the generic child/person depiction is acceptable for a family-word row;
- cell `4` / `gălușcă`: confirm the dumpling reads as food and not a vague beige shape;
- cell `5` / `fundiță`: confirm the bow remains large and clear inside a circular crop;
- cell `6` / `punguță`: confirm it reads as a small bag/pouch rather than a purse or branded package;
- cell `7` / `covor`: the rug is diagonal with tassels; confirm a circular mask clips only background or non-meaningful fringe;
- cell `8` / `cravată`: confirm there is no adult office/business framing;
- cell `9` / `lavetă`: confirm it is distinct from the existing `burete` image;
- cells `12` / `cabană` and `13` / `pădure`: confirm the scene icons stay bright, simple, and non-scary.

Human feedback on the first contact sheet:

- All cells are pretty good except `gălușcă`.
- `gălușcă` should emphasize the singular noun more clearly.
- The first corrective attempt looked too much like `gomboț`; do not use a round dessert-dumpling shape.
- The human liked the spoon direction; use one singular `gălușcă` in a spoon.

Corrective generation notes:

- `corrective-contact-sheet-1.png` contains four spoon-based singular `gălușcă` options.
- The intended direction is one soft, irregular, pale soup dumpling in a spoon, not multiple dumplings and not a round stuffed dessert dumpling.
- The first sheet's other `14` cells are accepted in principle, pending normal circular-mask QA during promotion.

Human final decision:

- The human accepted the second spoon-based corrective direction with: "That's better, any of the ones would do, please go on".
- Batch 62 used the third corrective spoon-based `gălușcă` cell and promoted the other `14` accepted cells from the first sheet.

## Briefs

| # | Stable ID | Display | Planned image path | Alt text | Category | One clear subject | Safety and ambiguity notes |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | `ro-l-locomotiva` | `locomotivă` | `/images/ro/l/ro-l-locomotiva.webp` | `O locomotivă colorată.` | `vehicle` | One locomotive engine. | Avoid duplicating a full train scene; no smoke overload, railway danger, logo, text, or crowded background. |
| 2 | `ro-s-sac` | `sac` | `/images/ro/s/ro-s-sac.webp` | `Un sac simplu.` | `household` | One simple sack or bag. | No brand, label, money bag, trash, clutter, letters, or text. |
| 3 | `ro-s-sora` | `soră` | `/images/ro/s/ro-s-sora.webp` | `O soră zâmbitoare.` | `family` | Friendly generic sister/child figure. | No real-person likeness, no baby-care scene, no stereotypes, no text. |
| 4 | `ro-g-galusca` | `gălușcă` | `/images/ro/g/ro-g-galusca.webp` | `O gălușcă pe farfurie.` | `food` | One or a few dumplings in a simple bowl or plate. | Must read as food; avoid soup clutter, vague beige blob, label, or text. |
| 5 | `ro-f-fundita` | `fundiță` | `/images/ro/f/ro-f-fundita.webp` | `O fundiță colorată.` | `clothing` | One clear bow/ribbon accessory. | No hair/person required, no tiny strands, no gift-label text, no brand. |
| 6 | `ro-p-punguta` | `punguță` | `/images/ro/p/ro-p-punguta.webp` | `O punguță mică.` | `household` | One small pouch or bag. | No package label, shopping logo, candy branding, purse confusion, or text. |
| 7 | `ro-c-covor` | `covor` | `/images/ro/c/ro-c-covor.webp` | `Un covor colorat.` | `household` | One rug, either rolled or flat. | Distinguish from blanket/towel; no room scene, text, or busy pattern. |
| 8 | `ro-c-cravata` | `cravată` | `/images/ro/c/ro-c-cravata.webp` | `O cravată simplă.` | `clothing` | One necktie object. | No adult office scene, suit body, business/money context, logo, or pattern text. |
| 9 | `ro-l-laveta` | `lavetă` | `/images/ro/l/ro-l-laveta.webp` | `O lavetă curată.` | `household` | One folded cleaning cloth. | Distinguish from sponge; no dirty rag, chemical bottle, sink clutter, or text. |
| 10 | `ro-p-porumbel` | `porumbel` | `/images/ro/p/ro-p-porumbel.webp` | `Un porumbel prietenos.` | `animal` | One friendly pigeon/dove-like bird. | No city mess, droppings, crowded flock, scary mood, or text. |
| 11 | `ro-r-roaba` | `roabă` | `/images/ro/r/ro-r-roaba.webp` | `O roabă goală.` | `outdoor` | One empty wheelbarrow. | No construction danger, person, heavy load, clutter, logo, or text. |
| 12 | `ro-c-cabana` | `cabană` | `/images/ro/c/ro-c-cabana.webp` | `O cabană luminoasă.` | `place` | One small friendly cabin. | Bright daylight only; no dark forest, abandoned house, smoke/fire, or complex landscape. |
| 13 | `ro-p-padure` | `pădure` | `/images/ro/p/ro-p-padure.webp` | `O pădure verde.` | `nature` | Small group of bright trees representing a forest. | No scary woods, night, wild animals, clutter, or text. |
| 14 | `ro-m-medalie` | `medalie` | `/images/ro/m/ro-m-medalie.webp` | `O medalie cu panglică.` | `object` | One medal with ribbon. | No letters, numbers, flag, military framing, brand, podium, or text. |
| 15 | `ro-b-bomboana` | `bomboană` | `/images/ro/b/ro-b-bomboana.webp` | `O bomboană ambalată.` | `food` | One wrapped candy or two simple candies. | No brand, text, choking-risk scene, pile clutter, or adult sweet packaging. |

## Generation Prompt

```txt
Create one unlabeled 5-column by 3-row contact sheet for a children's Romanian vocabulary game. The sheet contains exactly 15 equal square cells in row-major order, with generous pale gutters between cells. No labels, captions, text, letters, numbers, logos, watermarks, or brands anywhere.

Global style: high-clarity cheerful handcrafted pixel art, polished educational game icon style, lightly dimensional, visible refined 96x96 to 128x128 pixel-art construction upscaled cleanly, clean silhouettes, rounded friendly shapes, simple readable details, soft playful varied colors, darkened local-color outlines, simple highlights, one small contact shadow only if useful. Each cell is a complete square icon background in very pale warm off-white or very pale sky-blue; the background must fill the full square cell, not a smaller rectangle or cut-out.

Circular safety: each subject must fit comfortably inside the inscribed circle of its square cell. Leave generous padding near corners and edges so a circular UI mask clips only background, never the important subject. Long or wide objects should be centered and scaled down so they remain safe inside a circular thumbnail.

Audience and safety: children ages 4 to 6. One clear subject per cell. No text, letters, numbers, logos, watermarks, brands, copyrighted characters, clutter, scary mood, violence, weapons, injury, police/military framing, medical framing, adult/business framing, realistic 3D render, photorealism, emoji style, blurry edges, low contrast, noisy dithering, or extra unrelated objects.

Cells in exact row-major order:
1. locomotive engine: one colorful locomotive engine, not a full train scene; no smoke overload, railway danger, logo, text, or crowded background.
2. sack: one simple sack or bag, tied or open; no brand, label, money bag, trash, or clutter.
3. sister: one friendly generic child/sister figure; no real-person likeness, no baby-care scene, no stereotypes, no text.
4. dumpling: one or a few dumplings in a simple bowl or plate; clearly food, not a vague beige blob, no soup clutter or text.
5. bow/ribbon: one clear bow accessory, large and centered; no hair/person required, no tiny strands, no gift-label text.
6. small pouch/bag: one small pouch or bag; no package label, shopping logo, candy branding, purse confusion, or text.
7. rug: one rolled or flat rug with simple pattern; no room scene, no blanket/towel confusion, no text.
8. necktie: one simple necktie object; no adult office scene, suit body, business/money context, logo, or pattern text.
9. cleaning cloth: one folded clean colorful cloth; distinct from a sponge, no dirty rag, chemical bottle, sink clutter, or text.
10. pigeon/dove: one friendly pigeon or dove-like bird; no city mess, droppings, crowded flock, scary mood, or text.
11. wheelbarrow: one empty wheelbarrow with clear wheel and handles; no construction danger, person, heavy load, or clutter.
12. cabin: one small friendly cabin in bright daylight; no dark forest, abandoned house, smoke/fire, or complex landscape.
13. forest: a small group of bright green trees representing a forest; no scary woods, night, wild animals, clutter, or text.
14. medal: one medal with ribbon; no letters, numbers, flag, military framing, brand, podium, or text.
15. wrapped candy: one wrapped candy or two simple candies; no brand, text, choking-risk scene, pile clutter, or adult sweet packaging.
```

## Batch 62 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 61.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-60.md
6. docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-61.md
7. docs/app-development-program/features/romanian-content-expansion/status.md
8. docs/status.md

Goal:

Execute Batch 62 only after the human has reviewed `assets/image-sources/ro/batch-61/contact-sheet.png` and `assets/image-sources/ro/batch-61/corrective-contact-sheet-1.png` and explicitly accepted cells. Promote only human-accepted cells.

Use the Batch 61 row-major mapping:

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

Tasks:

- Record the human acceptance/rejection decision for every cell.
- For accepted first-sheet cells only, crop from the contact sheet in fixed order.
- For `gălușcă`, use only the human-accepted corrective cell from `corrective-contact-sheet-1.png`; do not promote the original first-sheet `gălușcă` cell unless the human explicitly reverses that decision.
- Follow docs/image-pipeline.md exactly: normalize full-square backgrounds, preserve padding, check thumbnail readability, run circular-mask QA, process through the refined pixel-art workflow, and promote `256 x 256 px` lossless WebP files.
- Add production JSON rows only for accepted cells, using the canonical files, IDs, normalized forms, categories, difficulty values, image paths, and alt text from Batch 60 and Batch 61.
- Do not promote rejected or unclear cells; if any cell needs regeneration, keep that work review-only in a later focused image batch.
- Run `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check`.
- Verify `http://localhost:3000` routes only if the expected dev server is running on port `3000`; if sandboxed localhost checks fail, retry outside the sandbox before marking the server unavailable. Do not start another server or use another port.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with totals, asset sizes, verification, and the next prompt.

Do not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
```
