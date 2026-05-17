import { notFound } from "next/navigation";
import { WordWheelShell } from "@/components/word-wheel-shell";
import {
  getDerivedWordPoolsForTarget,
  getGameplayRouteTargets,
  getGameplayTargetFromRouteSegment,
  getPracticeTargetContentSummary,
  getStarterContentSummary,
} from "@/content/loaders";
import type { GameplayContent } from "@/content/types";
import { isSupportedLocale } from "@/i18n/locales";

type GamePageProps = Readonly<{
  params: Promise<{
    locale: string;
    letter: string;
  }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return getGameplayRouteTargets("ro").map((target) => ({
    locale: target.locale,
    letter: target.target,
  }));
}

export default async function GamePage({ params }: GamePageProps) {
  const { locale, letter } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const selectedTarget = getGameplayTargetFromRouteSegment(locale, letter);

  if (!selectedTarget) {
    notFound();
  }

  const selectedContent: GameplayContent = {
    target: selectedTarget,
    wordPools: getDerivedWordPoolsForTarget(locale, selectedTarget),
  };

  return (
    <WordWheelShell
      letters={getStarterContentSummary(locale)}
      locale={locale}
      practiceTargets={getPracticeTargetContentSummary(locale)}
      selectedContent={selectedContent}
    />
  );
}
