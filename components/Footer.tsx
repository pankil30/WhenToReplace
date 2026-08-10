"use client";

import Link from "next/link";
import { Clock } from "lucide-react";

const footerCols = [
  {
    title: "Categories",
    links: [
      { href: "/#categories", label: "Home Appliances" },
      { href: "/#categories", label: "Electronics" },
      { href: "/#categories", label: "Automotive" },
      { href: "/#categories", label: "Home & Furniture" },
      { href: "/#categories", label: "Sports & Fitness" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/methodology", label: "Methodology" },
      { href: "/contact", label: "Contact" },
      { href: "/about", label: "Editorial Policy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-use", label: "Terms of Use" },
      { href: "/cookie-policy", label: "Cookie Policy" },
      { href: "/disclaimer", label: "Disclaimer" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "#", label: "Twitter / X" },
      { href: "#", label: "Reddit" },
      { href: "/contact", label: "Email Us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm">
      <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 font-black text-lg text-white mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center">
                <Clock size={16} className="text-white" />
              </div>
              WhenToReplace
            </div>
            <p className="leading-relaxed text-sm">
              The world&apos;s largest product lifespan database. Data-driven replacement timing to help you save money and avoid unexpected failures.
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-xs uppercase tracking-wide mb-4">
                {col.title}
              </h4>
              <ul className="list-none space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-sky-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs">
          © 2026 WhenToReplace.com — Data for informational purposes only. Not professional advice.
        </div>
      </div>
    </footer>
  );
}
