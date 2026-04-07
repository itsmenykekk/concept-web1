import { BookOpen, PenLine } from "lucide-react";

export function IntroductionSection() {
  return (
    <section id="intro" className="py-24 scroll-mt-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_50%_0%,hsl(330_85%_45%)_0%,transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            <BookOpen className="h-4 w-4" />
            Introduction
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Project Overview
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <div className="glass rounded-2xl p-12 glow-pink-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 rounded-2xl" />
            <div className="relative flex flex-col items-center gap-3">
              <PenLine className="h-6 w-6 text-primary/50" />
              <p className="text-muted-foreground italic text-sm">
                Wala pang laman — hinihintay pa ang concept paper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
