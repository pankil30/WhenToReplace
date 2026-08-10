import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — WhenToReplace",
  description: "WhenToReplace terms of use. Read our terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Terms of Use</h1>
      <p className="text-slate-500 text-sm mb-8">Last Updated: August 10, 2026</p>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 mb-5">
          Please read these Terms of Use (&quot;Terms&quot;, &quot;Terms of Use&quot;) carefully before using the whentoreplace.com website (the &quot;Service&quot;) operated by WhenToReplace (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">1. Agreement to Terms</h2>
        <p className="text-slate-600 mb-5">
          By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">2. Intellectual Property</h2>
        <p className="text-slate-600 mb-5">
          The Service and its original content, features, and functionality are and will remain the exclusive property of WhenToReplace and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of WhenToReplace.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">3. Use License</h2>
        <p className="text-slate-600 mb-4">
          Permission is granted to temporarily download one copy of the materials on WhenToReplace&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="space-y-2 text-slate-600 mb-5 list-disc pl-5">
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose, or for any public display;</li>
          <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
          <li>Remove any copyright or other proprietary notations from the materials; or</li>
          <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">4. User Content</h2>
        <p className="text-slate-600 mb-5">
          Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (&quot;Content&quot;). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness. By posting Content on or through the Service, you represent and warrant that the Content is yours and/or you have the right to use it.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">5. Links to Other Websites</h2>
        <p className="text-slate-600 mb-5">
          Our Service may contain links to third-party websites or services that are not owned or controlled by WhenToReplace. WhenToReplace has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that WhenToReplace shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such websites or services.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">6. Termination</h2>
        <p className="text-slate-600 mb-5">
          We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">7. Limitation of Liability</h2>
        <p className="text-slate-600 mb-5">
          In no event shall WhenToReplace, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">8. Governing Law</h2>
        <p className="text-slate-600 mb-5">
          These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">9. Changes</h2>
        <p className="text-slate-600 mb-5">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">10. Contact Us</h2>
        <p className="text-slate-600">
          If you have any questions about these Terms, please contact us at: <a href="mailto:hello@whentoreplace.com" className="text-sky-600 hover:underline font-semibold">hello@whentoreplace.com</a>
        </p>
      </div>
    </div>
  );
}
