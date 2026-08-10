"use client";

import Link from "next/link";

const products = [
  {
    emoji: "🧊",
    tag: "HOME APPLIANCE",
    tagColor: "bg-sky-500",
    name: "Refrigerator",
    avg: "10–15 yrs",
    cost: "$800–$2,500",
    fill: 72,
    barColor: "from-sky-500 to-sky-400",
    max: 15,
    href: "/products/refrigerator",
    bg: "from-sky-100 to-sky-200",
  },
  {
    emoji: "🛏️",
    tag: "HOME GOODS",
    tagColor: "bg-amber-500",
    name: "Mattress",
    avg: "7–10 yrs",
    cost: "$500–$3,000",
    fill: 60,
    barColor: "from-amber-500 to-amber-400",
    max: 10,
    href: "/products/mattress",
    bg: "from-amber-100 to-amber-200",
  },
  {
    emoji: "🚗",
    tag: "AUTOMOTIVE",
    tagColor: "bg-green-500",
    name: "Car Tires",
    avg: "4–6 yrs",
    cost: "$400–$1,200",
    fill: 55,
    barColor: "from-green-500 to-green-400",
    max: 6,
    href: "/products/car-tires",
    bg: "from-green-100 to-green-200",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Most Searched This Month</h2>
          <p className="text-slate-500">High-traffic product pages readers are actively researching</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-sky-500 transition-all duration-300 block"
            >
              <div className={`h-36 bg-gradient-to-br ${p.bg} flex items-center justify-center text-5xl`}>
                {p.emoji}
              </div>
              <div className="p-5">
                <span className={`inline-block ${p.tagColor} text-white text-[11px] font-bold px-2.5 py-1 rounded-full mb-2`}>
                  {p.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{p.name}</h3>
                <div className="flex gap-3 mb-3 text-sm text-slate-500 flex-wrap">
                  <span>Avg: <strong className="text-slate-900">{p.avg}</strong></span>
                  <span>Cost: <strong className="text-slate-900">{p.cost}</strong></span>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${p.barColor} rounded-full`}
                    style={{ width: `${p.fill}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1.5 text-[11px] text-slate-400">
                  <span>0 yrs</span>
                  <span>Replacement Zone</span>
                  <span>{p.max} yrs</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
