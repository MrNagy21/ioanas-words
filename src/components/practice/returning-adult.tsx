"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { readPracticeState } from "@/storage/practice-store";

export function ReturningAdult() {
  const router = useRouter();
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("show")) return;
    let live = true;
    void readPracticeState()
      .then((state) => {
        if (live && state.profiles.length) router.replace("/ro/practice");
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, [router]);
  return null;
}
