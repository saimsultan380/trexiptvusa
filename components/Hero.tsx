"use client";

import Image from "next/image";
import {
  Play,
  Film,
  ShoppingCart,
  BookOpen
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-7xl w-full px-6 pt-28 pb-10 sm:px-8 sm:pt-40 sm:pb-12 lg:pt-48 lg:pb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-4 items-center">

        {/* Hero Left Content Column */}
        <div className="lg:col-span-6 flex flex-col text-left">

          {/* Title: exactly matching the screenshot styling */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[26px] sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] text-zinc-950"
          >
            <span className="text-[#ff6b35]">Trex IPTV</span> 4k | Trex IPTV Subscription | Trex OTT IPTV
          </motion.h1>

          {/* Description paragraph: exactly matching the text in the screenshot */}
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mt-3 sm:mt-6 text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium max-w-xl"
          >
            Trex IPTV instant activation available. Get a Trex IPTV Subscription at discounted rates. Trex IPTV Player allows you to stream channels, movies, all sports & web series in HD, UHD & 4k quality from anywhere in the world. Users can use Trex OTT IPTV on Smart TV, Firestick, Android, iOS, Windows, MAG Box, Enigma2 & many more.
          </motion.p>

          {/* Buttons in the exact style of the image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 mt-5 sm:mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] bg-[#ff6b35] px-4 sm:px-6 text-[12px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors whitespace-nowrap"
            >
              Start Free Trial
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/subscription-plans#comparison"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-4 sm:px-6 text-[12px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors whitespace-nowrap"
            >
              See Pricing Plan
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/reseller-panel"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-4 sm:px-6 text-[12px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors whitespace-nowrap"
            >
              Become a Reseller
            </motion.a>
          </motion.div>

          {/* Feature Cards - Compact design matching the image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="flex flex-wrap items-center gap-3 sm:gap-6 mt-5 sm:mt-8"
          >
            {/* Live Channels */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                <Play className="w-4 h-4 text-[#ff6b35]" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-zinc-950 leading-tight">Live Channels</h3>
                <p className="text-[11px] text-zinc-500">95,000+ Channels</p>
              </div>
            </div>

            {/* VOD Library */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                <Film className="w-4 h-4 text-[#ff6b35]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-zinc-950 leading-tight">VOD Library</h3>
                <p className="text-[11px] text-zinc-500">Movies & Series</p>
              </div>
            </div>

            {/* HD/UHD/4k/8k */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-4 h-4 text-[#ff6b35]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-zinc-950 leading-tight">HD/UHD/4k/8k</h3>
                <p className="text-[11px] text-zinc-500">Crystal Clear Quality</p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-4 h-4 text-[#ff6b35]" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-zinc-950 leading-tight">24/7 Support</h3>
                <p className="text-[11px] text-zinc-500">Always Here for You</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Hero Right Visual Graphic Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-6 relative flex justify-center lg:justify-end mt-6 lg:mt-0"
        >

          <div className="relative w-full max-w-[260px] sm:max-w-[550px] aspect-[1402/1122]">

            {/* Cleaned sphere & pedestal image */}
            <Image
              src="/Trex IPTV Subscription.PNG"
              alt="Trex IPTV Visualizer"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

