"use client";

import Hero from "@/components/Hero";
import PrayerFlags from "@/components/PrayerFlags";
import ProblemStatement from "@/components/ProblemStatement";
import OpportunitySection from "@/components/OpportunitySection";
import MarketDataSection from "@/components/MarketDataSection";
import SolutionSection from "@/components/SolutionSection";
import MarketOpportunitySection from "@/components/MarketOpportunitySection";
import HowItWorks from "@/components/HowItWorks";
import BusinessModelSection from "@/components/BusinessModelSection";
import SocialImpact from "@/components/SocialImpact";
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
      <MarketOpportunitySection />
      <HowItWorks />
      <BusinessModelSection />
      <SocialImpact />
      <DownloadCTA />
      <FinalCTA />
      <Footer />
    </main>
  );
}
