import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — WhenToReplace",
  description: "WhenToReplace disclaimer. Important legal information about the use of our website and content.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Disclaimer</h1>
      <p className="text-slate-500 text-sm mb-8">Last Updated: August 10, 2026</p>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 mb-5">
          The information provided by WhenToReplace (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on whentoreplace.com (the &quot;Site&quot;) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Not Professional Advice</h2>
        <p className="text-slate-600 mb-5">
          The content on this Site does not constitute professional advice of any kind, including but not limited to financial, legal, medical, or technical advice. The lifespan estimates, cost data, and replacement recommendations provided on this Site are based on aggregated research and should not be considered definitive for any specific product or situation. Always consult with a qualified professional before making significant purchasing or replacement decisions.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">External Links Disclaimer</h2>
        <p className="text-slate-600 mb-5">
          The Site may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Errors and Omissions Disclaimer</h2>
        <p className="text-slate-600 mb-5">
          While we have made every attempt to ensure that the information contained on the Site is correct, we are not responsible for any errors or omissions, or for the results obtained from the use of this information. All information on the Site is provided &quot;as is&quot;, with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Fair Use Disclaimer</h2>
        <p className="text-slate-600 mb-5">
          The Site may use copyrighted material which has not always been specifically authorized by the copyright owner. We are making such material available for purposes of criticism, comment, news reporting, teaching, scholarship, or research. This constitutes a &quot;fair use&quot; of any such copyrighted material as provided for in section 107 of the US Copyright Law.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Testimonials Disclaimer</h2>
        <p className="text-slate-600 mb-5">
          The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Affiliate Disclosure</h2>
        <p className="text-slate-600 mb-5">
          WhenToReplace is a participant in the Amazon Services LLC Associates Program and other affiliate advertising programs designed to provide a means for sites to earn advertising fees by advertising and linking to affiliated sites. This means that some of the links on our Site are affiliate links, and at no additional cost to you, we will earn a commission if you decide to make a purchase after clicking through the link.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Limitation of Liability</h2>
        <p className="text-slate-600 mb-5">
          In no event shall WhenToReplace, its owners, employees, or affiliates be liable to you for anything arising out of or in any way connected with your use of this Site, whether such liability is under contract, tort, or otherwise. WhenToReplace, including its owners, employees, and affiliates, shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Site.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mb-3 mt-8">Contact Us</h2>
        <p className="text-slate-600">
          If you have any questions about this Disclaimer, please contact us at: <a href="mailto:hello@whentoreplace.com" className="text-sky-600 hover:underline font-semibold">hello@whentoreplace.com</a>
        </p>
      </div>
    </div>
  );
}
