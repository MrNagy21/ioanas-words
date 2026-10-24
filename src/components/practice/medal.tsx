export function Medal({
  variant = "star",
  size = 72,
  progress = false,
}: {
  variant?: "star" | "flower" | "sun";
  size?: number;
  progress?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 140"
      width={size}
      height={(size * 7) / 6}
    >
      <path
        d="M30 75 20 135l40-20 40 20-10-60"
        fill={progress ? "#087f86" : "#cf3f30"}
      />
      <circle
        cx="60"
        cy="55"
        r="49"
        fill={progress ? "#d5f3eb" : "#ffd166"}
        stroke={progress ? "#07616a" : "#9a6200"}
        strokeWidth="4"
      />
      {variant === "star" ? (
        <path
          d="m60 22 10 21 23 3-17 17 4 24-20-11-21 11 4-24-17-17 24-3z"
          fill="#fff7e0"
          stroke={progress ? "#07616a" : "#9a6200"}
          strokeWidth="2"
        />
      ) : variant === "sun" ? (
        <>
          <circle
            cx="60"
            cy="55"
            r="22"
            fill="#fff7e0"
            stroke={progress ? "#07616a" : "#9a6200"}
            strokeWidth="2"
          />
          {Array.from({ length: 8 }, (_, i) => (
            <path
              key={i}
              d="M60 18v9"
              stroke={progress ? "#07616a" : "#9a6200"}
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${i * 45} 60 55)`}
            />
          ))}
        </>
      ) : (
        <>
          {Array.from({ length: 6 }, (_, i) => (
            <ellipse
              key={i}
              cx="60"
              cy="37"
              rx="11"
              ry="18"
              fill="#fff7e0"
              stroke={progress ? "#07616a" : "#9a6200"}
              strokeWidth="2"
              transform={`rotate(${i * 60} 60 55)`}
            />
          ))}
          <circle
            cx="60"
            cy="55"
            r="10"
            fill={progress ? "#087f86" : "#cf3f30"}
          />
        </>
      )}
    </svg>
  );
}
