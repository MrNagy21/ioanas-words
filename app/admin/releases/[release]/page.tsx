import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AdminReleasesContent,
  getReleaseNumbers,
  isReleaseNumber,
} from "../release-content";

export const metadata: Metadata = {
  title: "Admin Release | Word Wheel",
  description: "Read-only release-specific Romanian word review view.",
};

export const dynamicParams = false;

type AdminReleasePageProps = Readonly<{
  params: Promise<{
    release: string;
  }>;
}>;

export function generateStaticParams() {
  return getReleaseNumbers().map((release) => ({
    release,
  }));
}

export default async function AdminReleasePage({
  params,
}: AdminReleasePageProps) {
  const { release } = await params;

  if (!isReleaseNumber(release)) {
    notFound();
  }

  return <AdminReleasesContent selectedReleaseNumber={release} />;
}
