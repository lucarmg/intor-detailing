import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Maakt automatisch /sitemap.xml aan.
// Zet de datum bij een pagina pas als de inhoud echt verandert. Een datum die
// bij elke build verschuift, gaat Google negeren.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: "2026-10-24",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/privacy`,
      lastModified: "2026-10-19",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
