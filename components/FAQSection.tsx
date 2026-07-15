"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Trex IPTV?",
    answer:
      "Trex IPTV is a premium internet protocol television streaming service that gives you access to live channels, movies, sports, and series in HD, UHD, and 4K quality. There is no need for a cable or satellite dish; you will get IPTV streaming over your internet connection.",
  },
  {
    question: "Which Devices Are Compatible With Trex IPTV?",
    answer:
      "Trex IPTV works on virtually every device you already own at home or carry on the go. You can stream on Smart TVs like Samsung, LG, and Sony, Amazon Firestick, Android phones, Android boxes, iPhone, iPad, MAG Box, Enigma2 receivers, and Windows or Mac computers. Simply install your preferred IPTV player app, enter your Trex IPTV login credentials, and you are ready to watch instantly.",
  },
  {
    question: "Does Trex IPTV Offer a Free Trial?",
    answer:
      "Yes, Trex IPTV offers a full 24-hour free trial so you can experience the service before purchasing any plan. You get complete access to all the playlists and channel library. There is no need for a credit card. Just reach out to our team by filling out the Contact form or WhatsApp us directly to get your trial credentials and start streaming within minutes.",
  },
  {
    question: "How Much Internet Speed Does Trex IPTV Need for 4K Streaming?",
    answer:
      "A stable connection of at least 25 Mbps works perfectly if you want to enjoy smooth 4K streaming on Trex IPTV. On the other hand, HD and FHD content runs fine on anything above 10 Mbps. If multiple people are streaming on different devices at the same time, a 50 Mbps connection is the best to keep everything running without any distortion.",
  },
  {
    question: "Can I Run Trex IPTV on More Than One Device at a Time?",
    answer:
      "Yes, Trex IPTV offers multi-connection (1,2,3 or more simultaneous devices). The good thing is that your whole family can stream on different devices at the same time without any interruption. Simply pick the plan that matches how many screens you need, and everyone gets their own same premium access.",
  },
  {
    question: "What Sports Content Does Trex IPTV Cover?",
    answer:
      "Trex IPTV covers every major sport: FIFA World Cup, UEFA Champions League, Premier League, La Liga, NFL, NBA, UFC, F1, Cricket, Tennis, WWE, and Rugby, all in HD and 4K. Every live match, PPV event, and sports broadcast streams in real time, so you never miss a single moment of the action.",
  },
  {
    question: "How Do I Install Trex IPTV on My Firestick?",
    answer:
      "You can easily install Trex IPTV on your Firestick under 5 minutes. Simply enable apps from unknown sources in your Firestick settings. After this step, download your preferred IPTV player, such as IPTV Smarters Pro or TiviMate, from the Amazon Appstore. Now, enter your Trex IPTV login credentials, and you are live instantly.",
  },
  {
    question: "How Fast Will I Receive My Trex IPTV Subscription?",
    answer:
      "You will get your Trex IPTV login credentials in your email or WhatsApp within minutes after payment confirmation, so you can stream almost immediately.",
  },
  {
    question: "Is Trex IPTV Compatible With a VPN?",
    answer:
      "Yes, Trex IPTV works smoothly with all major VPN services, and it gives you an extra layer of privacy while streaming. Whatever VPN you use, your connection stays stable and buffer-free.",
  },
  {
    question: "What are the Payment Methods to Purchase Trex IPTV Subscriptions or Plans?",
    answer:
      "The users can pay securely using Card, Bank Transfer, Stripe, Wise, Google Pay, Shopify, PayPal, World Remit, or cryptocurrency. Your order will be processed immediately.",
  },
];

export default function FAQSection() {
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
          Frequently Asked <span className="text-[#ff6b35]">Questions</span>
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
              className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-5 text-left focus:outline-none gap-3 sm:gap-4"
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
