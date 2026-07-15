"use client";

import {
  Calendar,
  Layers,
  Infinity,
  TimerReset,
  User,
  SlidersHorizontal,
  Zap,
  RefreshCw,
  FolderOpen,
  Check,
  Package,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const creditSteps = [
  {
    id: "01",
    title: "1 Credit = 1 Month Per Client",
    description:
      "One credit gives one customer one full month access to Trex IPTV.",
    icon: Calendar,
  },
  {
    id: "02",
    title: "Build Any Subscription Durations",
    description:
      "Combine credits to create 1 month, 3 month, 6 month or 12 month plans for your clients according to their requirements.",
    icon: Layers,
  },
  {
    id: "03",
    title: "Your Credits Never Expire",
    description:
      "Every unused Trex IPTV reseller credit stays in your panel permanently with no expiry date, so you never lose money.",
    icon: Infinity,
  },
  {
    id: "04",
    title: "Renewals Done in Seconds",
    description:
      "When a client subscription ends, simply apply credits from your panel to renew their access instantly without any delay or manual work.",
    icon: TimerReset,
  },
];

const benefits = [
  { text: "Flexible account management", icon: User },
  { text: "Easy subscription control", icon: SlidersHorizontal },
  { text: "Instant client activation", icon: Zap },
  { text: "Hassle-free renewal process", icon: RefreshCw },
  { text: "Better client organisation", icon: FolderOpen },
];

const highlightBenefits = [
  "Non-expiring credits for full peace of mind",
  "Buy more credits and pay less per credit",
  "Sub-reseller management under your master account",
];

export default function ResellerCreditsSection() {
  const phoneNumber = "447482794475";
  const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to get Trex IPTV reseller access",
  )}`;

  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-1.5"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
          How It Works
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4"
        >
          How <span className="text-[#ff6b35]">Trex IPTV</span> Reseller{" "}
          <span className="text-[#ff6b35]">Credits</span> Work?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed"
        >
          The Trex IPTV reseller panel runs on a simple and organized credit-based system that gives you complete flexibility. After getting the credits, the resellers can create, renew, and extend customer subscriptions according to their individual requirements.
        </motion.p>
      </div>

      {/* Grid + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* 2x2 step cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
          {creditSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
                className="relative flex items-start gap-3 sm:items-center sm:gap-0 p-3.5 sm:p-5 rounded-xl border border-zinc-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-orange-100 hover:shadow-[0_8px_24px_rgba(255,107,53,0.08)] transition-all duration-300"
              >
                <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-0 shrink-0 sm:mr-5">
                  <span className="text-xl sm:text-3xl font-extrabold text-[#ff6b35] leading-none">
                    {step.id}
                  </span>
                  <div className="hidden sm:flex h-10 w-10 mt-3 items-center justify-center rounded-lg bg-orange-50 border border-orange-100">
                    <Icon className="h-5 w-5 text-[#ff6b35]" />
                  </div>
                </div>

                <div className="flex-1 min-w-0 sm:pr-10">
                  <h3 className="text-[13px] sm:text-[15px] font-bold text-zinc-900 mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] text-zinc-500 leading-snug sm:leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-100">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#ff6b35]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col rounded-xl sm:rounded-2xl border border-zinc-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          <div className="p-4 sm:p-6 flex-1">
            <h3 className="text-[14px] sm:text-[16px] font-bold text-zinc-900 mb-4 sm:mb-6 leading-snug">
              Benefits of the Trex IPTV Credit-Based Reseller Program
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.text} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-100">
                      <Icon className="h-4 w-4 text-[#ff6b35]" />
                    </div>
                    <span className="text-[12px] sm:text-[14px] font-semibold text-zinc-700 leading-snug">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-orange-50/60 border-t border-orange-100 space-y-2.5 sm:space-y-3">
            {highlightBenefits.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-[#ff6b35] shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-[13px] font-semibold text-zinc-700 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-100 mb-4 sm:mb-6"
      >
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ff6b35] text-white shadow-sm">
            <Package className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[13px] sm:text-[15px] font-bold text-zinc-900 leading-snug mb-0.5">
              Trex reseller credits give you control without complexity.
            </p>
            <p className="text-[11px] sm:text-[13px] text-zinc-500 leading-snug sm:leading-relaxed">
              Buy credits once, use them when needed, and manage renewals faster from one organised panel.
            </p>
          </div>
        </div>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 sm:h-12 shrink-0 items-center justify-center gap-2 rounded-[4px] bg-[#ff6b35] px-5 sm:px-6 text-[12px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors whitespace-nowrap w-full sm:w-auto"
        >
          Get Reseller Access
          <ChevronRight className="h-4 w-4" />
        </motion.a>
      </motion.div>

      {/* Important notice */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-orange-50/40 border border-orange-100"
      >
        <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 border border-orange-100">
          <AlertCircle className="h-5 w-5 text-[#ff6b35]" />
        </div>
        <div>
          <h4 className="text-[#ff6b35] text-[13px] sm:text-[15px] font-bold mb-1">
            Important Notice
          </h4>
          <p className="text-zinc-600 text-[11px] sm:text-[14px] leading-snug sm:leading-relaxed">
            Resellers can only use Trex IPTV credits for creating and managing customer subscription lines through their reseller panel. Content access and streaming quality are handled entirely by the Trex IPTV server infrastructure on our end.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
