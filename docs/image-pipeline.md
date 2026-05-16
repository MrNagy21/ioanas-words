# Word Wheel Image Pipeline Decisions

Last updated: 2026-05-16

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
Technical: no text, no letters, no numbers, no logo, no watermark, no brand, no copyrighted character, no photorealism, no 3D render, no complex scene, no scary mood, no clutter.
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

Reject or regenerate if:

- the subject is ambiguous;
- the image depends on a complex scene to be understood;
- the generated image looks like a copyrighted character or brand;
- the style drifts into emoji, sticker, photo, 3D, or flat vector art;
- the object cannot be recognized when reduced to wheel thumbnail size.

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
