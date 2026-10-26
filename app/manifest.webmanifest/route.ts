import type { MetadataRoute } from "next";
function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Vorbini",
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

// A regular static route lets layout metadata version the manifest URL.
// The file-convention manifest would override that explicit URL.
export const dynamic = "force-static";

export function GET() {
  return Response.json(manifest(), {
    headers: { "Content-Type": "application/manifest+json" },
  });
}
