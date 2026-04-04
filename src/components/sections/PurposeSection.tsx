import { CheckCircle } from "lucide-react";

const objectives = [
  "Develop a robust framework for systematic project execution and delivery",
  "Establish measurable metrics for evaluating project outcomes and impact",
  "Create a sustainable model that can be replicated across similar contexts",
  "Foster collaboration among stakeholders through transparent communication",
  "Ensure compliance with established standards and best practices",
];

export function PurposeSection() {
  return (
    <section id="purpose" className="scroll-mt-20">
      <div className="space-y-6">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-serif font-bold text-heading">Purpose</h2>
          <p className="text-muted-foreground mt-1 text-sm">Goals & Objectives</p>
        </div>

        <div className="bg-card rounded-lg border p-6 space-y-4 shadow-sm">
          <p className="leading-relaxed text-foreground/90">
            The primary purpose of this project is to deliver a solution that addresses 
            the identified needs of the target community while maintaining the highest 
            standards of quality and professionalism. The following objectives outline 
            the key goals this initiative aims to achieve:
          </p>

          <ul className="space-y-3 mt-4">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" />
                <span className="text-foreground/90 leading-relaxed">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
