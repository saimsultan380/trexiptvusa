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
  AlertTriangle,
  Zap,
  Tv,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WHATSAPP_NUMBER } from "@/lib/site";

export default function BlogPostClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const tableOfContents = [
    { id: "quick-answer", label: "Quick Answer" },
    { id: "what-is-epg", label: "What Is an EPG?" },
    { id: "why-epg-not-working", label: "Why Is Trex IPTV EPG Not Working?" },
    { id: "no-information", label: 'Channels Work but "No Information"' },
    { id: "refresh-epg", label: "How to Refresh Trex IPTV EPG" },
    { id: "epg-source", label: "Check Your EPG Source & Matching" },
    { id: "tivimate", label: "EPG Not Working on TiviMate" },
    { id: "time-vpn", label: "Time Zone, VPN & Provider Outages" },
    { id: "troubleshooting-table", label: "EPG Troubleshooting Table" },
    { id: "fix-order", label: "Best Fix Order" },
    { id: "faqs", label: "FAQs" },
  ];

  const causes = [
    "Trex EPG data is temporarily unavailable",
    "The EPG has not been refreshed",
    "The EPG update failed",
    "Channels are not correctly matched with EPG data",
    "The wrong EPG source is assigned",
    "Your device time or time zone is incorrect",
    "Your IPTV player has a cache or synchronisation problem",
    "A VPN is interfering with the EPG connection",
    "An external EPG source is unavailable",
    "The provider's EPG data contains incorrect or incomplete information",
  ];

  const epgShows = [
    "Current programme",
    "Next programme",
    "Programme schedule",
    "Start and end times",
    "Programme descriptions",
    "Sports or event information",
    "Channel guide data",
  ];

  const matchingCauses = [
    "Different channel names",
    "Regional versions",
    "Duplicate channels",
    "Different channel IDs",
    "Provider playlist changes",
    "Edited playlists",
    "Incorrect EPG assignments",
  ];

  const tivimateSteps = [
    {
      title: "Open TiviMate",
      text: "Go to the application's EPG settings.",
    },
    {
      title: "Check the EPG source",
      text: "Make sure the expected EPG source is enabled.",
    },
    {
      title: "Run an EPG update",
      text: "Start a manual update.",
    },
    {
      title: "Check the result",
      text: "Look for the update status or number of channels updated.",
    },
    {
      title: "Restart TiviMate",
      text: "Close or force-stop the application and reopen it.",
    },
    {
      title: "Clear cache",
      text: "Clear the TiviMate cache rather than immediately clearing its data.",
    },
    {
      title: "Test the guide again",
      text: "Check several channels instead of only one.",
    },
  ];

  const troubleshootingRows = [
    { problem: "All channels say No Information", cause: "Provider EPG or source issue", action: "Refresh and test another device" },
    { problem: "Some channels have EPG", cause: "Channel matching", action: "Check individual mappings" },
    { problem: "EPG update fails", cause: "Source/network problem", action: "Check source and connection" },
    { problem: "EPG times are wrong", cause: "Time zone or offset", action: "Check device time" },
    { problem: "EPG stopped suddenly", cause: "Temporary outage", action: "Check provider status" },
    { problem: "EPG works in another player", cause: "Player issue", action: "Clear cache and check settings" },
    { problem: "EPG fails everywhere", cause: "Provider/source issue", action: "Contact provider" },
    { problem: "EPG fails with VPN", cause: "Network route", action: "Test without VPN" },
    { problem: "Playlist works but EPG fails", cause: "Separate EPG issue", action: "Check EPG source" },
    { problem: "EPG appears one hour behind", cause: "Time settings", action: "Check time zone and offset" },
  ];

  const fixOrder = [
    { title: "Refresh the EPG", text: "Run a manual EPG update." },
    { title: "Check the Update Status", text: "Make sure the update actually completes." },
    { title: "Test Multiple Channels", text: "See whether the problem affects all channels or only some." },
    { title: "Check Device Time", text: "Confirm the correct date, time and time zone." },
    { title: "Restart Your IPTV Player", text: "Close it completely and reopen it." },
    { title: "Clear the App Cache", text: "Clear cache from Firestick's application settings." },
    { title: "Restart the Firestick", text: "Amazon recommends restarting Fire TV as a basic troubleshooting step." },
    { title: "Test Without VPN", text: "If you use a VPN, compare the EPG update with and without it where appropriate." },
    { title: "Test Another Player", text: "This helps determine whether the problem is player-specific." },
    { title: "Contact Trex Support", text: "If the EPG remains unavailable across multiple devices or players, provide details to your provider." },
  ];

  const mistakes = [
    {
      title: "Deleting the Playlist Immediately",
      text: "If the channels are working, deleting and rebuilding the playlist may not solve an EPG-source problem.",
    },
    {
      title: "Assuming the IPTV Player Is Broken",
      text: "If the same EPG is missing on several devices, investigate the provider side too.",
    },
    {
      title: "Changing Time Offset Randomly",
      text: "Check the device time and time zone first.",
    },
    {
      title: "Refreshing the EPG Repeatedly",
      text: "If the source is unavailable, repeated refreshes will not necessarily restore it.",
    },
    {
      title: "Using Random EPG Sources",
      text: "An external EPG may not match your channels correctly and can create more missing or incorrect listings.",
    },
    {
      title: "Sharing Your IPTV Credentials",
      text: "Do not post your M3U URL, Xtream username, password or other account information in public forums while asking for help.",
    },
  ];

  const checklist = [
    "Channels themselves are playing",
    "EPG has been manually refreshed",
    "EPG update completed successfully",
    "Multiple channels tested",
    "Firestick time checked",
    "Time zone checked",
    "IPTV player restarted",
    "IPTV player cache cleared",
    "Firestick restarted",
    "VPN tested separately",
    "Another compatible player tested",
    "Another device tested",
    "Affected channels recorded",
    "EPG problem time recorded",
  ];

  const takeaways = [
    "EPG and IPTV video streams are separate.",
    "Your channels can work even when the EPG is unavailable.",
    '"No Information" usually means guide data is missing, unavailable or incorrectly matched.',
    "Refresh the EPG before rebuilding your entire playlist.",
    "Check your device time if programme times are incorrect.",
    "Clear the IPTV player's cache if the problem is player-specific.",
    "VPN routing can sometimes affect EPG updates.",
    "If the same EPG problem appears across several devices, investigate the provider or EPG source.",
    "Some channels may have incorrect EPG while others work normally.",
    "Temporary EPG outages do occur, so not every EPG problem can be fixed locally.",
  ];

  const faqList = [
    {
      q: "Why is Trex IPTV EPG not working?",
      a: "Trex IPTV EPG may not work because the provider's guide data is temporarily unavailable, the EPG update failed, channels are not matched correctly, or your IPTV player has a configuration or cache problem. Start by manually refreshing the EPG and checking the update status. If channels work but the EPG is missing across multiple devices, the provider's EPG source may be the issue.",
    },
    {
      q: 'Why does Trex IPTV say "No Information" on every channel?',
      a: 'If every Trex channel says "No Information" while the video streams still work, the problem is likely related to EPG data rather than the channel streams. Refresh the EPG and check whether the update succeeds. If the same issue appears on different devices or IPTV players, it may be a provider-side EPG problem.',
    },
    {
      q: "How do I refresh Trex IPTV EPG on TiviMate?",
      a: "Open TiviMate's EPG settings and manually start an EPG update. Wait for the update to finish before checking the guide. If the update succeeds but information remains missing, check your EPG source and channel assignments. Check the EPG update status rather than assuming that a loaded playlist means the guide has also loaded.",
    },
    {
      q: "Why is my Trex EPG one hour behind?",
      a: "A one-hour difference can be caused by incorrect device time, time-zone settings, daylight-saving changes, or EPG data using a different time reference. Check the Firestick's date, time, and time zone first. If the device settings are correct, investigate the IPTV player's EPG offset. Avoid changing offsets randomly because that can make correctly timed channels incorrect.",
    },
    {
      q: "Why does Trex IPTV EPG work on one device but not another?",
      a: "If the EPG works on one device but not another, the problem may be related to the IPTV player's cache, settings, software version, network route, or device configuration. Restart the affected device, clear the IPTV app cache, and refresh the EPG. If only one device remains affected, the provider's EPG is less likely to be the sole cause.",
    },
    {
      q: "Can a VPN stop Trex IPTV EPG from updating?",
      a: "Yes, a VPN can sometimes affect access to an EPG source because it changes the network route. However, a VPN is not always the cause. Try refreshing the EPG with the VPN disabled (where appropriate and legal) and compare the results.",
    },
    {
      q: "Why does Trex EPG work for some channels but not others?",
      a: "Partial EPG coverage often points to channel matching or incomplete guide data. The EPG source may contain information for some channels, but not others, or the channel IDs may not match. Regional versions can also create problems. If only specific channels are affected, record their exact names and report them to the provider rather than rebuilding the entire playlist.",
    },
    {
      q: "Should I change from M3U to Xtream Codes to fix Trex EPG?",
      a: "Not necessarily. Switching from M3U to Xtream Codes may change how your IPTV player receives account and playlist information, but it doesn't guarantee the missing EPG data will return. First check the EPG source, update status and channel matching. If the provider's EPG is unavailable, changing the login method may not solve the underlying problem.",
    },
  ];

  const partialChannels = [
    { channel: "Channel A", video: "Working", epg: "Working" },
    { channel: "Channel B", video: "Working", epg: "Working" },
    { channel: "Channel C", video: "Working", epg: "No Information" },
    { channel: "Channel D", video: "Working", epg: "No Information" },
    { channel: "Channel E", video: "Working", epg: "Working" },
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
              EPG Not Working Fix
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
            Trex IPTV EPG Not Working: Causes &amp; How to Fix in Minutes?
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
              <span>13 min read</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Guide
            </div>
          </div>

          <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-zinc-700 leading-relaxed font-normal">
            Trex IPTV EPG problems can be confusing because your channels may continue playing normally while the TV guide shows &quot;No Information&quot;, missing programmes, wrong times, or an incomplete schedule.
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-zinc-700 leading-relaxed font-normal">
            EPG means Electronic Program Guide. It provides programme names, schedules, descriptions, and other guide information inside your IPTV player. When Trex IPTV EPG stops working, the problem may come from the provider&apos;s EPG data, TiviMate or another IPTV player, channel matching, your device settings, or a temporary EPG outage. This guide shows you how to identify the cause and fix the problem step by step.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Zap className="h-5 w-5 text-[#ff6b35] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                Experiencing buffering instead of EPG issues?
              </span>
            </div>
            <Link
              href="/trex-iptv-buffering-firestick/"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#ff6b35] hover:text-[#ff5722] shrink-0 hover:underline"
            >
              Read Buffering Fix Guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-200">
            <Image
              src="/trex_iptv_epg_not_working_wide_v2_1876x863.png"
              alt="Trex IPTV EPG not working causes and fixes"
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
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-900 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#ff6b35]/20 rounded-full blur-3xl pointer-events-none" />
            <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">
              Quick Answer
            </span>
            <h2 className="text-lg sm:text-2xl font-bold tracking-tight mt-1 mb-3">
              How to Fix Trex IPTV EPG Fast
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              If Trex IPTV EPG is not working, first refresh the EPG from your IPTV player&apos;s settings and check whether the update completes successfully. Then check your playlist-to-EPG assignment, device time zone, cache, VPN, and EPG source. If the channels work but EPG is missing on multiple devices, the issue may be with the provider&apos;s EPG data rather than your Firestick or IPTV player.
            </p>
          </div>
        </section>

        {/* What is EPG */}
        <section id="what-is-epg" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              📺
            </span>
            What Is an EPG?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            An Electronic Program Guide, or EPG, is the TV guide displayed by an IPTV player. Instead of seeing only channel names, an EPG can show:
          </p>
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            {epgShows.map((item) => (
              <div
                key={item}
                className="p-3 sm:p-3.5 rounded-xl border border-zinc-200 bg-zinc-50/50 flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-800"
              >
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white">
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-2">
              For example, instead of seeing <strong className="text-zinc-900">ESPN HD</strong>, your IPTV player may show:
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#ff6b35]">
              ESPN HD | Live Football | 8:00 PM to 10:30 PM
            </p>
            <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
              The channel stream and EPG are related, but they are not the same thing. This is why a channel can work perfectly while its EPG shows &quot;No Information.&quot;
            </p>
          </div>
        </section>

        {/* Why not working */}
        <section id="why-epg-not-working" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              ?
            </span>
            Why Is Trex IPTV EPG Not Working?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            There are several possible causes. The most common are:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {causes.map((item) => (
              <div
                key={item}
                className="p-3 sm:p-3.5 rounded-xl border border-zinc-200 bg-white flex items-start gap-2 text-xs sm:text-sm font-medium text-zinc-800"
              >
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-zinc-100 text-xs sm:text-sm text-zinc-700 font-medium">
            💡 The most important point is that you should identify which type of EPG problem you have before changing settings.
          </div>
        </section>

        {/* Mid square image */}
        <div className="mb-10 sm:mb-14 relative w-full max-w-xl mx-auto aspect-square rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-200">
          <Image
            src="/trex_iptv_epg_not_working_square.png"
            alt="Trex IPTV EPG not working troubleshooting guide"
            fill
            sizes="(max-width: 640px) 100vw, 576px"
            className="object-cover object-center"
          />
        </div>

        {/* No Information */}
        <section id="no-information" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            Trex IPTV Channels Work but EPG Says &quot;No Information&quot;
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            This is one of the most common situations. If you can watch your channels but the programme guide says &quot;No Information&quot;, your actual video connection may be working correctly. The problem is specifically related to guide data.
          </p>
          <div className="p-4 sm:p-5 rounded-2xl border-2 border-[#ff6b35] bg-orange-50/30 mb-4">
            <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-2">What should you do first?</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Refresh the EPG. If the update completes successfully and the guide remains empty, continue with the troubleshooting steps below. Do not immediately delete your entire playlist.
            </p>
          </div>
        </section>

        {/* Refresh EPG */}
        <section id="refresh-epg" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            How to Refresh Trex IPTV EPG
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            The exact menu names depend on your IPTV player, but the general process is similar. In TiviMate, for example, go to the EPG section and manually start an EPG update. After starting the update:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Wait for the update to complete.",
              "Check the update status.",
              "Return to the TV guide.",
              "Check several channels.",
              "Give the player some time to process the data.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs sm:text-sm text-amber-900 mb-6">
            <strong>Do not repeatedly force updates.</strong> If an EPG source is temporarily unavailable, repeatedly pressing Update will not necessarily fix it. Allow the player time to finish the update and then test again.
          </div>

          <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-2 sm:mb-3">
            Check Whether the EPG Update Actually Succeeded
          </h3>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            A common mistake is assuming that because the playlist loaded, the EPG also loaded. They are separate processes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Playlist</span>
              <p className="text-sm font-bold text-zinc-950 mt-1">Working</p>
            </div>
            <div className="p-4 rounded-2xl border border-red-200 bg-red-50/50">
              <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider">EPG</span>
              <p className="text-sm font-bold text-zinc-950 mt-1">Failed or 0 channels updated</p>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-base text-zinc-600 leading-relaxed">
            If your player provides an EPG update status, check it. If the EPG update itself fails, focus on the EPG source or connection rather than changing channel settings.
          </p>
        </section>

        {/* EPG source & matching */}
        <section id="epg-source" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            Check Your EPG Source &amp; Channel Matching
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            An EPG source provides the programme information used by your IPTV player. Depending on your IPTV setup, the source may be:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            {[
              "Provider-supplied EPG",
              "XMLTV source",
              "External EPG source",
              "Automatically assigned EPG",
              "Manually assigned EPG",
            ].map((item) => (
              <div
                key={item}
                className="p-3 rounded-xl border border-zinc-200 bg-zinc-50/50 flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-800"
              >
                <Tv className="h-4 w-4 text-[#ff6b35] shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            If the provider&apos;s EPG source is unavailable, the guide may stop updating even though the channels continue working. You can wait for the provider&apos;s EPG to return, or use a compatible alternative EPG source if your IPTV player and service allow it (which may require manual channel matching).
          </p>

          <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-2 sm:mb-3">
            Check Channel Matching
          </h3>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            Channel matching tells your IPTV player which EPG entry belongs to each channel. For example, your channel <strong>CNN HD</strong> may need to match EPG entry <strong>CNN USA</strong>. If the channel ID or name does not match correctly, you may get &quot;No Information&quot; even when the EPG source itself is working.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
            {matchingCauses.map((item) => (
              <div
                key={item}
                className="p-3 rounded-xl border border-zinc-200 bg-white flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-800"
              >
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-2 sm:mb-3">
            Why Are Some Channels Showing EPG but Others Are Not?
          </h3>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            If some channels have programme information and others show &quot;No Information,&quot; the entire EPG system may not be down. The problem may be limited to specific channels.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm mb-4">
            <table className="w-full min-w-[360px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="px-3 sm:px-4 py-3 font-bold">Channel</th>
                  <th className="px-3 sm:px-4 py-3 font-bold">Video</th>
                  <th className="px-3 sm:px-4 py-3 font-bold text-[#ff6b35]">EPG</th>
                </tr>
              </thead>
              <tbody>
                {partialChannels.map((row, idx) => (
                  <tr key={row.channel} className={idx % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                    <td className="px-3 sm:px-4 py-3 font-semibold text-zinc-900 border-t border-zinc-100">
                      {row.channel}
                    </td>
                    <td className="px-3 sm:px-4 py-3 text-emerald-700 border-t border-zinc-100">
                      {row.video}
                    </td>
                    <td className={`px-3 sm:px-4 py-3 border-t border-zinc-100 ${row.epg === "Working" ? "text-emerald-700" : "text-red-600 font-semibold"}`}>
                      {row.epg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed">
            This pattern points towards a channel mapping or EPG-data issue rather than a complete EPG outage. If the same channels are missing across different devices and players, contact the provider and report the exact channels.
          </p>
        </section>

        {/* TiviMate */}
        <section id="tivimate" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            Trex IPTV EPG Not Working on TiviMate
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            TiviMate is one of the players where users frequently troubleshoot EPG issues. If Trex channels work but the guide does not, try this sequence:
          </p>

          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-900 text-white shadow-xl relative overflow-hidden mb-6">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#ff6b35]/20 rounded-full blur-3xl pointer-events-none" />
            <ol className="space-y-3 relative">
              {tivimateSteps.map((item, idx) => (
                <li key={item.title} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#ff6b35] text-white font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white">{item.title}</span>
                    <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-2 sm:mb-3">
            Clear TiviMate Cache on Firestick
          </h3>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-3">
            If the EPG was previously working and suddenly stopped, clearing the app cache is worth trying. On Fire TV:
          </p>
          <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-100 text-xs sm:text-sm text-zinc-800 font-semibold mb-3">
            Settings → Applications → Manage Installed Applications → Select your IPTV player → Clear Cache
          </div>
          <div className="p-3.5 sm:p-4 rounded-xl bg-red-50 border border-red-200/80 text-xs sm:text-sm text-red-900 flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
              <strong>Should you clear app data?</strong> Not as your first step. Clearing app data can remove stored application information. Try Clear Cache → Restart App → Test EPG before considering Clear Data.
            </span>
          </div>
        </section>

        {/* Time, VPN, provider */}
        <section id="time-vpn" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            Time Zone, VPN &amp; Provider-Side Outages
          </h2>

          <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-2 sm:mb-3">
            Check Your Firestick Date and Time
          </h3>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-3">
            Incorrect device time can cause EPG schedules to appear at the wrong time — one hour ahead, one hour behind, several hours wrong, or showing programmes at unusual times. Check your Firestick&apos;s date, time and time zone first. If the device time is incorrect, fix that before changing EPG offsets.
          </p>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-6">
            If programme names appear but the times are wrong, check device time, device time zone, IPTV player time settings, EPG offset, and provider EPG data. If only a few channels are wrong while others are correct, the problem may be with those channels&apos; EPG data rather than your global time setting.
          </p>

          <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-2 sm:mb-3">
            Can a VPN Cause EPG Problems?
          </h3>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-3">
            Yes, a VPN can sometimes affect EPG updates because it changes the network route. This does not mean VPNs always cause EPG problems. A simple test:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Close your IPTV player.",
              "Temporarily test the EPG without the VPN, where appropriate and legal.",
              "Open the IPTV player and run an EPG update.",
              "Compare the result.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-2 sm:mb-3">
            Trex IPTV EPG Down for Everyone
          </h3>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            Sometimes there is nothing wrong with your Firestick — the provider&apos;s EPG may simply be unavailable. Look for these patterns:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
            {[
              "Channels play normally",
              "EPG is missing on multiple channels",
              "Several devices have the same problem",
              "Different IPTV players show the same missing guide",
              "Refreshing the EPG does not restore data",
              "The problem starts suddenly after previously working",
            ].map((item) => (
              <div
                key={item}
                className="p-3 rounded-xl border border-zinc-200 bg-white flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-800"
              >
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
            <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white">
              <h4 className="text-sm font-bold text-zinc-950 mb-2">EPG works on another player</h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Investigate TiviMate settings, cache, channel matching or compatibility.
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl border-2 border-[#ff6b35] bg-orange-50/30">
              <h4 className="text-sm font-bold text-zinc-950 mb-2">EPG fails everywhere</h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                The issue is more likely related to the EPG source or provider data.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            Your connection method (M3U vs Xtream Codes) can affect how the IPTV player receives information, but changing methods is not a guaranteed EPG fix. First check whether the EPG source itself is available.
          </p>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed">
            Regional channel matching can also be harder — for example CNN USA vs CNN Canada. If only regional channels are affected, investigate channel mapping before assuming the complete EPG is broken.
          </p>
        </section>

        {/* Troubleshooting table */}
        <section id="troubleshooting-table" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            Trex IPTV EPG Troubleshooting Table
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
            <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="px-3 sm:px-4 py-3 font-bold">Problem</th>
                  <th className="px-3 sm:px-4 py-3 font-bold">Possible Cause</th>
                  <th className="px-3 sm:px-4 py-3 font-bold text-[#ff6b35]">What to Try</th>
                </tr>
              </thead>
              <tbody>
                {troubleshootingRows.map((row, idx) => (
                  <tr key={row.problem} className={idx % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                    <td className="px-3 sm:px-4 py-3 font-semibold text-zinc-900 border-t border-zinc-100">
                      {row.problem}
                    </td>
                    <td className="px-3 sm:px-4 py-3 text-zinc-600 border-t border-zinc-100">
                      {row.cause}
                    </td>
                    <td className="px-3 sm:px-4 py-3 text-zinc-600 border-t border-zinc-100">
                      {row.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best fix order */}
        <section id="fix-order" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            How to Fix Trex IPTV EPG Not Working: Best Order
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            Follow this order instead of changing everything at once.
          </p>
          <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
            {fixOrder.map((item, idx) => (
              <div
                key={item.title}
                className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 bg-white flex items-start gap-3"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff6b35] text-white font-bold text-xs shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-zinc-950">{item.title}</h3>
                  <p className="text-[11px] sm:text-xs text-zinc-600 mt-0.5">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 mb-6 sm:mb-8">
            <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-2">Practical Example</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-3">
              Imagine your Trex IPTV channels are playing normally on Firestick. At 8 PM, you open the guide, and every channel says &quot;No Information.&quot; You refresh the EPG, but nothing changes. You check the Firestick time and restart TiviMate — still blank. You test the same account on another compatible device and see the same result.
            </p>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              At this point, repeatedly clearing your Firestick is unlikely to be useful. The same EPG problem across devices suggests you should investigate the provider&apos;s EPG source or wait for the provider to restore the guide.
            </p>
          </div>

          <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-3 sm:mb-4">
            Common Mistakes When Fixing Trex EPG
          </h3>
          <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
            {mistakes.map((item, idx) => (
              <div
                key={item.title}
                className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 bg-zinc-50/50"
              >
                <h4 className="text-xs sm:text-sm font-bold text-zinc-950 mb-1">
                  {idx + 1}. {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 mb-6 sm:mb-8">
            <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-3">Action Checklist</h3>
            <p className="text-xs sm:text-sm text-zinc-600 mb-3">Before contacting support, check:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-3 sm:mb-4">
            Key Takeaways
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {takeaways.map((item) => (
              <div
                key={item}
                className="p-3 sm:p-3.5 rounded-xl border border-zinc-200 bg-white flex items-start gap-2 text-xs sm:text-sm font-medium text-zinc-800"
              >
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              ?
            </span>
            FAQs
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            Still seeing &quot;No Information&quot; in your guide? These answers cover the most common EPG questions.
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

        {/* CTA */}
        <section className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#ff6b35]/10 via-orange-50/50 to-white border border-[#ff6b35]/30">
          <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 mb-2 sm:mb-3 tracking-tight">
            Still Missing Guide Data?
          </h2>
          <p className="text-xs sm:text-base text-zinc-700 leading-relaxed mb-3 sm:mb-4">
            If Trex IPTV channels are working but the guide is missing, start with the troubleshooting steps above before changing your entire IPTV setup. Check the EPG update status, refresh the guide, verify your Firestick time, and test another device or player.
          </p>
          <p className="text-xs sm:text-base text-zinc-700 leading-relaxed mb-6">
            If the same problem continues everywhere, contact your IPTV provider and report the exact channels and time when the EPG stopped working. Only access IPTV services and content you are legally authorised to use in your location.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help fixing Trex IPTV EPG not working")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 transition-colors shadow-sm text-center"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              Contact Our Trex IPTV Support Team
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
