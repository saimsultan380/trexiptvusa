"use client";

import {
  LayoutDashboard,
  Infinity,
  Zap,
  RefreshCw,
  MonitorSmartphone,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    id: "01",
    icon: LayoutDashboard,
    title: "Clean and Simple Dashboard",
    description:
      "Manage all your clients, credits, subscriptions, and trials from one easy-to-use panel.",
  },
  {
    id: "02",
    icon: Infinity,
    title: "Non-Expiring Credits",
    description:
      "Your Trex IPTV reseller credits never expire, so you can make plans according to customers' requirements.",
  },
  {
    id: "03",
    icon: Zap,
    title: "Instant Account Activation",
    description:
      "Create and activate new Trex IPTV accounts for your clients in a matter of seconds.",
  },
  {
    id: "04",
    icon: RefreshCw,
    title: "Effortless Subscription Renewals",
    description:
      "Renew any client subscription with one click without touching their account details at all.",
  },
  {
    id: "05",
    icon: MonitorSmartphone,
    title: "Works on Every Device",
    description:
      "Your clients can stream Trex IPTV on Firestick, Smart TV, Android, iPhone, and more.",
  },
  {
    id: "06",
    icon: TrendingUp,
    title: "Grows With Your Business",
    description:
      "Start with a small client base and scale up to hundreds of clients without switching platforms.",
  },
];

export default function WhyChooseResellerPanelSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left — heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col text-center lg:text-left lg:sticky lg:top-28"
        >
          <span className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center lg:justify-start gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
            Why Choose Us
          </span>

          <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4">
            Why Choose <span className="text-[#ff6b35]">Trex IPTV</span> Reseller Panel?
          </h2>

          <div className="w-10 h-1 bg-[#ff6b35] rounded-full mb-4 mx-auto lg:mx-0" />

          <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed max-w-lg mx-auto lg:mx-0">
            Running an IPTV reseller business is easy when you have the right panel behind you. Trex IPTV gives you everything you need to start, manage, and grow your business without any tension.
          </p>
        </motion.div>

        {/* Right — numbered reasons */}
        <div className="lg:col-span-7 flex flex-col gap-2.5 sm:gap-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-xl border border-zinc-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-orange-100 hover:shadow-[0_8px_24px_rgba(255,107,53,0.08)] transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  <span className="text-[11px] sm:text-xs font-extrabold text-[#ff6b35]/70 leading-none">
                    {reason.id}.
                  </span>
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-orange-50 border border-orange-100">
                    <Icon className="h-5 w-5 text-[#ff6b35]" />
                  </div>
                </div>

                <div className="flex-1 min-w-0 pt-0.5">
                  <h3 className="text-[13px] sm:text-[15px] font-bold text-zinc-900 mb-1 leading-snug">
                    {reason.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] text-zinc-500 leading-snug sm:leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
