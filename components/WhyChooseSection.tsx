"use client";

import { WHATSAPP_NUMBER } from "@/lib/site";

import React from "react";
import {
  Zap,
  Headphones,
  CalendarCheck,
  Settings,
  MonitorSmartphone,
  ShieldCheck,
  ChevronRight,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Zap,
    title: "Instant Account Activation Every Time",
  },
  {
    icon: Headphones,
    title: "24/7 Real Human Support",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Subscription Plans for Every Viewer",
  },
  {
    icon: Settings,
    title: "Easy User-friendly Setup and Installation Guidance",
  },
  {
    icon: MonitorSmartphone,
    title: "Works on All Compatible Devices",
  },
  {
    icon: ShieldCheck,
    title: "Zero Buffering Guaranteed",
  },
];

export default function WhyChooseSection() {
  const phoneNumber = WHATSAPP_NUMBER;

  return (
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left — heading & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col text-center lg:text-left lg:self-start"
        >
          <span className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b35] shrink-0" />
            Why Choose Trex IPTV
          </span>

          <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4 sm:mb-5">
            Why Choose a{" "}
            <span className="text-[#ff6b35]">Trex</span> IPTV Subscription?
          </h2>

          <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0">
            Trex IPTV cuts the cable bill and gives you everything you actually
            want from a streaming service. More channels, better quality, content
            updates, lower price, and real support when you need it.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#comparison"
              className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg bg-[#ff6b35] px-5 sm:px-6 text-[12px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors whitespace-nowrap"
            >
              View All Plans
              <ChevronRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to get my 24h free trial for Trex IPTV")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg border border-[#ff6b35] bg-white px-5 sm:px-6 text-[12px] sm:text-sm font-bold text-[#ff6b35] hover:bg-orange-50 transition-colors whitespace-nowrap"
            >
              <Clock className="h-4 w-4" />
              Get Free 24h Trial
              <ChevronRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right — feature cards */}
        <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4 lg:self-start">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
                className="flex items-center gap-4 sm:gap-5 rounded-xl sm:rounded-2xl border border-zinc-100 bg-white px-4 py-4 sm:px-6 sm:py-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:border-orange-100 hover:shadow-[0_4px_24px_rgba(255,107,53,0.08)] transition-all duration-300"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#ff6b35]">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.75]" />
                </div>
                <h3 className="text-[13px] sm:text-[15px] font-bold text-zinc-900 leading-snug">
                  {reason.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
