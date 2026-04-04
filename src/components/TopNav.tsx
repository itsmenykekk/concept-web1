import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "INTRO", id: "intro" },
  { label: "PURPOSE", id: "purpose" },
  { label: "DESCRIPTION", id: "description" },
  { label: "BUDGET", id: "budget" },
  { label: "CONTACT", id: "contact" },
];

interface TopNavProps {
  activeSection: string;
}

export function TopNav({ activeSection }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <span className="font-display font-bold text-primary text-sm tracking-wide">
            DLH Project
          </span>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 text-xs font-semibold tracking-widest rounded-md transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground/60 hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground/80 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-nav-bg border-t border-border">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`block w-full text-left px-6 py-3 text-sm font-medium tracking-wider transition-colors ${
                activeSection === item.id
                  ? "text-primary bg-secondary/30"
                  : "text-foreground/60 hover:text-foreground hover:bg-secondary/20"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
