import { useState, useEffect } from "react";
import { TopNav } from "@/components/TopNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { PurposeSection } from "@/components/sections/PurposeSection";
import { DescriptionSection } from "@/components/sections/DescriptionSection";
import { BudgetSection } from "@/components/sections/BudgetSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { MembersSection } from "@/components/sections/MembersSection";
import { ReferencesSection } from "@/components/sections/ReferencesSection";
import { FooterSection } from "@/components/sections/FooterSection";

const sections = ["intro", "purpose", "description", "budget", "contact", "members", "references"];

const Index = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopNav activeSection={activeSection} />
      <HeroSection />
      <IntroductionSection />
      <PurposeSection />
      <DescriptionSection />
      <BudgetSection />
      <ContactSection />
      <MembersSection />
      <ReferencesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
