# Batch 17 Image Briefs: G-Sequence Placeholder Replacement Slice

Batch: Romanian Content Expansion Batch 17, Placeholder Image Replacement Slice 2.

Spec date: 2026-05-17.

Status: Implemented second image-replacement slice.

## Scope

This slice replaced 12 placeholder-backed `G` words that improve high-value sequence targets, especially `GE`, `GHE`, and `GHI`, with one `CHI` overlap through `genunchi`.

| Word ID | Word | Target value | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-g-geaca` | `geacă` | initial `GE` | Simple child jacket, no logo or text. | accepted |
| `ro-g-geanta` | `geantă` | initial `GE` | Simple handbag or shoulder bag, no logo or text. | accepted |
| `ro-g-genunchi` | `genunchi` | initial `GE`, final `CHI` spelling | Neutral bent knee/body-part icon, no injury or medical scene. | accepted |
| `ro-g-ghete` | `ghete` | initial `GHE` | Pair of child-friendly boots, no logo. | accepted |
| `ro-g-ghetuta` | `ghetuță` | initial `GHE`, medial/final `Ț` | One small boot, distinct from the pair of boots. | accepted |
| `ro-g-ghem` | `ghem` | initial `GHE` | Ball of yarn, no needles or extra objects. | accepted |
| `ro-g-ghepard` | `ghepard` | initial `GHE` | Friendly cheetah with spots, not scary. | accepted |
| `ro-g-ghiozdan` | `ghiozdan` | initial `GHI`, medial `Z` | School backpack, no logo or text. | accepted |
| `ro-g-ghiveci` | `ghiveci` | initial `GHI`, final `CI` spelling | Flower pot with a small green plant. | accepted |
| `ro-g-ghinda` | `ghindă` | initial `GHI` | Single acorn, no face or extra objects. | accepted |
| `ro-g-ghiocel` | `ghiocel` | initial `GHI`, final `CE` spelling | Single snowdrop flower. | accepted |
| `ro-g-ghidon` | `ghidon` | initial `GHI` | Bicycle handlebar with grips and stem, no logo or text. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The generated 4 x 3 sprite sheet was accepted after visual review. Source cells were cropped, resized, and palette-reduced before running the existing optimizer.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- no injury, frightening pose, or medical scene for `genunchi`;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/g/ro-g-geaca.webp
public/images/ro/g/ro-g-geanta.webp
public/images/ro/g/ro-g-genunchi.webp
public/images/ro/g/ro-g-ghem.webp
public/images/ro/g/ro-g-ghepard.webp
public/images/ro/g/ro-g-ghete.webp
public/images/ro/g/ro-g-ghetuta.webp
public/images/ro/g/ro-g-ghidon.webp
public/images/ro/g/ro-g-ghinda.webp
public/images/ro/g/ro-g-ghiocel.webp
public/images/ro/g/ro-g-ghiozdan.webp
public/images/ro/g/ro-g-ghiveci.webp
```

Source PNGs were staged under ignored `assets/image-sources/ro/g/` paths, with trace metadata in `assets/image-sources/ro/batch-17-metadata.json`.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `319`.
- Ready images: `95 -> 107`.
- Placeholder images: `224 -> 212`.
- `GE` practice target ready-image coverage improves from `4` to `7`.
- `CHI` practice target ready-image coverage improves from `1` to `2`.
- `GHE` practice target ready-image coverage improves from `1` to `5`.
- `GHI` practice target ready-image coverage improves from `0` to `5`.
- `CE` and `CI` receive incidental ready-image improvements through `ghiocel` and `ghiveci`.
