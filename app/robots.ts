import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "PerplexityBot"],
        allow: "/",
      },
    ],
    sitemap: "https://umesh-portfolio-2026-enji.vercel.app/sitemap.xml",
    host: "https://umesh-portfolio-2026-enji.vercel.app",
  };
}
