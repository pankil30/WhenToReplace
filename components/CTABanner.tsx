"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 mb-12">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold mb-2">Stop Guessing. Start Saving.</h3>
          <p className="text-slate-400">Browse our database and find the exact replacement timing for your products.</p>
        </div>
        <Link
          href="/"
          className="bg-sky-500 hover:bg-sky-600 text-white px-7 py-3 rounded-xl font-bold text-sm transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          Explore Database
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
