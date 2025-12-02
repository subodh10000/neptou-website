import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neptou - AI-Powered Nepal Travel Companion | Discover Nepal with AI",
  description: "Experience Nepal with AI-powered travel planning. Get personalized recommendations, real-time translation, smart itineraries, and discover hidden gems across the Himalayas with Neptou - your intelligent Nepal travel companion.",
  keywords: "Nepal, AI travel, tourism, Himalayas, adventure, Kathmandu, Pokhara, trekking, AI travel assistant, smart tourism, Nepal travel app, Everest, Annapurna",
  openGraph: {
    title: "Neptou - AI-Powered Nepal Travel Companion",
    description: "Discover Nepal with cutting-edge AI technology. Personalized itineraries, real-time translation, and intelligent travel planning for the perfect Himalayan adventure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
