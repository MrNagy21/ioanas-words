# Batch 30 Image Briefs: General Placeholder Replacement Slice 13

Batch: Romanian Content Expansion Batch 30, General Placeholder Image Replacement Slice 13.

Spec date: 2026-05-18.

Status: Implemented thirteenth image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed records only. The selected words prioritize common, concrete, visually clear A/B/C/D/E/G/H/I placeholders whose generated thumbnail concepts were clear enough for wheel and modal use.

| Word ID | Word | Category | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-a-album` | `album` | household | One closed family photo album, slightly open with blank photo rectangles only, no faces or text. | accepted |
| `ro-a-ascutitoare` | `ascuțitoare` | school | One simple child-safe pencil sharpener with a pencil beside it, no exposed blade detail. | accepted |
| `ro-a-ata` | `ață` | household | One spool of thread with a loose thread tail, no needle. | accepted |
| `ro-b-bustean` | `buștean` | nature | One short cut tree log with bark and visible rings, no axe or forest scene. | accepted |
| `ro-c-cada` | `cadă` | household | One clean bathtub with blue water, no person or bathroom clutter. | accepted |
| `ro-d-dinozaur` | `dinozaur` | animal | One friendly green toy-like dinosaur, non-scary and no sharp-teeth emphasis. | accepted |
| `ro-d-dus` | `duș` | household | One shower head with a few blue water drops, no person or room scene. | accepted |
| `ro-e-excavator` | `excavator` | vehicle | One generic yellow excavator, no brand or construction clutter. | accepted |
| `ro-g-gaina` | `găină` | animal | One friendly hen/chicken, no farm scene. | accepted |
| `ro-g-gasca` | `gâscă` | animal | One friendly white goose with orange beak, no farm scene. | accepted |
| `ro-g-galeata` | `găleată` | household | One simple bucket with handle, empty. | accepted |
| `ro-g-gard` | `gard` | household | One short wooden picket fence section, no house scene. | accepted |
| `ro-g-glob` | `glob` | household | One tabletop world globe on a stand with simple land and water shapes, no labels. | accepted |
| `ro-g-gogoasa` | `gogoașă` | food | One round donut with pink icing, no letters or extra food scene. | accepted |
| `ro-h-hamac` | `hamac` | household | One hammock hanging between two simple posts, no person. | accepted |
| `ro-h-harta` | `hartă` | school | One folded paper map with simple routes and shapes only, no letters or numbers. | accepted |
| `ro-i-iaurt` | `iaurt` | food | One plain yogurt cup with spoon, no brand, label, or text. | accepted |
| `ro-i-iglu` | `iglu` | household | One small white igloo with simple snow blocks, no landscape clutter. | accepted |
| `ro-i-inel` | `inel` | clothing | One simple gold ring band, no hand or gemstone. | accepted |
| `ro-i-inima` | `inimă` | body | One friendly red heart symbol, no anatomy or medical scene. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The accepted source was a 5-by-4 contact sheet generated with generous gutters and no labels. Source cells were cropped in the fixed order above, resized to `256 x 256 px`, simplified to a hard-edged 4-bit-per-channel RGB palette, and encoded as final lossless WebP assets with local `cwebp`. This kept every final asset below the `20 KB` hard maximum. `glob` and `hartă` remain slightly above the `12 KB` warning threshold because additional simplification started to weaken small-thumbnail clarity.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- no person-dependent visuals for household or clothing-adjacent objects;
- `dinozaur` is friendly and non-scary;
- `glob` is label-free and reads as a simple globe;
- `hartă` is label-free and avoids readable markings;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/a/ro-a-album.webp
public/images/ro/a/ro-a-ascutitoare.webp
public/images/ro/a/ro-a-ata.webp
public/images/ro/b/ro-b-bustean.webp
public/images/ro/c/ro-c-cada.webp
public/images/ro/d/ro-d-dinozaur.webp
public/images/ro/d/ro-d-dus.webp
public/images/ro/e/ro-e-excavator.webp
public/images/ro/g/ro-g-gaina.webp
public/images/ro/g/ro-g-gasca.webp
public/images/ro/g/ro-g-galeata.webp
public/images/ro/g/ro-g-gard.webp
public/images/ro/g/ro-g-glob.webp
public/images/ro/g/ro-g-gogoasa.webp
public/images/ro/h/ro-h-hamac.webp
public/images/ro/h/ro-h-harta.webp
public/images/ro/i/ro-i-iaurt.webp
public/images/ro/i/ro-i-iglu.webp
public/images/ro/i/ro-i-inel.webp
public/images/ro/i/ro-i-inima.webp
```

Final encoded sizes:

| Asset | Bytes |
| --- | ---: |
| `ro-a-album.webp` | `9352` |
| `ro-a-ascutitoare.webp` | `8330` |
| `ro-a-ata.webp` | `9736` |
| `ro-b-bustean.webp` | `10006` |
| `ro-c-cada.webp` | `8010` |
| `ro-d-dinozaur.webp` | `9660` |
| `ro-d-dus.webp` | `7732` |
| `ro-e-excavator.webp` | `11970` |
| `ro-g-gaina.webp` | `10556` |
| `ro-g-gasca.webp` | `11306` |
| `ro-g-galeata.webp` | `9686` |
| `ro-g-gard.webp` | `9310` |
| `ro-g-glob.webp` | `12920` |
| `ro-g-gogoasa.webp` | `9626` |
| `ro-h-hamac.webp` | `10022` |
| `ro-h-harta.webp` | `12460` |
| `ro-i-iaurt.webp` | `7030` |
| `ro-i-iglu.webp` | `9300` |
| `ro-i-inel.webp` | `7286` |
| `ro-i-inima.webp` | `5934` |

The accepted source contact sheet was staged under ignored `assets/image-sources/ro/batch-30/` paths.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `370`.
- Ready images: `232 -> 252`.
- Placeholder images: `138 -> 118`.
- Letter image readiness now includes:
  - `A`: `15` ready / `2` placeholder;
  - `B`: `18` ready / `4` placeholder;
  - `C`: `58` ready / `4` placeholder;
  - `D`: `8` ready / `1` placeholder;
  - `E`: `4` ready / `3` placeholder;
  - `G`: `33` ready / `9` placeholder;
  - `H`: `2` ready / `1` placeholder;
  - `I`: `5` ready / `3` placeholder.

No `Ă` or `Â` bucket work was added.
