"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const directImpacts = [
  {
    icon: "💼",
    metric: "500+",
    label: "Tech Jobs Created (Year 1)",
    description: "Direct employment for Nepali youth in development, content, support, and operations",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🏪",
    metric: "2,000+",
    label: "Local Businesses Empowered",
    description: "Hotels, guides, restaurants connected directly with tourists through our platform",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "💰",
    metric: "$100M+",
    label: "Additional Tourist Spending",
    description: "20% increase in local economy from better tourist experiences and longer stays",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "🛡️",
    metric: "40%",
    label: "Reduction in Safety Incidents",
    description: "Real-time alerts, emergency assistance, and better navigation prevent accidents",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: "📱",
    metric: "50,000+",
    label: "Vendors Going Digital",
    description: "Local guides, artisans, and small businesses gaining digital presence and income",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: "⭐",
    metric: "4.8/5",
    label: "Tourist Satisfaction",
    description: "Dramatically improved experiences leading to better reviews and repeat visits",
    color: "from-pink-500 to-rose-500",
  },
];

const systemicImpacts = [
  {
    title: "Youth Employment",
    from: "22.7%",
    to: "20%",
    change: "-2.7%",
    description: "20,000 young Nepalis gainfully employed through direct jobs and gig economy",
    icon: "👨‍💼",
  },
  {
    title: "Tourism GDP",
    from: "6.7%",
    to: "8%",
    change: "+1.3%",
    description: "Unlocking Nepal's tourism potential to match regional leaders like Thailand",
    icon: "📊",
  },
  {
    title: "Economic Inclusion",
    from: "Urban Only",
    to: "Rural + Urban",
    change: "100K+",
    description: "Women and rural communities participating in tourism economy",
    icon: "🌾",
  },
  {
    title: "Cultural Preservation",
    from: "At Risk",
    to: "Protected",
    change: "Sustainable",
    description: "Responsible tourism preserving heritage while sharing with world",
    icon: "🏛️",
  },
];

const beneficiaries = [
  {
    group: "Tourists",
    icon: "✈️",
    benefits: ["Better experiences", "Increased safety", "Value for money", "Authentic connections"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    group: "Youth",
    icon: "👨‍🎓",
    benefits: ["Tech jobs", "Gig opportunities", "Skill development", "Career growth"],
    color: "from-purple-500 to-pink-500",
  },
  {
    group: "Businesses",
    icon: "🏪",
    benefits: ["Direct access to tourists", "Digital presence", "Increased revenue", "Fair pricing"],
    color: "from-green-500 to-emerald-500",
  },
  {
    group: "Communities",
    icon: "🏘️",
    benefits: ["Economic development", "Infrastructure improvement", "Cultural exchange", "Prosperity"],
    color: "from-orange-500 to-red-500",
  },
  {
    group: "Government",
    icon: "🏛️",
    benefits: ["Higher tax revenue", "Better tourism data", "Policy insights", "International reputation"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    group: "Environment",
    icon: "🌿",
    benefits: ["Reduced overtourism", "Sustainable practices", "Protected areas", "Smart routing"],
    color: "from-teal-500 to-green-500",
  },
];

export default function SocialImpact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-xl mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          >
            <span className="text-2xl">🌍</span>
            <span className="font-bold text-lg">MEASURABLE IMPACT</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Impact</span>{" "}
            <span className="text-gray-800">at Scale</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Quantifying the positive change we'll create for Nepal's people and economy
          </p>
        </motion.div>

        {/* Direct Impact Metrics */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="text-gray-800">Direct Impact</span>{" "}
            <span className="text-green-600">(Year 1)</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directImpacts.map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-green-400 transition-all h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${impact.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{impact.icon}</div>
                    <div className={`text-5xl font-bold mb-2 bg-gradient-to-br ${impact.color} bg-clip-text text-transparent`}>
                      {impact.metric}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{impact.label}</h4>
                    <p className="text-gray-600 leading-relaxed">{impact.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Systemic Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Systemic Impact</span>{" "}
            <span className="text-gray-800">(Long-term Change)</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {systemicImpacts.map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                transition={{ delay: 1 + i * 0.2 }}
                className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-xl p-8 border-2 border-green-200"
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl flex-shrink-0">{impact.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{impact.title}</h4>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 mb-1">From</div>
                        <div className="text-2xl font-bold text-red-600">{impact.from}</div>
                      </div>
                      <div className="text-3xl text-gray-400">→</div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 mb-1">To</div>
                        <div className="text-2xl font-bold text-green-600">{impact.to}</div>
                      </div>
                    </div>

                    <div className="inline-block px-4 py-2 bg-green-600 text-white rounded-full font-bold mb-3">
                      {impact.change}
                    </div>

                    <p className="text-gray-700">{impact.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4 }}
        >
          <h3 className="text-4xl font-bold text-center mb-4">
            <span className="text-gray-800">Who</span>{" "}
            <span className="gradient-text">Benefits?</span>
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Everyone in Nepal's tourism ecosystem wins
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficiaries.map((beneficiary, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 1.6 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${beneficiary.color} rounded-3xl p-8 shadow-xl text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full" />

                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{beneficiary.icon}</div>
                    <h4 className="text-2xl font-bold mb-4">{beneficiary.group}</h4>

                    <ul className="space-y-2">
                      {beneficiary.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 2 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 p-1 rounded-3xl">
            <div className="bg-white rounded-3xl px-12 py-10">
              <p className="text-3xl font-bold text-gray-900 mb-2">
                Creating Shared Prosperity
              </p>
              <p className="text-xl text-gray-600">
                When tourism works for everyone, entire communities thrive
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
