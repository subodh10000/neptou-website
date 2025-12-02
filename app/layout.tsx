import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neptou - Discover Nepal Like Never Before",
  description: "Your ultimate companion for exploring Nepal. Discover hidden gems, plan your adventure, and experience the beauty of the Himalayas with Neptou.",
  keywords: "Nepal, tourism, travel, Himalayas, adventure, Kathmandu, Pokhara, trekking",
  openGraph: {
    title: "Neptou - Discover Nepal Like Never Before",
    description: "Your ultimate companion for exploring Nepal",
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
