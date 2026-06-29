# Batch 86 Image Briefs: Slice 3 J/D Top-Up

Batch: Romanian Content Expansion Batch 86.

Status: review-only image briefs and contact sheet; no production content added.

Last updated: 2026-06-24.

## Scope Guard

Batch 86 creates image briefs and one unlabeled review contact sheet for Batch 85 Slice 3 only. It does not add production JSON records, edit content manifests, crop cells, optimize final WebP assets, change routes, change schema, change loaders, add placeholders, edit shared status docs, add speech-target production metadata, introduce database/auth/billing/admin scope, create clinical claims, or promote any image to child-facing production.

The contact sheet is only a human-review source image. Every cell remains inactive until explicit human image acceptance, cropping/normalization, production WebP optimization, manifest promotion, and full content validation happen in a later batch.

## Contact Sheet

Review contact sheet path:

```txt
assets/image-sources/ro/batch-86/contact-sheet.png
```

Sheet format: 5 columns x 3 rows, equal square cells, unlabeled, row-major order.

Row-major mapping:

| Cell | Row | Column | Display | Stable ID | Planned production image path |
| ---: | ---: | ---: | --- | --- | --- |
| 1 | 1 | 1 | `jet` | `ro-j-jet` | `/images/ro/j/ro-j-jet.webp` |
| 2 | 1 | 2 | `ambalaj` | `ro-a-ambalaj` | `/images/ro/a/ro-a-ambalaj.webp` |
| 3 | 1 | 3 | `etaj` | `ro-e-etaj` | `/images/ro/e/ro-e-etaj.webp` |
| 4 | 1 | 4 | `bujor` | `ro-b-bujor` | `/images/ro/b/ro-b-bujor.webp` |
| 5 | 1 | 5 | `peisaj` | `ro-p-peisaj` | `/images/ro/p/ro-p-peisaj.webp` |
| 6 | 2 | 1 | `majoretă` | `ro-m-majoreta` | `/images/ro/m/ro-m-majoreta.webp` |
| 7 | 2 | 2 | `prăjitor` | `ro-p-prajitor` | `/images/ro/p/ro-p-prajitor.webp` |
| 8 | 2 | 3 | `pajiște` | `ro-p-pajiste` | `/images/ro/p/ro-p-pajiste.webp` |
| 9 | 2 | 4 | `coji` | `ro-c-coji` | `/images/ro/c/ro-c-coji.webp` |
| 10 | 2 | 5 | `drum` | `ro-d-drum` | `/images/ro/d/ro-d-drum.webp` |
| 11 | 3 | 1 | `dulceață` | `ro-d-dulceata` | `/images/ro/d/ro-d-dulceata.webp` |
| 12 | 3 | 2 | `dop` | `ro-d-dop` | `/images/ro/d/ro-d-dop.webp` |
| 13 | 3 | 3 | `dar` | `ro-d-dar` | `/images/ro/d/ro-d-dar.webp` |
| 14 | 3 | 4 | `drapel` | `ro-d-drapel` | `/images/ro/d/ro-d-drapel.webp` |
| 15 | 3 | 5 | `dalmațian` | `ro-d-dalmatian` | `/images/ro/d/ro-d-dalmatian.webp` |

## Human Review Notes

- `jet`: review that the cell reads as a fountain water jet or stream only. It must not read as aircraft, fire hose, emergency, explosion, or pressure-blast imagery.
- `ambalaj`: strict imageability review. The wrapper/package is clear and text-free, but the human must decide whether a young child can connect it to `ambalaj` without words.
- `etaj`: strict imageability review. The generated cutaway highlights an upper floor, but it may still read as generic `casă` or `clădire`.
- `peisaj`: review thumbnail clarity because it is a broad scene rather than one object.
- `majoretă`: person/action review. The figure is friendly and text-free, but the red/yellow uniform and baton require human confirmation that it does not feel military, team-branded, national, adult, or costume-specific.
- `pajiște`: review whether the meadow remains distinct from `peisaj`, `iarbă`, or generic field at wheel size.
- `coji`: strict imageability review. The fruit peels are clean and food-based; confirm they read as `coji`, not fruit snack, spiral candy, or trash.
- `drum`: review circular-mask safety for the winding road, especially the upper-right curve.
- `dulceață`: review that the jar reads as fruit jam, not sauce or compote; no label text is present.
- `dop`: review whether the cork plus bottle mouth reads clearly as `dop`, not bottle or vase.
- `drapel`: strict neutral-framing review. The generated flag has abstract blue/green bands and no text/emblem; promote only if the human confirms it is politics-free and not read as a national flag.
- `dalmațian`: review that the friendly spotted dog remains generic and has no copyrighted-character, firefighter, mascot, or branded cues.

## Brand Consistency Review

The Batch 86 contact sheet was visually compared with the accepted Batch 82 review sheet and the established image pipeline reference traits.

Observations:

- The sheet keeps the same 5x3 review layout, generous gutters, pale warm/blue square backgrounds, centered subjects, polished pixel-art volume, local-color outlines, and top-left highlights used in recent accepted batches.
- Pixel density and subject scale are broadly consistent with Batch 82, especially the strong object cells: `bujor`, `prăjitor`, `dulceață`, `dar`, and `dop`.
- The main risks are semantic and policy-related rather than style mismatch: `ambalaj`, `etaj`, `peisaj`, `majoretă`, `pajiște`, `coji`, `drapel`, and `dalmațian` need explicit human validation before any crop is promoted.
- No comparison contact sheet was committed because this batch request required one unlabeled review contact sheet only.

## Per-Word Briefs

| Stable ID | Display | Planned image path | Romanian alt text | Category | One clear subject | Safety / ambiguity notes |
| --- | --- | --- | --- | --- | --- | --- |
| `ro-j-jet` | `jet` | `/images/ro/j/ro-j-jet.webp` | `Un jet de apă` | `nature` | Water jet from a small fountain nozzle with blue arc/splash. | Water/fountain sense only; no aircraft, fire hose, emergency, explosion, weapon, or pressure-blast cue. |
| `ro-a-ambalaj` | `ambalaj` | `/images/ro/a/ro-a-ambalaj.webp` | `Un ambalaj simplu` | `household` | Simple opened package or wrapper around a child-safe object. | Must stay text-free, logo-free, barcode-free, and brand-free; imageability may be too generic. |
| `ro-e-etaj` | `etaj` | `/images/ro/e/ro-e-etaj.webp` | `Un etaj al unei clădiri` | `household` | Small building cutaway with one upper floor highlighted by color only. | No numbers, letters, elevator signs, apartment labels, or street signs; may read as generic building. |
| `ro-b-bujor` | `bujor` | `/images/ro/b/ro-b-bujor.webp` | `Un bujor roz` | `nature` | Single pink peony flower with lush rounded petals and green leaves. | Strong imageability; avoid vase labels, bouquet clutter, or generic flower shape if regenerated. |
| `ro-p-peisaj` | `peisaj` | `/images/ro/p/ro-p-peisaj.webp` | `Un peisaj cu dealuri` | `nature` | Simple landscape with hill, tree, sun, clouds, and sky. | Broad scene row; keep big shapes and low detail so it stays readable at wheel size. |
| `ro-m-majoreta` | `majoretă` | `/images/ro/m/ro-m-majoreta.webp` | `O majoretă cu baston` | `people` | Friendly majorette figure holding a baton in a simple parade/dance pose. | Person/action row; no national, military, team, logo, adult styling, sexualized pose, or branded uniform. |
| `ro-p-prajitor` | `prăjitor` | `/images/ro/p/ro-p-prajitor.webp` | `Un prăjitor de pâine` | `household` | Generic toaster appliance with two slices of bread. | Appliance sense only; no person/worker, pan, hot oil, smoke, fire, brand, or cord clutter. |
| `ro-p-pajiste` | `pajiște` | `/images/ro/p/ro-p-pajiste.webp` | `O pajiște verde` | `nature` | Green meadow with grass and flowers, optionally one simple tree. | Scene row; review distinction from `peisaj`, `câmp`, or generic grass. |
| `ro-c-coji` | `coji` | `/images/ro/c/ro-c-coji.webp` | `Coji de fructe` | `food` | Clean orange/apple peels beside a peeled fruit on a plate or surface. | Must avoid trash, wounds, peeling paint, dirt, mold, or visually unpleasant waste. |
| `ro-d-drum` | `drum` | `/images/ro/d/ro-d-drum.webp` | `Un drum simplu` | `vehicle` | Simple calm road or path with lane/edge cue. | No cars required; no accident, traffic sign text, emergency scene, or road hazard. |
| `ro-d-dulceata` | `dulceață` | `/images/ro/d/ro-d-dulceata.webp` | `Un borcan cu dulceață` | `food` | Open jam jar with spoon and visible red fruit pieces. | No label, brand, jar text, honey cue, sauce cue, or sticky mess. |
| `ro-d-dop` | `dop` | `/images/ro/d/ro-d-dop.webp` | `Un dop de plută` | `household` | Cork or bottle stopper next to a plain bottle mouth. | Avoid alcohol labels, wine branding, text, or a tiny stopper that becomes unreadable. |
| `ro-d-dar` | `dar` | `/images/ro/d/ro-d-dar.webp` | `Un dar împachetat` | `household` | Wrapped gift box with ribbon. | No written tag, holiday-specific symbol, brand pattern, or confusing package label. |
| `ro-d-drapel` | `drapel` | `/images/ro/d/ro-d-drapel.webp` | `Un drapel simplu` | `school` | Generic plain flag on a small pole with abstract non-national colors. | Must stay politics-free and non-national; no emblem, slogan, coat of arms, party symbol, military unit, or readable mark. |
| `ro-d-dalmatian` | `dalmațian` | `/images/ro/d/ro-d-dalmatian.webp` | `Un dalmațian prietenos` | `animal` | Friendly generic white dog with black spots, sitting or standing. | No copyrighted-character cues, firefighter gear, mascot pose, brand collar, or overly busy spot pattern. |

## Generation Prompt

Built-in image generation prompt used:

```txt
Use case: illustration-story
Asset type: review contact sheet for a children's Romanian vocabulary game
Primary request: Create one unlabeled 5 columns x 3 rows contact sheet of high-clarity child-friendly pixel art vocabulary icons. Preserve this exact row-major order: row 1: water jet/fountain stream, simple package/wrapper, building floor, peony flower, simple landscape. row 2: majorette with baton, toaster appliance with bread, meadow, fruit peels, simple road. row 3: open jam jar, cork stopper, wrapped gift, generic neutral flag, friendly dalmatian dog.
Style/medium: cheerful handcrafted pixel art, refined educational game icon style, visible pixel construction, polished dimensional volume, clean silhouettes, rounded friendly shapes, soft playful colors, local-color outlines, simple top-left highlights, limited internal detail.
Composition/framing: exactly 5 equal square cells by 3 equal square cells, generous gutters between cells, no labels anywhere, no text anywhere. Each cell is a complete square icon with a full pale warm off-white or soft sky-blue background. One centered subject per cell, subject fills about 70% to 82% of its square, with safe margins from all corners so a circular mask would clip only background. No cropped subjects, no partial panels, no side bars.
Cell details: 1 a water jet from a small fountain nozzle, blue water arc/splash only, not aircraft, not fire hose, not emergency, not explosion. 2 a simple opened package or wrapper around a child-safe object, no text, no logo, no barcode, no brand. 3 a small building cutaway with one upper floor visually highlighted by color or glow only, no numbers, no elevator signs, no written labels. 4 single large pink peony flower with lush rounded petals and green leaves, centered. 5 simple landscape icon with green hill, tree, sun, and sky, big shapes, low detail. 6 friendly majorette figure with baton in a simple parade/dance pose, child-safe uniform, no flag, no national/team/military cues, no logo, no adult styling. 7 generic toaster appliance with two slices of bread, no brand, no smoke, no fire, no cord clutter. 8 small green meadow with grass and flowers, maybe one simple tree, no animals, clear broad shapes. 9 clean fruit peels, orange and apple peels beside a peeled fruit on a clean plate or surface, not trash, not skin wounds, not peeling paint. 10 simple calm road/path with lane or edge cue, no cars, no traffic signs, no accident. 11 open jam jar with spoon and red fruit jam, fruit pieces visible, no label, no brand, not honey or sauce. 12 cork or bottle stopper next to a plain bottle mouth, no alcohol label, no text. 13 wrapped gift box with ribbon, no text tag, no holiday symbols. 14 generic plain flag on small pole with abstract non-national friendly colors, no national flag, no emblem, no party symbol, no slogan, no military cue, no readable mark. 15 friendly generic white dog with black spots, standing or sitting, no firefighter gear, no copyrighted-character cues, no brand, not mascot-like.
Constraints: children ages 4 to 6, safe and calm, clear at small wheel size, one centered subject per cell, full square backgrounds, circle-mask-safe composition, no letters, no numbers, no signs, no labels, no watermark, no logo, no brand, no copyrighted characters, no photorealism, no smooth CGI, no realistic 3D render, no complex scenery, no clutter, no scary mood, no violence, no weapons, no medical framing, no political framing, no national symbols, no adult theme.
```

## Generation Metadata

| Field | Value |
| --- | --- |
| Generation date | 2026-06-24 |
| Generation mode | Built-in `image_gen` tool |
| Source output | `/Users/darius/.codex/generated_images/019ef9ca-d5c8-79a0-873c-fde1cc7dc295/ig_0863b06e5d71b48e016a3bda002f2c8193baef50f3c00983b2.png` |
| Workspace review copy | `assets/image-sources/ro/batch-86/contact-sheet.png` |
| Review copy dimensions | `1536 x 1024` PNG |
| Review copy size | `1,787,373 B` |
| Model/tool metadata | No model name, seed, or prompt revision ID exposed by the built-in tool in this run. |
| Production status | Review-only; no cropped cells or optimized public WebP assets created. |

## Human Validation Gate

Stop here for human image validation. Do not crop cells, optimize WebP files, edit production JSON, or promote any Slice 3 row until the human explicitly accepts the relevant contact-sheet cells or asks for a bounded corrective contact sheet.

If the human accepts all or selected cells, the next batch must promote only the accepted cells and must keep rejected or unclear cells out of production.
