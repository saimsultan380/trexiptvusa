import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV EPG Not Working: Causes & How to Fix in Minutes?",
  description:
    "Trex IPTV EPG not working? Learn why your TV guide shows no information and follow practical fixes for TiviMate, Firestick, EPG sources, and timing.",
  path: "/trex-iptv-epg-not-working/",
});

export default function TrexIptvEpgNotWorkingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Trex IPTV EPG Not Working: Causes & How to Fix in Minutes?",
    description:
      "Trex IPTV EPG not working? Learn why your TV guide shows no information and follow practical fixes for TiviMate, Firestick, EPG sources, and timing.",
    image: `${SITE_URL}/trex_iptv_epg_not_working_wide_v2_1876x863.png`,
    datePublished: "2026-09-24T12:00:00+00:00",
    dateModified: "2026-09-24T12:00:00+00:00",
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
      "@id": `${SITE_URL}/trex-iptv-epg-not-working/`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is Trex IPTV EPG not working?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trex IPTV EPG may not work because the provider's guide data is temporarily unavailable, the EPG update failed, channels are not matched correctly, or your IPTV player has a configuration or cache problem.",
        },
      },
      {
        "@type": "Question",
        name: 'Why does Trex IPTV say "No Information" on every channel?',
        acceptedAnswer: {
          "@type": "Answer",
          text: "If every Trex channel says No Information while the video streams still work, the problem is likely related to EPG data rather than the channel streams. Refresh the EPG and check whether the update succeeds.",
        },
      },
      {
        "@type": "Question",
        name: "How do I refresh Trex IPTV EPG on TiviMate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Open TiviMate's EPG settings and manually start an EPG update. Wait for the update to finish before checking the guide. If the update succeeds but information remains missing, check your EPG source and channel assignments.",
        },
      },
      {
        "@type": "Question",
        name: "Why is my Trex EPG one hour behind?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A one-hour difference can be caused by incorrect device time, time-zone settings, daylight-saving changes, or EPG data using a different time reference. Check the Firestick's date, time, and time zone first.",
        },
      },
      {
        "@type": "Question",
        name: "Why does Trex IPTV EPG work on one device but not another?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the EPG works on one device but not another, the problem may be related to the IPTV player's cache, settings, software version, network route, or device configuration.",
        },
      },
      {
        "@type": "Question",
        name: "Can a VPN stop Trex IPTV EPG from updating?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, a VPN can sometimes affect access to an EPG source because it changes the network route. Try refreshing the EPG with the VPN disabled where appropriate and legal, then compare the results.",
        },
      },
      {
        "@type": "Question",
        name: "Why does Trex EPG work for some channels but not others?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Partial EPG coverage often points to channel matching or incomplete guide data. The EPG source may contain information for some channels but not others, or the channel IDs may not match.",
        },
      },
      {
        "@type": "Question",
        name: "Should I change from M3U to Xtream Codes to fix Trex EPG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. Switching from M3U to Xtream Codes may change how your IPTV player receives account and playlist information, but it does not guarantee the missing EPG data will return.",
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
            name: "Trex IPTV EPG Not Working",
            path: "/trex-iptv-epg-not-working/",
          },
        ]}
      />
      <BlogPostClient />
    </>
  );
}
