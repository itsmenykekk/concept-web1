import { useState, useEffect, useCallback } from "react";
import { Users, User, ChevronLeft, ChevronRight } from "lucide-react";

const members = [
  "Shina Ashley Abrera",
  "Rhieyzel Anne Bellingan",
  "Deiniel De Dios",
  "Vincent Galdo",
  "Keizer Garcia",
  "Angela Gardoce",
  "Jan Ashley Longasa",
  "Januarius Matthew",
  "Faith Alexis Rasalan",
];

export function MembersSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const next = useCallback(() => {
    setDirection("right");
    setCurrent((p) => (p + 1) % members.length);
  }, []);

  const prev = useCallback(() => {
    setDirection("left");
    setCurrent((p) => (p - 1 + members.length) % members.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="members" className="py-24 scroll-mt-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_50%_80%,hsl(270_90%_45%)_0%,transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-10 glow-pink relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
            <div className="relative space-y-7">
              <div className="space-y-3 text-center">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  <Users className="h-4 w-4" />
                  Members
                </div>
              </div>

              {/* Slider */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="shrink-0 w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex-1 flex flex-col items-center justify-center min-h-[100px]">
                  <div
                    key={current}
                    className="flex flex-col items-center gap-3 animate-fade-in"
                  >
                    <div className="bg-gradient-to-br from-primary/20 to-accent/15 w-14 h-14 rounded-2xl flex items-center justify-center border border-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-base font-semibold text-foreground text-center">{members[current]}</p>
                    <p className="text-[11px] text-muted-foreground">Member</p>
                  </div>
                </div>

                <button
                  onClick={next}
                  className="shrink-0 w-10 h-10 rounded-full border border-primary/15 flex items-center justify-center text-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2">
                {members.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? "right" : "left");
                      setCurrent(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-primary w-6"
                        : "bg-primary/20 hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
