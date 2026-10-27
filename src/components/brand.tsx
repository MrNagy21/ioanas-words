/** Original speech-bubble mark, shared by every public app surface. */
export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-lockup${compact ? " brand-lockup--compact" : ""}`}>
      {/* A local SVG keeps the mark crisp at icon and wordmark sizes. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/vorbini-mark.svg?v=teal-20261027"
        width="36"
        height="36"
        alt=""
        aria-hidden="true"
      />
      <span className="brand-wordmark">
        vorbini<span className="brand-dot">.</span>
      </span>
    </span>
  );
}
