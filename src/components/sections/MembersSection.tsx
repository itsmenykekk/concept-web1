import { Users, User } from "lucide-react";

const members = [
  "Shina Ashley Abrera",
  "Rhieyzel Anne Bellingan",
  "Deiniel De Dios",
  "Vincent Galdo",
  "Keizer Garcia",
  "Angela Gardoce",
  "Jan Ashley Longasa",
  "Januarius Matthew",
  "Faith Alexis Rasalan",
];

export function MembersSection() {
  return (
    <section id="members" className="py-24 scroll-mt-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_50%_80%,hsl(270_90%_45%)_0%,transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-10 glow-pink relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
            <div className="relative space-y-7">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  <Users className="h-4 w-4" />
                  Team Members
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                  Meet the <span className="gradient-text">Team</span>
                </h2>
                <p className="text-sm text-foreground/35 leading-relaxed">
                  The people behind the Digital Learning Hub project.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {members.map((name, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 group p-3.5 rounded-2xl hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-primary/20 to-accent/15 w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:from-primary/30 group-hover:to-accent/25 transition-all duration-300 shrink-0 border border-primary/10">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
