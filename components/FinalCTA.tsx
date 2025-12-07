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
              Invest in Nepal's
            </h2>
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              <span className="text-nepal-gold drop-shadow-2xl">Digital Transformation</span>
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
            A once-in-a-decade opportunity to solve a $805M market problem, create 20,000 jobs,
            and transform an entire nation's economy through AI-powered tourism.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { value: "$805M", label: "Addressable Market" },
              { value: "15:1", label: "LTV:CAC Ratio" },
              { value: "20K+", label: "Jobs Created" },
              { value: "Year 2", label: "Path to Profitability" },
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
              href="mailto:invest@neptou.com"
              className="group px-12 py-6 bg-white text-nepal-blue text-2xl font-bold rounded-full shadow-2xl flex items-center gap-4 border-4 border-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
              </svg>
              Invest Now
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
              Schedule Meeting
            </motion.a>
          </motion.div>

          {/* Investor Updates */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 max-w-2xl mx-auto"
          >
            <h4 className="text-2xl font-bold text-white mb-4">Get Investment Updates</h4>
            <p className="text-white/90 mb-6">
              Receive our pitch deck, financial projections, and exclusive updates on this opportunity to transform Nepal's tourism economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="investor@example.com"
                className="flex-1 px-6 py-4 bg-white/90 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-nepal-gold text-lg"
              />
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-nepal-red to-orange-500 text-white font-bold rounded-full shadow-xl whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Pitch Deck
              </motion.button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-nepal-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Full Pitch Deck</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-nepal-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Financial Model</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-nepal-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Confidential</span>
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
