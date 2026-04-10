import { ArrowDown, Sparkles, Wallet, Box, Brain, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

function FloatingDots() {
  const [dots] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 4,
      opacity: Math.random() * 0.4 + 0.1,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-primary animate-float"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(260,40%,6%)] via-[hsl(265,30%,5%)] to-[hsl(255,35%,4%)]" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_20%_20%,hsl(270_90%_40%)_0%,transparent_55%)]" />
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_80%_80%,hsl(290_85%_45%)_0%,transparent_55%)]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_50%_50%,hsl(280_80%_50%)_0%,transparent_40%)]" />

      <FloatingDots />

      <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-accent/6 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-7 animate-fade-in">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] text-primary uppercase bg-gradient-to-r from-primary/15 to-accent/10 px-5 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Concept Paper
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.1] text-foreground">
              FinanceKnowledge
              <br />
              <span className="gradient-text">ICT - ABM 11-2</span>
            </h1>
            <p className="text-foreground/45 leading-relaxed max-w-lg text-sm sm:text-[15px]">
              Increasing student learning through ICT — a platform for
              collaboration, knowledge sharing, and academic excellence.
            </p>
            <div className="flex gap-3 pt-1">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-primary via-purple-glow to-accent text-primary-foreground px-7 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-all duration-300 glow-pink shadow-lg shadow-primary/25"
              >
                Contact Us
              </button>
              <button
                onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-primary/20 text-foreground/60 px-7 py-3 rounded-full font-semibold text-sm hover:bg-primary/10 hover:text-foreground hover:border-primary/40 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
              >
                Learn More <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="glass rounded-3xl p-7 glow-pink relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-purple-glow animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-accent/50" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <p className="text-[11px] text-muted-foreground uppercase tracking-[0.2em]">Project Overview</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <StatCard icon={Wallet} label="Total Budget" value="₱116K" />
                  <StatCard icon={Box} label="Budget Items" value="9" />
                  <StatCard icon={Brain} label="Century Skills" value="21st" />
                  <StatCard icon={Monitor} label="Focused" value="ICT" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, icon: Icon }: { label: string; value: string; icon: React.ElementType }) {
  return (
    <div className="bg-gradient-to-br from-stat-card/80 to-stat-card/40 rounded-2xl p-4 transition-all duration-300 hover:from-primary/15 hover:to-accent/10 hover:scale-[1.03] group border border-primary/5 hover:border-primary/15 backdrop-blur-sm">
      <Icon className="h-4 w-4 text-primary/70 mb-2 group-hover:text-primary transition-colors" />
      <p className="text-2xl font-display font-bold gradient-text">{value}</p>
      <p className="text-[11px] text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
