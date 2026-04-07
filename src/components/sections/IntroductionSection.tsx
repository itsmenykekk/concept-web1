export function IntroductionSection() {
  return (
    <section id="intro" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">📖 Introduction</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Project Overview ✨
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <div className="glass rounded-2xl p-10 glow-pink-sm">
            <p className="text-muted-foreground italic text-sm">
              📝 Wala pang laman — hinihintay pa ang concept paper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
