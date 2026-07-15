import { Metadata } from "next";
import InstallationGuideClient from "./InstallationGuideClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Easy Guide to Set Up or Install Trex IPTV on Any Compatible Device",
  description:
    "Step-by-step Trex IPTV installation for Firestick, Smart TV, Android, iPhone, MAG Box, PC, Mac, Enigma2, and Roku. Get set up in under 5 minutes with our complete setup guide.",
  alternates: {
    canonical: `${SITE_URL}/installation-guide/`,
  },
};

export default function InstallationGuide() {
  return <InstallationGuideClient />;
}
