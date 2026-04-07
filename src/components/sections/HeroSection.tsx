import { ArrowDown, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-section-alt" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,hsl(330_85%_40%)_0%,transparent_50%)]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_70%,hsl(270_80%_50%)_0%,transparent_50%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
              <Sparkles className="h-3 w-3" />
              Concept Paper
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
              Digital Learning
              <br />
              <span className="gradient-text">Hub ✨</span>
            </h1>
            <p className="text-foreground/50 leading-relaxed max-w-lg text-sm sm:text-base">
              Increasing student learning through ICT — a platform for
              collaboration, knowledge sharing, and academic excellence. 🚀
            </p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all duration-300 glow-pink"
              >
                💌 Contact Us
              </button>
              <button
                onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-primary/30 text-foreground/70 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary/10 hover:text-foreground transition-all duration-300 flex items-center gap-2"
              >
                Learn More <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right: Project Overview Card */}
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6 glow-pink">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">📊 Project Overview</p>
              <div className="grid grid-cols-2 gap-3">
                <StatCard emoji="💸" label="Total Budget" value="₱5K" />
                <StatCard emoji="📦" label="Budget Items" value="4" />
                <StatCard emoji="🧠" label="Century Skills" value="21st" />
                <StatCard emoji="💻" label="Focused" value="ICT" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, emoji }: { label: string; value: string; emoji: string }) {
  return (
    <div className="bg-stat-card/80 rounded-xl p-4 transition-all duration-300 hover:bg-primary/10 hover:scale-[1.02] group border border-primary/5">
      <p className="text-xs mb-1">{emoji}</p>
      <p className="text-2xl font-display font-bold gradient-text">{value}</p>
      <p className="text-[11px] text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
