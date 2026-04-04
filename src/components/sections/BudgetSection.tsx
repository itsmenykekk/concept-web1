const categories = [
  { name: "Online Platform", amount: 1500 },
  { name: "Student Activities", amount: 1200 },
  { name: "Grade Levels", amount: 800 },
  { name: "Digital Resources", amount: 1000 },
  { name: "Paper/Print Materials", amount: 500 },
];

export function BudgetSection() {
  const total = categories.reduce((s, c) => s + c.amount, 0);

  return (
    <section id="budget" className="py-20 bg-section-alt scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Budget</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Project Budget
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-sm">
            A breakdown of the estimated project costs, covering materials and resources necessary for implementation.
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <span
              key={i}
              className="bg-card border border-border rounded-full px-4 py-2 text-xs font-medium text-foreground/80 hover:border-primary/40 hover:text-primary transition-all duration-200 cursor-default"
            >
              {cat.name}
            </span>
          ))}
        </div>

        {/* Budget table */}
        <div className="max-w-2xl mx-auto bg-card rounded-xl border border-border overflow-hidden">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-6 py-4 transition-colors hover:bg-secondary/30 ${
                i !== categories.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-sm text-foreground/80">{cat.name}</span>
              <span className="text-sm font-mono font-semibold text-foreground">₱{cat.amount.toLocaleString()}</span>
            </div>
          ))}
          <div className="flex items-center justify-between px-6 py-4 bg-primary/10 border-t border-primary/20">
            <span className="font-display font-bold text-foreground">Total</span>
            <span className="font-mono font-bold text-primary text-lg">₱{total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
