"use client";

const steps = [
  {
    num: "1",
    title: "Multi-Source Verification",
    desc: "Every data point is cross-checked against at least 3 independent sources before publication. No single source is trusted alone.",
  },
  {
    num: "2",
    title: "Quarterly Data Refresh",
    desc: "Product lifespans change as manufacturing improves or declines. We review and update our top 100 pages every 3 months.",
  },
  {
    num: "3",
    title: "Transparent Sourcing",
    desc: "Every product page lists its data sources at the bottom. We show you exactly where our numbers come from.",
  },
];

export default function MethodologySection() {
  return (
    <section className="bg-gradient-to-br from-sky-50 to-sky-100 py-12">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Our Research Methodology</h2>
          <p className="text-slate-500">How we ensure accuracy and trust on every page</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-white rounded-2xl p-7 border border-sky-200">
              <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-black text-lg mb-4">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
