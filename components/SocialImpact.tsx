"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const directImpacts = [
  {
    icon: "💼",
    metric: "500+",
    label: "Tech Jobs Created (Year 1)",
    description: "Direct employment for Nepali youth in development, content, support, and operations",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🏪",
    metric: "2,000+",
    label: "Local Businesses Empowered",
    description: "Hotels, guides, restaurants connected directly with tourists through our platform",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "💰",
    metric: "$100M+",
    label: "Additional Tourist Spending",
    description: "20% increase in local economy from better tourist experiences and longer stays",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "🛡️",
    metric: "40%",
    label: "Reduction in Safety Incidents",
    description: "Real-time alerts, emergency assistance, and better navigation prevent accidents",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: "📱",
    metric: "50,000+",
    label: "Vendors Going Digital",
    description: "Local guides, artisans, and small businesses gaining digital presence and income",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: "⭐",
    metric: "4.8/5",
    label: "Tourist Satisfaction",
    description: "Dramatically improved experiences leading to better reviews and repeat visits",
    color: "from-pink-500 to-rose-500",
  },
];

export default function SocialImpact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-xl mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          >
            <span className="text-2xl">🌍</span>
            <span className="font-bold text-lg">MEASURABLE IMPACT</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Impact</span>{" "}
            <span className="text-gray-800">at Scale</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Quantifying the positive change we'll create for Nepal's people and economy
          </p>
        </motion.div>

        {/* Direct Impact Metrics */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="text-gray-800">Direct Impact</span>{" "}
            <span className="text-green-600">(Year 1)</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directImpacts.map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-green-400 transition-all h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${impact.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{impact.icon}</div>
                    <div className={`text-5xl font-bold mb-2 bg-gradient-to-br ${impact.color} bg-clip-text text-transparent`}>
                      {impact.metric}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{impact.label}</h4>
                    <p className="text-gray-600 leading-relaxed">{impact.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 2 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 p-1 rounded-3xl">
            <div className="bg-white rounded-3xl px-12 py-10">
              <p className="text-3xl font-bold text-gray-900 mb-2">
                Creating Shared Prosperity
              </p>
              <p className="text-xl text-gray-600">
                When tourism works for everyone, entire communities thrive
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
