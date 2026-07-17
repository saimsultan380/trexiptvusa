"use client";

import { WHATSAPP_NUMBER } from "@/lib/site";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FinalCTASection() {
  const phoneNumber = WHATSAPP_NUMBER;

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
          <span className="inline-flex items-center gap-1.5 text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-5 px-3 py-1.5 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] inline-block animate-pulse" />
            FREE 24-HOUR TRIAL AVAILABLE NOW
          </span>

          <h2 className="text-[22px] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-zinc-900 mb-4 sm:mb-5 max-w-3xl">
            Done Paying for <span className="text-[#ff6b35]">Cable</span><br className="hidden sm:block" /> That Delivers Less?
          </h2>

          <p className="text-zinc-600 text-[13px] sm:text-[16px] leading-relaxed max-w-xl mb-6 sm:mb-8">
            Thousands of subscribers have already switched to Trex IPTV and never looked back. Get your free 24-hour trial today with full access. No credit card and absolutely no risk.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff6b35] px-7 sm:px-9 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors whitespace-nowrap"
            >
              Start Free Trial →
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to know more about Trex IPTV")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-zinc-300 bg-white px-7 sm:px-9 text-[13px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4 text-green-500" />
              Contact Us on WhatsApp
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
