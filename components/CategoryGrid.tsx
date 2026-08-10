"use client";

import Link from "next/link";

const categories = [
  { emoji: "🧊", name: "Home Appliances", count: "68 products", href: "/#categories" },
  { emoji: "💻", name: "Electronics", count: "94 products", href: "/#categories" },
  { emoji: "🚗", name: "Automotive", count: "52 products", href: "/#categories" },
  { emoji: "🛏️", name: "Home & Furniture", count: "45 products", href: "/#categories" },
  { emoji: "👟", name: "Sports & Fitness", count: "38 products", href: "/#categories" },
  { emoji: "🪥", name: "Personal Care", count: "31 products", href: "/#categories" },
  { emoji: "🔧", name: "Tools & Equipment", count: "56 products", href: "/#categories" },
  { emoji: "🌱", name: "Outdoor & Garden", count: "42 products", href: "/#categories" },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Browse by Category</h2>
        <p className="text-slate-500">Find replacement guides for every product in your home and life</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 hover:border-sky-500 transition-all duration-300"
          >
            <div className="text-3xl mb-2">{cat.emoji}</div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">{cat.name}</h3>
            <p className="text-xs text-slate-400">{cat.count}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
