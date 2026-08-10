import type { Metadata } from "next";
import Link from "next/link";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Mattress Lifespan & Replacement Guide - WhenToReplace",
  description: "How long does a mattress last? Complete lifespan guide with warning signs, health impacts, and the best time to buy a new mattress.",
  keywords: "mattress lifespan, how long does a mattress last, when to replace mattress, mattress replacement",
};

const warningSigns = [
  "Visible sagging, lumps, or indentations deeper than 1 inch",
  "Waking up with back pain, neck pain, or stiffness",
  "You sleep better in hotels or other beds than your own",
  "The mattress is over 7 years old (regardless of visible wear)",
  "Increased allergy or asthma symptoms (dust mites accumulate)",
  "Squeaking springs or creaking noises when you move",
  "You can feel coils, springs, or the foundation through the padding",
];

const repairTable = [
  { issue: "Minor sagging (under 1 inch)", repair: "$50 - $150 (topper)", replace: "$500 - $3,000", verdict: "Repair with mattress topper" },
  { issue: "Deep sagging (over 1.5 inches)", repair: "Not repairable", replace: "$500 - $3,000", verdict: "Replace - affects spine alignment" },
  { issue: "Broken springs (innerspring)", repair: "Not repairable", replace: "$500 - $3,000", verdict: "Replace - structural failure" },
  { issue: "Stains or odor", repair: "$30 - $100 (cleaning)", replace: "$500 - $3,000", verdict: "Clean if under 5 years old" },
  { issue: "Dust mite allergy", repair: "$50 - $200 (cover)", replace: "$500 - $3,000", verdict: "Try encasement first" },
];

const bestMonths = [
  { month: "May", reason: "Memorial Day sales - biggest mattress discounts" },
  { month: "November", reason: "Black Friday + Cyber Monday deals" },
  { month: "February", reason: "President's Day sales events" },
  { month: "September", reason: "Labor Day clearance on older models" },
];

const relatedProducts = [
  { emoji: "🛏️", name: "Bed Frame", href: "#", avg: "15-20 yrs" },
  { emoji: "🪶", name: "Pillow", href: "#", avg: "1-2 yrs" },
  { emoji: "🛋️", name: "Sofa", href: "#", avg: "7-15 yrs" },
];

export default function MattressPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 md:p-10 text-center mb-8">
        <div className="text-6xl mb-4">🛏️</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Mattress</h1>
        <p className="text-lg text-slate-600 font-semibold">Average Lifespan: 7 - 10 Years</p>
        <p className="text-slate-500 text-sm mt-2">Replacement Cost: $500 - $3,000</p>
      </div>
      <AdPlaceholder size="leaderboard" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        <div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Lifespan Timeline</h2>
            <div className="h-3 bg-slate-200 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" style={{ width: "60%" }} />
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span>0 yrs (New)</span>
              <span className="font-semibold text-amber-600">Replacement Zone: 7-10 yrs</span>
              <span>10+ yrs (Risk)</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 rounded-lg p-3"><div className="text-green-600 font-bold text-sm">0-3 Years</div><div className="text-xs text-slate-500 mt-1">Optimal Support</div></div>
              <div className="bg-amber-50 rounded-lg p-3"><div className="text-amber-600 font-bold text-sm">4-6 Years</div><div className="text-xs text-slate-500 mt-1">Decline Begins</div></div>
              <div className="bg-red-50 rounded-lg p-3"><div className="text-red-600 font-bold text-sm">7+ Years</div><div className="text-xs text-slate-500 mt-1">Replace Soon</div></div>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">7 Warning Signs It&apos;s Time to Replace</h2>
            <ul className="space-y-3">
              {warningSigns.map((sign, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <span className="w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">!</span>
                  {sign}
                </li>
              ))}
            </ul>
          </div>
          <AdPlaceholder size="large-rectangle" />
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Repair vs Replace Cost Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-slate-200"><th className="text-left py-3 px-2 font-bold text-slate-900">Common Issue</th><th className="text-left py-3 px-2 font-bold text-slate-900">Repair Cost</th><th className="text-left py-3 px-2 font-bold text-slate-900">New Unit Cost</th><th className="text-left py-3 px-2 font-bold text-slate-900">Verdict</th></tr></thead>
                <tbody>
                  {repairTable.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 last:border-0">
                      <td className="py-3 px-2 text-slate-700">{row.issue}</td>
                      <td className="py-3 px-2 text-slate-600">{row.repair}</td>
                      <td className="py-3 px-2 text-slate-600">{row.replace}</td>
                      <td className="py-3 px-2"><span className={`text-xs font-bold px-2 py-1 rounded-full ${row.verdict.includes("Replace") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>{row.verdict}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Best Time to Buy a New Mattress</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bestMonths.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4"><div className="font-bold text-slate-900 mb-1">{m.month}</div><div className="text-sm text-slate-500">{m.reason}</div></div>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-4"><strong className="text-slate-900">Pro tip:</strong> Online mattress brands (Casper, Purple, Nectar) run sales year-round, but the deepest discounts happen during holiday weekends. In-store retailers follow the same pattern. Never pay full price.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Health Impact of an Old Mattress</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">Sleeping on a worn-out mattress does more than cause discomfort. Over time, a mattress accumulates <strong className="text-slate-900">dust mites, dead skin cells, and allergens</strong> that can trigger asthma and allergy symptoms. The Sleep Foundation reports that a 7-year-old mattress can contain between 100,000 to 10 million dust mites.</p>
            <p className="text-slate-600 mb-4 leading-relaxed">Additionally, sagging mattresses fail to support proper spinal alignment. This can lead to chronic back pain, poor sleep quality, and even circulation issues. If you wake up sore more than twice per week, your mattress is likely the culprit.</p>
            <p className="text-slate-600 leading-relaxed">The average person spends <strong className="text-slate-900">33% of their life in bed</strong>. A quality mattress is one of the highest-ROI health investments you can make.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Data Sources</h2>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Sleep Foundation - Mattress lifespan and health impact research</li>
              <li>Consumer Reports - Mattress durability testing (2019-2025)</li>
              <li>National Sleep Foundation - Sleep quality surveys</li>
              <li>r/Mattress Reddit community - User-reported replacement data</li>
              <li>Major manufacturer warranty documents - Sealy, Serta, Tempur-Pedic, Purple</li>
            </ul>
            <p className="text-xs text-slate-400 mt-4">Last updated: August 2026</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((p) => (
                <Link key={p.name} href={p.href} className="bg-white border border-slate-200 rounded-xl p-5 text-center hover:border-sky-500 hover:shadow-md transition-all">
                  <div className="text-3xl mb-2">{p.emoji}</div>
                  <div className="font-bold text-slate-900 text-sm">{p.name}</div>
                  <div className="text-xs text-slate-400 mt-1">{p.avg}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="h-[600px] bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 text-xs font-semibold tracking-widest" style={{ writingMode: "vertical-rl" }}>ADSENSE SIDEBAR - 300x600 HALF PAGE</div>
        </div>
      </div>
      <AdPlaceholder size="leaderboard" />
    </div>
  );
}
