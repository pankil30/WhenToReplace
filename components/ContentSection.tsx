"use client";

export default function ContentSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Why Product Lifespan Data Matters</h2>
          <p className="text-slate-600 mb-4">
            Most consumers replace products based on guesswork, marketing pressure, or sudden failure. This leads to two costly mistakes: <strong className="text-slate-900">replacing too early</strong> and wasting money on a product with years of life left, or <strong className="text-slate-900">waiting too long</strong> and paying higher energy bills, repair costs, or emergency replacement premiums.
          </p>
          <p className="text-slate-600 mb-4">
            Our database solves this by providing <strong className="text-slate-900">data-driven replacement windows</strong> for over 500 household products. Each page combines manufacturer warranty data, consumer survey results, and repair industry reports to give you a realistic timeline — not a marketing number.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-8">What You Get on Every Product Page</h2>
          <ul className="space-y-2 text-slate-600 mb-6 list-disc pl-5">
            <li><strong className="text-slate-900">Visual Lifespan Timeline</strong> — See exactly where your product is in its lifecycle</li>
            <li><strong className="text-slate-900">Warning Signs Checklist</strong> — Know the specific symptoms that mean replacement is near</li>
            <li><strong className="text-slate-900">Repair vs Replace Cost Table</strong> — Make the financially smart decision with real numbers</li>
            <li><strong className="text-slate-900">Best Time to Buy</strong> — Seasonal pricing data so you purchase when prices are lowest</li>
            <li><strong className="text-slate-900">Energy & Efficiency Impact</strong> — Understand how much an old product is costing you monthly</li>
            <li><strong className="text-slate-900">Related Products</strong> — Discover what else in your home may need attention</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-slate-900 mb-4 mt-8">How We Calculate Lifespan</h2>
          <p className="text-slate-600 mb-4">
            We do not guess. Every product page is built from three independent data sources:
          </p>
          <p className="text-slate-600 mb-4">
            <strong className="text-slate-900">1. Manufacturer Data:</strong> We analyze official warranty periods, expected lifespan claims, and technical specifications published by brands. This gives us the baseline &quot;ideal&quot; lifespan under normal use conditions.
          </p>
          <p className="text-slate-600 mb-4">
            <strong className="text-slate-900">2. Consumer Surveys:</strong> We aggregate real-world replacement data from thousands of users across consumer forums, Reddit communities, and survey platforms. This reveals the actual average lifespan — often 20-30% shorter than manufacturer claims.
          </p>
          <p className="text-slate-600 mb-4">
            <strong className="text-slate-900">3. Repair Industry Reports:</strong> We consult repair technician data, appliance service records, and automotive maintenance databases to identify common failure points and average repair costs.
          </p>
          <p className="text-slate-600">
            By cross-referencing all three sources, we provide a <strong className="text-slate-900">realistic replacement range</strong> — not a best-case scenario designed to sell you a new product.
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="h-[600px] bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 text-xs font-semibold tracking-widest" style={{ writingMode: "vertical-rl" }}>
            ADSENSE SIDEBAR — 300×600 HALF PAGE
          </div>
        </div>
      </div>
    </section>
  );
}
