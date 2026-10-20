import type { MetadataRoute } from "next";
import { academy } from "@/config/academy";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = academy.domain;
  const now = new Date("2025-01-01"); // stable date — update when content changes

  const routes = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/about", priority: 0.9, freq: "monthly" as const },
    { path: "/quran-studies", priority: 0.9, freq: "monthly" as const },
    { path: "/huruf-arabic", priority: 0.8, freq: "monthly" as const },
    { path: "/islamic-studies", priority: 0.8, freq: "monthly" as const },
    { path: "/academic-subjects", priority: 0.7, freq: "monthly" as const },
    { path: "/teachers", priority: 0.7, freq: "monthly" as const },
    { path: "/admissions", priority: 0.9, freq: "weekly" as const },
    { path: "/online-learning", priority: 0.7, freq: "monthly" as const },
    { path: "/calendar", priority: 0.6, freq: "weekly" as const },
    { path: "/news", priority: 0.6, freq: "weekly" as const },
    { path: "/contact", priority: 0.8, freq: "monthly" as const },
    { path: "/portal", priority: 0.5, freq: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
