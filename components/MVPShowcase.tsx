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

const roadmapPhases = [
  {
    phase: "Phase 1",
    months: "Months 1-3",
    title: "Enhanced Intelligence",
    color: "from-purple-500 to-pink-500",
    features: [
      {
        icon: "🗣️",
        name: "NLP & Translation",
        desc: "Real-time multilingual support (10+ languages) using advanced LLMs",
      },
      {
        icon: "🎤",
        name: "Voice AI",
        desc: "Hands-free navigation and information for accessibility",
      },
      {
        icon: "🤖",
        name: "Enhanced Chatbot",
        desc: "24/7 AI assistant trained on comprehensive Nepal tourism data",
      },
    ],
  },
  {
    phase: "Phase 2",
    months: "Months 4-6",
    title: "Computer Vision & Context",
    color: "from-blue-500 to-cyan-500",
    features: [
      {
        icon: "📸",
        name: "Computer Vision",
        desc: "Image recognition for monuments, menus, signs, plants, wildlife",
      },
      {
        icon: "🔮",
        name: "Predictive Analytics",
        desc: "Crowd prediction, weather integration, seasonal optimization",
      },
      {
        icon: "💭",
        name: "Sentiment Analysis",
        desc: "Real-time feedback processing for continuous improvement",
      },
    ],
  },
  {
    phase: "Phase 3",
    months: "Months 7-9",
    title: "Advanced Personalization",
    color: "from-green-500 to-emerald-500",
    features: [
      {
        icon: "🎯",
        name: "Recommendation Engine",
        desc: "Deep personalization using collaborative filtering + contextual AI",
      },
      {
        icon: "🛣️",
        name: "Route Optimization",
        desc: "AI-powered pathfinding considering time, cost, accessibility, preferences",
      },
      {
        icon: "🧠",
        name: "Behavioral Learning",
        desc: "Adaptive system that learns individual travel styles",
      },
    ],
  },
  {
    phase: "Phase 4",
    months: "Months 10-12",
    title: "Scale & Integration",
    color: "from-orange-500 to-red-500",
    features: [
      {
        icon: "🔗",
        name: "Booking Integration",
        desc: "Integration with booking systems, payment gateways",
      },
      {
        icon: "🏢",
        name: "B2B API",
        desc: "API for tourism partners and third-party developers",
      },
      {
        icon: "📊",
        name: "Analytics Dashboard",
        desc: "Advanced analytics for businesses and government",
      },
      {
        icon: "🌍",
        name: "Multi-Country Prep",
        desc: "Infrastructure for expansion to other Himalayan countries",
      },
    ],
  },
];

const whyAIEssential = [
  {
    icon: "🌐",
    title: "Handles Complexity",
    description: "Multi-language, multi-preference tourist needs impossible to handle manually",
  },
  {
    icon: "📈",
    title: "Infinite Scale",
    description: "Serves 1 or 1 million users without proportional cost increase",
  },
  {
    icon: "🔄",
    title: "Learns & Improves",
    description: "Gets smarter with each interaction, continuously optimizing",
  },
  {
    icon: "✨",
    title: "True Personalization",
    description: "Creates unique experiences for each user impossible manually",
  },
  {
    icon: "⚡",
    title: "Real-Time Decisions",
    description: "Instant responses to complex queries, dynamic route optimization",
  },
  {
    icon: "♿",
    title: "Universal Accessibility",
    description: "Makes tourism accessible regardless of digital literacy or language",
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
            <span className="text-gray-800">How</span>{" "}
            <span className="gradient-text">AI Makes This</span>{" "}
            <span className="text-gray-800">10x Better</span>
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

        {/* 12-Month Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Our 12-Month Product Roadmap</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From MVP to full-scale AI-powered tourism platform
            </p>
          </div>

          <div className="space-y-8">
            {roadmapPhases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                transition={{ delay: 1 + i * 0.2 }}
                className="relative"
              >
                <div className={`bg-gradient-to-r ${phase.color} rounded-3xl p-8 shadow-2xl border-2 border-white`}>
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                    <div>
                      <div className="text-sm font-bold text-white/80 mb-1">{phase.phase}</div>
                      <h4 className="text-3xl font-bold text-white">{phase.title}</h4>
                      <div className="text-white/90 font-semibold">{phase.months}</div>
                    </div>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-gray-900">
                      {i + 1}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {phase.features.map((feature, j) => (
                      <div
                        key={j}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      >
                        <div className="text-3xl mb-2">{feature.icon}</div>
                        <div className="font-bold text-white mb-1">{feature.name}</div>
                        <div className="text-sm text-white/90">{feature.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connector line */}
                {i < roadmapPhases.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-gray-300 to-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why AI is Essential */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4 }}
        >
          <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-3xl p-10 shadow-2xl text-white">
            <h3 className="text-4xl font-bold text-center mb-4">
              Why AI is <span className="text-purple-300">Essential</span> (Not Just a Feature)
            </h3>
            <p className="text-center text-purple-200 mb-10 text-xl">
              AI isn't a nice-to-have—it's the only way to solve this problem at scale
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyAIEssential.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-5xl mb-4">{reason.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                  <p className="text-purple-200">{reason.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-2xl font-bold text-purple-300">
                AI enables what was previously impossible: Personalized, scalable, intelligent tourism for everyone.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
