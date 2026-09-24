import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV M3U vs Xtream Codes: Which Is Better?",
  description:
    "Compare Trex IPTV M3U vs Xtream Codes, including setup, EPG, VOD, and performance. Learn which option fits your IPTV player and device.",
  path: "/trex-iptv-m3u-vs-xtream-codes/",
});

export default function TrexIptvM3uVsXtreamCodesPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Trex IPTV M3U vs Xtream Codes: What's the Difference?",
    description:
      "Compare Trex IPTV M3U vs Xtream Codes, including setup, EPG, VOD, and performance. Learn which option fits your IPTV player and device.",
    image: `${SITE_URL}/trex_iptv_m3u_vs_xtream_wide_light.png`,
    datePublished: "2026-09-24T08:00:00+00:00",
    dateModified: "2026-09-24T08:00:00+00:00",
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
      "@id": `${SITE_URL}/trex-iptv-m3u-vs-xtream-codes/`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is M3U or Xtream Codes better for Trex IPTV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no universal winner because the better option depends on your IPTV player and how you use the service. Xtream Codes can be more convenient for structured Live TV, VOD and Series sections, while M3U offers a simple playlist-based setup and broad compatibility.",
        },
      },
      {
        "@type": "Question",
        name: "Does Xtream Codes reduce IPTV buffering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, Xtream Codes does not automatically reduce buffering. It changes how your player communicates with the IPTV service. Buffering can be caused by internet instability, Wi-Fi interference, device limitations, server load, or the stream itself.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use the same Trex IPTV account with M3U and Xtream Codes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the service provides both methods for the same account, they may connect to the same subscription. The exact behaviour depends on the provider's configuration and account limits. Check your subscription terms before using simultaneous connections.",
        },
      },
      {
        "@type": "Question",
        name: "Does M3U include EPG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An M3U playlist can contain information used to associate channels with EPG data, but EPG availability depends on the playlist and IPTV service. Some services provide a separate XMLTV EPG URL.",
        },
      },
      {
        "@type": "Question",
        name: "Why does Xtream Codes show Movies and Series separately?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Xtream Codes can provide structured information through its API, allowing compatible IPTV players to request and organise Live TV, Movies and Series separately.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert an M3U link into Xtream Codes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In many cases, the required server address, username and password can be identified from an M3U URL when the URL follows a common IPTV structure. If your provider gives you Xtream Codes directly, use those credentials instead.",
        },
      },
      {
        "@type": "Question",
        name: "Why does M3U work but Xtream Codes say invalid login?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The two methods can behave differently because of player compatibility, server configuration, incorrect credentials, or formatting problems. Recheck the server address, username, and password carefully.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use M3U or Xtream Codes on TiviMate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If TiviMate supports both options for your service, Xtream Codes can be convenient because you enter the server, username, and password. M3U is still useful when you want playlist-based control.",
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
            name: "Trex IPTV M3U vs Xtream Codes",
            path: "/trex-iptv-m3u-vs-xtream-codes/",
          },
        ]}
      />
      <BlogPostClient />
    </>
  );
}
