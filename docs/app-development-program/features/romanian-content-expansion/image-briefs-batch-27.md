# Batch 27 Image Briefs: General Placeholder Replacement Slice 10

Batch: Romanian Content Expansion Batch 27, General Placeholder Image Replacement Slice 10.

Spec date: 2026-05-18.

Status: Implemented tenth image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed records only. The selected words prioritize common, concrete, visually clear C/D/E/F placeholders whose reviewed thumbnail concepts were clear enough for wheel and modal use.

| Word ID | Word | Category | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-c-capra` | `capră` | animal | One friendly white goat with small horns and clear goat silhouette. | accepted |
| `ro-c-capsuna` | `căpșună` | food | One large red strawberry with green leaves and visible seeds. | accepted |
| `ro-c-clopotel` | `clopoțel` | household | One small golden hand bell with a handle, no sound marks or text. | accepted |
| `ro-c-colac` | `colac` | food | One braided sweet bread ring, clearly food and not a swimming ring. | accepted |
| `ro-c-cort` | `cort` | household | One simple green camping tent, no campsite clutter. | accepted |
| `ro-c-cocos` | `cocoș` | animal | One colorful rooster, non-aggressive and child-safe. | accepted |
| `ro-c-caruta` | `căruță` | vehicle | One simple empty wooden cart with wheels, no horse or person. | accepted |
| `ro-c-casuta` | `căsuță` | household | One small cozy house with a red roof, toy-like and friendly. | accepted |
| `ro-c-cozonac` | `cozonac` | food | One sliced Romanian sweet bread loaf with visible swirl. | accepted |
| `ro-d-delfin` | `delfin` | animal | One friendly blue dolphin, no busy ocean scene. | accepted |
| `ro-d-dovleac` | `dovleac` | food | One orange pumpkin with simple green stem. | accepted |
| `ro-d-dulap` | `dulap` | household | One wooden wardrobe cabinet with clear doors and drawers. | accepted |
| `ro-e-elefant` | `elefant` | animal | One friendly gray elephant with clear trunk and ears. | accepted |
| `ro-e-elicopter` | `elicopter` | vehicle | One generic red-and-white helicopter, no brand or markings. | accepted |
| `ro-f-floare` | `floare` | nature | One pink flower with green leaves and a clear stem. | accepted |
| `ro-f-fluture` | `fluture` | animal | One orange and purple butterfly with clear wings and antennae. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The accepted source was a 4-by-4 contact sheet generated with generous gutters and no labels. Source cells were cropped in the fixed order above, reduced to a simpler 128 px pixel grid, doubled back to `256 x 256 px` with nearest-neighbor sampling, quantized to a small channel palette, and encoded as final lossless WebP assets with local `cwebp`. This kept the final assets within the project size target while preserving clear silhouettes.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- `colac` reads as braided bread rather than a swimming ring;
- `căruță` has no horse, person, or unsafe motion;
- `cocoș` is non-aggressive;
- `elicopter` is generic and unbranded;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` lossless WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/c/ro-c-capra.webp
public/images/ro/c/ro-c-capsuna.webp
public/images/ro/c/ro-c-clopotel.webp
public/images/ro/c/ro-c-colac.webp
public/images/ro/c/ro-c-cort.webp
public/images/ro/c/ro-c-cocos.webp
public/images/ro/c/ro-c-caruta.webp
public/images/ro/c/ro-c-casuta.webp
public/images/ro/c/ro-c-cozonac.webp
public/images/ro/d/ro-d-delfin.webp
public/images/ro/d/ro-d-dovleac.webp
public/images/ro/d/ro-d-dulap.webp
public/images/ro/e/ro-e-elefant.webp
public/images/ro/e/ro-e-elicopter.webp
public/images/ro/f/ro-f-floare.webp
public/images/ro/f/ro-f-fluture.webp
```

Final encoded sizes:

| Asset | Bytes |
| --- | ---: |
| `ro-c-capra.webp` | `5582` |
| `ro-c-capsuna.webp` | `6696` |
| `ro-c-clopotel.webp` | `4010` |
| `ro-c-colac.webp` | `8310` |
| `ro-c-cort.webp` | `4804` |
| `ro-c-cocos.webp` | `6948` |
| `ro-c-caruta.webp` | `6262` |
| `ro-c-casuta.webp` | `9140` |
| `ro-c-cozonac.webp` | `9722` |
| `ro-d-delfin.webp` | `4438` |
| `ro-d-dovleac.webp` | `6188` |
| `ro-d-dulap.webp` | `5264` |
| `ro-e-elefant.webp` | `7408` |
| `ro-e-elicopter.webp` | `6538` |
| `ro-f-floare.webp` | `5668` |
| `ro-f-fluture.webp` | `8160` |

Source PNGs, the accepted contact sheet, and the cropped review sheet were staged under ignored `assets/image-sources/ro/` paths.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `370`.
- Ready images: `189 -> 205`.
- Placeholder images: `181 -> 165`.
- Letter image readiness now includes:
  - `C`: `57` ready / `5` placeholder;
  - `D`: `6` ready / `3` placeholder;
  - `E`: `3` ready / `4` placeholder;
  - `F`: `9` ready / `8` placeholder.

No `Ă` or `Â` bucket work was added.
