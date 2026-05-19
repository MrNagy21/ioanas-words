# Batch 33 Image Briefs: General Placeholder Replacement Slice 16

Batch: Romanian Content Expansion Batch 33, General Placeholder Image Replacement Slice 16.

Spec date: 2026-05-18.

Status: Implemented sixteenth image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed records only. The selected words prioritize common, concrete, visually clear `R`, `S`, and `T` placeholders whose thumbnail concepts are suitable for wheel and modal use.

| Word ID          | Word        | Category  | Image brief                                                                   | Review result |
| ---------------- | ----------- | --------- | ----------------------------------------------------------------------------- | ------------- |
| `ro-r-raft`      | `raft`      | household | One simple shelving unit with books and small objects, no text or labels.     | accepted      |
| `ro-r-ramura`    | `ramură`    | nature    | One branch with green leaves, no full forest scene.                           | accepted      |
| `ro-r-rau`       | `râu`       | nature    | One simple winding blue river with green banks, no animals or people.         | accepted      |
| `ro-r-rosie`     | `roșie`     | food      | One red tomato with green leaves, no face.                                    | accepted      |
| `ro-r-robinet`   | `robinet`   | household | One faucet with a small water drop, no sink scene or brand.                   | accepted      |
| `ro-r-rotita`    | `rotiță`    | toy       | One small wheel/cog shape, centered and simple.                               | accepted      |
| `ro-s-sandvis`   | `sandviș`   | food      | One triangular sandwich with visible filling, no plate clutter.               | accepted      |
| `ro-s-scara`     | `scară`     | household | One freestanding wooden ladder, no person climbing.                           | accepted      |
| `ro-s-scoica`    | `scoică`    | nature    | One pink seashell, no beach scene.                                            | accepted      |
| `ro-s-sfoara`    | `sfoară`    | household | One coil of string with a loose end, no knot complexity.                      | accepted      |
| `ro-s-spuma`     | `spumă`     | household | A small cluster of white foam bubbles, no person or bath scene.               | accepted      |
| `ro-s-struguri`  | `struguri`  | food      | One bunch of purple grapes with a leaf, no bowl.                              | accepted      |
| `ro-s-stilou`    | `stilou`    | school    | One blue fountain pen, no written marks or brand.                             | accepted      |
| `ro-s-stejar`    | `stejar`    | nature    | One oak tree with small acorns, simplified for thumbnail clarity.             | accepted      |
| `ro-s-saniuta`   | `săniuță`   | vehicle   | One small red sled, no child or snow scene required.                          | accepted      |
| `ro-t-tava`      | `tavă`      | household | One simple tray with handles, no food clutter.                                | accepted      |
| `ro-t-telefon`   | `telefon`   | household | One generic mobile phone, no logo, app icons, numbers, or text.               | accepted      |
| `ro-t-tigru`     | `tigru`     | animal    | One friendly tiger face, non-scary, no full jungle scene.                     | accepted      |
| `ro-t-toba`      | `tobă`      | toy       | One red drum with drumsticks, no logo.                                        | accepted      |
| `ro-t-tobogan`   | `tobogan`   | toy       | One simple playground slide, no child or park clutter.                        | accepted      |
| `ro-t-tort`      | `tort`      | food      | One small cake with candles, no letters or numbers.                           | accepted      |
| `ro-t-tricou`    | `tricou`    | clothing  | One plain blue T-shirt, no logo or text.                                      | accepted      |
| `ro-t-televizor` | `televizor` | household | One generic television screen, no logo, text, characters, or broadcast scene. | accepted      |

Deferred from the prompt examples:

- `tata`: person-sensitive for this image-only slice; left as a placeholder.
- `stinghie`: lower-familiarity and visually less clear for a 4-to-6-year-old thumbnail; left as a placeholder.

## Generation And Review

Generation followed the established pixel-art constraints in `docs/image-pipeline.md`, but this slice used deterministic local source drawing rather than an external image model: each accepted icon was authored as a simple `64 x 64 px` hard-edged pixel-art source, reviewed on a contact sheet, upscaled with nearest-neighbor sampling to `256 x 256 px`, and encoded as lossless WebP with `sharp`.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters in final assets;
- one centered subject per image, except `râu`, where the word requires a simple nature setting;
- no person-dependent visuals;
- `tigru` is friendly and non-scary;
- `telefon` and `televizor` are generic and brand-free;
- `scară` is disambiguated as a ladder;
- consistent hard-edged pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

Post-acceptance human review on 2026-05-18 flagged `ro-r-robinet` as too coarse and ambiguous compared with the stronger production pack. It remains a ready asset in the current content JSON, but it should be included in a future corrective regeneration slice before being treated as a final style example.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/r/ro-r-raft.webp
public/images/ro/r/ro-r-ramura.webp
public/images/ro/r/ro-r-rau.webp
public/images/ro/r/ro-r-rosie.webp
public/images/ro/r/ro-r-robinet.webp
public/images/ro/r/ro-r-rotita.webp
public/images/ro/s/ro-s-sandvis.webp
public/images/ro/s/ro-s-scara.webp
public/images/ro/s/ro-s-scoica.webp
public/images/ro/s/ro-s-sfoara.webp
public/images/ro/s/ro-s-spuma.webp
public/images/ro/s/ro-s-struguri.webp
public/images/ro/s/ro-s-stilou.webp
public/images/ro/s/ro-s-stejar.webp
public/images/ro/s/ro-s-saniuta.webp
public/images/ro/t/ro-t-tava.webp
public/images/ro/t/ro-t-telefon.webp
public/images/ro/t/ro-t-tigru.webp
public/images/ro/t/ro-t-toba.webp
public/images/ro/t/ro-t-tobogan.webp
public/images/ro/t/ro-t-tort.webp
public/images/ro/t/ro-t-tricou.webp
public/images/ro/t/ro-t-televizor.webp
```

Final encoded sizes:

| Asset                 | Bytes |
| --------------------- | ----: |
| `ro-r-raft.webp`      | `216` |
| `ro-r-ramura.webp`    | `320` |
| `ro-r-rau.webp`       | `370` |
| `ro-r-rosie.webp`     | `310` |
| `ro-r-robinet.webp`   | `182` |
| `ro-r-rotita.webp`    | `296` |
| `ro-s-sandvis.webp`   | `322` |
| `ro-s-scara.webp`     | `182` |
| `ro-s-scoica.webp`    | `330` |
| `ro-s-sfoara.webp`    | `352` |
| `ro-s-spuma.webp`     | `248` |
| `ro-s-struguri.webp`  | `294` |
| `ro-s-stilou.webp`    | `266` |
| `ro-s-stejar.webp`    | `320` |
| `ro-s-saniuta.webp`   | `224` |
| `ro-t-tava.webp`      | `150` |
| `ro-t-telefon.webp`   | `158` |
| `ro-t-tigru.webp`     | `354` |
| `ro-t-toba.webp`      | `394` |
| `ro-t-tobogan.webp`   | `234` |
| `ro-t-tort.webp`      | `216` |
| `ro-t-tricou.webp`    | `252` |
| `ro-t-televizor.webp` | `162` |

The reviewed source PNGs and review sheet were staged under ignored `assets/image-sources/ro/batch-33/` paths. Cropped source PNGs were staged under ignored `assets/image-sources/ro/r/`, `assets/image-sources/ro/s/`, and `assets/image-sources/ro/t/` paths.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `370`.
- Ready images: `292 -> 315`.
- Placeholder images: `78 -> 55`.
- Letter image readiness now includes:
  - `R`: `14` ready / `0` placeholder;
  - `S`: `17` ready / `1` placeholder;
  - `T`: `9` ready / `1` placeholder.

No `Ă` or `Â` bucket work was added.
