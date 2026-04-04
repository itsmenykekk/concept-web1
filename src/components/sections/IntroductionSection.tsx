export function IntroductionSection() {
  return (
    <section id="introduction" className="scroll-mt-20">
      <div className="space-y-6">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-serif font-bold text-heading">Introduction</h2>
          <p className="text-muted-foreground mt-1 text-sm">Project Overview</p>
        </div>

        <div className="bg-card rounded-lg border p-6 space-y-4 shadow-sm">
          <p className="leading-relaxed text-foreground/90">
            This concept paper presents a comprehensive overview of the proposed project, 
            outlining its scope, objectives, and anticipated impact. The initiative is designed 
            to address current challenges within the target domain by leveraging modern 
            methodologies and innovative solutions.
          </p>
          <p className="leading-relaxed text-foreground/90">
            The project aims to deliver a scalable and sustainable solution that aligns with 
            established academic and industry standards. Through careful planning and systematic 
            execution, this proposal seeks to bridge the gap between theoretical frameworks 
            and practical implementation.
          </p>
          <div className="bg-maroon-light border border-maroon-border rounded-md p-4 mt-4">
            <p className="text-sm text-foreground/80 italic">
              "Innovation distinguishes between a leader and a follower." — This project 
              embodies the spirit of innovation by introducing novel approaches to long-standing 
              challenges in the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
