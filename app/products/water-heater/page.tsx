import type { Metadata } from "next";
import Link from "next/link";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Water Heater Lifespan & Replacement Guide - WhenToReplace",
  description: "How long do water heaters last? Complete lifespan guide with failure signs, tank vs tankless comparison, and the best time to buy a new water heater.",
  keywords: "water heater lifespan, how long do water heaters last, when to replace water heater, tankless water heater",
};

const warningSigns = [
  "Rusty or discolored water coming from hot taps",
  "Rumbling, popping, or banging noises from the tank",
  "Water pooling around the base of the heater",
  "Inconsistent water temperature or running out of hot water quickly",
  "Visible rust or corrosion on the tank exterior",
  "Age exceeds 10 years for tank models, 15 for tankless",
  "Sediment buildup causing reduced water pressure",
];

const repairTable = [
  { issue: "Heating element failure", repair: "$150 - $300", replace: "$800 - $3,000", verdict: "Repair if under 8 years" },
  { issue: "Thermostat replacement", repair: "$100 - $200", replace: "$800 - $3,000", verdict: "Repair - cheap fix" },
  { issue: "Pressure relief valve", repair: "$75 - $150", replace: "$800 - $3,000", verdict: "Repair - simple replacement" },
  { issue: "Tank corrosion/leak", repair: "Not repairable", replace: "$800 - $3,000", verdict: "Replace immediately" },
  { issue: "Anode rod replacement", repair: "$50 - $150", replace: "$800 - $3,000", verdict: "Repair - extends tank life" },
];

const bestMonths = [
  { month: "September", reason: "End of summer - plumbers less busy, better pricing" },
  { month: "February", reason: "Post-winter rush - off-season discounts" },
  { month: "May", reason: "Spring home improvement sales" },
  { month: "October", reason: "Pre-winter prep - bulk inventory discounts" },
];

const relatedProducts = [
  { emoji: "🚿", name: "Shower Head", href: "#", avg: "5-10 yrs" },
  { emoji: "🚰", name: "Faucet", href: "#", avg: "15-20 yrs" },
  { emoji: "🧊", name: "Refrigerator", href: "/products/refrigerator", avg: "10-15 yrs" },
];

export default function WaterHeaterPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 md:p-10 text-center mb-8">
        <div className="text-6xl mb-4">🚿</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Water Heater</h1>
        <p className="text-lg text-slate-600 font-semibold">Average Lifespan: 8 - 12 Years (Tank) / 15 - 20 Years (Tankless)</p>
        <p className="text-slate-500 text-sm mt-2">Replacement Cost: $800 - $3,000</p>
      </div>
      <AdPlaceholder size="leaderboard" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        <div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Lifespan Timeline</h2>
            <div className="h-3 bg-slate-200 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" style={{ width: "70%" }} />
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span>0 yrs (New)</span>
              <span className="font-semibold text-orange-600">Replacement Zone: 8-12 yrs</span>
              <span>12+ yrs (Risk)</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 rounded-lg p-3"><div className="text-green-600 font-bold text-sm">0-5 Years</div><div className="text-xs text-slate-500 mt-1">Reliable Operation</div></div>
              <div className="bg-amber-50 rounded-lg p-3"><div className="text-amber-600 font-bold text-sm">6-8 Years</div><div className="text-xs text-slate-500 mt-1">Inspect Annually</div></div>
              <div className="bg-red-50 rounded-lg p-3"><div className="text-red-600 font-bold text-sm">9+ Years</div><div className="text-xs text-slate-500 mt-1">High Failure Risk</div></div>
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
            <h2 className="text-xl font-bold text-slate-900 mb-4">Best Time to Buy a New Water Heater</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bestMonths.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4"><div className="font-bold text-slate-900 mb-1">{m.month}</div><div className="text-sm text-slate-500">{m.reason}</div></div>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-4"><strong className="text-slate-900">Pro tip:</strong> Never wait for a water heater to fail completely. A leaking tank can cause thousands in water damage. If your tank is over 10 years old, start budgeting for replacement even if it seems fine. Emergency replacements cost 30-50% more than planned ones.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Tank vs Tankless: Which to Choose?</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">When replacing an old tank water heater, many homeowners consider switching to tankless. Here is the honest breakdown:</p>
            <p className="text-slate-600 mb-4 leading-relaxed"><strong className="text-slate-900">Tank Water Heater:</strong> Lower upfront cost ($800-$1,500), simpler installation, 8-12 year lifespan. Best for homes with consistent hot water needs and budget constraints. However, they waste energy keeping water hot 24/7.</p>
            <p className="text-slate-600 leading-relaxed"><strong className="text-slate-900">Tankless Water Heater:</strong> Higher upfront cost ($2,000-$3,500 including installation), 15-20 year lifespan, 30-40% energy savings. Best for homes with limited space and long-term ownership plans. The energy savings typically pay back the extra cost in 5-7 years.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Data Sources</h2>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Energy.gov - Water heater efficiency and lifespan data</li>
              <li>Consumer Reports - Water heater reliability surveys</li>
              <li>HomeAdvisor - National installation and repair cost averages</li>
              <li>r/HomeImprovement Reddit - Homeowner-reported replacement data</li>
              <li>Major manufacturer warranty documents - Rheem, AO Smith, Bradford White</li>
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
