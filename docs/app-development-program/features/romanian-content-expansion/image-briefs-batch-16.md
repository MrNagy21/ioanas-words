# Batch 16 Image Briefs: CE/CI Placeholder Replacement Slice

Batch: Romanian Content Expansion Batch 16, Placeholder Image Replacement.

Spec date: 2026-05-17.

Status: Implemented first image-replacement slice.

## Scope

This slice replaced 12 placeholder-backed `C` words that directly improve the high-value `CE` and `CI` practice targets:

| Word ID | Word | Target value | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-c-ceas` | `ceas` | initial `CE` | Round wall clock, no numbers or text. | accepted |
| `ro-c-cerb` | `cerb` | initial `CE` | Friendly deer with antlers. | accepted |
| `ro-c-cerc` | `cerc` | initial/repeated `CE` spelling | Colorful toy hoop/ring. | accepted |
| `ro-c-cercel` | `cercel` | initial/repeated `CE` spelling | Single simple earring, no brand cues. | accepted |
| `ro-c-ceai` | `ceai` | initial `CE` | Cup of tea with saucer and gentle steam. | accepted |
| `ro-c-ceasca` | `ceașcă` | initial `CE`, medial `Ș` | Simple teacup. | accepted |
| `ro-c-cereale` | `cereale` | initial `CE` | Bowl of breakfast cereal with spoon. | accepted |
| `ro-c-cearsaf` | `cearșaf` | initial `CE`, medial `Ș` | Folded bed sheet. | accepted |
| `ro-c-ciocolata` | `ciocolată` | initial `CI` | Plain chocolate bar, no wrapper or brand. | accepted |
| `ro-c-ciocan` | `ciocan` | initial `CI` | Rounded toy-like hammer, safe presentation. | accepted |
| `ro-c-ciuperca` | `ciupercă` | initial `CI` | Single mushroom, no face or extra objects. | accepted after regeneration |
| `ro-c-ciorba` | `ciorbă` | initial `CI` | Bowl of soup with spoon. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The first sprite sheet produced usable icons for 11 records. The initial `ciupercă` cell was rejected because it added a face to an object. A separate clean mushroom icon was generated and accepted.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/c/ro-c-ceai.webp
public/images/ro/c/ro-c-cearsaf.webp
public/images/ro/c/ro-c-ceas.webp
public/images/ro/c/ro-c-ceasca.webp
public/images/ro/c/ro-c-cerb.webp
public/images/ro/c/ro-c-cerc.webp
public/images/ro/c/ro-c-cercel.webp
public/images/ro/c/ro-c-cereale.webp
public/images/ro/c/ro-c-ciocan.webp
public/images/ro/c/ro-c-ciocolata.webp
public/images/ro/c/ro-c-ciorba.webp
public/images/ro/c/ro-c-ciuperca.webp
```

Source PNGs were staged under ignored `assets/image-sources/ro/c/` paths, with trace metadata in `assets/image-sources/ro/batch-16-metadata.json`.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `319`.
- Ready images: `83 -> 95`.
- Placeholder images: `236 -> 224`.
- `CE` practice target ready-image coverage improves by 8 records in this slice.
- `CI` practice target ready-image coverage improves by 4 records in this slice.
