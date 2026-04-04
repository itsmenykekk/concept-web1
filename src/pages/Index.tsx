import { useState, useCallback } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ConceptSidebar } from "@/components/ConceptSidebar";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { PurposeSection } from "@/components/sections/PurposeSection";
import { DescriptionSection } from "@/components/sections/DescriptionSection";
import { BudgetSection } from "@/components/sections/BudgetSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const handleSectionClick = useCallback((id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <ConceptSidebar activeSection={activeSection} onSectionClick={handleSectionClick} />

        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center border-b bg-card px-4 sticky top-0 z-10">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center gap-3">
              <div className="h-6 w-px bg-border" />
              <span className="text-sm text-muted-foreground font-sans">Concept Paper — Project Proposal</span>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
              <IntroductionSection />
              <PurposeSection />
              <DescriptionSection />
              <BudgetSection />
              <ContactSection />

              <footer className="border-t pt-6 pb-10 text-center">
                <p className="text-xs text-muted-foreground">
                  © 2026 Concept Paper. All rights reserved. This document is intended for review purposes only.
                </p>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
