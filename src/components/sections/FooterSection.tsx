export function FooterSection() {
  return (
    <footer className="border-t border-primary/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground">
          © 2026 Digital Learning Hub ✨ All rights reserved.
        </span>
        <span className="text-xs gradient-text font-medium cursor-pointer hover:opacity-80 transition-opacity">
          💖 Digital Learning Hub
        </span>
      </div>
    </footer>
  );
}
