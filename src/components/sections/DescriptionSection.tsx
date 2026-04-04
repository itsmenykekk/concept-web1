const phases = [
  {
    phase: "Phase 1",
    title: "Research & Analysis",
    description: "Comprehensive research phase including literature review, stakeholder analysis, and requirements gathering to establish a solid foundation for the project.",
  },
  {
    phase: "Phase 2",
    title: "Design & Planning",
    description: "Development of system architecture, detailed project plans, and resource allocation strategies based on findings from the research phase.",
  },
  {
    phase: "Phase 3",
    title: "Implementation",
    description: "Systematic execution of the project plan, including development, testing, and iterative refinement of the proposed solution.",
  },
  {
    phase: "Phase 4",
    title: "Evaluation & Deployment",
    description: "Comprehensive testing, stakeholder feedback integration, final documentation, and deployment of the completed system.",
  },
];

export function DescriptionSection() {
  return (
    <section id="description" className="scroll-mt-20">
      <div className="space-y-6">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-serif font-bold text-heading">Description</h2>
          <p className="text-muted-foreground mt-1 text-sm">Detailed Project Information</p>
        </div>

        <div className="bg-card rounded-lg border p-6 space-y-4 shadow-sm">
          <p className="leading-relaxed text-foreground/90">
            The proposed system is designed as a multi-phase initiative that progresses 
            through distinct stages of development. Each phase builds upon the outcomes 
            of the previous stage, ensuring a structured and methodical approach to 
            achieving the project's objectives.
          </p>
        </div>

        <div className="grid gap-4">
          {phases.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/30 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center shrink-0 font-serif font-bold text-sm transition-transform duration-200 group-hover:scale-105">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{item.phase}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-foreground">{item.title}</h3>
                  <p className="text-foreground/80 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
