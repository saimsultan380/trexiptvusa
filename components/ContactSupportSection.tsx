"use client";

import {
  ShieldCheck,
  CheckCircle2,
  Zap,
  Monitor,
  Clock,
  KeyRound,
  Headphones,
  MessageCircle,
  UserPlus,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const supportAreas = [
  "Trex IPTV Account Activation",
  "24-hour Free Trial Setup",
  "Device Installation Guide",
  "Login Credentials Support",
  "Subscription Plan Queries",
  "Reseller Panel Help",
  "EPG and Catch-Up Issues",
  "VPN Setup Guidance",
];

const flowCards = [
  {
    icon: Zap,
    title: "Trex IPTV Activation Assistance",
    description:
      "Get an activated Trex IPTV account. Our team sends login credentials to your WhatsApp or email with setup guidance.",
  },
  {
    icon: Monitor,
    title: "Device Installation Support",
    description:
      "You will enjoy free Trex IPTV installation guide on any device: Amazon Firestick, Android Tv or Boxes, Smart TV, iPhone/iOS, Smart phones and Windows or Mac.",
  },
  {
    icon: Clock,
    title: "Free Trial Setup",
    description:
      "Request your 24 hour Trex IPTV free trial and get instant account activation and setup guide.",
  },
  {
    icon: KeyRound,
    title: "Login Credentials Help",
    description:
      "We send your complete Trex IPTV login details such as username, password and server URL and help you in the activation of your IPTV account.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Whether you are dealing with setup difficulties, activation issues, account questions or streaming problems, our team is always available and helps you 24/7.",
  },
];

export default function ContactSupportSection() {
  const phoneNumber = "447482794475";
  const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I need Trex IPTV support",
  )}`;

  return (
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left column */}
        <div className="lg:col-span-5 flex flex-col order-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-1.5"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
            24/7 Customer Support
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4"
          >
            Trex IPTV Setup Assistance and Premium{" "}
            <span className="text-[#ff6b35]">24/7</span> Customer Support
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-3"
          >
            Do you need guidance to install Trex IPTV on compatible devices? Our support team is available 24/7 and handles everything from basic setup questions to full device configuration.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
            className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8"
          >
            From account activation and login setup to device installation and subscription management, we make sure every Trex IPTV user gets the full support and guidance.
          </motion.p>

          {/* Common Support Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-zinc-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] mb-6 sm:mb-8"
          >
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-orange-50 border border-orange-100">
                <ShieldCheck className="h-4 w-4 text-[#ff6b35]" />
              </div>
              <h3 className="text-[14px] sm:text-lg font-bold text-zinc-900">
                Common Support Areas
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-3">
              {supportAreas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#ff6b35] shrink-0" />
                  <span className="text-[11px] sm:text-[13px] text-zinc-600 font-medium leading-snug">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="grid grid-cols-3 gap-1.5 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 items-center justify-center gap-1 sm:gap-2 rounded-[4px] bg-[#ff6b35] px-2 sm:px-6 text-[9px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors text-center leading-tight"
            >
              <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="sm:hidden">WhatsApp</span>
              <span className="hidden sm:inline">WhatsApp Support</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 items-center justify-center gap-1 sm:gap-2 rounded-[4px] border border-[#ff6b35] bg-white px-2 sm:px-6 text-[9px] sm:text-sm font-bold text-[#ff6b35] hover:bg-orange-50 transition-colors text-center leading-tight"
            >
              <Headphones className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 hidden sm:inline" />
              <span className="sm:hidden">Support</span>
              <span className="hidden sm:inline">Contact Support</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 items-center justify-center gap-1 sm:gap-2 rounded-[4px] border border-zinc-300 bg-white px-2 sm:px-6 text-[9px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors text-center leading-tight"
            >
              <UserPlus className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-zinc-500 hidden sm:inline" />
              <span className="sm:hidden">Help</span>
              <span className="hidden sm:inline">Request Help</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Right — staggered flow cards */}
        <div className="lg:col-span-7 relative order-2 mt-8 lg:mt-0">
          <div className="w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto relative">
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 600 640"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M480 60 H530 V170 H480"
                  stroke="rgba(255,107,53,0.2)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
                <path
                  d="M120 170 H70 V290 H120"
                  stroke="rgba(255,107,53,0.2)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
                <path
                  d="M480 290 H530 V410 H480"
                  stroke="rgba(255,107,53,0.2)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
                <path
                  d="M120 410 H70 V530 H120"
                  stroke="rgba(255,107,53,0.2)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
                <path
                  d="M480 530 H530 V600 H480"
                  stroke="rgba(255,107,53,0.2)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
              </svg>
            </div>

            <div className="space-y-3 sm:space-y-6 relative z-10">
              {flowCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                    className={`flex items-start gap-3 sm:gap-4 p-3.5 sm:p-5 bg-white rounded-xl border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-orange-100 hover:shadow-[0_8px_28px_rgba(255,107,53,0.08)] transition-all w-full sm:w-[88%] ${
                      index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                    }`}
                  >
                    <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-white border-2 border-orange-100 text-[#ff6b35] shadow-sm">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[13px] sm:text-[16px] font-bold text-zinc-900 mb-1 leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-[11px] sm:text-[13px] text-zinc-500 leading-snug sm:leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Side note — desktop floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              className="hidden lg:flex absolute -right-4 xl:right-[-48px] top-[38%] -translate-y-1/2 flex-col items-center gap-3 p-5 rounded-2xl border border-zinc-100 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] z-20 w-[170px] text-center"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 border border-orange-100 text-[#ff6b35]">
                <Users className="h-5 w-5" />
              </div>
              <p className="text-[12px] text-zinc-600 font-semibold leading-snug">
                Our support team is always here for both new subscribers and existing Trex IPTV customers around the clock. Feel free to Contact us anytime.
              </p>
            </motion.div>

            {/* Side note — mobile inline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="lg:hidden flex items-start gap-3 mt-4 p-4 rounded-xl border border-orange-100 bg-orange-50/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 border border-orange-100 text-[#ff6b35]">
                <Users className="h-5 w-5" />
              </div>
              <p className="text-[12px] text-zinc-600 font-medium leading-snug">
                Our support team is always here for both new subscribers and existing Trex IPTV customers around the clock. Feel free to Contact us anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
