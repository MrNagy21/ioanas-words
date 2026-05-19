# Batch 28 Image Briefs: General Placeholder Replacement Slice 11

Batch: Romanian Content Expansion Batch 28, General Placeholder Image Replacement Slice 11.

Spec date: 2026-05-18.

Status: Implemented eleventh image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed records only. The selected words prioritize common, concrete, visually clear F/U/V/Ș/Ț placeholders whose reviewed thumbnail concepts were clear enough for wheel and modal use.

| Word ID | Word | Category | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-f-fular` | `fular` | clothing | One cozy knitted scarf with clear folded scarf shape, no person. | accepted |
| `ro-f-furculita` | `furculiță` | household | One simple silver fork with rounded safe tines, no plate or food. | accepted |
| `ro-u-umbrela` | `umbrelă` | household | One open yellow umbrella with curved handle, no rain scene. | accepted |
| `ro-u-ursulet` | `ursuleț` | toy | One friendly brown teddy bear toy, clearly plush and not a real bear. | accepted |
| `ro-v-vaca` | `vacă` | animal | One friendly black-and-white cow with clear cow silhouette. | accepted |
| `ro-v-vapor` | `vapor` | vehicle | One generic blue-and-white passenger ship, no flag, brand, or ocean clutter. | accepted |
| `ro-v-vulpe` | `vulpe` | animal | One friendly orange fox with bushy tail, non-aggressive. | accepted |
| `ro-sh-soparla` | `șopârlă` | animal | One small green lizard, side view with legs and tail, clearly not a crocodile. | accepted |
| `ro-sh-sarpe` | `șarpe` | animal | One friendly green snake, non-scary, no fangs or bite context. | accepted |
| `ro-tz-tantar` | `țânțar` | animal | One enlarged simple mosquito icon with wings and proboscis, no bite, blood, or person. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The accepted source was a 5-by-2 contact sheet generated with generous gutters and no labels. Source cells were cropped in the fixed order above, resized to `256 x 256 px`, simplified to a small hard-edged pixel palette, and encoded as final lossless WebP assets with local `cwebp`. This kept every final asset under the `20 KB` hard maximum while preserving clear silhouettes.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- `ursuleț` reads as a plush toy, not a real bear;
- `șarpe`, `șopârlă`, and `țânțar` are non-scary and free of bite or danger context;
- `vapor` is generic and unbranded;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/f/ro-f-fular.webp
public/images/ro/f/ro-f-furculita.webp
public/images/ro/u/ro-u-umbrela.webp
public/images/ro/u/ro-u-ursulet.webp
public/images/ro/v/ro-v-vaca.webp
public/images/ro/v/ro-v-vapor.webp
public/images/ro/v/ro-v-vulpe.webp
public/images/ro/ș/ro-sh-soparla.webp
public/images/ro/ș/ro-sh-sarpe.webp
public/images/ro/ț/ro-tz-tantar.webp
```

Final encoded sizes:

| Asset | Bytes |
| --- | ---: |
| `ro-f-fular.webp` | `17000` |
| `ro-f-furculita.webp` | `5924` |
| `ro-u-umbrela.webp` | `8616` |
| `ro-u-ursulet.webp` | `14028` |
| `ro-v-vaca.webp` | `13496` |
| `ro-v-vapor.webp` | `8932` |
| `ro-v-vulpe.webp` | `12314` |
| `ro-sh-soparla.webp` | `10560` |
| `ro-sh-sarpe.webp` | `13208` |
| `ro-tz-tantar.webp` | `12036` |

`ro-f-fular`, `ro-u-ursulet`, `ro-v-vaca`, `ro-v-vulpe`, and `ro-sh-sarpe` are above the `12 KB` warning threshold but remain below the `20 KB` hard maximum and passed content validation.

Source PNGs and the accepted contact sheet were staged under ignored `assets/image-sources/ro/` paths.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `370`.
- Ready images: `205 -> 215`.
- Placeholder images: `165 -> 155`.
- Letter image readiness now includes:
  - `F`: `11` ready / `6` placeholder;
  - `U`: `8` ready / `2` placeholder;
  - `V`: `3` ready / `6` placeholder;
  - `Ș`: `5` ready / `7` placeholder;
  - `Ț`: `2` ready / `3` placeholder.

No `Ă` or `Â` bucket work was added.
