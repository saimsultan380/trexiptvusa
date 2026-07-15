import React from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <span className="text-[#ff6b35] text-9xl font-black opacity-10">404</span>
            <h1 className="text-4xl font-black text-zinc-900 -mt-16 mb-4">Page Not Found</h1>
            <p className="text-zinc-500 font-medium leading-relaxed">
              The page you are looking for doesn't exist or has been moved. 
              Check the URL or return to the homepage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-[#ff6b35] px-8 text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-[#ff5722] transition-all"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            
            <Link
              href="/installation-guide"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-zinc-200 bg-white px-8 text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Installation Guide</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
