# Batch 76+ Implementation Orchestrator Prompt

Status: ready-to-copy implementator prompt.

Last updated: 2026-06-23.

## Human Decision

The human approved implementing every Batch 75 candidate marked `priority` or `reserve`.

Do not implement Batch 75 candidates marked `hold`.

The implementator must still run source/spelling checks, duplicate checks, image validation, content validation, lint/build checks, and human image review gates. If a supposedly accepted row fails source, safety, duplicate, child-fit, or imageability checks during implementation, stop and ask instead of silently promoting it.

## Accepted Candidate Pool

Accepted candidates are all non-`hold` rows from `high-value-target-top-up-worksheet-batch-75.md`.

Exact accepted words by target:

- `R`: `ramă`, `râmă`, `rândunică`, `rechin`, `riglă`, `rulotă`, `ruladă`, `radio`, `romb`
- `S`: `stea`, `saltea`, `sfeclă`, `spanac`, `săgeată`, `spate`, `sprânceană`, `stropitoare`, `solniță`
- `Ș`: `șuncă`, `șnițel`, `șalupă`, `șah`, `șevalet`, `șofer`, `șotron`, `brioșă`, `coșuleț`, `tuș`
- `V`: `valiză`, `vrabie`, `vulcan`, `val`, `vâslă`, `velier`, `violetă`, `vultur`, `ventuză`, `evantai`, `navă`, `șuviță`, `movilă`, `servietă`
- `F`: `farfurie`, `fereastră`, `făină`, `fermă`, `frate`, `fotografie`, `foarfecă`, `fântână`, `focă`, `afine`, `bufniță`, `cartof`, `coif`, `ceafă`, `puf`, `șifonier`, `cufăr`, `trifoi`
- `L`: `lemn`, `lacăt`, `libelulă`, `lift`, `leopard`, `lână`, `lan`, `lampion`
- `T`: `trotinetă`, `trusă`, `tub`, `turn`, `tunel`, `tăiței`, `tufiș`, `telecomandă`, `termos`, `tricicletă`
- `D`: `drum`, `dulceață`, `dop`, `dar`, `drapel`, `dalmațian`, `disc`, `diamant`, `dungă`, `dronă`
- `Ț`: `țintă`, `ținută`, `țesătură`, `țâșnitoare`
- `H`: `hipopotam`, `hârtie`, `hotel`, `halat`, `harpă`, `horn`, `hamster`, `hambar`, `husă`, `hol`, `horă`, `hochei`, `hublou`, `hamburger`, `hering`, `hamsie`, `hienă`, `homar`, `ham`, `hanorac`, `hidrant`
- `J`: `jurnal`, `jalon`, `jambon`, `joystick`, `jerseu`, `jet`, `ambalaj`, `etaj`, `bujor`, `peisaj`, `majoretă`, `prăjitor`, `pajiște`, `coji`
- `CE`: `cer`, `ceafă`, `ceață`, `cep`, `celofan`
- `CI`: `cișmea`, `cioban`, `ciocârlie`, `ciocănitoare`, `cimpoi`, `ciclist`, `cilindru`
- `GE`: `geamandură`, `gerbera`, `gene`, `genunchieră`, `gel`, `săgeată`
- `GI`: `gips`, `girofar`, `giruetă`, `argilă`
- `CHE`: `cheiță`, `chenar`, `etichetă`, `încheietură`, `buchețel`
- `CHI`: `chihlimbar`, `rechin`, `smochină`, `trunchi`
- `GHE`: `gheorgină`, `gheizer`, `ungher`, `zgheab`
- `GHI`: `ghimpe`, `ghips`

Some words are cross-listed because they help multiple targets. Deduplicate exact words before planning production rows. Add each accepted word at most once, in its canonical starting-letter file.

Explicitly excluded hold words:

`rubarbă`, `sanie mare`, `șorțuleț`, `privighetoare`, `tăviță`, `fruct`, `parfum`, `dafin`, `doctor`, `țărână`, `țăruș`, `țepușă`, `hârleț`, `hățuri`, `judoka`, `jug`, `dejun`, `bej`, `mânj`, `ajutor`, `cenușă`, `cedru`, `cercei`, `cicoare`, `cimbru`, `ciulin`, `geodă`, `degețel`, `giuvaier`, `gimnastă`, `fraged`, `cheag`, `chelner`, `archet`, `schelet`, `chimion`, `chibrit`, `chingi`, `rochiță`, `ghemuleț`, `ghiduș`, `ghioc`, `ghicitoare`, `unghiuță`, `triunghiuleț`.

## Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 75.

Read these files first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/plan.md
5. docs/status.md
6. docs/image-pipeline.md
7. docs/app-development-program/speech-therapy-content-guidance.md
8. docs/app-development-program/features/romanian-content-expansion/spec.md
9. docs/app-development-program/features/romanian-content-expansion/plan.md
10. docs/app-development-program/features/romanian-content-expansion/status.md
11. docs/app-development-program/features/romanian-content-expansion/high-value-target-top-up-worksheet-batch-75.md
12. docs/app-development-program/features/romanian-content-expansion/implementation-orchestrator-prompt-batch-76.md

Human decision:

- Implement all Batch 75 candidates marked `priority` or `reserve`.
- Do not implement any Batch 75 candidate marked `hold`.
- For sequence groups, use mixed-pool improvement as acceptable; do not force 25 starts-with plus 25 contains-only when the worksheet marks the group as quality-limited.
- Preserve all existing production safeguards: no placeholders, no clinical claims, no database/auth/billing scope, no obscure quota padding, no large unoptimized image assets, no production words without validated images.

Use subagents:

- Use `multi_agent_v1.spawn_agent` with `agent_type: "worker"` for bounded slice work.
- Tell every subagent that it is not alone in the codebase, must not revert unrelated edits, and must keep changes scoped to its assigned files.
- Do not let multiple subagents edit shared status files at the same time. The orchestrator owns `docs/status.md`, feature `status.md`, and final integration.
- Prefer one worker per slice for planning/image-brief work. Promotion workers may run in parallel only when their content JSON files and image directories are disjoint; otherwise run them sequentially.
- Each worker must list changed files and verification performed in its final answer.

Batch structure:

1. Batch 76: Orchestrator scope split.
   - Parse Batch 75 accepted non-hold rows.
   - Deduplicate exact words, especially cross-listed words like `ceafă`, `săgeată`, and `rechin`.
   - Re-check against current approved production words before planning.
   - Split the accepted pool into production slices of roughly 15 words each.
   - Prioritize early slices for the biggest gaps: `H`, `J`, `Ț`, `D`, `V`, `F`, `Ș`, `T`, then sequence mixed-pool candidates.
   - Write a slice plan/index document under `docs/app-development-program/features/romanian-content-expansion/`.
   - Update feature status and global status.

2. For each slice, run a planning subagent.
   - Assign only that slice.
   - The subagent writes one planning-only document.
   - It must not add production JSON or images.
   - It must record source/spelling checks, duplicate checks, canonical file/id/path plan, category, part of speech, difficulty, age band, image brief direction, expected coverage deltas, route/validation impact, and any risk.
   - If any word fails source/safety/duplicate/child-fit checks, the subagent must mark it blocked and explain why.

3. For each accepted planned slice, run an image-brief/contact-sheet subagent.
   - Assign only that slice.
   - The subagent writes an image-brief document and creates one unlabeled contact sheet for human review using the existing image pipeline style.
   - Images must be square, pixel-art style, no visible text, no brands, no copyrighted characters, clear at wheel size, and circular-mask safe.
   - The subagent must create comparison/QA notes against existing production assets.
   - The subagent must not crop cells into production WebP files and must not edit production JSON.

4. Hard stop for image validation.
   - After each contact sheet, stop and ask the human to validate the images.
   - Do not promote the slice until the human explicitly accepts the image cells or asks for specific corrections.
   - If corrections are needed, create corrective contact sheets and stop again for validation.

5. After human image acceptance, run a production-promotion worker for that slice.
   - Crop only accepted cells.
   - Optimize to final `256 x 256 px` lossless `.webp` assets under canonical `/public/images/ro/<letter>/<word-id>.webp` paths.
   - Add only accepted words to production JSON.
   - Preserve stable IDs, correct Romanian display spelling, correct normalized form, canonical starting-letter bucket, appropriate category, source/license/status fields, and image alt text.
   - No placeholders.
   - Do not add rejected/hold words.
   - Update any content-derived compatibility fixtures only when tests require it.

6. Verification after each promotion slice:
   - Run `pnpm run validate:content`.
   - Run `pnpm run lint`.
   - Run `pnpm exec tsc --noEmit --incremental false`.
   - Run `pnpm run check:gameplay`.
   - Run `pnpm run check:matching`.
   - Run `pnpm run check:setup-storage`.
   - Run `pnpm run build`.
   - Run `git diff --check`.
   - If sandboxed commands fail due to network, localhost, or environment restrictions, retry outside the sandbox with approval as required by AGENTS.md.

7. Browser/route checks after each promotion slice:
   - Use the expected local dev server at `http://localhost:3000`; do not start another port.
   - Check `/ro`, `/admin/words`, `/admin/releases/2`, and representative affected `/ro/play/<target>` routes.
   - Check representative new image URLs.
   - If sandboxed localhost checks fail, retry outside the sandbox before concluding unavailable.

8. Documentation after each slice:
   - Write a production-promotion or slice-QA document matching the existing Romanian expansion style.
   - Update `docs/app-development-program/features/romanian-content-expansion/status.md`.
   - Update `docs/status.md`.
   - Record exact totals: total records, approved words, ready images, placeholders, rejected rows.
   - Record coverage deltas for affected letters and sequence groups.
   - Provide the next ready-to-copy prompt.

Final closeout:

- When all non-hold Batch 75 candidates have either been promoted or explicitly blocked with a reason, run a final coverage QA batch.
- Confirm no accepted non-hold candidates were skipped silently.
- Confirm no hold candidates were added.
- Confirm no duplicate exact words were added.
- Confirm all promoted rows have ready production images.
- Confirm all validation, lint, typecheck, gameplay, matching, setup-storage, build, diff, and route checks are recorded.
- Prepare the final release QA prompt for human review on `/admin/releases/2`.
```
