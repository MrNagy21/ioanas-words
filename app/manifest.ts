import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Roata cuvintelor",
    short_name: "Roata",
    description:
      "Exersare ghidată în limba română, cu profiluri și participare salvate local.",
    lang: "ro",
    start_url: "/ro/practice",
    scope: "/",
    display: "standalone",
    background_color: "#f5f7fb",
    theme_color: "#075e61",
    icons: [
      {
        src: "/icons/wheel-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/wheel-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
