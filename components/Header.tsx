"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-6 sm:px-8">
      <header className="w-full max-w-7xl rounded-2xl sm:rounded-full bg-white/70 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-zinc-200/50 hover:border-zinc-300/80 transition-colors duration-300 overflow-hidden">
        <div className="mx-auto flex h-16 sm:h-[84px] items-center justify-between px-5 sm:px-12">
          
          {/* Logo (Image only) */}
          <div className="flex items-center">
            <a href="/" className="relative block h-16 w-56 sm:h-20 sm:w-72 transition-transform hover:scale-[1.02]">
              <Image 
                src="/logo.PNG" 
                alt="Trex IPTV Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </a>
          </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-zinc-700">
          <a href="/" className="hover:text-[#ff6b35] transition-colors">Home</a>
          <a href="/installation-guide" className="hover:text-[#ff6b35] transition-colors">Installation Guide</a>
          <a href="/subscription-plans" className="hover:text-[#ff6b35] transition-colors">Subscription Plans</a>
          <a href="/reseller-panel" className="hover:text-[#ff6b35] transition-colors">Reseller Panel</a>
          <a href="/contact" className="hover:text-[#ff6b35] transition-colors">Contact Us</a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/subscription-plans"
            className="flex h-11 items-center justify-center rounded-[4px] bg-[#ff6b35] px-6 text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors"
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-700 hover:text-zinc-950 focus:outline-none transition-colors"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/20 bg-white/80 backdrop-blur-xl px-6 py-6"
          >
            <nav className="flex flex-col gap-4 text-base font-semibold text-zinc-700">
              <a href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ff6b35] transition-colors">Home</a>
              <a href="/installation-guide" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ff6b35] transition-colors">Installation Guide</a>
              <a href="/subscription-plans" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ff6b35] transition-colors">Subscription Plans</a>
              <a href="/reseller-panel" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ff6b35] transition-colors">Reseller Panel</a>
              <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ff6b35] transition-colors">Contact Us</a>
            </nav>
            <div className="pt-6 mt-4 border-t border-zinc-100/50">
              <a href="/subscription-plans" onClick={() => setMobileMenuOpen(false)} className="flex h-12 items-center justify-center rounded-lg bg-[#ff6b35] text-base font-bold text-white hover:bg-[#ff5722] transition-colors">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </div>
  );
}
