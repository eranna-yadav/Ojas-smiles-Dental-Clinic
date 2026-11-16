import type { MetadataRoute } from "next";
import { clinic } from "@/config/clinic";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: clinic.name,
    short_name: clinic.shortName,
    description: clinic.tagline.en,
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f766e",
    lang: "en-IN",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
