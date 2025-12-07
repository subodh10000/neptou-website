"use client";

import Hero from "@/components/Hero";
import PrayerFlags from "@/components/PrayerFlags";
import OpportunitySection from "@/components/OpportunitySection";
import MarketDataSection from "@/components/MarketDataSection";
import SolutionSection from "@/components/SolutionSection";
import Features from "@/components/Features";
import NepalDestinations from "@/components/NepalDestinations";
import MarketOpportunitySection from "@/components/MarketOpportunitySection";
import CompetitiveAdvantageSection from "@/components/CompetitiveAdvantageSection";
import HowItWorks from "@/components/HowItWorks";
import BusinessModelSection from "@/components/BusinessModelSection";
import DownloadCTA from "@/components/DownloadCTA";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
      <PrayerFlags />
      <Hero />
      <OpportunitySection />
      <MarketDataSection />
      <SolutionSection />
      <Features />
      <NepalDestinations />
      <MarketOpportunitySection />
      <CompetitiveAdvantageSection />
      <HowItWorks />
      <BusinessModelSection />
      <DownloadCTA />
      <FinalCTA />
      <Footer />
    </main>
  );
}
