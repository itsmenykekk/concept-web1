import { Target } from "lucide-react";

export function PurposeSection() {
  return (
    <section id="purpose" className="py-24 bg-section-alt scroll-mt-16 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            <Target className="h-4 w-4" />
            Purpose
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Goals & Objectives
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        <div className="max-w-2xl mx-auto glass rounded-2xl p-12 text-center glow-pink-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 rounded-2xl" />
          <div className="relative flex flex-col items-center gap-3">
            
            <p className="text-muted-foreground italic text-sm">
              This project focuses on improving financial literacy among young people and small business owners through the mobile app. It aims to address the common problem of the poor financial management by providing accessible online financial education. The app will assist the users develop essential skills such as a budgeting, saving, and also to expense tracking.
              The project is valuable in terms of time, effort, and the resources for both the group and potential sponsors. It is designed to help young entrepreneurs manage their finances more effectively, avoid common financial mistakes, and support the long-term success of their businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
