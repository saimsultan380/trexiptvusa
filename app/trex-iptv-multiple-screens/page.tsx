import { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Multiple Screens or Devices: How Many Can You Use?",
  description:
    "Can Trex IPTV run on multiple screens? Learn how simultaneous connections work, what happens on two TVs, and how to avoid connection-limit problems.",
  path: "/trex-iptv-multiple-screens/",
});

export default function TrexIptvMultipleScreensPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Trex IPTV Multiple Screens or Devices: How Many Can You Use?",
    description:
      "Can Trex IPTV run on multiple screens? Learn how simultaneous connections work, what happens on two TVs, and how to avoid connection-limit problems.",
    image: `${SITE_URL}/trex_iptv_multiple_screens_wide.png`,
    datePublished: "2026-09-25T08:00:00+00:00",
    dateModified: "2026-09-25T08:00:00+00:00",
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
      "@id": `${SITE_URL}/trex-iptv-multiple-screens/`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Trex IPTV support multiple screens?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trex IPTV may support multiple screens depending on the connection allowance attached to your subscription. Installing the account on several devices does not automatically mean that all devices can stream simultaneously.",
        },
      },
      {
        "@type": "Question",
        name: "Can I watch Trex IPTV on two TVs at the same time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can watch Trex IPTV on two TVs simultaneously only if your subscription supports at least two active connections. If your account has one connection, the second TV may fail to start, freeze, or interrupt the first stream.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use one Trex IPTV account on multiple devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may be able to enter the same Trex IPTV credentials on multiple compatible devices, but this is different from simultaneous streaming. The number of active streams depends on the account's connection allowance.",
        },
      },
      {
        "@type": "Question",
        name: "Does TiviMate allow multiple Trex IPTV connections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TiviMate can support features such as multiview on compatible devices, but it does not increase the number of simultaneous connections permitted by your Trex IPTV subscription.",
        },
      },
      {
        "@type": "Question",
        name: "Why does Trex IPTV stop when I open it on another TV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The second TV may be exceeding your subscription's simultaneous connection limit. Close Trex on other devices and check the number of connections included with your subscription.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need two Trex IPTV accounts for two TVs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. You need enough simultaneous connections, not automatically one account per TV. If your specific Trex subscription provides two simultaneous connections, two TVs may be able to stream at once.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Trex IPTV on a TV and phone at the same time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if your subscription allows at least two simultaneous connections. The TV and phone would each use an active stream.",
        },
      },
      {
        "@type": "Question",
        name: "How many Trex IPTV connections do I need for a family?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Calculate the highest number of streams your family will use at the same time. One TV being used at a time generally requires one active connection. Two family members watching different channels simultaneously requires two.",
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
            name: "Trex IPTV Multiple Screens",
            path: "/trex-iptv-multiple-screens/",
          },
        ]}
      />
      <BlogPostClient />
    </>
  );
}
