"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Tv,
  Gauge,
  UserX,
  AlertTriangle,
  PackageX,
  CreditCard,
  Monitor,
  Link2,
  Wifi,
  CalendarDays,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const troubleshootingItems: {
  question: string;
  answer: string;
  icon: LucideIcon;
}[] = [
  {
    question: "Channels Not Loading",
    answer:
      "Re-enter your Trex IPTV login credentials carefully and make sure no extra spaces are included.",
    icon: Tv,
  },
  {
    question: "Buffering During Playback",
    answer:
      "Switch to a wired Ethernet connection and confirm your speed is at least 25 Mbps.",
    icon: Gauge,
  },
  {
    question: "Wrong Credentials Error",
    answer:
      "Copy your username and password directly from WhatsApp or email instead of typing manually.",
    icon: UserX,
  },
  {
    question: "App Crashes on Launch",
    answer:
      "Delete the app completely, reinstall it fresh and re-enter your details from scratch.",
    icon: AlertTriangle,
  },
  {
    question: "No Channels After Login",
    answer:
      "Wait 60 seconds for the full channel list to load as EPG takes a moment to sync.",
    icon: PackageX,
  },
  {
    question: "Subscription Not Activating",
    answer:
      "Send us your device MAC address or confirm payment was completed and we activate immediately.",
    icon: CreditCard,
  },
  {
    question: "Black Screen on Playback",
    answer:
      "Lower your stream quality inside the player settings and restart the channel from scratch.",
    icon: Monitor,
  },
  {
    question: "Portal URL Not Working",
    answer:
      "Paste the portal URL directly from our message and avoid retyping it to prevent errors.",
    icon: Link2,
  },
  {
    question: "Wi-Fi Signal Too Weak",
    answer:
      "Move your router closer to the device or switch to the 5 GHz band for better speed.",
    icon: Wifi,
  },
  {
    question: "EPG Guide Not Showing",
    answer:
      "Go into your player settings, refresh the EPG source and give it 30 seconds to reload.",
    icon: CalendarDays,
  },
  {
    question: "Device Not Compatible",
    answer:
      "Contact our team on WhatsApp and we will suggest the best app for your specific device.",
    icon: Smartphone,
  },
];

export default function TroubleshootingSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start">
        {/* Left heading */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="w-8 sm:w-10 h-[3px] bg-[#ff6b35] mb-3 sm:mb-5" />
          <span className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 sm:mb-4">
            Need Help?
          </span>
          <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 leading-[1.15] mb-4 sm:mb-5">
            Common{" "}
            <span className="text-[#ff6b35]">Trex IPTV</span>{" "}
            Installation Problems and Solutions
          </h2>
          <p className="text-zinc-500 text-sm sm:text-[15px] leading-relaxed max-w-sm">
            Helpful fixes for common setup, login, playback, and device issues.
          </p>
        </div>

        {/* Right accordion */}
        <div className="lg:col-span-7 border border-zinc-100 rounded-2xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          {troubleshootingItems.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon = item.icon;
            const isLast = index === troubleshootingItems.length - 1;

            return (
              <div
                key={index}
                className={`${!isLast ? "border-b border-zinc-100" : ""}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-5 text-left focus:outline-none hover:bg-zinc-50/60 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div
                      className={`flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl transition-colors ${
                        isOpen
                          ? "bg-[#ff6b35] text-white"
                          : "bg-orange-50 text-[#ff6b35]"
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span
                      className={`text-[14px] sm:text-[15px] font-bold leading-snug transition-colors ${
                        isOpen ? "text-[#ff6b35]" : "text-zinc-900"
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className={`h-5 w-5 ${
                        isOpen ? "text-[#ff6b35]" : "text-zinc-400"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-0 ml-[56px] sm:ml-[60px] pr-8">
                        <p className="text-zinc-500 text-[13px] sm:text-[14px] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
