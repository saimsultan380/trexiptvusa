import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV VOD Not Working? Fix Movies & Series Playback Issues",
  description:
    "Trex IPTV VOD not working? Learn how to fix movies not loading, series playback errors, buffering, black screens, and other VOD problems.",
  path: "/trex-iptv-vod-not-working/",
});

export default function TrexIptvVodNotWorkingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Trex IPTV VOD Not Working? Fix Movies & Series Playback Issues",
    description:
      "Trex IPTV VOD not working? Learn how to fix movies not loading, series playback errors, buffering, black screens, and other VOD problems.",
    image: `${SITE_URL}/trex_iptv_vod_not_working_wide.png`,
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
      "@id": `${SITE_URL}/trex-iptv-vod-not-working/`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why are Trex IPTV movies not playing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Possible reasons include an unavailable stream, unstable internet, an outdated player, or account restrictions. Try another movie and check whether Live TV works.",
        },
      },
      {
        "@type": "Question",
        name: "Why are Trex IPTV series not showing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your playlist may not have synchronized correctly, or your account may not include the relevant VOD categories. Refresh the playlist and verify your subscription.",
        },
      },
      {
        "@type": "Question",
        name: "Why does Trex IPTV VOD keep buffering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unstable Wi-Fi, network congestion, device limitations, or stream interruptions can cause buffering. Test your connection and compare playback on another device.",
        },
      },
      {
        "@type": "Question",
        name: "Does TiviMate support Trex IPTV VOD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TiviMate supports compatible IPTV playlists and can organize VOD content when the playlist supplies the necessary information and supported streams.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if Live TV works but VOD does not?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Refresh your playlist, check your account's VOD access, and test different movies and series. If the problem continues, contact your provider.",
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
            name: "Trex IPTV VOD Not Working",
            path: "/trex-iptv-vod-not-working/",
          },
        ]}
      />
      <BlogPostClient />
    </>
  );
}
