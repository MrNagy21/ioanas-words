# Batch 26 Image Briefs: General Placeholder Replacement Slice 9

Batch: Romanian Content Expansion Batch 26, General Placeholder Image Replacement Slice 9.

Spec date: 2026-05-18.

Status: Implemented ninth image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed records only. The selected words prioritize remaining sequence and exact-`Î` placeholders where the reviewed thumbnail concept was clear enough for wheel and modal use.

| Word ID | Word | Category | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-i-circ-inger` | `înger` | people | One friendly childlike angel with small wings and halo, gentle and non-scary. | accepted |
| `ro-g-gibon` | `gibon` | animal | One friendly gibbon with long arms and clear ape silhouette, not scary. | accepted |
| `ro-g-giroscop` | `giroscop` | toy | One colorful toy gyroscope with clear ring and spinning top shape, not a compass. | accepted |
| `ro-m-mocheta` | `mochetă` | household | One rolled carpet or rug sample with a clear textile edge, not a full room. | accepted |
| `ro-m-macheta` | `machetă` | toy | One small model house on a base, clearly toy-scale and not a real building scene. | accepted |
| `ro-g-gheara` | `gheară` | body | One friendly animal paw with visible claws, no blood or scratch marks. | accepted |
| `ro-g-ghetus` | `ghețuș` | nature | One small blue icy patch with sparkle highlights, no person slipping. | accepted |
| `ro-a-argint` | `argint` | household | One shiny silver spoon and simple silver disk, no currency symbols or text. | accepted |
| `ro-c-chimen` | `chimen` | food | One small mound of cumin seeds with a green herb sprig, no package or label. | accepted |
| `ro-u-unghi` | `unghi` | school | Two colorful wooden sticks meeting at a clear angle, no degree mark or numbers. | accepted |
| `ro-g-ghiseu` | `ghișeu` | household | One simple service counter/window with a small shelf and bell, no signs, money, or text. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The accepted source was a 4-by-3 contact sheet generated with generous gutters and no labels. Source cells were cropped in the fixed order above, reduced to a simpler 128 px pixel grid, doubled back to `256 x 256 px` with nearest-neighbor sampling, quantized to a small channel palette, and encoded as final lossless WebP assets with local `cwebp`. This kept the final assets within the project size target while preserving clear silhouettes.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- `înger` stays gentle and non-scary;
- `gheară` contains no injury, blood, or scratch marks;
- `ghețuș` shows no unsafe slipping action;
- `argint` avoids money symbols and numbers;
- `unghi` avoids degrees, letters, and numbers;
- `ghișeu` avoids signs, money, and written labels;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` lossless WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/î/ro-i-circ-inger.webp
public/images/ro/g/ro-g-gibon.webp
public/images/ro/g/ro-g-giroscop.webp
public/images/ro/m/ro-m-mocheta.webp
public/images/ro/m/ro-m-macheta.webp
public/images/ro/g/ro-g-gheara.webp
public/images/ro/g/ro-g-ghetus.webp
public/images/ro/a/ro-a-argint.webp
public/images/ro/c/ro-c-chimen.webp
public/images/ro/u/ro-u-unghi.webp
public/images/ro/g/ro-g-ghiseu.webp
```

Final encoded sizes:

| Asset | Bytes |
| --- | ---: |
| `ro-i-circ-inger.webp` | `6726` |
| `ro-g-gibon.webp` | `6020` |
| `ro-g-giroscop.webp` | `7102` |
| `ro-m-mocheta.webp` | `7276` |
| `ro-m-macheta.webp` | `7502` |
| `ro-g-gheara.webp` | `5276` |
| `ro-g-ghetus.webp` | `4550` |
| `ro-a-argint.webp` | `4286` |
| `ro-c-chimen.webp` | `7168` |
| `ro-u-unghi.webp` | `2106` |
| `ro-g-ghiseu.webp` | `4828` |

Source PNGs and the accepted contact sheet were staged under ignored `assets/image-sources/ro/` paths.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `370`.
- Ready images: `178 -> 189`.
- Placeholder images: `192 -> 181`.
- Exact `Î` starts-with image readiness improves from `5` ready / `3` placeholder to `6` ready / `2` placeholder.
- Sequence target image readiness improves for:
  - `GE`: `11` ready / `4` placeholder -> `13` ready / `2` placeholder;
  - `GI`: `7` ready / `8` placeholder -> `10` ready / `5` placeholder;
  - `CHE`: `13` ready / `2` placeholder -> `15` ready / `0` placeholder;
  - `CHI`: `11` ready / `4` placeholder -> `12` ready / `3` placeholder;
  - `GHE`: `11` ready / `4` placeholder -> `13` ready / `2` placeholder;
  - `GHI`: `8` ready / `7` placeholder -> `13` ready / `2` placeholder.

`CE` remains fully ready at `16` ready / `0` placeholder. No `Ă` or `Â` bucket work was added.
