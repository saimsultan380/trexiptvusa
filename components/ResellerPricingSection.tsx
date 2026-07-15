"use client";

import { Check, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const resellerPlans = [
  {
    tier: "Starter",
    subtitle: "Start Your Trex IPTV Reseller Business",
    popular: false,
    bestFor: [
      "Beginners and first-time resellers",
      "Small and growing customer base",
      "Testing the reseller experience",
    ],
    includes: [
      "Full Trex IPTV Reseller Panel Access",
      "Multi-Device Support",
      "EPG TV Guide Included",
      "24/7 WhatsApp Support",
      "Non-Expiring Credits",
    ],
    cta: "Get Starter Pricing",
    whatsappMessage: "Hi, I want Trex IPTV Starter reseller pricing",
  },
  {
    tier: "Business",
    subtitle: "Best Value for Growing Resellers",
    popular: true,
    bestFor: [
      "Growing reseller businesses",
      "Recurring and repeat customers",
      "Moderate to high account volume",
    ],
    includes: [
      "Full Trex IPTV Reseller Panel Access",
      "Multi-Device Support",
      "EPG TV Guide Included",
      "Priority 24/7 Support",
      "Non-Expiring Credits",
      "Marketing Materials Included",
    ],
    cta: "Get Business Pricing",
    whatsappMessage: "Hi, I want Trex IPTV Business reseller pricing",
  },
  {
    tier: "Enterprise",
    subtitle: "Maximum Margins and Wholesale Rates",
    popular: false,
    bestFor: [
      "Established and active resellers",
      "Agencies and large customer bases",
      "Frequent renewals and high volume",
    ],
    includes: [
      "Full Trex IPTV Reseller Panel Access",
      "Multi-Device Support",
      "EPG TV Guide Included",
      "Dedicated 24/7 Support",
      "Non-Expiring Credits",
      "Marketing Materials Included",
      "Custom Volume Pricing",
    ],
    cta: "Get Enterprise Pricing",
    whatsappMessage: "Hi, I want Trex IPTV Enterprise reseller pricing",
  },
];

export default function ResellerPricingSection() {
  const phoneNumber = "447482794475";

  return (
    <section
      id="pricing"
      className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 sm:mb-12 max-w-3xl mx-auto text-center"
      >
        <span className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
          Reseller Plans
        </span>

        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4">
          Choose Your <span className="text-[#ff6b35]">Trex IPTV</span> Reseller Plan
        </h2>

        <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed">
          Pick the credit package according to your business size and goals. Every Trex IPTV reseller plan includes full panel access, non-expiring credits, and support from day one.
        </p>
      </motion.div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch justify-items-center md:justify-items-stretch">
        {resellerPlans.map((plan, index) => (
          <motion.div
            key={plan.tier}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className={`relative flex flex-col w-full max-w-[340px] md:max-w-none rounded-2xl border bg-white p-5 sm:p-6 transition-all duration-300 ${
              plan.popular
                ? "border-[#ff6b35] shadow-[0_16px_48px_rgba(255,107,53,0.12)]"
                : "border-zinc-200 shadow-sm hover:border-orange-200 hover:shadow-md"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff6b35] text-white text-[9px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm whitespace-nowrap z-10 tracking-wide">
                MOST POPULAR
              </div>
            )}

            {/* Tier + subtitle */}
            <div className={`text-center mb-5 ${plan.popular ? "mt-2" : "mt-1"}`}>
              <p className="text-[11px] sm:text-xs font-extrabold tracking-[0.2em] text-zinc-900 uppercase mb-2">
                {plan.tier}
              </p>
              <h3 className="text-[15px] sm:text-[17px] font-bold text-zinc-900 leading-snug">
                {plan.subtitle}
              </h3>
            </div>

            {/* Best for */}
            <div className="mb-5 pb-5 border-b border-zinc-100">
              <p className="text-[10px] sm:text-[11px] font-bold text-[#ff6b35] uppercase tracking-wider mb-2.5">
                Best For:
              </p>
              <ul className="space-y-2">
                {plan.bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#ff6b35] shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-[12px] text-zinc-600 font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Includes */}
            <div className="mb-6 flex-grow">
              <p className="text-[10px] sm:text-[11px] font-bold text-[#ff6b35] uppercase tracking-wider mb-2.5">
                Includes:
              </p>
              <ul className="space-y-2">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#ff6b35] shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-[12px] text-zinc-600 font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(plan.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-11 sm:h-12 w-full items-center justify-center gap-2 rounded-[4px] text-[12px] sm:text-sm font-bold transition-colors ${
                plan.popular
                  ? "bg-[#ff6b35] text-white shadow-sm hover:bg-[#ff5722]"
                  : "border border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-50"
              }`}
            >
              {plan.cta}
              <ChevronRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
