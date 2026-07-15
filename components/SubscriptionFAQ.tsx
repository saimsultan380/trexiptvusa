"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How Much Does a Trex IPTV Subscription Cost?",
    answer:
      "Trex IPTV plans start from just €12 for one month, and you can get full year access for €60. Every plan includes complete access to all channels, movies, and series with no hidden fees.",
  },
  {
    question: "What is the Difference Between 1, 2, and 3 Device Plans?",
    answer:
      "Each plan supports a different number of simultaneous streams. A 1 device plan works on one screen at a time, while 2 or 3 device plans allow multiple people in your home to stream at the same time.",
  },
  {
    question: "Does Trex IPTV Offer a Free Trial Before Subscribing?",
    answer:
      "Yes. We offer a full 24-hour free trial with complete access to all content. No credit card needed and no commitment required. Just contact our team on WhatsApp and get your account.",
  },
  {
    question: "How Does Trex IPTV Subscription Activation Work?",
    answer:
      "After the payment confirmation, our team sends your login credentials to your WhatsApp or email within minutes. Enter them into your preferred IPTV player app, and you are live instantly.",
  },
  {
    question: "What Payment Methods Does Trex IPTV Accept?",
    answer:
      "The users can pay securely using Card, Bank Transfer, Stripe, Wise, Google Pay, Shopify, PayPal, World Remit, or cryptocurrency. All transactions are fully secure, and your order will be processed immediately.",
  },
  {
    question: "Can I Get a Refund if I Am Not Satisfied?",
    answer:
      "Yes. Every Trex IPTV plan includes a 7-day risk-free money back guarantee. If you are not happy with the service, contact our team on WhatsApp, and we will sort it out for you.",
  },
  {
    question: "Are There Any Auto Renewals or Hidden Charges?",
    answer:
      "No. Trex IPTV does not auto renew your subscription or charge you anything extra. You only pay when you choose to renew, and you will again get everything included in the plan.",
  },
  {
    question: "Which Devices Work With a Trex IPTV Subscription?",
    answer:
      "Trex IPTV works on Smart TV, Firestick, Android phones, Android Box, iPhone, iPad, MAG Box, Windows PC, Mac, and Enigma2 receivers.",
  },
  {
    question: "Does My Trex IPTV Subscription Include Setup Support?",
    answer:
      "Yes absolutely. Our team is available 24 hours a day on WhatsApp. We will guide you regarding the full Trex IPTV setup on any device at no extra cost.",
  },
  {
    question: "Can I Upgrade My Trex IPTV Plan Later?",
    answer:
      "Yes. You can upgrade to a longer plan at any time by contacting our team on WhatsApp. We make the process quick and straightforward with no complicated steps.",
  },
  {
    question: "Which Trex IPTV Plan Do You Recommend?",
    answer:
      "For the best value, we always recommend the 12 month plan. You get the lowest monthly rate, uninterrupted access for a full year, and never have to worry about renewals.",
  },
];

export default function SubscriptionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 sm:mb-14"
      >
        <span className="text-[#ff6b35] text-xs font-bold tracking-widest uppercase mb-3 block">
          Trex IPTV FAQ
        </span>
        <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
          Frequently Asked Questions
        </h2>
      </motion.div>

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
              className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-5 text-left focus:outline-none gap-3 sm:gap-4"
            >
              <span
                className={`text-[13px] sm:text-[15px] font-bold leading-snug transition-colors ${
                  openIndex === index ? "text-[#ff6b35]" : "text-zinc-900"
                }`}
              >
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronDown
                  className={`h-5 w-5 ${openIndex === index ? "text-[#ff6b35]" : "text-zinc-400"}`}
                />
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
