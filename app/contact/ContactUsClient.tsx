"use client";

import Image from "next/image";
import { MessageCircle, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ContactFreeTrialSection from "@/components/ContactFreeTrialSection";
import ContactSupportSection from "@/components/ContactSupportSection";
import ContactTrialDevicesSection from "@/components/ContactTrialDevicesSection";
import ContactFAQSection from "@/components/ContactFAQSection";
import ContactFinalCTASection from "@/components/ContactFinalCTASection";

export default function ContactUsClient() {
  const phoneNumber = "447482794475";
  const trialHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to get my 24h free trial for Trex IPTV",
  )}`;
  const supportHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I need help with Trex IPTV",
  )}`;

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-10 sm:pt-40 sm:pb-12 lg:pt-48 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col text-left order-1">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[26px] sm:text-5xl lg:text-[48px] font-bold tracking-tight leading-[1.12] text-zinc-950 mb-4 sm:mb-6"
              >
                Contact Us for <span className="text-[#ff6b35]">Trex IPTV</span> Free Trial, Setup Guidance &amp; Support
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                className="text-zinc-600 text-[12px] sm:text-[14px] leading-relaxed mb-3"
              >
                Have a question about your Trex IPTV subscription, or want to try Trex IPTV before buying a plan? Chat With Us on WhatsApp, and we will set up your free 24 hour trial within minutes. Our team is available 24 hours a day, 7 days a week, and ready to help you with anything you need.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-zinc-600 text-[12px] sm:text-[14px] leading-relaxed mb-3"
              >
                Already a subscriber and need help with setup, activation, or device installation? We provide full support for device installation, setup guidance, portal login configuration, account activation, and subscription renewals.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="text-zinc-600 text-[12px] sm:text-[14px] leading-relaxed mb-6 sm:mb-8"
              >
                Real people behind every single answer. Every single message gets a genuine human response within minutes.
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
                  href={trialHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-1 sm:gap-2 rounded-[4px] bg-[#ff6b35] px-2 sm:px-6 text-[9px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors text-center leading-tight"
                >
                  <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                  <span className="sm:hidden">Free Trial</span>
                  <span className="hidden sm:inline">Request Free Trial</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={supportHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-1 sm:gap-2 rounded-[4px] border border-[#ff6b35] bg-white px-2 sm:px-6 text-[9px] sm:text-sm font-bold text-[#ff6b35] hover:bg-orange-50 transition-colors text-center leading-tight"
                >
                  <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 shrink-0" />
                  <span className="sm:hidden">WhatsApp</span>
                  <span className="hidden sm:inline">WhatsApp Us</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/installation-guide"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-1 sm:gap-2 rounded-[4px] border border-zinc-300 bg-white px-2 sm:px-6 text-[9px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors text-center leading-tight"
                >
                  <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-zinc-500 shrink-0" />
                  <span className="sm:hidden">Setup</span>
                  <span className="hidden sm:inline">Setup Guide</span>
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
                    src="/Contact Us for Trex IPTV Free Trial, Setup Guidance & Support.PNG"
                    alt="Contact Us for Trex IPTV Free Trial, Setup Guidance and Support"
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
        <ContactFreeTrialSection />
      </ScrollReveal>

      <ScrollReveal>
        <ContactSupportSection />
      </ScrollReveal>

      <ScrollReveal>
        <ContactTrialDevicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <ContactFAQSection />
      </ScrollReveal>

      <ScrollReveal>
        <ContactFinalCTASection />
      </ScrollReveal>

      <Footer />
    </div>
  );
}
