import type { Metadata } from "next";
import Link from "next/link";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Air Conditioner Lifespan & Replacement Guide - WhenToReplace",
  description: "How long do air conditioners last? Complete AC lifespan guide with efficiency decline signs, repair costs, and the best time to buy a new unit.",
  keywords: "air conditioner lifespan, how long do AC units last, when to replace air conditioner, HVAC replacement",
};

const warningSigns = [
  "Blowing warm air or weak airflow from vents",
  "Unusual noises: grinding, squealing, or banging from the outdoor unit",
  "Frequent cycling on and off (short cycling)",
  "Unexplained increase in electricity bills during summer months",
  "Moisture or leaks around the indoor unit",
  "Musty or burning smells when the AC runs",
  "Unit is over 15 years old regardless of apparent function",
];

const repairTable = [
  { issue: "Refrigerant recharge (minor leak)", repair: "$200 - $500", replace: "$3,000 - $7,500", verdict: "Repair if under 10 years" },
  { issue: "Capacitor replacement", repair: "$150 - $400", replace: "$3,000 - $7,500", verdict: "Repair - inexpensive fix" },
  { issue: "Compressor failure", repair: "$1,200 - $2,500", replace: "$3,000 - $7,500", verdict: "Replace if older than 10 years" },
  { issue: "Evaporator coil leak", repair: "$1,000 - $2,000", replace: "$3,000 - $7,500", verdict: "Replace if older than 12 years" },
  { issue: "Condenser fan motor", repair: "$300 - $600", replace: "$3,000 - $7,500", verdict: "Repair if under 12 years" },
];

const bestMonths = [
  { month: "September", reason: "End of summer - HVAC contractors offer off-season discounts" },
  { month: "March", reason: "Pre-spring prep - before the cooling season rush" },
  { month: "November", reason: "Fall clearance on remaining inventory" },
  { month: "January", reason: "Post-holiday slow season - best installer availability" },
];

const relatedProducts = [
  { emoji: "🔥", name: "Furnace", href: "#", avg: "15-20 yrs" },
  { emoji: "🌬️", name: "Air Purifier", href: "#", avg: "5-10 yrs" },
  { emoji: "🧊", name: "Refrigerator", href: "/products/refrigerator", avg: "10-15 yrs" },
];

export default function AirConditionerPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl p-8 md:p-10 text-center mb-8">
        <div className="text-6xl mb-4">❄️</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Air Conditioner</h1>
        <p className="text-lg text-slate-600 font-semibold">Average Lifespan: 15 - 20 Years</p>
        <p className="text-slate-500 text-sm mt-2">Replacement Cost: $3,000 - $7,500</p>
      </div>
      <AdPlaceholder size="leaderboard" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        <div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Lifespan Timeline</h2>
            <div className="h-3 bg-slate-200 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" style={{ width: "75%" }} />
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span>0 yrs (New)</span>
              <span className="font-semibold text-cyan-600">Replacement Zone: 15-20 yrs</span>
              <span>20+ yrs (Risk)</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 rounded-lg p-3"><div className="text-green-600 font-bold text-sm">0-8 Years</div><div className="text-xs text-slate-500 mt-1">Peak Efficiency</div></div>
              <div className="bg-amber-50 rounded-lg p-3"><div className="text-amber-600 font-bold text-sm">9-14 Years</div><div className="text-xs text-slate-500 mt-1">Efficiency Declining</div></div>
              <div className="bg-red-50 rounded-lg p-3"><div className="text-red-600 font-bold text-sm">15+ Years</div><div className="text-xs text-slate-500 mt-1">Plan Replacement</div></div>
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
            <h2 className="text-xl font-bold text-slate-900 mb-4">Best Time to Buy a New Air Conditioner</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bestMonths.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4"><div className="font-bold text-slate-900 mb-1">{m.month}</div><div className="text-sm text-slate-500">{m.reason}</div></div>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-4"><strong className="text-slate-900">Pro tip:</strong> Never buy an AC unit in June, July, or August. HVAC contractors are swamped with emergency repairs and charge premium rates. You will wait 2-4 weeks for installation and pay 15-25% more. Plan your replacement in the off-season.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">SEER Rating & Energy Savings</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">Air conditioner efficiency is measured by the <strong className="text-slate-900">SEER rating</strong> (Seasonal Energy Efficiency Ratio). Older units from the 2000s typically have SEER ratings of 8-10. Modern units start at 14 SEER and go up to 25+ for high-end models.</p>
            <p className="text-slate-600 mb-4 leading-relaxed">Upgrading from a 10 SEER unit to a 16 SEER unit can reduce your cooling costs by <strong className="text-slate-900">30-40%</strong>. In hot climates where AC runs 6+ months per year, that translates to $300-$600 in annual savings. Over a 15-year lifespan, a high-efficiency unit can save $4,500-$9,000 in electricity alone.</p>
            <p className="text-slate-600 leading-relaxed">The U.S. Department of Energy now requires a minimum of 14 SEER in most states. If your unit is below this, replacement is not just recommended - it may be required by local building codes during any major repair.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Data Sources</h2>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>U.S. Department of Energy - SEER rating standards and efficiency data</li>
              <li>Consumer Reports - HVAC system reliability surveys</li>
              <li>HomeAdvisor - National AC installation and repair cost averages</li>
              <li>r/HVAC Reddit - Technician-reported failure and replacement data</li>
              <li>Major manufacturer warranty documents - Carrier, Trane, Lennox, Goodman</li>
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
