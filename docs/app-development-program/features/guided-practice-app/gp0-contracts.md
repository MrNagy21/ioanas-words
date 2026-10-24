# GP0 implementation contracts

Date: 2026-10-16. This records implemented engineering decisions and user-approved pilot settings. It is not a clinical validation.

## Local storage ADR

Use browser-native IndexedDB with no new dependency. Store a versioned local document under one key in one object store. For this small local pilot, one document makes profile deletion, turn completion, award creation, and restore atomic. It trades record-level querying for simple complete export and validation. Revisit only when actual local history volume warrants it.

Every write reads the latest document inside a readwrite transaction, validates it, applies a synchronous command, validates the result, increments a revision, and resolves only after transaction completion. No asynchronous work occurs inside the command. Profile edits/restores require the revision shown to the adult. A stale edit fails with a refresh message. Session commands additionally check session ownership. BroadcastChannel announces revisions; focus refresh is the fallback. Unknown/corrupt schemas fail visibly without overwriting stored data. Browser upgrade blocking asks adults to close other app tabs. A failed write never updates the visible saved state.

The existing wizard keeps its validated localStorage format under `word-wheel.setup.v1`. Initialization imports and reconciles its configurations/active settings by fingerprint without deleting the source. A global Web Lock serializes wizard editing and backup snapshots/restores. Whole-app restore atomically replaces the canonical IndexedDB document, then mirrors configurations through a persisted repair marker; a failed mirror reports the completed restore plus a retry warning. Child restore never rewrites the shared library. Malformed/future data blocks overwriting.

Records use opaque IDs, ISO dates, a schema version, and explicit child/session references. Persist small word/configuration snapshots, not image copies. Backup parsing is strict and bounded before any transaction. Whole-app replacement requires the preview revision. Individual-child replacement validates references and preserves unrelated profiles/library entries. Both export scopes use the encrypted UI; raw envelope helpers are internal only. Document schema 3 migrates versions 1 and 2.

This uses [IndexedDB transactions](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB). Browser shutdown can interrupt writes. Wait for transaction completion during use; no exit-only saving or background guarantee.

## Session state machine

Prepared → active → result pending → active or ended. Spin animation without a shown result is transient and receives no credit. Before enabling result actions, persist a unique pending turn with word, active-goal matches, mapping version, and shown timestamp. If this write fails, show a retry and do not claim saved participation.

Keep/X/Escape commits the pending turn and retains the word. Remove commits it and removes the word. One transaction inserts the immutable turn, clears pending state, updates remaining IDs, and creates eligible awards/queue entries. Unique turn/award IDs make repeats no-ops. An empty wheel ends in the same transaction. End confirmation is available only with no pending result. Ending adds no count or completion award.

Reload recovery consumes a previously displayed pending turn once, keeps its word, and queues any award for the same child. A tab merely hiding does nothing. Another tab may display state but cannot control an owned active session. Browser Web Locks grant exclusive live control. Closing/reloading releases the lock; the next controller claims a new owner ID and the stale controller fails commands. Configuration snapshots remain fixed; goals are snapshotted when the next turn is shown.

## Accepted sound mapping contract

Keep the current word manifests unchanged. Accepted sidecar shape (illustrative reviewed row, not production approval):

```json
{
  "schemaVersion": 1,
  "mappingVersion": "ro-pilot-1",
  "targets": [{ "id": "ro:s", "label": "S", "reviewed": true }],
  "words": {
    "canonical-word-id": {
      "reviewedTargetIds": ["ro:s"],
      "matches": [{ "targetId": "ro:s", "positions": ["initial"] }],
      "reviewer": "review reference, not a child identifier"
    }
  }
}
```

A target listed as reviewed but absent from matches means reviewed absence. Missing review means unknown. Reject duplicate IDs, unsupported positions, matches without review, and unknown word references. Vowels and sequence groups need explicit reviewer decisions about target identity; navigation labels are not phoneme definitions. The actual production sidecar has no reviewed targets or rows, so sound credit remains unknown.

Coverage baseline: 596 approved words, zero reviewed goal mappings in the current production schema. The candidate worksheet is spelling triage only. It is not review approval. All enabled pilot targets need review across their declared word coverage. The user will arrange native Romanian review; reviewer identity and signed coverage are still pending. All goals may be requested while mappings are pending, but the UI must explain that goal totals are unavailable. Overall participation remains usable.

## Accepted pronunciation wording

An unrated state plus 0–5 adult judgments, titled "Cum apreciați pronunția acestui sunet?" Approved pilot anchors: 0 "Nu reușește încă", 1 "Foarte dificil", 2 "Dificil", 3 "Parțial corect", 4 "Aproape corect", 5 "Corect în situația observată". This describes pronunciation only. It is not a standardized assessment. The user accepted these labels for the pilot. Saving a rating never mints awards.

## Accepted reward rules

Overall and Standard goal thresholds: 1, 5, 10, 20, then every 20. Frequent goal thresholds: 1, 3, 5, 10, then every 10. Every counted word fills the next overall medal bar. These are accepted pilot settings, not therapeutic prescriptions. Preserve the next promised goal threshold after a pace change; apply the new pace after that award. Preserve earned medals. Explicit adult progress celebrations have separate IDs and distinct teal artwork; rating saves never mint them. No XP, multipliers or position medals.

## Accepted backup protection

Both scopes use password-protected format version 1: native AES-GCM-256, fresh 16-byte salt and 12-byte IV, PBKDF2-SHA256 with 600,000 iterations and fixed versioned additional data. No password is stored or recoverable. Minimum password length is 8. Decrypt and validate before preview; wrong passwords/tampering fail without mutation. Limit decrypted envelopes to 5 MB and encrypted files to 7 MB. These bounds are pilot limits, not a promise of unlimited history. Offer an export before replacement, then require preview confirmation. The UI resets file/password drafts after restore. A lost password cannot recover the backup; protect the device and transfer password separately. No plaintext export UI or cloud service.

## Screens and mobile flow

- `/ro`: existing anonymous target picker, with a link to the adult workspace.
- `/ro/practice`: adult profile picker → selected child → goals/history/rewards. Draft form state survives goal detours.
- Existing `/ro/setup/[target]`: shared adult configuration editor, also reused inside the tracked workflow.
- Pre-play: child, actual words, potential reviewed goal credits, missing/unknown/no-match states, Start.
- Tracked play: existing wheel, keep/remove, End after result closure, then summary/collection.
- `/ro/about`: public introduction; returning profiles go directly to practice unless `?show=1`.
- `/ro/demo`: transient sample play with no writes to profile, reward, configuration or preference storage.
- Help restarts the skippable five-step local guide; backups live in the adult workspace.

Adult pages scroll independently on short phones. Default new guided wheels suggest 8 words; old saved sizes stay intact. Adult forms use the incumbent interface; this is an extension, not a rebrand.

## Installation/offline finding

The existing optimized image folder is 4.5 MB. A static pack is plausible, but the pinned app uses App Router navigation and Next Image URLs. A production service worker must cache the real shell, route payloads, and chosen image variants. The [Next.js PWA guide](https://nextjs.org/docs/app/guides/progressive-web-apps) supports a manifest but does not prove this app works offline. Keep GP8 conditional. Do not add a service worker before a production-build cold-offline and update test. Local saving remains required now. No framework upgrade is needed for GP1/GP2.

GP8 outcome: manifest/icons implemented; offline explicitly deferred. Cold offline launch fails as expected. No service worker, pack download or background execution claim. Physical installation is unverified. See [implementation-report.md](implementation-report.md).

## Storage-unavailable anonymous fallback

If the shared setup editor cannot safely initialize browser storage/locking, it does not edit or overwrite saved configurations. The adult may explicitly open a temporary base wheel. This mode skips saved-setup hydration, prevents configuration save/delete, marks itself “Fără salvare” and keeps play state only in memory. It earns no child-profile participation. It restores anonymous access without bypassing transactions or locks for saved data. Reload returns to normal setup/error handling. Local saving remains required for tracked practice; offline loading remains deferred.
