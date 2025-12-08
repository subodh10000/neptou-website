"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function DownloadCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="download"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-nepal-blue via-purple-700 to-nepal-red relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating mandalas */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-32 h-32 text-white" fill="currentColor">
              <circle cx="50" cy="50" r="40" opacity="0.2" />
              <circle cx="50" cy="50" r="30" opacity="0.3" />
              <circle cx="50" cy="50" r="20" opacity="0.4" />
              {[...Array(8)].map((_, j) => (
                <circle
                  key={j}
                  cx={50 + 35 * Math.cos((j * Math.PI) / 4)}
                  cy={50 + 35 * Math.sin((j * Math.PI) / 4)}
                  r="8"
                  opacity="0.5"
                />
              ))}
            </svg>
          </motion.div>
        ))}

        {/* Prayer wheel pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
                Discover
                <br />
                <span className="text-nepal-gold">Nepal</span>
              </h2>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100 drop-shadow">
                Experience the beauty, culture, and adventure of Nepal with your personal travel companion.
              </p>

              {/* Nepali tagline */}
              <p className="text-xl font-semibold text-nepal-gold mb-8 drop-shadow">
                स्वागत छ - नेपालमा तपाईंलाई स्वागत छ
              </p>
            </motion.div>

            {/* Download button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white text-xl font-bold rounded-2xl shadow-2xl group hover:bg-gray-900 transition-colors border-4 border-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-2xl font-bold">App Store</div>
                </div>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>

              <div className="mt-4 flex items-center gap-4 text-blue-100">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-nepal-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold">4.9/5 Rating</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-sm font-semibold">50K+ Downloads</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm font-semibold">Free to Download</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center"
          >
            {/* Floating phone */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              {/* Phone frame */}
              <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20" />

                {/* Screen */}
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400 rounded-[2.5rem] overflow-hidden">
                  {/* App screenshot mockup with AI elements */}
                  <div className="absolute inset-0 p-6 flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-white text-xs mb-4">
                      <span className="font-semibold">9:41</span>
                      <div className="flex gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>
                    </div>

                    {/* App content preview */}
                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-40 h-40 mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <span className="text-6xl font-bold gradient-text">N</span>
                      </motion.div>
                      <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Neptou</h3>
                      <p className="text-white/90 font-semibold drop-shadow">Nepal Travel Guide</p>
                    </div>

                    {/* Bottom nav with AI suggestions */}
                    <div className="grid grid-cols-4 gap-2 pb-4">
                      {["🏔️", "🗺️", "🤖", "❤️"].map((icon, i) => (
                        <motion.div
                          key={i}
                          className="aspect-square bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        >
                          {icon}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-[3rem] blur-3xl opacity-50 -z-10" />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-20 -left-10 w-32 h-32 bg-nepal-gold rounded-full blur-3xl opacity-40"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
