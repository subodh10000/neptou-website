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
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Logo/Brand with enhanced effects */}
          <motion.div
            className="mb-12 relative"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Multiple glowing circles for depth */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-nepal-blue/30 via-nepal-red/20 to-nepal-gold/30 blur-3xl" />
            </motion.div>

            {/* Rotating decorative ring */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center -z-10"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-[500px] h-[500px] rounded-full border-4 border-nepal-gold/30 border-dashed" />
            </motion.div>

            {/* Second counter-rotating ring */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center -z-10"
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-[400px] h-[400px] rounded-full border-2 border-white/20 border-dotted" />
            </motion.div>

            {/* Main Neptou text with dramatic effects */}
            <motion.h1
              className="relative font-bold leading-none"
              style={{
                fontSize: 'clamp(6rem, 20vw, 14rem)',
                letterSpacing: '0.02em',
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Glow layer 1 - Blue */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent blur-2xl opacity-70">
                Neptou
              </span>

              {/* Glow layer 2 - Red/Gold */}
              <span className="absolute inset-0 bg-gradient-to-r from-red-400 via-pink-500 to-orange-400 bg-clip-text text-transparent blur-xl opacity-50">
                Neptou
              </span>

              {/* Main text with gradient */}
              <span className="relative bg-gradient-to-r from-white via-nepal-gold to-white bg-clip-text text-transparent drop-shadow-2xl">
                Neptou
              </span>

              {/* Shimmer effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text text-transparent opacity-0"
                animate={{
                  opacity: [0, 0.4, 0],
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              >
                Neptou
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle with enhanced styling */}
          <motion.h2
            className="relative text-3xl sm:text-5xl lg:text-6xl font-bold mb-8 px-4 max-w-5xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Background glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-nepal-red/20 via-nepal-blue/20 to-nepal-gold/20 blur-2xl" />

            {/* Text with gradient */}
            <span className="relative">
              <span className="text-white drop-shadow-lg">Discover </span>
              <span className="bg-gradient-to-r from-nepal-blue via-nepal-red to-nepal-gold bg-clip-text text-transparent font-extrabold drop-shadow-xl">
                Nepal
              </span>
              <span className="text-white drop-shadow-lg"> with the Power of </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold drop-shadow-xl">
                AI
              </span>
            </span>
          </motion.h2>

          {/* Decorative divider */}
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-transparent via-nepal-gold to-nepal-red rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="text-4xl">🏔️</div>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-nepal-red via-nepal-gold to-transparent rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
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
