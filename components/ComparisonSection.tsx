"use client";

import { CheckCircle2, XCircle, Link2, ShieldCheck, Server, Lock, Wifi, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const rows = [
  {
    icon: <Link2 className="h-4 w-4" />,
    feature: "Source",
    other: "Resellers — not the actual source",
    trex: "The original provider since day one",
  },
  {
    icon: <Wifi className="h-4 w-4" />,
    feature: "Reliability",
    other: "Here today, gone tomorrow. Accounts vanish without warning, and your money goes with them",
    trex: "Established and trusted since 2014. Real business, real people, real track record behind every subscription.",
  },
  {
    icon: <Server className="h-4 w-4" />,
    feature: "Delivery Path",
    other: "More hops, more buffering. Your stream travels through multiple third-party servers before reaching your screen.",
    trex: "You connect directly to our server. Shorter path means faster delivery, clearer picture, and zero buffering.",
  },
  {
    icon: <Lock className="h-4 w-4" />,
    feature: "Privacy",
    other: "Your data passes through unknown hands. Nobody tells you who is actually processing your personal information.",
    trex: "Your privacy stays fully protected. No third party ever touches your account data or viewing activity.",
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    feature: "Backup Protection",
    other: "No backup when things go wrong. Service goes down, and there is nobody to call or answer.",
    trex: "Automatic server failover guaranteed. If anything disrupts your stream, we switch you to a backup server instantly.",
  },
  {
    icon: <DollarSign className="h-4 w-4" />,
    feature: "Pricing",
    other: "You pay inflated reseller prices. Every middleman adds their own markup on top of the actual cost.",
    trex: "Direct pricing with zero markup. You pay what the service actually costs and get the best value possible.",
  },
];

const badges = [
  {
    icon: <CheckCircle2 className="h-5 w-5 text-[#ff6b35]" />,
    title: "Direct Provider",
    desc: "No middlemen. Just pure access.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-[#ff6b35]" />,
    title: "Automatic Failover",
    desc: "Seamless backups, zero interruptions.",
  },
  {
    icon: <DollarSign className="h-5 w-5 text-[#ff6b35]" />,
    title: "Zero Markup",
    desc: "Better value. Transparent pricing.",
  },
];

export default function ComparisonSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col"
        >
          <span className="text-[#ff6b35] text-xs font-bold tracking-widest uppercase mb-3">
            WHY TREX IPTV?
          </span>
          <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight text-zinc-900 mb-4">
            Skip the Middleman; Stream Direct With <span className="text-[#ff6b35]">Trex IPTV</span>
          </h2>
          <div className="w-10 h-1 bg-[#ff6b35] rounded-full mb-5" />
          <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed">
            A direct, private, and reliable streaming experience without reseller markup.
          </p>
        </motion.div>

        {/* Right Column — Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-8 flex flex-col gap-6"
        >
          {/* Table */}
          <div className="rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">

            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-white border-b border-zinc-100">
              {/* empty feature col */}
              <div className="px-4 py-3 sm:px-5 sm:py-4" />

              {/* Other IPTV header */}
              <div className="flex items-center justify-center gap-2 px-3 py-3 sm:px-4 sm:py-4 border-l border-zinc-100">
                <XCircle className="h-4 w-4 text-zinc-400 shrink-0" />
                <span className="text-[11px] sm:text-[13px] font-bold text-zinc-600 whitespace-nowrap">Other IPTV Websites</span>
              </div>

              {/* Trex IPTV header */}
              <div className="flex items-center justify-center gap-2 px-3 py-3 sm:px-4 sm:py-4 bg-[#ff6b35] border-l border-orange-400">
                <CheckCircle2 className="h-4 w-4 text-white shrink-0" />
                <span className="text-[11px] sm:text-[13px] font-bold text-white whitespace-nowrap">Trex IPTV</span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_1fr_1fr] ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/60"} border-b border-zinc-100 last:border-0`}
              >
                {/* Feature label */}
                <div className="flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#ff6b35]">
                    {row.icon}
                  </div>
                  <span className="text-[11px] sm:text-[13px] font-bold text-zinc-800">{row.feature}</span>
                </div>

                {/* Other IPTV value */}
                <div className="flex items-center px-3 py-3 sm:px-4 sm:py-3.5 border-l border-zinc-100">
                  <p className="text-[10px] sm:text-[12px] text-zinc-500 leading-snug">{row.other}</p>
                </div>

                {/* Trex IPTV value */}
                <div className="flex items-start gap-1.5 px-3 py-3 sm:px-4 sm:py-3.5 border-l border-orange-100 bg-orange-50/40">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#ff6b35] shrink-0 mt-0.5" />
                  <p className="text-[10px] sm:text-[12px] text-zinc-700 font-medium leading-snug">{row.trex}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Three badges */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-1.5 sm:flex-row sm:items-start sm:text-left sm:gap-2.5 p-2.5 sm:p-4 rounded-xl border border-zinc-200 bg-white"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50">
                  {badge.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10px] sm:text-[13px] font-bold text-zinc-900 leading-tight">{badge.title}</h4>
                  <p className="text-[9px] sm:text-[11px] text-zinc-500 mt-0.5 leading-snug">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-flex h-12 sm:h-13 items-center justify-center rounded-full bg-[#ff6b35] px-8 sm:px-12 text-[13px] sm:text-sm font-bold text-white shadow-md shadow-orange-500/25 hover:bg-[#ff5722] transition-colors"
            >
              Activate Trex IPTV →
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
