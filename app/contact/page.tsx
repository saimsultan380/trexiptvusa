import { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us for Trex IPTV Free Trial, Setup Guidance & Support",
  description:
    "Have a question about your Trex IPTV subscription, or want to try Trex IPTV before buying a plan? Chat with us on WhatsApp for a free 24 hour trial, setup guidance, and 24/7 support.",
  alternates: {
    canonical: `${SITE_URL}/contact/`,
  },
};

export default function ContactUs() {
  return <ContactUsClient />;
}
