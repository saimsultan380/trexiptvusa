"use client";

import { WHATSAPP_NUMBER } from "@/lib/site";

import Image from "next/image";
import {
  Tv,
  Gauge,
  MonitorSmartphone,
  Settings,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const trialFeatures = [
  {
    icon: Tv,
    title: "Experience the Full Channel Library",
    description: "Browse all the live channels and see everything available.",
  },
  {
    icon: Gauge,
    title: "Test Streaming Quality on Your Device",
    description:
      "Experience HD, UHD, and 4K streaming performance on your own screen.",
  },
  {
    icon: MonitorSmartphone,
    title: "Check Device Compatibility",
    description:
      "Check the compatibility of Trex IPTV with your preferred streaming device.",
  },
  {
    icon: Settings,
    title: "Trex IPTV Full Setup Process Guidance",
    description:
      "Learn how easy login, account activation, and setup actually feel.",
  },
];

export default function ContactFreeTrialSection() {
  const phoneNumber = WHATSAPP_NUMBER;
  const trialHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to get my 24h free trial for Trex IPTV",
  )}`;

  return (
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Image — left on desktop, below on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:col-span-6 relative flex justify-center lg:justify-start order-2 lg:order-1 mt-6 lg:mt-0"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[520px]">
            <div className="relative w-full aspect-[1402/1122]">
              <Image
                src="/Request Your Trex IPTV Free Trial for 24 Hours Before You Buy.PNG"
                alt="Request Your Trex IPTV Free Trial for 24 Hours Before You Buy"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Content — above image on mobile, right on desktop */}
        <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-1.5"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
            Free 24h Trial
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="text-[26px] sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4"
          >
            Request Your <span className="text-[#ff6b35]">Trex IPTV</span> Free Trial for 24 Hours Before You Buy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-3"
          >
            Your Trex IPTV free trial gives you full 24 hour access to check device compatibility, test streaming performance, explore all features, and evaluate picture quality before choosing any plan.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
            className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8"
          >
            Try it on any device you own, whether that is a Firestick, Smart TV, Android phone, iPhone, MAG Box, or Windows PC, and see how smoothly Trex IPTV runs on your setup.
          </motion.p>

          {/* 2x2 feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
            {trialFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col items-start gap-3 sm:gap-0 p-3.5 sm:p-4 rounded-xl border border-zinc-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:border-orange-100 hover:shadow-[0_6px_20px_rgba(255,107,53,0.08)] transition-all duration-300"
                >
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-100 sm:mb-3">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#ff6b35]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[12px] sm:text-[14px] font-bold text-zinc-900 mb-1 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-[11px] sm:text-[12px] text-zinc-500 leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={trialHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-between sm:justify-center gap-3 rounded-full bg-[#ff6b35] px-5 sm:px-8 text-[12px] sm:text-[15px] font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors"
          >
            <span className="text-left sm:text-center leading-tight">
              Request Your Free Trex IPTV Trial
            </span>
            <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
