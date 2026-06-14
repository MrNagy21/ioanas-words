import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  authors: [{ name: "Ioana Nagy", url: "https://www.ioananagy.eu/" }],
  creator: "Ioana Nagy",
  title: "Word Wheel",
  description: "A static-first Romanian vocabulary wheel for young children.",
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
