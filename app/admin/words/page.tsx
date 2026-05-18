import type { Metadata } from "next";
import Link from "next/link";
import { WordDetailList } from "./word-detail-list";
import {
  getLetterRouteSegment,
  getLocaleCoverageSummary,
  getPracticeTargetCoverageSummaries,
} from "@/content/loaders";

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
  const practiceTargetSummaries = getPracticeTargetCoverageSummaries(locale);
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
                    <td>{summary.imageCounts.mixed.ready}</td>
                    <td>{summary.imageCounts.mixed.placeholder}</td>
                    <td>
                      <Link
                        aria-label={`Open ${summary.letter.label} wheel`}
                        className="admin-link"
                        href={`/ro/play/${getLetterRouteSegment(
                          locale,
                          summary.letter.id,
                        )}`}
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
          className="admin-coverage"
          aria-labelledby="admin-practice-coverage-title"
        >
          <div className="admin-section-heading">
            <h2 id="admin-practice-coverage-title">
              Romanian Practice Target Coverage
            </h2>
            <p>{practiceTargetSummaries.length} sequence targets</p>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table">
              <caption>
                Coverage counts for sequence practice targets derived from
                approved Romanian word manifests.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Target</th>
                  <th scope="col">Starts</th>
                  <th scope="col">Contains</th>
                  <th scope="col">Mixed</th>
                  <th scope="col">Ready images</th>
                  <th scope="col">Placeholder images</th>
                  <th scope="col">Play</th>
                </tr>
              </thead>
              <tbody>
                {practiceTargetSummaries.map((summary) => (
                  <tr key={summary.target.id}>
                    <th scope="row">
                      <span className="admin-letter">
                        {summary.target.label}
                      </span>
                    </th>
                    <td>{summary.startsWithCount}</td>
                    <td>{summary.containsOnlyCount}</td>
                    <td>{summary.mixedCount}</td>
                    <td>{summary.imageCounts.mixed.ready}</td>
                    <td>{summary.imageCounts.mixed.placeholder}</td>
                    <td>
                      <Link
                        aria-label={`Open ${summary.target.label} practice wheel`}
                        className="admin-link"
                        href={`/ro/play/${summary.target.routeSegment}`}
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
                    href={`/ro/play/${getLetterRouteSegment(
                      locale,
                      summary.letter.id,
                    )}`}
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
