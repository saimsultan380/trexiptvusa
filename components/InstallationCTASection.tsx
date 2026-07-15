"use client";

import { motion } from "framer-motion";
import { MessageCircle, Play, ShoppingCart } from "lucide-react";

export default function InstallationCTASection() {
  const phoneNumber = "447482794475";

  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-20 lg:py-28 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white px-6 py-10 sm:px-14 sm:py-20 text-center shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#ff6b35]/8 blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-[22px] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-zinc-900 mb-4 max-w-4xl">
            READY TO STREAM SMARTER WITH{" "}
            <span className="text-[#ff6b35]">TREX IPTV</span>?
          </h2>

          <p className="text-[#ff6b35] text-[11px] sm:text-sm font-bold tracking-wide mb-5">
            No contracts | No cable | No satellite dish | No hidden fees
          </p>

          <p className="text-zinc-600 text-[13px] sm:text-[16px] leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Join thousands of happy Trex IPTV subscribers streaming live sports, movies, news, entertainment and series.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I need help with Trex IPTV")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-[4px] border border-zinc-300 bg-white px-5 sm:px-7 text-[12px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4 text-green-500" />
              WhatsApp Us
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to start my 24h free trial for Trex IPTV")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-[4px] bg-[#ff6b35] px-5 sm:px-7 text-[12px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors whitespace-nowrap"
            >
              <Play className="h-4 w-4 fill-white" />
              Start 24h Free Trial
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/subscription-plans"
              className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-[4px] border border-zinc-300 bg-white px-5 sm:px-7 text-[12px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors whitespace-nowrap"
            >
              <ShoppingCart className="h-4 w-4 text-[#ff6b35]" />
              View Subscription Plans
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
