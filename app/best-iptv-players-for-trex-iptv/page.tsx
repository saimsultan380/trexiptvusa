import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Best IPTV Players for Trex IPTV: Top 14 IPTV Apps Compared",
  description:
    "Discover the best IPTV players for Trex IPTV, including TiviMate, IPTV Smarters Pro, IBO Player & more. Compare IPTV app features, devices & setup options.",
  path: "/best-iptv-players-for-trex-iptv/",
});

export default function BestIptvPlayersForTrexIptvPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Best IPTV Players for Trex IPTV: Top 14 IPTV Apps Compared",
    description:
      "Discover the best IPTV players for Trex IPTV, including TiviMate, IPTV Smarters Pro, IBO Player & more. Compare IPTV app features, devices & setup options.",
    image: `${SITE_URL}/trex_iptv_best_players_wide.png`,
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
      "@id": `${SITE_URL}/best-iptv-players-for-trex-iptv/`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best IPTV player for Trex IPTV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TiviMate is a strong choice for Firestick and Android TV users. IPTV Smarters Pro is a convenient general-purpose alternative, while IBO Player and SmartOne IPTV are worth considering for compatible Smart TVs.",
        },
      },
      {
        "@type": "Question",
        name: "Does Trex IPTV have its own player?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trex IPTV is a streaming service that works with compatible third-party IPTV players. You can choose an application based on your device and the login format provided with your subscription.",
        },
      },
      {
        "@type": "Question",
        name: "Is TiviMate better than IPTV Smarters Pro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TiviMate is particularly attractive for Android TV and Firestick users who prefer an advanced TV guide and customization. IPTV Smarters Pro is useful for users who want a more general-purpose application across supported devices.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Trex IPTV on two different players?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can generally configure the same subscription in different compatible applications, but simultaneous streaming depends on your subscription's connection allowance.",
        },
      },
      {
        "@type": "Question",
        name: "Do IPTV players provide channels automatically?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. IPTV players are applications for organizing and playing compatible content sources. You need a playlist or login from a provider whose content you are authorized to access.",
        },
      },
      {
        "@type": "Question",
        name: "Why is my IPTV player buffering even with fast internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A high internet speed does not eliminate every streaming problem. Wi-Fi interference, packet loss, device performance, decoder compatibility, or a temporary stream issue can also affect playback.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use VLC with Trex IPTV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VLC can play compatible M3U playlists and network streams. However, it does not provide all the dedicated IPTV features available in applications such as TiviMate.",
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
            name: "Best IPTV Players for Trex IPTV",
            path: "/best-iptv-players-for-trex-iptv/",
          },
        ]}
      />
      <BlogPostClient />
    </>
  );
}
