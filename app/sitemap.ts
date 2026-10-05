import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Maakt automatisch /sitemap.xml aan.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}