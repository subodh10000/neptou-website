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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-nepal-blue via-blue-600 to-nepal-red relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating mandalas */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 3) * 30}%`,
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
              <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                Your Nepal Adventure
                <br />
                Starts Here
              </h2>
              <p className="text-xl sm:text-2xl mb-8 text-blue-100">
                Download Neptou now and unlock exclusive features, personalized recommendations, and unforgettable experiences across Nepal.
              </p>
            </motion.div>

            {/* Features list */}
            <motion.div
              className="space-y-4 mb-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                "100+ Verified Local Guides",
                "500+ Hidden Gems & Attractions",
                "Offline Maps for All of Nepal",
                "Real-time Weather & Trail Updates",
                "Community Reviews & Photos",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-nepal-gold rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-nepal-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
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
                className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white text-xl font-bold rounded-2xl shadow-2xl group"
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

              <p className="mt-4 text-sm text-blue-100">
                Available on iOS 14.0 or later • Free to download
              </p>
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
                <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-orange-200 rounded-[2.5rem] overflow-hidden">
                  {/* App screenshot mockup */}
                  <div className="absolute inset-0 p-6 flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-white text-xs mb-8">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-4 bg-white rounded-full" />
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* App content preview */}
                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center shadow-xl"
                      >
                        <span className="text-5xl font-bold gradient-text">N</span>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Neptou</h3>
                      <p className="text-gray-700">Discover Nepal</p>
                    </div>

                    {/* Bottom icons */}
                    <div className="flex justify-around items-center pb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-2xl"
                          whileHover={{ scale: 1.1 }}
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-nepal-gold to-nepal-red rounded-[3rem] blur-3xl opacity-30 -z-10" />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-32 h-32 bg-nepal-gold rounded-full blur-2xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full blur-2xl opacity-20"
              animate={{
                scale: [1, 1.3, 1],
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
