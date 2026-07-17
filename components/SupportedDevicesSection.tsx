"use client";

import { WHATSAPP_NUMBER } from "@/lib/site";

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
    icon: <Flame className="h-4 w-4" />,
    name: "Firestick / Fire TV",
    desc: "Install Trex IPTV on Amazon Firestick, Fire TV Stick 4K, Fire TV Cube",
  },
  {
    icon: <Smartphone className="h-4 w-4" />,
    name: "Android Devices",
    desc: "Run Trex IPTV streaming on Samsung Galaxy, OnePlus, Xiaomi, Oppo, and Huawei using your preferred IPTV player app.",
  },
  {
    icon: <Box className="h-4 w-4" />,
    name: "Android Box",
    desc: "Turn your Nvidia Shield, Xiaomi Mi Box, H96 Max, and X96 Mini into a full entertainment hub with IPTV Trex",
  },
  {
    icon: <Tv className="h-4 w-4" />,
    name: "Smart TV",
    desc: "Enjoy Trex IPTV streaming Samsung, LG, Sony, Hisense, Philips, TCL",
  },
  {
    icon: <Radio className="h-4 w-4" />,
    name: "Roku Devices",
    desc: "Stream on your Roku Express, Roku Streaming Stick, Roku Ultra, and Roku TV",
  },
  {
    icon: <Apple className="h-4 w-4" />,
    name: "iPhone / iOS Devices",
    desc: "iPhone, iPad, iPod Touch, Apple TV",
  },
  {
    icon: <Monitor className="h-4 w-4" />,
    name: "macOS / Windows",
    desc: "MacBook, iMac, Windows 10, Windows 11, Surface Pro",
  },
  {
    icon: <HardDrive className="h-4 w-4" />,
    name: "STB / MAG Box",
    desc: "MAG 322, MAG 420, MAG 524, Formuler Z8, Formuler Z10",
  },
  {
    icon: <Settings2 className="h-4 w-4" />,
    name: "Enigma2",
    desc: "Dreambox, Vu+ Duo, Zgemma, Octagon, Gigablue",
  },
];

const apps = [
  {
    category: "Smart TV Apps",
    icon: <Tv className="h-4 w-4" />,
    list: [
      "Smart IPTV",
      "IPTV Smarters",
      "XCIPTV",
      "SS IPTV",
      "TiviMate",
      "Perfect Player",
    ],
  },
  {
    category: "iOS Apps",
    icon: <Apple className="h-4 w-4" />,
    list: [
      "IPTV Smarters",
      "GSE Smart IPTV",
      "XCIPTV",
      "Smarter Player",
      "IPTVX",
      "TiviMate",
    ],
  },
  {
    category: "Windows / macOS Apps",
    icon: <Monitor className="h-4 w-4" />,
    list: [
      "IPTV Smarters",
      "TiviMate",
      "Prog IPTV",
      "XCIPTV",
      "Perfect Player",
      "VLC Player",
    ],
  },
  {
    category: "Android Apps",
    icon: <Smartphone className="h-4 w-4" />,
    list: [
      "IPTV Smarters",
      "TiviMate",
      "XCIPTV",
      "GSE Smart IPTV",
      "Perfect Player",
      "OTT Navigator",
    ],
  },
];

export default function SupportedDevicesSection() {
  const phoneNumber = WHATSAPP_NUMBER;

  return (
    <section
      id="devices"
      className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white"
    >
      {/* Top: device list left | visual right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 items-start mb-8 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col"
        >
          <span className="text-[#ff6b35] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-1.5">
            <Tv className="h-3.5 w-3.5" />
            Compatible Devices For Trex IPTV Subscription Plans
          </span>

          <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-zinc-900 mb-3 sm:mb-4">
            Trex IPTV Works on Every Device You Own
          </h2>

          <p className="text-zinc-500 text-[12px] sm:text-[14px] leading-relaxed mb-5 sm:mb-8 max-w-sm">
            Watch Trex IPTV on any device, anywhere. From Smart TVs to mobile
            phones, desktops to set-top boxes — enjoy seamless streaming with
            powerful apps and broad device support.
          </p>

          <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-4">
            {devices.map((device, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.045, ease: "easeOut" }}
                className="flex items-start gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-100 text-[#ff6b35]">
                  {device.icon}
                </div>
                <div>
                  <h4 className="text-[12px] sm:text-[13px] font-bold text-zinc-900 leading-tight">
                    {device.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-snug">
                    {device.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-8 relative mt-4 sm:mt-6 lg:mt-0"
        >
          <div className="relative w-full aspect-[1402/1000] max-w-[260px] sm:max-w-none mx-auto lg:mx-0">
            <Image
              src="/TREX IPTV WORKS ON EVERY DEVICE YOU OWN.PNG"
              alt="Trex IPTV Works on Every Device You Own"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom: Supported Apps full-width grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-6 sm:mb-8">
          {apps.map((app, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-xl border border-zinc-200 bg-white hover:border-orange-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-[#ff6b35]">
                  {app.icon}
                </div>
                <h4 className="text-[11px] sm:text-[13px] font-bold text-zinc-900">
                  {app.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {app.list.map((item, j) => (
                  <span
                    key={j}
                    className="text-[10px] sm:text-[11px] font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center justify-center gap-3">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to get my 24h free trial for Trex IPTV")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] bg-[#ff6b35] px-6 sm:px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors whitespace-nowrap"
          >
            Start Free Trial →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/installation-guide"
            className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-6 sm:px-8 text-[13px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors whitespace-nowrap"
          >
            Installation Guide →
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
