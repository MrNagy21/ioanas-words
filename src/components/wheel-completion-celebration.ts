"use client";

import confetti from "canvas-confetti";

const SECOND_POP_DELAY_MS = 180;
const THIRD_POP_DELAY_MS = 390;
const FOURTH_POP_DELAY_MS = 600;
const FINAL_POP_DELAY_MS = 810;
const CELEBRATION_COLORS = [
  "#ffd166",
  "#ff8d7b",
  "#5dd4c4",
  "#8ca6ff",
  "#f7a8c4",
];

/** Fires a short, full-screen, non-interactive celebration after a wheel is completed. */
export function celebrateWheelCompletion() {
  if (typeof window === "undefined") {
    return () => {};
  }

  const isDesktop = window.innerWidth >= 768;
  const particleMultiplier = isDesktop ? 1.25 : 1;
  const commonOptions = {
    colors: CELEBRATION_COLORS,
    disableForReducedMotion: true,
    ticks: 105,
    zIndex: 9999,
  };

  confetti({
    ...commonOptions,
    origin: { x: 0.5, y: 0.68 },
    particleCount: Math.round(100 * particleMultiplier),
    scalar: 1.15,
    shapes: ["circle", "square", "star"],
    spread: 100,
    startVelocity: 48,
  });

  const burstTimers = [
    window.setTimeout(() => {
      confetti({
        ...commonOptions,
        angle: 58,
        origin: { x: 0.02, y: 0.7 },
        particleCount: Math.round(42 * particleMultiplier),
        scalar: 1,
        spread: 60,
        startVelocity: 42,
      });
      confetti({
        ...commonOptions,
        angle: 122,
        origin: { x: 0.98, y: 0.7 },
        particleCount: Math.round(42 * particleMultiplier),
        scalar: 1,
        spread: 60,
        startVelocity: 42,
      });
    }, SECOND_POP_DELAY_MS),
    window.setTimeout(() => {
      confetti({
        ...commonOptions,
        angle: 72,
        origin: { x: 0.2, y: 0.62 },
        particleCount: Math.round(50 * particleMultiplier),
        scalar: 1.05,
        shapes: ["circle", "square", "star"],
        spread: 75,
        startVelocity: 44,
      });
    }, THIRD_POP_DELAY_MS),
    window.setTimeout(() => {
      confetti({
        ...commonOptions,
        angle: 108,
        origin: { x: 0.8, y: 0.62 },
        particleCount: Math.round(50 * particleMultiplier),
        scalar: 1.05,
        shapes: ["circle", "square", "star"],
        spread: 75,
        startVelocity: 44,
      });
    }, FOURTH_POP_DELAY_MS),
    window.setTimeout(() => {
      confetti({
        ...commonOptions,
        origin: { x: 0.5, y: 0.42 },
        particleCount: Math.round(62 * particleMultiplier),
        scalar: 1.25,
        shapes: ["star", "star", "circle"],
        spread: 120,
        startVelocity: 32,
      });
    }, FINAL_POP_DELAY_MS),
  ];

  return () => {
    burstTimers.forEach((timer) => {
      window.clearTimeout(timer);
    });
  };
}
