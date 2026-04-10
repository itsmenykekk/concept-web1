import { BookOpen, Eye, Target } from "lucide-react";

export function IntroductionSection() {
  return (
    <section id="intro" className="py-24 scroll-mt-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_50%_0%,hsl(270_90%_45%)_0%,transparent_60%)]" />
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

          {/* Placeholder */}
          <div className="glass rounded-2xl p-12 glow-pink-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 rounded-2xl" />
            <div className="relative flex flex-col items-center gap-3">
              
              <p className="text-muted-foreground italic text-sm">
                Financial literacy is important for students and young entrepreneurs who are starting small businesses or finding ways to earn extra income. It helps them manage their money properly by learning how to budget, save, and make wise financial decisions. Beyond tracking income and expenses, financial literacy also helps them plan for the future of their business, make better choices, and use their earnings wisely, whether for savings, expenses, or reinvestment.

                Also, the study follows its vision and mission to help young individuals and small business owners feel confident managing their money. It guides them to make thoughtful financial choices and gradually create a more stable and fulfilling life.

                Overall, financial literacy plays a big role in helping them make smarter financial choices and grow their small businesses toward long-term success.
              </p>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="glass rounded-2xl p-8 glow-pink-sm relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 text-primary">
                  <Eye className="h-5 w-5" />
                  <h3 className="text-lg font-display font-bold">Vision</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A future young people and small business owners feel at ease managing their money, make smart and thoughtful financial decisions, and slowly build a more stable and better life for themselves.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 glow-pink-sm relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 text-primary">
                  <Target className="h-5 w-5" />
                  <h3 className="text-lg font-display font-bold">Mission</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We aim to help young individuals and small business owners better understand money in a way that is simple, clear, and practical. So they can handle their finances with confidence, make wiser choices, and gradually reach their long-term goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
