import type { Metadata } from "next";
import Link from "next/link";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Car Tire Lifespan & Replacement Guide - WhenToReplace",
  description: "How long do car tires last? Complete tire lifespan guide with tread wear signs, safety warnings, and the best time to buy new tires.",
  keywords: "car tire lifespan, how long do tires last, when to replace tires, tire replacement safety",
};

const warningSigns = [
  "Tread depth below 2/32 of an inch (use the quarter test)",
  "Visible cracks, cuts, or bulges in the sidewall",
  "Vibration or shaking while driving at highway speeds",
  "Tires are older than 6 years (check DOT date code)",
  "Uneven wear patterns indicating alignment issues",
  "Frequent loss of tire pressure requiring refills",
  "Poor wet traction or longer stopping distances",
];

const repairTable = [
  { issue: "Minor puncture (repairable)", repair: "$20 - $40", replace: "$400 - $1,200", verdict: "Repair if in tread center" },
  { issue: "Sidewall damage", repair: "Not repairable", replace: "$400 - $1,200", verdict: "Replace immediately - safety risk" },
  { issue: "Uneven wear (alignment)", repair: "$75 - $150", replace: "$400 - $1,200", verdict: "Align + rotate, check tires" },
  { issue: "Tread worn below 2/32 inch", repair: "Not repairable", replace: "$400 - $1,200", verdict: "Replace - legally unsafe" },
  { issue: "Aged tires (6+ years)", repair: "Not repairable", replace: "$400 - $1,200", verdict: "Replace - rubber degrades" },
];

const bestMonths = [
  { month: "April", reason: "Spring sales + prep for summer road trips" },
  { month: "October", reason: "Winter tire swaps drive all-tire discounts" },
  { month: "Black Friday", reason: "Deep discounts on tire sets" },
  { month: "March", reason: "Pre-spring clearance on winter stock" },
];

const relatedProducts = [
  { emoji: "🔋", name: "Car Battery", href: "#", avg: "3-5 yrs" },
  { emoji: "🛑", name: "Brake Pads", href: "#", avg: "3-5 yrs" },
  { emoji: "🔧", name: "Spark Plugs", href: "#", avg: "30k-100k mi" },
];

export default function CarTiresPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 md:p-10 text-center mb-8">
        <div className="text-6xl mb-4">🚗</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Car Tires</h1>
        <p className="text-lg text-slate-600 font-semibold">Average Lifespan: 4 - 6 Years</p>
        <p className="text-slate-500 text-sm mt-2">Replacement Cost: $400 - $1,200 (set of 4)</p>
      </div>
      <AdPlaceholder size="leaderboard" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        <div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Lifespan Timeline</h2>
            <div className="h-3 bg-slate-200 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: "55%" }} />
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span>0 yrs (New)</span>
              <span className="font-semibold text-green-600">Replacement Zone: 4-6 yrs</span>
              <span>6+ yrs (Risk)</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 rounded-lg p-3"><div className="text-green-600 font-bold text-sm">0-2 Years</div><div className="text-xs text-slate-500 mt-1">Full Tread Depth</div></div>
              <div className="bg-amber-50 rounded-lg p-3"><div className="text-amber-600 font-bold text-sm">3-4 Years</div><div className="text-xs text-slate-500 mt-1">Monitor Wear</div></div>
              <div className="bg-red-50 rounded-lg p-3"><div className="text-red-600 font-bold text-sm">5+ Years</div><div className="text-xs text-slate-500 mt-1">Replace Soon</div></div>
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
                <thead><tr className="border-b border-slate-200"><th className="text-left py-3 px-2 font-bold text-slate-900">Common Issue</th><th className="text-left py-3 px-2 font-bold text-slate-900">Repair Cost</th><th className="text-left py-3 px-2 font-bold text-slate-900">New Set Cost</th><th className="text-left py-3 px-2 font-bold text-slate-900">Verdict</th></tr></thead>
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
            <h2 className="text-xl font-bold text-slate-900 mb-4">Best Time to Buy New Tires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bestMonths.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4"><div className="font-bold text-slate-900 mb-1">{m.month}</div><div className="text-sm text-slate-500">{m.reason}</div></div>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-4"><strong className="text-slate-900">Safety note:</strong> Never delay tire replacement due to cost. Worn tires are the leading cause of hydroplaning accidents. If your tread is below 2/32 inch, replace immediately regardless of budget.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Safety Impact of Worn Tires</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">Tires are your vehicle&apos;s only contact with the road. At 4/32 inch tread depth, wet stopping distance increases by <strong className="text-slate-900">117 feet</strong> compared to new tires. At the legal minimum of 2/32 inch, hydroplaning can occur at speeds as low as 35 mph in standing water.</p>
            <p className="text-slate-600 mb-4 leading-relaxed">Rubber also degrades with age regardless of tread depth. After 6 years, the rubber compound hardens and loses grip. This is why manufacturers recommend replacement at 6 years, even if tread appears adequate.</p>
            <p className="text-slate-600 leading-relaxed">Check your tire&apos;s DOT code (last 4 digits = week and year of manufacture). A tire with tread but aged rubber is a silent safety risk.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Data Sources</h2>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>NHTSA - Tire safety and tread depth guidelines</li>
              <li>Tire Rack - Consumer tire surveys and test data</li>
              <li>Consumer Reports - Tire durability and performance tests</li>
              <li>r/MechanicAdvice Reddit - Technician-reported failure data</li>
              <li>Major manufacturer data - Michelin, Bridgestone, Goodyear warranty docs</li>
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
