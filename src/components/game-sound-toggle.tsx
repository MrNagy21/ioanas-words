import type { useGameSound } from "@/components/use-game-sound";

export function GameSoundToggle({
  sound,
}: {
  sound: Pick<
    ReturnType<typeof useGameSound>,
    "enabled" | "toggle" | "disabled"
  >;
}) {
  return (
    <button
      className="quiet-button game-sound-toggle"
      type="button"
      aria-label={`${sound.enabled ? "Sunet pornit" : "Sunet oprit"} · Roată, cuvinte și sărbătoriri`}
      aria-pressed={sound.enabled}
      disabled={sound.disabled}
      onClick={sound.toggle}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11 5 6 9H3v6h3l5 4V5Z" />
        {sound.enabled ? (
          <path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
        ) : (
          <path d="m16 9 5 6m0-6-5 6" />
        )}
      </svg>
      <span>{sound.enabled ? "Sunet pornit" : "Sunet oprit"}</span>
    </button>
  );
}
