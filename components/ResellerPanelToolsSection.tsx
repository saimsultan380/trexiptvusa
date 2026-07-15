"use client";

import Image from "next/image";
import {
  FlaskConical,
  Zap,
  RefreshCw,
  UserCog,
  MonitorSmartphone,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";

const tools = [
  {
    icon: FlaskConical,
    title: "Trial Accounts",
    description:
      "Create 24-hour Trex IPTV free trials for interested customers instantly.",
  },
  {
    icon: Zap,
    title: "Subscription Activations",
    description:
      "Use your credits to activate new Trex IPTV accounts for clients.",
  },
  {
    icon: RefreshCw,
    title: "Account Renewals",
    description:
      "Extend any existing client subscription without creating a new account.",
  },
  {
    icon: UserCog,
    title: "Client Information",
    description:
      "Update login details, usernames, passwords, and subscription status anytime.",
  },
  {
    icon: MonitorSmartphone,
    title: "Device Setup Support",
    description:
      "Guide your customers to install Trex IPTV on their compatible devices.",
  },
  {
    icon: Network,
    title: "Sub-Reseller Management",
    description:
      "Add sub-resellers under your account and assign them credits directly.",
  },
];

export default function ResellerPanelToolsSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left — heading & graphic */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col text-center lg:text-left"
        >
          <span className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center lg:justify-start gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
            Panel Features
          </span>

          <h2 className="text-[26px] sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4">
            What Can You Manage With the{" "}
            <span className="text-[#ff6b35]">Trex IPTV</span> Reseller Panel?
          </h2>

          <div className="w-10 h-1 bg-[#ff6b35] rounded-full mb-4 mx-auto lg:mx-0" />

          <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-8 sm:mb-10 max-w-sm mx-auto lg:mx-0">
            The Trex IPTV reseller panel gives you all the tools you need to run your business smoothly every single day.
          </p>

          <div className="relative w-full max-w-[200px] sm:max-w-[260px] aspect-square mx-auto lg:mx-0">
            <Image
              src="/general.PNG"
              alt="Trex IPTV reseller panel management tools"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right — feature grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                className="group flex flex-row sm:flex-col items-start sm:items-start text-left gap-3 sm:gap-0 rounded-xl sm:rounded-2xl border border-zinc-200 border-l-[3px] border-l-[#ff6b35]/50 sm:border-l-zinc-200 bg-white p-3.5 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-orange-200 hover:border-l-[#ff6b35] hover:shadow-[0_8px_28px_rgba(255,107,53,0.1)] transition-all duration-300"
              >
                <div className="relative shrink-0 sm:mb-4">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,107,53,0.15)_0%,transparent_70%)] scale-125" />
                  <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-orange-50 border border-orange-100">
                    <Icon className="h-5 w-5 text-[#ff6b35] stroke-[1.5]" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-[13px] sm:text-[15px] font-bold text-zinc-900 mb-1 sm:mb-2 leading-snug group-hover:text-[#ff6b35] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] text-zinc-500 leading-snug sm:leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
