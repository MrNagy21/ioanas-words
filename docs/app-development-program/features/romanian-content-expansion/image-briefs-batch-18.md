# Batch 18 Image Briefs: CHE/CHI Placeholder Replacement Slice

Batch: Romanian Content Expansion Batch 18, Placeholder Image Replacement Slice 3.

Spec date: 2026-05-17.

Status: Implemented third image-replacement slice.

## Scope

This slice replaced 15 placeholder-backed words that clear the remaining `CHE` and `CHI` practice-target placeholders.

| Word ID | Word | Target value | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-c-cheie` | `cheie` | initial `CHE` | Simple metal house key, no text or brand marks. | accepted |
| `ro-c-chec` | `chec` | initial `CHE` | Simple sliced loaf cake, no plate text or decoration letters. | accepted |
| `ro-b-buchet` | `buchet` | medial/final `CHE` spelling | Small cheerful flower bouquet tied with a ribbon. | accepted |
| `ro-c-cascheta` | `caschetă` | medial `CHE` spelling | Simple child cap with short visor, no logo or letters. | accepted |
| `ro-o-ochelari` | `ochelari` | medial `CHE` spelling | Pair of child-friendly eyeglasses, no face. | accepted |
| `ro-p-pachet` | `pachet` | medial `CHE` spelling | Plain wrapped package with ribbon, no label or brand. | accepted |
| `ro-r-ridiche` | `ridiche` | medial/final `CHE` spelling | Red-and-white radish with green leaves. | accepted |
| `ro-u-ureche` | `ureche` | medial/final `CHE` spelling | Neutral human ear icon, no injury or medical scene. | accepted |
| `ro-c-chitara` | `chitară` | initial `CHI` | Small acoustic guitar, no logo or letters. | accepted |
| `ro-c-chifla` | `chiflă` | initial `CHI` | Small round bread roll. | accepted |
| `ro-c-chiftea` | `chiftea` | initial `CHI` | Simple cooked meatball on a plain plate, not messy. | accepted |
| `ro-c-chiosc` | `chioșc` | initial `CHI` | Small outdoor kiosk booth, no written sign or text. | accepted |
| `ro-c-cochilie` | `cochilie` | medial `CHI` spelling | Simple spiral seashell. | accepted |
| `ro-o-ochi` | `ochi` | medial/final `CHI` spelling | Neutral human eye icon, friendly and not scary. | accepted |
| `ro-u-unchi` | `unchi` | medial/final `CHI` spelling | Friendly generic adult man bust for uncle, no text or stereotype. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The first generated contact sheet was rejected for production cropping because the icons were too close together and several crops picked up neighboring-cell artifacts. The accepted replacement sheet used smaller centered subjects and wider gutters so each icon could be cropped cleanly. Source cells were cropped inside each generated cell, normalized to the warm pack background, palette-reduced, and optimized through the existing local image optimizer path.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- no injury, frightening pose, or medical scene for `ureche` or `ochi`;
- no written signage on `chioșc`;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/b/ro-b-buchet.webp
public/images/ro/c/ro-c-cascheta.webp
public/images/ro/c/ro-c-chec.webp
public/images/ro/c/ro-c-cheie.webp
public/images/ro/c/ro-c-chifla.webp
public/images/ro/c/ro-c-chiftea.webp
public/images/ro/c/ro-c-chiosc.webp
public/images/ro/c/ro-c-chitara.webp
public/images/ro/c/ro-c-cochilie.webp
public/images/ro/o/ro-o-ochelari.webp
public/images/ro/o/ro-o-ochi.webp
public/images/ro/p/ro-p-pachet.webp
public/images/ro/r/ro-r-ridiche.webp
public/images/ro/u/ro-u-unchi.webp
public/images/ro/u/ro-u-ureche.webp
```

Source PNGs were staged under ignored `assets/image-sources/ro/<letter>/` paths from the accepted regenerated contact sheet.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `319`.
- Ready images: `107 -> 122`.
- Placeholder images: `212 -> 197`.
- `CHE` practice target ready-image coverage improves from `2` to `10`.
- `CHI` practice target ready-image coverage improves from `2` to `9`.
