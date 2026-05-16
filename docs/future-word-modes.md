# Future Word Modes

This note records the next gameplay/content direction so a future spec pass can expand it deliberately.

## Content Expansion Target

- Fill every Romanian starting-letter bucket with a useful approved pack before launch.
- Prefer 20 to 30 approved words per regular letter.
- Allow at least 15 approved words where a letter has fewer high-quality child-friendly options.
- Allow 30 to 40 approved words for high-value or more demanding letters when quality remains high.
- Do not pad rare letters with obscure, abstract, frightening, adult, brand, or visually ambiguous words.
- Continue using common, concrete, child-known words for ages 4 to 6.

## Future Letter Inclusion Modes

The current v1 gameplay uses only words that begin with the selected letter.

Future gameplay should offer three modes:

1. `starts-with`: only words that begin with the selected letter.
2. `starts-with-or-contains`: words that begin with the selected letter plus words that contain the selected letter elsewhere, shuffled together.
3. `contains-only`: only words that contain the selected letter but do not begin with it.

## Implementation Direction

- Keep free anonymous play available in every mode.
- Keep content static-first for v1: JSON manifests and local/CDN image assets, no gameplay database requirement.
- Preserve Romanian diacritic buckets intentionally: `A`, `Ă`, `Â`, `I`, `Î`, `S`, `Ș`, `T`, and `Ț` must remain distinct unless a future product spec changes that.
- Add metadata only when needed; the current `word` and `normalized` fields are enough to derive basic inclusion eligibility.
- If inside-letter pools become large, add a generated locale-level content index so routes can load the selected letter without importing every large per-letter file into the client bundle.
- When the mode UI is added, use a compact segmented control above or below the wheel; do not bring back the full word list as the default play screen.
