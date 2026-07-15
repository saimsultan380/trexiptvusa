"use client";

import Image from "next/image";
import { ShieldCheck, Globe, Server, Tv2, CalendarDays, User } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Anti-Freeze Technology",
    description:
      "Proprietary stream-lock system eliminates freezing mid-stream, even during peak-traffic live events.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "CDN-Powered Servers",
    description:
      "Global content delivery network ensures the fastest possible stream reach, regardless of your location.",
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "99.9% Server Uptime",
    description:
      "Redundant server architecture monitors and self-heals round the clock so your stream never drops.",
  },
  {
    icon: <Tv2 className="h-5 w-5" />,
    title: "HD, UHD & 4K Streams",
    description:
      "Every channel is optimized for crystal-clear resolution with stable bitrate and instant channel switching.",
  },
  {
    icon: <CalendarDays className="h-5 w-5" />,
    title: "EPG & 7-Day Catch-Up",
    description:
      "Never miss a moment. Rewind, replay, and browse the full program guide updated daily.",
  },
  {
    icon: <User className="h-5 w-5" />,
    title: "Portal Login Access",
    description:
      "Use supported portal login details to access your Trex IPTV account.",
  },
];

export default function FeaturesListSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">

        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex flex-col order-1"
        >
          {/* Badge */}
          <span className="text-[#ff6b35] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
            TREX IPTV RUNS WHILE OTHERS BUFFER
          </span>

          {/* Big headline */}
          <h2 className="text-[26px] sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.08] text-zinc-900 mb-3 sm:mb-6">
            More Channels.<br />
            <span className="text-[#ff6b35]">Zero Buffering.</span><br />
            One Subscription.
          </h2>

          {/* Sub-description */}
          <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-6 sm:mb-10 max-w-lg">
            Trex IPTV is built on enterprise-grade infrastructure that keeps your stream locked, stable, and razor-sharp across every device. From live PPV events to late-night binge sessions, Trex IPTV delivers without compromise.
          </p>

          {/* 2-column feature grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-5 sm:gap-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                className="flex gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#ff6b35]">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-[12px] sm:text-[13px] font-bold text-zinc-900 leading-snug mb-0.5">
                    {feature.title}
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-zinc-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mt-8 sm:mt-10">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] bg-[#ff6b35] px-6 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors"
            >
              Start Free Trial →
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/subscription-plans"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-6 text-[13px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors"
            >
              View Plans →
            </motion.a>
          </div>
        </motion.div>

        {/* Right Visual Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-6 relative order-2 mt-6 lg:mt-0"
        >
          <div className="relative w-full aspect-[1402/1122] max-w-[240px] sm:max-w-none mx-auto">
            <Image
              src="/MORE CHANNELS. ZERO BUFFERING. ONE SUBSCRIPTION.PNG"
              alt="Trex IPTV Performance Dashboard"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
