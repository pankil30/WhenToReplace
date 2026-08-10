import type { Metadata } from "next";
import Link from "next/link";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Washing Machine Lifespan & Replacement Guide - WhenToReplace",
  description: "How long do washing machines last? Complete lifespan guide with failure signs, repair costs, and the best time to buy a new washer.",
  keywords: "washing machine lifespan, how long do washers last, when to replace washing machine, washer replacement",
};

const warningSigns = [
  "Excessive vibration or loud banging during spin cycle",
  "Water not draining properly or standing water in drum",
  "Clothes coming out still dirty or with detergent residue",
  "Water leaking from the bottom or door seal area",
  "Strange burning smell during operation",
  "Drum not spinning or spinning very slowly",
  "Error codes appearing frequently on digital display",
];

const repairTable = [
  { issue: "Door seal/gasket leak", repair: "$80 - $200", replace: "$500 - $1,500", verdict: "Repair if under 8 years" },
  { issue: "Pump failure", repair: "$150 - $350", replace: "$500 - $1,500", verdict: "Repair if under 10 years" },
  { issue: "Motor failure", repair: "$300 - $600", replace: "$500 - $1,500", verdict: "Replace if older than 8 years" },
  { issue: "Control board failure", repair: "$250 - $500", replace: "$500 - $1,500", verdict: "Replace if older than 7 years" },
  { issue: "Drum bearing failure", repair: "$350 - $700", replace: "$500 - $1,500", verdict: "Replace - major repair" },
];

const bestMonths = [
  { month: "September", reason: "New models released, old stock discounted" },
  { month: "November", reason: "Black Friday appliance deals" },
  { month: "May", reason: "Memorial Day sales on home appliances" },
  { month: "January", reason: "Post-holiday clearance events" },
];

const relatedProducts = [
  { emoji: "🍽️", name: "Dishwasher", href: "#", avg: "9-12 yrs" },
  { emoji: "🧊", name: "Refrigerator", href: "/products/refrigerator", avg: "10-15 yrs" },
  { emoji: "🍕", name: "Microwave", href: "#", avg: "7-10 yrs" },
];

export default function WashingMachinePage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 md:p-10 text-center mb-8">
        <div className="text-6xl mb-4">🍽️</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Washing Machine</h1>
        <p className="text-lg text-slate-600 font-semibold">Average Lifespan: 9 - 12 Years</p>
        <p className="text-slate-500 text-sm mt-2">Replacement Cost: $500 - $1,500</p>
      </div>
      <AdPlaceholder size="leaderboard" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        <div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Lifespan Timeline</h2>
            <div className="h-3 bg-slate-200 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{ width: "65%" }} />
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span>0 yrs (New)</span>
              <span className="font-semibold text-blue-600">Replacement Zone: 9-12 yrs</span>
              <span>12+ yrs (Risk)</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 rounded-lg p-3"><div className="text-green-600 font-bold text-sm">0-5 Years</div><div className="text-xs text-slate-500 mt-1">Peak Performance</div></div>
              <div className="bg-amber-50 rounded-lg p-3"><div className="text-amber-600 font-bold text-sm">6-8 Years</div><div className="text-xs text-slate-500 mt-1">Watch for Issues</div></div>
              <div className="bg-red-50 rounded-lg p-3"><div className="text-red-600 font-bold text-sm">9+ Years</div><div className="text-xs text-slate-500 mt-1">Plan Replacement</div></div>
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
            <h2 className="text-xl font-bold text-slate-900 mb-4">Best Time to Buy a New Washing Machine</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bestMonths.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4"><div className="font-bold text-slate-900 mb-1">{m.month}</div><div className="text-sm text-slate-500">{m.reason}</div></div>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-4"><strong className="text-slate-900">Pro tip:</strong> Front-load washers typically last longer than top-load models but cost more to repair. If your front-loader needs a major repair after year 8, replacement is usually the smarter financial choice.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Energy Efficiency Impact</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">Modern washing machines use <strong className="text-slate-900">40-60% less water</strong> and <strong className="text-slate-900">25-35% less electricity</strong> than models made before 2010. An Energy Star certified washer can save you $50-$100 per year on utility bills compared to an older unit.</p>
            <p className="text-slate-600 leading-relaxed">Over a 10-year lifespan, those savings add up to $500-$1,000 - potentially covering the cost difference between a basic model and a high-efficiency unit. If your current washer is over 12 years old, the energy savings alone may justify replacement even if it still works.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Data Sources</h2>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Consumer Reports - Appliance reliability surveys (2020-2025)</li>
              <li>Energy Star - Washing machine efficiency database</li>
              <li>HomeAdvisor - National repair cost averages</li>
              <li>r/appliances Reddit community - User-reported failure data</li>
              <li>Major manufacturer warranty documents - Whirlpool, LG, Samsung, GE</li>
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
