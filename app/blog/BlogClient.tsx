"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blogData";

export default function BlogClient() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col overflow-x-hidden">
      <Header />

      {/* Hero Section with Centered 'Blog' */}
      <section className="pt-24 pb-8 sm:pt-36 sm:pb-14 lg:pt-44 lg:pb-16 border-b border-zinc-100 bg-gradient-to-b from-zinc-50/80 via-zinc-50/30 to-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950"
          >
            Trex IPTV Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="mt-4 sm:mt-5 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl"
          >
            Practical guides for installing Trex IPTV, choosing M3U or Xtream Codes,
            fixing Firestick buffering, and repairing a missing EPG TV guide.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts 3-Cards Per Row Grid */}
      <main className="flex-grow py-8 sm:py-14 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight">
              Latest IPTV guides
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-600">
              Installation, connection methods, buffering fixes, and EPG troubleshooting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {BLOG_POSTS.map((post) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group flex flex-col rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-[#ff6b35]/40 transition-all duration-300 w-full"
              >
                {/* Thumbnail Image */}
                <Link
                  href={post.href}
                  className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden block"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#ff6b35] text-white text-[11px] font-bold shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Card Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-zinc-400 mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-base sm:text-lg font-bold text-zinc-950 leading-snug mb-2.5 group-hover:text-[#ff6b35] transition-colors">
                      <Link href={post.href}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Description */}
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-3.5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2 mt-auto">
                    <span className="text-xs text-zinc-500 font-medium truncate max-w-[150px]">
                      By {post.author}
                    </span>
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#ff6b35] group-hover:text-[#ff5722] transition-colors shrink-0"
                    >
                      Read full guide <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
