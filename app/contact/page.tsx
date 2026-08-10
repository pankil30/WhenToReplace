import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — WhenToReplace",
  description: "Get in touch with the WhenToReplace team. We welcome feedback, corrections, data contributions, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Contact Us</h1>
        <p className="text-slate-500 max-w-xl mx-auto">
          Have a question, found an error, or want to contribute data? We read every message and typically respond within 48 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Mail size={22} />
          </div>
          <h3 className="font-bold text-slate-900 mb-1">Email</h3>
          <p className="text-slate-500 text-sm">hello@whentoreplace.com</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Clock size={22} />
          </div>
          <h3 className="font-bold text-slate-900 mb-1">Response Time</h3>
          <p className="text-slate-500 text-sm">Within 48 hours</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <MapPin size={22} />
          </div>
          <h3 className="font-bold text-slate-900 mb-1">Location</h3>
          <p className="text-slate-500 text-sm">Remote Team, Worldwide</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Name</label>
              <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-sky-500 transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-sky-500 transition-colors" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
            <select className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-sky-500 transition-colors bg-white">
              <option>General Question</option>
              <option>Data Correction</option>
              <option>Contribution</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
            <textarea rows={5} className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm outline-none focus:border-sky-500 transition-colors resize-none" placeholder="Tell us how we can help..."></textarea>
          </div>
          <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
