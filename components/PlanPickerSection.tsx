"use client";

import Image from "next/image";
import {
  Calendar,
  ShieldCheck,
  Crown,
  MonitorCheck,
  Star,
  RefreshCw,
  Zap,
  Check,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const homePlans = [
  {
    num: "1",
    icon: <Calendar className="h-5 w-5" />,
    bestFor: "New Users",
    durationNum: "1",
    durationLabel: "Month Plan",
    description:
      "Start with our 1-month plan to test device compatibility and explore all premium features risk-free.",
    tags: [
      { icon: <MonitorCheck className="h-3 w-3" />, label: "Test & Explore" },
      { icon: <Zap className="h-3 w-3" />, label: "All Features Access" },
    ],
  },
  {
    num: "2",
    icon: <ShieldCheck className="h-5 w-5" />,
    bestFor: "Regular Users",
    durationNum: "3 & 6",
    durationLabel: "Month Plans",
    description:
      "Choose 3 or 6 months for the perfect balance of flexibility and value. Ideal for consistent streaming.",
    tags: [
      { icon: <Star className="h-3 w-3" />, label: "Great Value" },
      { icon: <RefreshCw className="h-3 w-3" />, label: "Flexible Options" },
    ],
  },
  {
    num: "3",
    icon: <Crown className="h-5 w-5" />,
    bestFor: "Long-Term Users",
    durationNum: "12",
    durationLabel: "Month Plan",
    description:
      "Our 12-month plan is the most popular choice for non-stop access, less renewal hassle, and maximum savings.",
    tags: [
      { icon: <Star className="h-3 w-3" />, label: "Most Popular" },
      { icon: <Zap className="h-3 w-3" />, label: "Maximum Savings" },
      { icon: <RefreshCw className="h-3 w-3" />, label: "Non-Stop Access" },
    ],
    popular: true,
  },
];

const subscriptionPlans = [
  {
    num: "1",
    icon: <Calendar className="h-5 w-5" />,
    bestFor: "New Users",
    durationNum: "1",
    durationLabel: "Month Plan",
    description:
      "If you are brand new to Trex IPTV, the 1 month plan is perfect for you. Get instant access, try everything, test it on your devices, and see how much you love it before buying premium plans.",
    tags: [
      { icon: <MonitorCheck className="h-3 w-3" />, label: "Test & Explore" },
      { icon: <Zap className="h-3 w-3" />, label: "All Features Access" },
    ],
  },
  {
    num: "2",
    icon: <ShieldCheck className="h-5 w-5" />,
    bestFor: "Regular Users",
    durationNum: "3 & 6",
    durationLabel: "Month Plans",
    description:
      "If you stream every day, the 3 month or 6 month plan gives you the best mix of value and flexibility.",
    tags: [
      { icon: <Star className="h-3 w-3" />, label: "Great Value" },
      { icon: <RefreshCw className="h-3 w-3" />, label: "Flexible Options" },
    ],
  },
  {
    num: "3",
    icon: <Crown className="h-5 w-5" />,
    bestFor: "Long-Term Users",
    durationNum: "12",
    durationLabel: "Month Plan",
    description:
      "The 12 month Trex IPTV subscription is the best deal with the lowest price per month. Pay once and stream freely for an entire year without the tension of renewals.",
    tags: [
      { icon: <Star className="h-3 w-3" />, label: "Most Popular" },
      { icon: <Zap className="h-3 w-3" />, label: "Maximum Savings" },
      { icon: <RefreshCw className="h-3 w-3" />, label: "Non-Stop Access" },
    ],
    popular: true,
  },
];

type PlanPickerSectionProps = {
  variant?: "home" | "subscription";
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
};

function CtaBlock({
  primaryCta,
  secondaryCta,
  className = "",
}: {
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta: { label: string; href: string; external?: boolean };
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center lg:items-start gap-3 ${className}`}>
      <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-3">
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={primaryCta.href}
          {...(primaryCta.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-7 sm:px-8 text-[13px] sm:text-sm font-bold text-white hover:bg-zinc-800 transition-colors whitespace-nowrap shadow-sm"
        >
          {primaryCta.label}
          <ChevronRight className="h-4 w-4 text-[#ff6b35]" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={secondaryCta.href}
          {...(secondaryCta.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-7 sm:px-8 text-[13px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors whitespace-nowrap"
        >
          {secondaryCta.label}
          <ChevronRight className="h-4 w-4 text-zinc-500" />
        </motion.a>
      </div>
      <p className="text-zinc-400 text-[11px] sm:text-[12px] flex items-center gap-1.5 text-center lg:text-left">
        <Check className="h-3.5 w-3.5 text-[#ff6b35] shrink-0" />
        All plans include 4K/8K streaming, 24/7 support, and all premium features.
      </p>
    </div>
  );
}

export default function PlanPickerSection({
  variant = "home",
  primaryCta,
  secondaryCta,
}: PlanPickerSectionProps = {}) {
  const phoneNumber = "447482794475";
  const plans = variant === "subscription" ? subscriptionPlans : homePlans;
  const isHome = variant === "home";

  const resolvedPrimary =
    primaryCta ??
    (variant === "subscription"
      ? { label: "Active Subscription", href: "#comparison" }
      : { label: "View Subscription Plans", href: "/subscription-plans" });

  const resolvedSecondaryRaw =
    secondaryCta ??
    (variant === "subscription"
      ? { label: "Get Free 24h Trial", href: "whatsapp-trial", external: true }
      : { label: "Installation Guide", href: "/installation-guide" });

  const resolvedSecondary =
    resolvedSecondaryRaw.href === "whatsapp-trial"
      ? {
          label: resolvedSecondaryRaw.label,
          href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to get my 24h free trial for Trex IPTV")}`,
          external: true,
        }
      : resolvedSecondaryRaw;

  const heading = isHome ? (
    <>
      Which <span className="text-[#ff6b35]">Trex IPTV</span> Subscription Should You Choose?
    </>
  ) : (
    <>
      Which <span className="text-[#ff6b35]">Trex IPTV</span> Plan Should You Choose?
    </>
  );

  const intro = isHome
    ? "Not sure which plan is right for you? Follow our smart recommendations to find the perfect fit for your streaming needs."
    : null;

  const imageAlt = isHome
    ? "Which Trex IPTV Subscription Should You Choose?"
    : "Which Trex IPTV Plan Should You Choose?";

  const imageSrc = isHome ? "/Trex IPTV Subscription.PNG" : "/general.PNG";

  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col"
        >
          <span className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] shrink-0" />
            Choose Your Plan
          </span>

          <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.12] text-zinc-900 mb-4">
            {heading}
          </h2>

          {intro && (
            <p className="text-zinc-500 text-[13px] sm:text-[14px] leading-relaxed mb-6 max-w-md">
              {intro}
            </p>
          )}

          <div
            className={`relative w-full max-w-[220px] sm:max-w-[280px] aspect-square mx-auto lg:mx-0 ${
              intro ? "" : "mb-2"
            }`}
          >
            <Image src={imageSrc} alt={imageAlt} fill className="object-contain" />
          </div>

          {isHome && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mt-8 hidden lg:block"
            >
              <CtaBlock
                primaryCta={resolvedPrimary}
                secondaryCta={resolvedSecondary}
              />
            </motion.div>
          )}
        </motion.div>

        {/* Right Column — timeline + cards */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative flex flex-col">
            {/* Orange dashed timeline */}
            <div
              className="absolute left-[19px] top-5 bottom-5 w-px hidden sm:block pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, rgba(255,107,53,0.45) 0px, rgba(255,107,53,0.45) 5px, transparent 5px, transparent 11px)",
              }}
              aria-hidden
            />

            {plans.map((plan, i) => (
              <motion.div
                key={plan.num}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="relative flex items-stretch gap-0 sm:gap-4 mb-3 sm:mb-4 last:mb-0"
              >
                {/* Step number — desktop timeline only */}
                <div className="relative z-10 hidden sm:flex flex-shrink-0 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6b35] text-white font-extrabold text-[15px] ring-4 ring-white shadow-[0_4px_14px_rgba(255,107,53,0.35)]">
                    {plan.num}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 flex flex-col sm:flex-row sm:items-stretch p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                    plan.popular
                      ? "border-[#ff6b35] bg-gradient-to-br from-orange-50/40 to-white shadow-[0_8px_30px_rgba(255,107,53,0.1)]"
                      : "border-zinc-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-orange-200 hover:shadow-[0_8px_28px_rgba(255,107,53,0.08)]"
                  }`}
                >
                  {/* Mobile header: icon + title */}
                  <div className="flex items-start gap-2.5 sm:gap-4 min-w-0 sm:flex-1 sm:pb-0 sm:pr-4">
                    <div className="relative shrink-0">
                      <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl bg-orange-50 border border-orange-100 text-[#ff6b35]">
                        {plan.icon}
                      </div>
                      <span className="sm:hidden absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff6b35] text-white font-extrabold text-[10px] ring-2 ring-white">
                        {plan.num}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] sm:text-[10px] font-bold text-[#ff6b35] tracking-[0.18em] uppercase">
                        Best For
                      </span>
                      <h3 className="text-[14px] sm:text-[17px] font-bold text-zinc-900 mt-0.5 mb-1.5 sm:mb-2 leading-tight">
                        {plan.bestFor}
                      </h3>
                      <p className="text-[11px] sm:text-[12px] text-zinc-500 leading-snug sm:leading-relaxed">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Duration + tags */}
                  <div className="shrink-0 mt-3 sm:mt-0 sm:w-[118px] md:w-[130px] pt-3 sm:pt-0 sm:pl-4 border-t sm:border-t-0 sm:border-l border-zinc-100 flex flex-row sm:flex-col items-center sm:items-stretch justify-between sm:justify-center gap-2 sm:gap-0">
                    <div className="shrink-0 sm:text-right sm:mb-3">
                      <div className="text-[22px] sm:text-[34px] font-extrabold text-zinc-900 leading-none tracking-tight">
                        {plan.durationNum}
                      </div>
                      <div className="text-[9px] sm:text-[11px] text-zinc-500 font-semibold mt-0.5 whitespace-nowrap">
                        {plan.durationLabel}
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-end gap-1 sm:gap-1.5 min-w-0 flex-1 sm:flex-none">
                      {plan.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="inline-flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] font-semibold text-zinc-600 bg-zinc-50 border border-zinc-200 px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap"
                        >
                          <span className="text-[#ff6b35]">{tag.icon}</span>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTAs — bottom on subscription, mobile for home */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            className={`mt-8 ${isHome ? "lg:hidden" : ""}`}
          >
            <CtaBlock
              primaryCta={resolvedPrimary}
              secondaryCta={resolvedSecondary}
              className="items-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
