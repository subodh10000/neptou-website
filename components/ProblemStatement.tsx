"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: "👨‍💼",
    stat: "22.7%",
    label: "Youth Unemployment",
    description: "Highest in decades - educated youth can't find jobs despite tourism boom",
    color: "from-red-600 to-orange-600",
  },
  {
    icon: "🗣️",
    stat: "70%+",
    label: "Language Barriers",
    description: "International visitors struggle to communicate, missing authentic experiences",
    color: "from-purple-600 to-pink-600",
  },
  {
    icon: "📱",
    stat: "0",
    label: "Centralized Platform",
    description: "No intelligent, unified system for tourism information and services",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: "🏪",
    stat: "80%",
    label: "Offline Businesses",
    description: "Local hotels, guides, shops can't reach tourists effectively",
    color: "from-green-600 to-emerald-600",
  },
  {
    icon: "⚠️",
    stat: "40%",
    label: "Safety Concerns",
    description: "Tourists face navigation issues and lack real-time assistance in remote areas",
    color: "from-yellow-600 to-orange-600",
  },
  {
    icon: "💸",
    stat: "6.7%",
    label: "Untapped Potential",
    description: "Tourism contributes only 6.7% to GDP when it could be 12%+ like Thailand",
    color: "from-indigo-600 to-purple-600",
  },
];

const rootCauses = [
  {
    title: "Digital Infrastructure Gap",
    description: "Tourism sector lacks modern technology infrastructure and digital integration",
    impact: "Tourists rely on outdated guidebooks and word-of-mouth",
  },
  {
    title: "Fragmented Value Chain",
    description: "Disconnect between tourists, local businesses, guides, and service providers",
    impact: "60% of tourist spending leaks to international platforms",
  },
  {
    title: "No Tech Jobs for Youth",
    description: "Despite high education levels, there are minimal tech employment opportunities",
    impact: "Brain drain - talented youth leave for abroad",
  },
  {
    title: "Information Asymmetry",
    description: "No single source of truth for real-time tourism data, safety, and recommendations",
    impact: "Poor tourist experiences and safety incidents",
  },
];

export default function ProblemStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-red-900 text-white relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Red alert glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-full shadow-2xl mb-8 border-2 border-red-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              🚨
            </motion.span>
            <span className="font-bold text-lg">THE REAL PROBLEM</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8">
            <span className="text-white">The</span>{" "}
            <span className="text-red-400">Crisis</span>{" "}
            <span className="text-white">We're Solving</span>
          </h2>

          <p className="text-2xl sm:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            While <span className="text-nepal-gold font-bold">1.15 million tourists</span> visit Nepal annually,
            a broken tourism ecosystem is failing both visitors and locals
          </p>
        </motion.div>

        {/* Problem Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/20 hover:border-red-400 transition-all h-full relative overflow-hidden">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-20 transition-opacity`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-4">{problem.icon}</div>

                  {/* Stat */}
                  <div className={`text-6xl sm:text-7xl font-bold mb-2 bg-gradient-to-br ${problem.color} bg-clip-text text-transparent`}>
                    {problem.stat}
                  </div>

                  {/* Label */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {problem.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Root Causes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-red-900/50 via-orange-900/50 to-red-900/50 rounded-3xl p-10 border-2 border-red-500/30">
            <h3 className="text-4xl font-bold text-center mb-4 text-white">
              Root Causes <span className="text-red-400">(Not Just Symptoms)</span>
            </h3>
            <p className="text-center text-gray-300 mb-10 text-xl">
              Understanding the systemic issues that created this crisis
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {rootCauses.map((cause, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-2xl font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{cause.title}</h4>
                      <p className="text-gray-300 mb-2">{cause.description}</p>
                      <div className="text-sm text-red-300">
                        <span className="font-bold">Impact:</span> {cause.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 p-1 rounded-2xl">
            <div className="bg-gray-900 rounded-2xl px-10 py-8">
              <p className="text-3xl font-bold text-white mb-2">
                This isn't just a business opportunity.
              </p>
              <p className="text-2xl text-gray-300">
                It's a <span className="text-red-400 font-bold">societal crisis</span> that demands an <span className="text-nepal-gold font-bold">intelligent solution</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
