import mapping from "../../content/ro/sound-mapping.json";
import { getApprovedWords } from "../../src/content/loaders";
import {
  validateSoundMapping,
  type SoundMapping,
} from "../../src/content/sound-mapping";
validateSoundMapping(
  mapping as SoundMapping,
  new Set(getApprovedWords("ro").map((w) => w.id)),
);
console.log(
  `Sound mapping schema valid: ${(mapping as SoundMapping).targets.filter((target) => target.reviewed).length} reviewed targets enabled; ${Object.keys(mapping.words).length} word review records. Unreviewed attribution stays unknown.`,
);
