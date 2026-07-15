"use client";

import {
  CreditCard,
  Wifi,
  MonitorSmartphone,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";

const requirements = [
  {
    icon: CreditCard,
    title: "An Active Trex IPTV Subscription",
    description:
      "Purchase any plan, and you get your login credentials via WhatsApp or email instantly.",
  },
  {
    icon: Wifi,
    title: "A Stable Internet Connection",
    description:
      "At least 10 Mbps for HD streaming and 25 Mbps or above for smooth 4K playback.",
  },
  {
    icon: MonitorSmartphone,
    title: "A Compatible Device",
    description:
      "Any Smart TV, Firestick, Android Box, iPhone, MAG Box or Windows PC works perfectly.",
  },
  {
    icon: Download,
    title: "Your Preferred IPTV Player",
    description:
      "Download any supported player app on your device before starting the setup process.",
  },
];

export default function InstallationBeforeYouBegin() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
      >
        <span className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
          Before You Begin
        </span>
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900">
          What You Need Before Installing{" "}
          <span className="text-[#ff6b35]">Trex IPTV</span>?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {requirements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
              className="flex flex-col gap-3 p-4 sm:p-5 rounded-xl border border-zinc-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-orange-200 hover:shadow-[0_8px_24px_rgba(255,107,53,0.08)] transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 border border-orange-100">
                <Icon className="h-5 w-5 text-[#ff6b35]" />
              </div>
              <h3 className="text-[13px] sm:text-[15px] font-bold text-zinc-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-[13px] text-zinc-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
