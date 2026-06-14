import Link from "next/link";
import { CreatorCredit } from "@/components/creator-credit";
import { WheelGame } from "@/components/wheel-game";
import { WheelSetupScreen } from "@/components/wheel-setup-screen";
import { getLetterRouteSegment } from "@/content/loaders";
import type {
  ContentLetter,
  ContentPracticeTarget,
  GameplayContent,
} from "@/content/types";
import type { SupportedLocale } from "@/i18n/locales";

type LetterSummary = ContentLetter &
  Readonly<{
    startsWithCount: number;
    containsOnlyCount: number;
    mixedCount: number;
  }>;

type PracticeTargetSummary = ContentPracticeTarget &
  Readonly<{
    startsWithCount: number;
    containsOnlyCount: number;
    mixedCount: number;
  }>;

type WordWheelShellProps = Readonly<{
  locale: SupportedLocale;
  letters: LetterSummary[];
  practiceTargets: PracticeTargetSummary[];
  selectedContent?: GameplayContent;
  setupContent?: GameplayContent;
}>;

export function WordWheelShell({
  locale,
  letters,
  practiceTargets,
  selectedContent,
  setupContent,
}: WordWheelShellProps) {
  const setupTargetLabel = setupContent?.target.label;

  return (
    <main className="app-shell" aria-label="Roata cuvintelor">
      <div className="app-frame">
        <header
          className={setupContent ? "app-header app-header--setup" : "app-header"}
        >
          <div className="app-header__title">
            <p className="app-kicker">Word Wheel</p>
            <h1>Roata cuvintelor</h1>
            {setupContent ? (
              <Link
                aria-label="Schimbă alegerea"
                className="quiet-link app-header__setup-link"
                href={`/${locale}`}
              >
                Schimbă
              </Link>
            ) : null}
          </div>
          <div className="app-header__badges">
            <div className="locale-badge" aria-label="Limba curentă">
              {locale.toUpperCase()}
            </div>
            {setupTargetLabel ? (
              <div className="selected-letter" aria-label="Alegerea curentă">
                {setupTargetLabel}
              </div>
            ) : null}
          </div>
        </header>

        {setupContent ? (
          <WheelSetupScreen content={setupContent} locale={locale} />
        ) : selectedContent ? (
          <WheelGame content={selectedContent} locale={locale} />
        ) : (
          <LetterSelectionView
            letters={letters}
            locale={locale}
            practiceTargets={practiceTargets}
          />
        )}
        <footer className="app-footer" aria-label="Creator credit">
          <CreatorCredit className="app-creator-credit" locale={locale} />
        </footer>
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
      <div className="letter-panel">
        <div className="stage-copy">
          <p className="stage-label">Alege litera</p>
          <h2 id="letter-title">Alege sunetul</h2>
        </div>

        <nav className="letter-grid" aria-label="Litere românești">
          {letters.map((letter) => (
            <Link
              aria-label={`Litera ${letter.label}`}
              className="letter-tile"
              href={`/${locale}/setup/${getLetterRouteSegment(
                locale,
                letter.id,
              )}`}
              key={letter.id}
            >
              <span className="letter-tile__label">{letter.label}</span>
            </Link>
          ))}
        </nav>

        <section
          aria-labelledby="practice-target-title"
          className="practice-targets"
        >
          <div className="practice-targets__heading">
            <p className="stage-label">Alte sunete</p>
            <h3 id="practice-target-title">Grupuri</h3>
          </div>
          <nav
            aria-label="Grupuri de sunete românești"
            className="practice-target-grid"
          >
            {practiceTargets.map((target) => (
              <Link
                aria-label={`Sunetul ${target.label}`}
                className="practice-target-tile"
                href={`/${locale}/setup/${target.routeSegment}`}
                key={target.id}
              >
                <span className="letter-tile__label">{target.label}</span>
              </Link>
            ))}
          </nav>
        </section>
      </div>

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
