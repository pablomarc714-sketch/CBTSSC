import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";
import { EVENTS } from "@/seed/events";
import { ARTICLES } from "@/seed/articles";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/about/mission",
  "/about/board",
  "/about/history",
  "/membership",
  "/membership/benefits",
  "/membership/apply",
  "/events",
  "/resources",
  "/resources/for-clinicians",
  "/resources/for-the-public",
  "/resources/find-a-therapist",
  "/education",
  "/education/workshops",
  "/research",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...STATIC_ROUTES.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...EVENTS.map((e) => ({
      url: `${SITE.url}/events/${e.slug}`,
      lastModified: new Date(e.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...ARTICLES.map((a) => ({
      url: `${SITE.url}/blog/${a.slug}`,
      lastModified: new Date(a.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
