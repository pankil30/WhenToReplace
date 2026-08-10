"use client";

import { Search, Database } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-16 md:py-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-[720px] mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-sky-500/15 border border-sky-500/30 px-4 py-1.5 rounded-full text-xs font-semibold text-sky-400 mb-5">
          <Database size={14} />
          Data-driven replacement timing for 500+ products
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
          Know <span className="text-gradient">Exactly When</span> to Replace Anything
        </h1>

        <p className="text-base md:text-lg text-slate-400 mb-7 max-w-[600px] mx-auto">
          Product lifespan database with manufacturer data, consumer reports, and real-world failure analysis. Stop guessing. Start saving.
        </p>

        <div className="flex max-w-[520px] mx-auto bg-white/10 border border-white/15 rounded-xl overflow-hidden backdrop-blur-md">
          <input
            type="text"
            placeholder="Search any product (e.g. 'refrigerator', 'mattress', 'tires')"
            className="flex-1 px-5 py-3.5 bg-transparent text-white placeholder-slate-500 text-sm outline-none"
          />
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 font-bold text-sm transition-colors flex items-center gap-2">
            <Search size={16} />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
