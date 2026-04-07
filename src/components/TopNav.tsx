import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "📖 Intro", id: "intro" },
  { label: "🎯 Purpose", id: "purpose" },
  { label: "📋 Description", id: "description" },
  { label: "💰 Budget", id: "budget" },
  { label: "📬 Contact", id: "contact" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg/80 backdrop-blur-xl border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="font-display font-bold text-sm tracking-wide gradient-text">
            ✨ DLH Project
          </span>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-primary/20 text-primary glow-pink-sm"
                    : "text-foreground/50 hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-foreground/80 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-nav-bg/95 backdrop-blur-xl border-t border-primary/10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`block w-full text-left px-6 py-3.5 text-sm font-medium tracking-wider transition-all duration-300 ${
                activeSection === item.id
                  ? "text-primary bg-primary/10"
                  : "text-foreground/50 hover:text-foreground hover:bg-secondary/20"
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
