"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const revenueStreams = [
  {
    icon: "💎",
    title: "Freemium Model",
    description: "Free core features with premium upgrades for advanced AI planning, unlimited offline maps, and exclusive content.",
    revenue: "$5-10/month",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🏨",
    title: "Booking Commissions",
    description: "5-15% commission on hotel, homestay, guide, and experience bookings made through the platform.",
    revenue: "10-15% commission",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "✨",
    title: "Premium Features",
    description: "One-time purchases for specialized features: trekking routes, photography guides, cultural deep-dives.",
    revenue: "$2-20 per feature",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "🤝",
    title: "B2B Partnerships",
    description: "White-label solutions for hotels, tour operators, and tourism boards. Enterprise licensing and API access.",
    revenue: "$500-5K/month",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "🎯",
    title: "Sponsored Experiences",
    description: "Featured listings for verified businesses, promoted destinations, and curated experience packages.",
    revenue: "$100-1K/month",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: "📊",
    title: "Data & Insights",
    description: "Anonymized tourism data and trends sold to Nepal Tourism Board, research institutions, and travel companies.",
    revenue: "Premium tier",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function BusinessModelSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-nepal-blue via-nepal-red to-nepal-gold" />

      <div className="absolute top-20 right-20 w-96 h-96 bg-nepal-gold rounded-full blur-3xl opacity-10" />

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
            <span className="text-2xl">💰</span>
            <span className="font-bold">REVENUE MODEL</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Sustainable</span>{" "}
            <span className="text-gray-800">Business Model</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Multiple revenue streams ensuring long-term profitability and growth
          </p>
        </motion.div>

        {/* Revenue Streams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 h-full border-2 border-gray-100 hover:border-nepal-gold transition-all relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${stream.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                <div className="relative z-10">
                  <div className="text-5xl mb-4">{stream.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{stream.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{stream.description}</p>

                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${stream.color} rounded-full`}>
                    <span className="text-sm font-bold text-white">{stream.revenue}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Revenue Projection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-nepal-blue via-purple-600 to-nepal-red rounded-3xl shadow-2xl p-10 text-white"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">3-Year Revenue Projection</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-white/80 mb-2">Year 1</div>
              <div className="text-5xl font-bold mb-2">$750K</div>
              <div className="text-white/90 text-sm">75K users @ $10 ARPU</div>
              <div className="mt-4 pt-4 border-t border-white/30">
                <div className="text-sm text-white/80 mb-1">Key Milestone</div>
                <div className="font-semibold">Product-Market Fit</div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-white/80 mb-2">Year 2</div>
              <div className="text-5xl font-bold mb-2">$2.5M</div>
              <div className="text-white/90 text-sm">200K users @ $12.5 ARPU</div>
              <div className="mt-4 pt-4 border-t border-white/30">
                <div className="text-sm text-white/80 mb-1">Key Milestone</div>
                <div className="font-semibold">Market Leadership</div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-white/80 mb-2">Year 3</div>
              <div className="text-5xl font-bold mb-2">$6M</div>
              <div className="text-white/90 text-sm">400K users @ $15 ARPU</div>
              <div className="mt-4 pt-4 border-t border-white/30">
                <div className="text-sm text-white/80 mb-1">Key Milestone</div>
                <div className="font-semibold">Regional Expansion</div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/30 text-center">
            <p className="text-lg text-white/90">
              Path to profitability by Year 2 with 35%+ gross margins
            </p>
          </div>
        </motion.div>

        {/* Unit Economics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1 }}
          className="mt-12 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: "Customer Acquisition Cost", value: "$8", color: "from-blue-500 to-cyan-500" },
            { label: "Lifetime Value (LTV)", value: "$120", color: "from-green-500 to-emerald-500" },
            { label: "LTV:CAC Ratio", value: "15:1", color: "from-purple-500 to-pink-500" },
            { label: "Payback Period", value: "2 months", color: "from-orange-500 to-red-500" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border-2 border-gray-100"
            >
              <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                {metric.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
