export function IntroductionSection() {
  return (
    <section id="intro" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Introduction</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Project Overview
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-foreground/70 leading-relaxed">
            This concept paper presents a comprehensive overview of the Digital Learning Hub,
            a platform designed to enhance student learning through ICT. The initiative leverages
            modern digital tools to create collaborative, knowledge-rich, and academically
            focused learning environments.
          </p>
          <p className="text-foreground/60 leading-relaxed text-sm">
            By integrating technology into the educational process, this project aims to
            bridge the gap between traditional learning methods and the demands of the
            21st-century digital landscape, equipping students with essential skills for
            their academic and professional futures.
          </p>
        </div>
      </div>
    </section>
  );
}
