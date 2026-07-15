import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const ALLOW_ALL: MetadataRoute.Robots["rules"] = [
  // Universal allow — covers every browser, bot, and crawler not listed below.
  {
    userAgent: "*",
    allow: "/",
  },
  // Major search engines
  {
    userAgent: "Googlebot",
    allow: "/",
  },
  {
    userAgent: "Googlebot-Image",
    allow: "/",
  },
  {
    userAgent: "Googlebot-News",
    allow: "/",
  },
  {
    userAgent: "Google-Extended",
    allow: "/",
  },
  {
    userAgent: "Bingbot",
    allow: "/",
  },
  {
    userAgent: "Slurp",
    allow: "/",
  },
  {
    userAgent: "DuckDuckBot",
    allow: "/",
  },
  {
    userAgent: "Applebot",
    allow: "/",
  },
  {
    userAgent: "Applebot-Extended",
    allow: "/",
  },
  {
    userAgent: "Yandex",
    allow: "/",
  },
  {
    userAgent: "Baiduspider",
    allow: "/",
  },
  // AI / LLM crawlers
  {
    userAgent: "GPTBot",
    allow: "/",
  },
  {
    userAgent: "ChatGPT-User",
    allow: "/",
  },
  {
    userAgent: "OAI-SearchBot",
    allow: "/",
  },
  {
    userAgent: "anthropic-ai",
    allow: "/",
  },
  {
    userAgent: "ClaudeBot",
    allow: "/",
  },
  {
    userAgent: "Claude-Web",
    allow: "/",
  },
  {
    userAgent: "PerplexityBot",
    allow: "/",
  },
  {
    userAgent: "Perplexity-User",
    allow: "/",
  },
  {
    userAgent: "cohere-ai",
    allow: "/",
  },
  {
    userAgent: "Meta-ExternalAgent",
    allow: "/",
  },
  {
    userAgent: "FacebookBot",
    allow: "/",
  },
  {
    userAgent: "Bytespider",
    allow: "/",
  },
  {
    userAgent: "Amazonbot",
    allow: "/",
  },
  {
    userAgent: "YouBot",
    allow: "/",
  },
  {
    userAgent: "CCBot",
    allow: "/",
  },
  {
    userAgent: "Diffbot",
    allow: "/",
  },
  {
    userAgent: "ImagesiftBot",
    allow: "/",
  },
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ALLOW_ALL,
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
