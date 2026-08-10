import type { Metadata } from "next";
import Link from "next/link";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Laptop Lifespan & Replacement Guide - WhenToReplace",
  description: "How long do laptops last? Complete lifespan guide with performance decline signs, upgrade options, and the best time to buy a new laptop.",
  keywords: "laptop lifespan, how long do laptops last, when to replace laptop, computer replacement",
};

const warningSigns = [
  "Takes more than 2 minutes to boot up or open programs",
  "Cannot run the latest operating system or security updates",
  "Battery lasts less than 2 hours on a full charge",
  "Frequent crashes, freezes, or the blue screen of death",
  "Fan running constantly loud even during basic tasks",
  "Keyboard keys not working or trackpad unresponsive",
  "Screen flickering, dead pixels, or hinge damage",
];

const repairTable = [
  { issue: "Battery replacement", repair: "$80 - $150", replace: "$600 - $2,500", verdict: "Repair if under 4 years" },
  { issue: "RAM upgrade (8GB to 16GB)", repair: "$40 - $80", replace: "$600 - $2,500", verdict: "Repair - cheap performance boost" },
  { issue: "SSD upgrade (HDD to SSD)", repair: "$60 - $120", replace: "$600 - $2,500", verdict: "Repair - massive speed improvement" },
  { issue: "Screen replacement", repair: "$150 - $400", replace: "$600 - $2,500", verdict: "Repair if under 3 years" },
  { issue: "Motherboard failure", repair: "$300 - $700", replace: "$600 - $2,500", verdict: "Replace - not worth the cost" },
  { issue: "CPU/GPU failure", repair: "$250 - $600", replace: "$600 - $2,500", verdict: "Replace - integrated components" },
];

const bestMonths = [
  { month: "July", reason: "Back-to-school sales - deep discounts on student models" },
  { month: "November", reason: "Black Friday + Cyber Monday - best deals of the year" },
  { month: "March", reason: "Spring refresh sales on older inventory" },
  { month: "August", reason: "End of summer clearance before new releases" },
];

const relatedProducts = [
  { emoji: "📱", name: "Smartphone", href: "#", avg: "3-4 yrs" },
  { emoji: "🖥️", name: "Monitor", href: "#", avg: "8-12 yrs" },
  { emoji: "🎧", name: "Headphones", href: "#", avg: "3-5 yrs" },
];

export default function LaptopPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 md:p-10 text-center mb-8">
        <div className="text-6xl mb-4">💻</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Laptop</h1>
        <p className="text-lg text-slate-600 font-semibold">Average Lifespan: 4 - 6 Years</p>
        <p className="text-slate-500 text-sm mt-2">Replacement Cost: $600 - $2,500</p>
      </div>
      <AdPlaceholder size="leaderboard" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        <div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Lifespan Timeline</h2>
            <div className="h-3 bg-slate-200 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" style={{ width: "58%" }} />
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span>0 yrs (New)</span>
              <span className="font-semibold text-purple-600">Replacement Zone: 4-6 yrs</span>
              <span>6+ yrs (Obsolete)</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 rounded-lg p-3"><div className="text-green-600 font-bold text-sm">0-2 Years</div><div className="text-xs text-slate-500 mt-1">Fast & Current</div></div>
              <div className="bg-amber-50 rounded-lg p-3"><div className="text-amber-600 font-bold text-sm">3-4 Years</div><div className="text-xs text-slate-500 mt-1">Slowing Down</div></div>
              <div className="bg-red-50 rounded-lg p-3"><div className="text-red-600 font-bold text-sm">5+ Years</div><div className="text-xs text-slate-500 mt-1">Consider Upgrade</div></div>
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
                <thead><tr className="border-b border-slate-200"><th className="text-left py-3 px-2 font-bold text-slate-900">Common Issue</th><th className="text-left py-3 px-2 font-bold text-slate-900">Repair/Upgrade Cost</th><th className="text-left py-3 px-2 font-bold text-slate-900">New Unit Cost</th><th className="text-left py-3 px-2 font-bold text-slate-900">Verdict</th></tr></thead>
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
            <h2 className="text-xl font-bold text-slate-900 mb-4">Best Time to Buy a New Laptop</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bestMonths.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4"><div className="font-bold text-slate-900 mb-1">{m.month}</div><div className="text-sm text-slate-500">{m.reason}</div></div>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-4"><strong className="text-slate-900">Pro tip:</strong> Avoid buying in January-February when CES announcements make current models feel outdated. Also avoid October when pre-holiday demand drives prices up. The sweet spot is 2-3 months after a new CPU generation launches - previous-gen models drop 20-30%.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">When to Upgrade vs Replace</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">Unlike appliances, laptops can often be <strong className="text-slate-900">upgraded to extend lifespan</strong>. A $60 SSD upgrade can make a 5-year-old laptop feel brand new. A $50 RAM upgrade can eliminate slowdowns from multitasking.</p>
            <p className="text-slate-600 mb-4 leading-relaxed">However, if your laptop cannot run the latest operating system (Windows 11 requires TPM 2.0, for example), it is a security risk regardless of performance. Operating systems stop receiving security updates after a certain age, leaving your data vulnerable.</p>
            <p className="text-slate-600 leading-relaxed"><strong className="text-slate-900">Rule of thumb:</strong> If a repair or upgrade costs more than 30% of a new laptop&apos;s price, buy new. If it is under 30%, upgrade and extend the life by 2-3 years.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Data Sources</h2>
            <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Consumer Reports - Laptop reliability surveys (2020-2025)</li>
              <li>PCMag - Annual laptop reviews and longevity tests</li>
              <li>r/laptops Reddit community - User-reported failure and upgrade data</li>
              <li>iFixit - Repair difficulty scores and part cost data</li>
              <li>Major manufacturer warranty documents - Dell, HP, Lenovo, Apple, ASUS</li>
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
