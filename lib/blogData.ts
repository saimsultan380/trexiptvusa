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
    featured: true,
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
