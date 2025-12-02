"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Smart Recommendations",
    description: "Our advanced AI learns your preferences and suggests personalized itineraries, hidden gems, and authentic experiences tailored just for you.",
    color: "from-purple-500 via-pink-500 to-red-500",
    aiPowered: true,
    badge: "AI Core"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Discover Hidden Gems",
    description: "Explore secret temples in Bhaktapur, serene meditation spots in Pokhara, and untouched villages in the Annapurna region known only to locals.",
    color: "from-blue-500 to-cyan-500",
    aiPowered: false,
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: "AI Language Assistant",
    description: "Real-time Nepali-English translation, cultural context explanations, and local phrase suggestions. Break language barriers with confidence.",
    color: "from-green-500 to-emerald-500",
    aiPowered: true,
    badge: "AI Powered"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Verified Local Guides",
    description: "Connect with authentic Sherpa guides, cultural experts, and adventure specialists. Book experiences directly through the app with confidence.",
    color: "from-orange-500 to-red-500",
    aiPowered: false,
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "AI Trip Optimizer",
    description: "Smart scheduling based on weather, crowd levels, and festivals. AI automatically adjusts your plans for the perfect experience every day.",
    color: "from-indigo-500 to-purple-500",
    aiPowered: true,
    badge: "AI Smart"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Offline Maps & Guides",
    description: "Download detailed maps of Kathmandu Valley, Annapurna circuit, and Everest Base Camp. Navigate Nepal even without internet in remote Himalayan regions.",
    color: "from-yellow-500 to-orange-500",
    aiPowered: false,
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="group relative"
    >
      <div className="relative bg-white rounded-3xl shadow-xl p-8 h-full border-2 border-gray-100 overflow-hidden hover:border-nepal-gold/50 transition-all">
        {/* AI Badge */}
        {feature.aiPowered && (
          <motion.div
            className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          >
            <motion.svg
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </motion.svg>
            {feature.badge || "AI"}
          </motion.div>
        )}

        {/* Traditional Nepali corner pattern */}
        <div className="absolute top-0 left-0 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-nepal-red">
            <circle cx="0" cy="0" r="40" />
            <circle cx="20" cy="20" r="20" />
          </svg>
        </div>

        {/* Gradient overlay on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        {/* Icon */}
        <motion.div
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg relative z-10`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {feature.icon}
          {feature.aiPowered && (
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          )}
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-nepal-blue group-hover:to-nepal-red transition-all">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>

        {/* Decorative corner with mandala pattern */}
        <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" fill="currentColor" className={`text-nepal-red`}>
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="20" />
            {[...Array(8)].map((_, i) => (
              <circle
                key={i}
                cx={50 + 30 * Math.cos((i * Math.PI) / 4)}
                cy={50 + 30 * Math.sin((i * Math.PI) / 4)}
                r="8"
              />
            ))}
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-blue-50 relative overflow-hidden">
      {/* Traditional Nepali border pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-nepal-blue via-nepal-red to-nepal-gold" />

      {/* Decorative mandala background - larger and more visible */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] opacity-5 mandala-spin pointer-events-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-nepal-red">
          <circle cx="100" cy="100" r="90" opacity="0.1" />
          <circle cx="100" cy="100" r="70" opacity="0.2" />
          <circle cx="100" cy="100" r="50" opacity="0.3" />
          <circle cx="100" cy="100" r="30" opacity="0.5" />
          {[...Array(16)].map((_, i) => (
            <g key={i}>
              <circle
                cx={100 + 80 * Math.cos((i * Math.PI) / 8)}
                cy={100 + 80 * Math.sin((i * Math.PI) / 8)}
                r="12"
                opacity="0.3"
              />
              <line
                x1="100"
                y1="100"
                x2={100 + 90 * Math.cos((i * Math.PI) / 8)}
                y2={100 + 90 * Math.sin((i * Math.PI) / 8)}
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.2"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Left side mandala */}
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] opacity-5 mandala-spin pointer-events-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-nepal-blue">
          <circle cx="100" cy="100" r="80" opacity="0.2" />
          <circle cx="100" cy="100" r="60" opacity="0.3" />
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={100 + 70 * Math.cos((i * Math.PI) / 6)}
              cy={100 + 70 * Math.sin((i * Math.PI) / 6)}
              r="15"
              opacity="0.4"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* AI Powered Badge */}
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
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </motion.svg>
            <span className="font-bold">Powered by Advanced AI Technology</span>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="gradient-text">Intelligent Features</span>
            <br />
            <span className="text-gray-800">for the Modern Traveler</span>
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Experience Nepal like never before with AI-driven insights, personalized recommendations,
            and tools designed specifically for the Himalayan adventure
          </motion.p>

          {/* Nepali text */}
          <motion.p
            className="text-lg text-nepal-red font-semibold mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            तपाईंको स्वागत छ - Welcome to the Future of Nepal Tourism
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xl text-gray-600 mb-6">
            Ready to experience AI-powered travel in Nepal?
          </p>
          <motion.a
            href="#download"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-nepal-red to-orange-500 text-white text-xl font-bold rounded-full shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
