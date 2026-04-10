import { FileText } from "lucide-react";

export function DescriptionSection() {
  return (
    <section id="description" className="py-24 scroll-mt-16 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            <FileText className="h-4 w-4" />
            Description
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Project Description
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="max-w-2xl mx-auto glass rounded-2xl p-12 text-center glow-pink-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 rounded-2xl" />
          <div className="relative flex flex-col items-center gap-3">
            
            <p className="text-muted-foreground italic text-sm">
              This project is a website aimed at improving financial literacy among young people and small business owners in the Philippines. Despite increased access to financial services, many individuals struggle with managing money, leading to debt, poor investments, and business challenges.
              The website provides simple, easy-to-understand information on key financial topics such as budgeting, saving, investing, responsible borrowing, tax compliance, and cash flow management. It highlights both the benefits of good financial habits and the risks of poor financial knowledge, showing how these affect personal stability, career growth, and business success.
              In addition to educational content, the site offers practical tools and activities, including creating personal budgets, developing business financial plans, exploring investment options, joining workshops, and practicing bookkeeping. These features encourage users to apply what they learn.
              The homepage has a clean design with a clear path to the main content, which is a scrollable page tailored to different groups like students, young professionals, and entrepreneurs.
              Supporting research shows that poor financial management is linked to procrastination and lower productivity, while strong financial habits lead to better long-term outcomes. In the Philippines, limited financial knowledge is also associated with weaker decision-making and slower financial and business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
