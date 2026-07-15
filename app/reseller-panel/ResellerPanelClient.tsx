"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, MessageCircle, Coins, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ResellerManagementSection from "@/components/ResellerManagementSection";
import ResellerCreditsSection from "@/components/ResellerCreditsSection";
import ResellerPanelToolsSection from "@/components/ResellerPanelToolsSection";
import WhyChooseResellerPanelSection from "@/components/WhyChooseResellerPanelSection";
import ResellerPricingSection from "@/components/ResellerPricingSection";
import ResellerSetupSection from "@/components/ResellerSetupSection";
import ResellerFAQSection from "@/components/ResellerFAQSection";
import ResellerFinalCTASection from "@/components/ResellerFinalCTASection";

const heroFeatures = [
  {
    icon: Coins,
    title: "Non-Expiring Credits",
    desc: "Add once, use anytime. Credits never expire.",
  },
  {
    icon: Users,
    title: "Sub-Reseller Support",
    desc: "Create sub-resellers and grow your network.",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    desc: "Activate accounts and services in seconds.",
  },
];

export default function ResellerPanelClient() {
  const phoneNumber = "447482794475";
  const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to get the Trex IPTV reseller panel",
  )}`;

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="pt-28 pb-10 sm:pt-40 sm:pb-12 lg:pt-48 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col text-left order-1">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-1.5"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                Trex IPTV Reseller Opportunity
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className="text-[26px] sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.12] text-zinc-950 mb-4 sm:mb-6"
              >
                Start Your Own IPTV Business With the{" "}
                <span className="text-[#ff6b35]">Trex IPTV Reseller Panel</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                className="text-zinc-600 text-[12px] sm:text-[15px] leading-relaxed mb-3"
              >
                Looking for a reliable Trex IPTV reseller opportunity with a panel that makes your business easy. The Trex IPTV reseller panel gives you full control of the dashboard. So, you can create customer accounts, manage subscriptions, issue free trials, handle renewals, and monitor everything from one clean, organised place.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-zinc-600 text-[12px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8"
              >
                Whether you are a new IPTV reseller or already managing hundreds of clients, our panel gives you full control of pricing, subscriptions &amp; profits. Moreover, you will get non-expiring credits and 100% of your own profits.
              </motion.p>

              {/* CTA Buttons — all three in one row */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
                className="grid grid-cols-3 gap-1.5 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#pricing"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-1 sm:gap-2 rounded-[4px] bg-[#ff6b35] px-2 sm:px-6 text-[9px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors text-center leading-tight"
                >
                  <span className="sm:hidden">View Plans</span>
                  <span className="hidden sm:inline">View Reseller Plans</span>
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0 hidden sm:inline" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-1 sm:gap-2 rounded-[4px] border border-zinc-300 bg-white px-2 sm:px-6 text-[9px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors text-center leading-tight"
                >
                  <span className="sm:hidden">Get Panel</span>
                  <span className="hidden sm:inline">Get Your Panel</span>
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0 text-zinc-500 hidden sm:inline" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-1 sm:gap-2 rounded-[4px] border border-zinc-300 bg-white px-2 sm:px-6 text-[9px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors text-center leading-tight"
                >
                  <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 shrink-0" />
                  <span className="sm:hidden">WhatsApp</span>
                  <span className="hidden sm:inline">WhatsApp Us</span>
                </motion.a>
              </motion.div>

              {/* Feature highlights — simple compact row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="mt-5 sm:mt-6 pt-4 border-t border-zinc-100 grid grid-cols-2 lg:flex lg:items-start lg:justify-between lg:gap-5"
              >
                {heroFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="flex items-start gap-2 sm:gap-2.5 lg:flex-1 min-w-0 py-1"
                    >
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-md bg-orange-50">
                        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ff6b35]" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[11px] sm:text-[13px] font-bold text-zinc-900 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-[9px] sm:text-[11px] text-zinc-500 leading-snug mt-0.5">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="lg:col-span-6 relative flex justify-center lg:justify-end order-2 mt-6 lg:mt-0"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[560px]">
                <div className="relative w-full aspect-[1402/1122]">
                  <Image
                    src="/Start Your Own IPTV Business With the Trex IPTV Reseller Panel.PNG"
                    alt="Start Your Own IPTV Business With the Trex IPTV Reseller Panel"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <ScrollReveal>
        <ResellerManagementSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerCreditsSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerPanelToolsSection />
      </ScrollReveal>

      <ScrollReveal>
        <WhyChooseResellerPanelSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerSetupSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerPricingSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerFAQSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerFinalCTASection />
      </ScrollReveal>

      <Footer />
    </div>
  );
}
