"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is Trex IPTV difficult to set up?",
    answer:
      "Not at all. Every device has a simple step by step guide on our setup page and most people are streaming within 5 minutes of receiving their credentials. No technical background needed whatsoever.",
  },
  {
    question: "Which IPTV app works best with Trex IPTV?",
    answer:
      "It depends on your device. We recommend IPTV Smarters Pro and TiviMate for Android. Moreover, our priorities are Firestick, GSE Smart IPTV and Ibo Player Pro for iPhone and iPad, and Ibo Player or IPTV Expert for Windows and Mac. Our team will point you to the right one for your specific device after you subscribe.",
  },
  {
    question: "Can I stream on more than one device at a time?",
    answer:
      "Yes. Trex IPTV offers multi-connection plans so your whole family can watch on different screens at the same time. Simply pick the plan that matches how many devices you need when subscribing.",
  },
  {
    question: "How much internet speed do I need?",
    answer:
      "A stable connection of 10 Mbps handles HD streaming comfortably and 25 Mbps or above gives you smooth buffer-free 4K playback. A wired Ethernet connection always performs better than Wi-Fi for live TV streaming.",
  },
  {
    question: "How soon can I start watching after I subscribe?",
    answer:
      "After the payment confirmation, your Trex IPTV login credentials arrive on your WhatsApp or email within minutes. Most subscribers are fully set up and watching their first channel in under 10 minutes.",
  },
  {
    question: "Does my subscription include setup help?",
    answer:
      "Yes absolutely. Our support team is available 24 hours a day on WhatsApp. Moreover, we will guide you about the full installation of Trex IPTV on any device at no extra cost. You are never left to figure things out alone.",
  },
  {
    question: "What happens if my stream goes down?",
    answer:
      "Our servers run on redundant infrastructure with automatic failover so if anything disrupts your connection the system switches you to a backup server instantly without you having to do anything.",
  },
  {
    question: "Can I try Trex IPTV before buying a plan?",
    answer:
      "Yes. We offer a full 24-hour free trial with complete access to all channels, movies and series. No credit card required and no commitment. Just reach out to our team on WhatsApp to request your trial credentials.",
  },
  {
    question: "Does Trex IPTV work if I travel abroad?",
    answer:
      "Yes. Trex IPTV works from anywhere in the world as long as you have a stable internet connection. You can access all your channels, sports and movies whether you are at home or travelling to another country.",
  },
];

export default function InstallationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 sm:mb-14"
      >
        <span className="text-[#ff6b35] text-xs font-bold tracking-widest uppercase mb-3 block">
          FAQs
        </span>
        <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
          Frequently Asked Questions
        </h2>
      </motion.div>

      {/* Accordion */}
      <div className="space-y-2 sm:space-y-3">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              openIndex === index
                ? "border-[#ff6b35] shadow-[0_4px_20px_rgba(255,107,53,0.08)]"
                : "border-zinc-200 hover:border-zinc-300"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-5 text-left focus:outline-none gap-3 sm:gap-4"
            >
              <span className={`text-[13px] sm:text-[15px] font-bold leading-snug transition-colors ${
                openIndex === index ? "text-[#ff6b35]" : "text-zinc-900"
              }`}>
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronDown className={`h-5 w-5 ${openIndex === index ? "text-[#ff6b35]" : "text-zinc-400"}`} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-zinc-100">
                    <p className="text-zinc-500 text-[12px] sm:text-[14px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
