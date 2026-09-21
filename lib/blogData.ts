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
    slug: "how-to-install-trex-iptv-on-firetv",
    href: "/how-to-install-trex-iptv-on-firetv/",
    title: "How to Install Trex IPTV on Fire TV in 3 Minutes: Easy Guide",
    description:
      "Step-by-step tutorial to install Trex IPTV on Amazon Fire TV, Firestick 4K & Cube in under 5 minutes. Includes Downloader code, recommended players, and best streaming settings.",
    image: "/trex_iptv_fire_tv_thumbnail_v1.jpg",
    category: "Installation Guide",
    readTime: "3 min read",
    date: "March 2026",
    author: "Trex IPTV Support Team",
    featured: true,
  },
];
