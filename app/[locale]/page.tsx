import { notFound } from "next/navigation";
import { WordWheelShell } from "@/components/word-wheel-shell";
import { getStarterContentSummary } from "@/content/loaders";
import { isSupportedLocale } from "@/i18n/locales";

type LocalePageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "ro" }];
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <WordWheelShell
      letters={getStarterContentSummary(locale)}
      locale={locale}
    />
  );
}
