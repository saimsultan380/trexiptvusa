"use client";

import { WHATSAPP_NUMBER } from "@/lib/site";

import { useState } from "react";
import { Check, Calendar, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "1 Month",
    priceEur: 12,
    priceUsd: 13.20,
    features: [
      "Anti-Freeze Technology",
      "24/7 Priority Support",
      "EPG & Catch-Up TV",
      "Daily Content Updates",
      "Multi-Device Support",
      "Instant Account Activation",
    ],
    recommended: false,
    whatsappMessage: "I need 1 month Trex IPTV subscription",
  },
  {
    name: "3 Months",
    priceEur: 25,
    priceUsd: 27.50,
    features: [
      "Anti-Freeze Technology",
      "24/7 Priority Support",
      "Multi-Device Support",
      "Daily Content Updates",
      "EPG & Catch-Up TV",
      "Instant Account Activation",
    ],
    recommended: false,
    whatsappMessage: "I need 3 month Trex IPTV subscription",
  },
  {
    name: "6 Months",
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
    recommended: true,
    whatsappMessage: "I need 6 month Trex IPTV subscription",
  },
  {
    name: "12 Months",
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
    recommended: false,
    whatsappMessage: "I need 12 month Trex IPTV subscription",
  },
];

export default function PricingSection() {
  const phoneNumber = WHATSAPP_NUMBER;
  const [currency, setCurrency] = useState<"eur" | "usd">("eur");

  function formatPrice(plan: typeof plans[0]) {
    if (currency === "eur") {
      return { symbol: "€", amount: plan.priceEur.toFixed(0) };
    }
    return { symbol: "$", amount: plan.priceUsd % 1 === 0 ? plan.priceUsd.toFixed(0) : plan.priceUsd.toFixed(2) };
  }

  return (
    <section id="pricing" className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-28 bg-white overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 sm:mb-14"
      >
        <span className="text-[#ff6b35] text-[10px] sm:text-sm font-bold tracking-widest uppercase mb-3 block">
          ★ BEST DISCOUNTED PLANS
        </span>
        <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-3 sm:mb-4">
          Choose the Best Discounted <span className="text-[#ff6b35]">Trex IPTV</span> Plan
        </h2>
        <p className="text-zinc-500 text-[12px] sm:text-[15px] font-medium max-w-xl mx-auto mb-6 sm:mb-8">
          Premium streaming at unbeatable rates. No contracts, no hidden fees, instant activation.
        </p>

        {/* Currency Toggle */}
        <div className="inline-flex items-center gap-1 p-1 rounded-full border border-zinc-200 bg-zinc-50">
          <button
            onClick={() => setCurrency("eur")}
            className={`px-5 py-1.5 rounded-full text-[13px] font-bold transition-all duration-200 ${
              currency === "eur"
                ? "bg-[#ff6b35] text-white shadow-sm"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            € EUR
          </button>
          <button
            onClick={() => setCurrency("usd")}
            className={`px-5 py-1.5 rounded-full text-[13px] font-bold transition-all duration-200 ${
              currency === "usd"
                ? "bg-[#ff6b35] text-white shadow-sm"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            $ USD
          </button>
        </div>
      </motion.div>

      {/* Cards — stacked on mobile, grid on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch justify-items-center sm:justify-items-stretch">
        {plans.map((plan, index) => {
          const { symbol, amount } = formatPrice(plan);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col w-full max-w-[300px] sm:max-w-none p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                plan.recommended
                  ? "bg-white border-[#ff6b35] shadow-[0_20px_50px_rgba(255,107,53,0.15)]"
                  : "bg-white border-zinc-200 shadow-sm hover:border-orange-200 hover:shadow-md"
              }`}
            >
              {/* Most Popular badge — sits above the card */}
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ff6b35] text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm whitespace-nowrap z-20">
                  Most Popular
                </div>
              )}

              {/* Plan icon + name row */}
              <div className="flex items-center gap-2.5 mb-4 mt-1">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                  plan.recommended
                    ? "bg-orange-50 border-orange-200 text-[#ff6b35]"
                    : "bg-zinc-50 border-zinc-100 text-zinc-400"
                }`}>
                  <Calendar className="h-4 w-4" />
                </div>
                <h3 className="text-[14px] sm:text-[15px] font-bold text-zinc-900">{plan.name}</h3>
              </div>

              {/* Price */}
              <div className="mb-1">
                <motion.div
                  key={currency}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`text-[36px] sm:text-[40px] font-extrabold leading-none ${
                    plan.recommended ? "text-[#ff6b35]" : "text-zinc-900"
                  }`}
                >
                  {symbol}{amount}
                </motion.div>
              </div>

              {/* Guarantee badge */}
              <div className={`flex items-center gap-1.5 mt-3 mb-4 py-1.5 px-2.5 rounded-md border ${
                plan.recommended
                  ? "bg-orange-50 border-orange-200"
                  : "bg-orange-50 border-orange-100"
              }`}>
                <ShieldCheck className="h-3.5 w-3.5 text-[#ff6b35] shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#ff6b35]">
                  30 Day Risk-Free Guarantee
                </span>
              </div>

              {/* Features */}
              <div className="space-y-2.5 mb-6 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2">
                    <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                      plan.recommended ? "bg-[#ff6b35] text-white" : "bg-orange-100 text-[#ff6b35]"
                    }`}>
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[11px] sm:text-[13px] text-zinc-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between h-11 w-full rounded-xl px-4 text-[13px] font-bold transition-all ${
                  plan.recommended
                    ? "bg-[#ff6b35] text-white hover:bg-[#ff5722] shadow-md shadow-orange-500/25"
                    : "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50"
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
