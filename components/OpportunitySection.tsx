"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Animated counter hook
function useCounter(end: number, duration: number = 2, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return count;
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return num.toString();
}

const stats = [
  {
    value: 1147567,
    label: "Tourists Visited Nepal in 2024",
    suffix: "",
    growth: "+13.1% YoY",
    icon: "✈️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    value: 96,
    label: "Recovery to Pre-Pandemic Levels",
    suffix: "%",
    growth: "Nearly Full Recovery",
    icon: "📈",
    color: "from-green-500 to-emerald-500",
  },
  {
    value: 2.7,
    label: "Tourism GDP Contribution",
    suffix: "B",
    prefix: "$",
    growth: "6.7% of GDP",
    icon: "💰",
    color: "from-yellow-500 to-orange-500",
  },
  {
    value: 1.19,
    label: "Million Jobs Supported",
    suffix: "M",
    growth: "Lives Impacted",
    icon: "👥",
    color: "from-purple-500 to-pink-500",
  },
  {
    value: 3144,
    label: "Tourists Per Day Average",
    suffix: "",
    growth: "Room for Growth",
    icon: "🌅",
    color: "from-red-500 to-orange-500",
  },
  {
    value: 22.7,
    label: "Youth Unemployment Rate",
    suffix: "%",
    growth: "Opportunity to Solve",
    icon: "🎯",
    color: "from-indigo-500 to-purple-500",
  },
];

const painPoints = [
  {
    title: "Language Barriers",
    description: "Tourists struggle to communicate with locals, missing authentic experiences",
    icon: "🗣️",
  },
  {
    title: "Navigation Difficulties",
    description: "Complex terrain and limited infrastructure make travel challenging",
    icon: "🗺️",
  },
  {
    title: "Fragmented Information",
    description: "No single reliable source for planning trips across Nepal",
    icon: "📱",
  },
  {
    title: "Safety Concerns",
    description: "Lack of real-time safety updates and emergency assistance",
    icon: "🚨",
  },
  {
    title: "Generic Experiences",
    description: "Missing personalized recommendations based on preferences",
    icon: "⭐",
  },
  {
    title: "Economic Leakage",
    description: "Tourist spending doesn't effectively reach local communities",
    icon: "💸",
  },
];

export default function OpportunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, #003893 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-nepal-gold rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-nepal-blue to-nepal-red text-white rounded-full shadow-xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-2xl">📊</span>
            <span className="font-bold">DATA-DRIVEN INSIGHTS</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-800">The</span>{" "}
            <span className="gradient-text">Opportunity</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Nepal's tourism is booming, but challenges remain. Here's the data that drives our mission.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const statRef = useRef(null);
            const statInView = useInView(statRef, { once: true, margin: "-50px" });
            const counter = useCounter(stat.value, 2.5, statInView);

            return (
              <motion.div
                key={index}
                ref={statRef}
                initial={{ opacity: 0, y: 50 }}
                animate={statInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative bg-white rounded-3xl shadow-xl p-8 h-full border-2 border-gray-100 hover:border-nepal-gold transition-all overflow-hidden`}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                  {/* Icon */}
                  <div className="relative z-10">
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{
                        scale: statInView ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + 0.5,
                      }}
                    >
                      {stat.icon}
                    </motion.div>

                    {/* Counter */}
                    <div className="mb-4">
                      <div className={`text-5xl sm:text-6xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                        {stat.prefix}{stat.value >= 1000000 || stat.value >= 1000 ? formatNumber(counter) : counter.toLocaleString()}{stat.suffix}
                      </div>
                      <div className="text-sm font-bold text-gray-700 mt-2 px-3 py-1 bg-gray-100 rounded-full inline-block">
                        {stat.growth}
                      </div>
                    </div>

                    {/* Label */}
                    <p className="text-lg font-semibold text-gray-700 leading-tight">
                      {stat.label}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pain Points Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gray-800">Challenges</span>{" "}
              <span className="text-nepal-red">We're Solving</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Despite the growth, tourists and local businesses face critical obstacles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((pain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-nepal-red transition-all"
              >
                <div className="text-4xl mb-3">{pain.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{pain.title}</h4>
                <p className="text-gray-600">{pain.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-nepal-blue via-purple-600 to-nepal-red p-1 rounded-2xl">
            <div className="bg-white rounded-2xl px-8 py-6">
              <p className="text-2xl font-bold gradient-text">
                This is why we're building Neptou with AI
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
