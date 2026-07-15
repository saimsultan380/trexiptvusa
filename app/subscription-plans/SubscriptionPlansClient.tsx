"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, Clock, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PlanIncludesSection from "@/components/PlanIncludesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PlanComparisonSection from "@/components/PlanComparisonSection";
import PlanComparisonTable from "@/components/PlanComparisonTable";
import PlanPickerSection from "@/components/PlanPickerSection";
import SupportedDevicesSection from "@/components/SupportedDevicesSection";
import SetupProcessSection from "@/components/SetupProcessSection";
import SubscriptionFAQ from "@/components/SubscriptionFAQ";
import SubscriptionCTASection from "@/components/SubscriptionCTASection";

export default function SubscriptionPlansClient() {
  const phoneNumber = "447482794475";

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="pt-28 pb-10 sm:pt-40 sm:pb-12 lg:pt-48 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col text-left order-1">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[26px] sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.12] text-zinc-950 mb-4 sm:mb-6"
              >
                Trex IPTV Subscription Plans | Buy at Very{" "}
                <span className="text-[#ff6b35]">Discounted Prices</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                className="text-zinc-600 text-[12px] sm:text-[15px] leading-relaxed mb-3"
              >
                Tired of paying too much for channels you never watch? Trex IPTV subscription works on all your devices with a simple setup and instant activation. Pick your plan, receive your login details within minutes, and start streaming in HD, UHD, and 4K from anywhere in the world.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-zinc-600 text-[12px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8"
              >
                Trex IPTV has a plan for everyone. You can choose a 1-month plan to test the service or a 1-year plan to save more money. After your payment is confirmed, your Trex IPTV account will be activated within seconds. You will also get an easy Trex IPTV setup guide and 24/7 customer support if you need help.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
                className="flex flex-row flex-wrap items-center gap-2 sm:gap-3"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#comparison"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-[4px] bg-[#ff6b35] px-4 sm:px-6 text-[11px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors whitespace-nowrap"
                >
                  View All Plans
                  <ChevronRight className="h-4 w-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to get my 24h free trial for Trex IPTV")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-[4px] border border-[#ff6b35] bg-white px-4 sm:px-6 text-[11px] sm:text-sm font-bold text-[#ff6b35] hover:bg-orange-50 transition-colors whitespace-nowrap"
                >
                  <Clock className="h-4 w-4" />
                  Get Free 24h Trial
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/installation-guide"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-[4px] border border-zinc-300 bg-white px-4 sm:px-6 text-[11px] sm:text-sm font-bold text-[#ff6b35] hover:bg-zinc-50 transition-colors whitespace-nowrap"
                >
                  <BookOpen className="h-4 w-4" />
                  Setup Guide
                </motion.a>
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
                    src="/Trex IPTV Subscription Plans at very Discounted Pricing.PNG"
                    alt="Trex IPTV Subscription Plans | Buy at Very Discounted Prices"
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
        <PlanComparisonSection />
      </ScrollReveal>

      <ScrollReveal>
        <PlanIncludesSection />
      </ScrollReveal>

      <ScrollReveal>
        <WhyChooseSection />
      </ScrollReveal>

      <ScrollReveal>
        <PlanComparisonTable />
      </ScrollReveal>

      <ScrollReveal>
        <PlanPickerSection variant="subscription" />
      </ScrollReveal>

      <ScrollReveal>
        <SupportedDevicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <SetupProcessSection variant="subscription" />
      </ScrollReveal>

      <ScrollReveal>
        <SubscriptionFAQ />
      </ScrollReveal>

      <ScrollReveal>
        <SubscriptionCTASection />
      </ScrollReveal>

      <Footer />
    </div>
  );
}
