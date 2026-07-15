"use client";

import Image from "next/image";
import { MessageCircle, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import InstallationTabs from "@/components/InstallationTabs";
import TroubleshootingSection from "@/components/TroubleshootingSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import InstallationFAQ from "@/components/InstallationFAQ";

export default function InstallationGuideClient() {
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
                className="text-[26px] sm:text-5xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-zinc-950 mb-4 sm:mb-6"
              >
                Easy Guide to Set Up or Install{" "}
                <span className="text-[#ff6b35]">Trex IPTV</span> on any Compatible Devices in under 5 Minutes
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                className="text-zinc-600 text-[12px] sm:text-[14px] leading-relaxed mb-3"
              >
                An easy guide to setup Trex IPTV on any compatible devices. Getting started is simple. Just pick your device below and follow the steps.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-zinc-600 text-[12px] sm:text-[14px] leading-relaxed mb-3"
              >
                Every installation method on this page requires your Trex IPTV login details: the username, password, and server URL we send directly to your WhatsApp or email right after payment.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="text-zinc-600 text-[12px] sm:text-[14px] leading-relaxed mb-6 sm:mb-8"
              >
                This step-by-step guide helps you to install or set up Trex IPTV on Firestick, Android boxes, Android smartphones, Smart TV, iPhone or iOS, Windows PC, Mac, MAG Box, STB Emulator, Enigma2 &amp; Roku in under 5 minutes.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.36 }}
                className="grid grid-cols-3 gap-2 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/subscription-plans"
                  className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] bg-[#ff6b35] px-2 sm:px-6 text-[9px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors text-center leading-tight"
                >
                  <span className="sm:hidden">Plans</span>
                  <span className="hidden sm:inline">View Subscription Plans</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/#devices"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-1 sm:gap-2 rounded-[4px] border border-zinc-300 bg-white px-2 sm:px-6 text-[9px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors text-center leading-tight"
                >
                  <Monitor className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-zinc-500 shrink-0" />
                  <span className="sm:hidden">Devices</span>
                  <span className="hidden sm:inline">Compatible Devices</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I need help setting up Trex IPTV")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-1 sm:gap-2 rounded-[4px] border border-zinc-300 bg-white px-2 sm:px-6 text-[9px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors text-center leading-tight"
                >
                  <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 shrink-0" />
                  <span className="sm:hidden">WhatsApp</span>
                  <span className="hidden sm:inline">Get Set Up Help on WhatsApp</span>
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
                    src="/Easy Guide to Set Up or Install Trex IPTV.PNG"
                    alt="Easy Guide to Set Up or Install Trex IPTV"
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
        <InstallationTabs />
      </ScrollReveal>
      <ScrollReveal>
        <TroubleshootingSection />
      </ScrollReveal>
      <ScrollReveal>
        <InstallationFAQ />
      </ScrollReveal>
      <ScrollReveal>
        <InstallationCTASection />
      </ScrollReveal>
      <Footer />
    </div>
  );
}
