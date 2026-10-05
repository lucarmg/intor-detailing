import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Maakt automatisch /robots.txt aan: zoekmachines mogen alles lezen.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}