const budgetItems = [
  { category: "Personnel & Labor", amount: 45000, description: "Salaries, consultants, and support staff" },
  { category: "Equipment & Technology", amount: 18500, description: "Hardware, software licenses, and infrastructure" },
  { category: "Research Materials", amount: 8200, description: "Publications, data access, and reference materials" },
  { category: "Travel & Communication", amount: 5800, description: "Site visits, conferences, and communication tools" },
  { category: "Training & Development", amount: 6500, description: "Workshops, certifications, and skill development" },
  { category: "Contingency Fund", amount: 6000, description: "Unforeseen expenses and risk mitigation" },
];

export function BudgetSection() {
  const total = budgetItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section id="budget" className="scroll-mt-20">
      <div className="space-y-6">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-serif font-bold text-heading">Budget</h2>
          <p className="text-muted-foreground mt-1 text-sm">Estimated Cost Breakdown</p>
        </div>

        <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-serif font-bold text-sm">Category</th>
                  <th className="text-left p-4 font-serif font-bold text-sm hidden sm:table-cell">Description</th>
                  <th className="text-right p-4 font-serif font-bold text-sm">Amount (USD)</th>
                </tr>
              </thead>
              <tbody>
                {budgetItems.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-border transition-colors duration-150 hover:bg-maroon-light/50"
                  >
                    <td className="p-4 font-medium text-foreground">{item.category}</td>
                    <td className="p-4 text-muted-foreground text-sm hidden sm:table-cell">{item.description}</td>
                    <td className="p-4 text-right font-mono text-foreground">
                      ${item.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-primary/10">
                  <td className="p-4 font-serif font-bold text-heading">Total</td>
                  <td className="p-4 hidden sm:table-cell"></td>
                  <td className="p-4 text-right font-mono font-bold text-heading text-lg">
                    ${total.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
