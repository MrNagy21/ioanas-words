import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  authors: [{ name: "Ioana Nagy", url: "https://www.ioananagy.eu/" }],
  creator: "Ioana Nagy",
  appleWebApp: {
    capable: true,
    title: "Roata cuvintelor",
    statusBarStyle: "default",
  },
  icons: { apple: "/icons/apple-touch-icon.png" },
  title: "Roata cuvintelor | Word Wheel",
  description:
    "Alege o literă sau un sunet, învârte roata și descoperă cuvinte în limba română. Un joc de vocabular pentru copii.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ro">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
