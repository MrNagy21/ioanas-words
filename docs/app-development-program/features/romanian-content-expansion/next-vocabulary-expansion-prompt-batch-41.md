# Next Vocabulary Expansion Prompt

You are continuing Word Wheel Romanian content expansion after Batch 41 planning.

Read first:

1. `AGENTS.md`
2. `docs/agent-brief.md`
3. `docs/spec.md`
4. `docs/image-pipeline.md`
5. `docs/app-development-program/speech-therapy-content-guidance.md`
6. `docs/app-development-program/features/romanian-content-expansion/requested-letter-and-sound-expansion-batch-41.md`
7. `docs/app-development-program/features/romanian-content-expansion/plan.md`
8. `docs/app-development-program/features/romanian-content-expansion/status.md`
9. `docs/status.md`

Goal:

Start from Batch 41 and continue into Batch 42.

Batch 41 has already recorded the scope and decisions. First review `requested-letter-and-sound-expansion-batch-41.md` and confirm the documented full batch sequence still matches `plan.md` and `status.md`. Then execute Batch 42: create a candidate worksheet for the requested letter and sound expansion. Do not add production JSON records, images, route changes, schema changes, or placeholders yet.

Requested areas:

- add playable `Ă`, `Â`, `K`, `Q`, `W`, `X`, and `Y`;
- add more `CE`, `CI`, `GE`, `GI`, `GHE`, `CHE`, and `CHI` words;
- add more starts-with `L`, `R`, `S`, `Ș`, `T`, `Ț`, `V`, `B`, `D`, and `J`;
- add more contains/interior `Ș`, `Ț`, `V`, `B`, `D`, and `J`.

Human decisions already recorded:

- New letters should behave like normal letters once implemented: starts-with, contains-only, mixed mode, setup, play, exclusion filtering, and admin inventory.
- `Ă` and `Â` use `a-breve` and `a-circ` route tokens plus `ro-a-breve-...` and `ro-a-circ-...` ID/image prefixes.
- Existing `Ș`, `Ț`, and `Î` conventions remain `sh`, `tz`, and `i-circ`.
- Aim close to `10` good additions per requested area where quality allows.
- Use fewer additions for weak rare-letter buckets rather than padding.
- For weak buckets, first add all genuinely child-friendly and imageable words; then allow up to about `5` standard Romanian, concrete, easily imageable learnable stretch words.
- Avoid obscure words, brands, proper names, adult words, slang, offensive words, specialized terms, and visually confusing abstractions.
- Do not duplicate existing words or add near-synonyms with the same practical meaning just to raise counts.
- Actions are allowed only when one clear child-safe image can represent them.
- Overlapping words are allowed, but do not over-prioritize overlap. Include both simple non-overlapping words and useful overlapping words. Record overlap load so a human can decide if a word is too complex for the target.

Before generating the worksheet:

1. Recompute current coverage from `content/ro/*.json`, not from memory.
2. Re-check Romanian alphabet/orthography sources for rare letters if proposing `K`, `Q`, `W`, `X`, or `Y` candidates.
3. Re-check Romanian speech/logopedie references, especially for sound positions and differentiation involving `R`, `S`, `Ș`, `Ț`, `J`, `L`, `V`, `D`, `T`, `CE/CI`, `GE/GI`, `CHE/CHI`, and `GHE/GHI`.
4. Record source URLs in the worksheet or a companion source section.

Useful sources to start with:

- dexonline `1.1. Literele`: https://dexonline.ro/article/1.1._Literele
- DOOM 3 introductory study: https://doom.lingv.ro/studiu_introductiv_complet
- Logorici `Joc logopedic - Sunetul R`: https://www.logorici.ro/joc-sunetul-r/
- Logorici `Jocuri interactive pentru corectarea sunetului S`: https://www.logorici.ro/jocuri-interactive-pentru-corectarea-sunetului-s/
- CJRAE Caraș-Severin `Materiale logopedie`: https://www.cjrae-cs.ro/mat_logopedie.html
- CJRAE Caraș-Severin `Sunetul S`: https://www.cjrae-cs.ro/assets/documente/mat_logopedie/Sunetul_S.pdf
- CJRAE Caraș-Severin `Sunetul Ș`: https://cjrae-cs.ro/assets/documente/mat_logopedie/Sunetul_%C8%98.pdf
- CMBRAE parent/child logopedie materials: https://www.cmbrae.ro/2017/wp-content/uploads/Mat-logopedice-pt-parinti-si-copii.pdf

Create a new worksheet file in:

```txt
docs/app-development-program/features/romanian-content-expansion/
```

Suggested filename:

```txt
candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
```

The worksheet must include, at minimum:

```txt
candidate word
display spelling with Romanian diacritics
canonical starting letter
route/ID prefix if newly enabled
category
part of speech
age fit
child-known / learnable stretch / reject
familiarity score
imageability score
safety notes
primary requested area improved
secondary requested areas improved
primary speech target
secondary speech targets
target sound position: initial / medial / final / cluster / repeated
syllable count
simple or complex syllable shape
consonant clusters present
likely contrast target
starts-with target improved
contains targets improved
overlap load notes
duplicate/near-synonym check
source notes
review decision
rejection reason
therapist-review note
image brief status
```

Keep accepted candidates as worksheet-stage candidates only. Do not add them to production manifests until the human reviews Batch 42 and explicitly approves Batch 43 or a production slice.

Verification for Batch 42:

```txt
git diff --check
```

When Batch 42 is complete, update:

- `docs/app-development-program/features/romanian-content-expansion/status.md`
- `docs/status.md`
- this prompt, if the next step changes

Then provide the human a concise summary and a ready-to-copy prompt for Batch 43 human vocabulary review.
