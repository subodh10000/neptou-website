"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Mountain Background */}
      <div className="absolute inset-0 z-0">
        {/* Sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-orange-200" />

        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Sun */}
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 to-orange-400 blur-sm opacity-80"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        {/* Mountains - Multiple layers for depth */}
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          {/* Back mountains */}
          <svg
            viewBox="0 0 1200 300"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,150 L200,50 L400,120 L600,30 L800,100 L1000,60 L1200,140 L1200,300 L0,300 Z"
              fill="rgba(100, 116, 139, 0.4)"
            />
          </svg>

          {/* Middle mountains */}
          <svg
            viewBox="0 0 1200 300"
            className="w-full absolute bottom-0"
            preserveAspectRatio="none"
          >
            <path
              d="M0,180 L150,80 L300,140 L500,40 L700,120 L900,70 L1100,130 L1200,160 L1200,300 L0,300 Z"
              fill="rgba(71, 85, 105, 0.6)"
            />
          </svg>

          {/* Front mountains (Himalayas) */}
          <svg
            viewBox="0 0 1200 300"
            className="w-full absolute bottom-0"
            preserveAspectRatio="none"
          >
            <path
              d="M0,220 L100,150 L250,200 L400,80 L550,180 L700,100 L850,170 L1000,120 L1200,200 L1200,300 L0,300 Z"
              fill="#1e293b"
            />
            {/* Snow caps */}
            <path
              d="M400,80 L450,120 L500,100 L550,140 L600,110 L650,130 L700,100 Z"
              fill="white"
              opacity="0.9"
            />
            <path
              d="M700,100 L750,130 L800,115 L850,145 L900,125 L950,140 L1000,120 Z"
              fill="white"
              opacity="0.9"
            />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Brand */}
          <motion.div
            className="mb-8"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold gradient-text mb-4">
              Neptou
            </h1>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discover Nepal Like Never Before
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your ultimate companion for exploring the land of the Himalayas.
            Find hidden gems, plan adventures, and experience Nepal&apos;s magic.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#download"
              className="group relative px-12 py-5 bg-gradient-to-r from-nepal-red to-pink-600 text-white text-xl font-bold rounded-full shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on iOS
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-nepal-red"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#features"
              className="px-12 py-5 bg-white text-nepal-blue text-xl font-bold rounded-full shadow-xl border-2 border-nepal-blue hover:bg-nepal-blue hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-8 h-8 mx-auto text-gray-600"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 opacity-20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-nepal-gold">
          <circle cx="50" cy="50" r="40" opacity="0.3" />
          <circle cx="50" cy="50" r="25" opacity="0.5" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      </motion.div>
    </section>
  );
}
