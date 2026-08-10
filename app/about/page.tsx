import type { Metadata } from "next";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "About Us - WhenToReplace",
  description: "Learn about WhenToReplace, the world's largest product lifespan database dedicated to helping consumers make data-driven replacement decisions.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-6">About WhenToReplace</h1>
          <p className="text-slate-600 mb-5 leading-relaxed">
            WhenToReplace was founded in 2025 with a simple mission: eliminate the guesswork from product replacement decisions. Every year, millions of consumers throw away perfectly functional products or cling to failing ones far too long - both mistakes cost significant money.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Our Mission</h2>
          <p className="text-slate-600 mb-5 leading-relaxed">
            We believe consumers deserve access to the same lifespan data that manufacturers and repair technicians already know. By aggregating warranty periods, consumer surveys, and repair industry data into one free, searchable database, we empower people to replace products at the optimal time - maximizing value while minimizing waste.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">What Makes Us Different</h2>
          <ul className="space-y-3 text-slate-600 mb-6 list-disc pl-5">
            <li><strong className="text-slate-900">No manufacturer bias</strong> - We do not accept payment from brands to inflate lifespan numbers</li>
            <li><strong className="text-slate-900">Real-world data</strong> - Our numbers come from actual users and repair professionals, not marketing departments</li>
            <li><strong className="text-slate-900">Transparent methodology</strong> - Every page shows exactly where its data comes from</li>
            <li><strong className="text-slate-900">Quarterly updates</strong> - Product quality changes over time, and our data reflects that</li>
          </ul>
          <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Our Team</h2>
          <p className="text-slate-600 mb-5 leading-relaxed">
            Our research team includes data analysts, consumer advocates, and industry researchers who collectively review thousands of data points monthly. We cross-reference manufacturer specifications with real-world failure reports to provide the most accurate replacement timelines available online.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Editorial Independence</h2>
          <p className="text-slate-600 mb-5 leading-relaxed">
            WhenToReplace maintains strict editorial independence. Our content is not influenced by advertisers, manufacturers, or affiliate partners. All lifespan data, cost estimates, and buying recommendations are based solely on research and analysis.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Contact Us</h2>
          <p className="text-slate-600 leading-relaxed">
            Have a question, correction, or suggestion? We welcome feedback from our readers. Visit our <a href="/contact" className="text-sky-600 hover:underline font-semibold">Contact page</a> to reach our editorial team.
          </p>
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
