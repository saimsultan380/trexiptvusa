"use client";

import Image from "next/image";
import {
  ClipboardList,
  CreditCard,
  Download,
  KeyRound,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";

const homeSteps = [
  {
    id: "01",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Pick Your Plan",
    description:
      "Select a 1, 3, 6, or 12-month Trex IPTV plan and choose how many devices you need.",
  },
  {
    id: "02",
    icon: <CreditCard className="h-5 w-5" />,
    title: "Complete Payment",
    description:
      "Pay securely via Card, Bank Transfer, Stripe, Wise, Google Pay, Shopify, PayPal, World Remit, or cryptocurrency. Your order will be processed immediately.",
  },
  {
    id: "03",
    icon: <KeyRound className="h-5 w-5" />,
    title: "Receive Trex IPTV Login",
    description:
      "You will receive your Trex IPTV login credentials instantly via email or WhatsApp after payment.",
  },
  {
    id: "04",
    icon: <Play className="h-5 w-5" />,
    title: "Start Watching IPTV",
    description:
      "Enter your Trex IPTV login details into the app and unlock channels right away.",
  },
];

const subscriptionSteps = [
  {
    id: "01",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Pick Your Trex IPTV Plan",
    description:
      "Choose the subscription plan that best suits your requirements.",
  },
  {
    id: "02",
    icon: <CreditCard className="h-5 w-5" />,
    title: "Complete Your Payment",
    description:
      "Pay securely and receive your login details almost immediately.",
  },
  {
    id: "03",
    icon: <Download className="h-5 w-5" />,
    title: "Install Your Preferred IPTV Player",
    description:
      "Download any compatible IPTV player app on your device.",
  },
  {
    id: "04",
    icon: <KeyRound className="h-5 w-5" />,
    title: "Enter Your Trex IPTV Login Credentials",
    description:
      "Add your username, password, and server URL into the app.",
  },
  {
    id: "05",
    icon: <Play className="h-5 w-5" />,
    title: "Start Streaming Right Away",
    description:
      "Browse all the channels and enjoy buffer free streaming instantly.",
  },
];

type SetupProcessSectionProps = {
  variant?: "home" | "subscription";
};

export default function SetupProcessSection({
  variant = "home",
}: SetupProcessSectionProps = {}) {
  const phoneNumber = "447482794475";
  const isSubscription = variant === "subscription";
  const steps = isSubscription ? subscriptionSteps : homeSteps;
  const gridCols = isSubscription
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4";

  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      {/* Header row: text left, visual right */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col"
        >
          <span className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
            {isSubscription
              ? "Simple Setup Process for Trex IPTV Subscription Plans"
              : "How It Works — 4 Easy Steps"}
          </span>
          <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-zinc-900 max-w-xl">
            Streaming With <span className="text-[#ff6b35]">Trex IPTV</span> in Under 4 Minutes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-[180px] sm:max-w-[220px] lg:w-48 aspect-square relative shrink-0 mx-auto lg:mx-0"
        >
          <Image
            src="/general.PNG"
            alt="Trex IPTV setup process"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Step cards with connector line */}
      <div className="relative mb-8 sm:mb-14">
        <div
          className="hidden xl:block absolute top-[52px] left-[10%] right-[10%] h-px bg-[#ff6b35]/30 z-0"
          aria-hidden
        />

        <div className={`grid ${gridCols} gap-2.5 sm:gap-4 relative z-10`}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="relative flex flex-row sm:flex-col gap-3 sm:gap-0 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white hover:border-orange-200 hover:shadow-sm transition-all"
            >
              {index < steps.length - 1 && (
                <div className="hidden xl:flex absolute -right-2 top-[44px] z-20 items-center justify-center w-4 h-4">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-[#ff6b35]/50 bg-white" />
                </div>
              )}

              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-orange-50 text-[#ff6b35] border border-orange-100 sm:mb-4">
                {step.icon}
              </div>

              <div className="flex-1 min-w-0 sm:flex-none">
                <div className="flex items-baseline gap-2 mb-1 sm:mb-2">
                  <span className="text-lg sm:text-[26px] font-extrabold text-[#ff6b35] leading-none">
                    {step.id}
                  </span>
                  <h3 className="text-[12px] sm:text-[14px] font-bold text-zinc-900 leading-snug sm:hidden">
                    {step.title}
                  </h3>
                </div>

                <h3 className="hidden sm:block text-[14px] font-bold text-zinc-900 mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-[11px] sm:text-[12px] text-zinc-500 leading-snug sm:leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Buttons + note */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <div className="flex flex-row flex-wrap items-center justify-center gap-3">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to get my 24h free trial for Trex IPTV")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-7 text-[13px] sm:text-sm font-bold text-white hover:bg-zinc-800 transition-colors whitespace-nowrap"
          >
            Start Free Trial →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#comparison"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-7 text-[13px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors whitespace-nowrap"
          >
            View Plans →
          </motion.a>
        </div>
        <p className="text-zinc-400 text-[12px] font-medium flex items-center gap-1.5">
          <span className="text-[#ff6b35]">✓</span> No credit card required.
          Cancel anytime.
        </p>
      </motion.div>
    </section>
  );
}
