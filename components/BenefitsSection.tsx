"use client";

import Image from "next/image";
import { ShieldCheck, Tag, Headphones, Play, Lock, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";

const leftCards = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Anti-Freeze Technology",
    desc: "During live events, the stream locks tight. So your screen never freezes mid-match.",
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Round-the-Clock Support",
    desc: "Real agents respond to every query in under 10 minutes, at any hour of the day.",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Secure Streaming Environment",
    desc: "Enterprise-grade server protection keeps your connection private, safe, and interruption-free.",
  },
];

const rightCards = [
  {
    icon: <Tag className="h-5 w-5" />,
    title: "Unbeatable Pricing",
    desc: "Premium Trex IPTV plans starting from just €12 with absolutely no hidden charges.",
  },
  {
    icon: <Play className="h-5 w-5" />,
    title: "Freshest VOD Library",
    desc: "Every new movie and series gets added to Trex IPTV the moment it releases worldwide.",
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5" />,
    title: "Multiroom Flexibility",
    desc: "Watch different content on multiple screens at the same time under one single subscription.",
  },
];

function FeatureCard({
  icon,
  title,
  desc,
  align = "left",
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  align?: "left" | "right";
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className="flex items-start gap-3 p-4 sm:p-4 rounded-xl border border-zinc-100 bg-white shadow-sm hover:shadow-md hover:border-orange-100 transition-all w-full"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff6b35]">
        {icon}
      </div>
      <div>
        <h4 className="text-[13px] sm:text-[14px] font-bold text-zinc-900 mb-0.5">{title}</h4>
        <p className="text-[11px] sm:text-[12px] text-zinc-500 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function BenefitsSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 sm:mb-16"
      >
        <span className="text-[#ff6b35] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 block">
          WHY THOUSANDS OF CUSTOMERS TRUST TREX IPTV
        </span>
        <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-4">
          Why Thousands of Customers<br className="hidden sm:block" /> Trust <span className="text-[#ff6b35]">Trex IPTV</span>
        </h2>
        <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto">
          We&apos;ve built Trex IPTV around what really matters — reliability you can count on, support that&apos;s always there, content that stays fresh, privacy that&apos;s protected, and the freedom to watch your way on any screen.
        </p>
      </motion.div>

      {/* Mobile: image + compact 2-col cards */}
      <div className="lg:hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <div className="relative w-full max-w-[220px] aspect-square">
            <Image
              src="/WHY THOUSANDS OF CUSTOMERS TRUST TREX IPTV.PNG"
              alt="Why Thousands of Customers Trust Trex IPTV"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
        <div className="flex flex-col gap-3 max-w-md mx-auto">
          {[...leftCards, ...rightCards].map((card, i) => (
            <FeatureCard key={i} {...card} align="left" delay={i * 0.05} />
          ))}
        </div>
      </div>

      {/* Desktop: three-column layout */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center">

        {/* Left Cards */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {leftCards.map((card, i) => (
            <FeatureCard key={i} {...card} align="left" delay={i * 0.1} />
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-4 flex justify-center"
        >
          <div className="relative w-full max-w-[260px] sm:max-w-[340px] aspect-square">
            <Image
              src="/WHY THOUSANDS OF CUSTOMERS TRUST TREX IPTV.PNG"
              alt="Why Thousands of Customers Trust Trex IPTV"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right Cards */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {rightCards.map((card, i) => (
            <FeatureCard key={i} {...card} align="right" delay={i * 0.1} />
          ))}
        </div>

      </div>
    </section>
  );
}
