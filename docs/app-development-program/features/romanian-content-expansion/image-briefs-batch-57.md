# Batch 57 Image Briefs And Contact Sheet

Batch: Romanian Content Expansion Batch 57.

Status: complete; accepted cells promoted in Batch 58.

Last updated: 2026-06-12.

## Scope Guard

Batch 57 is review-only. It does not add production JSON records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

The planned source slice is `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-56.md`.

## Global Image Requirements

- refined, lightly dimensional pixel art compatible with the current production pack;
- one centered subject per square cell;
- full square background or transparency, with no gutters, side bars, rectangular panels, or cut-background artifacts inside cells;
- subject must fit comfortably inside the inscribed circle of each square cell so circular UI masks clip only background;
- no labels, captions, text, letters, numbers, logos, watermarks, brands, copyrighted characters, clutter, scary content, violence, weapons, injury, police/military framing, medical framing, or confusing extra objects;
- use varied soft colors and local-color outlines;
- compare against the production reference direction from `docs/image-pipeline.md`, including recent accepted household, food, clothing, animal, and object icons such as `ceainic`, `rucsac`, `role`, `sită`, `dovlecel`, `kimono`, `vestă`, `vânătă`, `tren`, and `căsuță`.

## Contact Sheet

Review contact sheet:

- `assets/image-sources/ro/batch-57/contact-sheet.png`

The sheet is ordered row-major according to the table below. The cells are intentionally unlabeled; use this table for review mapping.

Corrective review contact sheet:

- `assets/image-sources/ro/batch-57/corrective-contact-sheet-1.png`

The corrective sheet is ordered row-major:

1. `dormitor`
2. `brățară`
3. `sticlă`
4. `vișine`

## Review Notes

Initial visual check:

- all `15` cells are present in the requested row-major order;
- the sheet has no labels, captions, letters, numbers, logos, or watermarks;
- all cells use full square backgrounds with no cut panels;
- the overall style is close to the current refined pixel-art production direction;
- subjects are generally padded for circular UI masks.

Human review attention points:

- cell `6` / `bancă`: the bench is wide; confirm the seat, back, and legs remain comfortable inside the circular crop;
- cell `10` / `sticlă`: confirm the bottle reads as a general intact bottle/water bottle and not branded packaging;
- cell `11` / `șină`: the track is diagonal and edge-heavy; confirm a circular mask clips only background/non-meaningful edge space;
- cell `12` / `vierme`: confirm the friendly face is acceptable and does not make the animal too character-like.

Human feedback on the first contact sheet:

- `dormitor` needs to better represent a bedroom; the first sheet reads too much as just a bed.
- `brățară` should be on a hand; the first sheet is too vague.
- `sticlă` should be a glass bottle; the first sheet reads more like `flacon`.
- `vișine` needs review because it may read as `cireșe`.
- All other first-sheet cells are accepted in principle, pending later circular-mask QA during promotion.

Corrective generation notes:

- The corrective `dormitor` cell adds bedroom context: bed, lamps, wardrobe, rug, and window.
- The corrective `brățară` cell shows the bracelet on a wrist/hand, per human direction.
- The corrective `sticlă` cell uses a transparent blue-tinted glass bottle with cork/stopper.
- The corrective `vișine` cell uses darker deep-red fruit and a cut/open fruit cue. This is the strongest no-label visual cue available, but the distinction between `vișine` and `cireșe` remains inherently ambiguous for some children. If exact recognition is critical, use `cireșe` instead of `vișine` or defer the row.

## Briefs

| # | Stable ID | Display | Planned image path | Alt text | Category | One clear subject | Safety and ambiguity notes |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | `ro-b-biberon` | `biberon` | `/images/ro/b/ro-b-biberon.webp` | `Un biberon simplu.` | `household` | One baby bottle with simple cap and nipple shape. | No baby, feeding scene, measurement text, label, letters, or brand. |
| 2 | `ro-b-borcan` | `borcan` | `/images/ro/b/ro-b-borcan.webp` | `Un borcan cu capac.` | `household` | One clear jar with lid. | Optional simple contents are acceptable; no label, text, brand, or clutter. |
| 3 | `ro-b-burete` | `burete` | `/images/ro/b/ro-b-burete.webp` | `Un burete de curățat.` | `household` | One bright household cleaning sponge. | Avoid dirty sink, mold, mushroom reading, bath scene, or extra cleaning tools. |
| 4 | `ro-b-brad` | `brad` | `/images/ro/b/ro-b-brad.webp` | `Un brad verde.` | `nature` | One plain evergreen fir tree. | No ornaments, gifts, lights, text, snowstorm, or holiday-only cues. |
| 5 | `ro-b-bluza` | `bluză` | `/images/ro/b/ro-b-bluza.webp` | `O bluză simplă.` | `clothing` | One simple blouse or top garment in front view. | No person, logo, pattern text, military/workwear reading, or brand. |
| 6 | `ro-b-banca` | `bancă` | `/images/ro/b/ro-b-banca.webp` | `O bancă de parc.` | `household` | One simple park bench with seat and backrest. | Park bench sense only; no money, bank building, school desk, person, city clutter, or text. |
| 7 | `ro-d-dormitor` | `dormitor` | `/images/ro/d/ro-d-dormitor.webp` | `Un dormitor cu pat.` | `household` | Simple bedroom icon centered on a bed. | Nightstand is acceptable; no person, messy room, dark/scary night scene, window text, or clutter. |
| 8 | `ro-p-periuta` | `periuță` | `/images/ro/p/ro-p-periuta.webp` | `O periuță de dinți.` | `household` | One toothbrush. | No toothpaste brand, teeth/mouth close-up, bathroom clutter, or text. |
| 9 | `ro-b-bratara` | `brățară` | `/images/ro/b/ro-b-bratara.webp` | `O brățară colorată.` | `clothing` | One simple bracelet object. | Must be distinct from `braț`; no hand/person, luxury jewelry display, brand, or text. |
| 10 | `ro-s-sticla` | `sticlă` | `/images/ro/s/ro-s-sticla.webp` | `O sticlă întreagă.` | `household` | One intact bottle, preferably empty or filled with water. | Bottle sense only; no broken glass, alcohol shape, label, text, window pane, or material-only sheet. |
| 11 | `ro-sh-sina` | `șină` | `/images/ro/ș/ro-sh-sina.webp` | `O șină de tren.` | `vehicle` | One short piece of railway track or rail. | Rail/train-track sense only; no train, danger scene, abstract stripe, road, or metal strip. |
| 12 | `ro-v-vierme` | `vierme` | `/images/ro/v/ro-v-vierme.webp` | `Un vierme prietenos.` | `animal` | One friendly worm on a clean simple ground patch. | No decay, parasite framing, scary face, messy soil, or gross details. |
| 13 | `ro-v-visine` | `vișine` | `/images/ro/v/ro-v-visine.webp` | `Două vișine roșii.` | `food` | A small pair or cluster of sour cherries with stems. | No label, package, jam jar, or generic red-berry ambiguity. |
| 14 | `ro-p-papuci` | `papuci` | `/images/ro/p/ro-p-papuci.webp` | `O pereche de papuci.` | `clothing` | One pair of simple house slippers. | No feet, brand, shoe store scene, outdoor boots, outdoor sandals, or text. |
| 15 | `ro-l-ladita` | `lădiță` | `/images/ro/l/ro-l-ladita.webp` | `O lădiță de lemn.` | `household` | One small wooden or plastic crate/box with open top. | No drawer, coffin-like shape, cluttered storage scene, label, or text. |

## Generation Prompt

```txt
Create one unlabeled 5-column by 3-row contact sheet for a children's Romanian vocabulary game. The sheet contains exactly 15 equal square cells in row-major order, with generous pale gutters between cells. No labels, captions, text, letters, numbers, logos, watermarks, or brands anywhere.

Global style: high-clarity cheerful handcrafted pixel art, polished educational game icon style, lightly dimensional, visible refined 96x96 to 128x128 pixel-art construction upscaled cleanly, clean silhouettes, rounded friendly shapes, simple readable details, soft playful varied colors, darkened local-color outlines, simple highlights, one small contact shadow only if useful. Each cell is a complete square icon background in very pale warm off-white or very pale sky-blue; the background must fill the full square cell, not a smaller rectangle or cut-out.

Circular safety: each subject must fit comfortably inside the inscribed circle of its square cell. Leave generous padding near corners and edges so a circular UI mask clips only background, never the important subject. Long or wide objects should be centered and scaled down so they remain safe inside a circular thumbnail.

Audience and safety: children ages 4 to 6. One clear subject per cell. No text, letters, numbers, logos, watermarks, brands, copyrighted characters, clutter, scary mood, violence, weapons, injury, police/military framing, medical framing, realistic 3D render, photorealism, emoji style, blurry edges, low contrast, noisy dithering, or extra unrelated objects.

Cells in exact row-major order:
1. baby bottle: one baby bottle with simple cap and nipple shape; no baby, no feeding scene, no measurement marks, no letters, no label.
2. jar: one clear jar with lid, optionally simple jam or pickles inside; no label, text, brand, or clutter.
3. cleaning sponge: one bright rectangular household sponge; no dirty sink, mold, mushroom, bath scene, or extra cleaning tools.
4. fir tree: one plain evergreen fir tree; no ornaments, gifts, lights, text, snowstorm, or holiday-only cues.
5. blouse/top garment: one simple blouse or shirt-like top, front view; no person, logo, pattern text, military or workwear reading, or brand.
6. park bench: one simple park bench with seat and backrest; no money, bank building, school desk, person, city clutter, or text.
7. bedroom: simple bedroom icon centered on one bed and maybe tiny nightstand; no person, messy room, dark/scary night scene, window text, or clutter.
8. toothbrush: one toothbrush; no toothpaste brand, no teeth or mouth close-up, no bathroom clutter, no text.
9. bracelet: one simple bracelet object, round or oval, distinct from an arm; no hand, person, luxury jewelry display, brand, or text.
10. bottle: one intact bottle, preferably empty or filled with water; no broken glass, alcohol bottle shape, label, text, window pane, or material-only sheet.
11. railway track rail: one short piece of railway track or rail, with sleepers if helpful; no train, danger scene, abstract stripe, road, or metal strip.
12. friendly worm: one friendly worm on a clean simple ground patch; no decay, parasite framing, scary face, messy soil, or gross details.
13. sour cherries: a small pair or cluster of sour cherries with stems; no label, package, jam jar, or generic red-berry ambiguity.
14. house slippers: one pair of simple house slippers; no feet, brand, shoe store scene, outdoor boots, outdoor sandals, or text.
15. small crate: one small wooden or plastic crate/box with open top; no drawer, coffin-like shape, cluttered storage scene, label, or text.
```

## Corrective Generation Prompt

```txt
Create one unlabeled 4-column by 1-row corrective contact sheet for a children's Romanian vocabulary game. The sheet contains exactly 4 equal square cells in row-major order, with generous pale gutters between cells. No labels, captions, text, letters, numbers, logos, watermarks, or brands anywhere.

Global style: high-clarity cheerful handcrafted pixel art, polished educational game icon style, lightly dimensional, visible refined 96x96 to 128x128 pixel-art construction upscaled cleanly, clean silhouettes, rounded friendly shapes, simple readable details, soft playful varied colors, darkened local-color outlines, simple highlights, one small contact shadow only if useful. Each cell is a complete square icon background in very pale warm off-white or very pale sky-blue; the background must fill the full square cell, not a smaller rectangle or cut-out.

Circular safety: each subject must fit comfortably inside the inscribed circle of its square cell. Leave generous padding near corners and edges so a circular UI mask clips only background, never the important subject. Wide or diagonal subjects should be centered and scaled down so they remain safe inside a circular thumbnail.

Audience and safety: children ages 4 to 6. One clear subject concept per cell. No text, letters, numbers, logos, watermarks, brands, copyrighted characters, clutter, scary mood, violence, weapons, injury, police/military framing, medical framing, realistic 3D render, photorealism, emoji style, blurry edges, low contrast, noisy dithering, or extra unrelated objects.

Cells in exact row-major order:
1. bedroom: show a clear bedroom, not just a single bed. Include a bed plus bedroom context such as a bedside table, small lamp, rug, and maybe a simple wardrobe/window, still clean and uncluttered. No person, messy room, dark/scary night scene, text, or clutter.
2. bracelet on hand: show a simple colorful bracelet worn on a child-safe hand/wrist so it clearly reads as a bracelet. Only the wrist/hand segment is visible, no full person, no rings, no watch, no luxury jewelry display, no brand, no text.
3. glass bottle: show a clear glass bottle, not a plastic water bottle or flacon. Use transparent blue-tinted glass, visible neck and cork or simple stopper, maybe water shine highlights. No label, no alcohol bottle shape, no broken glass, no medicine/perfume/flacon reading, no text.
4. sour cherries / vișine: show a small cluster of darker deep-red sour cherries, slightly smaller and darker than sweet cherries, with thin stems and one cut/open cherry showing dark red flesh/juice to signal sour cherry. No label, no package, no jam jar, no generic bright cherry pair, no text.
```

## Batch 58 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 57.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-56.md
6. docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-57.md
7. docs/app-development-program/features/romanian-content-expansion/status.md
8. docs/status.md

Goal:

Execute Batch 58 only after the human has reviewed `assets/image-sources/ro/batch-57/contact-sheet.png` and explicitly accepted cells. Promote only human-accepted cells.

Use the Batch 57 row-major mapping:

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

Tasks:

- Record the human acceptance/rejection decision for every cell.
- For accepted cells only, crop from the contact sheet in fixed order.
- Follow docs/image-pipeline.md exactly: normalize full-square backgrounds, preserve padding, check thumbnail readability, run circular-mask QA, process through the refined pixel-art workflow, and promote `256 x 256 px` lossless WebP files.
- Add production JSON rows only for accepted cells, using the canonical files, IDs, normalized forms, categories, difficulty values, image paths, and alt text from Batch 56 and Batch 57.
- Do not promote rejected or unclear cells; if any cell needs regeneration, keep that work review-only in a later focused image batch.
- Run `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check`.
- Verify `http://localhost:3000` routes only if the expected dev server is running on port `3000`; if sandboxed localhost checks fail, retry outside the sandbox before marking the server unavailable. Do not start another server or use another port.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with totals, asset sizes, verification, and the next prompt.

Do not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
```

## Human Review And Promotion

The human approved the corrective sheet on 2026-06-12 with the instruction: "perfect go on".

Promotion details are recorded in:

- `docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-58.md`
