"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sliders,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedPosts from "@/components/RelatedPosts";
import BlogInlineLink from "@/components/BlogInlineLink";
import { WHATSAPP_NUMBER } from "@/lib/site";

export default function BlogPostClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const tableOfContents = [
    { id: "quick-answer", label: "Quick Answer" },
    { id: "fifteen-fixes", label: "15 Ways to Fix Buffering" },
    { id: "one-device", label: "Buffers Only on One Device?" },
    { id: "live-sports", label: "Buffers During Live Sports?" },
    { id: "stop-changing", label: "When to Stop Changing Settings" },
    { id: "checklist", label: "Final Checklist" },
    { id: "faqs", label: "FAQs" },
  ];

  const quickCauses = [
    "Unstable Wi-Fi",
    "Network congestion",
    "High latency or packet loss",
    "Too many devices using the network",
    "Firestick or Android TV performance",
    "Outdated IPTV player",
    "Large app cache",
    "VPN routing",
    "A specific channel or stream source",
    "Provider-side server congestion",
    "Multiple active connections",
    "Incorrect player settings",
    "VOD-specific problems",
    "ISP routing problems",
    "Temporary service-side issues",
  ];

  const fixes = [
    {
      stepNumber: "01",
      title: "Check Your Internet Connection",
      description:
        "Do not only look at your advertised download speed. A connection can have high download speed but still experience latency, packet loss, or Wi-Fi instability.",
      points: [
        "Run a speed test on the same device where Trex IPTV is buffering.",
        "Then test another streaming application.",
        "If other streaming services also freeze, your home network is more likely to be the problem.",
        "For HD streaming, a stable connection matters more than an impressive speed-test number.",
      ],
    },
    {
      stepNumber: "02",
      title: "Restart Your Router",
      description:
        "This is simple, but it can solve temporary network problems.",
      points: [
        "Turn off your router for around 30 seconds and restart it.",
        "Wait until the internet connection is fully restored before opening Trex IPTV again.",
        "If buffering suddenly disappears, the problem may have been temporary network congestion or a router issue.",
      ],
    },
    {
      stepNumber: "03",
      title: "Move From Wi-Fi to Ethernet",
      description:
        "If your device supports Ethernet, test a wired connection. Wi-Fi can be affected by walls, distance, interference and other devices.",
      points: [
        "Especially useful for Firestick, Android TV boxes and Smart TVs far from the router.",
        "If Trex IPTV works smoothly over Ethernet but buffers heavily over Wi-Fi, focus on your wireless network.",
        "Do not immediately blame the IPTV service if Ethernet fixes the problem.",
      ],
    },
    {
      stepNumber: "04",
      title: "Reduce Network Traffic",
      description:
        "Someone watching 4K video, downloading large files, gaming or uploading data can affect the available bandwidth.",
      points: [
        "Temporarily disconnect unnecessary devices and test Trex IPTV again.",
        "If buffering disappears when other devices stop using the network, your IPTV connection may simply be competing for network resources.",
      ],
    },
    {
      stepNumber: "05",
      title: "Restart Your Firestick or Android TV",
      description:
        "A device that has been running for a long time can develop temporary performance problems.",
      points: [
        "Restart the device rather than simply closing the IPTV application.",
        "On Firestick, restart it and then open your IPTV player again.",
        "Also check available storage — very limited storage can affect overall device performance.",
      ],
    },
    {
      stepNumber: "06",
      title: "Clear the IPTV App Cache",
      description:
        "If you use an IPTV application that has accumulated a large cache, clearing it can help with application-related problems.",
      points: [
        "On Firestick: Settings → Applications → Manage Installed Applications → Your IPTV App → Clear Cache.",
        "Do not immediately select Clear Data unless you know your login information.",
        "Clearing data can remove saved application data.",
      ],
      warning:
        "Have your Trex IPTV credentials ready before choosing Clear Data.",
    },
    {
      stepNumber: "07",
      title: "Test Another IPTV Player",
      description:
        "Sometimes the problem is not the IPTV service itself. Testing another compatible player can help identify whether the player is responsible.",
      points: [
        "Some users report better VOD performance after switching players.",
        "Changing buffer size or user-agent in TiviMate has helped in some cases — but not every case.",
        "Compare the same channel in two different players before changing your whole setup.",
      ],
    },
    {
      stepNumber: "08",
      title: "Check TiviMate Buffer Settings",
      description:
        "If you use TiviMate, test its playback and buffer-related settings carefully.",
      points: [
        "Do not change many settings at once.",
        "Make one change, test the same channel, and then compare the result.",
        "If one particular stream improves while others remain unchanged, you have useful diagnostic information.",
      ],
    },
    {
      stepNumber: "09",
      title: "Test With and Without a VPN",
      description:
        "A VPN can sometimes help and sometimes make buffering worse. A VPN adds another network route.",
      points: [
        "If your normal route to the streaming server is poor, a VPN can occasionally provide a better route.",
        "If the VPN server is congested, it can increase latency and reduce available throughput.",
        "Test the same channel with the VPN off and on.",
        "If performance becomes worse with the VPN, disable it for the test.",
      ],
    },
    {
      stepNumber: "10",
      title: "Try a Different VPN Server",
      description:
        "If buffering only happens while using a VPN, the selected server may be the issue.",
      points: [
        "Try another nearby server and compare the result.",
        "Do not keep switching servers repeatedly if your IPTV service has connection or authentication limits.",
        "Some servers work while others cause access or speed problems.",
      ],
    },
    {
      stepNumber: "11",
      title: "Check If Only One Channel Buffers",
      description:
        "This is one of the most useful tests before changing your entire setup.",
      points: [
        "If every channel buffers, investigate your internet, device, player, VPN and overall service connection.",
        "If only one channel buffers, the problem may be specific to that channel's source.",
        "Try several different channels before changing your entire setup.",
      ],
    },
    {
      stepNumber: "12",
      title: "Test Live TV and VOD Separately",
      description:
        "Do not assume that live TV and VOD will behave identically.",
      points: [
        "Test a normal live channel.",
        "Test a different live channel.",
        "Test a VOD movie or episode.",
        "If live TV works but VOD constantly buffers, the problem may be related to the VOD source, player or server.",
      ],
    },
    {
      stepNumber: "13",
      title: "Watch for Evening Buffering",
      description:
        "Does Trex IPTV work perfectly during the afternoon but start buffering around 7 PM or later? That pattern is important.",
      points: [
        "Compare daytime and evening playback on the same channels.",
        "If other streaming services work normally at night but Trex struggles, the issue may be stream route or service-side capacity.",
        "Record the approximate times when buffering starts and stops.",
      ],
      tip: "Evening-only buffering should be diagnosed separately from all-day Wi-Fi problems.",
    },
    {
      stepNumber: "14",
      title: "Check for Multiple Active Connections",
      description:
        "If your subscription has a connection limit, make sure another device is not using the same account at the same time.",
      points: [
        "A forgotten phone, TV, Firestick or Android box may still have an active session.",
        "Connection limits can be enforced at the server, so an additional stream may fail even when the app looks normal.",
        "Confirm how many simultaneous connections are included with your plan.",
      ],
    },
    {
      stepNumber: "15",
      title: "Contact Support if Everything Else Works",
      description:
        "If your internet is stable, other streaming apps work, your device is performing normally, and multiple Trex channels still buffer, the issue may be outside your home setup.",
      points: [
        "Device model",
        "IPTV player",
        "Channel name",
        "Approximate time of buffering",
        "Whether all channels or only some channels are affected",
        "Whether VOD also buffers",
        "Whether VPN is enabled",
        "Whether other streaming services work normally",
      ],
      tip: "Give support useful details instead of simply saying “Trex is buffering.”",
    },
  ];

  const stopChanging = [
    "Ethernet",
    "Another device",
    "Another IPTV player",
    "VPN on and off",
    "Several channels",
    "Live TV and VOD",
    "Different times of day",
  ];

  const checklist = [
    "Test internet stability",
    "Restart the router",
    "Try Ethernet",
    "Reduce network traffic",
    "Restart the device",
    "Clear app cache",
    "Test another IPTV player",
    "Check TiviMate settings",
    "Test VPN on and off",
    "Try another VPN server",
    "Test multiple channels",
    "Compare live TV and VOD",
    "Check evening-only buffering",
    "Check simultaneous connections",
    "Contact support with detailed information",
  ];

  const faqList = [
    {
      q: "Why does Trex IPTV keep buffering even with fast internet?",
      a: "Fast internet does not guarantee stable streaming. Wi-Fi interference, latency, packet loss, routing, device performance, and server-side problems can still cause buffering.",
    },
    {
      q: "Why does Trex IPTV buffer at night?",
      a: "If buffering happens mainly during evening hours while daytime playback is normal, compare several channels and other streaming services. A recurring evening-only pattern can indicate congestion or a service-side capacity issue.",
    },
    {
      q: "Why does Trex IPTV buffer on Firestick but work elsewhere?",
      a: "The Firestick may have limited resources, Wi-Fi problems, cache issues, or an application-specific playback problem. Test another player and, if possible, Ethernet.",
    },
    {
      q: "Can a VPN fix Trex IPTV buffering?",
      a: "Sometimes, but not always. A VPN can change your network route and may improve a poor route, but it can also add latency and reduce throughput. Test both conditions.",
    },
    {
      q: "Why does only one Trex IPTV channel buffer?",
      a: "The individual channel source may be having a problem. Test several other channels. If everything else works, changing your entire setup may not solve that specific stream.",
    },
    {
      q: "Does TiviMate cause Trex IPTV buffering?",
      a: "It can be a factor in some situations, but buffering is not automatically a TiviMate problem. Recent users have reported TiviMate-specific VOD and playback issues, so testing another player is a useful diagnostic step.",
    },
    {
      q: "Should I increase the IPTV buffer size?",
      a: "It can sometimes help with short network interruptions, but a larger buffer cannot repair a consistently unstable server or connection. Change it gradually and test.",
    },
    {
      q: "Is Trex IPTV buffering always a server problem?",
      a: "No. Your Wi-Fi, router, ISP route, VPN, device, player and local network can all cause buffering. Test the local setup before assuming the server is responsible.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col overflow-x-hidden">
      <Header />

      <article className="pt-24 pb-8 sm:pt-36 sm:pb-12 lg:pt-44 lg:pb-16 bg-gradient-to-b from-zinc-50/80 via-white to-white border-b border-zinc-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-xs font-semibold">
            <Link href="/" className="text-zinc-500 hover:text-[#ff6b35] transition-colors">
              Home
            </Link>
            <span className="text-zinc-300">/</span>
            <Link href="/blog/" className="text-zinc-500 hover:text-[#ff6b35] transition-colors">
              Blog
            </Link>
            <span className="text-zinc-300">/</span>
            <span className="text-[#ff6b35] truncate max-w-[200px] sm:max-w-none">
              15 Buffering Fixes
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
            Trex IPTV Keeps Buffering? 15 Ways to Fix Trex IPTV Buffering
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-500 pb-6 sm:pb-8 border-b border-zinc-100">
            <div className="flex items-center gap-2 font-semibold text-zinc-800">
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] flex items-center justify-center font-bold text-xs">
                T
              </div>
              <span>Trex IPTV Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-zinc-400" />
              <span>September 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-zinc-400" />
              <span>12 min read</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Guide
            </div>
          </div>

          <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-zinc-700 leading-relaxed font-normal">
            Trex IPTV buffering can be frustrating, especially when a channel plays for a few seconds and then freezes. The problem can happen on Firestick, Android TV, Smart TV, mobile devices, or IPTV players such as TiviMate.
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-zinc-700 leading-relaxed font-normal">
            The important thing is to identify where the problem is coming from. Buffering can be caused by weak Wi-Fi, network congestion, device performance, an IPTV player, VPN routing, a particular channel source, or the IPTV server itself. For Firestick-specific steps, also see our{" "}
            <BlogInlineLink href="/trex-iptv-buffering-firestick/">
              Trex IPTV buffering on Firestick guide
            </BlogInlineLink>
            .
          </p>

          <div className="mt-6 p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Zap className="h-5 w-5 text-[#ff6b35] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                Second screen freezing? It may be a connection limit.
              </span>
            </div>
            <Link
              href="/trex-iptv-multiple-screens/"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#ff6b35] hover:text-[#ff5722] shrink-0 hover:underline"
            >
              Check Trex IPTV multiple screens guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-200">
            <Image
              src="/trex_iptv_15_buffering_fixes_wide.png"
              alt="Trex IPTV keeps buffering 15 ways to fix"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </article>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-16">
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

        {/* Quick Answer */}
        <section id="quick-answer" className="mb-10 sm:mb-14 scroll-mt-28">
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-900 text-white shadow-xl relative overflow-hidden mb-6">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#ff6b35]/20 rounded-full blur-3xl pointer-events-none" />
            <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">
              Quick Answer
            </span>
            <h2 className="text-lg sm:text-2xl font-bold tracking-tight mt-1 mb-3">
              Why Does Trex IPTV Keep Buffering?
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Start with the simplest tests before changing advanced settings. Trex IPTV may keep buffering for many local and service-side reasons — work through the list below in order.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {quickCauses.map((item) => (
              <div
                key={item}
                className="p-3 rounded-xl border border-zinc-200 bg-zinc-50/50 flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-800"
              >
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Mid square image */}
        <div className="mb-10 sm:mb-14 relative w-full max-w-xl mx-auto aspect-square rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-200">
          <Image
            src="/trex_iptv_15_buffering_fixes_square.png"
            alt="15 practical fixes for Trex IPTV buffering"
            fill
            sizes="(max-width: 640px) 100vw, 576px"
            className="object-cover object-center"
          />
        </div>

        {/* 15 Fixes */}
        <section id="fifteen-fixes" className="mb-10 sm:mb-14 scroll-mt-28">
          <div className="border-b border-zinc-200 pb-3 sm:pb-4 mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">
              Complete Walkthrough
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mt-1">
              15 Ways to Fix Trex IPTV Buffering
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {fixes.map((s) => (
              <div
                key={s.stepNumber}
                className="relative pl-3.5 sm:pl-8 border-l-2 border-zinc-200 hover:border-[#ff6b35] transition-colors"
              >
                <div className="absolute -left-[14px] top-0 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white border-2 border-[#ff6b35] text-[#ff6b35] font-extrabold text-[11px] sm:text-xs shadow-sm">
                  {s.stepNumber}
                </div>
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-zinc-200/80 shadow-sm">
                  <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">
                    Fix {s.stepNumber}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-zinc-950 mt-1 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mb-3 sm:mb-4 leading-relaxed">
                    {s.description}
                    {s.stepNumber === "05" && (
                      <>
                        {" "}
                        Need a clean reinstall? Use the{" "}
                        <BlogInlineLink href="/how-to-install-trex-iptv-on-firetv/">
                          Trex IPTV Fire TV installation guide
                        </BlogInlineLink>
                        .
                      </>
                    )}
                    {s.stepNumber === "14" && (
                      <>
                        {" "}
                        Learn how limits work in our{" "}
                        <BlogInlineLink href="/trex-iptv-multiple-screens/">
                          Trex IPTV multiple screens guide
                        </BlogInlineLink>
                        .
                      </>
                    )}
                  </p>
                  <ul className="space-y-2 mb-2">
                    {s.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-zinc-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {s.tip && (
                    <div className="mt-3 p-2.5 sm:p-3 rounded-lg bg-amber-50 border border-amber-200/80 text-[11px] sm:text-xs text-amber-900">
                      <strong>Tip:</strong> {s.tip}
                    </div>
                  )}
                  {s.warning && (
                    <div className="mt-3 p-2.5 sm:p-3 rounded-lg bg-red-50 border border-red-200/80 text-[11px] sm:text-xs text-red-900">
                      <strong>Important:</strong> {s.warning}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* One device */}
        <section id="one-device" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            What If Trex IPTV Buffers Only on One Device?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            Test the same account on another compatible device. For example, if Trex buffers on your Firestick but works normally on another device using the same network, investigate the Firestick, IPTV app, cache or playback settings.
          </p>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed">
            If it buffers on every device, the problem is less likely to be limited to one device. You can also compare device setups in the{" "}
            <BlogInlineLink href="/installation-guide/">
              multi-device Trex IPTV installation guide
            </BlogInlineLink>
            .
          </p>
        </section>

        {/* Live sports */}
        <section id="live-sports" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            What If Trex IPTV Buffers During Live Sports?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed">
            Live sports can expose streaming problems more quickly because many people watch the same event at the same time. Test another channel and compare normal live TV with the sports stream. If ordinary channels work while one major event constantly buffers, the issue may be related to that particular stream source or service capacity rather than your entire internet connection.
          </p>
        </section>

        {/* Stop changing */}
        <section id="stop-changing" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            When Should You Stop Changing Settings?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            If you have already tested the following and the same problem continues, stop changing random settings:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-4">
            {stopChanging.map((item) => (
              <div
                key={item}
                className="p-3 rounded-xl border border-zinc-200 bg-white flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-800"
              >
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed">
            At that point, collect the details and{" "}
            <BlogInlineLink href="/contact/">
              contact Trex IPTV support
            </BlogInlineLink>
            . Repeatedly changing decoder, buffer, and network settings can make troubleshooting harder because you no longer know which change caused the result.
          </p>
        </section>

        {/* Checklist */}
        <section id="checklist" className="mb-10 sm:mb-14 scroll-mt-28">
          <div className="p-4 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <h2 className="text-sm sm:text-base font-bold text-zinc-950 mb-3">
              Final Checklist
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mb-3">
              When Trex IPTV keeps buffering, work through these 15 checks:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              ?
            </span>
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            Still stuck with freezing streams? These answers cover the most common buffering questions.
          </p>
          <div className="space-y-2.5 sm:space-y-3">
            {faqList.map((item, idx) => (
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

        <RelatedPosts currentSlug="trex-iptv-keeps-buffering" />

        <section className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#ff6b35]/10 via-orange-50/50 to-white border border-[#ff6b35]/30">
          <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 mb-2 sm:mb-3 tracking-tight">
            Still Buffering After These Fixes?
          </h2>
          <p className="text-xs sm:text-base text-zinc-700 leading-relaxed mb-3 sm:mb-4">
            Work through the checklist above, then share device, player, channel, and timing details with support. Browse more help in the{" "}
            <BlogInlineLink href="/blog/">
              Trex IPTV blog
            </BlogInlineLink>{" "}
            or review{" "}
            <BlogInlineLink href="/subscription-plans/">
              Trex IPTV subscription plans
            </BlogInlineLink>
            .
          </p>
          <p className="text-xs sm:text-base text-zinc-700 leading-relaxed mb-6">
            Only use IPTV services and content that you are legally authorised to access in your location.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help fixing Trex IPTV buffering")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 transition-colors shadow-sm text-center"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              Contact Trex IPTV Support
            </a>
            <Link
              href="/subscription-plans/"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-lg bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 transition-colors shadow-sm text-center"
            >
              View Subscription Plans
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
