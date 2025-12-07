"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const winScenario = [
  {
    icon: "🎉",
    outcome: "20,000+ Nepali Youth Employed",
    description: "Tech jobs, guide opportunities, and digital careers replacing foreign migration",
  },
  {
    icon: "💰",
    outcome: "$500M+ Annual Tourism Revenue",
    description: "Tourism GDP increases from 6.7% to 10%+, matching regional leaders",
  },
  {
    icon: "🌍",
    outcome: "Nepal Becomes #1 Adventure Destination",
    description: "Known worldwide for safe, accessible, AI-powered Himalayan experiences",
  },
  {
    icon: "🏘️",
    outcome: "100+ Rural Communities Prosper",
    description: "Economic inclusion reaches remote villages, preserving culture while creating opportunity",
  },
];

const loseScenario = [
  {
    icon: "😞",
    outcome: "Youth Continue Leaving Nepal",
    description: "22.7% unemployment persists, brain drain accelerates, talent lost to Gulf/Malaysia",
  },
  {
    icon: "📉",
    outcome: "Tourism Stagnates Below Potential",
    description: "Nepal remains at 6.7% tourism GDP while competitors like Thailand thrive at 20%",
  },
  {
    icon: "⚠️",
    outcome: "Safety Incidents Continue",
    description: "Preventable accidents, scams, and poor experiences damage Nepal's reputation",
  },
  {
    icon: "🌾",
    outcome: "Rural Communities Left Behind",
    description: "Tourism benefits stay in cities, villages decay, cultural heritage at risk",
  },
];

const beneficiaries = [
  {
    group: "Nepali Youth (Ages 18-35)",
    impact: "20,000 direct jobs + 50,000 gig economy opportunities",
    why: "First generation with tech careers in their own country, no migration needed",
  },
  {
    group: "Rural Communities",
    impact: "100+ villages connected to tourism economy",
    why: "Women, indigenous groups, and remote areas finally participate in prosperity",
  },
  {
    group: "International Travelers",
    impact: "1.5M tourists get safer, better experiences",
    why: "AI eliminates language barriers, scams, and safety risks",
  },
];

const rippleEffects = [
  {
    effect: "🏗️ Infrastructure Investment",
    description: "Success attracts $50M+ in roads, internet, healthcare to tourist regions",
  },
  {
    effect: "🎓 Education Revolution",
    description: "Tech skills become mainstream, coding bootcamps proliferate, digital literacy soars",
  },
  {
    effect: "🌱 Conservation Funding",
    description: "10% of revenue funds forest protection, wildlife conservation, climate action",
  },
  {
    effect: "🌏 Regional Model",
    description: "Bhutan, Tibet, Myanmar adopt similar AI tourism - Neptou becomes regional platform",
  },
  {
    effect: "🏛️ Government Modernization",
    description: "Data-driven tourism policy, digital governance, improved international reputation",
  },
  {
    effect: "👨‍👩‍👧‍👦 Family Reunification",
    description: "Youth return from Gulf states, families stay together, communities rebuild",
  },
];

const urgency = [
  {
    reason: "COVID Recovery Window",
    description: "Tourism is rebounding NOW. Nepal has 2-3 years to capture market share before competitors dominate.",
    icon: "⏰",
  },
  {
    reason: "AI Technology Breakthrough",
    description: "LLMs and AI are mature enough NOW to solve Nepal's unique challenges. This window won't last.",
    icon: "🤖",
  },
  {
    reason: "Youth Migration Crisis",
    description: "500,000 youth leave annually. Every year we wait, we lose another generation's potential.",
    icon: "🚨",
  },
  {
    reason: "First-Mover Advantage",
    description: "Zero AI tourism competitors in Nepal RIGHT NOW. In 2 years, this opportunity vanishes.",
    icon: "🎯",
  },
];

export default function OutcomeVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" />

      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full shadow-xl mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          >
            <span className="text-2xl">🎯</span>
            <span className="font-bold text-lg">OUTCOME VISION</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            <span className="gradient-text">What's at Stake?</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            The future of Nepal's youth, economy, and global reputation hinges on this decision
          </p>
        </motion.div>

        {/* WIN vs LOSE Split */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* WIN Scenario */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-green-900 to-emerald-900 rounded-3xl p-8 border-2 border-green-500 shadow-2xl h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">✅</div>
                <h3 className="text-4xl font-bold text-white">If We WIN</h3>
              </div>

              <div className="space-y-4">
                {winScenario.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-green-400/30"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl flex-shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-xl font-bold text-green-300 mb-2">{item.outcome}</div>
                        <div className="text-gray-300">{item.description}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-green-500/30">
                <p className="text-2xl font-bold text-green-400 text-center">
                  A Transformed Nepal 🇳🇵
                </p>
              </div>
            </div>
          </motion.div>

          {/* LOSE Scenario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-red-900 to-orange-900 rounded-3xl p-8 border-2 border-red-500 shadow-2xl h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">❌</div>
                <h3 className="text-4xl font-bold text-white">If We LOSE</h3>
              </div>

              <div className="space-y-4">
                {loseScenario.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-red-400/30"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl flex-shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-xl font-bold text-red-300 mb-2">{item.outcome}</div>
                        <div className="text-gray-300">{item.description}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-red-500/30">
                <p className="text-2xl font-bold text-red-400 text-center">
                  Status Quo Continues 😔
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Who Benefits Most */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-4 text-white">
            <span className="gradient-text">Who Benefits Most?</span>
          </h3>
          <p className="text-xl text-gray-300 text-center mb-12">
            These three groups experience life-changing transformation
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {beneficiaries.map((beneficiary, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-8 border-2 border-blue-400 shadow-xl"
              >
                <h4 className="text-2xl font-bold text-white mb-4">{beneficiary.group}</h4>
                <div className="mb-4 pb-4 border-b border-white/30">
                  <div className="text-sm text-gray-300 mb-1">Direct Impact:</div>
                  <div className="text-lg font-bold text-blue-300">{beneficiary.impact}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">Why It Matters:</div>
                  <div className="text-white/90">{beneficiary.why}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ripple Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-4 text-white">
            <span className="text-gray-300">The</span>{" "}
            <span className="gradient-text">Ripple Effect</span>
          </h3>
          <p className="text-xl text-gray-300 text-center mb-12">
            Success in tourism triggers transformation across Nepal's society
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rippleEffects.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.4 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all"
              >
                <div className="text-3xl mb-3">{item.effect.split(' ')[0]}</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {item.effect.substring(item.effect.indexOf(' ') + 1)}
                </h4>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why NOW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.8 }}
          className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl shadow-2xl p-10 border-2 border-white/20"
        >
          <h3 className="text-4xl font-bold text-center mb-4 text-white">
            <span className="text-5xl">⚡</span> Why Does This Matter <span className="underline">NOW</span>?
          </h3>
          <p className="text-xl text-white/90 text-center mb-10">
            Four converging forces create a once-in-a-decade opportunity
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {urgency.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 2 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.reason}</h4>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-3xl font-bold text-white">
              The Window Is Open. Let's Act.
            </p>
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 2.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 p-1 rounded-3xl">
            <div className="bg-gray-900 rounded-3xl px-12 py-10">
              <p className="text-3xl font-bold text-white mb-2">
                This Isn't Just Business
              </p>
              <p className="text-xl text-gray-300">
                This is Nepal's future in our hands
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
