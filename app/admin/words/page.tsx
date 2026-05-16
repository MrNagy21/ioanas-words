import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLocaleCoverageSummary } from "@/content/loaders";
import type { ContentWord } from "@/content/types";

export const metadata: Metadata = {
  title: "Admin Words | Word Wheel",
  description: "Read-only Romanian word inventory summary for Word Wheel.",
};

const locale = "ro" as const;

const summaryLabels = [
  ["Enabled letters", "enabledLetters"],
  ["Approved words", "approvedWords"],
  ["Ready images", "readyImages"],
  ["Placeholder images", "placeholderImages"],
  ["Starts-with assignments", "startsWithAssignments"],
  ["Contains-only assignments", "containsOnlyAssignments"],
] as const;

export default function AdminWordsPage() {
  const coverage = getLocaleCoverageSummary(locale);
  const summaryValues = {
    enabledLetters: coverage.letters.length,
    approvedWords: coverage.totalApprovedWords,
    readyImages: coverage.imageCounts.ready,
    placeholderImages: coverage.imageCounts.placeholder,
    startsWithAssignments: coverage.totalStartsWithAssignments,
    containsOnlyAssignments: coverage.totalContainsOnlyAssignments,
  };

  return (
    <main className="admin-page">
      <div className="admin-page__inner">
        <header className="admin-header">
          <div>
            <p className="admin-eyebrow">Read-only inventory</p>
            <h1>Admin Words</h1>
            <p className="admin-note">
              Public content coverage for the static Romanian starter pack. No
              editing, uploads, auth, or database writes are available here.
            </p>
          </div>
          <span className="admin-locale" aria-label="Locale: Romanian">
            Romanian
          </span>
        </header>

        <section
          className="admin-summary"
          aria-labelledby="admin-summary-title"
        >
          <h2 id="admin-summary-title">Summary</h2>
          <dl className="admin-summary__grid">
            {summaryLabels.map(([label, key]) => (
              <div className="admin-stat" key={key}>
                <dt>{label}</dt>
                <dd>{summaryValues[key]}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          className="admin-coverage"
          aria-labelledby="admin-coverage-title"
        >
          <div className="admin-section-heading">
            <h2 id="admin-coverage-title">Romanian Letter Coverage</h2>
            <p>{coverage.letters.length} enabled letters</p>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table">
              <caption>
                Coverage counts derived from approved Romanian word manifests.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Letter</th>
                  <th scope="col">Starts</th>
                  <th scope="col">Contains</th>
                  <th scope="col">Mixed</th>
                  <th scope="col">Ready images</th>
                  <th scope="col">Placeholder images</th>
                  <th scope="col">Play</th>
                </tr>
              </thead>
              <tbody>
                {coverage.letterSummaries.map((summary) => (
                  <tr key={summary.letter.id}>
                    <th scope="row">
                      <span className="admin-letter">
                        {summary.letter.label}
                      </span>
                    </th>
                    <td>{summary.startsWithCount}</td>
                    <td>{summary.containsOnlyCount}</td>
                    <td>{summary.mixedCount}</td>
                    <td>{summary.imageCounts.startsWith.ready}</td>
                    <td>{summary.imageCounts.startsWith.placeholder}</td>
                    <td>
                      <Link
                        aria-label={`Open ${summary.letter.label} wheel`}
                        className="admin-link"
                        href={`/ro/play/${summary.letter.id}`}
                      >
                        Open wheel
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          className="admin-details"
          aria-labelledby="admin-details-title"
        >
          <div className="admin-section-heading">
            <h2 id="admin-details-title">Word Details</h2>
            <p>Canonical approved records and image states</p>
          </div>

          <div className="admin-letter-details">
            {coverage.letterSummaries.map((summary) => (
              <section
                aria-labelledby={`admin-letter-${summary.letter.id}-title`}
                className="admin-letter-detail"
                key={summary.letter.id}
              >
                <header className="admin-letter-detail__header">
                  <div>
                    <h3 id={`admin-letter-${summary.letter.id}-title`}>
                      <span aria-hidden="true" className="admin-letter">
                        {summary.letter.label}
                      </span>
                      <span>{summary.letter.label} word pools</span>
                    </h3>
                    <p>
                      {summary.startsWithCount} starts-with,{" "}
                      {summary.containsOnlyCount} contains-only,{" "}
                      {summary.mixedCount} mixed total
                    </p>
                  </div>
                  <Link
                    aria-label={`Open ${summary.letter.label} wheel`}
                    className="admin-link"
                    href={`/ro/play/${summary.letter.id}`}
                  >
                    Open wheel
                  </Link>
                </header>

                <div className="admin-word-pools">
                  <WordDetailList
                    emptyText="No starts-with words"
                    headingId={`admin-letter-${summary.letter.id}-starts`}
                    title="Starts-with"
                    words={summary.startsWithWords}
                  />
                  <WordDetailList
                    emptyText="No contains-only words"
                    headingId={`admin-letter-${summary.letter.id}-contains`}
                    title="Contains-only"
                    words={summary.containsOnlyWords}
                  />
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function WordDetailList({
  emptyText,
  headingId,
  title,
  words,
}: Readonly<{
  emptyText: string;
  headingId: string;
  title: string;
  words: readonly ContentWord[];
}>) {
  return (
    <section className="admin-word-list" aria-labelledby={headingId}>
      <div className="admin-word-list__header">
        <h4 id={headingId}>{title}</h4>
        <span aria-label={`${words.length} ${title} records`}>
          {words.length}
        </span>
      </div>

      {words.length > 0 ? (
        <ul
          aria-label={`${title} word records`}
          className="admin-word-list__rows"
        >
          {words.map((word) => (
            <li className="admin-word-row" key={word.id}>
              <WordThumbnail word={word} />
              <div className="admin-word-row__body">
                <div className="admin-word-row__title">
                  <strong>{word.display}</strong>
                  <code>{word.id}</code>
                </div>
                <dl className="admin-word-row__meta">
                  <div>
                    <dt>Category</dt>
                    <dd>{word.category}</dd>
                  </div>
                  <div>
                    <dt>Difficulty</dt>
                    <dd>{word.difficulty}</dd>
                  </div>
                  <div>
                    <dt>Image</dt>
                    <dd>
                      <ImageStatusBadge status={word.imageStatus} />
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="admin-empty-state">{emptyText}</p>
      )}
    </section>
  );
}

function WordThumbnail({ word }: Readonly<{ word: ContentWord }>) {
  if (word.imageStatus === "ready") {
    return (
      <Image
        alt={`Ready image thumbnail: ${word.alt}`}
        className="admin-word-thumb admin-word-thumb--ready"
        height={48}
        src={word.image}
        title={word.image}
        unoptimized
        width={48}
      />
    );
  }

  return (
    <span
      aria-label={`Placeholder image for ${word.display}: ${word.alt}`}
      className="admin-word-thumb admin-word-thumb--placeholder"
      role="img"
      title={word.image}
    >
      {word.display.slice(0, 1).toLocaleUpperCase("ro-RO")}
    </span>
  );
}

function ImageStatusBadge({
  status,
}: Readonly<{ status: ContentWord["imageStatus"] }>) {
  const label = status === "ready" ? "Ready image" : "Placeholder image";

  return (
    <span className={`admin-image-status admin-image-status--${status}`}>
      {label}
    </span>
  );
}
