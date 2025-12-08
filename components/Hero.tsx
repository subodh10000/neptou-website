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

            <h1 className="text-9xl sm:text-[10rem] lg:text-[12rem] font-bold gradient-text mb-6">
              Neptou
            </h1>

            {/* Nepali script subtitle */}
            <motion.p
              className="text-3xl text-white font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              नेपाल को खोज गर्नुहोस्
            </motion.p>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discover Nepal with the Power of AI
          </motion.h2>

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
