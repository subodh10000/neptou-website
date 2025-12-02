"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Discover Hidden Gems",
    description: "Explore off-the-beaten-path locations that only locals know about. From secret temples to pristine hiking trails.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Smart Trip Planning",
    description: "AI-powered itinerary suggestions based on your interests, budget, and time. Let us handle the planning.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Local Guides",
    description: "Connect with verified local guides who can show you authentic Nepal. Book experiences directly through the app.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Photo Spots",
    description: "Find the best locations for that perfect Instagram shot. Complete with timing suggestions and photography tips.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Cultural Insights",
    description: "Learn about Nepal's rich culture, traditions, and history. Interactive guides for temples, festivals, and customs.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Offline Access",
    description: "Download maps and guides for offline use. No internet? No problem. Navigate Nepal even in remote areas.",
    color: "from-indigo-500 to-blue-500",
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
      <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full border border-gray-100 overflow-hidden">
        {/* Gradient overlay on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        {/* Icon */}
        <motion.div
          className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {feature.icon}
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-nepal-blue group-hover:to-nepal-red transition-all">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>

        {/* Decorative corner */}
        <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-10 rounded-tl-full`} />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative mandala background */}
      <div className="absolute top-20 right-10 w-96 h-96 opacity-5 mandala-spin pointer-events-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-nepal-blue">
          <circle cx="100" cy="100" r="80" opacity="0.1" />
          <circle cx="100" cy="100" r="60" opacity="0.2" />
          <circle cx="100" cy="100" r="40" opacity="0.3" />
          <circle cx="100" cy="100" r="20" opacity="0.5" />
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={100 + 70 * Math.cos((i * Math.PI) / 6)}
              cy={100 + 70 * Math.sin((i * Math.PI) / 6)}
              r="10"
              opacity="0.3"
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
          <motion.h2
            className="text-5xl sm:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="gradient-text">Everything You Need</span>
            <br />
            <span className="text-gray-800">for the Perfect Journey</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Neptou combines cutting-edge technology with local expertise to give you the ultimate Nepal experience
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
