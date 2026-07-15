import { Metadata } from "next";
import SubscriptionPlansClient from "./SubscriptionPlansClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trex IPTV Subscription Plans | Buy at Very Discounted Prices",
  description:
    "Tired of paying too much for channels you never watch? Trex IPTV subscription works on all your devices with a simple setup and instant activation. Pick your plan and start streaming in HD, UHD, and 4K.",
  alternates: {
    canonical: `${SITE_URL}/subscription-plans/`,
  },
};

export default function SubscriptionPlans() {
  return <SubscriptionPlansClient />;
}
