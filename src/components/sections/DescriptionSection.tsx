export function DescriptionSection() {
  return (
    <section id="description" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Description</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Project Description
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
        </div>
        <div className="max-w-2xl mx-auto border border-dashed border-border rounded-xl p-10 bg-card/50 text-center">
          <p className="text-muted-foreground italic text-sm">
            Wala pang laman — hinihintay pa ang concept paper.
          </p>
        </div>
      </div>
    </section>
  );
}
