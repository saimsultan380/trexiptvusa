import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Catch-Up Not Working? 8 Ways to Fix Catch-Up Issue",
  description:
    "Trex IPTV catch-up not working? Learn how to fix missing replays, black screens, buffering, wrong programmes, and other common catch-up problems.",
  path: "/trex-iptv-catch-up-not-working/",
});

export default function TrexIptvCatchUpNotWorkingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Trex IPTV Catch-Up Not Working? 8 Ways to Fix Catch-Up Issue",
    description:
      "Trex IPTV catch-up not working? Learn how to fix missing replays, black screens, buffering, wrong programmes, and other common catch-up problems.",
    image: `${SITE_URL}/trex_iptv_catch_up_not_working_wide.png`,
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
      "@id": `${SITE_URL}/trex-iptv-catch-up-not-working/`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is Trex IPTV catch-up not working?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Catch-up may fail because the selected channel does not support replay, the programme is outside the available archive period, or your playlist, EPG, or player settings need attention.",
        },
      },
      {
        "@type": "Question",
        name: "Why does IPTV catch-up show a black screen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A black screen can indicate that the archived stream is unavailable, the replay request has failed, or the player cannot process the stream correctly.",
        },
      },
      {
        "@type": "Question",
        name: "Why does catch-up work on some IPTV channels but not others?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Catch-up availability is often channel-specific. Your IPTV provider may maintain replay archives for selected channels only.",
        },
      },
      {
        "@type": "Question",
        name: "Why does catch-up play the wrong programme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This can happen when the EPG schedule does not match the actual broadcast times. Refresh the guide and check the time settings in your IPTV player.",
        },
      },
      {
        "@type": "Question",
        name: "Does TiviMate support IPTV catch-up?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TiviMate supports catch-up playback when the IPTV service and playlist provide the required archive information.",
        },
      },
      {
        "@type": "Question",
        name: "Can I watch every missed live programme with catch-up?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You can only replay programmes that your IPTV service has archived and made available.",
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
            name: "Trex IPTV Catch-Up Not Working",
            path: "/trex-iptv-catch-up-not-working/",
          },
        ]}
      />
      <BlogPostClient />
    </>
  );
}
