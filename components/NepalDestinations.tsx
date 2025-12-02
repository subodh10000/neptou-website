"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const destinations = [
  {
    name: "Mount Everest",
    nameNepali: "सगरमाथा",
    description: "The world's highest peak at 8,849m. Experience the ultimate trekking adventure to Base Camp.",
    gradient: "from-blue-600 via-white to-gray-700",
    icon: "🏔️",
  },
  {
    name: "Kathmandu Valley",
    nameNepali: "काठमाडौं उपत्यका",
    description: "Ancient temples, bustling markets, and UNESCO World Heritage Sites. The cultural heart of Nepal.",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    icon: "🏛️",
  },
  {
    name: "Pokhara",
    nameNepali: "पोखरा",
    description: "Serene lakes, stunning mountain views, and adventure sports. Gateway to the Annapurna Circuit.",
    gradient: "from-blue-400 via-cyan-400 to-teal-500",
    icon: "🛶",
  },
  {
    name: "Chitwan National Park",
    nameNepali: "चितवन राष्ट्रिय निकुञ्ज",
    description: "Home to Bengal tigers, one-horned rhinos, and exotic wildlife. A jungle safari adventure.",
    gradient: "from-green-600 via-emerald-500 to-lime-500",
    icon: "🐘",
  },
  {
    name: "Lumbini",
    nameNepali: "लुम्बिनी",
    description: "Birthplace of Lord Buddha. A sacred pilgrimage site and UNESCO World Heritage Site.",
    gradient: "from-yellow-400 via-amber-400 to-orange-400",
    icon: "🕉️",
  },
  {
    name: "Annapurna",
    nameNepali: "अन्नपूर्ण",
    description: "World-class trekking routes with breathtaking Himalayan panoramas and diverse landscapes.",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    icon: "⛰️",
  },
];

export default function NepalDestinations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-orange-50 relative overflow-hidden">
      {/* Traditional border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-nepal-blue via-nepal-red to-nepal-gold" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #DC143C 0, #DC143C 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px'
        }} />
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
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gray-800">Explore</span>{" "}
            <span className="gradient-text">Nepal's Wonders</span>
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            From the world's highest peaks to ancient spiritual sites,
            discover the diverse beauty of Nepal
          </motion.p>
          <motion.p
            className="text-lg text-nepal-red font-semibold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            AI-powered guides for every destination
          </motion.p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => {
            const destRef = useRef(null);
            const destInView = useInView(destRef, { once: true, margin: "-50px" });

            return (
              <motion.div
                key={index}
                ref={destRef}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={destInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative cursor-pointer"
              >
                {/* Card */}
                <div className={`relative h-80 rounded-3xl bg-gradient-to-br ${destination.gradient} p-8 shadow-2xl overflow-hidden border-4 border-white`}>
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                      {[...Array(10)].map((_, i) => (
                        <circle
                          key={i}
                          cx={10 + (i % 5) * 20}
                          cy={10 + Math.floor(i / 5) * 40}
                          r="5"
                        />
                      ))}
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      {destination.icon}
                    </motion.div>

                    {/* Name */}
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {destination.name}
                    </h3>

                    {/* Nepali name */}
                    <p className="text-xl text-white/90 font-semibold mb-4 drop-shadow">
                      {destination.nameNepali}
                    </p>

                    {/* Description */}
                    <p className="text-white/95 leading-relaxed flex-grow drop-shadow">
                      {destination.description}
                    </p>

                    {/* AI Badge */}
                    <motion.div
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-gray-800 self-start"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                      AI Guide Available
                    </motion.div>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Floating shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-nepal-blue to-nepal-red rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom section */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-nepal-blue via-nepal-red to-nepal-gold p-12 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Ready to Explore These Destinations?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
            Get AI-powered recommendations, offline maps, and local insights for every destination in Nepal
          </p>
          <motion.a
            href="#download"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-nepal-blue text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Neptou Now
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
