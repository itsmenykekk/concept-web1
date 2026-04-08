import { Target, PenLine } from "lucide-react";

export function PurposeSection() {
  return (
    <section id="purpose" className="py-24 bg-section-alt scroll-mt-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-8 bg-[radial-gradient(ellipse_at_80%_50%,hsl(280_85%_45%)_0%,transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            <Target className="h-4 w-4" />
            Purpose
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Goals & Objectives
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="max-w-2xl mx-auto glass rounded-2xl p-12 text-center glow-pink-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 rounded-2xl" />
          <div className="relative flex flex-col items-center gap-3">
            <PenLine className="h-6 w-6 text-primary/50" />
            <p className="text-muted-foreground italic text-sm">
              Wala pang laman — hinihintay pa ang concept paper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
