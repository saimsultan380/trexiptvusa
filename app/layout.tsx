import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "@/components/WhatsAppButton";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_EMAIL,
  SITE_LOGO_ICON_PATH,
  SITE_LOGO_ICON_SIZE,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_OG_IMAGE_HEIGHT,
  SITE_OG_IMAGE_PATH,
  SITE_OG_IMAGE_WIDTH,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteLogoUrl = `${SITE_URL}${SITE_LOGO_PATH}`;
const siteLogoIconUrl = `${SITE_URL}${SITE_LOGO_ICON_PATH}`;
const ogImage = {
  url: `${SITE_URL}${SITE_OG_IMAGE_PATH}`,
  width: SITE_OG_IMAGE_WIDTH,
  height: SITE_OG_IMAGE_HEIGHT,
  alt: `${SITE_NAME} Logo`,
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: DEFAULT_TITLE,
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [ogImage],
  },
  icons: {
    // Favicons derived from /logo.PNG (black TREX mark + orange X on white).
    // Google requires a multiple of 48px and a crawlable /favicon.ico.
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/google-logo.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico", "/favicon.png"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#ff6b35",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-153NW9KYRH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-153NW9KYRH');
            `,
          }}
        />
        <meta name="google-site-verification" content="z5Tc0PCA9LSFCsjXvhadTW_OwZM_qeVTspR0mLUOuSs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": `${SITE_URL}/#organization`,
                name: SITE_NAME,
                alternateName: ["Trex IPTV US", "TrexIPTV", "Trex IPTV USA"],
                url: `${SITE_URL}/`,
                logo: {
                  "@type": "ImageObject",
                  "@id": `${SITE_URL}/#logo`,
                  url: siteLogoIconUrl,
                  contentUrl: siteLogoIconUrl,
                  width: SITE_LOGO_ICON_SIZE,
                  height: SITE_LOGO_ICON_SIZE,
                  caption: SITE_NAME,
                  inLanguage: "en-US",
                },
                image: [
                  siteLogoIconUrl,
                  siteLogoUrl,
                  `${SITE_URL}${SITE_OG_IMAGE_PATH}`,
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: `+${WHATSAPP_NUMBER}`,
                  email: SITE_EMAIL,
                  contactType: "customer support",
                  availableLanguage: ["English"],
                  areaServed: "Worldwide",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                name: SITE_NAME,
                alternateName: ["Trex IPTV US", "TrexIPTV", "Trex IPTV USA"],
                url: `${SITE_URL}/`,
                description: DEFAULT_DESCRIPTION,
                inLanguage: "en-US",
                publisher: {
                  "@id": `${SITE_URL}/#organization`,
                },
              },
            ]),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
