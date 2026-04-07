import { User, Briefcase, Mail, Phone, MessageSquareHeart } from "lucide-react";

const contactDetails = [
  { icon: User, label: "Name", value: "Angela Gardoce" },
  { icon: Briefcase, label: "Position", value: "Eywan" },
  { icon: Mail, label: "Email", value: "anotara@gmail.com" },
  { icon: Phone, label: "Phone", value: "numberko" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 scroll-mt-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_50%_100%,hsl(340_90%_45%)_0%,transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-10 space-y-7 glow-pink relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
            <div className="relative space-y-7">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  <MessageSquareHeart className="h-4 w-4" />
                  Get in Touch
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                  Have questions about the
                  <br />
                  <span className="gradient-text">project?</span>
                </h2>
                <p className="text-sm text-foreground/35 leading-relaxed">
                  Reach out to the project coordinator for more information about the
                  Digital Learning Hub and how you can get involved.
                </p>
              </div>

              <div className="space-y-2">
                {contactDetails.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group p-3.5 rounded-2xl hover:bg-primary/5 transition-all duration-300">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/15 w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:from-primary/30 group-hover:to-accent/25 transition-all duration-300 shrink-0 border border-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
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
