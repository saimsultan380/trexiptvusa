"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { SITE_EMAIL } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Logo and About */}
          <div className="md:col-span-1">
            <a href="/" className="relative block h-16 w-56 sm:h-20 sm:w-72 mb-6">
              <Image 
                src="/logo.PNG" 
                alt="Trex IPTV Logo" 
                fill
                className="object-contain object-left"
              />
            </a>
            <p className="text-zinc-500 text-[14px] leading-relaxed font-medium max-w-xs mb-8">
              Premium IPTV streaming service with instant activation, buffer-free HD/4K quality, and 24/7 support on every device.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[16px] font-bold text-zinc-900 mb-6 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-zinc-500 hover:text-[#ff6b35] text-[14px] font-semibold transition-colors">Home</a></li>
              <li><a href="/installation-guide" className="text-zinc-500 hover:text-[#ff6b35] text-[14px] font-semibold transition-colors">Installation Guide</a></li>
              <li><a href="/subscription-plans" className="text-zinc-500 hover:text-[#ff6b35] text-[14px] font-semibold transition-colors">Subscription Plans</a></li>
              <li><a href="/reseller-panel" className="text-zinc-500 hover:text-[#ff6b35] text-[14px] font-semibold transition-colors">Reseller Panel</a></li>
              <li><a href="/contact" className="text-zinc-500 hover:text-[#ff6b35] text-[14px] font-semibold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Social and Contact */}
          <div>
            <h4 className="text-[16px] font-bold text-zinc-900 mb-6 uppercase tracking-wider">Contact Us</h4>
            <div className="flex flex-col gap-6">
              <a href={`mailto:${SITE_EMAIL}`} className="inline-flex items-center gap-2 text-zinc-900 hover:text-[#ff6b35] text-[14px] font-bold transition-colors">
                <Mail className="h-4 w-4" />
                {SITE_EMAIL}
              </a>

              <div className="flex items-center gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 hover:bg-[#ff6b35] hover:text-white transition-all duration-300">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 hover:bg-[#ff6b35] hover:text-white transition-all duration-300">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.058.935 20.39.53 19.6 0.228.14 4.947.132 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.058.935 20.39.53 19.6 12 12c0-3.037-2.463-5.5-5.5-5.5S6.5 8.963 6.5 12s2.463 5.5 5.5 5.5 5.5-2.463 5.5-5.5zm-1.1 0c0 2.43-1.97 4.4-4.4 4.4s-4.4-1.97-4.4-4.4 1.97-4.4 4.4-4.4 4.4 1.97 4.4 4.4zm7.647-7.647a1.28 1.28 0 11-2.56 0 1.28 1.28 0 012.56 0z"/></svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 hover:bg-[#ff6b35] hover:text-white transition-all duration-300">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 hover:bg-[#ff6b35] hover:text-white transition-all duration-300">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-[13px] font-medium text-center sm:text-left">
            © {currentYear} Trex IPTV. All rights reserved.
          </p>
          <div className="flex gap-6">
            <p className="text-zinc-400 text-[13px] font-medium">Built with Trex IPTV Passion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
