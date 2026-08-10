"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Clock } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#categories", label: "Categories" },
  { href: "/methodology", label: "Methodology" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-black text-xl text-slate-900">
          <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center text-white">
            <Clock size={18} />
          </div>
          WhenToReplace
        </Link>

        <ul className="hidden md:flex gap-7 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-slate-500 hover:text-sky-500 font-semibold text-sm transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className="hidden md:inline-block bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors"
        >
          Browse Database
        </Link>

        <button
          className="md:hidden text-slate-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-slate-600 font-semibold text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
