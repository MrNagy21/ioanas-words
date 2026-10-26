import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocumentPage } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Confidențialitate · Proiect · Vorbini",
  robots: { index: false, follow: false },
};
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "ro" }];
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  if ((await params).locale !== "ro") notFound();
  return <LegalDocumentPage kind="privacy" />;
}
