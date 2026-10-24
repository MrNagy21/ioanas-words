# Romanian reviewer handoff

Prepared and checked on 2026-10-16. This is GP9 preparation. Actual Romanian approval, physical-phone results and therapist pilot feedback are still pending.

The temporary archive was no longer on disk after the restart. On 2026-10-17, fresh blank packets were rebuilt in a persistent user-data folder; no review decisions or production mappings changed.

## Files for the reviewer

[Download the S and R review packets](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-17/word-wheel-romanian-review.zip). The archive has two folders, each containing Romanian instructions, `packet.json` and `words.csv`.

Each sheet contains all 596 approved word IDs. Every decision starts as `unknown`, every position is blank and approval is false. S and R are proposed interface labels, not asserted phoneme definitions. The reviewer must supply the actual target definition, stable ID, position criteria, identity, reference and date. Other current goal labels can use the same generator.

The [Romanian instructions](review-packet-instructions.md) explain present/absent/unknown decisions, partial coverage and return files. The earlier spelling-candidate sheet remains triage only; it cannot enable sound credit.

## Commands

Use the repository's pinned Node/pnpm environment and existing Bun prerequisite:

```sh
pnpm run prepare:sound-review -- --label S --output /tmp/new-s-review
pnpm run validate:sound-review -- --packet /tmp/new-s-review
pnpm run check:sound-review-tools
```

The generator refuses an existing output folder. It never overwrites a review. The validator reads files and prints a coverage summary; it does not write production mappings. An untouched packet is expected to fail validation because no reviewer has approved or defined anything.

The packet records hashes of the canonical word IDs/text/image paths and the current mapping. Validation rejects stale baselines, duplicate/missing/unknown word IDs, edited canonical cells, mixed target labels, missing target/evidence fields and inconsistent presence/positions. Unknown rows must retain blank positions. Reviewed rows require an explicit yes/no decision for every position. A present sound needs at least one yes; an absent sound needs all no. One word can have multiple positions.

Passing the checker confirms file consistency, not reviewer identity, competence or clinical validity. Confirm the actual human review and declared coverage before manually preparing a new production sidecar version. Keep all remaining words unknown. Revalidate content and goal-attribution/history behavior before release. Packets for different labels can share a baseline; after a mapping changes, reconcile any remaining old packets rather than silently accepting them against a different baseline.

## Actual verification

- Review-tool checks pass using clearly marked synthetic decisions. They cover partial review, absence, overlapping positions, CSV quotes/commas/newlines/BOM, target mixups, stale data, missing/duplicate IDs and evidence requirements.
- Both generated packets have 596 unique unknown rows, matching target labels and `approved: false`. The six archive members were checked.
- The real unsigned S packet fails validation as expected. Re-exporting into its existing folder also fails. No reviewer decision was invented to make the real packet pass.
- Production `content/ro/sound-mapping.json` is byte-for-byte unchanged. It still has zero reviewed targets and zero word rows. Its SHA-256 is `a0475c80c4bc9be5e0aa7c3fcb761e5ca9fe76b120dcd414a8d132193f966136`.
- Content validation passes with the same 13 existing image-size warnings. TypeScript and lint pass. New work is CLI/tests/docs only, so the existing production app bundle did not need rebuilding.
- After the T3 restart cancelled the old process, the production server was restarted on port 3000. All 85 route checks and the full Chrome practice/backup suite pass against it.

Source discovery used direct reads because the graph catalog has no Word Wheel project. The collaborative browser twice returned `Preview automation snapshot timed out after 15000ms.` The repository's documented external Playwright workflow supplied the final browser evidence. This is Chrome automation with synthetic profiles, not physical-phone evidence.

Latest replacement captures from the passing 2026-10-17 visible-Chrome journey:

- [Phone protected-restore preview](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-17/chromium-mobile-restore-preview.png).
- [Desktop child history](/Users/darius/.t3/userdata/artifacts/word-wheel-2026-10-17/chromium-desktop-child-workspace.png).

No app interface, dependency, public word/image, data schema or deployment changed in this batch. Continue the [pilot checklist](pilot-checklist.md) and [next-batch prompt](next-implementation-prompt.md).
