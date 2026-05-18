# Romanian Coverage Audit And Expansion Targets

Batch: Romanian Content Expansion Batch 1.

Audit date: 2026-05-16.

## Method

This audit uses the current static Romanian content and the locale-wide helper architecture that backs `/admin/words`.

Commands used:

```txt
node -e 'import { getLocaleCoverageSummary } from "./src/content/loaders.ts"; ...'
node -e 'import { getApprovedWords, getDerivedWordPoolsForTarget } from "./src/content/loaders.ts"; ...'
```

Browser inspection of `/admin/words` was not performed because `http://localhost:3000` was not reachable. No dev server was started because the user owns port `3000`.

No production word manifests or images were changed.

## Current Content Summary

- Locale: `ro`
- Enabled canonical letter buckets: `A`, `C`, `M`, `P`
- Approved words: `40`
- Ready images: `40`
- Placeholder images: `0`
- Current production image readiness is complete for the starter pack.
- Current alphabet coverage is not broad enough for serious Romanian logopedie practice.

## Current Alphabet Coverage

| Letter | Starts-with | Contains-only | Mixed | Starts ready | Contains ready | Notes |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| `A` | 10 | 12 | 22 | 10 | 12 | Useful warm-up bucket; many words also support `R`, `S`, `V`, `D`, `C`, `L`, `Z`. |
| `C` | 10 | 7 | 17 | 10 | 7 | Strongest current high-value bucket; supports `C`, `R`, `S`, `T`, `V`, `L`. |
| `M` | 10 | 0 | 10 | 10 | 0 | Useful warm-up and vocabulary bucket; contains no derived `M` words elsewhere. |
| `P` | 10 | 3 | 13 | 10 | 3 | Useful warm-up bucket; includes important contains examples for `R`, `Ș`, `T`, `F`, `L`. |

All other Romanian starting-letter buckets are currently absent from `content/ro/letters.json` and should be treated as missing coverage, not merely underfilled coverage.

## Current High-Value Target Coverage

The table below scans the same approved Romanian word catalog for the requested speech targets. Counts are based on exact Romanian characters or groups in display words. Letter groups are future practice targets, not alphabet letters.

| Target | Tier | Starts-with | Contains-only | Mixed | Initial | Medial | Final | Cluster | Repeated | Current examples | Gap |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
| `R` | 1 | 0 | 12 | 12 | 0 | 10 | 2 | 7 | 0 | `ardei`, `arici`, `carte`, `creion`, `măr`, `pahar` | No initial `R`; existing examples skew medial and cluster-heavy. |
| `S` | 1 | 0 | 5 | 5 | 0 | 4 | 1 | 1 | 0 | `casă`, `masă`, `pisică`, `ananas` | No initial `S`; too few simple examples. |
| `Z` | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | `autobuz` | Almost empty; no initial or medial `Z`. |
| `Ș` | 1 | 0 | 4 | 4 | 0 | 4 | 0 | 1 | 0 | `mașină`, `mănușă`, `pește`, `păpușă` | No initial or final `Ș`; current coverage is useful but narrow. |
| `J` | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | none | Empty target. |
| `Ț` | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | none | Empty target. |
| `CE/CI` | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | `arici` | Almost empty; `CE` has no current examples and `CI` has one final example. |
| `GE/GI` | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | `minge` | Almost empty; `GI` has no current examples and `GE` has one final example. |
| `F` | 2 | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | `pantof` | Almost empty; no initial or medial `F`. |
| `V` | 2 | 0 | 4 | 4 | 0 | 3 | 1 | 1 | 0 | `avion`, `acvariu`, `castravete`, `morcov` | No initial `V`; limited contrast value for `F/V`. |
| `L` | 2 | 0 | 5 | 5 | 0 | 3 | 2 | 2 | 0 | `albină`, `alună`, `cal`, `copil`, `melc` | No initial `L`; limited `R/L` contrast setup. |
| `T` | 2 | 0 | 7 | 7 | 0 | 6 | 1 | 5 | 1 | `autobuz`, `carte`, `munte`, `pat`, `pește` | No initial `T`; current examples are often clusters or medial. |
| `D` | 2 | 0 | 2 | 2 | 0 | 2 | 0 | 1 | 0 | `ardei`, `acadea` | No initial or final `D`; low `T/D` contrast value. |
| `C` | 2 | 10 | 7 | 17 | 10 | 5 | 3 | 5 | 1 | `câine`, `cal`, `casă`, `cub`, `copac`, `morcov` | Best current target; still needs balance across simpler non-cluster examples and future `C/G` contrast. |
| `G` | 2 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 0 | `minge` | Almost empty; no initial `G`. |

## Gap Interpretation

Alphabet coverage and speech-target coverage now point to the same conclusion: the starter pack is polished but far too narrow for serious Romanian speech practice.

Strong current areas:

- `C` starts-with gameplay is usable now.
- `A`, `C`, `M`, and `P` each have 10 approved words and ready images.
- All current approved words have ready canonical images.
- Contains-only and mixed modes already expose useful examples for `A`, `C`, `P`, `R`, `S`, `Ș`, `T`, `V`, and `L`.

Weak current areas:

- No enabled starting buckets exist for most Romanian letters.
- `R`, `S`, `Ș`, `T`, `V`, `L`, and `D` have no starts-with coverage despite being high-value or secondary targets.
- `J`, `Ț`, `CE`, `GI`, and several secondary targets are empty or nearly empty.
- Current high-value target examples skew toward medial position; initial and final practice are underrepresented.
- Current `R` and `T` coverage includes many cluster examples, which are useful later but not ideal as the first simple practice layer.

## Targets Not To Pad

Do not force large starts-with counts for weak or rare buckets. These targets may still be useful through contains-only words stored under common canonical letters.

- `J`: useful high-value sound, but child-friendly, concrete starting words are limited. Candidate generation should prefer `joc`, `jucărie`, `jachetă` only if images are clear and age-fit. Do not pad with adult, abstract, or obscure words.
- `Ț`: important target, but starts-with options are quality-limited. Prefer a small set of strong words such as `țap`, `țestoasă`, or other familiar choices after review, plus contains words like `rață`, `cuțit`, `gheață`.
- `Z`: useful target, but starts-with options should remain common and imageable. Prefer `zebră`, `zăpadă`, `zar` if accepted; avoid obscure or abstract examples.
- `CE/CI` and `GE/GI`: treat as future practice targets, not letters. Use common words only and avoid adding letter-group UI before enough content exists.
- `F`, `V`, `L`, `D`, `G`: expand through common, concrete words first. Contrast value is useful, but not enough reason to accept weak vocabulary.

## First Pilot Scope

Recommended Batch 2 worksheet scope: `Tier 1 Speech Seed`.

Purpose: create a reviewed candidate worksheet, not production JSON.

Targets:

- Primary: `R`, `S`, `Ș`, `Ț`, `Z`, `J`
- Secondary watchlist: `CE/CI`, `GE/GI`

Candidate target size:

- Generate roughly `45` to `70` candidates so review can reject weak words.
- Aim to accept roughly `18` to `24` candidate words for a later small production pilot.
- Do not require equal counts per target. Quality and imageability win.

Coverage goals for the accepted candidate set:

- Add initial examples for `R`, `S`, `Ș`, `Ț`, `Z`, and `J` where quality allows.
- Add final examples for `Ș`, `Ț`, and `S` where quality allows.
- Add medial examples that improve weak contains pools without duplicating existing word roles.
- Add only simple or familiar cluster examples; mark clusters as advanced.
- Include a few possible contrast notes for `S/Ș`, `Z/J`, `Ț/S`, and `R/L`, but do not force minimal pairs.

Candidate examples for review thinking only:

- `R`: `rață`, `roată`, `robot`, `rochie`, `rachetă`, plus contains words such as `farfurie` or `ureche` only if imageable and age-fit.
- `S`: `sanie`, `soare`, `scaun`, `suc`, `nas`, `urs`.
- `Ș`: `șapcă`, `șarpe`, `șosetă`, `ușă`, `coș`, `moș`.
- `Ț`: `țap`, `țestoasă`, `rață`, `cuțit`, `gheață`, `moț`.
- `Z`: `zebră`, `zăpadă`, `zar`.
- `J`: `joc`, `jucărie`, `jachetă`, `păianjen`.
- `CE/CI`: `cerc`, `ceapă`, `cireșe`, `arici`.
- `GE/GI`: `geam`, `gem`, `minge`, `girafă` if the word passes child-familiarity and imageability review.

These examples are not approved content. Batch 2 must deduplicate, normalize spelling, review age fit, record sound position, and reject weak candidates.

## Helper And Workflow Gaps

No blocker prevents Batch 2 from creating a worksheet. The current system is sufficient for alphabet coverage and exact target scans.

Useful improvements before or during Batch 3:

- Add a generated coverage-report script so future agents do not have to use ad hoc `node -e` snippets.
- Add a speech-target coverage report that can scan arbitrary targets and letter groups, not just enabled letters.
- Consider adding a non-production worksheet format under the feature folder for candidate review.
- Decide whether therapy metadata stays worksheet-only for the first pilot or becomes optional production metadata.
- Consider adding an `/admin/words` section later for speech-target coverage. This is not required before the first worksheet.

## Acceptance Notes

Batch 1 acceptance status:

- Current starts-with, contains-only, mixed, and image-readiness coverage recorded.
- Gaps mapped to Romanian priority tiers and speech-target guidance.
- Weak targets identified so they are not padded with obscure vocabulary.
- First pilot scope defined as a worksheet-first `Tier 1 Speech Seed`.
- No production content, images, app code, database, auth, admin editing, AI pronunciation, or clinical claims added.
