import type { SupportedLocale } from "@/i18n/locales";

const creatorUrl = "https://www.ioananagy.eu/";

const localizedLabels = {
  ro: "Creat de",
} satisfies Record<SupportedLocale, string>;

type CreatorCreditProps = Readonly<{
  className?: string;
  label?: string;
  locale?: SupportedLocale;
}>;

export function CreatorCredit({
  className,
  label,
  locale,
}: CreatorCreditProps) {
  const creditLabel = label ?? (locale ? localizedLabels[locale] : "Created by");
  const classNames = ["creator-credit", className].filter(Boolean).join(" ");

  return (
    <p className={classNames}>
      {creditLabel}{" "}
      <a
        href={creatorUrl}
        rel="author noopener noreferrer"
        target="_blank"
      >
        Ioana Nagy
      </a>
    </p>
  );
}
