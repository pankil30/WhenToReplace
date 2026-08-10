import type { Metadata } from "next";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Our Methodology - WhenToReplace",
  description: "Learn how WhenToReplace researches and calculates product lifespan data. We use three independent data sources for every product.",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Our Research Methodology</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Every number on this site comes from verified, independent sources. Here is exactly how we build each product page.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        <div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-5 text-xl font-black">1</div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Manufacturer Data Collection</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We begin every product research cycle by gathering official data from manufacturers. This includes warranty periods, expected lifespan claims published in product manuals, technical specification sheets, and official support documentation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Manufacturer data gives us the baseline "ideal" lifespan - the number the brand expects under normal use conditions. However, we treat this as a starting point only, not the final answer. Marketing departments often inflate these numbers, so we never publish manufacturer claims without cross-checking.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-5 text-xl font-black">2</div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Consumer Survey Aggregation</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Next, we aggregate real-world replacement data from thousands of actual users. Our sources include consumer review platforms, Reddit communities (r/BuyItForLife, r/appliances, r/AutoDetailing), survey platforms, and product review comment sections.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This step is critical because it reveals the actual average lifespan - which is typically 20-30% shorter than manufacturer claims. We look for patterns in user reports: when did most people replace? What were the common failure modes? How did usage intensity affect lifespan?
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-5 text-xl font-black">3</div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Repair Industry Data</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Finally, we consult repair technician data, appliance service records, automotive maintenance databases, and industry trade publications. These sources reveal common failure points, average repair costs, and the point at which technicians recommend replacement over repair.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Repair industry data is particularly valuable for our "Repair vs Replace" cost tables. Technicians see hundreds of failed products and know exactly which components fail first and what repairs cost in the real world.
            </p>
          </div>
          <div className="bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Our Publishing Standards</h2>
            <ul className="space-y-3 text-slate-600 list-disc pl-5">
              <li><strong>Minimum 3 sources</strong> required before any data point is published</li>
              <li><strong>No manufacturer-sponsored content</strong> - we do not accept payment to adjust lifespan numbers</li>
              <li><strong>Date-stamped updates</strong> - every page shows when it was last reviewed</li>
              <li><strong>Transparent sourcing</strong> - data sources listed at the bottom of every product page</li>
              <li><strong>Quarterly review cycle</strong> - top 100 pages are re-verified every 3 months</li>
              <li><strong>Reader corrections welcome</strong> - we update pages based on verified user feedback</li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="h-[600px] bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 text-xs font-semibold tracking-widest" style={{ writingMode: "vertical-rl" }}>ADSENSE SIDEBAR - 300x600 HALF PAGE</div>
        </div>
      </div>
      <div className="mt-10">
        <AdPlaceholder size="leaderboard" />
      </div>
    </div>
  );
}
