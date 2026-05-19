# Batch 34 Image Briefs: General Placeholder Replacement Slice 17

Batch: Romanian Content Expansion Batch 34, General Placeholder Image Replacement Slice 17.

Spec date: 2026-05-18.

Status: Implemented seventeenth image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed records only. The selected words prioritize common, concrete, visually clear placeholders across `A`, `C`, `D`, `E`, `G`, `I`, `M`, `P`, `U`, `Z`, and `Ț` whose thumbnail concepts are suitable for wheel and modal use.

| Word ID          | Word        | Category  | Image brief                                                                   | Review result |
| ---------------- | ----------- | --------- | ----------------------------------------------------------------------------- | ------------- |
| `ro-a-acoperis`  | `acoperiș`  | household | One simple red roof with chimney and tile bands, no full house scene.         | accepted      |
| `ro-a-aripa`     | `aripă`     | animal    | One blue feathered wing shape, no bird body or extra scene.                   | accepted      |
| `ro-c-cap`       | `cap`       | body      | One simple friendly child head, neutral and non-identifying.                  | accepted      |
| `ro-c-coaja`     | `coajă`     | food      | One curled orange peel with lighter inner peel, disambiguated as fruit peel.  | accepted      |
| `ro-d-desen`     | `desen`     | school    | One sheet of paper with a simple childlike house and sun drawing, no letters. | accepted      |
| `ro-e-esarfa`    | `eșarfă`    | clothing  | One red scarf with a loose end and fringe, no person wearing it.              | accepted      |
| `ro-g-garaj`     | `garaj`     | household | One small garage with roof and plain door, no car brand or text.              | accepted      |
| `ro-i-iaz`       | `iaz`       | nature    | One small blue pond with reeds and a lily pad, minimal setting.               | accepted      |
| `ro-m-mazare`    | `mazăre`    | food      | One green pea pod with visible peas, no plate or clutter.                     | accepted      |
| `ro-p-plaja`     | `plajă`     | nature    | A minimal beach strip with sand, water, and a small umbrella, no people.      | accepted      |
| `ro-p-ploaie`    | `ploaie`    | nature    | One gray cloud with blue raindrops, no storm or scary mood.                   | accepted      |
| `ro-p-prajitura` | `prăjitură` | food      | One small cake slice with candles, no letters or numbers.                     | accepted      |
| `ro-p-paianjen`  | `păianjen`  | animal    | One small friendly spider, simple body and legs, non-scary.                   | accepted      |
| `ro-p-patut`     | `pătuț`     | household | One small crib with rails, no baby or person.                                 | accepted      |
| `ro-p-pisicuta`  | `pisicuță`  | animal    | One friendly orange kitten face, no collar, brand, or scene.                  | accepted      |
| `ro-u-ulei`      | `ulei`      | food      | One generic yellow oil bottle with no label or brand.                         | accepted      |
| `ro-z-zid`       | `zid`       | household | One simple red brick wall section, no graffiti or setting.                    | accepted      |
| `ro-z-zmeura`    | `zmeură`    | food      | One raspberry cluster with a small green top, no bowl.                        | accepted      |
| `ro-z-zambila`   | `zambilă`   | nature    | One purple hyacinth flower with leaves, simplified for thumbnail clarity.     | accepted      |
| `ro-tz-turture`  | `țurțure`   | nature    | One blue icicle with a small drip, no dangerous winter scene.                 | accepted      |

Deferred from the prompt examples:

- `miez`: broad and context-dependent at thumbnail size; left as a placeholder.
- `pluș`: material/object ambiguity is still high without depending on an extra toy concept already covered by `ursuleț`; left as a placeholder.

## Generation And Review

Generation followed the established pixel-art constraints in `docs/image-pipeline.md`, using deterministic local source drawing: each accepted icon was authored as a `128 x 128 px` hard-edged pixel-art source, reviewed on a contact sheet and a comparison sheet against existing production assets, upscaled with nearest-neighbor sampling to `256 x 256 px`, and encoded as lossless WebP.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters in final assets;
- one centered subject per image, except `plajă` and `iaz`, where the word requires a minimal setting;
- no person-dependent visuals, with `cap` kept as a neutral non-identifying body-part icon;
- `păianjen` is friendly and non-scary;
- `ulei` is generic and label-free;
- consistent hard-edged pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

Post-acceptance human review on 2026-05-18 flagged `ro-a-aripa`, `ro-c-coaja`, and `ro-e-esarfa` as off-brand or visually odd compared with the stronger production pack. They remain ready assets in the current content JSON, but they should be included in a future corrective regeneration slice before being treated as final style examples.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/a/ro-a-acoperis.webp
public/images/ro/a/ro-a-aripa.webp
public/images/ro/c/ro-c-cap.webp
public/images/ro/c/ro-c-coaja.webp
public/images/ro/d/ro-d-desen.webp
public/images/ro/e/ro-e-esarfa.webp
public/images/ro/g/ro-g-garaj.webp
public/images/ro/i/ro-i-iaz.webp
public/images/ro/m/ro-m-mazare.webp
public/images/ro/p/ro-p-plaja.webp
public/images/ro/p/ro-p-ploaie.webp
public/images/ro/p/ro-p-prajitura.webp
public/images/ro/p/ro-p-paianjen.webp
public/images/ro/p/ro-p-patut.webp
public/images/ro/p/ro-p-pisicuta.webp
public/images/ro/u/ro-u-ulei.webp
public/images/ro/z/ro-z-zid.webp
public/images/ro/z/ro-z-zmeura.webp
public/images/ro/z/ro-z-zambila.webp
public/images/ro/ț/ro-tz-turture.webp
```

Final encoded sizes:

| Asset                 | Bytes |
| --------------------- | ----: |
| `ro-a-acoperis.webp`  | `456` |
| `ro-a-aripa.webp`     | `626` |
| `ro-c-cap.webp`       | `420` |
| `ro-c-coaja.webp`     | `374` |
| `ro-d-desen.webp`     | `326` |
| `ro-e-esarfa.webp`    | `254` |
| `ro-g-garaj.webp`     | `352` |
| `ro-i-iaz.webp`       | `598` |
| `ro-m-mazare.webp`    | `390` |
| `ro-p-plaja.webp`     | `372` |
| `ro-p-ploaie.webp`    | `540` |
| `ro-p-prajitura.webp` | `230` |
| `ro-p-paianjen.webp`  | `550` |
| `ro-p-patut.webp`     | `226` |
| `ro-p-pisicuta.webp`  | `568` |
| `ro-u-ulei.webp`      | `218` |
| `ro-z-zid.webp`       | `200` |
| `ro-z-zmeura.webp`    | `388` |
| `ro-z-zambila.webp`   | `604` |
| `ro-tz-turture.webp`  | `310` |

The reviewed source PNGs, review sheet, and brand-comparison sheet were staged under ignored `assets/image-sources/ro/` paths.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `370`.
- Ready images: `315 -> 335`.
- Placeholder images: `55 -> 35`.
- Letter image readiness now includes:
  - `A`: `17` ready / `0` placeholder;
  - `C`: `60` ready / `2` placeholder;
  - `D`: `9` ready / `0` placeholder;
  - `E`: `5` ready / `2` placeholder;
  - `G`: `34` ready / `8` placeholder;
  - `I`: `7` ready / `1` placeholder;
  - `M`: `19` ready / `5` placeholder;
  - `P`: `32` ready / `2` placeholder;
  - `U`: `9` ready / `1` placeholder;
  - `Z`: `6` ready / `2` placeholder;
  - `Ț`: `5` ready / `0` placeholder.

No `Ă` or `Â` bucket work was added.
