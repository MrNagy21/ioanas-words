import Link from "next/link";
import { CreatorCredit } from "@/components/creator-credit";

export default function NotFound() {
  return (
    <main className="practice-shell recovery-shell">
      <div className="recovery-frame">
        <header className="practice-header">
          <Link className="practice-brand" href="/ro/about?show=1">
            Roata cuvintelor
          </Link>
        </header>
        <section className="recovery-content" aria-labelledby="recovery-title">
          <svg
            className="recovery-wheel"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="60" cy="64" r="43" fill="#fff7e0" />
            <path
              d="M60 21a43 43 0 1 0 43 43"
              stroke="#075e61"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="m29 34 31 30-31 30m31-73v43l31 30"
              stroke="#d5b76c"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="60"
              cy="64"
              r="9"
              fill="#ffd166"
              stroke="#815117"
              strokeWidth="3"
            />
            <path d="m93 17 12 12-17 5z" fill="#cf3f30" />
          </svg>
          <h1 id="recovery-title">Nu găsim pagina aceasta</h1>
          <p>
            Poate că linkul s-a schimbat sau adresa nu este completă. Alege de
            unde vrei să continui.
          </p>
          <nav className="recovery-actions" aria-label="Continuă în aplicație">
            <Link className="spin-button" href="/ro/practice" prefetch={false}>
              Deschide aplicația
            </Link>
            <Link className="secondary-button" href="/ro" prefetch={false}>
              Joacă fără profil
            </Link>
          </nav>
          <Link className="quiet-link" href="/ro/about?show=1" prefetch={false}>
            Cum funcționează jocul
          </Link>
        </section>
        <footer className="practice-footer">
          <CreatorCredit locale="ro" />
        </footer>
      </div>
    </main>
  );
}
