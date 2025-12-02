"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PrayerFlags from "@/components/PrayerFlags";
import NepalDestinations from "@/components/NepalDestinations";
import HowItWorks from "@/components/HowItWorks";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
      <PrayerFlags />
      <Hero />
      <Features />
      <NepalDestinations />
      <HowItWorks />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
