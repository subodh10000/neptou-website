"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const solutions = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI-Powered Itinerary Planning",
    description: "Smart algorithms analyze your preferences, budget, time, and interests to create personalized day-by-day plans optimized for your perfect Nepal experience.",
    color: "from-purple-500 via-pink-500 to-red-500",
    impact: "Saves 10+ hours of research",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: "Real-Time Language Translation",
    description: "Break language barriers instantly with AI translation supporting Nepali, English, Chinese, Hindi, and 10+ languages. Includes cultural context and etiquette tips.",
    color: "from-green-500 to-emerald-500",
    impact: "Connect authentically with locals",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Smart Route Optimization",
    description: "AI calculates the most efficient routes considering traffic, weather, altitude acclimatization, and your energy levels for safe Himalayan navigation.",
    color: "from-blue-500 to-cyan-500",
    impact: "30% more efficient travel",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Cultural Guide & Etiquette",
    description: "Learn proper customs, temple etiquette, tipping guidelines, and cultural do's and don'ts with AI-powered contextual guidance for authentic experiences.",
    color: "from-yellow-500 to-orange-500",
    impact: "Respectful cultural immersion",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Safety Alerts & Emergency Assistance",
    description: "Real-time weather warnings, altitude sickness detection, emergency contact integration, and SOS features with GPS tracking for peace of mind.",
    color: "from-red-500 to-pink-500",
    impact: "Enhanced traveler safety",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Local Business Connections",
    description: "Direct booking with verified local guides, homestays, restaurants, and artisans. Fair pricing ensures tourist spending reaches communities directly.",
    color: "from-indigo-500 to-purple-500",
    impact: "Support local economy",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Personalized Recommendations",
    description: "AI learns from your interactions to suggest hidden gems, authentic experiences, and off-the-beaten-path adventures matching your unique travel style.",
    color: "from-pink-500 to-rose-500",
    impact: "Discover your perfect Nepal",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Offline Mode for Remote Areas",
    description: "Download maps, guides, and essential information for offline access. Navigate the Himalayas even without internet in remote trekking regions.",
    color: "from-teal-500 to-green-500",
    impact: "Work anywhere, anytime",
  },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 via-white to-blue-50 relative overflow-hidden">
      {/* Traditional border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-nepal-blue via-nepal-red to-nepal-gold" />

      {/* Background elements */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] opacity-5 mandala-spin pointer-events-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-nepal-red">
          <circle cx="100" cy="100" r="90" opacity="0.1" />
          <circle cx="100" cy="100" r="70" opacity="0.2" />
          <circle cx="100" cy="100" r="50" opacity="0.3" />
          {[...Array(16)].map((_, i) => (
            <g key={i}>
              <circle
                cx={100 + 80 * Math.cos((i * Math.PI) / 8)}
                cy={100 + 80 * Math.sin((i * Math.PI) / 8)}
                r="12"
                opacity="0.3"
              />
            </g>
          ))}
        </svg>
      </div>

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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <motion.svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </motion.svg>
            <span className="font-bold">AI-POWERED SOLUTIONS</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-800">How</span>{" "}
            <span className="gradient-text">Neptou Solves</span>{" "}
            <span className="text-gray-800">These Problems</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
            Cutting-edge AI technology addressing every pain point in Nepal tourism
          </p>
          <p className="text-lg text-nepal-red font-semibold">
            बुद्धिमान समाधान - Intelligent Solutions
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const solutionRef = useRef(null);
            const solutionInView = useInView(solutionRef, { once: true, margin: "-50px" });

            return (
              <motion.div
                key={index}
                ref={solutionRef}
                initial={{ opacity: 0, y: 50 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl shadow-xl p-8 h-full border-2 border-gray-100 hover:border-nepal-gold transition-all overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                    <svg viewBox="0 0 100 100" fill="currentColor" className="text-nepal-blue">
                      <circle cx="50" cy="50" r="40" />
                      <circle cx="50" cy="50" r="25" />
                    </svg>
                  </div>

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${solution.color} text-white mb-6 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {solution.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {solution.description}
                    </p>

                    {/* Impact badge */}
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${solution.color} rounded-full`}>
                      <span className="text-sm font-bold text-white">{solution.impact}</span>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${solution.color} opacity-10 rounded-full`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-nepal-blue via-purple-600 to-nepal-red rounded-3xl shadow-2xl p-12">
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              All Features. One AI-Powered App.
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow">
              Neptou combines all these solutions into a seamless experience,
              making Nepal accessible, safe, and unforgettable for every traveler.
            </p>
            <motion.a
              href="#download"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-nepal-blue text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Neptou
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
