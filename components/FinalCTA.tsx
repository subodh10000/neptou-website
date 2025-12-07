"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-nepal-blue via-purple-700 to-nepal-red relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating mandalas */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
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

        {/* Prayer flag pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
              Join Us in Revolutionizing
            </h2>
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              <span className="text-nepal-gold drop-shadow-2xl">Nepal's Tourism</span>
            </h3>
          </motion.div>

          {/* Nepali Text */}
          <motion.p
            className="text-3xl text-white font-semibold mb-12 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            यो यात्रामा हामीसँग सामेल हुनुहोस्
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-2xl sm:text-3xl text-white/95 mb-12 leading-relaxed drop-shadow-md max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            We're building more than an app—we're creating a movement to empower Nepal's youth,
            preserve cultural heritage, and make the Himalayas accessible to the world.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { value: "1.5M", label: "Target Users by 2025" },
              { value: "$6M", label: "Year 3 Revenue Goal" },
              { value: "1000+", label: "Tech Jobs Created" },
              { value: "100%", label: "Local Impact" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30"
              >
                <div className="text-4xl sm:text-5xl font-bold text-nepal-gold mb-2">{stat.value}</div>
                <div className="text-sm text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="#download"
              className="group px-12 py-6 bg-white text-nepal-blue text-2xl font-bold rounded-full shadow-2xl flex items-center gap-4 border-4 border-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download Now
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>

            <motion.a
              href="mailto:hello@neptou.com"
              className="px-12 py-6 bg-nepal-gold/20 backdrop-blur-sm text-white text-2xl font-bold rounded-full shadow-xl border-4 border-nepal-gold hover:bg-nepal-gold hover:text-nepal-blue transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.a>
          </motion.div>

          {/* Social Proof / Beta Signup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 max-w-2xl mx-auto"
          >
            <h4 className="text-2xl font-bold text-white mb-4">Join the Beta Program</h4>
            <p className="text-white/90 mb-6">
              Be among the first 1,000 users to experience Neptou. Get lifetime premium access and shape the future of Nepal tourism.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/90 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-nepal-gold text-lg"
              />
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-nepal-red to-orange-500 text-white font-bold rounded-full shadow-xl whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Waitlist
              </motion.button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-nepal-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Early Access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-nepal-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Lifetime Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-nepal-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Credit Card</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-16 pt-8 border-t border-white/30"
          >
            <p className="text-xl text-white/90">
              <span className="font-bold text-nepal-gold">Neptou</span> • नेपाल को खोज गर्नुहोस् • Discover Nepal with AI
            </p>
            <p className="text-sm text-white/70 mt-2">
              Made with ❤️ in Nepal
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
