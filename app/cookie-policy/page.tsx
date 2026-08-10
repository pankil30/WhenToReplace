import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — WhenToReplace",
  description: "WhenToReplace cookie policy. Learn how we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Cookie Policy</h1>
      <p className="text-slate-500 text-sm mb-8">Last Updated: August 10, 2026</p>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 mb-5">
          This Cookie Policy explains how WhenToReplace (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website at whentoreplace.com (&quot;Website&quot;). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">What Are Cookies?</h2>
        <p className="text-slate-600 mb-5">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information. Cookies set by the website owner (in this case, WhenToReplace) are called &quot;first-party cookies&quot;. Cookies set by parties other than the website owner are called &quot;third-party cookies&quot;.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Why Do We Use Cookies?</h2>
        <p className="text-slate-600 mb-4">
          We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Types of Cookies We Use</h2>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Essential Cookies</h3>
        <p className="text-slate-600 mb-4">
          These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the Website, you cannot refuse them without impacting how our Website functions.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Performance and Functionality Cookies</h3>
        <p className="text-slate-600 mb-4">
          These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Analytics and Customization Cookies</h3>
        <p className="text-slate-600 mb-4">
          These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you. We use Google Analytics to collect this information.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">Advertising Cookies</h3>
        <p className="text-slate-600 mb-4">
          These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests. We use Google AdSense to serve advertisements on our Website.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Third-Party Cookies</h2>
        <p className="text-slate-600 mb-5">
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. The third-party cookies we use include:
        </p>
        <ul className="space-y-2 text-slate-600 mb-5 list-disc pl-5">
          <li><strong>Google Analytics</strong> — For website traffic analysis and user behavior insights</li>
          <li><strong>Google AdSense</strong> — For serving targeted advertisements</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">How Can You Control Cookies?</h2>
        <p className="text-slate-600 mb-5">
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner on our Website. You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas of our Website may be restricted.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">How Often Will We Update This Cookie Policy?</h2>
        <p className="text-slate-600 mb-5">
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Where Can You Get Further Information?</h2>
        <p className="text-slate-600">
          If you have any questions about our use of cookies or other technologies, please email us at: <a href="mailto:hello@whentoreplace.com" className="text-sky-600 hover:underline font-semibold">hello@whentoreplace.com</a>
        </p>
      </div>
    </div>
  );
}
