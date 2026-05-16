import { notFound } from "next/navigation";
import { WordWheelShell } from "@/components/word-wheel-shell";
import {
  getDerivedWordPoolsForTarget,
  getEnabledLetters,
  getLetter,
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
  return getEnabledLetters("ro").map((letter) => ({
    locale: "ro",
    letter: letter.id,
  }));
}

export default async function GamePage({ params }: GamePageProps) {
  const { locale, letter } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const selectedLetter = getLetter(locale, letter);

  if (!selectedLetter?.enabled) {
    notFound();
  }

  const selectedContent: GameplayContent = {
    letter: selectedLetter,
    wordPools: getDerivedWordPoolsForTarget(locale, selectedLetter),
  };

  return (
    <WordWheelShell
      letters={getStarterContentSummary(locale)}
      locale={locale}
      selectedContent={selectedContent}
    />
  );
}
