import { notFound } from "next/navigation";
import { WordWheelShell } from "@/components/word-wheel-shell";
import {
  getEnabledLetters,
  getLetterContent,
  getStarterContentSummary,
} from "@/content/loaders";
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

  const selectedContent = getLetterContent(locale, letter);

  if (!selectedContent) {
    notFound();
  }

  return (
    <WordWheelShell
      letters={getStarterContentSummary(locale)}
      locale={locale}
      selectedContent={selectedContent}
    />
  );
}
