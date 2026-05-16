import Link from "next/link";
import { WheelGame } from "@/components/wheel-game";
import type { ContentLetter, LetterContent } from "@/content/types";
import type { SupportedLocale } from "@/i18n/locales";

type LetterSummary = ContentLetter &
  Readonly<{
    approvedWordCount: number;
  }>;

type WordWheelShellProps = Readonly<{
  locale: SupportedLocale;
  letters: LetterSummary[];
  selectedContent?: LetterContent;
}>;

export function WordWheelShell({
  locale,
  letters,
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
          <LetterSelectionView letters={letters} locale={locale} />
        )}
      </div>
    </main>
  );
}

function LetterSelectionView({
  locale,
  letters,
}: Readonly<{ locale: SupportedLocale; letters: LetterSummary[] }>) {
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
            href={`/${locale}/play/${encodeURIComponent(letter.id)}`}
            key={letter.id}
          >
            <span className="letter-tile__label">{letter.label}</span>
            <span className="letter-tile__count">
              {letter.approvedWordCount} cuvinte
            </span>
          </Link>
        ))}
      </nav>

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
