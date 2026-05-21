# Word Wheel Image Pipeline Decisions

Last updated: 2026-05-20

This document locks the first production image direction before Batch 6 implementation.

## Decision

Use pixel art for the first Romanian pack.

The style should be high-clarity, child-friendly object pixel art rather than tiny retro sprites. Each image should show one concrete object or subject, centered on a square canvas, with no text, no brand marks, and no busy background.

Use AI batch generation as the main production image source. Public asset packs may be inspected for style reference, licensing comparison, or emergency fallback, but they are not the primary content source for the first serious pack.

## Why Pixel Art

Pixel art is the better first choice for Word Wheel because:

- It fits the game-like wheel experience.
- It stays visually consistent across many words.
- It is readable in small wheel slots if the silhouette is simple.
- It compresses well because images use limited color and hard edges.
- It can scale up without blur when the UI uses pixel-aware rendering.

Simple flat illustration is still a valid fallback if a specific concept is hard to recognize as pixel art, but the pack should not mix styles casually.

## Source Strategy

Primary path:

1. Generate images with AI in controlled batches.
2. Keep one locked style prompt template per pack.
3. Generate candidate images in groups of roughly 10 to 25 words.
4. Human-review every image before marking it production-ready.
5. Optimize reviewed images into final `256 x 256 px` lossless `.webp`.
6. Run automated validation before committing final assets.

Fallback path:

- Inspect CC0 or permissively licensed packs if a word is hard to generate.
- Prefer CC0/public-domain-style assets when using external packs.
- Avoid CC BY-SA assets for production content unless the project deliberately accepts attribution and share-alike obligations.
- Do not mix found assets into the production pack unless their style can be made consistent with the pack.

Public asset sources are reference/fallback material, not the default pipeline. The main reason is consistency: a vocabulary pack needs hundreds of specific words in the same composition, palette, framing, and child-safe style.

## AI Batch Generation Rules

Batch generation is allowed and preferred, but batch outputs must still be reviewed one image at a time.

Batch size:

```txt
Pilot batch: 12 to 20 images
Normal batch: 10 to 25 images
Maximum batch: 30 images
```

Do not generate hundreds of images before review. Early batches should be used to tune the prompt, composition, and palette.

For corrective regeneration, use an even stricter review gate:

- generate one small contact sheet, ideally around `12` to `15` candidate images;
- include generous gutters and no labels inside the generated image sheet;
- explicitly prompt that each cell contains a complete square image background or transparency, not a smaller cropped rectangle, panel, partial fill, or cut-out pasted onto the sheet;
- compose every subject to be safe inside the wheel/admin circular mask: the object must fit comfortably inside the inscribed circle of the square cell, with no meaningful parts in the corners that would be clipped when shown circularly;
- stop after the sheet is generated and ask the human to review before cropping cells, optimizing WebP assets, editing JSON, or replacing production files;
- if the sheet is rejected, do not salvage individual crops unless the human explicitly identifies acceptable cells;
- record the human decision in the batch audit document before any production asset promotion.

Required metadata per generated candidate:

- word ID;
- Romanian display word;
- English meaning or short concept note;
- locale;
- letter bucket;
- prompt template version;
- exact prompt used;
- generation tool/model;
- generation date;
- source status;
- reviewer status;
- rejection reason, if rejected.

## Prompt Template

Use this as the baseline prompt shape:

```txt
Create a high-clarity pixel art icon for a children's Romanian vocabulary game.
Subject: <plain English object description for WORD_ID>.
Style: cheerful handcrafted pixel art, clean silhouette, rounded friendly shapes, simple readable details, soft playful colors, consistent game icon style.
Composition: one centered subject only, square canvas, subject fills 70% to 85% of the image, clear margin around the subject, transparent background or very simple pale background.
Technical: no text, no letters, no numbers, no logo, no watermark, no brand, no copyrighted character, no photorealism, no smooth CGI/realistic 3D render, no complex scene, no scary mood, no clutter.
Audience: children ages 4 to 6.
```

For Romanian words with ambiguity, add a short disambiguation:

```txt
Romanian word: "broască". Intended meaning: frog, not lock.
```

For nouns with grammatical gender, the image should show the concrete object only. Do not try to illustrate grammar.

## Style Guide

Overall look:

- cheerful;
- warm;
- calm;
- clear;
- game-like;
- friendly for children ages 4 to 6;
- more like a polished educational game icon than an emoji.

Pixel style:

- visible pixel-art construction;
- polished dimensional pixel-art volume, not flat sticker art and not smooth CGI;
- apparent source density should feel close to a refined `96 x 96` to `128 x 128` pixel icon upscaled to the final `256 x 256 px` asset;
- when AI output is semantically strong but slightly too smooth, prefer post-processing through a refined `128 px` working grid, palette limiting around `96` to `128` colors, and nearest-neighbor upscaling to `256 x 256 px`;
- use `128 px` / `96`-color processing as the current corrective-regeneration default; drop toward `96 px` only when the image still reads too smooth, and avoid `64 px`-style coarseness unless the human explicitly asks for a retro sprite look;
- clean silhouette first;
- limited internal detail;
- no noisy dithering;
- no thin outlines that disappear at small sizes;
- no excessive anti-aliasing blur;
- no tiny decorative elements.

Perspective:

- use simple front, three-quarter, or slight top-down views;
- keep perspective consistent within a category where possible;
- avoid dramatic angles.

Lighting:

- soft top-left lighting is preferred;
- use simple highlights and shadows;
- avoid harsh contrast, glow effects, and realistic reflections.

Background:

- transparent background is preferred for final production assets;
- if transparency is not practical, use a very pale warm off-white or soft sky-blue background;
- avoid scenery unless the word itself requires context.
- final assets must have a full square background or transparency across the entire `256 x 256 px` canvas; do not leave contact-sheet gutters, white side bars, corner blocks, black transparent-composite areas, rectangular panels, or cut-background artifacts around a cropped subject;
- after cropping from a generated contact sheet, normalize edge-connected background pixels to the intended pale background before WebP optimization, then inspect the `256 x 256 px` result at full size and thumbnail size;
- if a subject needs a contextual background such as water or frost sky, that background must fill the full square consistently instead of appearing as a smaller rectangular patch inside a white square.

Circular display:

- The app displays word images in circular wheel slots, and future admin/list views may also show circular thumbnails.
- Generate and crop assets as square files, but compose the subject inside the inscribed circle of that square.
- Avoid diagonals, long objects, branches, ropes, pens, ladders, or sled pull-cords reaching into the square corners unless they remain well inside the circular crop.
- Before promotion, render a circular-mask preview of every accepted crop and confirm only background is clipped by the circle.
- If the circular mask clips meaningful subject pixels, recenter/scale down locally while preserving quality, or regenerate the cell if padding makes the image too weak.

## Palette Direction

Use a broad, child-friendly palette rather than a one-color theme.

Preferred color behavior:

- warm reds, yellows, greens, and blues;
- slightly softened saturation;
- high enough contrast for small wheel display;
- clear separation between subject and background;
- category-appropriate colors, for example red apple, orange carrot, green tree, blue water.

Avoid:

- muddy brown-heavy palettes;
- dominant purple/blue gradients;
- dark gloomy palettes;
- beige-only palettes;
- neon colors;
- photorealistic texture colors;
- excessive outlines in pure black.

Suggested outline/shadow direction:

- use darkened local color outlines, not pure black by default;
- use one small contact shadow only when it helps readability;
- keep shadows simple enough to compress well.

## Negative Prompt Guidance

When the generation tool supports a negative prompt, include:

```txt
text, letters, numbers, watermark, logo, brand, copyrighted character, photorealistic, 3d render, realistic photo, complex background, clutter, scary, violent, weapon, adult theme, distorted object, extra limbs, face on object unless naturally expected, blurry, low contrast, noisy dithering
```

## Review Rules

An image can be marked production-ready only if:

- the object is immediately recognizable at small wheel size;
- the image matches the intended Romanian word;
- the image is safe and appropriate for children ages 4 to 6;
- the style matches the pack;
- there is no text, watermark, logo, or branded object;
- there are no confusing extra objects;
- there are no AI artifacts that change the meaning;
- it can be optimized under the file-size target.

## Brand Consistency Review

Before accepting any generated or locally authored replacement image, compare it against the existing production pack. Do not judge a new asset only in isolation.

Required agent workflow:

1. Open or create a contact sheet for the new batch.
2. Create a second comparison sheet that mixes representative existing ready images from recent accepted batches with a sample of the new images.
3. Check silhouette clarity, subject scale, outline weight, palette, internal detail level, contact shadow style, and apparent pixel density.
4. Regenerate or revise images that look noticeably coarser, flatter, lower-detail, too smooth, too photorealistic, more emoji-like, more vector-like, or otherwise off-brand compared with the established pack.
5. Record in the batch image-brief document that the comparison review happened.

Use at least 8 to 12 existing production references when the slice has more than a few images. Choose references from nearby categories when possible, for example food against food, animals against animals, clothing against clothing, and household objects against household objects.

## Circular Corrective Prompt Add-On

Use this add-on for future corrective contact sheets:

```txt
Circular display constraint:
- These square icons will be shown inside circular wheel/admin thumbnails.
- Compose every subject comfortably inside the inscribed circle of its square cell.
- Leave safe margin from all four corners so a circular mask clips only background, never important subject parts.
- For long or diagonal objects, shorten/recenter/angle them so the full object stays inside the circular safe area.
- Do not draw a visible circle border unless explicitly requested; the asset remains a square image with circle-safe composition.
```

## Corrective Image Audit Workflow

Use this workflow when a human reports that an existing ready image is weak, unclear, off-style, or poorly generated. The goal is to diagnose the current asset before regenerating it, so the replacement prompt has concrete visual direction instead of a vague "make it better" instruction.

Do not replace a ready production image only because it is aesthetically different. Replace it when the audit shows a real child-facing risk: the object is hard to recognize, the word meaning is wrong or too narrow, the style is visibly off-brand, the image looks too smooth/3D/vector/emoji-like, the pixel density is wrong, the subject is badly framed, the background color clashes, or the image fails at wheel thumbnail size.

For every flagged word, record:

- word ID, display word, canonical image path, and current status;
- the human-reported issue, if any;
- intended Romanian meaning and any ambiguity to avoid;
- current image observations at full size and at wheel thumbnail size;
- reference images from the production style set below;
- online object-reference sources when the object/concept is visually uncertain;
- audit decision: keep, regenerate, remove from gameplay, or ask the human;
- replacement prompt direction if regeneration is approved.

Compare the current image against the reference set across these dimensions:

| Dimension | What to Check |
| --- | --- |
| Meaning and recognizability | Does a 4-to-6-year-old have a good chance of naming the intended object? Does the picture match the Romanian word rather than a related concept? |
| Style match | Does it look like the established polished educational-game pixel art, not an emoji, sticker, flat vector, photo, or smooth CGI render? |
| Pixel construction | Does the apparent source density feel close to refined `96 x 96` to `128 x 128` pixel art upscaled to `256 x 256`, with hard readable edges and controlled detail? |
| Dimensionality | Does it have light pixel-art volume from highlights, side planes, and simple shading without becoming realistic 3D? |
| Silhouette and shape | Is the object shape clear, continuous, and free from unexplained fragments or AI artifacts? |
| Subject scale | Does the subject fill about `70%` to `85%` of the square with safe margins, without important parts being cropped? |
| Perspective | Is the viewpoint simple and readable, usually front, side, slight top-down, or three-quarter? |
| Shadows and grounding | Is any contact shadow soft, small, and consistent with the reference pack? Does it help readability without becoming a dark blob? |
| Background | Is the background transparent or a pale warm off-white or soft sky-blue compatible with the pack? Avoid dark preview artifacts and busy scenery. |
| Color and contrast | Are colors child-friendly, object-appropriate, and readable in the wheel without neon, muddy, or one-note palettes? |
| Safety and rights | Is there no text, watermark, logo, brand, copyrighted character, frightening element, adult theme, or confusing extra object? |

When an object is visually uncertain, agents should look up real-world object references before writing or revising the image brief. Use online search for visual understanding only; do not copy an image or imitate a protected artwork. Prefer several plain reference examples from ordinary product, encyclopedia, museum, educational, or dictionary-style pages. Record the source URLs in the audit document with a short note such as "used only to confirm object shape and common visual features." If the online references reveal that the Romanian word is ambiguous, culturally specific, abstract, or hard to show in one icon, stop and ask the human before generating.

For each approved regeneration, write a short prompt delta that names the corrective target:

```txt
Current problem: <why the existing image fails>.
Replacement direction: <one clear subject, viewpoint, colors, scale, background, shadow, and details>.
Must preserve: polished pixel-art style, refined pixel density, local-color outlines, top-left highlights, simple contact shadow, no text/logos/brands.
Must avoid: <wrong meaning, extra objects, over-3D rendering, flat vector, emoji/sticker look, background clutter, cropped parts>.
```

Before accepting replacements:

1. Create a contact sheet of the current bad images, new candidates, and selected production references.
2. Stop and ask the human to review the sheet before cropping, optimizing, or replacing production files.
3. Inspect approved candidates at `256 x 256 px` and at a small thumbnail size close to the wheel display.
4. Reject candidates that improve the object meaning but drift away from the pack style.
5. Reject candidates that match the style but remain semantically unclear.
6. Confirm the final promoted WebP is square, `256 x 256 px`, and has no contact-sheet gutter, side bar, corner block, or rectangular background panel.
7. Record the review outcome in the corrective batch document before promoting WebP files.

### Production Style Reference Set

Use these existing approved images as the primary on-brand references for future image generation and review. They are not concept requirements for a new batch; they are style anchors for pixel density, dimensionality, object scale, background treatment, outline weight, and thumbnail readability.

| Word         | Public image path                   | Why it is useful                                                                          |
| ------------ | ----------------------------------- | ----------------------------------------------------------------------------------------- |
| `autobuz`    | `/images/ro/a/ro-a-autobuz.webp`    | clear vehicle silhouette, friendly dimensional lighting, fits the square without crowding |
| `acvariu`    | `/images/ro/a/ro-a-acvariu.webp`    | transparent/glass subject with readable contents and soft pale background                 |
| `cal`        | `/images/ro/c/ro-c-cal.webp`        | natural animal pose with enough body visible for recognition                              |
| `castravete` | `/images/ro/c/ro-c-castravete.webp` | simple food object with strong silhouette and controlled texture detail                   |
| `copac`      | `/images/ro/c/ro-c-copac.webp`      | organic shape with clear trunk/canopy separation and no scene clutter                     |
| `cadă`       | `/images/ro/c/ro-c-cada.webp`       | household object with gentle perspective and child-safe details                           |
| `cozonac`    | `/images/ro/c/ro-c-cozonac.webp`    | food texture kept readable without becoming noisy                                         |
| `cetate`     | `/images/ro/c/ro-c-cetate.webp`     | symmetric object/building icon that stays legible in the wheel                            |
| `chitară`    | `/images/ro/c/ro-c-chitara.webp`    | thin-object example with enough outline weight and margin                                 |
| `elefant`    | `/images/ro/e/ro-e-elefant.webp`    | animal body volume, friendly expression, natural subject rather than mascot               |
| `excavator`  | `/images/ro/e/ro-e-excavator.webp`  | complex vehicle simplified without losing identifying parts                               |
| `jachetă`    | `/images/ro/j/ro-j-jacheta.webp`    | clothing item shown front-on with clear folds and no logos                                |
| `măgar`      | `/images/ro/m/ro-m-magar.webp`      | small animal with full-body framing and soft contact shadow                               |
| `oală`       | `/images/ro/o/ro-o-oala.webp`       | simple household object with strong volume and highlight control                          |
| `scaun`      | `/images/ro/s/ro-s-scaun.webp`      | furniture with readable perspective and full object framing                               |
| `vacă`       | `/images/ro/v/ro-v-vaca.webp`       | full animal silhouette, natural markings, friendly but not cartoon-mascot style           |
| `barcă`      | `/images/ro/b/ro-b-barca.webp`      | elongated object that still fits the square with safe margins                             |
| `glob`       | `/images/ro/g/ro-g-glob.webp`       | round object with visible stand and no text/labels                                        |
| `buchet`     | `/images/ro/b/ro-b-buchet.webp`     | multi-part subject kept cohesive and not cluttered                                        |
| `zebră`      | `/images/ro/z/ro-z-zebra.webp`      | stripe detail stays readable without overwhelming the animal form                         |
| `umbrelă`    | `/images/ro/u/ro-u-umbrela.webp`    | open object with clean silhouette and simple handle detail                                |
| `șurub`      | `/images/ro/ș/ro-sh-surub.webp`     | small hardware object enlarged enough to read safely as an icon                           |
| `arici`      | `/images/ro/a/ro-a-arici.webp`      | detailed texture with controlled pixel density and friendly animal shape                  |
| `cățel`      | `/images/ro/c/ro-c-catel.webp`      | close animal framing that remains recognizable and emotionally friendly                   |

The spoken review note `caun` is interpreted here as `scaun`, because there is no `caun` production record.

Reference traits to preserve:

- use a pale warm off-white or soft sky-blue background when a background is needed; avoid dark transparent-preview artifacts in reviewed sheets;
- subject usually fills about `70%` to `85%` of the square with a clear margin on all sides;
- use simple three-quarter, front, or side views that reveal the object rather than cropping important parts;
- keep a soft contact shadow or grounding shape when it helps the icon sit naturally in the square;
- make objects feel lightly dimensional through top-left highlights, side planes, local-color outlines, and simple shadows;
- keep the visible pixel grid refined enough that the icon reads as polished game art, not coarse block construction.

### Known Regeneration Candidates

The following ready images were flagged in human review and should be regenerated in a corrective image-quality pass before being treated as final brand examples:

| Word ID        | Current issue                                                                                             | Regeneration direction                                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `ro-r-robinet` | too coarse and ambiguous; does not read clearly as a faucet beside the stronger household-object examples | one simple sink faucet or tap, metallic gray/blue, recognizable spout and handle, pale background, polished pixel-art volume |
| `ro-a-aripa`   | too abstract/coarse and visually ambiguous for a wing                                                     | one feathered wing with clear feather layers and curved silhouette, no bird body, no floating square fragments               |
| `ro-c-coaja`   | odd detached fragments make the peel feel broken or artifacted                                            | one curled fruit peel, preferably orange or banana peel, continuous shape, no unexplained loose blocks                       |
| `ro-e-esarfa`  | blocky and abstract; reads more like stacked pieces than a soft scarf                                     | one scarf with a gentle fold or trailing end, visible fringe, fabric-like highlights, no person                              |
| `ro-g-girafa`  | too cropped/mascot-like compared with the full animal references                                          | natural friendly giraffe with visible long neck, head, spots, and enough body/neck framing to read at wheel size             |

The spoken review note `Capea` does not match a current production word ID. Resolve the intended word with the human before adding it to a regeneration batch.

Reject or regenerate if:

- the subject is ambiguous;
- the image depends on a complex scene to be understood;
- the generated image looks like a copyrighted character or brand;
- the style drifts into emoji, sticker, photo, 3D, or flat vector art;
- the object cannot be recognized when reduced to wheel thumbnail size.
- the image is visibly off-brand beside the existing ready-image pack.

Research notes:

- Google documents WebP as supporting lossy, lossless, and transparency, with lossless WebP smaller than PNG in their measurements: https://developers.google.com/speed/webp
- MDN describes WebP as a strong general web image choice and notes AVIF can compress slightly better but has tradeoffs: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types
- MDN documents `image-rendering: pixelated` and `crisp-edges` for preserving hard-edged pixel-art scaling: https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering
- Next.js serves files from `public/` by root-relative paths, which matches the current static content model: https://nextjs.org/docs/pages/api-reference/file-conventions/public-folder

## Final Asset Format

- Final committed format: `.webp`
- Encoding mode: lossless WebP by default for pixel art
- Transparency: allowed, preferably transparent or very simple flat background
- AVIF: not part of the first committed asset set
- PNG: allowed only as an intermediate source file, not as final shipped content

AVIF can be revisited later if repository size becomes a measurable problem. For now, WebP is simpler for tooling, browser support, and static JSON paths.

## Dimensions

Final committed image size:

```txt
256 x 256 px
```

Rationale:

- Large enough for the result modal on phones and tablets.
- Small enough for wheel thumbnails and local repository storage.
- Simple enough to generate, validate, and optimize consistently.
- Reasonable if the serious Romanian pack grows into hundreds or low thousands of assets.

Image composition rules:

- Square canvas.
- Main subject should fill roughly 70% to 85% of the canvas.
- Keep a clear margin so the wheel can crop or mask safely.
- Avoid tiny details that disappear in wheel segments.
- Avoid text inside the image.
- Avoid multi-object scenes unless the word itself requires it.

## Size Targets

Per final `.webp` file:

```txt
Goal: <= 8 KB
Warning threshold: > 12 KB
Hard maximum: 20 KB
```

If an image exceeds the warning threshold, simplify the palette/composition or review encoding settings. If it exceeds the hard maximum, it should fail validation once image-size validation is added.

Repository budget guidance:

- 500 images at 8 KB average: about 4 MB
- 1,000 images at 8 KB average: about 8 MB
- 1,500 images at 8 KB average: about 12 MB

This keeps the first serious pack practical for a Git repository and Vercel deployment.

## Naming Convention

The content word ID is the source of truth.

Final local asset path:

```txt
public/images/<locale>/<letter>/<word-id>.webp
```

Public path stored in JSON:

```txt
/images/<locale>/<letter>/<word-id>.webp
```

Example:

```txt
public/images/ro/m/ro-m-mar.webp
/images/ro/m/ro-m-mar.webp
```

Rules:

- Filename must exactly match the word ID.
- Extension must be `.webp` for the first production pack.
- Letter folder must match the word file bucket.
- Do not use display words in filenames.
- Do not use Romanian diacritics in filenames unless they are already part of the letter folder.
- Do not rename approved image paths casually; if the image concept changes substantially, review whether the word metadata or asset versioning needs to change too.

Scale path for R2 or another CDN may use immutable versioned paths later:

```txt
/ro/<letter>/<word-id>-v1.webp
```

Do not introduce that version suffix for local v1 repository images unless the caching strategy changes.

## Source And Staging Convention

Stage reviewed candidate source images under:

```txt
assets/image-sources/<locale>/<letter>/<word-id>.png
assets/image-sources/<locale>/<letter>/<word-id>.jpg
assets/image-sources/<locale>/<letter>/<word-id>.jpeg
assets/image-sources/<locale>/<letter>/<word-id>.webp
assets/image-sources/<locale>/<letter>/<word-id>.avif
```

The source folder is ignored by default. Source files should not be committed
unless they are small and intentionally retained. Final committed files belong
under `public/images/...`.

Each image should have enough metadata to preserve review traceability:

- word ID
- locale
- letter bucket
- prompt or image brief
- source tool or artist
- license
- reviewer status

Metadata can live beside the staged source image as an ignored sidecar, for
example:

```txt
assets/image-sources/ro/m/ro-m-mar.json
```

## Optimizer Usage

Run a dry-run first:

```bash
pnpm run optimize:images -- --dry-run
```

Then optimize reviewed sources into final local assets:

```bash
pnpm run optimize:images
```

The optimizer reads source files from `assets/image-sources/` and writes final
lossless WebP files to:

```txt
public/images/<locale>/<letter>/<word-id>.webp
```

The staged path must match an existing content word exactly. For example,
`assets/image-sources/ro/m/ro-m-mar.png` becomes
`public/images/ro/m/ro-m-mar.webp`.

Encoder settings:

- resize/canvas: `256 x 256 px`;
- fit: contain on a transparent square canvas;
- kernel: nearest-neighbor, to preserve pixel-art edges;
- WebP: lossless, quality `100`, effort `6`.

After optimizing, mark a word `imageStatus: "ready"` only after human review,
then run:

```bash
pnpm run validate:content
```

## Next Implementation Work

Batch 6 tooling now covers:

- image validation for ready local WebP dimensions and byte size;
- a dry-run capable optimization command for staged source images;
- documented source folder and encoder settings.

The next image work is to generate a small AI pilot batch, human-review it, run
the optimizer, mark only approved assets as `imageStatus: "ready"`, and validate
the content pack.
