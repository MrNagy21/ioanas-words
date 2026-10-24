import { notFound } from "next/navigation";
import { ProfileWorkspace } from "@/components/practice/profile-workspace";
import {
  getApprovedWords,
  getEnabledLetters,
  getEnabledPracticeTargets,
} from "@/content/loaders";
import { AVATAR_WORD_IDS } from "@/practice/model";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "ro" }];
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  if ((await params).locale !== "ro") notFound();
  const words = getApprovedWords("ro");
  const avatars = AVATAR_WORD_IDS.map((id) => {
    const word = words.find((w) => w.id === id);
    if (!word) throw new Error(`Missing approved avatar: ${id}`);
    return { id, image: word.image, label: word.display, alt: word.alt };
  });
  return (
    <ProfileWorkspace
      avatars={avatars}
      words={words}
      targets={[...getEnabledLetters("ro"), ...getEnabledPracticeTargets("ro")]}
    />
  );
}
