import { notFound } from "next/navigation";
import { getApprovedWords, getEnabledLetters } from "@/content/loaders";
import { PracticeDemo } from "@/components/practice/practice-demo";
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "ro" }];
}
export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  if ((await params).locale !== "ro") notFound();
  const target = getEnabledLetters("ro").find((t) => t.id === "s")!;
  const words = getApprovedWords("ro")
    .filter((w) => w.word.startsWith("s"))
    .slice(0, 4);
  return <PracticeDemo words={words} target={target} />;
}
