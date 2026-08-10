"use client";

const trustItems = [
  { icon: "✅", label: "Products Covered", value: "500+" },
  { icon: "📋", label: "Categories", value: "12" },
  { icon: "🔬", label: "Data Sources Per Product", value: "3" },
  { icon: "🔄", label: "Data Updates", value: "Quarterly" },
  { icon: "💰", label: "To Use", value: "100% Free" },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-slate-200 py-4">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-center gap-6 md:gap-10 flex-wrap">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>{item.icon}</span>
            <span className="text-slate-900 font-bold">{item.value}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
