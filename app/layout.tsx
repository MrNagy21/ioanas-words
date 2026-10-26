import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./brand.css";

export const viewport: Viewport = {
  themeColor: "#fcf8ef",
  colorScheme: "light",
};

export const metadata: Metadata = {
  authors: [{ name: "Ioana Nagy", url: "https://www.ioananagy.eu/" }],
  creator: "Ioana Nagy",
  appleWebApp: {
    capable: true,
    title: "Vorbini",
    statusBarStyle: "default",
  },
  icons: { icon: "/brand/vorbini-mark.svg", apple: "/icons/vorbini-apple.png" },
  title: "Vorbini · Cuvinte prin joacă",
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
