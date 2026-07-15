import { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us for Trex IPTV Free Trial, Setup Guidance & Support",
  description:
    "Contact Trex IPTV on WhatsApp for a free 24-hour trial, setup guidance, account activation, device installation help, and subscription support. Real human responses within minutes.",
  alternates: {
    canonical: `${SITE_URL}/contact/`,
  },
};

export default function ContactUs() {
  return <ContactUsClient />;
}
