import { Metadata } from "next";
import InstallationGuideClient from "./InstallationGuideClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Install or Set Up Trex IPTV on Compatible Devices",
  description:
    "Step-by-step guide to set up Trex IPTV on Firestick, Android, Smart TV, iPhone or iOS, Windows PC, Mac, MAG Box, STB Emulator, Enigma2 & Roku under 5 minutes",
  alternates: {
    canonical: `${SITE_URL}/installation-guide/`,
  },
};

export default function InstallationGuide() {
  return <InstallationGuideClient />;
}
