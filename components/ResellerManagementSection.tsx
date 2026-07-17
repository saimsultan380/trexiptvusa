"use client";

import { WHATSAPP_NUMBER } from "@/lib/site";

import Image from "next/image";
import {
  UserPlus,
  PlayCircle,
  Gift,
  Users,
  Gauge,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const managementFeatures = [
  {
    icon: UserPlus,
    title: "Create Customer Accounts",
    description:
      "Add new Trex IPTV lines instantly and send login credentials to your clients directly from your reseller dashboard.",
  },
  {
    icon: PlayCircle,
    title: "Activate Subscriptions",
    description:
      "Use your Trex IPTV credits to activate monthly, quarterly, or yearly subscriptions for any client in seconds.",
  },
  {
    icon: Gift,
    title: "Issue Free Trials",
    description:
      "Generate 24-hour Trex IPTV trial accounts for potential clients so they can test the service before purchasing a plan.",
  },
  {
    icon: Users,
    title: "Manage Existing Clients",
    description:
      "Renew subscriptions, update account details, extend lines, and monitor every client's status from one single dashboard.",
  },
];

export default function ResellerManagementSection() {
  const phoneNumber = WHATSAPP_NUMBER;
  const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to get Trex IPTV reseller access",
  )}`;

  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col order-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-1.5"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
            All-in-One Reseller Management
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4"
          >
            Manage Every Client and Subscription From Your{" "}
            <span className="text-[#ff6b35]">Trex IPTV</span> Reseller Panel
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8"
          >
            With the Trex IPTV reseller panel, your customer management will become easy and automated. You spend less time on manual tracking and more time growing your client base. Create accounts, activate subscriptions, and handle renewals from a single dashboard.
          </motion.p>

          {/* Feature cards */}
          <div className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            {managementFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
                  className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-zinc-50/70 border border-zinc-100 hover:border-orange-100 hover:bg-orange-50/30 transition-colors duration-300"
                >
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-100">
                    <Icon className="h-5 w-5 text-[#ff6b35] stroke-[1.5]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13px] sm:text-[15px] font-bold text-zinc-900 mb-1 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-[11px] sm:text-[13px] text-zinc-500 leading-snug sm:leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-100"
          >
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-100">
                <Gauge className="h-5 w-5 text-[#ff6b35]" />
              </div>
              <p className="text-[11px] sm:text-[13px] text-zinc-600 leading-snug sm:leading-relaxed font-medium pt-0.5">
                Manage customers faster from one dashboard. Streamline accounts, subscriptions, and renewals — all in one place.
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 shrink-0 items-center justify-center gap-2 rounded-[4px] bg-[#ff6b35] px-5 sm:px-6 text-[12px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors whitespace-nowrap w-full sm:w-auto"
            >
              Get Reseller Access
              <ChevronRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:col-span-6 relative flex justify-center lg:justify-end order-2 mt-6 lg:mt-0"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[560px]">
            <div className="relative w-full aspect-[1402/1122]">
              <Image
                src="/Manage Every Client and Subscription From Your Trex IPTV Reseller Panel.PNG"
                alt="Manage Every Client and Subscription From Your Trex IPTV Reseller Panel"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
