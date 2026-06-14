# Batch 53 Image Briefs And Contact Sheet

Batch: Romanian Content Expansion Batch 53.

Status: complete; all cells human-approved and promoted in Batch 54.

Last updated: 2026-06-11.

## Scope Guard

Batch 53 is review-only. It does not add production JSON records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

The planned source slice is `docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-52.md`.

## Global Image Requirements

- refined, lightly dimensional pixel art compatible with the current production pack;
- one centered subject per square cell;
- full square background or transparency, with no gutters, side bars, rectangular panels, or cut-background artifacts inside cells;
- subject must fit comfortably inside the inscribed circle of each square cell so circular UI masks clip only background;
- no labels, captions, text, letters, numbers, logos, watermarks, brands, copyrighted characters, clutter, scary content, violence, weapons, injury, police/military framing, medical framing, or confusing extra objects;
- use varied soft colors and local-color outlines;
- compare against the production reference direction from `docs/image-pipeline.md`, including `cozonac`, `cățel`, `cadă`, `buchet`, `castravete`, `jachetă`, `umbrelă`, `scaun`, and `vacă`.

## Contact Sheet

Review contact sheet:

- `assets/image-sources/ro/batch-53/contact-sheet.png`

The sheet is ordered row-major according to the table below. The cells are intentionally unlabeled; use this table for review mapping.

## Review Notes

Initial visual check:

- all `15` cells are present in the requested row-major order;
- the sheet has no labels, captions, letters, numbers, logos, or watermarks;
- all cells use full square backgrounds with no cut panels;
- subjects are generally padded for circular UI masks.

Human review attention points:

- cell `2` / `lopată`: check that the diagonal shovel remains comfortable inside a circular crop;
- cell `6` / `rac`: may read as a lobster more than a Romanian crayfish; accept only if the broader `rac` animal reading is acceptable;
- cell `11` / `sare`: check that the shaker reads as salt, not sugar, despite the no-label constraint;
- cell `12` / `semințe`: check thumbnail readability because individual seeds are small by nature.

## Briefs

| # | Stable ID | Display | Planned image path | Alt text | Category | One clear subject | Safety and ambiguity notes |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | `ro-l-lebada` | `lebădă` | `/images/ro/l/ro-l-lebada.webp` | `O lebădă albă pe apă.` | `animal` | One white swan in side view on a tiny calm-water base. | Friendly natural animal; avoid busy pond scene, character face, crown, or aggressive posture. |
| 2 | `ro-l-lopata` | `lopată` | `/images/ro/l/ro-l-lopata.webp` | `O lopată de grădină.` | `household` | One simple garden shovel with clear handle and scoop. | No dirt pile clutter, sharp danger framing, or extra tools. |
| 3 | `ro-l-lipici` | `lipici` | `/images/ro/l/ro-l-lipici.webp` | `Un lipici pentru școală.` | `school` | One glue stick or small glue bottle. | No label, letters, logo, spill mess, brand color pattern, or extra paper clutter. |
| 4 | `ro-l-lupa` | `lupă` | `/images/ro/l/ro-l-lupa.webp` | `O lupă cu mâner.` | `school` | One magnifying glass with round lens and handle. | No letters under the lens, detective theme, face, or confusing extra objects. |
| 5 | `ro-l-leagan` | `leagăn` | `/images/ro/l/ro-l-leagan.webp` | `Un leagăn de joacă.` | `toy` | One empty playground swing with seat and ropes. | Use playground swing sense only; no baby cradle, institution, child figure, or unsafe height. |
| 6 | `ro-r-rac` | `rac` | `/images/ro/r/ro-r-rac.webp` | `Un rac prietenos.` | `animal` | One friendly crayfish/crab-like animal. | Soften claws; no scary pinch action, zodiac symbol, cooked food, or underwater clutter. |
| 7 | `ro-r-ren` | `ren` | `/images/ro/r/ro-r-ren.webp` | `Un ren cu coarne.` | `animal` | One reindeer in natural side view. | Clear antlers; no holiday-only costume, sleigh, text, or character framing. |
| 8 | `ro-r-rucsac` | `rucsac` | `/images/ro/r/ro-r-rucsac.webp` | `Un rucsac simplu.` | `school` | One simple backpack with straps. | No logo, text, patches, brand, or cluttered school scene. |
| 9 | `ro-r-role` | `role` | `/images/ro/r/ro-r-role.webp` | `O pereche de role.` | `toy` | One pair of roller skates or inline skates. | Use roller-skates sense, not mechanical roller or abstract role; no feet, speed lines, brand marks, or fall scene. |
| 10 | `ro-s-supa` | `supă` | `/images/ro/s/ro-s-supa.webp` | `Un bol cu supă.` | `food` | One warm bowl of soup. | Spoon optional; no steam overload, hot-spill danger, text, or complex table setting. |
| 11 | `ro-s-sare` | `sare` | `/images/ro/s/ro-s-sare.webp` | `Sare într-o solniță.` | `food` | One small salt shaker or simple salt pile. | No label, chemical symbol, sugar confusion, or restaurant clutter. |
| 12 | `ro-s-seminte` | `semințe` | `/images/ro/s/ro-s-seminte.webp` | `O grămăjoară de semințe.` | `food` | Small pile of sunflower or pumpkin seeds. | No package, letters, tiny unreadable clutter, or field scene. |
| 13 | `ro-s-sita` | `sită` | `/images/ro/s/ro-s-sita.webp` | `O sită de bucătărie.` | `household` | One round kitchen sieve or strainer with visible mesh. | Household sieve sense only; not screen/filter abstraction, regional `șiță`, idiom, or flour cloud. |
| 14 | `ro-d-dovlecel` | `dovlecel` | `/images/ro/d/ro-d-dovlecel.webp` | `Un dovlecel verde.` | `food` | One long green zucchini/courgette. | Must stay distinct from orange `dovleac`; no sliced dish or extra vegetables. |
| 15 | `ro-tz-telina` | `țelină` | `/images/ro/ț/ro-tz-telina.webp` | `O țelină cu frunze verzi.` | `food` | Celery root with a few green leaves or clear celery vegetable cues. | Culinary vegetable sense only; not land/field, landscape, or abstract plant diagram. |

## Generation Prompt

```txt
Create one unlabeled 5-column by 3-row contact sheet for a children's Romanian vocabulary game. The sheet contains exactly 15 equal square cells in row-major order, with generous pale gutters between cells. No labels, captions, text, letters, numbers, logos, watermarks, or brands anywhere.

Global style: high-clarity cheerful handcrafted pixel art, polished educational game icon style, lightly dimensional, visible refined 96x96 to 128x128 pixel-art construction upscaled cleanly, clean silhouettes, rounded friendly shapes, simple readable details, soft playful varied colors, darkened local-color outlines, simple highlights, one small contact shadow only if useful. Each cell is a complete square icon background in very pale warm off-white or very pale sky-blue; the background must fill the full square cell, not a smaller rectangle or cut-out.

Circular safety: each subject must fit comfortably inside the inscribed circle of its square cell. Leave generous padding near corners and edges so a circular UI mask clips only background, never the important subject.

Audience and safety: children ages 4 to 6. One clear subject per cell. No text, letters, numbers, logos, watermarks, brands, copyrighted characters, clutter, scary mood, violence, weapons, injury, police/military framing, medical framing, realistic 3D render, photorealism, emoji style, blurry edges, low contrast, noisy dithering, or extra unrelated objects.

Cells in exact row-major order:
1. swan: one white swan in side view on a tiny calm-water base; friendly natural animal; no crown, character face, aggressive posture, or busy pond.
2. shovel: one simple garden shovel with clear handle and scoop; no extra tools, dirt pile clutter, or danger framing.
3. glue: one glue stick or small glue bottle for school; no label, letters, logo, spill mess, brand color pattern, or paper clutter.
4. magnifying glass: one round lens with handle; no letters under the lens, detective theme, face, or extra objects.
5. playground swing: one empty swing with seat and ropes; no baby cradle, child figure, institution cue, or unsafe height.
6. crayfish: one friendly crayfish or small crab-like animal with softened claws; no scary pinch action, zodiac symbol, cooked food, or underwater clutter.
7. reindeer: one reindeer in natural side view with clear antlers; no holiday costume, sleigh, text, or character framing.
8. backpack: one simple backpack with straps; no logo, text, patches, brand marks, or cluttered school scene.
9. roller skates: one pair of roller skates or inline skates; no feet, speed lines, brand marks, fall scene, mechanical roller, or abstract role cue.
10. soup: one bowl of soup, spoon optional; no steam overload, hot spill, text, or complex table setting.
11. salt: one small salt shaker or simple salt pile; no label, chemical symbol, sugar confusion, or restaurant clutter.
12. seeds: small pile of sunflower or pumpkin seeds; no package, letters, field scene, or tiny unreadable clutter.
13. kitchen sieve: one round sieve or strainer with visible mesh; no flour cloud, screen/filter abstraction, roof tile, or idiom cue.
14. zucchini: one long green zucchini/courgette; not an orange pumpkin, no sliced dish, no extra vegetables.
15. celery: celery root with a few green leaves or clear celery vegetable cues; not land, field, landscape, or plant diagram.
```

## Human Review

The human approved all `15` cells on 2026-06-11 and instructed the agent to continue.

Promotion details are recorded in:

- `docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-54.md`

## Batch 54 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 53.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-52.md
6. docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-53.md
7. docs/app-development-program/features/romanian-content-expansion/status.md
8. docs/status.md

Goal:

Execute Batch 54 only after the human has reviewed `assets/image-sources/ro/batch-53/contact-sheet.png` and explicitly accepted cells. Promote only human-accepted cells.

Use the Batch 53 row-major mapping:

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

Tasks:

- Record the human acceptance/rejection decision for every cell.
- For accepted cells only, crop from the contact sheet in fixed order.
- Follow docs/image-pipeline.md exactly: normalize full-square backgrounds, preserve padding, check thumbnail readability, run circular-mask QA, process through the refined pixel-art workflow, and promote `256 x 256 px` lossless WebP files.
- Add production JSON rows only for accepted cells, using the canonical files, IDs, normalized forms, categories, difficulty values, image paths, and alt text from Batch 52 and Batch 53.
- Do not promote rejected or unclear cells; if any cell needs regeneration, keep that work review-only in a later focused image batch.
- Run `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check`.
- Verify `http://localhost:3000` routes only if the expected dev server is running on port `3000`; if sandboxed localhost checks fail, retry outside the sandbox before marking the server unavailable. Do not start another server or use another port.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with totals, asset sizes, verification, and the next prompt.

Do not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
```
