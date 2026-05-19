# Batch 31 Image Briefs: General Placeholder Replacement Slice 14

Batch: Romanian Content Expansion Batch 31, General Placeholder Image Replacement Slice 14.

Spec date: 2026-05-18.

Status: Implemented fourteenth image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed records only. The selected words prioritize common, concrete, visually clear H/I/J/L/M placeholders whose generated thumbnail concepts were clear enough for wheel and modal use.

| Word ID | Word | Category | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-h-haina` | `haină` | clothing | One simple child jacket or coat, no person, hanger, text, or clothing rack. | accepted |
| `ro-i-iarba` | `iarbă` | nature | One bright green tuft of grass, no broad landscape scene. | accepted |
| `ro-j-joc` | `joc` | toy | One generic board game with pawns and dice, no readable markings. | accepted |
| `ro-j-jeleu` | `jeleu` | food | One colorful jelly dessert mold on a plate, no face or extra dessert scene. | accepted |
| `ro-j-jaluzea` | `jaluzea` | household | One simple window blind panel, no room clutter. | accepted |
| `ro-l-lac` | `lac` | nature | One small blue lake or pond with a few reeds, no large landscape. | accepted |
| `ro-l-lalea` | `lalea` | nature | One single red tulip with green stem and leaves. | accepted |
| `ro-l-lamaie` | `lămâie` | food | One whole yellow lemon with a small leaf, no face. | accepted |
| `ro-l-lapte` | `lapte` | food | One plain glass bottle of milk, no label, logo, or text. | accepted |
| `ro-l-lanterna` | `lanternă` | household | One yellow handheld flashlight or lantern, no camping scene. | accepted |
| `ro-l-leu` | `leu` | animal | One friendly lion, non-scary, with no sharp-teeth emphasis. | accepted |
| `ro-l-lingura` | `lingură` | household | One single spoon, large enough to read as a regular spoon. | accepted |
| `ro-l-lup` | `lup` | animal | One friendly grey wolf, non-scary, with no teeth emphasis. | accepted |
| `ro-l-lant` | `lanț` | household | One short metal chain with several links, no lock. | accepted |
| `ro-l-lingurita` | `linguriță` | household | One small teaspoon, visually distinct from the larger spoon. | accepted |
| `ro-m-maimuta` | `maimuță` | animal | One friendly monkey, simple and child-safe. | accepted |
| `ro-m-magar` | `măgar` | animal | One friendly donkey, simple and child-safe. | accepted |
| `ro-m-matura` | `mătură` | household | One broom with handle and bristles, no witch context. | accepted |
| `ro-m-miere` | `miere` | food | One honey jar with dipper and honey, no label or text. | accepted |
| `ro-m-motan` | `motan` | animal | One friendly grey domestic cat, distinct from a kitten. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The accepted source was a 5-by-4 contact sheet generated with generous gutters and no labels. Source cells were cropped in the fixed order above, resized to `256 x 256 px`, and encoded as final WebP assets with local `cwebp`. The higher-detail animal and texture-heavy icons were re-encoded at a slightly smaller quality setting after review so every final asset stayed below the `12 KB` warning threshold and the `20 KB` hard maximum.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- no person-dependent visuals;
- `joc` reads as a generic board game rather than a branded toy;
- `lac` reads as a small lake or pond rather than paint or varnish;
- `leu` reads as the animal sense, not currency;
- `lup` is friendly and non-scary;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/h/ro-h-haina.webp
public/images/ro/i/ro-i-iarba.webp
public/images/ro/j/ro-j-joc.webp
public/images/ro/j/ro-j-jeleu.webp
public/images/ro/j/ro-j-jaluzea.webp
public/images/ro/l/ro-l-lac.webp
public/images/ro/l/ro-l-lalea.webp
public/images/ro/l/ro-l-lamaie.webp
public/images/ro/l/ro-l-lapte.webp
public/images/ro/l/ro-l-lanterna.webp
public/images/ro/l/ro-l-leu.webp
public/images/ro/l/ro-l-lingura.webp
public/images/ro/l/ro-l-lup.webp
public/images/ro/l/ro-l-lant.webp
public/images/ro/l/ro-l-lingurita.webp
public/images/ro/m/ro-m-maimuta.webp
public/images/ro/m/ro-m-magar.webp
public/images/ro/m/ro-m-matura.webp
public/images/ro/m/ro-m-miere.webp
public/images/ro/m/ro-m-motan.webp
```

Final encoded sizes:

| Asset | Bytes |
| --- | ---: |
| `ro-h-haina.webp` | `11372` |
| `ro-i-iarba.webp` | `9456` |
| `ro-j-joc.webp` | `10148` |
| `ro-j-jeleu.webp` | `10166` |
| `ro-j-jaluzea.webp` | `8676` |
| `ro-l-lac.webp` | `11370` |
| `ro-l-lalea.webp` | `9592` |
| `ro-l-lamaie.webp` | `8992` |
| `ro-l-lapte.webp` | `5844` |
| `ro-l-lanterna.webp` | `9630` |
| `ro-l-leu.webp` | `10186` |
| `ro-l-lingura.webp` | `7226` |
| `ro-l-lup.webp` | `11472` |
| `ro-l-lant.webp` | `8132` |
| `ro-l-lingurita.webp` | `4364` |
| `ro-m-maimuta.webp` | `10666` |
| `ro-m-magar.webp` | `10778` |
| `ro-m-matura.webp` | `8500` |
| `ro-m-miere.webp` | `9732` |
| `ro-m-motan.webp` | `8860` |

The accepted source contact sheet was staged under ignored `assets/image-sources/ro/batch-31/` paths.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `370`.
- Ready images: `252 -> 272`.
- Placeholder images: `118 -> 98`.
- Letter image readiness now includes:
  - `H`: `3` ready / `0` placeholder;
  - `I`: `6` ready / `2` placeholder;
  - `J`: `5` ready / `0` placeholder;
  - `L`: `12` ready / `0` placeholder;
  - `M`: `18` ready / `6` placeholder.

No `Ă` or `Â` bucket work was added.
