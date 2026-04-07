import { User, Briefcase, Mail, Phone } from "lucide-react";

const contactDetails = [
  { icon: User, label: "Name", value: "Angela Gardoce", emoji: "👤" },
  { icon: Briefcase, label: "Position", value: "Eywan", emoji: "💼" },
  { icon: Mail, label: "Email", value: "anotara@gmail.com", emoji: "📧" },
  { icon: Phone, label: "Phone", value: "numberko", emoji: "📱" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-2xl p-8 sm:p-10 space-y-6 glow-pink">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">📬 Get in Touch</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                Have questions about the
                <br />
                <span className="gradient-text">project? 💬</span>
              </h2>
              <p className="text-sm text-foreground/40">
                Reach out to the project coordinator for more information about the
                Digital Learning Hub and how you can get involved. 🤝
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {contactDetails.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group p-3 rounded-xl hover:bg-primary/5 transition-all duration-300">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <span className="text-sm">{item.emoji}</span>
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
