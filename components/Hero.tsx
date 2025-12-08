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
        {/* Sky gradient - Nepal sky colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-400 to-orange-300" />

        {/* Traditional Nepali pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, #DC143C 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
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

        {/* Sun with rays */}
        <motion.div className="absolute top-20 right-20">
          <motion.div
            className="relative w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 blur-sm"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          {/* Sun rays */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-yellow-400 to-transparent origin-bottom"
              style={{
                transform: `rotate(${i * 30}deg) translateX(-50%)`,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>

        {/* Mountains - Multiple layers for depth with more dramatic peaks */}
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          {/* Back mountains - lighter */}
          <svg
            viewBox="0 0 1200 300"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,150 L200,50 L400,120 L600,20 L800,100 L1000,40 L1200,130 L1200,300 L0,300 Z"
              fill="rgba(100, 116, 139, 0.5)"
            />
          </svg>

          {/* Middle mountains */}
          <svg
            viewBox="0 0 1200 300"
            className="w-full absolute bottom-0"
            preserveAspectRatio="none"
          >
            <path
              d="M0,180 L150,70 L300,140 L500,30 L700,110 L900,60 L1100,120 L1200,160 L1200,300 L0,300 Z"
              fill="rgba(51, 65, 85, 0.7)"
            />
          </svg>

          {/* Front mountains (Majestic Himalayas) */}
          <svg
            viewBox="0 0 1200 300"
            className="w-full absolute bottom-0"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <path
              d="M0,220 L100,140 L250,200 L400,60 L550,170 L700,80 L850,160 L1000,100 L1200,190 L1200,300 L0,300 Z"
              fill="url(#mountainGrad)"
            />
            {/* Snow caps - more dramatic */}
            <path
              d="M400,60 L420,85 L440,75 L460,95 L480,80 L500,100 L520,85 L540,105 L560,90 L580,110 L600,95 L620,115 L640,105 L660,120 L680,110 L700,80"
              fill="white"
              opacity="0.95"
            />
            <path
              d="M700,80 L720,105 L740,95 L760,115 L780,100 L800,120 L820,110 L840,125 L860,115 L880,130 L900,120 L920,135 L940,125 L960,140 L980,130 L1000,100"
              fill="white"
              opacity="0.95"
            />
            {/* Shadowed areas for depth */}
            <path
              d="M450,85 L470,100 L490,90 Z"
              fill="rgba(200, 220, 255, 0.3)"
            />
            <path
              d="M750,105 L770,120 L790,110 Z"
              fill="rgba(200, 220, 255, 0.3)"
            />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* AI Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-xl mb-6 border-2 border-nepal-gold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <svg className="w-6 h-6 text-nepal-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                <circle cx="12" cy="14" r="1.5"/>
                <circle cx="12" cy="10" r="1.5"/>
                <path d="M12 7c-1.1 0-2 .9-2 2h1.5c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5c-.28 0-.5.22-.5.5v1h1.5v-.5c.83 0 1.5-.67 1.5-1.5S12.83 7 12 7z"/>
              </svg>
            </motion.div>
            <span className="text-nepal-blue font-bold text-lg">Your Nepal Travel Companion</span>
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Logo/Brand with traditional pattern */}
          <motion.div
            className="mb-8 relative"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Decorative circle behind logo */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center -z-10"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-96 h-96 rounded-full border-4 border-nepal-gold/20 border-dashed" />
            </motion.div>

            <h1 className="text-8xl sm:text-9xl lg:text-[10rem] font-bold gradient-text mb-4 drop-shadow-2xl">
              Neptou
            </h1>

            {/* Nepali script subtitle */}
            <motion.p
              className="text-2xl text-white font-semibold drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              नेपाल को खोज गर्नुहोस्
            </motion.p>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discover Nepal with the Power of AI
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white mb-12 max-w-3xl mx-auto drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your intelligent companion for exploring the Himalayas.
            <span className="font-bold text-nepal-gold"> AI-powered recommendations</span>,
            hidden gems, and authentic Nepali experiences await you.
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
              className="group relative px-12 py-6 bg-gradient-to-r from-nepal-red via-pink-600 to-orange-500 text-white text-xl font-bold rounded-full shadow-2xl overflow-hidden border-4 border-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-600 to-nepal-red"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#features"
              className="px-12 py-6 bg-white/95 backdrop-blur-sm text-nepal-blue text-xl font-bold rounded-full shadow-xl border-4 border-white hover:bg-nepal-blue hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore AI Features
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {[
              { label: "AI Recommendations", value: "10K+" },
              { label: "Happy Travelers", value: "50K+" },
              { label: "Hidden Gems", value: "1000+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-nepal-gold/30"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-nepal-red mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-700 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-8 h-8 mx-auto text-white drop-shadow-lg"
              fill="none"
              strokeWidth="3"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating lotus flowers */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-24 h-24 text-nepal-gold" fill="currentColor">
            <ellipse cx="50" cy="70" rx="15" ry="8" opacity="0.5" />
            <ellipse cx="50" cy="70" rx="25" ry="12" opacity="0.3" />
            {[...Array(8)].map((_, j) => (
              <ellipse
                key={j}
                cx="50"
                cy="50"
                rx="20"
                ry="8"
                opacity="0.6"
                transform={`rotate(${j * 45} 50 50)`}
              />
            ))}
            <circle cx="50" cy="50" r="8" opacity="0.8" />
          </svg>
        </motion.div>
      ))}
    </section>
  );
}
