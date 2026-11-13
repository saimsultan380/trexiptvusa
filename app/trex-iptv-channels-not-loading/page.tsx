import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Channels Not Loading? 12 Ways to Fix It Easily",
  description:
    "Trex IPTV channels not loading on Firestick, TiviMate, or Smart TV? Discover 12 practical fixes for loading errors, black screens and playback issues.",
  path: "/trex-iptv-channels-not-loading/",
});

export default function TrexIptvChannelsNotLoadingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Trex IPTV Channels Not Loading? 12 Ways to Fix It Easily",
    description:
      "Trex IPTV channels not loading on Firestick, TiviMate, or Smart TV? Discover 12 practical fixes for loading errors, black screens and playback issues.",
    image: `${SITE_URL}/trex_iptv_channels_not_loading_wide.png`,
    datePublished: "2026-11-13T12:00:00+00:00",
    dateModified: "2026-11-13T12:00:00+00:00",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/google-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/trex-iptv-channels-not-loading/`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why are Trex IPTV channels showing but not playing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your playlist may have loaded successfully while individual streams remain unavailable. Check your internet, account status, IPTV player, and channel sources.",
        },
      },
      {
        "@type": "Question",
        name: "Why is Trex IPTV stuck on loading?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A slow network, application cache problem, outdated player, incorrect credentials, or temporary stream issue can cause endless loading. Restart your device and test multiple channels.",
        },
      },
      {
        "@type": "Question",
        name: "Why does Trex IPTV work on my phone but not Firestick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The issue may involve Firestick storage, app cache, network connectivity, or player compatibility. Test both devices using the same network to narrow down the cause.",
        },
      },
      {
        "@type": "Question",
        name: "Why are some Trex IPTV channels working while others are not?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Individual channel sources can experience separate interruptions. If other channels play normally, the issue may be limited to the affected streams rather than your entire subscription.",
        },
      },
      {
        "@type": "Question",
        name: "Does a VPN fix Trex IPTV channels not loading?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. A VPN may improve a problematic network route in some situations, but it can also introduce additional connection delays. Compare both connections where appropriate.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if no Trex IPTV channels work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Restart your device and router, verify your login details, refresh the playlist, and test another compatible player. If the problem continues across devices, contact Trex IPTV support.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          {
            name: "Trex IPTV Channels Not Loading",
            path: "/trex-iptv-channels-not-loading/",
          },
        ]}
      />
      <BlogPostClient />
    </>
  );
}
