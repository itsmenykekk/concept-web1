const phases = [
  { phase: "01", title: "Research & Analysis", description: "Literature review, stakeholder analysis, and requirements gathering." },
  { phase: "02", title: "System Design", description: "Architecture planning, UI/UX design, and resource allocation." },
  { phase: "03", title: "Development", description: "Platform development, content creation, and integration of ICT tools." },
  { phase: "04", title: "Testing & Deployment", description: "Quality assurance, user testing, feedback integration, and launch." },
];

export function DescriptionSection() {
  return (
    <section id="description" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Description</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Project Methodology
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          <p className="text-foreground/60 max-w-2xl mx-auto text-sm">
            The Digital Learning Hub follows a structured multi-phase approach, ensuring
            systematic progress from concept to deployment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((item, i) => (
            <div
              key={i}
              className="relative bg-card rounded-xl border border-border p-6 transition-all duration-200 hover:border-primary/40 group"
            >
              <span className="text-5xl font-display font-bold text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                {item.phase}
              </span>
              <div className="relative z-10 space-y-3 pt-6">
                <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
