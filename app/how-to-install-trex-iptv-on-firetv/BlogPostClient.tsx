"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  CheckCircle2,
  Tv,
  ChevronDown,
  Copy,
  Check,
  ArrowRight,
  Sliders,
  MessageCircle,
  Sparkles,
  Wifi,
  Zap,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WHATSAPP_NUMBER } from "@/lib/site";

export default function BlogPostClient() {
  const [copiedCode, setCopiedCode] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("686147");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const tableOfContents = [
    { id: "prerequisites", label: "What You Need Before Starting" },
    { id: "compatibility", label: "Fire TV Device Compatibility" },
    { id: "recommended-apps", label: "Best IPTV Apps for Fire TV" },
    { id: "step-by-step-guide", label: "10-Step Installation Guide" },
    { id: "home-screen-shortcut", label: "Add to Fire TV Home Screen" },
    { id: "best-settings", label: "Optimal Streaming Settings" },
    { id: "troubleshooting", label: "Troubleshooting Common Issues" },
  ];

  const steps = [
    {
      stepNumber: "01",
      title: "Enable Apps From Unknown Sources",
      description:
        "Before installing any IPTV player, you need to allow apps from outside the Amazon App Store.",
      substeps: [
        "Press the Home button on your Fire TV remote.",
        "Go to Settings (gear icon on the right).",
        "Select My Fire TV (or Device & Software).",
        "Tap Developer Options.",
        "Turn on Apps from Unknown Sources.",
        "Turn on ADB Debugging as well for extra compatibility.",
      ],
      callout: {
        title: "Why this matters",
        text: "This setting allows you to sideload IPTV player apps that are not available directly in the Amazon Appstore.",
      },
    },
    {
      stepNumber: "02",
      title: "Download the Downloader App",
      description:
        "The Downloader app is the essential tool used to install IPTV players on your Fire TV.",
      substeps: [
        "Press Home on your remote and go to Find / Search at the top.",
        "Type Downloader in the search bar.",
        "Select the orange Downloader app icon from the search results.",
        "Click Download (or Get) and wait for it to install.",
        "Open the app once installation completes.",
      ],
    },
    {
      stepNumber: "03",
      title: "Enable Downloader Permissions",
      description:
        "Give Downloader administrative permission to sideload applications onto Fire TV OS.",
      substeps: [
        "Go back to Fire TV Settings.",
        "Select My Fire TV > Developer Options.",
        "Find Install Unknown Apps (or Downloader in the app list).",
        "Turn its permission to ON.",
      ],
    },
    {
      stepNumber: "04",
      title: "Open Downloader and Enter the Code",
      description: "Now it is time to download your IPTV player APK directly.",
      substeps: [
        "Open the Downloader app from your home screen or apps list.",
        "Select the URL or Code input bar at the top.",
        "Enter the Trex IPTV Downloader Code: 686147",
        "Click Go and wait for the APK file to download completely.",
      ],
      hasCode: true,
      note: "You can also enter the full APK download URL we send you via WhatsApp or email after your Trex IPTV subscription is confirmed.",
    },
    {
      stepNumber: "05",
      title: "Install the IPTV Player",
      description:
        "Once the APK file finishes downloading, the installation screen appears automatically.",
      substeps: [
        "Tap Install on the prompt that appears in the bottom right corner.",
        "Wait a few seconds for the installation progress bar to finish.",
        "Tap Done or Open once it finishes (you can delete the APK file afterwards to save storage space).",
      ],
    },
    {
      stepNumber: "06",
      title: "Open the IPTV Player App",
      description: "Now launch the newly installed IPTV player on your Fire TV.",
      substeps: [
        "Press the Home button on your remote.",
        "Scroll right to find Your Apps and Channels.",
        "Find the IPTV player you just installed and launch it.",
      ],
      proTip: "Long-press the Home button and select Apps to open your full app list instantly.",
    },
    {
      stepNumber: "07",
      title: "Select Your Login Method",
      description:
        "Inside the IPTV player, choose how to connect your Trex IPTV account.",
      substeps: [
        "Tap Add New User, Add Playlist, or Login.",
        "Select Xtream Codes API from the available options.",
        "This is the recommended and most stable login method for Trex IPTV on Fire TV.",
      ],
      callout: {
        title: "Why Xtream Codes",
        text: "It loads significantly faster, supports full VOD metadata and poster browsing, and gives you a much more stable streaming experience than M3U on Fire TV.",
      },
    },
    {
      stepNumber: "08",
      title: "Enter Your Trex IPTV Login Credentials",
      description:
        "Connect your active Trex IPTV account to the IPTV player.",
      substeps: [
        "Enter Any Name in the playlist name field (e.g., Trex IPTV).",
        "Enter your Username exactly as received.",
        "Enter your Password exactly as received.",
        "Enter your Server URL exactly as received.",
        "Double-check that there are no extra spaces in any field.",
        "Tap Add User or Connect to proceed.",
      ],
      callout: {
        title: "Important tip",
        text: "Copy and paste your credentials directly from your WhatsApp or email confirmation message instead of typing them manually to avoid typos or capitalization errors.",
      },
    },
    {
      stepNumber: "09",
      title: "Wait for Your Channel List to Load",
      description:
        "Once connected, your complete Trex IPTV library syncs automatically.",
      substeps: [
        "Live channels load within 10 to 20 seconds.",
        "VOD movies and TV series appear shortly after.",
        "EPG TV Guide syncs within 30 to 60 seconds.",
        "All channel categories organize themselves automatically in the player.",
      ],
    },
    {
      stepNumber: "10",
      title: "Start Streaming on Fire TV",
      description:
        "Your Trex IPTV service is now fully set up on your Fire TV device!",
      substeps: [
        "Browse your live channel list by category or country.",
        "Search for any movie or series in the massive on-demand VOD library.",
        "Use the electronic TV guide (EPG) to see what is currently airing.",
        "Enjoy streaming in crystal-clear HD, UHD, and 4K quality instantly.",
      ],
    },
  ];

  const troubleshootingList = [
    {
      q: "Channels not loading after login?",
      a: "Re-enter your credentials carefully with no extra spaces at the beginning or end. Verify that your Fire TV has an active internet connection by testing another streaming app.",
    },
    {
      q: "Buffering or freezing during playback?",
      a: "Switch to a wired Ethernet connection if possible. If using Wi-Fi, connect to the 5 GHz band. You can also lower the stream quality to 1080p inside the player settings or restart your Fire TV.",
    },
    {
      q: "Black screen when opening a channel?",
      a: "Switch your video player decoder inside the IPTV app settings. Try switching from Hardware Decoder to Software Decoder, or vice versa, to resolve codec conflicts on Fire TV.",
    },
    {
      q: "Credentials showing as invalid?",
      a: "Double-check your username, password, and URL for any casing or spacing errors. Copy and paste them directly from WhatsApp or email. If the issue persists, message our WhatsApp support team for instant credential verification.",
    },
    {
      q: "App not installing from Downloader?",
      a: "Make sure 'Apps from Unknown Sources' is turned ON specifically for Downloader in Fire TV Developer Options. If needed, restart your Fire TV and try the code 686147 again.",
    },
    {
      q: "EPG not loading or showing guide data?",
      a: "Go into your IPTV player settings and select 'Refresh EPG' or 'Update Guide Data'. Give it 60 seconds to fully fetch and sync the schedule.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col overflow-x-hidden">
      <Header />

      {/* Hero / Header */}
      <article className="pt-24 pb-8 sm:pt-36 sm:pb-12 lg:pt-44 lg:pb-16 bg-gradient-to-b from-zinc-50/80 via-white to-white border-b border-zinc-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-xs font-semibold">
            <Link href="/" className="text-zinc-500 hover:text-[#ff6b35] transition-colors">
              Home
            </Link>
            <span className="text-zinc-300">/</span>
            <Link href="/blog/" className="text-zinc-500 hover:text-[#ff6b35] transition-colors">
              Blog
            </Link>
            <span className="text-zinc-300">/</span>
            <span className="text-[#ff6b35] truncate max-w-[200px] sm:max-w-none">Fire TV Setup Guide</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
            How to Install Trex IPTV on Fire TV in 3 Minutes: Easy Guide
          </h1>

          {/* Author / Meta Bar */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-500 pb-6 sm:pb-8 border-b border-zinc-100">
            <div className="flex items-center gap-2 font-semibold text-zinc-800">
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] flex items-center justify-center font-bold text-xs">
                T
              </div>
              <span>Trex IPTV Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-zinc-400" />
              <span>March 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-zinc-400" />
              <span>3 min read</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Tutorial
            </div>
          </div>

          {/* Intro Paragraph */}
          <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-zinc-700 leading-relaxed font-normal">
            If you want to watch Trex IPTV on your Amazon Fire TV, you are in the right place. This guide covers everything to install Trex IPTV from start to finish in simple, easy steps. Users need no technical experience, and the whole setup takes under 5 minutes. By the end of this guide, you will have your complete Trex IPTV channel library up and running on your Fire TV in full 4K quality.
          </p>

          {/* Cross-link banner (Mobile responsive stack) */}
          <div className="mt-6 p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Tv className="h-5 w-5 text-[#ff6b35] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                Need setup instructions for Android, Smart TV, iOS, or PC?
              </span>
            </div>
            <Link
              href="/installation-guide/"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#ff6b35] hover:text-[#ff5722] shrink-0 hover:underline"
            >
              Read Guide for other Devices <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Featured Thumbnail */}
          <div className="mt-6 sm:mt-8 relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-200">
            <Image
              src="/trex_iptv_fire_tv_thumbnail_v1.jpg"
              alt="How to Install Trex IPTV on Amazon Fire TV"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </article>

      {/* Main Content Body */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-16">
        
        {/* Table of Contents Box */}
        <div className="mb-10 sm:mb-14 p-4 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80">
          <h2 className="text-sm sm:text-base font-bold text-zinc-900 uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
            <Sliders className="h-4 w-4 text-[#ff6b35]" />
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs sm:text-sm">
            {tableOfContents.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 text-zinc-600 hover:text-[#ff6b35] hover:underline font-medium transition-colors py-1"
              >
                <span className="text-xs font-bold text-zinc-400">{idx + 1}.</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* SECTION 1: What You Need Before You Start */}
        <section id="prerequisites" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              ✓
            </span>
            What You Need Before You Start
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            Before installing Trex IPTV, make sure you have the following ready:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 bg-white shadow-sm flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-zinc-900">Active Trex IPTV Subscription</h3>
                <p className="text-[11px] sm:text-xs text-zinc-500 mt-0.5">
                  1, 3, 6, or 12-month active plan.
                </p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 bg-white shadow-sm flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-zinc-900">Login Credentials</h3>
                <p className="text-[11px] sm:text-xs text-zinc-500 mt-0.5">
                  Your username, password, and server URL.
                </p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 bg-white shadow-sm flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-zinc-900">Amazon Fire TV or Firestick Device</h3>
                <p className="text-[11px] sm:text-xs text-zinc-500 mt-0.5">
                  Plugged into HDMI and powered on.
                </p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 bg-white shadow-sm flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-zinc-900">Stable Internet Connection</h3>
                <p className="text-[11px] sm:text-xs text-zinc-500 mt-0.5">
                  At least 10 Mbps for HD or 25 Mbps for 4K streams.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 flex items-start sm:items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#ff6b35] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              Your credentials are automatically delivered via WhatsApp or email right after your subscription is confirmed.
            </span>
          </div>
        </section>

        {/* SECTION 2: Is Trex IPTV Compatible With Fire TV? */}
        <section id="compatibility" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              📺
            </span>
            Is Trex IPTV Compatible With Fire TV?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            <strong className="text-zinc-900">Yes.</strong> Trex IPTV works perfectly on every Amazon Fire TV and Firestick model, including:
          </p>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
            {[
              "Amazon Firestick 4K",
              "Amazon Firestick 4K Max",
              "Amazon Fire TV Stick Lite",
              "Amazon Fire TV Cube",
              "Fire TV Edition Smart TVs",
              "All older Firestick & Fire TV models",
            ].map((model) => (
              <div
                key={model}
                className="p-3 sm:p-3.5 rounded-xl border border-zinc-200 bg-zinc-50/50 flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-800"
              >
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0" />
                <span>{model}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Which IPTV App Should I Use on Fire TV? */}
        <section id="recommended-apps" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              ⚡
            </span>
            Which IPTV App Should I Use on Fire TV?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            Since Trex IPTV is not a standalone app, you need a compatible IPTV player to run it. Here are the best options for Fire TV:
          </p>

          <div className="space-y-3 sm:space-y-4">
            {/* IPTV Smarters */}
            <div className="p-4 sm:p-5 rounded-2xl border-2 border-[#ff6b35] bg-orange-50/30 relative shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                  IPTV Smarters Pro
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#ff6b35] text-white text-[11px] font-bold">
                  Recommended Choice
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Most popular choice for Fire TV users. Features a clean, intuitive interface, lightning-fast channel zapping, and full Xtream Codes API integration.
              </p>
            </div>

            {/* TiviMate */}
            <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white">
              <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-1">TiviMate</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Excellent EPG TV guide support, modern polish, and a familiar cable-like guide design.
              </p>
            </div>

            {/* GSE Smart IPTV */}
            <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white">
              <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-1">GSE Smart IPTV</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Feature-rich media player with versatile VOD browsing and extensive subtitle customization.
              </p>
            </div>

            {/* Perfect Player */}
            <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white">
              <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-1">Perfect Player</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Lightweight, ultra-simple setup for users who want minimal menus and fast everyday channel switching.
              </p>
            </div>
          </div>

          <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-zinc-100 text-xs sm:text-sm text-zinc-700 font-medium">
            💡 <strong>Our Recommendation:</strong> We recommend <strong>IPTV Smarters Pro</strong> for most Fire TV users as it is the easiest to set up and the most reliable overall.
          </div>
        </section>

        {/* SECTION 4: 10-Step Installation Guide */}
        <section id="step-by-step-guide" className="mb-10 sm:mb-14 scroll-mt-28">
          <div className="border-b border-zinc-200 pb-3 sm:pb-4 mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">
              Complete Walkthrough
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mt-1">
              Step-by-Step Guide to Install Trex IPTV on Fire TV
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {steps.map((s) => (
              <div
                key={s.stepNumber}
                className="relative pl-3.5 sm:pl-8 border-l-2 border-zinc-200 hover:border-[#ff6b35] transition-colors"
              >
                {/* Step circle indicator */}
                <div className="absolute -left-[14px] top-0 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white border-2 border-[#ff6b35] text-[#ff6b35] font-extrabold text-[11px] sm:text-xs shadow-sm">
                  {s.stepNumber}
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-zinc-200/80 shadow-sm">
                  <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">
                    Step {s.stepNumber}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-zinc-950 mt-1 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mb-3 sm:mb-4 leading-relaxed">
                    {s.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {s.substeps.map((sub, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-zinc-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Downloader Code Box */}
                  {s.hasCode && (
                    <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-xl bg-zinc-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#ff6b35]">
                          Trex IPTV Downloader Code
                        </span>
                        <div className="text-2xl sm:text-3xl font-black font-mono tracking-widest text-white mt-0.5">
                          686147
                        </div>
                      </div>
                      <button
                        onClick={handleCopyCode}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#ff6b35] hover:bg-[#ff5722] text-white text-xs font-bold transition-colors shadow-sm w-full sm:w-auto"
                      >
                        {copiedCode ? (
                          <>
                            <Check className="h-4 w-4" />
                            Copied to Clipboard!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copy Downloader Code
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {s.note && (
                    <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-zinc-500 italic">
                      <strong>Note:</strong> {s.note}
                    </p>
                  )}

                  {s.proTip && (
                    <div className="mt-2.5 sm:mt-3 p-2.5 sm:p-3 rounded-lg bg-amber-50 border border-amber-200/80 text-[11px] sm:text-xs text-amber-900">
                      <strong>Tip:</strong> {s.proTip}
                    </div>
                  )}

                  {s.callout && (
                    <div className="mt-3 sm:mt-4 p-3 sm:p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-700">
                      <strong className="text-zinc-900 font-bold block mb-1">
                        {s.callout.title}:
                      </strong>
                      {s.callout.text}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Add to Fire TV Home Screen */}
        <section id="home-screen-shortcut" className="mb-10 sm:mb-14 scroll-mt-28">
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-900 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#ff6b35]/20 rounded-full blur-3xl pointer-events-none" />
            
            <h2 className="text-lg sm:text-2xl font-bold tracking-tight mb-2">
              How to Add Trex IPTV to Fire TV Home Screen
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              To make it easier to launch Trex IPTV every time, follow these quick steps:
            </p>

            <ol className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#ff6b35] text-white font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                  1
                </span>
                <span>Press and hold the Home button on your remote.</span>
              </li>
              <li className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#ff6b35] text-white font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                  2
                </span>
                <span>Go to Manage Your Apps and Channels.</span>
              </li>
              <li className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#ff6b35] text-white font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                  3
                </span>
                <span>Find your IPTV player app and press the Options button (three horizontal lines).</span>
              </li>
              <li className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#ff6b35] text-white font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                  4
                </span>
                <span>Select <strong>Move to Front</strong>. It will now appear on your Fire TV home bar for 1-click access!</span>
              </li>
            </ol>
          </div>
        </section>

        {/* SECTION 6: Best Settings for Trex IPTV on Fire TV */}
        <section id="best-settings" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              ⚙️
            </span>
            Best Settings for Trex IPTV on Fire TV
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            To get the best possible streaming experience on Fire TV, apply these recommended settings:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Video Quality */}
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <Tv className="h-4 w-4 text-[#ff6b35]" />
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950 uppercase tracking-wide">
                  Video Quality
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-600 space-y-1 leading-relaxed">
                <li>• Set stream quality to <strong>Auto</strong> for the smoothest experience.</li>
                <li>• Switch to <strong>1080p manually</strong> if buffering occurs on heavy 4K streams.</li>
              </ul>
            </div>

            {/* Connection */}
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <Wifi className="h-4 w-4 text-[#ff6b35]" />
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950 uppercase tracking-wide">
                  Connection
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-600 space-y-1 leading-relaxed">
                <li>• Always use <strong>Ethernet over Wi-Fi</strong> when possible.</li>
                <li>• If using Wi-Fi, connect to the <strong>5 GHz band</strong> for faster and stabler speeds.</li>
              </ul>
            </div>

            {/* EPG */}
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-[#ff6b35]" />
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950 uppercase tracking-wide">
                  EPG Guide
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-600 space-y-1 leading-relaxed">
                <li>• Set EPG refresh to <strong>every 24 hours</strong> inside your player settings.</li>
                <li>• Keeps your TV guide updated without slowing the app down during startup.</li>
              </ul>
            </div>

            {/* Buffer Size */}
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-[#ff6b35]" />
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950 uppercase tracking-wide">
                  Buffer Size
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-600 space-y-1 leading-relaxed">
                <li>• Increase buffer size inside player settings (Small / Normal → Large).</li>
                <li>• Provides extra headroom against packet drops and eliminates freezing on live sports.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 7: Troubleshooting Trex IPTV on Fire TV */}
        <section id="troubleshooting" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              🔧
            </span>
            Troubleshooting Trex IPTV on Fire TV
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            Encountering any issues? Here are the official solutions for common Fire TV streaming questions:
          </p>

          <div className="space-y-2.5 sm:space-y-3">
            {troubleshootingList.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl sm:rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-3.5 sm:p-5 text-left flex items-center justify-between gap-3 font-bold text-zinc-900 hover:text-[#ff6b35] transition-colors text-xs sm:text-base"
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[#ff6b35] font-extrabold">Q:</span>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-[#ff6b35]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 bg-zinc-50/50">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: Final Thoughts & Support CTA */}
        <section className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#ff6b35]/10 via-orange-50/50 to-white border border-[#ff6b35]/30">
          <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 mb-2 sm:mb-3 tracking-tight">
            Final Thoughts
          </h2>
          <p className="text-xs sm:text-base text-zinc-700 leading-relaxed mb-3 sm:mb-4">
            Installing Trex IPTV on Fire TV is one of the quickest and most straightforward setups available. Once you have your credentials ready, the whole process takes under 5 minutes, and you are watching in full 4K quality on your big screen.
          </p>
          <p className="text-xs sm:text-base text-zinc-700 leading-relaxed mb-6">
            If you face any issues at any point, our support team is available 24 hours a day on WhatsApp. You will get guidance for every step in real time at no extra cost.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help setting up Trex IPTV on Fire TV")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 transition-colors shadow-sm text-center"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              Get 24/7 Setup Guidance on WhatsApp
            </a>

            <Link
              href="/subscription-plans/"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-lg bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 transition-colors shadow-sm text-center"
            >
              View Trex IPTV Subscription Plans
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
