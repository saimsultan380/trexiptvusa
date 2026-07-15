"use client";

import React from "react";
import Image from "next/image";
import {
  Zap,
  Monitor,
  PlayCircle,
  Lock,
  Headphones,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Instant Account Activation",
    description:
      "Get your login credentials in your WhatsApp or email within minutes after payment.",
  },
  {
    icon: Monitor,
    title: "Works on Every Device",
    description:
      "Stream Trex IPTV on Firestick, Smart TV, Android, iPhone, and more.",
  },
  {
    icon: PlayCircle,
    title: "Easy Playlist Setup",
    description:
      "Add your Trex IPTV playlist link to any player app and start watching instantly.",
  },
  {
    icon: Lock,
    title: "Xtream Codes Login Access",
    description:
      "Connect easily using your username, password, and server URL on any device.",
  },
  {
    icon: Headphones,
    title: "Full 24/7 Customer Support",
    description:
      "Our team is always available on WhatsApp to help you anytime.",
  },
  {
    icon: Settings,
    title: "Free Setup Assistance",
    description:
      "We will guide you on the installation on any compatible device at no extra cost.",
  },
];

export default function PlanIncludesSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left — heading & graphic */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col text-center lg:text-left"
        >
          <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4">
            What Every{" "}
            <span className="text-[#ff6b35]">Trex IPTV</span> Subscription Plan
            Includes
          </h2>

          <div className="w-10 h-1 bg-[#ff6b35] rounded-full mb-4 mx-auto lg:mx-0" />

          <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-8 sm:mb-10 max-w-sm mx-auto lg:mx-0">
            Every Trex IPTV subscription plan contains everything you need to
            start instant streaming.
          </p>

          <div className="relative w-full max-w-[220px] sm:max-w-[280px] aspect-square mx-auto lg:mx-0">
            <Image
              src="/general.PNG"
              alt="Trex IPTV subscription plan features"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right — feature cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
                className="group flex flex-row sm:flex-col items-start sm:items-center text-left sm:text-center gap-3 sm:gap-0 rounded-xl sm:rounded-2xl border border-zinc-200 border-l-[3px] border-l-[#ff6b35]/50 sm:border-l sm:border-l-zinc-200 bg-white p-3.5 sm:px-6 sm:py-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-orange-200 hover:border-l-[#ff6b35] hover:shadow-[0_8px_28px_rgba(255,107,53,0.1)] transition-all duration-300"
              >
                <div className="relative shrink-0 sm:mb-5">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.18)_0%,transparent_70%)] scale-125 sm:scale-150" />
                  <div className="relative flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-lg sm:rounded-none bg-orange-50/60 sm:bg-transparent border border-orange-100/80 sm:border-0">
                    <Icon className="h-5 w-5 sm:h-8 sm:w-8 text-[#ff6b35] stroke-[1.5]" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-[13px] sm:text-[15px] font-bold text-zinc-900 mb-1 sm:mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-500 text-[11px] sm:text-[13px] leading-snug sm:leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
