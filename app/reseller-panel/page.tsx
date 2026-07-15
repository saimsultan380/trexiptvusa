import { Metadata } from "next";
import ResellerPanelClient from "./ResellerPanelClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trex IPTV Reseller Panel & Plans | Become Trex IPTV Reseller",
  description:
    "Start your own IPTV business with the Trex IPTV reseller panel. Create customer accounts, manage subscriptions, issue free trials, handle renewals, and keep 100% of your profits with non-expiring credits.",
  alternates: {
    canonical: `${SITE_URL}/reseller-panel/`,
  },
};

export default function ResellerPanel() {
  return <ResellerPanelClient />;
}
