"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getRelatedPosts } from "@/lib/blogData";

type RelatedPostsProps = {
  currentSlug: string;
  heading?: string;
};

export default function RelatedPosts({
  currentSlug,
  heading = "Related Trex IPTV Guides",
}: RelatedPostsProps) {
  const posts = getRelatedPosts(currentSlug, 3);
  if (posts.length === 0) return null;

  return (
    <section className="mb-10 sm:mb-14" aria-labelledby="related-posts-heading">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-4 sm:mb-6">
        <div>
          <span className="text-[11px] sm:text-xs font-bold text-[#ff6b35] uppercase tracking-wider">
            Keep Learning
          </span>
          <h2
            id="related-posts-heading"
            className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight mt-1"
          >
            {heading}
          </h2>
        </div>
        <Link
          href="/blog/"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#ff6b35] hover:text-[#ff5722] hover:underline"
        >
          Browse all IPTV guides <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#ff6b35]/40 transition-all"
          >
            <Link
              href={post.href}
              className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden block"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#ff6b35] text-white text-[10px] font-bold">
                {post.category}
              </span>
            </Link>
            <div className="p-3.5 sm:p-4 flex flex-col flex-grow">
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-zinc-400 mb-2">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-sm font-bold text-zinc-950 leading-snug mb-2 group-hover:text-[#ff6b35] transition-colors">
                <Link href={post.href}>{post.title}</Link>
              </h3>
              <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed line-clamp-2 mb-3 flex-grow">
                {post.description}
              </p>
              <Link
                href={post.href}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#ff6b35] hover:text-[#ff5722] mt-auto"
              >
                Read this guide <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
