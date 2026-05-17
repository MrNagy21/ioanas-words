import Link from "next/link";
import { WheelGame } from "@/components/wheel-game";
import { getLetterRouteSegment } from "@/content/loaders";
import type {
  ContentLetter,
  ContentPracticeTarget,
  GameplayContent,
} from "@/content/types";
import type { SupportedLocale } from "@/i18n/locales";

type LetterSummary = ContentLetter &
  Readonly<{
    approvedWordCount: number;
  }>;

type PracticeTargetSummary = ContentPracticeTarget &
  Readonly<{
    approvedWordCount: number;
  }>;

type WordWheelShellProps = Readonly<{
  locale: SupportedLocale;
  letters: LetterSummary[];
  practiceTargets: PracticeTargetSummary[];
  selectedContent?: GameplayContent;
}>;

export function WordWheelShell({
  locale,
  letters,
  practiceTargets,
  selectedContent,
}: WordWheelShellProps) {
  return (
    <main className="app-shell" aria-label="Roata cuvintelor">
      <div className="app-frame">
        <header className="app-header">
          <div>
            <p className="app-kicker">Word Wheel</p>
            <h1>Roata cuvintelor</h1>
          </div>
          <div className="locale-badge" aria-label="Limba curentă">
            {locale.toUpperCase()}
          </div>
        </header>

        {selectedContent ? (
          <WheelGame content={selectedContent} locale={locale} />
        ) : (
          <LetterSelectionView
            letters={letters}
            locale={locale}
            practiceTargets={practiceTargets}
          />
        )}
      </div>
    </main>
  );
}

function LetterSelectionView({
  locale,
  letters,
  practiceTargets,
}: Readonly<{
  locale: SupportedLocale;
  letters: LetterSummary[];
  practiceTargets: PracticeTargetSummary[];
}>) {
  const previewLetters = letters.slice(0, 4);

  return (
    <section className="app-stage letter-stage" aria-labelledby="letter-title">
      <div className="stage-copy">
        <p className="stage-label">Alege litera</p>
        <h2 id="letter-title">Cu ce sunet pornim?</h2>
      </div>

      <nav className="letter-grid" aria-label="Litere românești">
        {letters.map((letter) => (
          <Link
            aria-label={`Litera ${letter.label}`}
            className="letter-tile"
            href={`/${locale}/play/${getLetterRouteSegment(locale, letter.id)}`}
            key={letter.id}
          >
            <span className="letter-tile__label">{letter.label}</span>
            <span className="letter-tile__count">
              {letter.approvedWordCount} cuvinte
            </span>
          </Link>
        ))}
      </nav>

      <section
        aria-labelledby="practice-target-title"
        className="practice-targets"
      >
        <div className="practice-targets__heading">
          <p className="stage-label">Alte sunete</p>
          <h3 id="practice-target-title">Exersează grupuri</h3>
        </div>
        <nav
          aria-label="Grupuri de sunete românești"
          className="practice-target-grid"
        >
          {practiceTargets.map((target) => (
            <Link
              aria-label={`Sunetul ${target.label}`}
              className="practice-target-tile"
              href={`/${locale}/play/${target.routeSegment}`}
              key={target.id}
            >
              <span className="letter-tile__label">{target.label}</span>
              <span className="letter-tile__count">
                {target.approvedWordCount} cuvinte
              </span>
            </Link>
          ))}
        </nav>
      </section>

      <div className="wheel-preview" aria-hidden="true">
        <div className="wheel-preview__ring">
          {previewLetters.map((letter) => (
            <span key={letter.id}>{letter.label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
