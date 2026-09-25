export interface BlogPost {
  slug: string;
  href: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "trex-iptv-keeps-buffering",
    href: "/trex-iptv-keeps-buffering/",
    title: "Trex IPTV Keeps Buffering? 15 Ways to Fix Trex IPTV Buffering",
    description:
      "Trex IPTV keeps buffering? Learn 15 practical fixes for Wi-Fi, Firestick, TiviMate, VPN, server issues, evening buffering, and slow streams.",
    image: "/trex_iptv_15_buffering_fixes_square.png",
    category: "Troubleshooting Guide",
    readTime: "12 min read",
    date: "September 2026",
    author: "Trex IPTV Support Team",
    featured: true,
  },
  {
    slug: "trex-iptv-multiple-screens",
    href: "/trex-iptv-multiple-screens/",
    title: "Trex IPTV Multiple Screens or Devices: How Many Can You Use?",
    description:
      "Can Trex IPTV run on multiple screens? Learn how simultaneous connections work, what happens on two TVs, and how to avoid connection-limit problems.",
    image: "/trex_iptv_multiple_screens_square.png",
    category: "Setup Guide",
    readTime: "11 min read",
    date: "September 2026",
    author: "Trex IPTV Support Team",
  },
  {
    slug: "trex-iptv-epg-not-working",
    href: "/trex-iptv-epg-not-working/",
    title: "Trex IPTV EPG Not Working: Causes & How to Fix in Minutes?",
    description:
      "Trex IPTV EPG not working? Learn why your TV guide shows no information and follow practical fixes for TiviMate, Firestick, EPG sources, and timing.",
    image: "/trex_iptv_epg_not_working_square.png",
    category: "Troubleshooting Guide",
    readTime: "13 min read",
    date: "September 2026",
    author: "Trex IPTV Support Team",
  },
  {
    slug: "trex-iptv-buffering-firestick",
    href: "/trex-iptv-buffering-firestick/",
    title: "Trex IPTV Buffering on Firestick: Fix Slow Streaming",
    description:
      "Trex IPTV buffering on Firestick? Find the real causes and follow simple fixes for Wi-Fi, cache, apps, VPNs, servers, and Trex IPTV slow streaming.",
    image: "/trex_iptv_firestick_buffering_square.png",
    category: "Troubleshooting Guide",
    readTime: "14 min read",
    date: "September 2026",
    author: "Trex IPTV Support Team",
  },
  {
    slug: "trex-iptv-m3u-vs-xtream-codes",
    href: "/trex-iptv-m3u-vs-xtream-codes/",
    title: "Trex IPTV M3U vs Xtream Codes: Which Is Better?",
    description:
      "Compare Trex IPTV M3U vs Xtream Codes, including setup, EPG, VOD, and performance. Learn which option fits your IPTV player and device.",
    image: "/trex_iptv_m3u_vs_xtream_square_light.png",
    category: "Comparison Guide",
    readTime: "12 min read",
    date: "September 2026",
    author: "Trex IPTV Support Team",
  },
  {
    slug: "how-to-install-trex-iptv-on-firetv",
    href: "/how-to-install-trex-iptv-on-firetv/",
    title: "How to Install Trex IPTV on Fire TV in 3 Minutes: Easy Guide",
    description:
      "Step-by-step tutorial to install Trex IPTV on Amazon Fire TV, Firestick 4K & Cube in under 5 minutes. Includes Downloader code, recommended players, and best streaming settings.",
    image: "/trex_iptv_fire_tv_square_light.png",
    category: "Installation Guide",
    readTime: "3 min read",
    date: "March 2026",
    author: "Trex IPTV Support Team",
  },
];

/** Preferred related-post order per slug for topical relevance. */
const RELATED_SLUGS: Record<string, string[]> = {
  "trex-iptv-keeps-buffering": [
    "trex-iptv-buffering-firestick",
    "trex-iptv-multiple-screens",
    "how-to-install-trex-iptv-on-firetv",
  ],
  "trex-iptv-multiple-screens": [
    "trex-iptv-keeps-buffering",
    "how-to-install-trex-iptv-on-firetv",
    "trex-iptv-buffering-firestick",
  ],
  "trex-iptv-epg-not-working": [
    "trex-iptv-m3u-vs-xtream-codes",
    "trex-iptv-keeps-buffering",
    "how-to-install-trex-iptv-on-firetv",
  ],
  "trex-iptv-buffering-firestick": [
    "trex-iptv-keeps-buffering",
    "trex-iptv-multiple-screens",
    "how-to-install-trex-iptv-on-firetv",
  ],
  "trex-iptv-m3u-vs-xtream-codes": [
    "how-to-install-trex-iptv-on-firetv",
    "trex-iptv-keeps-buffering",
    "trex-iptv-epg-not-working",
  ],
  "how-to-install-trex-iptv-on-firetv": [
    "trex-iptv-keeps-buffering",
    "trex-iptv-multiple-screens",
    "trex-iptv-m3u-vs-xtream-codes",
  ],
};

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const preferred = RELATED_SLUGS[slug] ?? [];
  const ordered = preferred
    .map((s) => getBlogPostBySlug(s))
    .filter((post): post is BlogPost => Boolean(post));

  if (ordered.length >= limit) return ordered.slice(0, limit);

  const extras = BLOG_POSTS.filter(
    (post) => post.slug !== slug && !ordered.some((p) => p.slug === post.slug)
  );

  return [...ordered, ...extras].slice(0, limit);
}
