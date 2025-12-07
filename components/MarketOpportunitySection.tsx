"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MarketOpportunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-purple-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(45deg, #DC143C 25%, transparent 25%), linear-gradient(-45deg, #DC143C 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #DC143C 75%), linear-gradient(-45deg, transparent 75%, #DC143C 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          >
            <span className="text-2xl">💎</span>
            <span className="font-bold">MARKET OPPORTUNITY</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Massive Market</span>{" "}
            <span className="text-gray-800">Potential</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Nepal's tourism is set to explode—and we're positioned to capture it
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Target Market */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-10 border-2 border-gray-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Total Addressable Market (TAM)</h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-end justify-between mb-3">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Nepal Tourism Board Target 2025</div>
                    <div className="text-4xl font-bold text-nepal-blue">1.5M Tourists</div>
                  </div>
                  <div className="text-green-600 font-bold text-lg">+30.7% from 2024</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <motion.div
                    className="h-full bg-gradient-to-r from-nepal-blue to-nepal-red rounded-full"
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "76.5%" } : { width: "0%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>Current: 1.15M</span>
                  <span>Target: 1.5M</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                  <div className="text-sm text-gray-600 mb-2">Average Spend per Tourist</div>
                  <div className="text-3xl font-bold text-nepal-blue mb-1">$537</div>
                  <div className="text-sm text-gray-600">$41/day × 13.1 days average</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                  <div className="text-sm text-gray-600 mb-2">Total Market Size (2025)</div>
                  <div className="text-3xl font-bold text-nepal-red mb-1">$805.5M</div>
                  <div className="text-sm text-gray-600">1.5M tourists × $537 spend</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-nepal-gold/10 to-orange-100/50 rounded-2xl p-6 border-2 border-nepal-gold/30">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <div className="font-bold text-gray-900 mb-2">Our Target (Year 1)</div>
                    <div className="text-2xl font-bold text-nepal-red mb-1">5% Market Penetration</div>
                    <div className="text-gray-700">75,000 active users × $10 ARPU = <span className="font-bold">$750K revenue</span></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Economic Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-nepal-blue via-purple-600 to-nepal-red rounded-3xl shadow-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Economic Impact</h3>

            <div className="space-y-6">
              <div>
                <div className="text-white/80 text-sm mb-2">Tourism GDP Contribution</div>
                <div className="text-4xl font-bold mb-1">6.7%</div>
                <div className="text-white/90 text-sm">~$2.7B annually</div>
              </div>

              <div className="h-px bg-white/30" />

              <div>
                <div className="text-white/80 text-sm mb-2">Jobs Supported</div>
                <div className="text-4xl font-bold mb-1">1.19M</div>
                <div className="text-white/90 text-sm">Livelihoods impacted</div>
              </div>

              <div className="h-px bg-white/30" />

              <div>
                <div className="text-white/80 text-sm mb-2">Youth Unemployment</div>
                <div className="text-4xl font-bold mb-1">22.7%</div>
                <div className="text-white/90 text-sm">We're creating tech jobs</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mt-6">
                <div className="text-nepal-gold font-bold mb-2">🚀 Our Mission</div>
                <div className="text-sm text-white/90">
                  Create 1,000+ tech jobs for Nepali youth while boosting tourism revenue by 20%
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 border-2 border-nepal-gold">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              More Than Just an App—A Movement
            </h4>
            <p className="text-lg text-gray-700 max-w-2xl">
              We're not just building a travel app. We're empowering Nepal's youth,
              preserving cultural heritage, and creating sustainable tourism that benefits local communities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
