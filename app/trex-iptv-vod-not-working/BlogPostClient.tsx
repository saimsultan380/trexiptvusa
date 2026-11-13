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
  Film,
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
    { id: "why-vod-fails", label: "Why VOD Fails" },
    { id: "eight-fixes", label: "8 Ways to Fix VOD" },
    { id: "vod-table", label: "VOD Problems Table" },
    { id: "firestick-tivimate", label: "Firestick & TiviMate" },
    { id: "faqs", label: "FAQs" },
  ];

  const causes = [
    "Unstable internet connection",
    "Temporary VOD server or stream interruptions",
    "Outdated IPTV application",
    "Expired subscription or restricted account access",
    "Incorrect playlist synchronization",
    "Unsupported video or audio format",
    "Corrupted application cache",
    "Missing movie or series information",
    "Incorrect Xtream Codes or M3U configuration",
  ];

  const fixes = [
    {
      stepNumber: "01",
      title: "Check Your Internet Connection",
      description:
        "Movies and series require a stable connection for continuous playback. If your internet connection frequently drops, VOD content may remain stuck on loading or stop during playback.",
      points: [
        "Run a speed test, restart your router, and try another streaming application.",
        "If you are using Wi-Fi, consider testing an Ethernet connection where available.",
      ],
    },
    {
      stepNumber: "02",
      title: "Refresh Your Trex IPTV Playlist",
      description:
        "Sometimes your IPTV player displays outdated VOD categories or content information.",
      points: [
        'Open your IPTV application and look for options such as Refresh Playlist, Reload Content, or Update Playlist.',
        "Allow the synchronization to finish before checking your movies and series again.",
      ],
    },
    {
      stepNumber: "03",
      title: "Clear Your IPTV Player Cache",
      description: "Temporary application data can sometimes interfere with VOD playback.",
      points: [
        "On Firestick: Settings → Applications → Manage Installed Applications → your IPTV player → Clear Cache.",
        "Reopen the application and test a movie.",
        "Avoid selecting Clear Data unless necessary, as this may remove your saved login details and settings.",
      ],
    },
    {
      stepNumber: "04",
      title: "Update Your IPTV Application",
      description: "An outdated player may have compatibility problems with certain video streams.",
      points: [
        "Check for updates through the application's official distribution source.",
        "After updating, restart your device and try playing the same movie or episode again.",
      ],
    },
    {
      stepNumber: "05",
      title: "Try Another Compatible IPTV Player",
      description:
        "If Trex IPTV movies are not playing in TiviMate, try another compatible application, such as IPTV Smarters Pro.",
      points: [
        "If the same content works in another player, the original application's configuration or playback compatibility may be responsible.",
      ],
      afterPoints: { href: "/best-iptv-players-for-trex-iptv/", label: "best IPTV players for Trex IPTV comparison" },
    },
    {
      stepNumber: "06",
      title: "Check Your Subscription and VOD Access",
      description:
        "Sometimes Live TV works while Movies and Series remain unavailable.",
      points: [
        "Check whether your subscription includes VOD access and whether your account is still active.",
        "If the VOD categories are missing completely, contact Trex IPTV support to verify your account and playlist permissions.",
      ],
      afterPoints: { href: "/subscription-plans/", label: "Trex IPTV subscription plans" },
    },
    {
      stepNumber: "07",
      title: "Check Video and Audio Decoder Settings",
      description:
        "If a movie opens but displays a black screen or has no sound, the problem may involve video or audio format compatibility.",
      points: [
        "If your player provides hardware and software decoder options, try switching between them.",
        "Also check the available audio track and subtitle settings.",
        "Change one setting at a time and test playback again.",
      ],
    },
    {
      stepNumber: "08",
      title: "Test Different Movies and Episodes",
      description: "Do not assume every VOD problem affects your entire subscription.",
      points: [
        "Try opening several movies and episodes.",
        "If only one title fails, its individual stream may be temporarily unavailable.",
        "If all movies and series fail across different players, contact your provider for further investigation.",
      ],
    },
  ];

  const vodRows = [
    { problem: "Movies not loading", cause: "Stream interruption", action: "Try another movie" },
    { problem: "Series not showing", cause: "Playlist synchronization", action: "Refresh the playlist" },
    { problem: "VOD stuck on loading", cause: "Network or stream issue", action: "Test your connection" },
    { problem: "Black screen during playback", cause: "Decoder compatibility", action: "Change decoder settings" },
    { problem: "No sound in movies", cause: "Audio compatibility", action: "Try another audio track" },
    { problem: "Movie posters missing", cause: "Metadata or image loading issue", action: "Refresh VOD content" },
    { problem: "Episodes not playing", cause: "Individual stream problem", action: "Test another episode" },
    { problem: "VOD categories missing", cause: "Account or playlist configuration", action: "Contact support" },
  ];

  const faqList = [
    {
      q: "Why are Trex IPTV movies not playing?",
      a: "Possible reasons include an unavailable stream, unstable internet, an outdated player, or account restrictions. Try another movie and check whether Live TV works.",
    },
    {
      q: "Why are Trex IPTV series not showing?",
      a: "Your playlist may not have synchronized correctly, or your account may not include the relevant VOD categories. Refresh the playlist and verify your subscription.",
    },
    {
      q: "Why does Trex IPTV VOD keep buffering?",
      a: "Unstable Wi-Fi, network congestion, device limitations, or stream interruptions can cause buffering. Test your connection and compare playback on another device. If Live TV buffers too, see our guide on Trex IPTV keeps buffering.",
    },
    {
      q: "Does TiviMate support Trex IPTV VOD?",
      a: "TiviMate supports compatible IPTV playlists and can organize VOD content when the playlist supplies the necessary information and supported streams.",
    },
    {
      q: "What should I do if Live TV works but VOD does not?",
      a: "Refresh your playlist, check your account's VOD access, and test different movies and series. If channels also fail, read our Trex IPTV channels not loading guide. If the problem continues, contact your provider.",
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
            <span className="text-[#ff6b35] truncate max-w-[200px] sm:max-w-none">VOD Fix Guide</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
            Trex IPTV VOD Not Working? Fix Movies &amp; Series Playback Issues
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
              <span>10 min read</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Guide
            </div>
          </div>

          <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-zinc-700 leading-relaxed font-normal">
            Are movies or TV series not loading on your Trex IPTV account? VOD (Video on Demand) problems can occur when movies fail to play, series disappear, posters do not load, or videos remain stuck on a loading screen. These issues can affect users watching Trex IPTV on Amazon Firestick, Android TV, Smart TVs, and IPTV players such as TiviMate and IPTV Smarters Pro.
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-zinc-700 leading-relaxed font-normal">
            The problem may be related to your internet connection, IPTV player, playlist, account access, or an individual VOD stream. If live channels fail too, see our{" "}
            <BlogInlineLink href="/trex-iptv-channels-not-loading/">Trex IPTV channels not loading guide</BlogInlineLink>
            .
          </p>

          <div className="mt-6 p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Zap className="h-5 w-5 text-[#ff6b35] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-800">Catch-up replays failing instead of VOD?</span>
            </div>
            <Link href="/trex-iptv-catch-up-not-working/" className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#ff6b35] hover:text-[#ff5722] shrink-0 hover:underline">
              Fix Trex IPTV catch-up <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-200">
            <Image src="/trex_iptv_vod_not_working_wide.png" alt="Trex IPTV VOD not working fixes" fill priority className="object-cover object-center" />
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
            <h2 className="text-lg sm:text-2xl font-bold tracking-tight mt-1 mb-3">How to Fix Trex IPTV VOD Fast</h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Start with your internet connection, refresh your playlist, clear the IPTV app cache, and update your player. Test several movies and episodes to see whether the issue is global or title-specific. If Live TV works but VOD does not, verify VOD access on your subscription before contacting support.
            </p>
          </div>
        </section>

        <section id="why-vod-fails" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              <Film className="h-4 w-4" />
            </span>
            Why Is Trex IPTV VOD Not Working?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            Understanding the exact problem can help you choose the right solution instead of changing multiple settings unnecessarily. Some common reasons include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {causes.map((item) => (
              <div key={item} className="p-3 sm:p-3.5 rounded-xl border border-zinc-200 bg-white flex items-start gap-2 text-xs sm:text-sm font-medium text-zinc-800">
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-10 sm:mb-14 relative w-full max-w-xl mx-auto aspect-square rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-200">
          <Image src="/trex_iptv_vod_not_working_square.png" alt="Trex IPTV VOD troubleshooting" fill sizes="(max-width: 640px) 100vw, 576px" className="object-cover object-center" />
        </div>

        <section id="eight-fixes" className="mb-10 sm:mb-14 scroll-mt-28">
          <div className="border-b border-zinc-200 pb-3 sm:pb-4 mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">Complete Walkthrough</span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mt-1">8 Ways to Fix Trex IPTV VOD Problems</h2>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {fixes.map((s) => (
              <div key={s.stepNumber} className="relative pl-3.5 sm:pl-8 border-l-2 border-zinc-200 hover:border-[#ff6b35] transition-colors">
                <div className="absolute -left-[14px] top-0 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white border-2 border-[#ff6b35] text-[#ff6b35] font-extrabold text-[11px] sm:text-xs shadow-sm">{s.stepNumber}</div>
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-zinc-200/80 shadow-sm">
                  <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">Fix {s.stepNumber}</span>
                  <h3 className="text-base sm:text-xl font-bold text-zinc-950 mt-1 mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mb-3 sm:mb-4 leading-relaxed">{s.description}</p>
                  <ul className="space-y-2">
                    {s.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {"afterPoints" in s && s.afterPoints && (
                    <p className="mt-3 text-xs sm:text-sm text-zinc-600">
                      See our <BlogInlineLink href={s.afterPoints.href}>{s.afterPoints.label}</BlogInlineLink>.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="vod-table" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">Trex IPTV VOD Problems and Their Solutions</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200">
                  <th className="px-4 py-3 font-bold text-zinc-900">Problem</th>
                  <th className="px-4 py-3 font-bold text-zinc-900">Possible Cause</th>
                  <th className="px-4 py-3 font-bold text-zinc-900">Solution</th>
                </tr>
              </thead>
              <tbody>
                {vodRows.map((row) => (
                  <tr key={row.problem} className="border-b border-zinc-100 last:border-0">
                    <td className="px-4 py-3 font-semibold text-zinc-800">{row.problem}</td>
                    <td className="px-4 py-3 text-zinc-600">{row.cause}</td>
                    <td className="px-4 py-3 text-zinc-600">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="firestick-tivimate" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">Trex IPTV VOD Not Working on Firestick or TiviMate</h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-3">
            Firestick users should first restart their device, clear the IPTV application&apos;s cache, and refresh the playlist. Also check whether other applications are streaming normally.
          </p>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-3">
            For TiviMate users, verify the playlist configuration and check whether the Live TV section works while Movies and Series do not. If only VOD playback fails, test another compatible player to identify whether the issue is application-specific.
          </p>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed">
            You can also follow our{" "}
            <BlogInlineLink href="/installation-guide/">Trex IPTV installation guide</BlogInlineLink>{" "}
            and{" "}
            <BlogInlineLink href="/how-to-install-trex-iptv-on-firetv/">Fire TV setup tutorial</BlogInlineLink>{" "}
            for help configuring your account on compatible devices.
          </p>
        </section>

        <section className="mb-10 sm:mb-14 p-5 sm:p-8 rounded-2xl border border-zinc-200 bg-zinc-50">
          <h2 className="text-lg sm:text-xl font-extrabold text-zinc-950 mb-2">Get Trex IPTV VOD Working Again</h2>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            Trex IPTV VOD problems can have several causes, from playlist synchronization and application compatibility to temporary stream interruptions. Start with your internet connection, refresh your playlist, clear the app cache, and test different movies and episodes. If the problem continues across multiple devices and compatible players,{" "}
            <BlogInlineLink href="/contact/">contact Trex IPTV support</BlogInlineLink> to check your account and VOD availability.
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

        <RelatedPosts currentSlug="trex-iptv-vod-not-working" />

        <section className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#ff6b35]/10 via-orange-50/50 to-white border border-[#ff6b35]/30">
          <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 mb-2 sm:mb-3 tracking-tight">Still Having VOD Playback Issues?</h2>
          <p className="text-xs sm:text-base text-zinc-700 leading-relaxed mb-6">
            Share device, player, and movie title details with support, or browse more help in the{" "}
            <BlogInlineLink href="/blog/">Trex IPTV blog</BlogInlineLink>.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help with Trex IPTV VOD not working")}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 transition-colors shadow-sm">
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
