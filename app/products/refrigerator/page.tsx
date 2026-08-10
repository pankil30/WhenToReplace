import type { Metadata } from "next";
import Link from "next/link";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Refrigerator Lifespan & Replacement Guide - WhenToReplace",
  description: "How long do refrigerators last? Complete lifespan guide with warning signs, repair vs replace costs, and the best time to buy a new refrigerator.",
  keywords: "refrigerator lifespan, how long do refrigerators last, when to replace refrigerator, fridge replacement",
};

const warningSigns = [
  "Food spoiling faster than usual or inconsistent temperatures",
  "Loud motor noise, humming, or clicking sounds from the back",
  "Excess frost buildup in the freezer compartment",
  "Energy bill increasing without changed usage habits",
  "Water leaking from the bottom or inside the unit",
  "Door seal not closing properly, causing cold air escape",
  "Motor running constantly or cycling on and off frequently",
];

const repairTable = [
  { issue: "Compressor failure", repair: "$400 - $800", replace: "$1,200+", verdict: "Replace if older than 8 years" },
  { issue: "Door seal/gasket", repair: "$50 - $150", replace: "Keep it", verdict: "Repair - cheap fix" },
  { issue: "Thermostat failure", repair: "$150 - $300", replace: "$1,200+", verdict: "Repair if under 10 years" },
  { issue: "Evaporator fan motor", repair: "$200 - $400", replace: "$1,200+", verdict: "Repair if under 12 years" },
  { issue: "Control board failure", repair: "$300 - $600", replace: "$1,200+", verdict: "Replace if older than 10 years" },
  { issue: "Refrigerant leak", repair: "$300 - $600", replace: "$1,200+", verdict: "Replace if older than 8 years" },
];

const bestMonths = [
  { month: "November", reason: "Black Friday sales - deepest discounts" },
  { month: "September", reason: "New models released, old stock discounted" },
  { month: "May", reason: "Memorial Day sales on appliances" },
  { month: "January", reason: "Post-holiday clearance events" },
];

const relatedProducts = [
  { emoji: "🧊", name: "Freezer", href: "#", avg: "12-20 yrs" },
  { emoji: "🍽️", name: "Dishwasher", href: "#", avg: "9-12 yrs" },
  { emoji: "🍕", name: "Microwave", href: "#", avg: "7-10 yrs" },
];

export default function RefrigeratorPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl p-8 md:p-10 text-center mb-8">
        <div className="text-6xl mb-4">🧊</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Refrigerator</h1>
        <p className="text-lg text-slate-600 font-semibold">Average Lifespan: 10 - 15 Years</p>
        <p className="text-slate-500 text-sm mt-2">Replacement Cost: $800 - $2,500</p>
      </div>
      <AdPlaceholder size="leaderboard" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        <div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Lifespan Timeline</h2>
            <div className="h-3 bg-slate-200 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-full" style={{ width: "72%" }} />
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span>0 yrs (New)</span>
              <span className="font-semibold text-sky-600">Replacement Zone: 10-15 yrs</span>
              <span>15+ yrs (Risk)</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 rounded-lg p-3"><div className="text-green-600 font-bold text-sm">0-5 Years</div><div className="text-xs text-slate-500 mt-1">Peak Performance</div></div>
              <div className="bg-amber-50 rounded-lg p-3"><div className="text-amber-600 font-bold text-sm">6-9 Years</div><div className="text-xs text-slate-500 mt-1">Monitor Closely</div></div>
              <div className="bg-red-50 rounded-lg p-3"><div className="text-red-600 font-bold text-sm">10+ Years</div><div className="text-xs text-slate-500 mt-1">Plan Replacement</div></div>
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
            <h2 className="text-xl font-bold text-slate-900 mb-4">Best Time to Buy a New Refrigerator</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bestMonths.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4"><div className="font-bold text-slate-900 mb-1">{m.month}</div><div className="text-sm text-slate-500">{m.reason}</div></div>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-4"><strong className="text-slate-900">Pro tip:</strong> Avoid buying in June and July when demand peaks and discounts are rare. The worst time to buy is when your old fridge suddenly dies - emergency purchases cost 30-50% more.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Energy Efficiency Impact</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">A refrigerator over 15 years old can use 2-3 times more electricity than a modern Energy Star model. Based on the U.S. average electricity rate of $0.15/kWh, upgrading from a 2005 refrigerator to a 2025 model can save you <strong className="text-slate-900">$150-$300 per year</strong> on your energy bill alone.</p>
            <p className="text-slate-600 leading-relaxed">Over a 10-year lifespan, that energy savings can offset 30-50% of the cost of a new refrigerator. Factor this into your repair vs replace decision - sometimes replacing an old, inefficient unit pays for itself.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Data Sources</h2>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Consumer Reports - Appliance reliability surveys (2020-2025)</li>
              <li>Energy Star - Refrigerator energy consumption database</li>
              <li>HomeAdvisor - National repair cost averages</li>
              <li>r/appliances Reddit community - User-reported failure data</li>
              <li>Major manufacturer warranty documents - Whirlpool, GE, Samsung, LG</li>
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
