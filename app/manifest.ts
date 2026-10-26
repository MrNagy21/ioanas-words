import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Vorbini · Cuvinte prin joacă",
    short_name: "Vorbini",
    description:
      "Exersare ghidată în limba română, cu profiluri și participare salvate local.",
    lang: "ro",
    start_url: "/ro/practice",
    scope: "/",
    display: "standalone",
    background_color: "#fcf8ef",
    theme_color: "#fcf8ef",
    icons: [
      {
        src: "/icons/vorbini-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/vorbini-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
