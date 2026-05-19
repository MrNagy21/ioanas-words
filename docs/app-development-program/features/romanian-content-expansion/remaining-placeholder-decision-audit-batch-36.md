# Batch 36 Remaining Placeholder Decision Audit

Batch: Romanian Content Expansion Batch 36, Remaining Placeholder Decision Audit.

Spec date: 2026-05-18.

Status: Completed as a documentation-only audit.

## Scope

This batch audited the `23` approved Romanian production records that still use the shared generic placeholder after Batch 35. No images were generated, no assets were changed, and no production word manifests were edited.

Production totals remain:

- Approved Romanian words: `370`.
- Ready images: `347`.
- Placeholder images: `23`.

## Remaining Placeholder Groups

### Clear Non-Person / Non-Magical Replacement Candidate

| Word ID | Word | Likely path | Decision note |
| --- | --- | --- | --- |
| `ro-z-zmeu` | `zmeu` | Replace only if the intended child-facing sense is a toy kite. | Use one colorful kite, no dragon, no fantasy creature. Human should confirm the intended sense before image work because `zmeu` can also carry a fantasy-creature reading. |

### Person / Family-Sensitive Decision

These records can become clear thumbnails only if the project accepts a convention for generic people and family roles. That convention should be approved before any image is promoted, because it affects representation, age/gender cues, family assumptions, and whether the app should show person-role images at all.

| Word ID | Word | Sensitivity | Decision note |
| --- | --- | --- | --- |
| `ro-b-bebelus` | `bebeluș` | baby/person | Needs a generic baby convention; avoid realistic infant details and avoid implying a specific ethnicity or family context. |
| `ro-b-bunic` | `bunic` | grandfather/family | Needs a family-role convention; avoid stereotyped age, ethnicity, or disability cues. |
| `ro-b-bunica` | `bunică` | grandmother/family | Needs a family-role convention; avoid stereotyped age, ethnicity, or disability cues. |
| `ro-b-baietel` | `băiețel` | child/person | Needs a generic child convention; avoid making gender cues too narrow or caricatured. |
| `ro-e-echipa` | `echipă` | group/person concept | Broad group concept; likely needs multiple children or symbolic team items, both of which are tradeoffs. |
| `ro-f-fetita` | `fetiță` | child/person | Needs a generic child convention; avoid making gender cues too narrow or caricatured. |
| `ro-f-frizura` | `frizură` | person-adjacent | Could show hair on a simplified head silhouette, but that still depends on a person convention and may be visually narrow. |
| `ro-g-gemeni` | `gemeni` | children/person | Needs two-child convention; avoid implying identical clothing, exact gender, or family composition. |
| `ro-g-gimnast` | `gimnast` | person/sport | Requires a person in an athletic pose; defer until person/action imagery is approved. |
| `ro-t-tata` | `tata` | father/family | Needs a family-role convention; avoid stereotyped gender, age, ethnicity, or family assumptions. |
| `ro-i-circ-imbratisare` | `îmbrățișare` | people/action/family | Requires at least two people or a symbolic substitute; likely too sensitive and action-dependent without a convention. |

### Magical / Fantasy-Dependent Decision

These records are not ordinary concrete objects. They should stay placeholder-backed unless the human explicitly approves fantasy imagery in the child-facing pack and the image brief can stay non-scary, non-branded, and clearly distinct from copyrighted characters.

| Word ID | Word | Fantasy tradeoff | Decision note |
| --- | --- | --- | --- |
| `ro-g-gigant` | `gigant` | fantasy/person scale | A giant can become frightening or storybook-specific; likely defer unless fantasy people are accepted. |
| `ro-m-magie` | `magie` | abstract magic | Usually shown with wand/sparkles; needs approval for magical symbols and may remain abstract. |
| `ro-m-magician` | `magician` | person plus magic | Needs both person convention and magic convention; likely defer until both are approved. |
| `ro-u-unicorn` | `unicorn` | fantasy animal | Can be child-friendly, but it is explicitly fantasy and style must avoid copyrighted-character cues. |
| `ro-z-zana` | `zână` | fantasy person | Needs fantasy plus person convention; high risk of generic fairy/copyrighted-character drift. |
| `ro-i-circ-imparat` | `împărat` | person/royalty/storybook | Royal costume can be storybook-specific and person-sensitive; likely defer unless role/fantasy imagery is approved. |

### Likely Deferral

These records are weak image-replacement candidates for the current wheel thumbnail standard. They should remain deferred unless the human chooses to revisit production vocabulary scope or accepts a narrower visual interpretation.

| Word ID | Word | Deferral reason | Decision note |
| --- | --- | --- | --- |
| `ro-g-gimnastica` | `gimnastică` | broad activity, action-dependent | A mat, ribbon, or pose would teach a narrower sport/object than the Romanian activity. |
| `ro-g-ghicitoare` | `ghicitoare` | abstract/visually ambiguous | A question mark, puzzle card, or fortune-teller image would either add text-like symbolism or teach a different concept. |
| `ro-m-miez` | `miez` | broad/context-dependent | Apple core, bread crumb, or seed center would likely teach a narrower object than `miez`. |
| `ro-p-plus` | `pluș` | material/object ambiguity | A plush toy overlaps the already-ready `ursuleț`; fabric texture alone may not be recognizable at wheel size. |
| `ro-s-stinghie` | `stinghie` | lower-familiarity/ambiguous object | A plank or slat is visually plain and may be confused with generic wood, shelf, or board. |

## Human Decisions Needed

Before any future image promotion for these records, ask the human to choose:

- Whether person/family records should receive generic person icons, stay placeholder-backed, or be removed/hidden in a separate scope decision.
- Whether fantasy/magical records are acceptable in the production image pack.
- Whether `zmeu` should be treated as the toy kite sense for child-facing imagery.
- Whether the likely-deferral records should remain approved placeholder-backed, be hidden from gameplay, or be revisited in a vocabulary cleanup batch.

Changing visibility, removing approved records, or narrowing accepted meanings would be a production scope decision and should not be done silently.

## Ready-Image Quality Audit

The Batch 35 handoff flagged five already-ready images for corrective regeneration. A visual audit against the on-brand reference set in `docs/image-pipeline.md` confirms all five should remain on the regeneration watchlist.

| Word ID | Current result | Regeneration direction |
| --- | --- | --- |
| `ro-r-robinet` | Too coarse and ambiguous; reads like a blocky fixture more than the stronger household-object references. | One clear sink tap or faucet with recognizable spout and handle, metallic gray/blue, pale background. |
| `ro-a-aripa` | Too abstract; the blue shape does not clearly read as a feathered wing at wheel size. | One feathered wing with layered feathers and curved silhouette, no bird body, no loose fragments. |
| `ro-c-coaja` | Curled peel idea is usable, but detached blocks make it feel artifacted. | One continuous curled orange or banana peel, no unexplained loose pieces. |
| `ro-e-esarfa` | Blocky plus-like shape reads as stacked strips rather than a soft scarf. | One scarf with a gentle fold or trailing end, visible fringe, fabric-like highlights. |
| `ro-g-girafa` | Cropped mascot-like head/neck; weaker than the full animal references. | Friendly natural giraffe with long neck, head, spots, and enough body/neck context to read at wheel size. |

The spoken `Capea` review note is still unresolved. No production word ID currently matches `Capea`, so no asset should be created, replaced, or regenerated for it until the human clarifies the intended record.

## Batch Result

Batch 36 made no production content, asset, route, schema, admin, auth, database, billing, account, AI pronunciation, or clinical-claim changes. It created a decision map for the remaining placeholder-backed records and a corrected ready-image regeneration watchlist for a later explicitly approved batch.
