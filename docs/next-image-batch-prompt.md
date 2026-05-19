# Next Image Batch Prompt

There is no additional approved image-generation scope after Romanian Content Expansion Batch 38, and Batch 39 finalized the current Romanian image completion scope. Do not generate images, add vocabulary, or create another image batch without a separate human-approved production decision.

Current finalized Romanian production pack:

- Approved words: `367`.
- Ready images: `367`.
- Approved placeholders: `0`.
- Rejected audit-trail records: `ghicitoare`, `miez`, and `stinghie`.
- Unresolved spoken note: `Capea` / `Kapia`; no current production word ID matches it.

Batch 39 confirmed the production JSON, public image assets, `/admin/words`, and representative gameplay routes all match the finalized pack counts. The public non-placeholder image tree contains exactly `367` WebP files referenced by approved ready records, with no missing or unused production image assets found.

## Remaining Release Verification Steps

Before release or deployment handoff:

1. Run `pnpm run build`.
2. Deploy or inspect the Vercel preview.
3. Verify deployed `/ro`, `/admin/words`, and representative `/ro/play/...` routes on mobile and desktop.
4. Complete final human visual review of the deployed production image pack.

## Future Scope Rule

Any future vocabulary, image, `Ă`/`Â` bucket, route/schema, speech-target metadata, admin editing, auth, database, billing, account, AI pronunciation, clinical-claim, or image-generation work needs a new explicit human-approved production scope before implementation.
