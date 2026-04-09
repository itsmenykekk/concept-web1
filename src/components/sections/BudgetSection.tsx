import { Coins, PenLine } from "lucide-react";

const budgetItems = [
  { item: "Online Learning Materials", desc: "Development of infographics, financial modules, budgeting guides, and short educational videos.", cost: "₱12,000" },
  { item: "Workshops / Webinars", desc: "Speakers fee, webinar platform subscription, and materials.", cost: "₱10,000" },
  { item: "Monitoring & Evaluation", desc: "Feedback forms, data gathering tools, analytics, and progress reporting.", cost: "₱6,000" },
  { item: "Website Development", desc: "Website development, UI/UX design, CMS setup, system testing, and initial deployment.", cost: "₱35,000" },
  { item: "Domain & Hosting", desc: "Domain registration and web hosting per year. Includes SSL security, backups, better speed and room for upgrades as well as premium features.", cost: "₱20,000" },
  { item: "Internet Usage/Data", desc: "High-speed internet for research, uploading content, and maintenance (4–5 months).", cost: "₱10,000" },
  { item: "Software Subscription", desc: "Canva Pro, editing tools, plugins, and premium templates.", cost: "₱8,000" },
  { item: "Technical Support", desc: "IT assistance, troubleshooting, and system maintenance.", cost: "₱7,000" },
  { item: "Equipment & Miscellaneous", desc: "Microphone, ring light, storage, printing, and contingency expenses.", cost: "₱8,000" },
];

export function BudgetSection() {
  return (
    <section id="budget" className="py-24 bg-section-alt scroll-mt-16 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            <Coins className="h-4 w-4" />
            Budget
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Project Budget
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Placeholder */}
        <div className="max-w-2xl mx-auto glass rounded-2xl p-12 text-center glow-pink-sm relative overflow-hidden mb-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 rounded-2xl" />
          <div className="relative flex flex-col items-center gap-3">
            <PenLine className="h-6 w-6 text-primary/50" />
            <p className="text-muted-foreground italic text-sm">
              Wala pang laman — hinihintay pa ang concept paper.
            </p>
          </div>
        </div>

        {/* Budget Table */}
        <div className="max-w-4xl mx-auto glass rounded-2xl overflow-hidden glow-pink-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/20 bg-primary/5">
                  <th className="text-left px-6 py-4 font-display font-semibold text-foreground">Item/Activity</th>
                  <th className="text-left px-6 py-4 font-display font-semibold text-foreground hidden sm:table-cell">Description</th>
                  <th className="text-right px-6 py-4 font-display font-semibold text-foreground whitespace-nowrap">Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                {budgetItems.map((row, i) => (
                  <tr key={i} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground/90">
                      {row.item}
                      <p className="text-muted-foreground text-xs mt-1 sm:hidden">{row.desc}</p>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-xs leading-relaxed hidden sm:table-cell max-w-xs">{row.desc}</td>
                    <td className="px-6 py-4 text-right text-primary font-semibold whitespace-nowrap">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-primary/10">
                  <td colSpan={2} className="px-6 py-4 font-display font-bold text-foreground text-right">Total</td>
                  <td className="px-6 py-4 text-right font-display font-bold text-primary text-base">₱116,000</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
