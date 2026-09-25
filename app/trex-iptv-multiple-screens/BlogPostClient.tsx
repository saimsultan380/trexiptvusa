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
  Monitor,
  Smartphone,
  Tv,
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
    { id: "what-multiple-screens-mean", label: 'What "Multiple Screens" Means' },
    { id: "how-connections-work", label: "How Trex IPTV Connections Work" },
    { id: "two-tvs", label: "Can You Use Trex IPTV on Two TVs?" },
    { id: "exceed-limit", label: "What Happens If You Exceed the Limit?" },
    { id: "tivimate-multiview", label: "TiviMate & Multiview" },
    { id: "how-many-needed", label: "How Many Connections Do You Need?" },
    { id: "comparison-table", label: "Multiple Screens Comparison" },
    { id: "second-screen-freezing", label: "Why the Second Screen Freezes" },
    { id: "checklist", label: "Action Checklist" },
    { id: "faqs", label: "FAQs" },
  ];

  const devices = [
    "Firestick",
    "Smart TV",
    "Android TV",
    "Phone",
    "Tablet",
    "Computer",
  ];

  const exceedSymptoms = [
    "The second stream refusing to start",
    "A loading screen",
    "Playback freezing",
    "An authentication error",
    "One stream stopping",
    "A generic playback error",
    "The second device working briefly and then freezing",
  ];

  const connectionMeaning = [
    { situation: "Account installed on 3 TVs", meaning: "Multiple device setup" },
    { situation: "1 TV actively streaming", meaning: "1 active connection" },
    { situation: "2 TVs streaming simultaneously", meaning: "2 active connections" },
    { situation: "3 TVs streaming simultaneously", meaning: "3 active connections" },
  ];

  const comparisonRows = [
    { usage: "One TV", example: "One live stream", connections: "1" },
    { usage: "Two TVs, one at a time", example: "Only one TV playing", connections: "1" },
    { usage: "Two TVs simultaneously", example: "Two different channels", connections: "2" },
    { usage: "TV + phone", example: "Both playing", connections: "2" },
    { usage: "TV + tablet + phone", example: "Three active streams", connections: "3" },
    { usage: "One TV with 4-way multiview", example: "Four streams", connections: "Depends on plan" },
    { usage: "Several devices installed", example: "Only one playing", connections: "1 active connection" },
  ];

  const needExamples = [
    {
      title: "Example 1: One TV",
      text: "You have one TV and normally watch one stream.",
      need: "1 connection",
    },
    {
      title: "Example 2: Two TVs, one at a time",
      text: "You have two TVs but never watch them simultaneously.",
      need: "Potentially 1 connection",
    },
    {
      title: "Example 3: Two TVs used simultaneously",
      text: "Family members regularly watch different channels at the same time.",
      need: "2 simultaneous connections",
    },
    {
      title: "Example 4: Three TVs",
      text: "Three people regularly watch different streams simultaneously.",
      need: "3 simultaneous connections",
    },
  ];

  const freezeChecks = [
    "Close IPTV on other devices.",
    "Check whether another TV is still streaming.",
    "Close background IPTV apps.",
    "Restart the affected player.",
    "Test one stream at a time.",
    "Check your subscription's connection allowance.",
    "Contact the provider if the account should support multiple connections.",
  ];

  const mistakes = [
    {
      title: "Confusing Device Support With Connection Support",
      text: "An IPTV app being installed on five devices does not mean five simultaneous streams are included.",
    },
    {
      title: "Assuming Same Wi-Fi Means Unlimited Screens",
      text: "Your home network does not automatically increase your IPTV connection allowance.",
    },
    {
      title: "Blaming Buffering Immediately",
      text: "A second stream that refuses to start may be hitting the account's connection limit rather than suffering from slow internet.",
    },
    {
      title: "Assuming TiviMate Creates Extra Connections",
      text: "TiviMate can manage multiple streams, but the IPTV service still controls the account's server-side access.",
    },
    {
      title: "Buying Extra Connections Without Confirmation",
      text: "Trex-branded services currently publish different connection terms. Confirm the exact allowance before paying for an upgrade.",
    },
  ];

  const planningQuestions = [
    "How many TVs will use Trex IPTV?",
    "How many will be streaming at the same time?",
    "Will anyone watch on a phone?",
    "Do you use TiviMate multiview?",
    "Do you record one channel while watching another?",
    "Does your current plan explicitly state the connection count?",
    "Does the provider confirm that additional connections are supported?",
  ];

  const checklist = [
    "Check your subscription's connection limit",
    "Count simultaneous streams, not just devices",
    "Check whether your plan allows multiple connections",
    "Close IPTV apps on unused devices",
    "Test two screens only if your plan permits it",
    "Check TiviMate multiview separately",
    "Do not assume same Wi-Fi provides extra connections",
    "Keep your IPTV credentials private",
    "Contact the provider before purchasing an additional connection",
    "Keep proof of the connection count included with your order",
  ];

  const takeaways = [
    "Trex IPTV can be installed on multiple devices, but simultaneous streaming depends on the subscription.",
    "Multiple devices and multiple connections are not the same thing.",
    "A one-connection subscription should not be assumed to support two TVs at once.",
    "TiviMate multiview does not automatically increase your account's connection allowance.",
    "A second screen that freezes may be hitting the server-side connection limit.",
    "The number of connections you need depends on your maximum simultaneous streams.",
    "Current Trex-branded websites publish different connection policies, so verify your exact plan before purchase.",
    "Community reports about Trex multiple connections are inconsistent, making direct confirmation with your provider especially important.",
  ];

  const faqList = [
    {
      q: "Does Trex IPTV support multiple screens?",
      a: "Trex IPTV may support multiple screens depending on the connection allowance attached to your subscription. Installing the account on several devices does not automatically mean that all devices can stream simultaneously. Current Trex-branded services publish different connection terms, so check the exact number of simultaneous connections included with your order before using multiple TVs.",
    },
    {
      q: "Can I watch Trex IPTV on two TVs at the same time?",
      a: "You can watch Trex IPTV on two TVs simultaneously only if your subscription supports at least two active connections. If your account has one connection, the second TV may fail to start, freeze, or interrupt the first stream. Your specific subscription terms are the deciding factor.",
    },
    {
      q: "Can I use one Trex IPTV account on multiple devices?",
      a: "You may be able to enter the same Trex IPTV credentials on multiple compatible devices, but this is different from simultaneous streaming. The number of active streams depends on the account's connection allowance. If your subscription allows one connection, having the account configured on three Firesticks does not mean all three can stream at the same time.",
    },
    {
      q: "Does TiviMate allow multiple Trex IPTV connections?",
      a: "TiviMate can support features such as multiview on compatible devices, but it does not increase the number of simultaneous connections permitted by your Trex IPTV subscription. If your account allows one connection, opening several streams in TiviMate may exceed the service's allowance.",
    },
    {
      q: "Why does Trex IPTV stop when I open it on another TV?",
      a: "The second TV may be exceeding your subscription's simultaneous connection limit. Server-side connection limits can cause a second stream to refuse playback, freeze or disconnect another active stream. Before changing your internet or IPTV player, close Trex on other devices and check the number of connections included with your subscription.",
    },
    {
      q: "Do I need two Trex IPTV accounts for two TVs?",
      a: "Not necessarily. You need enough simultaneous connections, not automatically one account per TV. If your specific Trex subscription provides two simultaneous connections, two TVs may be able to stream at once. If it provides only one, you would need an additional permitted connection or another subscription arrangement according to the provider's terms.",
    },
    {
      q: "Can I use Trex IPTV on a TV and phone at the same time?",
      a: "Yes, if your subscription allows at least two simultaneous connections. The TV and phone would each use an active stream. If the account allows only one connection, starting playback on the second device may cause a connection-limit problem rather than a normal internet or Firestick buffering issue.",
    },
    {
      q: "How many Trex IPTV connections do I need for a family?",
      a: "Calculate the highest number of streams your family will use at the same time. One TV being used at a time generally requires one active connection. Two family members watching different channels simultaneously requires two. Three simultaneous streams require three, subject to the connection limits offered by your specific Trex subscription.",
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
              Multiple Screens Guide
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
            Trex IPTV Multiple Screens or Devices: How Many Can You Use?
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
              <span>11 min read</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Guide
            </div>
          </div>

          <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-zinc-700 leading-relaxed font-normal">
            If you have several TVs at home, you may wonder whether one{" "}
            <BlogInlineLink href="/subscription-plans/">
              Trex IPTV subscription
            </BlogInlineLink>{" "}
            can be used on multiple screens at the same time. This question is slightly more complicated than simply asking whether Trex IPTV works on multiple devices.
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-zinc-700 leading-relaxed font-normal">
            You may be able to install your IPTV account on several Firesticks, Smart TVs, phones or other compatible devices. However, simultaneous streaming depends on the number of connections allowed by your specific subscription. Setting up on Firestick? Follow the{" "}
            <BlogInlineLink href="/how-to-install-trex-iptv-on-firetv/">
              Trex IPTV Fire TV installation guide
            </BlogInlineLink>
            .
          </p>

          <div className="mt-6 p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Zap className="h-5 w-5 text-[#ff6b35] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                Second screen freezing and looks like buffering?
              </span>
            </div>
            <Link
              href="/trex-iptv-buffering-firestick/"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#ff6b35] hover:text-[#ff5722] shrink-0 hover:underline"
            >
              Fix Trex IPTV buffering on Firestick <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-200">
            <Image
              src="/trex_iptv_multiple_screens_wide.png"
              alt="Trex IPTV multiple screens and devices connection guide"
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
              Devices vs Simultaneous Connections
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Trex IPTV can be installed on multiple devices, but simultaneous streaming depends on the connection limit attached to your subscription. One login should not automatically be assumed to allow two or more simultaneous streams. Check the exact number confirmed for your order before using multiple screens — then compare{" "}
              <Link href="/subscription-plans/" className="text-[#ff6b35] font-semibold hover:underline">
                Trex IPTV subscription plans
              </Link>
              .
            </p>
          </div>
        </section>

        {/* What multiple screens mean */}
        <section id="what-multiple-screens-mean" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm sm:text-base shrink-0">
              <Monitor className="h-4 w-4" />
            </span>
            What Does &quot;Multiple Screens&quot; Mean?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            Multiple screens can mean two different things.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-2 flex items-center gap-2">
                <Tv className="h-4 w-4 text-[#ff6b35]" />
                Multiple devices
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-3">
                You install the same Trex IPTV account on:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {devices.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-800"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#ff6b35] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs sm:text-sm text-zinc-500">
                This does not necessarily mean you can watch on all of them simultaneously.
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl border-2 border-[#ff6b35] bg-orange-50/30 shadow-sm">
              <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-2 flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-[#ff6b35]" />
                Multiple simultaneous streams
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-3">
                Two or more devices are actively playing different channels at the same time.
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#ff6b35] shrink-0 mt-0.5" />
                  TV 1: Watching a football match
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#ff6b35] shrink-0 mt-0.5" />
                  TV 2: Watching a news channel
                </li>
              </ul>
              <p className="mt-3 text-xs sm:text-sm text-zinc-700 font-medium">
                This is what simultaneous connections normally refers to.
              </p>
            </div>
          </div>
        </section>

        {/* How connections work */}
        <section id="how-connections-work" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            How Do Trex IPTV Connections Work?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            A connection is essentially an active stream using your IPTV account. If your subscription allows one simultaneous connection, one device can normally stream at a time. If your subscription explicitly allows two simultaneous connections, two devices may stream at the same time.
          </p>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            The connection limit is normally enforced by the IPTV service rather than by the IPTV player itself. A player such as TiviMate can be installed on multiple devices, but it cannot create additional server-side connections that your subscription does not include.
          </p>
          <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-100 text-xs sm:text-sm text-zinc-700 font-medium">
            💡 Each simultaneous stream consumes a connection slot. The limit is enforced at the server level — not by your Wi-Fi or IPTV player alone.
          </div>
        </section>

        {/* Mid square image */}
        <div className="mb-10 sm:mb-14 relative w-full max-w-xl mx-auto aspect-square rounded-xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-200">
          <Image
            src="/trex_iptv_multiple_screens_square.png"
            alt="Trex IPTV multiple screens simultaneous connections explained"
            fill
            sizes="(max-width: 640px) 100vw, 576px"
            className="object-cover object-center"
          />
        </div>

        {/* Two TVs */}
        <section id="two-tvs" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            Can You Use Trex IPTV on Two TVs?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            You may be able to install the same Trex IPTV credentials on two TVs, but watching both TVs simultaneously depends on your subscription&apos;s connection allowance. This distinction is important.
          </p>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            For example, suppose you have a Firestick on TV 1 and a Smart TV as TV 2. You could potentially configure the IPTV player on both using the{" "}
            <BlogInlineLink href="/how-to-install-trex-iptv-on-firetv/">
              Fire TV setup walkthrough
            </BlogInlineLink>
            . But if your account permits only one active connection, starting a stream on the second TV may cause the first stream to stop, freeze or fail to start.
          </p>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-6">
            Do not assume that every Trex IPTV subscription has the same multi-screen allowance. Always check the exact plan you are purchasing on our{" "}
            <BlogInlineLink href="/subscription-plans/">
              Trex IPTV subscription plans page
            </BlogInlineLink>
            .
          </p>

          <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-2 sm:mb-3">
            Why Can One Account Work on Multiple Devices?
          </h3>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            You might add your Trex IPTV credentials to three devices and find that all three accept the login. That does not necessarily mean all three can stream simultaneously.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm">
            <table className="w-full min-w-[420px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="px-3 sm:px-4 py-3 font-bold">Situation</th>
                  <th className="px-3 sm:px-4 py-3 font-bold text-[#ff6b35]">What It Means</th>
                </tr>
              </thead>
              <tbody>
                {connectionMeaning.map((row, idx) => (
                  <tr key={row.situation} className={idx % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                    <td className="px-3 sm:px-4 py-3 font-semibold text-zinc-900 border-t border-zinc-100">
                      {row.situation}
                    </td>
                    <td className="px-3 sm:px-4 py-3 text-zinc-600 border-t border-zinc-100">
                      {row.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Exceed limit */}
        <section id="exceed-limit" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            What Happens If You Exceed the Connection Limit?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            The exact behaviour depends on the service and IPTV player. You might see:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-4">
            {exceedSymptoms.map((item) => (
              <div
                key={item}
                className="p-3 rounded-xl border border-zinc-200 bg-zinc-50/50 flex items-start gap-2 text-xs sm:text-sm font-medium text-zinc-800"
              >
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed">
            This can make the problem look like buffering. Before changing network settings, check active devices — then use our{" "}
            <BlogInlineLink href="/trex-iptv-buffering-firestick/">
              Trex IPTV buffering on Firestick guide
            </BlogInlineLink>{" "}
            if a single screen still freezes after closing other streams.
          </p>
        </section>

        {/* TiviMate & Multiview */}
        <section id="tivimate-multiview" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            Does TiviMate Allow Multiple Trex IPTV Screens?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            TiviMate itself can support multiple streams or multiview features on compatible hardware. However, the IPTV player does not automatically increase your Trex subscription&apos;s connection allowance.
          </p>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            Suppose you open four channels in multiview. The player may technically display four streams — but whether your IPTV account permits those streams is a separate question. Do not confuse a player&apos;s multiview capability with your subscription&apos;s server-side connection allowance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
            <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white">
              <h3 className="text-sm font-bold text-zinc-950 mb-2">TV + phone at once?</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Only when your subscription allows multiple simultaneous connections. Both streams consume active slots.
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white">
              <h3 className="text-sm font-bold text-zinc-950 mb-2">Same Wi-Fi help?</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                No. Being on the same home Wi-Fi does not automatically give you multiple IPTV connections.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed">
            Installing on multiple Firesticks is also fine for setup — see the{" "}
            <BlogInlineLink href="/installation-guide/">
              multi-device Trex IPTV installation guide
            </BlogInlineLink>
            {" "}— but the simultaneous connection limit still applies when streaming.
          </p>
        </section>

        {/* How many needed */}
        <section id="how-many-needed" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            How Many Connections Do You Actually Need?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4 sm:mb-6">
            The easiest way to calculate this is to think about your maximum simultaneous usage. The important number is not the number of TVs in your house — it is the maximum number of streams you want running at the same time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {needExamples.map((item) => (
              <div
                key={item.title}
                className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white shadow-sm"
              >
                <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-2">
                  {item.text}
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#ff6b35]">
                  Required: {item.need}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section id="comparison-table" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            Trex IPTV Multiple Screens Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm mb-4">
            <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="px-3 sm:px-4 py-3 font-bold">Usage</th>
                  <th className="px-3 sm:px-4 py-3 font-bold">Example</th>
                  <th className="px-3 sm:px-4 py-3 font-bold text-[#ff6b35]">Connections Needed</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={row.usage} className={idx % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                    <td className="px-3 sm:px-4 py-3 font-semibold text-zinc-900 border-t border-zinc-100">
                      {row.usage}
                    </td>
                    <td className="px-3 sm:px-4 py-3 text-zinc-600 border-t border-zinc-100">
                      {row.example}
                    </td>
                    <td className="px-3 sm:px-4 py-3 text-zinc-700 font-medium border-t border-zinc-100">
                      {row.connections}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed">
            Always confirm your specific subscription allowance before relying on these numbers. Review current options on the{" "}
            <BlogInlineLink href="/subscription-plans/">
              Trex IPTV plans page
            </BlogInlineLink>
            .
          </p>
        </section>

        {/* Second screen freezing */}
        <section id="second-screen-freezing" className="mb-10 sm:mb-14 scroll-mt-28">
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-950 mb-3 sm:mb-4 tracking-tight">
            Why Does My Second Trex IPTV Screen Keep Freezing?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-4">
            If one screen works but another freezes, check the connection limit before assuming that your internet is too slow. The most useful checks are:
          </p>
          <ul className="space-y-2 mb-4">
            {freezeChecks.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs sm:text-sm text-amber-900 mb-6">
            Remember that a phone or TV application left running in the background may still hold a connection for a period of time. Devices people forget about can continue consuming connection slots.
          </div>

          <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-3 sm:mb-4">
            Common Mistakes With Trex Multiple Screens
          </h3>
          <div className="space-y-2.5 sm:space-y-3 mb-6">
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

          <h3 className="text-base sm:text-xl font-bold text-zinc-950 mb-3">
            How to Check Whether You Need a Multi-Connection Plan
          </h3>
          <p className="text-xs sm:text-base text-zinc-600 leading-relaxed mb-3">
            Before buying or upgrading, answer these questions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {planningQuestions.map((item) => (
              <div
                key={item}
                className="p-3 rounded-xl border border-zinc-200 bg-white flex items-start gap-2 text-xs sm:text-sm font-medium text-zinc-800"
              >
                <CheckCircle2 className="h-4 w-4 text-[#ff6b35] shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section id="checklist" className="mb-10 sm:mb-14 scroll-mt-28">
          <div className="p-4 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 mb-6 sm:mb-8">
            <h2 className="text-sm sm:text-base font-bold text-zinc-950 mb-3">
              Action Checklist
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mb-3">
              Before using Trex IPTV on multiple screens:
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
            Still deciding how many connections you need? These answers cover the most common multi-screen questions.
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

        <RelatedPosts currentSlug="trex-iptv-multiple-screens" />

        {/* CTA */}
        <section className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#ff6b35]/10 via-orange-50/50 to-white border border-[#ff6b35]/30">
          <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 mb-2 sm:mb-3 tracking-tight">
            Planning Multiple Screens?
          </h2>
          <p className="text-xs sm:text-base text-zinc-700 leading-relaxed mb-3 sm:mb-4">
            If you plan to use Trex IPTV across multiple TVs or family devices, check the simultaneous connection limit before purchasing or upgrading your subscription. Do not rely only on the number of devices supported — confirm how many streams your specific plan permits at the same time.
          </p>
          <p className="text-xs sm:text-base text-zinc-700 leading-relaxed mb-6">
            Browse more help in the{" "}
            <BlogInlineLink href="/blog/">
              Trex IPTV blog
            </BlogInlineLink>{" "}
            or{" "}
            <BlogInlineLink href="/contact/">
              contact Trex IPTV support
            </BlogInlineLink>
            . Only access IPTV services and content you are legally authorised to use in your location.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/subscription-plans/"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-lg bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 transition-colors shadow-sm text-center"
            >
              Check Our Trex IPTV Subscription Plans
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help choosing Trex IPTV connections for multiple screens")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 transition-colors shadow-sm text-center"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              Ask About Connection Limits
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
