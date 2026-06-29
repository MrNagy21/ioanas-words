import Link from "next/link";
import { WordDetailList } from "../words/word-detail-list";
import {
  getApprovedWords,
  getLetter,
  getLetterRouteSegment,
} from "@/content/loaders";
import { CreatorCredit } from "@/components/creator-credit";
import type { ContentWord } from "@/content/types";

const locale = "ro" as const;

export type ReleaseNumber = "1" | "2" | "3";

const releaseNumbers: readonly ReleaseNumber[] = ["1", "2", "3"];

const committedRelease2 = {
  number: "2",
  id: "release-2",
  title: "Release 2",
  description:
    "Committed Release 2 additions from HEAD. This release is frozen for comparison while Release 3 is prepared.",
  wordListLabel: "Release 2 words",
  wordSectionTitle: "Release 2 Word Records",
  wordSectionDescription: "committed Release 2 records",
  emptyText: "No Release 2 words",
  wordIds: [
    "ro-b-boxa",
    "ro-b-biberon",
    "ro-b-borcan",
    "ro-b-burete",
    "ro-b-brad",
    "ro-b-bluza",
    "ro-b-banca",
    "ro-b-bratara",
    "ro-b-bomboana",
    "ro-b-biblioteca",
    "ro-b-bondar",
    "ro-b-bijuterie",
    "ro-b-burghiu",
    "ro-c-camera-web",
    "ro-c-ceainic",
    "ro-c-covor",
    "ro-c-cravata",
    "ro-c-cabana",
    "ro-c-cotofana",
    "ro-c-cojoc",
    "ro-d-dovlecel",
    "ro-d-dormitor",
    "ro-d-dantela",
    "ro-d-degetar",
    "ro-d-dalta",
    "ro-d-duda",
    "ro-f-fundita",
    "ro-g-galusca",
    "ro-g-gingie",
    "ro-g-ghemuit",
    "ro-i-iac",
    "ro-j-joben",
    "ro-j-janta",
    "ro-j-jardiniera",
    "ro-j-jder",
    "ro-j-jambiere",
    "ro-k-kiwi",
    "ro-k-koala",
    "ro-k-kimono",
    "ro-k-karate",
    "ro-k-kilt",
    "ro-l-lampa",
    "ro-l-luna",
    "ro-l-lebada",
    "ro-l-lopata",
    "ro-l-lipici",
    "ro-l-lupa",
    "ro-l-leagan",
    "ro-l-ladita",
    "ro-l-locomotiva",
    "ro-l-laveta",
    "ro-m-mixer",
    "ro-m-medalie",
    "ro-p-pix",
    "ro-p-periuta",
    "ro-p-papuci",
    "ro-p-pereche",
    "ro-p-punguta",
    "ro-p-porumbel",
    "ro-p-padure",
    "ro-q-quinoa",
    "ro-r-rac",
    "ro-r-ren",
    "ro-r-rucsac",
    "ro-r-role",
    "ro-r-roaba",
    "ro-r-radiator",
    "ro-r-rasina",
    "ro-r-rechizite",
    "ro-s-supa",
    "ro-s-sare",
    "ro-s-seminte",
    "ro-s-sita",
    "ro-s-sticla",
    "ro-s-sac",
    "ro-s-sora",
    "ro-s-sacou",
    "ro-t-taxi",
    "ro-t-tren",
    "ro-t-tractor",
    "ro-t-tabla",
    "ro-t-tigaie",
    "ro-t-tamburina",
    "ro-t-trandafir",
    "ro-t-tacamuri",
    "ro-u-unghiera",
    "ro-v-ventilator",
    "ro-v-vopsea",
    "ro-v-volan",
    "ro-v-vesta",
    "ro-v-vanata",
    "ro-v-vierme",
    "ro-v-visine",
    "ro-v-viespe",
    "ro-w-walkie-talkie",
    "ro-x-xilofon",
    "ro-y-yo-yo",
    "ro-y-yoga",
    "ro-sh-sina",
    "ro-sh-soim",
    "ro-sh-stampila",
    "ro-sh-sezlong",
    "ro-sh-surubelnita",
    "ro-sh-snur",
    "ro-tz-telina",
    "ro-tz-tarc",
    "ro-tz-tigla",
    "ro-tz-tambal",
    "ro-tz-tipar",
  ],
} as const;

const currentDirtyTreeRelease = {
  number: "3",
  id: "release-3",
  title: "Release 3",
  description:
    "Current uncommitted dirty work tree since the committed Release 2 baseline. Review these newly added words before the next commit/release cut.",
  wordListLabel: "Added words only",
  wordSectionTitle: "Release 3 Added Word Records",
  wordSectionDescription: "dirty-tree records",
  emptyText: "No dirty-tree words in this release",
  wordIds: [
    "ro-a-ambalaj",
    "ro-a-afine",
    "ro-b-bujor",
    "ro-b-bufnita",
    "ro-b-briosa",
    "ro-c-coji",
    "ro-c-cartof",
    "ro-c-coif",
    "ro-c-ceafa",
    "ro-c-cufar",
    "ro-c-cosulet",
    "ro-d-drum",
    "ro-d-dulceata",
    "ro-d-dop",
    "ro-d-dar",
    "ro-d-drapel",
    "ro-d-dalmatian",
    "ro-d-disc",
    "ro-d-diamant",
    "ro-d-dunga",
    "ro-d-drona",
    "ro-e-etaj",
    "ro-e-evantai",
    "ro-f-farfurie",
    "ro-f-fereastra",
    "ro-f-faina",
    "ro-f-ferma",
    "ro-f-frate",
    "ro-f-fotografie",
    "ro-f-foarfeca",
    "ro-f-fantana",
    "ro-f-foca",
    "ro-h-hipopotam",
    "ro-h-hartie",
    "ro-h-hotel",
    "ro-h-halat",
    "ro-h-harpa",
    "ro-h-horn",
    "ro-h-hamster",
    "ro-h-hambar",
    "ro-h-husa",
    "ro-h-hol",
    "ro-h-hora",
    "ro-h-hochei",
    "ro-h-hublou",
    "ro-h-hamburger",
    "ro-h-hering",
    "ro-h-hamsie",
    "ro-h-hiena",
    "ro-h-homar",
    "ro-h-ham",
    "ro-h-hanorac",
    "ro-h-hidrant",
    "ro-j-jurnal",
    "ro-j-jalon",
    "ro-j-jambon",
    "ro-j-joystick",
    "ro-j-jerseu",
    "ro-j-jet",
    "ro-l-lemn",
    "ro-l-lacat",
    "ro-l-libelula",
    "ro-l-lift",
    "ro-l-leopard",
    "ro-l-lana",
    "ro-l-lan",
    "ro-l-lampion",
    "ro-m-majoreta",
    "ro-m-movila",
    "ro-n-nava",
    "ro-p-peisaj",
    "ro-p-prajitor",
    "ro-p-pajiste",
    "ro-p-puf",
    "ro-r-rama-cadru",
    "ro-r-rama-vierme",
    "ro-r-randunica",
    "ro-r-rechin",
    "ro-r-rigla",
    "ro-r-rulota",
    "ro-r-rulada",
    "ro-r-radio",
    "ro-r-romb",
    "ro-s-servieta",
    "ro-s-stea",
    "ro-s-saltea",
    "ro-t-trifoi",
    "ro-t-tus",
    "ro-t-trotineta",
    "ro-t-trusa",
    "ro-t-tub",
    "ro-t-turn",
    "ro-t-tunel",
    "ro-t-taitei",
    "ro-t-tufis",
    "ro-t-telecomanda",
    "ro-t-termos",
    "ro-t-tricicleta",
    "ro-v-valiza",
    "ro-v-vrabie",
    "ro-v-vulcan",
    "ro-v-val",
    "ro-v-vasla",
    "ro-v-velier",
    "ro-v-violeta",
    "ro-v-vultur",
    "ro-v-ventuza",
    "ro-sh-suvita",
    "ro-sh-sifonier",
    "ro-sh-sunca",
    "ro-sh-snitel",
    "ro-sh-salupa",
    "ro-sh-sah",
    "ro-sh-sevalet",
    "ro-sh-sofer",
    "ro-sh-sotron",
    "ro-tz-tinta",
    "ro-tz-tinuta",
    "ro-tz-tesatura",
    "ro-tz-tasnitoare",
  ],
} as const;

const summaryLabels = [
  ["Words", "wordCount"],
  ["Ready images", "readyImages"],
  ["Placeholder images", "placeholderImages"],
  ["Affected wheels", "affectedWheels"],
] as const;

export function getReleaseNumbers(): readonly ReleaseNumber[] {
  return releaseNumbers;
}

export function isReleaseNumber(value: string): value is ReleaseNumber {
  return releaseNumbers.includes(value as ReleaseNumber);
}

export function AdminReleasesContent({
  selectedReleaseNumber,
}: Readonly<{ selectedReleaseNumber: ReleaseNumber }>) {
  const releaseSnapshots = getReleaseSnapshots();
  const selectedRelease = releaseSnapshots.find(
    (release) => release.number === selectedReleaseNumber,
  );

  if (!selectedRelease) {
    throw new Error(`Unknown release ${selectedReleaseNumber}`);
  }

  return (
    <main className="admin-page">
      <div className="admin-page__inner">
        <header className="admin-header">
          <div>
            <p className="admin-eyebrow">Release review</p>
            <h1>Admin Releases</h1>
            <p className="admin-note">
              Read-only release structure for Romanian content QA. Release 1 is
              the original committed baseline, Release 2 is the committed
              content release, and Release 3 is the current dirty work tree.
              Use the release pages to inspect each set with the same admin
              review UI.
            </p>
          </div>
          <div className="admin-header__actions">
            <Link className="admin-link" href="/admin/words">
              All words
            </Link>
            <span className="admin-locale" aria-label="Locale: Romanian">
              Romanian
            </span>
          </div>
        </header>

        <section
          className="admin-summary"
          aria-labelledby="admin-release-summary-title"
        >
          <div className="admin-section-heading">
            <div>
              <h2 id="admin-release-summary-title">Release Structure</h2>
              <p>Committed releases plus current dirty-tree additions</p>
            </div>
            <code className="admin-release-id">HEAD + dirty tree</code>
          </div>

          <nav className="admin-release-nav" aria-label="Release navigation">
            {releaseSnapshots.map((release) => (
              <Link
                aria-current={
                  release.number === selectedRelease.number
                    ? "page"
                    : undefined
                }
                className="admin-release-nav__link"
                href={`/admin/releases/${release.number}`}
                key={release.id}
              >
                {release.title}
              </Link>
            ))}
          </nav>

          <div className="admin-release-grid">
            {releaseSnapshots.map((release) => (
              <ReleaseSummary
                href={`/admin/releases/${release.number}`}
                isSelected={release.number === selectedRelease.number}
                key={release.id}
                release={release}
              />
            ))}
          </div>
        </section>

        <ReleaseDetail release={selectedRelease} />
        <footer className="admin-footer" aria-label="Creator credit">
          <CreatorCredit className="admin-creator-credit" />
        </footer>
      </div>
    </main>
  );
}

function ReleaseDetail({
  release,
}: Readonly<{
  release: ReleaseSnapshot;
}>) {
  const affectedLetters = release.affectedLetterIds.map((letterId) => {
    const letter = getLetter(locale, letterId);

    if (!letter) {
      throw new Error(`Release ${release.id} references ${letterId}`);
    }

    return letter;
  });

  return (
    <>
      <section
        className="admin-coverage"
        aria-labelledby="admin-release-routes-title"
      >
        <div className="admin-section-heading">
          <h2 id="admin-release-routes-title">
            {release.title} Wheel Test Routes
          </h2>
          <p>{affectedLetters.length} affected wheels</p>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table admin-release-table">
            <caption>Affected wheel routes for {release.title}.</caption>
            <thead>
              <tr>
                <th scope="col">Letter</th>
                <th scope="col">Words</th>
                <th scope="col">Play route</th>
              </tr>
            </thead>
            <tbody>
              {affectedLetters.map((letter) => {
                const wordsForLetter = release.words.filter(
                  (word) => getLetterIdFromWordId(word.id) === letter.id,
                );

                return (
                  <tr key={letter.id}>
                    <th scope="row">
                      <span className="admin-letter">{letter.label}</span>
                    </th>
                    <td>
                      {wordsForLetter.map((word) => word.display).join(", ")}
                    </td>
                    <td>
                      <Link
                        className="admin-link"
                        href={`/ro/play/${getLetterRouteSegment(
                          locale,
                          letter.id,
                        )}`}
                      >
                        Open wheel
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="admin-details"
        aria-labelledby="admin-release-words-title"
      >
        <div className="admin-section-heading">
          <h2 id="admin-release-words-title">{release.wordSectionTitle}</h2>
          <p>
            {release.words.length} {release.wordSectionDescription}
          </p>
        </div>

        <WordDetailList
          emptyText={release.emptyText}
          headingId={`admin-release-${release.number}-words`}
          title={release.wordListLabel}
          words={release.words}
        />
      </section>
    </>
  );
}

function ReleaseSummary({
  href,
  isSelected,
  release,
}: Readonly<{
  href: string;
  isSelected: boolean;
  release: ReleaseSnapshot;
}>) {
  return (
    <article
      className={
        isSelected
          ? "admin-release-card admin-release-card--selected"
          : "admin-release-card"
      }
    >
      <header className="admin-release-card__header">
        <div>
          <h3>{release.title}</h3>
          <p>{release.description}</p>
        </div>
        <code className="admin-release-id">{release.id}</code>
      </header>
      <dl className="admin-summary__grid admin-summary__grid--compact">
        {summaryLabels.map(([label, key]) => (
          <div className="admin-stat" key={key}>
            <dt>{label}</dt>
            <dd>{release.summary[key]}</dd>
          </div>
        ))}
      </dl>
      <Link className="admin-link" href={href}>
        Open {release.title}
      </Link>
    </article>
  );
}

type ReleaseSummaryValues = Readonly<{
  wordCount: number;
  readyImages: number;
  placeholderImages: number;
  affectedWheels: number;
}>;

type ReleaseSnapshot = Readonly<{
  number: ReleaseNumber;
  id: string;
  title: string;
  description: string;
  words: ContentWord[];
  wordListLabel: string;
  wordSectionTitle: string;
  wordSectionDescription: string;
  emptyText: string;
  affectedLetterIds: string[];
  summary: ReleaseSummaryValues;
}>;

function getReleaseSnapshots(): ReleaseSnapshot[] {
  const allApprovedWords = getApprovedWords(locale);
  const release2Words = getReleaseWords(
    committedRelease2.wordIds,
    allApprovedWords,
    committedRelease2.id,
  );
  const dirtyTreeWords = getReleaseWords(
    currentDirtyTreeRelease.wordIds,
    allApprovedWords,
    currentDirtyTreeRelease.id,
  );
  const nonBaselineWordIds = new Set<string>([
    ...committedRelease2.wordIds,
    ...currentDirtyTreeRelease.wordIds,
  ]);
  const committedBaselineWords = allApprovedWords.filter(
    (word) => !nonBaselineWordIds.has(word.id),
  );

  return [
    buildReleaseSnapshot({
      description:
        "Original committed baseline before Romanian content Release 2 additions.",
      emptyText: "No committed baseline words",
      id: "release-1",
      number: "1",
      title: "Release 1",
      wordListLabel: "Baseline words",
      wordSectionDescription: "baseline records",
      wordSectionTitle: "Release 1 Word Records",
      words: committedBaselineWords,
    }),
    buildReleaseSnapshot({
      description: committedRelease2.description,
      emptyText: committedRelease2.emptyText,
      id: committedRelease2.id,
      number: committedRelease2.number,
      title: committedRelease2.title,
      wordListLabel: committedRelease2.wordListLabel,
      wordSectionDescription: committedRelease2.wordSectionDescription,
      wordSectionTitle: committedRelease2.wordSectionTitle,
      words: release2Words,
    }),
    buildReleaseSnapshot({
      description: currentDirtyTreeRelease.description,
      emptyText: currentDirtyTreeRelease.emptyText,
      id: currentDirtyTreeRelease.id,
      number: currentDirtyTreeRelease.number,
      title: currentDirtyTreeRelease.title,
      wordListLabel: currentDirtyTreeRelease.wordListLabel,
      wordSectionDescription: currentDirtyTreeRelease.wordSectionDescription,
      wordSectionTitle: currentDirtyTreeRelease.wordSectionTitle,
      words: dirtyTreeWords,
    }),
  ];
}

function buildReleaseSnapshot({
  description,
  emptyText,
  id,
  number,
  title,
  wordListLabel,
  wordSectionDescription,
  wordSectionTitle,
  words,
}: Readonly<{
  description: string;
  emptyText: string;
  id: string;
  number: ReleaseNumber;
  title: string;
  wordListLabel: string;
  wordSectionDescription: string;
  wordSectionTitle: string;
  words: ContentWord[];
}>): ReleaseSnapshot {
  const affectedLetterIds = getAffectedLetterIds(words);

  return {
    affectedLetterIds,
    description,
    emptyText,
    id,
    number,
    summary: getReleaseSummary(words, affectedLetterIds),
    title,
    wordListLabel,
    wordSectionDescription,
    wordSectionTitle,
    words,
  };
}

function getReleaseSummary(
  words: readonly ContentWord[],
  affectedLetterIds: readonly string[],
): ReleaseSummaryValues {
  return {
    affectedWheels: affectedLetterIds.length,
    placeholderImages: words.filter(
      (word) => word.imageStatus === "placeholder",
    ).length,
    readyImages: words.filter((word) => word.imageStatus === "ready").length,
    wordCount: words.length,
  };
}

function getReleaseWords(
  wordIds: readonly string[],
  approvedWords: readonly ContentWord[],
  releaseId: string,
): ContentWord[] {
  const wordsById = new Map(approvedWords.map((word) => [word.id, word]));

  return wordIds.map((wordId) => {
    const word = wordsById.get(wordId);

    if (!word) {
      throw new Error(
        `Release ${releaseId} references missing word ${wordId}`,
      );
    }

    return word;
  });
}

function getAffectedLetterIds(words: readonly ContentWord[]): string[] {
  return Array.from(new Set(words.map((word) => getLetterIdFromWordId(word.id))));
}

function getLetterIdFromWordId(wordId: string): string {
  const [, letterSegment] = wordId.split("-");

  if (letterSegment === "sh") {
    return "ș";
  }

  if (letterSegment === "tz") {
    return "ț";
  }

  return letterSegment;
}
