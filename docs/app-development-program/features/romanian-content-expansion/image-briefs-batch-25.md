# Batch 25 Image Briefs: General Placeholder Replacement Slice 8

Batch: Romanian Content Expansion Batch 25, General Placeholder Image Replacement Slice 8.

Spec date: 2026-05-18.

Status: Implemented eighth image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed records only. The selected words prioritize remaining high-value sequence placeholders with clear small-icon image concepts.

| Word ID | Word | Category | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-l-licurici` | `licurici` | animal | One friendly firefly with a clear glowing yellow tail, simple wings, not scary. | accepted |
| `ro-p-piscina` | `piscină` | household | One small safe blue swimming pool with water and pool edge only, no person or diving. | accepted |
| `ro-c-cerneala` | `cerneală` | school | One blue ink bottle with a single ink drop, no label or written mark. | accepted |
| `ro-f-fulgi` | `fulgi` | nature | Several clear white snowflakes, simple and distinct. | accepted |
| `ro-f-fragi` | `fragi` | food | A small cluster of red wild strawberries with green leaves, no package. | accepted |
| `ro-g-ghemotoc` | `ghemotoc` | household | One crumpled paper ball, clearly a rounded crumpled lump, no text marks. | accepted |
| `ro-g-ghetar` | `ghețar` | nature | One friendly blue glacier or ice block with simple facets, no danger scene. | accepted |
| `ro-b-bagheta` | `baghetă` | toy | One simple magic wand toy with a small star tip, no bread and no letters. | accepted |
| `ro-p-parchet` | `parchet` | household | A clean sample of wooden floor planks, warm brown, clear plank seams, no room scene. | accepted |
| `ro-e-echer` | `echer` | school | One triangular school set square, no numbers, measuring marks, or letters. | accepted |
| `ro-o-ochean` | `ochean` | toy | One child-safe toy spyglass, no pirate branding or symbols. | accepted |
| `ro-c-chipiu` | `chipiu` | clothing | One simple soft peaked cap, no badge, uniform, or military/police insignia. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The accepted source was a 4-by-3 contact sheet generated with generous gutters and no labels. Source cells were cropped in the fixed order above, the connected pale background was flattened to the warm pack background, palette depth was reduced to 32 colors, and final lossless WebP assets were encoded with local `cwebp`.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- `piscină` shows no unsafe swimming action;
- `echer` contains no written measuring marks;
- `chipiu` contains no badge or uniform insignia;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/l/ro-l-licurici.webp
public/images/ro/p/ro-p-piscina.webp
public/images/ro/c/ro-c-cerneala.webp
public/images/ro/f/ro-f-fulgi.webp
public/images/ro/f/ro-f-fragi.webp
public/images/ro/g/ro-g-ghemotoc.webp
public/images/ro/g/ro-g-ghetar.webp
public/images/ro/b/ro-b-bagheta.webp
public/images/ro/p/ro-p-parchet.webp
public/images/ro/e/ro-e-echer.webp
public/images/ro/o/ro-o-ochean.webp
public/images/ro/c/ro-c-chipiu.webp
```

Final encoded sizes:

| Asset | Bytes |
| --- | ---: |
| `ro-l-licurici.webp` | `7784` |
| `ro-p-piscina.webp` | `7478` |
| `ro-c-cerneala.webp` | `7338` |
| `ro-f-fulgi.webp` | `11426` |
| `ro-f-fragi.webp` | `11794` |
| `ro-g-ghemotoc.webp` | `10290` |
| `ro-g-ghetar.webp` | `11390` |
| `ro-b-bagheta.webp` | `4810` |
| `ro-p-parchet.webp` | `11764` |
| `ro-e-echer.webp` | `6816` |
| `ro-o-ochean.webp` | `5914` |
| `ro-c-chipiu.webp` | `6190` |

Source PNGs and the accepted contact sheet were staged under ignored `assets/image-sources/ro/` paths.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `370`.
- Ready images: `166 -> 178`.
- Placeholder images: `204 -> 192`.
- Sequence target image readiness improves for:
  - `CE`: `15` ready / `1` placeholder -> `16` ready / `0` placeholder;
  - `CI`: `14` ready / `5` placeholder -> `16` ready / `3` placeholder;
  - `GI`: `5` ready / `10` placeholder -> `7` ready / `8` placeholder;
  - `CHE`: `10` ready / `5` placeholder -> `13` ready / `2` placeholder;
  - `CHI`: `10` ready / `5` placeholder -> `11` ready / `4` placeholder;
  - `GHE`: `8` ready / `7` placeholder -> `11` ready / `4` placeholder.
