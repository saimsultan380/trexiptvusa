"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const comparisonData = [
  {
    plan: "1 Month",
    bestFor: "First Time and Short Term Users",
    duration: "1 Month",
    setup: "Included Free",
    priceEur: 12,
    priceUsd: 13.2,
    support: "24/7 WhatsApp",
    value: "Flexible",
  },
  {
    plan: "3 Months",
    bestFor: "Regular Daily Streamers",
    duration: "3 Months",
    setup: "Included Free",
    priceEur: 25,
    priceUsd: 27.5,
    support: "24/7 WhatsApp",
    value: "Balanced",
  },
  {
    plan: "6 Months",
    bestFor: "Frequent and Extended Viewers",
    duration: "6 Months",
    setup: "Included Free",
    priceEur: 40,
    priceUsd: 44,
    support: "24/7 WhatsApp",
    value: "Popular",
  },
  {
    plan: "12 Months",
    bestFor: "Long Term Trex IPTV Users",
    duration: "12 Months",
    setup: "Included Free",
    priceEur: 60,
    priceUsd: 66,
    support: "24/7 WhatsApp",
    value: "Best Value",
  },
];

function formatUsd(amount: number) {
  return amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2);
}

function PriceCell({ priceEur, priceUsd }: { priceEur: number; priceUsd: number }) {
  return (
    <>
      <span className="text-[12px] sm:text-[14px] font-bold text-[#ff6b35]">
        €{priceEur}
      </span>
      <span className="text-[11px] sm:text-[13px] font-medium text-zinc-500">
        {" "}
        / ${formatUsd(priceUsd)}
      </span>
    </>
  );
}

function ValueBadge({ value }: { value: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#ff6b35] px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[12px] font-bold text-[#ff6b35]">
      {value}
    </span>
  );
}

export default function PlanComparisonTable() {
  return (
    <section
      id="comparison-table"
      className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left — heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col text-center lg:text-left"
        >
          <span className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4 block">
            Trex IPTV Comparison
          </span>

          <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4">
            Compare Trex IPTV Subscription Plans
          </h2>

          <div className="w-10 h-1 bg-[#ff6b35] rounded-full mb-4 mx-auto lg:mx-0" />

          <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed max-w-sm mx-auto lg:mx-0">
            Choose the plan that best matches your viewing habits, budget, and
            streaming needs.
          </p>
        </motion.div>

        {/* Right — table / cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-8 w-full"
        >
          {/* Mobile & tablet — stacked cards, no horizontal scroll */}
          <div className="flex flex-col gap-4 lg:hidden">
            {comparisonData.map((item, index) => (
              <motion.div
                key={item.plan}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-zinc-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#ff6b35] shrink-0 stroke-[2]" />
                    <span className="text-[15px] font-bold text-zinc-900">
                      {item.plan}
                    </span>
                  </div>
                  <ValueBadge value={item.value} />
                </div>

                <dl className="space-y-3">
                  <div>
                    <dt className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                      Best For
                    </dt>
                    <dd className="text-[13px] font-medium text-zinc-600">
                      {item.bestFor}
                    </dd>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <dt className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                        Duration
                      </dt>
                      <dd className="text-[13px] font-medium text-zinc-600">
                        {item.duration}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                        Setup
                      </dt>
                      <dd className="text-[13px] font-medium text-zinc-600">
                        {item.setup}
                      </dd>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <dt className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                        Price
                      </dt>
                      <dd>
                        <PriceCell priceEur={item.priceEur} priceUsd={item.priceUsd} />
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                        Support
                      </dt>
                      <dd className="text-[13px] font-medium text-zinc-600">
                        {item.support}
                      </dd>
                    </div>
                  </div>
                </dl>
              </motion.div>
            ))}
          </div>

          {/* Desktop — full table */}
          <div className="hidden lg:block w-full bg-white rounded-2xl border border-zinc-100 shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="border-b border-zinc-100">
                  {[
                    "Plan",
                    "Best For",
                    "Duration",
                    "Setup",
                    "Price",
                    "Support",
                    "Value",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-3 xl:px-5 py-4 text-[10px] xl:text-[11px] font-bold text-zinc-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {comparisonData.map((item, index) => (
                  <motion.tr
                    key={item.plan}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className="hover:bg-zinc-50/40 transition-colors"
                  >
                    <td className="px-3 xl:px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-[#ff6b35] shrink-0 stroke-[2]" />
                        <span className="text-[13px] xl:text-[14px] font-bold text-zinc-900">
                          {item.plan}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 xl:px-5 py-4 text-[12px] xl:text-[13px] font-medium text-zinc-600 leading-snug">
                      {item.bestFor}
                    </td>
                    <td className="px-3 xl:px-5 py-4 text-[12px] xl:text-[13px] font-medium text-zinc-600">
                      {item.duration}
                    </td>
                    <td className="px-3 xl:px-5 py-4 text-[12px] xl:text-[13px] font-medium text-zinc-600">
                      {item.setup}
                    </td>
                    <td className="px-3 xl:px-5 py-4">
                      <PriceCell priceEur={item.priceEur} priceUsd={item.priceUsd} />
                    </td>
                    <td className="px-3 xl:px-5 py-4 text-[12px] xl:text-[13px] font-medium text-zinc-600">
                      {item.support}
                    </td>
                    <td className="px-3 xl:px-5 py-4">
                      <ValueBadge value={item.value} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
