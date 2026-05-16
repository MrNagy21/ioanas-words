import type { SupportedLocale } from "@/i18n/locales";
import type {
  IMAGE_STATUS_VALUES,
  PART_OF_SPEECH_VALUES,
  WORD_AGE_BAND_VALUES,
  WORD_CATEGORY_VALUES,
  WORD_DIFFICULTY_VALUES,
  WORD_STATUS_VALUES,
} from "@/content/rules.mjs";

export type ContentLetter = Readonly<{
  id: string;
  label: string;
  enabled: boolean;
  wordFile: string;
  sortOrder: number;
}>;

export type ContentTarget = ContentLetter | string;

export type LetterManifest = Readonly<{
  locale: SupportedLocale;
  letters: ContentLetter[];
}>;

export type PartOfSpeech = (typeof PART_OF_SPEECH_VALUES)[number];

export type WordDifficulty = (typeof WORD_DIFFICULTY_VALUES)[number];

export type WordAgeBand = (typeof WORD_AGE_BAND_VALUES)[number];

export type WordCategory = (typeof WORD_CATEGORY_VALUES)[number];

export type ImageStatus = (typeof IMAGE_STATUS_VALUES)[number];

export type WordStatus = (typeof WORD_STATUS_VALUES)[number];

export type ContentWord = Readonly<{
  id: string;
  word: string;
  display: string;
  normalized: string;
  partOfSpeech: PartOfSpeech;
  difficulty: WordDifficulty;
  ageBand: WordAgeBand;
  category: WordCategory;
  image: string;
  imageStatus: ImageStatus;
  alt: string;
  source: string[];
  license: string;
  status: WordStatus;
}>;

export type WordManifest = Readonly<{
  locale: SupportedLocale;
  letter: string;
  words: ContentWord[];
}>;

export type LetterContent = Readonly<{
  letter: ContentLetter;
  words: ContentWord[];
  approvedWords: ContentWord[];
}>;

export type GameplayContent = Readonly<{
  letter: ContentLetter;
  wordPools: DerivedWordPools;
}>;

export type DerivedWordPools = Readonly<{
  target: string;
  startsWithWords: ContentWord[];
  containsOnlyWords: ContentWord[];
  mixedWords: ContentWord[];
  imageCounts: DerivedWordPoolImageCounts;
}>;

export type ImageReadinessCounts = Readonly<{
  total: number;
  ready: number;
  placeholder: number;
}>;

export type DerivedWordPoolImageCounts = Readonly<{
  startsWith: ImageReadinessCounts;
  containsOnly: ImageReadinessCounts;
  mixed: ImageReadinessCounts;
}>;

export type LetterCoverageSummary = Readonly<{
  letter: ContentLetter;
  startsWithWords: ContentWord[];
  containsOnlyWords: ContentWord[];
  mixedWords: ContentWord[];
  startsWithCount: number;
  containsOnlyCount: number;
  mixedCount: number;
  imageCounts: DerivedWordPoolImageCounts;
  startsWithImageCounts: ImageReadinessCounts;
  containsOnlyImageCounts: ImageReadinessCounts;
  mixedImageCounts: ImageReadinessCounts;
}>;

export type LocaleCoverageSummary = Readonly<{
  locale: SupportedLocale;
  letters: ContentLetter[];
  approvedWords: ContentWord[];
  totalApprovedWords: number;
  totalStartsWithAssignments: number;
  totalContainsOnlyAssignments: number;
  imageCounts: ImageReadinessCounts;
  letterSummaries: LetterCoverageSummary[];
}>;
