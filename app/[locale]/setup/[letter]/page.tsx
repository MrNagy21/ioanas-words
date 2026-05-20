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

type SetupPageProps = Readonly<{
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

export default async function SetupPage({ params }: SetupPageProps) {
  const { locale, letter } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const setupTarget = getGameplayTargetFromRouteSegment(locale, letter);

  if (!setupTarget) {
    notFound();
  }

  const setupContent: GameplayContent = {
    target: setupTarget,
    wordPools: getDerivedWordPoolsForTarget(locale, setupTarget),
  };

  return (
    <WordWheelShell
      letters={getStarterContentSummary(locale)}
      locale={locale}
      practiceTargets={getPracticeTargetContentSummary(locale)}
      setupContent={setupContent}
    />
  );
}
