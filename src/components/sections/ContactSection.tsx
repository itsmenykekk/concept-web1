import { User, Briefcase, Mail, Phone } from "lucide-react";

const contactDetails = [
  { icon: User, label: "Name", value: "Juan Dela Cruz" },
  { icon: Briefcase, label: "Position", value: "Project Coordinator" },
  { icon: Mail, label: "Email", value: "juandelacruz@email.com" },
  { icon: Phone, label: "Phone", value: "0915-546-6789" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-8 sm:p-10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Get in Touch</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                Have questions about the
                <br />
                <span className="text-primary">project?</span>
              </h2>
              <p className="text-sm text-foreground/50">
                Reach out to the project coordinator for more information about the
                Digital Learning Hub and how you can get involved.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {contactDetails.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="bg-primary/10 w-9 h-9 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
