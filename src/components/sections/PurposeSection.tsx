import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "Enhance Digital Literacy",
    description: "Equip students with essential ICT skills needed for academic success and future careers.",
  },
  {
    icon: Lightbulb,
    title: "Foster Innovation",
    description: "Create an environment that encourages creative problem-solving through technology.",
  },
  {
    icon: Users,
    title: "Promote Collaboration",
    description: "Build a platform where students and educators can work together seamlessly.",
  },
  {
    icon: TrendingUp,
    title: "Improve Outcomes",
    description: "Measure and enhance student performance through data-driven insights.",
  },
];

export function PurposeSection() {
  return (
    <section id="purpose" className="py-20 bg-section-alt scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Purpose</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Goals & Objectives
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {goals.map((goal, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 space-y-3 transition-all duration-200 hover:border-primary/40 hover:-translate-y-1 group"
            >
              <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <goal.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">{goal.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>

        {/* Vision */}
        <div className="mt-16 text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">✦ Vision</span>
          <p className="text-foreground/70 leading-relaxed italic">
            A future where every student is equipped with strong digital literacy
            skills, works collaboratively, and is prepared to competently navigate
            responsibilities — becoming competent and responsible digital citizens.
          </p>
        </div>
      </div>
    </section>
  );
}
