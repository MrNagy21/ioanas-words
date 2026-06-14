# Batch 72 Sequence Top-Up Image Briefs And Contact Sheet

Batch: Romanian Content Expansion Batch 72.

Status: complete; accepted cells promoted in Batch 73.

Last updated: 2026-06-13.

## Scope Guard

Batch 72 responds to the release-readiness gap for requested point 2: more words with `ce`, `ci`, `ge`, `gi`, `ghe`, `ghi`, `che`, and `chi`.

The current pack already has broad coverage for most of those sequences, but Release 2 did not add new `GHE`, `GHI`, `CHE`, or `CHI` rows. This batch creates a focused review sheet for those missing sequence additions. It does not add production JSON records, cropped cells, optimized public WebP assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Do not promote any Batch 72 cell until the human explicitly accepts both the candidate word and its image.

## Candidate Rationale

| # | Sequence target | Stable ID | Display | Planned image path | Category | Candidate status | Source and notes |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | `GHE` starts | `ro-g-ghereta` | `gheretă` | `/images/ro/g/ro-g-ghereta.webp` | `household` | corrective review candidate | Replacement for rejected `ghebe`. DEX/dexonline records `gheretă`; use a small kiosk/booth image with no signs or adult/business context. Source: `https://dexonline.ro/definitie/ghereta`. |
| 2 | `GHI` contains | `ro-u-unghiera` | `unghieră` | `/images/ro/u/ro-u-unghiera.webp` | `body` | corrective review candidate | Replacement for rejected `ghioc`. DEX/dexonline records `unghieră`; use a closed rounded nail clipper, not nail-cutting action or medical framing. Source: `https://dexonline.ro/definitie/unghiera`. |
| 3 | `CHE` contains | `ro-p-pereche` | `pereche` | `/images/ro/p/ro-p-pereche.webp` | `clothing` | word accepted; corrective image pending | DEX/dexonline records `pereche` as a group of two matching objects. Human accepted the word but asked for a better pair representation than the original shoes; corrective sheet uses a plain matching pair of socks. Source: `https://dexonline.ro/definitie/pereche`. |
| 4 | `CHI` contains | `ro-r-rechizite` | `rechizite` | `/images/ro/r/ro-r-rechizite.webp` | `school` | human accepted original image | DEX/dexonline/DOOM records `rechizite` as plural school/writing supplies. The generated cell avoids text, ruler numbers, and notebook writing. Source: `https://dexonline.ro/definitie/rechizite`. |

Rejected or avoided prior rows remain closed unless the human explicitly reopens them, especially `răchită`, `gips`, `ghimpe`, `așchie`, `ghiulea`, `junghi`, `liturghie`, `ghinion`, `chibrit`, `brichetă`, and `chiloți`.

Human feedback on the first Batch 72 sheet:

- `rechizite` is accepted.
- `pereche` is accepted as a word, but the image should better represent a pair.
- `ghebe` and `ghioc` should be changed.
- `ghem` and `ghiozdan` were not used as replacements because both already exist in `content/ro/words-g.json`.

## Contact Sheet

Original review contact sheet:

- `assets/image-sources/ro/batch-72/contact-sheet.png`

The original sheet is ordered row-major:

1. `ghebe`
2. `ghioc`
3. `pereche`
4. `rechizite`

Corrective review contact sheet:

- `assets/image-sources/ro/batch-72/corrective-contact-sheet-1.png`

The corrective sheet is ordered row-major:

1. `gheretă`
2. `unghieră`
3. `pereche` corrective image

The contact sheets are intentionally unlabeled; use these mappings for review.

## Visual Self-Check

- all four cells are present in the requested row-major order;
- the sheet has no labels, captions, letters, numbers, logos, watermarks, or brand marks;
- every cell uses a full square pale background with gutters only between cells;
- all subjects are padded well enough for the app's circular image masks;
- `ghebe` reads as a small mushroom cluster, but the human rejected the word for this release;
- `ghioc` reads as a single shell and is visually clean, but the human rejected the word for this release;
- the first `pereche` image used a pair of shoes; the human accepted the word but requested a better pair representation;
- `rechizite` is represented by school supplies without visible text, letters, ruler ticks, or notebook lines.

Corrective sheet visual check:

- all three corrective cells are present in the requested row-major order;
- the sheet has no labels, captions, letters, numbers, logos, watermarks, or brand marks;
- `gheretă` reads as a small wooden kiosk/booth with a closed window and no written sign;
- `unghieră` reads as a closed rounded nail clipper without hand, cutting action, injury, or medical framing;
- the corrective `pereche` image uses a plain matching pair of socks, which is a clearer concrete pair than the first shoe image;
- all three corrective subjects are padded well enough for circular UI masks.

## Generation Prompt

Original sheet:

```txt
Create one unlabeled 2-column by 2-row contact sheet for a children's Romanian vocabulary game. The sheet contains exactly 4 equal square cells in row-major order, with generous pale gutters between cells. No labels, captions, text, letters, numbers, symbols, ruler tick marks, notebook lines, logos, watermarks, or brands anywhere.

Global style: high-clarity cheerful handcrafted pixel art, polished educational game icon style, lightly dimensional, visible refined 96x96 to 128x128 pixel-art construction upscaled cleanly, clean silhouettes, rounded friendly shapes, simple readable details, soft playful varied colors, darkened local-color outlines, simple highlights, one small contact shadow only if useful. Each cell is a complete square icon background in very pale warm off-white; the background must fill the full square cell, not a smaller rectangle or cut-out.

Circular safety: each subject must fit comfortably inside the inscribed circle of its square cell. Leave generous padding near corners and edges so a circular UI mask clips only background, never the important subject.

Audience and safety: children ages 4 to 6. One clear subject per cell. No text, letters, numbers, symbols, logos, watermarks, brands, copyrighted characters, clutter, scary mood, violence, weapons, injury, medical framing, adult/business framing, realistic 3D render, photorealism, emoji style, blurry edges, low contrast, noisy dithering, or extra unrelated objects.

Cells in exact row-major order:
1. ghebe mushrooms: a small friendly cluster of edible honey-colored mushrooms, clear mushroom caps and stems, no forest scene, no basket, no person.
2. ghioc shell: one clean white cowrie-like seashell, centered, simple readable opening and ridges, no beach scene, no fortune telling, no person.
3. pereche as a pair: one matching pair of small child shoes placed side by side, clearly two matching objects used together, no feet, no logo, no text.
4. rechizite school supplies: a small group of child school supplies: pencil, eraser, plain ruler with no tick marks or numbers, and closed blank notebook with no writing, no letters, no lines, no symbols.
```

Corrective sheet:

```txt
Create one unlabeled 3-column by 1-row contact sheet for a children's Romanian vocabulary game. The sheet contains exactly 3 equal square cells in row-major order, with generous pale gutters between cells. No labels, captions, text, letters, numbers, symbols, decorative motifs, patterns, ruler tick marks, notebook lines, logos, watermarks, or brands anywhere.

Global style: high-clarity cheerful handcrafted pixel art, polished educational game icon style, lightly dimensional, visible refined 96x96 to 128x128 pixel-art construction upscaled cleanly, clean silhouettes, rounded friendly shapes, simple readable details, soft playful varied colors, darkened local-color outlines, simple highlights, one small contact shadow only if useful.

Composition/framing: each cell is a complete square icon background in very pale warm off-white; the background must fill the full square cell, not a smaller rectangle or cut-out. One centered subject per cell. Each subject must fit comfortably inside the inscribed circle of its square cell; leave generous padding near corners and edges so a circular UI mask clips only background, never the important subject.

Audience and safety: children ages 4 to 6.

Constraints: no text, letters, numbers, symbols, decorative patterns, logos, watermarks, brands, copyrighted characters, clutter, scary mood, violence, weapons, injury, medical framing, adult/business framing, realistic 3D render, photorealism, emoji style, blurry edges, low contrast, noisy dithering, or extra unrelated objects.

Cells in exact row-major order:
1. gheretă kiosk: one small friendly wooden street kiosk/booth with a simple solid-color awning and closed plain window, no signs, no products, no person, no guard/sentinel, no text.
2. unghieră nail clipper: one closed rounded silver nail clipper, child-safe static presentation, no hand, no nail clipping action, no sharp exposed blade emphasis, no bathroom scene, no medical framing.
3. pereche pair: one matching pair of plain child socks placed side by side, clearly two matching objects used together, same color and shape, no feet, no logos, no text, no pattern, no decorative motif, no extra clothing.
```

Generation metadata:

- generation mode: built-in `image_gen` tool;
- generated source path: `/Users/darius/.codex/generated_images/019eb5dc-2504-7cc1-8942-b7f414803d47/ig_0575e1cad2783f91016a2d60f1a2488191a369e6f76c20bef6.png`;
- workspace review copy: `assets/image-sources/ro/batch-72/contact-sheet.png`;
- corrective generated source path: `/Users/darius/.codex/generated_images/019eb5dc-2504-7cc1-8942-b7f414803d47/ig_01b1ba1e4662e293016a2d6576bdbc8191b93bf22c185c1828.png`;
- corrective workspace review copy: `assets/image-sources/ro/batch-72/corrective-contact-sheet-1.png`;
- generated date: 2026-06-13;
- reviewer status: accepted by human;
- production status: promoted in Batch 73 for `unghieră`, `pereche`, and `rechizite`; `gheretă` used as an image replacement for an existing approved row.

## Batch 73 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 72.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-72.md
6. docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-71.md
7. docs/app-development-program/features/romanian-content-expansion/status.md
8. docs/status.md

Goal:

Execute Batch 73 only after the human has reviewed `assets/image-sources/ro/batch-72/contact-sheet.png` and `assets/image-sources/ro/batch-72/corrective-contact-sheet-1.png`, then explicitly accepted candidate words and cells. Promote only accepted cells.

Use the Batch 72 original contact-sheet row-major mapping:

1. ghebe - rejected by human; do not promote unless explicitly reopened
2. ghioc - rejected by human; do not promote unless explicitly reopened
3. pereche - word accepted, original image superseded by corrective image
4. rechizite - accepted

Use the Batch 72 corrective contact-sheet row-major mapping:

1. gheretă
2. unghieră
3. pereche corrective image

Tasks:

- Record the exact human decisions in a Batch 73 production-promotion document.
- For accepted cells only, crop from the contact sheet into full-square source images and normalize any edge-connected background so there are no gutter or panel artifacts.
- Create circular-mask previews before promotion; meaningful subject pixels must not be clipped.
- Optimize accepted images to `256 x 256 px` lossless `.webp` under the `20 KB` hard maximum.
- Add accepted production JSON rows to their canonical word files with approved status, ready image metadata, stable IDs, categories, and alt text.
- Recompute requested-target coverage and confirm the point 2 deltas, especially new Release 2 additions for `GHE`, `GHI`, `CHE`, and `CHI`.
- Run `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run check:setup-storage`, `pnpm run build`, and `git diff --check`.
- Verify `/admin/releases/2` includes only the newly promoted accepted rows for Release 2 QA.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with the result and the next batch prompt.

Do not promote rejected or unreviewed cells. Do not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
```
