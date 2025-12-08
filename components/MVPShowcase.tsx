"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const mvpFeatures = [
  {
    icon: "💬",
    title: "AI-Powered Chat",
    description: "Intelligent conversational assistant answering complex tourist queries in real-time",
    status: "LIVE",
    demo: "Ask anything: 'Best trekking routes in March?'",
  },
  {
    icon: "🗺️",
    title: "Trip Planning & Optimization",
    description: "Smart itinerary suggestions based on preferences, budget, and time constraints",
    status: "LIVE",
    demo: "Generate 5-day itinerary in seconds",
  },
  {
    icon: "⭐",
    title: "Personalized Recommendations",
    description: "AI-driven suggestions for places, food, activities tailored to your style",
    status: "LIVE",
    demo: "Adventure seeker? Get custom suggestions",
  },
  {
    icon: "📍",
    title: "Local Insights & Guides",
    description: "Curated local knowledge, cultural tips, and hidden gems from residents",
    status: "LIVE",
    demo: "Discover places tourists miss",
  },
  {
    icon: "🚨",
    title: "Emergency Support",
    description: "Quick access to help, safety information, and emergency contacts",
    status: "LIVE",
    demo: "SOS button with GPS location",
  },
  {
    icon: "🗾",
    title: "Map-Based Discovery",
    description: "Interactive exploration of destinations, routes, and points of interest",
    status: "LIVE",
    demo: "Visual navigation of Nepal",
  },
];

export default function MVPShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-xl mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀
            </motion.span>
            <span className="font-bold text-lg">AI-POWERED SOLUTION</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Built in 24 Hours</span>{" "}
            <span className="text-gray-800">- Our MVP</span>
          </h2>
        </motion.div>

        {/* MVP Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-10 shadow-2xl border-4 border-green-400">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  🎉 Built in 24 Hours - Our MVP
                </h3>
                <p className="text-xl text-green-100">
                  Functional demo proving technical execution capability
                </p>
              </div>
              <motion.div
                className="px-8 py-4 bg-white rounded-full shadow-xl"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: ["0 0 20px rgba(255,255,255,0.5)", "0 0 40px rgba(255,255,255,0.8)", "0 0 20px rgba(255,255,255,0.5)"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl font-bold gradient-text">🚀 LIVE DEMO AVAILABLE</span>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mvpFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border-2 border-green-200 relative overflow-hidden group"
                >
                  {/* Status badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    {feature.status}
                  </div>

                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 mb-3">{feature.description}</p>
                  <div className="text-sm text-green-600 font-semibold bg-green-50 rounded-lg p-2">
                    ✓ {feature.demo}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
