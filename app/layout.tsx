import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./brand.css";

export const viewport: Viewport = {
  themeColor: "#fcf8ef",
  colorScheme: "light",
};

export const metadata: Metadata = {
  applicationName: "Vorbini",
  manifest: "/manifest.webmanifest?v=vorbini-teal-20261027",
  authors: [{ name: "Ioana Nagy", url: "https://www.ioananagy.eu/" }],
  creator: "Ioana Nagy",
  appleWebApp: {
    capable: true,
    title: "Vorbini",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/brand/vorbini-mark.svg?v=teal-20261027",
    apple: "/icons/vorbini-apple.png?v=teal-20261027",
  },
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
