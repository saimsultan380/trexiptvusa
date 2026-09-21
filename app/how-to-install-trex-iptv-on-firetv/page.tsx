import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "How to Install Trex IPTV on Fire TV in 3 Minutes: Easy Guide (2026)",
  description:
    "Complete step-by-step guide to install Trex IPTV on Amazon Fire TV, Firestick 4K & Cube in under 5 minutes. Downloader code 686147, recommended players, and optimal settings.",
  path: "/how-to-install-trex-iptv-on-firetv/",
});

export default function HowToInstallTrexIptvOnFireTVPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "How to Install Trex IPTV on Fire TV in 3 Minutes: Easy Guide",
    description:
      "Step-by-step tutorial to install Trex IPTV on Amazon Fire TV and Firestick devices using Downloader and Xtream Codes API.",
    image: `${SITE_URL}/trex_iptv_fire_tv_thumbnail_v1.jpg`,
    datePublished: "2026-03-01T08:00:00+00:00",
    dateModified: "2026-03-21T10:00:00+00:00",
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
      "@id": `${SITE_URL}/how-to-install-trex-iptv-on-firetv/`,
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Install Trex IPTV on Amazon Fire TV",
    description:
      "Install and set up Trex IPTV on any Amazon Fire TV Stick or Fire TV Cube in under 5 minutes.",
    totalTime: "PT5M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    step: [
      {
        "@type": "HowToStep",
        name: "Enable Apps From Unknown Sources",
        text: "Go to Fire TV Settings > My Fire TV > Developer Options and turn on Apps from Unknown Sources.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Download the Downloader App",
        text: "Search for Downloader on your Fire TV remote, install and open it.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Enable Downloader Permissions",
        text: "In Developer Options, allow Downloader to install unknown apps.",
        position: 3,
      },
      {
        "@type": "HowToStep",
        name: "Enter Downloader Code 686147",
        text: "Open Downloader and enter Trex IPTV downloader code 686147 to download the APK.",
        position: 4,
      },
      {
        "@type": "HowToStep",
        name: "Install the IPTV Player",
        text: "Tap Install on the prompt that appears once the APK finishes downloading.",
        position: 5,
      },
      {
        "@type": "HowToStep",
        name: "Open the IPTV Player App",
        text: "Launch the newly installed IPTV player from Your Apps & Channels.",
        position: 6,
      },
      {
        "@type": "HowToStep",
        name: "Select Xtream Codes API",
        text: "Select Xtream Codes API as the login method for maximum stability and VOD support.",
        position: 7,
      },
      {
        "@type": "HowToStep",
        name: "Enter Trex IPTV Login Credentials",
        text: "Enter your Username, Password, and Server URL exactly as received via WhatsApp or email.",
        position: 8,
      },
      {
        "@type": "HowToStep",
        name: "Wait for Channel List to Load",
        text: "Allow live channels, EPG guide, and VOD categories to sync.",
        position: 9,
      },
      {
        "@type": "HowToStep",
        name: "Start Streaming on Fire TV",
        text: "Enjoy unlimited live channels and VOD library in 4K UHD.",
        position: 10,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          {
            name: "How to Install Trex IPTV on Fire TV",
            path: "/how-to-install-trex-iptv-on-firetv/",
          },
        ]}
      />
      <BlogPostClient />
    </>
  );
}
