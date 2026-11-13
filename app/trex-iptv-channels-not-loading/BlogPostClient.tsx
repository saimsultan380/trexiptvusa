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
  Tv,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedPosts from "@/components/RelatedPosts";
import BlogInlineLink from "@/components/BlogInlineLink";
import { WHATSAPP_NUMBER } from "@/lib/site";

export default function BlogPostClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const tableOfContents = [
    { id: "quick-answer", label: "Quick Answer" },
    { id: "why-not-loading", label: "Why Channels Fail" },
    { id: "twelve-fixes", label: "12 Ways to Fix" },
    { id: "firestick", label: "Firestick Tips" },
    { id: "faqs", label: "FAQs" },
  ];

  const causes = [
    "Unstable internet connection or packet loss",
    "Temporary Trex IPTV server or channel-source issues",
    "Incorrect username, password, or server URL",
    "Expired subscription or connection limit reached",
    "Outdated IPTV player or corrupted app cache",
    "VPN routing or network configuration problems",
    "Firestick or Android TV performance issues",
    "Incorrect playback decoder settings",
    "Playlist synchronization or loading errors",
  ];

  const fixes = [
    {
      stepNumber: "01",
      title: "Check Your Internet Connection",
      description:
        "Start by checking whether your device has a stable internet connection. A fast internet plan does not always guarantee smooth streaming if your Wi-Fi experiences packet loss or interruptions.",
      points: [
        "Run a speed test on your Firestick or Android TV.",
        "Open another streaming application to compare playback.",
        "Restart your router if the connection feels unstable.",
        "Temporarily disconnect unnecessary devices using your bandwidth.",
        "If other streaming applications also struggle, investigate your home internet before changing your Trex IPTV settings.",
      ],
    },
    {
      stepNumber: "02",
      title: "Check Whether All Channels Are Affected",
      description:
        "Open several channels from different categories, such as news, entertainment, sports, and general television.",
      points: [
        "If only one or two channels are not playing, their individual stream sources may be temporarily unavailable.",
        "If every channel displays a loading screen, investigate your login, playlist, internet connection, or service availability.",
        "This simple test can save you from unnecessarily reinstalling your IPTV application.",
      ],
    },
    {
      stepNumber: "03",
      title: "Restart Your Firestick or Streaming Device",
      description:
        "Temporary device errors can prevent IPTV applications from opening streams correctly.",
      points: [
        "On Firestick: Settings → My Fire TV or Device and Software → Restart.",
        "Wait for the device to reboot, then open your IPTV player and test channels again.",
        "For Android TV, use the Restart option in your device settings.",
        "Avoid repeatedly unplugging your device while an update is running.",
      ],
    },
    {
      stepNumber: "04",
      title: "Clear Your IPTV App Cache",
      description:
        "A corrupted or overloaded cache can affect playlist loading and playback.",
      points: [
        "On Firestick: Settings → Applications → Manage Installed Applications → your IPTV player → Clear Cache.",
        "Reopen the application.",
        "Try clearing the cache before clearing app data. Clearing data may remove saved login details.",
        "Amazon also recommends restarting Fire TV and clearing application cache when apps stop responding.",
      ],
    },
    {
      stepNumber: "05",
      title: "Verify Your Trex IPTV Login Details",
      description:
        "If your channels stopped working after reinstalling an app or changing devices, check your account credentials.",
      points: [
        "Make sure your username, password, and server URL match the details provided when your subscription was activated.",
        "Watch for extra spaces, incorrect letters or numbers, missing server URL information, expired subscription, or incorrect login method.",
        "If your account details are correct but channels still fail, contact support to verify account status.",
        "Not sure which login type to use? Read ",
      ],
      m3uLink: true,
    },
    {
      stepNumber: "06",
      title: "Refresh Your IPTV Playlist",
      description:
        "Sometimes an IPTV player displays an old playlist that does not reflect the latest available channel information.",
      points: [
        'Open your IPTV application and look for Refresh Playlist, Update Playlist, or Reload Channels.',
        "Allow the update to finish before opening a channel.",
        "Avoid repeatedly importing the same playlist because overlapping updates can create additional loading problems.",
      ],
    },
    {
      stepNumber: "07",
      title: "Check Your VPN Connection",
      description:
        "Some US users experience different streaming results when switching between their regular internet connection and a VPN.",
      points: [
        "Temporarily compare playback with and without your VPN, where appropriate.",
        "If the VPN is necessary, test another nearby server.",
        "Avoid repeatedly switching locations during playback.",
        "Do not assume that your internet provider is blocking Trex IPTV simply because a VPN changes the result.",
      ],
    },
    {
      stepNumber: "08",
      title: "Update Your IPTV Player",
      description: "An outdated player may have compatibility or playback problems.",
      points: [
        "If you use TiviMate, IPTV Smarters Pro, or another compatible application, check whether an update is available from its official distribution source.",
        "After updating, restart the application and test the same channels again.",
        "See our ",
      ],
      playersLink: true,
    },
    {
      stepNumber: "09",
      title: "Try Another Compatible IPTV Player",
      description:
        "Testing another supported player helps identify whether the problem comes from the application or the streaming service.",
      points: [
        "If a channel does not play in TiviMate but works in IPTV Smarters Pro on the same device and network, investigate TiviMate's settings.",
        "Compare playback using the same account on another compatible device.",
      ],
    },
    {
      stepNumber: "10",
      title: "Check Hardware and Software Decoder Settings",
      description:
        "A black screen or failed playback can sometimes result from a decoder compatibility issue.",
      points: [
        "If your IPTV player provides hardware and software decoder options, try switching the decoder and testing the same channel again.",
        "Change only one setting at a time. Not every device supports every video format.",
      ],
    },
    {
      stepNumber: "11",
      title: "Check Your Subscription and Simultaneous Connections",
      description:
        "If you use Trex IPTV on multiple devices, check whether your subscription allows the number of simultaneous connections you are attempting.",
      points: [
        "Close the application on other devices and try again. Confirm that your subscription has not expired.",
      ],
      screensLink: true,
    },
    {
      stepNumber: "12",
      title: "Contact Trex IPTV Support",
      description:
        "If channels remain unavailable after these checks, the issue may require provider-side investigation.",
      points: [
        "Collect device model, IPTV player name and version, whether all or selected channels are affected, whether VOD works, when the problem started, and whether you tested another network or device.",
        "Never share your complete password publicly or post screenshots containing your account credentials.",
      ],
    },
  ];

  const faqList = [
    {
      q: "Why are Trex IPTV channels showing but not playing?",
      a: "Your playlist may have loaded successfully while individual streams remain unavailable. Check your internet, account status, IPTV player, and channel sources.",
    },
    {
      q: "Why is Trex IPTV stuck on loading?",
      a: "A slow network, application cache problem, outdated player, incorrect credentials, or temporary stream issue can cause endless loading. Restart your device and test multiple channels.",
    },
    {
      q: "Why does Trex IPTV work on my phone but not Firestick?",
      a: "The issue may involve Firestick storage, app cache, network connectivity, or player compatibility. Test both devices using the same network to narrow down the cause.",
    },
    {
      q: "Why are some Trex IPTV channels working while others are not?",
      a: "Individual channel sources can experience separate interruptions. If other channels play normally, the issue may be limited to the affected streams rather than your entire subscription.",
    },
    {
      q: "Does a VPN fix Trex IPTV channels not loading?",
      a: "Not necessarily. A VPN may improve a problematic network route in some situations, but it can also introduce additional connection delays. Compare both connections where appropriate.",
    },
    {
      q: "What should I do if no Trex IPTV channels work?",
      a: "Restart your device and router, verify your login details, refresh the playlist, and test another compatible player. If the problem continues across devices, contact Trex IPTV support.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col overflow-x-hidden">
      <Header />

      <article className="pt-24 pb-8 sm:pt-36 sm:pb-12 lg:pt-44 lg:pb-16 bg-gradient-to-b from-zinc-50/80 via-white to-white border-b border-zinc-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-xs font-semibold">
            <Link href="/" className="text-zinc-500 hover:text-[#ff6b35] transition-colors">Home</Link>
            <span className="text-zinc-300">/</span>
            <Link href="/blog/" className="text-zinc-500 hover:text-[#ff6b35] transition-colors">Blog</Link>
            <span className="text-zinc-300">/</span>
            <span className="text-[#ff6b35] truncate max-w-[200px] sm:max-w-none">Channels Not Loading</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
            Trex IPTV Channels Not Loading? 12 Ways to Fix It Easily
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-500 pb-6 sm:pb-8 border-b border-zinc-100">
            <div className="flex items-center gap-2 font-semibold text-zinc-800">
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] flex items-center justify-center font-bold text-xs">T</div>
              <span>Trex IPTV Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-zinc-400" />
              <span>November 2026</span>
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
            When Trex IPTV channels are not loading, you may see a spinning circle, a black screen, a playback error, or a channel that appears in your playlist but never starts. This problem can happen on Amazon Firestick, Android TV, Smart TVs, and IPTV players such as TiviMate and IPTV Smarters.
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-zinc-700 leading-relaxed font-normal">
            For US users, the cause can range from an unstable Wi-Fi connection and incorrect login details to an outdated IPTV player, VPN routing issues, or a temporary server-side problem. In this guide, we explain why Trex IPTV channels stop loading and how to restore playback without changing unnecessary settings.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Zap className="h-5 w-5 text-[#ff6b35] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-800">Channels load but freeze mid-playback?</span>
            </div>
            <Link href="/trex-iptv-keeps-buffering/" className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#ff6b35] hover:text-[#ff5722] shrink-0 hover:underline">
              Fix Trex IPTV buffering <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-200">
            <Image src="/trex_iptv_channels_not_loading_wide.png" alt="Trex IPTV channels not loading fixes" fill priority className="object-cover object-center" />
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
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-zinc-600 hover:text-[#ff6b35] hover:underline font-medium transition-colors py-1">
                <span className="text-xs font-bold text-zinc-400">{idx + 1}.</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <section id="quick-answer" className="mb-10 sm:mb-14 scroll-mt-28">
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-900 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#ff6b35]/20 rounded-full blur-3xl pointer-events-none" />
            <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">Quick Answer</span>
            <h2 className="text-lg sm:text-2xl font-bold tracking-tight mt-1 mb-3">How to Restore Trex IPTV Channels Fast</h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Test your internet and whether all channels or only some fail, restart the device, clear IPTV cache, verify login credentials, refresh the playlist, and compare another player. Check connection limits if you stream on multiple screens.
            </p>
          </div>
        </section>

        <section id="why-not-loading" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              <Tv className="h-4 w-4" />
            </span>
            Why Are Trex IPTV Channels Not Loading?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            Before changing your settings, identify what is happening. Do all channels fail, or does the problem affect only a few? Does your playlist load successfully while individual channels remain stuck? Here are some common reasons:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-4">
            {causes.map((item) => (
              <div key={item} className="p-3 sm:p-3.5 rounded-xl border border-zinc-200 bg-white flex items-start gap-2 text-xs sm:text-sm font-medium text-zinc-800">
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            Reddit users have reported Trex channels taking unusually long to start in TiviMate, even with high-speed internet connections. Other discussions describe playlists loading while individual channels remain unavailable. These experiences show why checking the player, network, and individual streams separately is important.
          </p>
        </section>

        <div className="mb-10 sm:mb-14 relative w-full max-w-xl mx-auto aspect-square rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-200">
          <Image src="/trex_iptv_channels_not_loading_square.png" alt="Trex IPTV channels not loading troubleshooting" fill sizes="(max-width: 640px) 100vw, 576px" className="object-cover object-center" />
        </div>

        <section id="twelve-fixes" className="mb-10 sm:mb-14 scroll-mt-28">
          <div className="border-b border-zinc-200 pb-3 sm:pb-4 mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">Complete Walkthrough</span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mt-1">12 Ways to Fix Trex IPTV Channels Not Loading</h2>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {fixes.map((s) => (
              <div key={s.stepNumber} className="relative pl-3.5 sm:pl-8 border-l-2 border-zinc-200 hover:border-[#ff6b35] transition-colors">
                <div className="absolute -left-[14px] top-0 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white border-2 border-[#ff6b35] text-[#ff6b35] font-extrabold text-[11px] sm:text-xs shadow-sm">{s.stepNumber}</div>
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-zinc-200/80 shadow-sm">
                  <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">Fix {s.stepNumber}</span>
                  <h3 className="text-base sm:text-xl font-bold text-zinc-950 mt-1 mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mb-3 sm:mb-4 leading-relaxed">
                    {s.description}
                    {s.screensLink && (
                      <>
                        {" "}
                        If you regularly watch on multiple screens, read our guide on{" "}
                        <BlogInlineLink href="/trex-iptv-multiple-screens/">Trex IPTV multiple screens and simultaneous connections</BlogInlineLink>
                        .
                      </>
                    )}
                  </p>
                  <ul className="space-y-2">
                    {s.points.map((point, pi) => (
                      <li key={point} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>
                          {point}
                          {s.m3uLink && pi === s.points.length - 1 && (
                            <>
                              {" "}
                              <BlogInlineLink href="/trex-iptv-m3u-vs-xtream-codes/">Trex IPTV M3U vs Xtream Codes</BlogInlineLink>
                              .
                            </>
                          )}
                          {s.playersLink && pi === s.points.length - 1 && (
                            <>
                              {" "}
                              <BlogInlineLink href="/best-iptv-players-for-trex-iptv/">best IPTV players for Trex IPTV</BlogInlineLink>{" "}
                              guide.
                            </>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="firestick" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">Trex IPTV Channels Not Loading on Firestick: What Should You Do?</h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-3">
            Firestick users should start with three basic checks: restart the device, clear the IPTV application&apos;s cache, and test the internet connection.
          </p>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-3">
            If channels still do not play, try another compatible IPTV player and check whether the same account works on another device. For complete installation instructions, follow our{" "}
            <BlogInlineLink href="/installation-guide/">Trex IPTV installation guide</BlogInlineLink>{" "}
            and{" "}
            <BlogInlineLink href="/how-to-install-trex-iptv-on-firetv/">Fire TV Trex IPTV setup guide</BlogInlineLink>
            . For Firestick-specific buffering, see{" "}
            <BlogInlineLink href="/trex-iptv-buffering-firestick/">Trex IPTV buffering on Firestick</BlogInlineLink>.
          </p>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed">
            If the actual problem is continuous buffering rather than channels failing to start, see our guide on{" "}
            <BlogInlineLink href="/trex-iptv-keeps-buffering/">how to fix Trex IPTV buffering</BlogInlineLink>.
          </p>
        </section>

        <section className="mb-10 sm:mb-14 p-5 sm:p-8 rounded-2xl border border-zinc-200 bg-zinc-50">
          <h2 className="text-lg sm:text-xl font-extrabold text-zinc-950 mb-2">Get Your Trex IPTV Streaming Working Again</h2>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            Trex IPTV channels not loading does not always mean your subscription or streaming device is faulty. The problem may originate from your internet connection, IPTV player, playlist, account, or an individual channel source. Follow the troubleshooting steps in order instead of changing multiple settings simultaneously. If the issue persists across different devices and networks, contact the Trex IPTV support team for further assistance.
          </p>
        </section>

        <section id="faqs" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-2.5 sm:space-y-3">
            {faqList.map((item, idx) => (
              <div key={idx} className="rounded-xl sm:rounded-2xl border border-zinc-200 bg-white overflow-hidden">
                <button onClick={() => toggleFaq(idx)} className="w-full p-3.5 sm:p-5 text-left flex items-center justify-between gap-3 font-bold text-zinc-900 hover:text-[#ff6b35] transition-colors text-xs sm:text-base">
                  <span className="flex items-center gap-2 sm:gap-3"><span className="text-[#ff6b35] font-extrabold">Q:</span>{item.q}</span>
                  <ChevronDown className={`h-4 w-4 text-zinc-400 shrink-0 transition-transform duration-200 ${openFaq === idx ? "rotate-180 text-[#ff6b35]" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 bg-zinc-50/50">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <RelatedPosts currentSlug="trex-iptv-channels-not-loading" />

        <section className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#ff6b35]/10 via-orange-50/50 to-white border border-[#ff6b35]/30">
          <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 mb-2 sm:mb-3 tracking-tight">Still Can&apos;t Load Trex IPTV Channels?</h2>
          <p className="text-xs sm:text-base text-zinc-700 leading-relaxed mb-6">
            Share device, player, and channel details with support via WhatsApp or browse the{" "}
            <BlogInlineLink href="/blog/">Trex IPTV blog</BlogInlineLink>.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, my Trex IPTV channels are not loading")}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 transition-colors shadow-sm">
              <MessageCircle className="h-4 w-4 shrink-0" />
              Contact Trex IPTV Support
            </a>
            <Link href="/subscription-plans/" className="inline-flex h-11 sm:h-12 items-center justify-center rounded-lg bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 transition-colors shadow-sm text-center">
              View Subscription Plans
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
