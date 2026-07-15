"use client";

import Image from "next/image";
import { Tag, LayoutDashboard, Zap, Headphones, Megaphone, ShieldCheck, Infinity, Check, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Tag className="h-5 w-5" />,
    title: "Wholesale Credit Rates",
    desc: "Buy credits at wholesale rates and earn more as your client base grows.",
  },
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "Full Reseller Panel",
    desc: "Manage all your client lines and subscriptions in real time from one dashboard.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Instant Activation",
    desc: "Instant activation for every client you add without any delay.",
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "24/7 WhatsApp Support",
    desc: "Support from our Reseller Support Team any time you need it.",
  },
  {
    icon: <Megaphone className="h-5 w-5" />,
    title: "Ready-to-Use Marketing",
    desc: "Marketing resources that help you attract and convert clients faster.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "VPN-Friendly Servers",
    desc: "Every client stream runs through VPN friendly servers, keeping their connection private and secure.",
  },
];

const badges = [
  {
    icon: <Infinity className="h-5 w-5 text-[#ff6b35]" />,
    title: "Unlimited Clients",
    desc: "No limits. Grow your customer base freely.",
  },
  {
    icon: <Zap className="h-5 w-5 text-[#ff6b35]" />,
    title: "Fast Activation",
    desc: "Get started in minutes and go live fast.",
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-[#ff6b35]" />,
    title: "High Margin Opportunity",
    desc: "Keep more. Earn more. Scale effortlessly.",
  },
];

export default function ExistingAccessSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">

        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col"
        >
          {/* Badge */}
          <span className="text-[#ff6b35] text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] inline-block" />
            BECOME OUR PARTNER
          </span>

          <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight text-zinc-900 mb-4">
            Get Your <span className="text-[#ff6b35]">Trex IPTV</span> Reseller Panel
          </h2>

          <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8 max-w-sm">
            Turn your network into a steady monthly income by reselling Trex IPTV subscriptions under your own brand. No technical background needed; we handle the servers, you handle the clients, and keep the profits.
          </p>

          {/* 6 benefit items — 2 columns */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-5 sm:gap-y-6 mb-6 sm:mb-10">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                className="flex flex-col gap-2"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#ff6b35] border border-orange-100">
                  {b.icon}
                </div>
                <h4 className="text-[12px] sm:text-[13px] font-bold text-zinc-900 leading-snug">{b.title}</h4>
                <p className="text-[11px] sm:text-[12px] text-zinc-500 leading-snug">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start gap-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/reseller-panel"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-[13px] sm:text-sm font-bold text-white hover:bg-zinc-800 transition-colors whitespace-nowrap"
            >
              Become a Reseller →
            </motion.a>
            <p className="text-zinc-400 text-[11px] flex items-center gap-1.5">
              <Check className="h-3 w-3 text-[#ff6b35]" /> No setup fees. No long-term contracts.
            </p>
          </div>
        </motion.div>

        {/* Right Column — dashboard image + badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-7 flex flex-col gap-5"
        >
          {/* Dashboard image */}
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
            <Image
              src="/GET YOUR TREX IPTV RESELLER PANEL.PNG"
              alt="Trex IPTV Reseller Panel Dashboard"
              fill
              className="object-contain"
            />
          </div>

          {/* 3 badges below image */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex flex-col gap-1.5 p-3 sm:p-4 rounded-xl border border-zinc-200 bg-white hover:border-orange-200 hover:shadow-sm transition-all"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50">
                  {badge.icon}
                </div>
                <h4 className="text-[11px] sm:text-[13px] font-bold text-zinc-900 leading-tight">{badge.title}</h4>
                <p className="text-[10px] sm:text-[11px] text-zinc-500">{badge.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
