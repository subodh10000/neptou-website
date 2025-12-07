"use client";

import Hero from "@/components/Hero";
import PrayerFlags from "@/components/PrayerFlags";
import ProblemStatement from "@/components/ProblemStatement";
import OpportunitySection from "@/components/OpportunitySection";
import MarketDataSection from "@/components/MarketDataSection";
import SolutionSection from "@/components/SolutionSection";
import MVPShowcase from "@/components/MVPShowcase";
import Features from "@/components/Features";
import TechnicalDemo from "@/components/TechnicalDemo";
import NepalDestinations from "@/components/NepalDestinations";
import MarketOpportunitySection from "@/components/MarketOpportunitySection";
import CompetitiveAdvantageSection from "@/components/CompetitiveAdvantageSection";
import ScalabilityModel from "@/components/ScalabilityModel";
import HowItWorks from "@/components/HowItWorks";
import BusinessModelSection from "@/components/BusinessModelSection";
import SocialImpact from "@/components/SocialImpact";
import OutcomeVision from "@/components/OutcomeVision";
import DownloadCTA from "@/components/DownloadCTA";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
      <PrayerFlags />
      <Hero />
      <ProblemStatement />
      <OpportunitySection />
      <MarketDataSection />
      <SolutionSection />
      <MVPShowcase />
      <Features />
      <TechnicalDemo />
      <NepalDestinations />
      <MarketOpportunitySection />
      <CompetitiveAdvantageSection />
      <ScalabilityModel />
      <HowItWorks />
      <BusinessModelSection />
      <SocialImpact />
      <OutcomeVision />
      <DownloadCTA />
      <FinalCTA />
      <Footer />
    </main>
  );
}
