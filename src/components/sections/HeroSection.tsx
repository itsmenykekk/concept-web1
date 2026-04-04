import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-14">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-section-alt to-background" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,hsl(0_100%_30%)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
              Concept Paper
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
              Digital Learning
              <br />
              <span className="text-primary">Hub</span>
            </h1>
            <p className="text-foreground/60 leading-relaxed max-w-lg text-sm sm:text-base">
              Increasing student learning through ICT — a platform for
              collaboration, knowledge sharing, and academic excellence.
            </p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent transition-colors duration-200"
              >
                Contact Us
              </button>
              <button
                onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-border text-foreground/80 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-secondary/40 transition-colors duration-200 flex items-center gap-2"
              >
                Learn More <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right: Project Overview Cards */}
          <div className="space-y-4">
            <div className="bg-card/80 backdrop-blur rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Project Overview</p>
              <div className="grid grid-cols-2 gap-3">
                <StatCard label="Total Budget" value="₱5K" />
                <StatCard label="Budget Items" value="4" />
                <StatCard label="Century Skills" value="21st" />
                <StatCard label="Focused" value="ICT" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-stat-card rounded-lg p-4 transition-all duration-200 hover:bg-secondary group">
      <p className="text-2xl font-display font-bold text-primary group-hover:text-accent transition-colors">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
