import Link from "next/link";
import type { ReactNode } from "react";

type BlogInlineLinkProps = {
  href: string;
  children: ReactNode;
};

/** Contextual in-article internal link with descriptive, SEO-friendly styling. */
export default function BlogInlineLink({ href, children }: BlogInlineLinkProps) {
  return (
    <Link
      href={href}
      className="font-semibold text-[#ff6b35] underline decoration-[#ff6b35]/30 underline-offset-2 hover:decoration-[#ff6b35] hover:text-[#ff5722] transition-colors"
    >
      {children}
    </Link>
  );
}
