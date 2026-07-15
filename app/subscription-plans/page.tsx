import { Metadata } from "next";
import SubscriptionPlansClient from "./SubscriptionPlansClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trex IPTV Subscription Plans at very Discounted Pricing",
  description: "Explore Trex IPTV subscription plans with instant activation, HD/4K streaming, and flexible 1 to 12 month options. Get discounted pricing and start streaming on all your devices today.",
  alternates: {
    canonical: `${SITE_URL}/subscription-plans/`,
  },
};

export default function SubscriptionPlans() {
  return <SubscriptionPlansClient />;
}
