"use client";

import { WHATSAPP_NUMBER } from "@/lib/site";

import Image from "next/image";
import {
  ShoppingCart,
  Monitor,
  UserPlus,
  Tag,
  BarChart3,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const setupSteps = [
  {
    id: "01",
    icon: ShoppingCart,
    title: "Pick Your Trex IPTV Reseller Package",
    description:
      "Choose the credit package that fits your expected client volume.",
  },
  {
    id: "02",
    icon: Monitor,
    title: "Get Your Reseller Panel Access",
    description:
      "Log in to your Trex IPTV dashboard and check your available credits.",
  },
  {
    id: "03",
    icon: UserPlus,
    title: "Create Your First Client Account",
    description:
      "Activate a trial or subscription line for your very first customer.",
  },
  {
    id: "04",
    icon: Tag,
    title: "Set Your Own Prices and Start Selling",
    description:
      "Decide what you charge your clients and keep all the profit.",
  },
  {
    id: "05",
    icon: BarChart3,
    title: "Manage and Grow Your Client Base",
    description:
      "Track active users, renewals, and account details all in one dashboard.",
  },
];

export default function ResellerSetupSection() {
  const phoneNumber = WHATSAPP_NUMBER;
  const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to get my Trex IPTV reseller panel now",
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
            Reseller Setup
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4"
          >
            Trex IPTV Reseller Setup{" "}
            <span className="text-[#ff6b35]">Complete Process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8"
          >
            Simple and beginner-friendly reseller panel setup; no experience needed. Your Trex IPTV reseller panel is ready to use the moment you sign up.
          </motion.p>

          {/* Steps */}
          <div className="flex flex-col gap-2 sm:gap-2.5 mb-6 sm:mb-8">
            {setupSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
                  className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-zinc-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:border-orange-100 hover:shadow-[0_6px_20px_rgba(255,107,53,0.08)] transition-all duration-300"
                >
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 border border-orange-100">
                    <Icon className="h-5 w-5 text-[#ff6b35]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-0.5 sm:mb-1 flex-wrap">
                      <span className="text-[11px] sm:text-xs font-extrabold text-[#ff6b35]/70">
                        {step.id}.
                      </span>
                      <h3 className="text-[13px] sm:text-[15px] font-bold text-zinc-900 leading-snug">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[11px] sm:text-[13px] text-zinc-500 leading-snug sm:leading-relaxed">
                      {step.description}
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
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-[4px] bg-[#ff6b35] px-6 sm:px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors self-start w-full sm:w-auto"
          >
            Contact Us to Get Your Reseller Panel Now
            <ChevronRight className="h-4 w-4" />
          </motion.a>
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
                src="/Trex IPTV Reseller Setup Complete Process.PNG"
                alt="Trex IPTV Reseller Setup Complete Process"
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
