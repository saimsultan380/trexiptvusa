"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the Trex IPTV Reseller Program?",
    answer:
      "The Trex IPTV reseller program allows you to buy subscription credits at wholesale rates. Moreover, the resellers can create accounts for their clients and keep 100% of the profit of every sale they make.",
  },
  {
    question: "How Do Trex IPTV Reseller Credits Work?",
    answer:
      "Every credit equals one month of Trex IPTV access for one client. Use your credits whenever you need them, and they never expire, so nothing goes to waste.",
  },
  {
    question: "Do Trex IPTV Reseller Credits Expire?",
    answer:
      "No. Your Trex IPTV reseller credits stay in your panel permanently with no expiry date at all. You can buy in bulk, use according to your requirements, and never lose a single credit.",
  },
  {
    question: "How Do I Become a Trex IPTV Reseller?",
    answer:
      "Simply pick a reseller plan, complete your payment, and your Trex IPTV reseller panel is activated within minutes. Our team will guide you through everything on WhatsApp.",
  },
  {
    question: "How Quickly Does My Reseller Panel Get Activated?",
    answer:
      "You will get your Trex IPTV reseller panel within minutes after the payment confirmation. You can log in and start creating client accounts almost immediately.",
  },
  {
    question: "Do I Need Any Technical Knowledge to Start?",
    answer:
      "Not at all. The Trex IPTV reseller panel is simple and beginner-friendly. In case you face any problem, just contact our team on WhatsApp 24/7.",
  },
  {
    question: "Can I Set My Own Prices as a Trex IPTV Reseller?",
    answer:
      "Yes. You set whatever price you want for your clients. We give you credits at wholesale rates, and everything extra you charge is your profit.",
  },
  {
    question: "Can I Create Free Trial Accounts for My Clients?",
    answer:
      "Yes. You can generate 24-hour trial accounts directly from your Trex IPTV reseller panel so potential clients can test the service before buying any paid plan.",
  },
  {
    question: "What Can I Manage Through the Trex IPTV Reseller Panel?",
    answer:
      "You can create accounts, activate subscriptions, issue trials, renew lines, update client details, and monitor everything from one single dashboard.",
  },
  {
    question: "Can I Renew Client Subscriptions Through the Panel?",
    answer:
      "Yes. You can renew a client subscription in just one click inside your Trex IPTV reseller panel. Simply apply credits to their existing account, and they are live again instantly.",
  },
  {
    question: "How Many Clients Can I Manage With the Trex IPTV Reseller Panel?",
    answer:
      "There is no hard limit. The Trex IPTV reseller panel is built to scale so you can manage 10 clients or 1000 clients from the same dashboard without any issues.",
  },
  {
    question: "Which Trex IPTV Reseller Plan Should I Choose?",
    answer:
      "If you are a beginner reseller, then pick the Starter plan. If you already have clients and want better margins, choose Business or Enterprise. Not sure? Message us on WhatsApp, and we will help you.",
  },
  {
    question: "Can I Top Up My Credits When I Run Out?",
    answer:
      "Yes. You can restock your Trex IPTV reseller credits anytime directly through our team on WhatsApp. The more credits you buy, the lower your cost per credit becomes.",
  },
];

export default function ResellerFAQSection() {
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
          FAQs
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
            transition={{ duration: 0.4, delay: index * 0.03, ease: "easeOut" }}
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
