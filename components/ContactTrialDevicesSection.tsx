"use client";

import Image from "next/image";
import {
  Flame,
  Smartphone,
  Box,
  Tv,
  Radio,
  Apple,
  Monitor,
  HardDrive,
  Settings2,
} from "lucide-react";
import { motion } from "framer-motion";

const devices = [
  {
    icon: Flame,
    name: "Firestick / Fire TV",
    desc: "Install Trex IPTV on Amazon Firestick, Fire TV Stick 4K, Fire TV Cube",
  },
  {
    icon: Smartphone,
    name: "Android Devices",
    desc: "Run Trex IPTV streaming on Samsung Galaxy, OnePlus, Xiaomi, Oppo, and Huawei using your preferred IPTV player app.",
  },
  {
    icon: Box,
    name: "Android Box",
    desc: "Turn your Nvidia Shield, Xiaomi Mi Box, H96 Max, and X96 Mini into a full entertainment hub with IPTV Trex",
  },
  {
    icon: Tv,
    name: "Smart TV",
    desc: "Enjoy Trex IPTV streaming Samsung, LG, Sony, Hisense, Philips, TCL",
  },
  {
    icon: Radio,
    name: "Roku Devices",
    desc: "Stream on your Roku Express, Roku Streaming Stick, Roku Ultra, and Roku TV",
  },
  {
    icon: Apple,
    name: "iPhone / iOS Devices",
    desc: "iPhone, iPad, iPod Touch, Apple TV",
  },
  {
    icon: Monitor,
    name: "macOS / Windows",
    desc: "MacBook, iMac, Windows 10, Windows 11, Surface Pro",
  },
  {
    icon: HardDrive,
    name: "STB / MAG Box",
    desc: "MAG 322, MAG 420, MAG 524, Formuler Z8, Formuler Z10",
  },
  {
    icon: Settings2,
    name: "Enigma2",
    desc: "Dreambox, Vu+ Duo, Zgemma, Octagon, Gigablue",
  },
];

export default function ContactTrialDevicesSection() {
  const phoneNumber = "447482794475";
  const trialHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to get my 24h free trial for Trex IPTV",
  )}`;

  return (
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-zinc-50/50">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center lg:text-left mb-8 sm:mb-10 max-w-3xl lg:max-w-none"
      >
        <span className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center lg:justify-start gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
          Trex IPTV Works on Every Device You Own
        </span>

        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-3">
          Compatible Devices For{" "}
          <span className="text-[#ff6b35]">Trex IPTV</span> Free Trial Access
        </h2>

        <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed">
          Start a 24-hour free trial and test Trex IPTV on the device you already use every day.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Device cards */}
        <div className="lg:col-span-7 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          {devices.map((device, index) => {
            const Icon = device.icon;
            return (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
                className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-zinc-200 border-l-[3px] border-l-[#ff6b35]/50 sm:border-l-zinc-200 bg-white hover:border-orange-200 hover:border-l-[#ff6b35] hover:shadow-[0_6px_20px_rgba(255,107,53,0.08)] transition-all duration-300"
              >
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-100">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#ff6b35]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[12px] sm:text-[14px] font-bold text-zinc-900 mb-0.5 leading-snug">
                    {device.name}
                  </h3>
                  <p className="text-[10px] sm:text-[12px] text-zinc-500 leading-snug">
                    {device.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-28"
        >
          <div className="relative w-full max-w-[300px] sm:max-w-none mx-auto aspect-[1402/1000]">
            <Image
              src="/TREX IPTV WORKS ON EVERY DEVICE YOU OWN.PNG"
              alt="Trex IPTV works on every device you own"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 sm:mt-10"
      >
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={trialHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 sm:h-12 w-full sm:w-auto items-center justify-center rounded-[4px] bg-[#ff6b35] px-6 sm:px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors"
        >
          Start 24h Free Trial →
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/installation-guide"
          className="inline-flex h-11 sm:h-12 w-full sm:w-auto items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-6 sm:px-8 text-[13px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors"
        >
          Installation Guide →
        </motion.a>
      </motion.div>
    </section>
  );
}
