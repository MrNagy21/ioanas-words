import type { Metadata } from "next";
import { AdminReleasesContent } from "./release-content";

export const metadata: Metadata = {
  title: "Admin Releases | Word Wheel",
  description: "Read-only release review view for recently added word batches.",
};

export default function AdminReleasesPage() {
  return <AdminReleasesContent selectedReleaseNumber="2" />;
}
