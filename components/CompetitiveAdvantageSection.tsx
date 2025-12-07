"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const advantages = [
  {
    icon: "🚀",
    title: "First-Mover Advantage",
    description: "No dedicated AI-powered travel app exists for Nepal. We're pioneering this space with zero direct competition.",
    stats: "0 competitors in Nepal AI tourism",
  },
  {
    icon: "🤖",
    title: "Advanced AI Personalization",
    description: "Proprietary algorithms trained on Nepal-specific data, culture, and geography for unmatched local intelligence.",
    stats: "10,000+ Nepal data points",
  },
  {
    icon: "📡",
    title: "Offline Capabilities",
    description: "Critical for Himalayan regions with no connectivity. Download everything you need before heading to remote areas.",
    stats: "100% offline functionality",
  },
  {
    icon: "🤝",
    title: "Local Partnerships",
    description: "Direct integrations with 100+ verified guides, homestays, and local businesses ensuring authentic experiences.",
    stats: "100+ verified partners",
  },
  {
    icon: "🌍",
    title: "Multilingual Support",
    description: "Native support for top 10 tourist source countries' languages, breaking barriers that existing apps can't.",
    stats: "10+ languages supported",
  },
  {
    icon: "📱",
    title: "Mobile-First Nepal Focus",
    description: "Built specifically for Nepal's unique challenges—altitude, terrain, culture, and infrastructure.",
    stats: "Nepal-optimized UX",
  },
];

export default function CompetitiveAdvantageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-red-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-nepal-blue via-nepal-red to-nepal-gold" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-nepal-red to-orange-600 text-white rounded-full shadow-xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          >
            <span className="text-2xl">⚡</span>
            <span className="font-bold">COMPETITIVE EDGE</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-800">Why</span>{" "}
            <span className="gradient-text">We'll Win</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Our unique advantages create an unbeatable moat in Nepal's tourism market
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 h-full border-2 border-gray-100 hover:border-nepal-gold transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-nepal-gold/10 to-orange-200/20 rounded-bl-full" />

                <div className="relative z-10">
                  <div className="text-6xl mb-4">{advantage.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{advantage.description}</p>

                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-nepal-blue to-nepal-red rounded-full">
                    <span className="text-sm font-bold text-white">{advantage.stats}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Neptou vs. Alternatives</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-gray-700 font-bold">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="text-2xl mb-1">🏔️</div>
                    <div className="font-bold gradient-text">Neptou</div>
                  </th>
                  <th className="text-center py-4 px-4 text-gray-600">Generic Travel Apps</th>
                  <th className="text-center py-4 px-4 text-gray-600">Tour Agencies</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[
                  ["AI-Powered Planning", "✅", "❌", "❌"],
                  ["Nepal-Specific Data", "✅", "⚠️", "✅"],
                  ["Offline Mode", "✅", "❌", "❌"],
                  ["Real-Time Translation", "✅", "⚠️", "❌"],
                  ["Local Partnerships", "✅", "❌", "✅"],
                  ["Personalized Recommendations", "✅", "⚠️", "❌"],
                  ["Safety Alerts", "✅", "❌", "⚠️"],
                  ["Fair Pricing", "✅", "N/A", "❌"],
                  ["24/7 Availability", "✅", "✅", "❌"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 text-left font-medium text-gray-700">{row[0]}</td>
                    <td className="py-4 px-4">
                      <span className="text-2xl">{row[1]}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-2xl">{row[2]}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-2xl">{row[3]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            <span className="font-bold">Legend:</span> ✅ Full Support  •  ⚠️ Limited Support  •  ❌ Not Available
          </div>
        </motion.div>
      </div>
    </section>
  );
}
