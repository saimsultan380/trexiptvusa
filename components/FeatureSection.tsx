"use client";

import React from "react";
import Image from "next/image";
import { Link2, ShieldCheck, PlayCircle, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col order-1">
          <span className="text-[#ff6b35] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 sm:mb-3">
            IPTV STREAMING MADE SIMPLE
          </span>
          <h2 className="text-[24px] sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight text-zinc-900 mb-4 sm:mb-6">
            IPTV Streaming Made Simple With <span className="text-[#ff6b35]">Trex IPTV</span>
          </h2>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-5 sm:mb-10 max-w-xl">
            Trex IPTV gives you one simple dashboard to access everything you want to watch. After the activation of the subscription, you can stream directly to your screen by using your Trex IPTV login credentials within 5 minutes. Get an installation guide, 24/7 support with no complicated setups, and no technical knowledge requirement.
          </p>

          <div className="space-y-3 sm:space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-4 sm:gap-5">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-zinc-100 bg-white shadow-sm text-[#ff6b35]">
                <Link2 className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-[15px] sm:text-[17px] font-bold text-zinc-900 mb-0.5 sm:mb-1">Instant Account Activation</h4>
                <p className="text-[12px] sm:text-[14px] text-zinc-500 leading-relaxed font-medium">
                  After purchasing any of the plans or activating a free trial account, you will get access to the complete Trex IPTV playlist library.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 sm:gap-5">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-zinc-100 bg-white shadow-sm text-[#ff6b35]">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-[15px] sm:text-[17px] font-bold text-zinc-900 mb-0.5 sm:mb-1">Private and Secure Account</h4>
                <p className="text-[12px] sm:text-[14px] text-zinc-500 leading-relaxed font-medium">
                  Trex IPTV provides a fully private, simple, secure, and protected setup process for adding login credentials and an access dashboard.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 sm:gap-5">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-zinc-100 bg-white shadow-sm text-[#ff6b35]">
                <PlayCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-[15px] sm:text-[17px] font-bold text-zinc-900 mb-0.5 sm:mb-1">Everything Included From Day One</h4>
                <p className="text-[12px] sm:text-[14px] text-zinc-500 leading-relaxed font-medium">
                  Unlike other services, Trex IPTV includes full content access, EPG guide, catch-up TV, and 24/7 support in every single subscription plan.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mt-6 sm:mt-12">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-flex h-11 sm:h-14 items-center justify-center gap-2 sm:gap-3 rounded-[4px] bg-[#ff6b35] px-6 sm:px-8 text-[13px] sm:text-base font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-[#ff5722] transition-all"
            >
              <span>Start Free Trial</span>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/subscription-plans"
              className="inline-flex h-11 sm:h-14 items-center justify-center gap-2 sm:gap-3 rounded-[4px] border border-zinc-300 bg-white px-6 sm:px-8 text-[13px] sm:text-base font-bold text-zinc-950 hover:bg-zinc-50 transition-all"
            >
              <span>View Plans</span>
            </motion.a>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="lg:col-span-6 relative order-2 mt-6 lg:mt-0">
          <div className="relative w-full aspect-[1402/1122] max-w-[240px] sm:max-w-none mx-auto">
            <Image
              src="/IPTV Streaming Made Simple With Trex IPTV.PNG"
              alt="Trex IPTV Interface"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
