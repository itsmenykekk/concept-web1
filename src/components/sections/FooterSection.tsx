import { Heart } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="border-t border-primary/10 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground">
          © 2026 FinanceKnowledge, ICT - ABM 11-2. All rights reserved.
        </span>
        <span className="text-xs gradient-text font-medium flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
          <Heart className="h-3 w-3 text-primary" />
          ICT - ABM 11-2
        </span>
      </div>
    </footer>
  );
}
