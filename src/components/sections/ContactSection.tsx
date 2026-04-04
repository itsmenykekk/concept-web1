import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "project@university.edu", href: "mailto:project@university.edu" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Address", value: "123 Academic Drive, Research Hall, Suite 400", href: null },
  { icon: Globe, label: "Website", value: "www.projectconcept.edu", href: "https://www.projectconcept.edu" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/project-team", href: "https://linkedin.com/in/project-team" },
  { icon: Github, label: "GitHub", value: "github.com/project-concept", href: "https://github.com/project-concept" },
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="space-y-6">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-3xl font-serif font-bold text-heading">Contact</h2>
          <p className="text-muted-foreground mt-1 text-sm">Get in Touch</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/30 group"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-md p-2 transition-colors duration-200 group-hover:bg-primary/20">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-foreground hover:text-primary transition-colors duration-150 break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground break-all">{item.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-maroon-light border border-maroon-border rounded-lg p-6 text-center space-y-2">
          <p className="text-sm text-foreground/80">
            For inquiries regarding this concept paper, please contact the project lead 
            via email or schedule a consultation through the provided channels.
          </p>
        </div>
      </div>
    </section>
  );
}
