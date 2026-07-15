"use client";

import Image from "next/image";
import { Ban, Tv, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Ban className="h-5 w-5" />,
    title: "No Contracts or Hidden Fees",
  },
  {
    icon: <Tv className="h-5 w-5" />,
    title: "EPG, Catch-Up & PPV Access",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Multi-Connection Plans for Families",
  },
];

export default function InfoSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">

        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col"
        >
          <h2 className="text-[26px] sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-tight text-zinc-900 mb-4 sm:mb-6">
            What Is{" "}
            <span className="text-[#ff6b35]">Trex</span> IPTV?
          </h2>

          <div className="space-y-3 mb-6 sm:mb-8">
            <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
              Trex IPTV is a premium internet television streaming service replacing cable with instant access to live channels, sports, news, entertainment, movies, and series in stunning 4K HD quality. Trex IPTV is one of the leading IPTV services in the world.
            </p>
            <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
              With Trex IPTV, there are no contracts, no dish installations, and no hidden fees. Trex IPTV Subscribers enjoy pure buffer-free streaming directly on their screens at unbeatable subscription rates from anywhere in the world.
            </p>
            <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
              Trex OTT IPTV supports EPG guide, catch-up TV, PPV events, and simultaneous multi-connection plans for families.
            </p>
          </div>

          {/* Feature list */}
          <div className="space-y-2.5 mb-6 sm:mb-10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-zinc-100 bg-zinc-50"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff6b35]">
                  {feature.icon}
                </div>
                <span className="text-[13px] sm:text-[14px] font-bold text-zinc-900">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] bg-[#ff6b35] px-2.5 sm:px-7 text-[10px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors text-center leading-tight"
            >
              Start Streaming Now →
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/subscription-plans"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-2.5 sm:px-7 text-[10px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors text-center leading-tight"
            >
              <span className="sm:hidden">Activate Subscription →</span>
              <span className="hidden sm:inline">Activate Trex IPTV Subscription →</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Visual Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-7 relative"
        >
          <div className="relative w-full max-w-[260px] sm:max-w-none mx-auto lg:mx-0 aspect-[1402/1122]">
            <Image
              src="/What is Trex IPTV.PNG"
              alt="Trex IPTV Interface Overview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
