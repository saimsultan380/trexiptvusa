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
  History,
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
    { id: "why-catch-up-fails", label: "Why Catch-Up Fails" },
    { id: "eight-fixes", label: "8 Ways to Fix Catch-Up" },
    { id: "catch-up-table", label: "Catch-Up Problems Table" },
    { id: "avoid-issues", label: "Avoid Future Issues" },
    { id: "faqs", label: "FAQs" },
  ];

  const causes = [
    "Catch-up is not available for the selected channel",
    "The programme has passed the available replay period",
    "Your IPTV playlist needs refreshing",
    "The Electronic Programme Guide (EPG) displays incorrect times",
    "Your IPTV player has incorrect catch-up settings",
    "Your internet connection is unstable",
    "The service is temporarily experiencing a server issue",
  ];

  const fixes = [
    {
      stepNumber: "01",
      title: "Check Whether the Channel Supports Catch-Up",
      description:
        "Before changing your settings, confirm that the selected channel actually supports catch-up. Many IPTV services provide replay access only on selected channels.",
      points: [
        "Open your IPTV player and find a channel you want to watch.",
        "Look for a clock icon or catch-up indicator in the programme guide.",
        "Select a programme that has already aired and try playing it.",
        "If catch-up works on other channels but not on the selected one, the problem may be channel availability rather than your device.",
      ],
    },
    {
      stepNumber: "02",
      title: "Refresh Your IPTV Playlist",
      description:
        "An outdated playlist can prevent your player from displaying updated channel or catch-up information.",
      points: [
        "Open your IPTV player → Settings → Playlists → your active playlist.",
        "Choose Refresh or Update, if available, and wait for the update to finish.",
        "Menu names may differ between IPTV applications.",
      ],
    },
    {
      stepNumber: "03",
      title: "Update the Electronic Programme Guide (EPG)",
      description:
        "Catch-up often uses EPG information to identify which programme you want to replay. If the guide is outdated, replay may fail or play the wrong show.",
      points: [
        "Open your IPTV player settings → EPG or TV Guide → update or refresh the guide.",
        "Wait for new programme information to load, then check the affected channel schedule.",
        "If times remain wrong, see our ",
      ],
      epgLink: true,
    },
    {
      stepNumber: "04",
      title: "Check the Catch-Up Settings in Your IPTV Player",
      description:
        "Some IPTV players allow users to configure how catch-up streams are requested. An incorrect catch-up type may prevent archived programmes from playing.",
      points: [
        "In TiviMate: Settings → Playlists → your active playlist → Catch-up settings.",
        "Check available catch-up type options and follow your provider's recommended configuration.",
        "Adjust one setting at a time, then test playback.",
      ],
    },
    {
      stepNumber: "05",
      title: "Check Your Internet Connection",
      description:
        "A weak or unstable internet connection can cause catch-up programmes to buffer, freeze, or stop playing.",
      points: [
        "Restart your Wi-Fi router and test another streaming service.",
        "Use Ethernet if possible and pause downloads on other devices.",
        "If live IPTV channels work but catch-up keeps buffering, the issue may also relate to the archived stream or provider server.",
      ],
    },
    {
      stepNumber: "06",
      title: "Clear Your IPTV App Cache",
      description: "Temporary app data can sometimes cause playback or loading problems when catch-up suddenly stops working.",
      points: [
        "On Firestick: Settings → Applications → Manage Installed Applications → your IPTV player → Clear Cache.",
        "Choose Clear Cache, not Clear Data, unless you are prepared to set up the app again.",
        "Reopen the application and test catch-up playback.",
      ],
    },
    {
      stepNumber: "07",
      title: "Test Catch-Up on Another Supported Player",
      description:
        "Sometimes the problem is related to the IPTV application rather than the service itself.",
      points: [
        "Test the same playlist on another compatible IPTV player using the same channel and time period.",
        "If catch-up works in the second player, check the original app's settings.",
        "Compare options in our ",
      ],
      playersLink: true,
    },
    {
      stepNumber: "08",
      title: "Contact Trex IPTV Support",
      description:
        "If you have tried the steps above and catch-up still does not work, contact your IPTV provider with specific details.",
      points: [
        "Share your device model, IPTV player, affected channel, programme and broadcast time.",
        "Note whether live TV works and whether catch-up fails on all channels or only selected ones.",
        "Never share your IPTV password or private playlist URL publicly.",
      ],
    },
  ];

  const catchUpRows = [
    { problem: "Catch-up option is missing", reason: "Channel does not support replay", action: "Check channel availability" },
    { problem: "Black screen during replay", reason: "Archive stream or server issue", action: "Test another programme" },
    { problem: "Catch-up keeps buffering", reason: "Unstable connection or archived stream issue", action: "Test internet and another channel" },
    { problem: "Wrong programme plays", reason: "Incorrect EPG information or time offset", action: "Refresh and check the EPG" },
    { problem: "Catch-up suddenly stops", reason: "Playlist or service issue", action: "Refresh playlist and contact support" },
    { problem: "Replay works in one app but not another", reason: "Player compatibility or settings", action: "Check the affected app" },
    { problem: "Older programmes will not play", reason: "Replay period has expired", action: "Select a more recent programme" },
  ];

  const habits = [
    "Keep your IPTV player updated",
    "Refresh your playlist when channel information changes",
    "Update your EPG regularly",
    "Use a stable internet connection",
    "Check replay availability before selecting a programme",
    "Avoid changing multiple player settings without testing them individually",
    "Restart your streaming device if the application becomes unresponsive",
  ];

  const faqList = [
    {
      q: "Why is Trex IPTV catch-up not working?",
      a: "Catch-up may fail because the selected channel does not support replay, the programme is outside the available archive period, or your playlist, EPG, or player settings need attention. Temporary service or connection problems can also affect playback.",
    },
    {
      q: "Why does IPTV catch-up show a black screen?",
      a: "A black screen can indicate that the archived stream is unavailable, the replay request has failed, or the player cannot process the stream correctly. Try another programme, refresh your playlist, and test the same channel in another compatible player.",
    },
    {
      q: "Why does catch-up work on some IPTV channels but not others?",
      a: "Catch-up availability is often channel-specific. Your IPTV provider may maintain replay archives for selected channels only. Having live access to a channel does not automatically mean that its previous programmes are available.",
    },
    {
      q: "Why does catch-up play the wrong programme?",
      a: "This can happen when the EPG schedule does not match the actual broadcast times. Refresh the guide and check the time settings in your IPTV player. If the problem continues, ask your provider to check the channel's programme data.",
    },
    {
      q: "Does TiviMate support IPTV catch-up?",
      a: "TiviMate supports catch-up playback when the IPTV service and playlist provide the required archive information. The player cannot create missing recordings or enable catch-up for channels that do not offer it.",
    },
    {
      q: "Can I watch every missed live programme with catch-up?",
      a: "No. You can only replay programmes that your IPTV service has archived and made available. The replay period and supported channels depend on the service's configuration.",
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
            <span className="text-[#ff6b35] truncate max-w-[200px] sm:max-w-none">Catch-Up Fix Guide</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
            Trex IPTV Catch-Up Not Working? 8 Ways to Fix Catch-Up Issue
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
              <span>11 min read</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Guide
            </div>
          </div>

          <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-zinc-700 leading-relaxed font-normal">
            The IPTV catch-up feature lets you watch selected programmes after their original broadcast time. However, catch-up does not always work as expected. You may see a black screen, experience constant buffering, find that the programme guide shows the wrong time, or discover that the catch-up option is missing altogether.
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-zinc-700 leading-relaxed font-normal">
            If you are experiencing Trex IPTV catch-up problems, the cause could be related to channel support, playlist information,{" "}
            <BlogInlineLink href="/trex-iptv-epg-not-working/">EPG settings</BlogInlineLink>
            , your IPTV player, or your internet connection.{" "}
            <strong className="text-zinc-900">Important:</strong> Catch-up availability can vary by channel, subscription, and service configuration. Not every live channel necessarily supports replay.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Zap className="h-5 w-5 text-[#ff6b35] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-800">Live channels won&apos;t start at all?</span>
            </div>
            <Link href="/trex-iptv-channels-not-loading/" className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#ff6b35] hover:text-[#ff5722] shrink-0 hover:underline">
              Fix channels not loading <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-200">
            <Image src="/trex_iptv_catch_up_not_working_wide.png" alt="Trex IPTV catch-up not working fixes" fill priority className="object-cover object-center" />
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
            <h2 className="text-lg sm:text-2xl font-bold tracking-tight mt-1 mb-3">How to Fix Trex IPTV Catch-Up Fast</h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Confirm the channel supports replay, refresh your playlist and EPG, review catch-up settings in your player (especially TiviMate), test your connection, and compare another compatible app. If catch-up fails everywhere, contact Trex IPTV support with channel and programme details.
            </p>
          </div>
        </section>

        <section id="why-catch-up-fails" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              <History className="h-4 w-4" />
            </span>
            Why Is Trex IPTV Catch-Up Not Working?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            Catch-up depends on more than your IPTV player. Your IPTV service must provide an archived stream for the selected channel, and your player needs the correct information to access it. Some common reasons include:
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
          <Image src="/trex_iptv_catch_up_not_working_square.png" alt="Trex IPTV catch-up troubleshooting" fill sizes="(max-width: 640px) 100vw, 576px" className="object-cover object-center" />
        </div>

        <section id="eight-fixes" className="mb-10 sm:mb-14 scroll-mt-28">
          <div className="border-b border-zinc-200 pb-3 sm:pb-4 mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">Complete Walkthrough</span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mt-1">8 Ways to Fix Trex IPTV Catch-Up Problems</h2>
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
                    {s.points.map((point, pi) => (
                      <li key={point} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>
                          {point}
                          {s.epgLink && pi === s.points.length - 1 && (
                            <BlogInlineLink href="/trex-iptv-epg-not-working/">Trex IPTV EPG not working guide</BlogInlineLink>
                          )}
                          {s.playersLink && pi === s.points.length - 1 && (
                            <BlogInlineLink href="/best-iptv-players-for-trex-iptv/">best IPTV players for Trex IPTV</BlogInlineLink>
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

        <section id="catch-up-table" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">Common Trex IPTV Catch-Up Problems and Their Solutions</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
            <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200">
                  <th className="px-4 py-3 font-bold text-zinc-900">Problem</th>
                  <th className="px-4 py-3 font-bold text-zinc-900">Possible reason</th>
                  <th className="px-4 py-3 font-bold text-zinc-900">What to try</th>
                </tr>
              </thead>
              <tbody>
                {catchUpRows.map((row) => (
                  <tr key={row.problem} className="border-b border-zinc-100 last:border-0">
                    <td className="px-4 py-3 font-semibold text-zinc-800">{row.problem}</td>
                    <td className="px-4 py-3 text-zinc-600">{row.reason}</td>
                    <td className="px-4 py-3 text-zinc-600">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="avoid-issues" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">How to Avoid Future IPTV Catch-Up Problems</h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">A few simple habits can reduce common playback issues:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-4">
            {habits.map((item) => (
              <div key={item} className="p-3 rounded-xl border border-zinc-200 bg-zinc-50/50 flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-800">
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed">
            If you are setting up Trex IPTV on a new device, follow the{" "}
            <BlogInlineLink href="/installation-guide/">Trex IPTV Installation Guide</BlogInlineLink>{" "}
            and{" "}
            <BlogInlineLink href="/how-to-install-trex-iptv-on-firetv/">Fire TV installation tutorial</BlogInlineLink>{" "}
            to get your player ready.
          </p>
        </section>

        <section className="mb-10 sm:mb-14 p-5 sm:p-8 rounded-2xl border border-zinc-200 bg-zinc-50">
          <h2 className="text-lg sm:text-xl font-extrabold text-zinc-950 mb-2">Final Thoughts</h2>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            Trex IPTV catch-up problems can be frustrating, particularly when live channels work but previously aired programmes do not. Start by checking whether the channel supports catch-up, then refresh your playlist and EPG, review your player settings, and test your connection. If the same problem continues across multiple compatible players, contact your IPTV provider with the affected channel and programme details.
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

        <RelatedPosts currentSlug="trex-iptv-catch-up-not-working" />

        <section className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#ff6b35]/10 via-orange-50/50 to-white border border-[#ff6b35]/30">
          <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 mb-2 sm:mb-3 tracking-tight">Still Need Catch-Up Help?</h2>
          <p className="text-xs sm:text-base text-zinc-700 leading-relaxed mb-6">
            Message support with channel, programme time, and player details, or explore more guides on the{" "}
            <BlogInlineLink href="/blog/">Trex IPTV blog</BlogInlineLink>.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help with Trex IPTV catch-up not working")}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 transition-colors shadow-sm">
              <MessageCircle className="h-4 w-4 shrink-0" />
              Contact Trex IPTV Support
            </a>
            <Link href="/contact/" className="inline-flex h-11 sm:h-12 items-center justify-center rounded-lg bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 transition-colors shadow-sm text-center">
              Contact Page
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
