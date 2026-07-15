"use client";

import React, { useState } from "react";
import {
  Check,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Headphones,
  ChevronRight,
  Snowflake,
  Tv,
  RefreshCw,
  MonitorSmartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const trustBadges = [
  { icon: ShieldCheck, label: "30 Day Risk-Free Guarantee" },
  { icon: Zap, label: "Instant Account Activation" },
  { icon: Headphones, label: "24/7 Priority Support" },
];

const featureIcons: Record<string, React.ReactNode> = {
  "Anti-Freeze Technology": <Snowflake className="h-3.5 w-3.5" />,
  "24/7 Priority Support": <Headphones className="h-3.5 w-3.5" />,
  "EPG & Catch-Up TV": <Tv className="h-3.5 w-3.5" />,
  "Daily Content Updates": <RefreshCw className="h-3.5 w-3.5" />,
  "Multi-Device Support": <MonitorSmartphone className="h-3.5 w-3.5" />,
  "Instant Account Activation": <Zap className="h-3.5 w-3.5" />,
};

const plans = [
  {
    duration: "1 MONTH",
    priceEur: 12,
    priceUsd: 13.2,
    features: [
      "Anti-Freeze Technology",
      "24/7 Priority Support",
      "EPG & Catch-Up TV",
      "Daily Content Updates",
      "Multi-Device Support",
      "Instant Account Activation",
    ],
    bestFor: [
      "First time Trex IPTV users",
      "Short term streaming needs",
      "Trial based setup on your devices",
    ],
    recommended: false,
    whatsappMessage: "I need 1 month Trex IPTV subscription",
  },
  {
    duration: "3 MONTHS",
    priceEur: 25,
    priceUsd: 27.5,
    features: [
      "Anti-Freeze Technology",
      "24/7 Priority Support",
      "Multi-Device Support",
      "Daily Content Updates",
      "EPG & Catch-Up TV",
      "Instant Account Activation",
    ],
    bestFor: [
      "Regular Trex IPTV users",
      "Consistent daily streaming",
      "Flexible subscription management",
    ],
    recommended: false,
    whatsappMessage: "I need 3 month Trex IPTV subscription",
  },
  {
    duration: "6 MONTHS",
    priceEur: 40,
    priceUsd: 44,
    features: [
      "Multi-Device Support",
      "Anti-Freeze Technology",
      "Instant Account Activation",
      "24/7 Priority Support",
      "EPG & Catch-Up TV",
      "Daily Content Updates",
    ],
    bestFor: [
      "Extended streaming access",
      "Frequent daily viewers",
      "Reduced renewal frequency",
    ],
    recommended: true,
    whatsappMessage: "I need 6 month Trex IPTV subscription",
  },
  {
    duration: "12 MONTHS",
    priceEur: 60,
    priceUsd: 66,
    features: [
      "24/7 Priority Support",
      "Instant Account Activation",
      "EPG & Catch-Up TV",
      "Anti-Freeze Technology",
      "Daily Content Updates",
      "Multi-Device Support",
    ],
    bestFor: [
      "Long term Trex IPTV users",
      "Maximum savings and value",
      "Consistent full year access",
    ],
    recommended: false,
    whatsappMessage: "I need 12 month Trex IPTV subscription",
  },
];

function formatUsd(amount: number) {
  return amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2);
}

function formatPrice(plan: (typeof plans)[0], currency: "eur" | "usd") {
  if (currency === "eur") {
    return { symbol: "€", amount: plan.priceEur.toFixed(0) };
  }
  return { symbol: "$", amount: formatUsd(plan.priceUsd) };
}

export default function PlanComparisonSection() {
  const phoneNumber = "447482794475";
  const [currency, setCurrency] = useState<"eur" | "usd">("eur");

  return (
    <section id="comparison" className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      {/* Header — stacked on top */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 sm:mb-12 max-w-3xl mx-auto text-center"
      >
        <span className="inline-flex items-center justify-center gap-1.5 text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3">
          TREX IPTV
          <ChevronRight className="h-3.5 w-3.5" />
        </span>

        <h2 className="text-[24px] sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-3 sm:mb-4">
          Choose a Trex IPTV Subscription Plan According to Your{" "}
          <span className="text-[#ff6b35]">Requirements &amp; Needs.</span>
        </h2>

        <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-5 sm:mb-6">
          Pick the plan that matches your streaming needs.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 items-center justify-center">
          {trustBadges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div key={i} className="flex items-center justify-center gap-2">
                <Icon className="h-4 w-4 text-[#ff6b35] shrink-0" />
                <span className="text-[12px] sm:text-[13px] font-semibold text-zinc-800">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Currency toggle */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1 p-1 rounded-full border border-zinc-200 bg-zinc-50">
          <button
            type="button"
            onClick={() => setCurrency("eur")}
            className={`px-5 py-1.5 rounded-full text-[12px] sm:text-[13px] font-bold transition-all duration-200 ${
              currency === "eur"
                ? "bg-[#ff6b35] text-white shadow-sm"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            € EUR
          </button>
          <button
            type="button"
            onClick={() => setCurrency("usd")}
            className={`px-5 py-1.5 rounded-full text-[12px] sm:text-[13px] font-bold transition-all duration-200 ${
              currency === "usd"
                ? "bg-[#ff6b35] text-white shadow-sm"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            $ USD
          </button>
        </div>
      </div>

      {/* Pricing cards — below header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch justify-items-center sm:justify-items-stretch">
        {plans.map((plan, index) => {
          const { symbol, amount } = formatPrice(plan, currency);
          return (
          <motion.div
            key={plan.duration}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className={`relative flex flex-col w-full max-w-[300px] sm:max-w-none rounded-2xl border bg-white p-5 sm:p-6 transition-all duration-300 ${
              plan.recommended
                ? "border-[#ff6b35] shadow-[0_16px_48px_rgba(255,107,53,0.12)]"
                : "border-zinc-200 shadow-sm hover:border-orange-200 hover:shadow-md"
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff6b35] text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm whitespace-nowrap z-10">
                ★ BEST VALUE
              </div>
            )}

            {/* Duration */}
            <p className="text-center text-[11px] sm:text-xs font-bold tracking-widest text-zinc-900 uppercase mb-4 mt-1">
              {plan.duration}
            </p>

            {/* Price */}
            <div className="text-center mb-3">
              <motion.p
                key={`${plan.duration}-${currency}`}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`text-[28px] sm:text-[34px] font-extrabold leading-none ${plan.recommended ? "text-[#ff6b35]" : "text-[#ff6b35]"}`}
              >
                {symbol}{amount}
              </motion.p>
            </div>

            {/* Guarantee */}
            <div className="flex items-center justify-center gap-1.5 mb-5 py-1.5 px-2 rounded-md bg-orange-50/80 border border-orange-100">
              <ShieldCheck className="h-3.5 w-3.5 text-[#ff6b35] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-500">
                30 Day Risk-Free Guarantee
              </span>
            </div>

            {/* Features */}
            <div className="space-y-2.5 mb-5 flex-grow">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#ff6b35]">
                    {featureIcons[feature]}
                  </div>
                  <span className="text-[11px] sm:text-[12px] text-zinc-600 font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Best for */}
            <div className="mb-5 pt-4 border-t border-zinc-100">
              <p className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wide mb-2.5">
                Best For:
              </p>
              <ul className="space-y-2">
                {plan.bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#ff6b35] mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[11px] sm:text-[12px] text-zinc-600 font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <motion.a
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(plan.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between h-11 w-full rounded-lg px-4 text-[12px] sm:text-[13px] font-bold transition-all ${
                plan.recommended
                  ? "bg-[#ff6b35] text-white hover:bg-[#ff5722] shadow-md shadow-orange-500/20"
                  : "bg-white text-[#ff6b35] border border-[#ff6b35] hover:bg-orange-50"
              }`}
            >
              <span>Activate Now</span>
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
}
