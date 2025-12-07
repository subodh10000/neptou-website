"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technicalScalability = [
  {
    icon: "☁️",
    title: "Cloud-Native Architecture",
    description: "AWS/Google Cloud infrastructure with auto-scaling, load balancing, and global CDN distribution",
    tech: "AWS Lambda, CloudFront, RDS",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🔧",
    title: "Microservices Design",
    description: "Modular, independent services that can scale horizontally based on demand",
    tech: "Docker, Kubernetes, API Gateway",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "🔌",
    title: "API-First Approach",
    description: "RESTful APIs enabling easy third-party integrations and white-label solutions",
    tech: "GraphQL, REST, WebSocket",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "📱",
    title: "Offline-First Mobile App",
    description: "Progressive Web App with offline capabilities for remote Himalayan regions",
    tech: "Service Workers, IndexedDB, PWA",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "🤖",
    title: "AI Infrastructure",
    description: "Scalable ML pipelines with real-time personalization and predictive analytics",
    tech: "TensorFlow, PyTorch, MLOps",
    color: "from-indigo-500 to-purple-500",
  },
];

const businessPhases = [
  {
    phase: "Phase 1",
    title: "Nepal Domination",
    timeline: "Year 1-2",
    market: "1.5M Tourists",
    revenue: "$750K - $2.5M",
    focus: ["All major Nepal destinations", "1000+ local partnerships", "Government collaboration"],
    color: "from-green-500 to-emerald-500",
    scale: "100%",
  },
  {
    phase: "Phase 2",
    title: "Himalayan Expansion",
    timeline: "Year 2-3",
    market: "15M+ Tourists",
    revenue: "$6M - $15M",
    focus: ["Bhutan, Tibet, Northern India", "Regional airline partnerships", "Cross-border experiences"],
    color: "from-blue-500 to-cyan-500",
    scale: "75%",
  },
  {
    phase: "Phase 3",
    title: "Global Adventure Travel",
    timeline: "Year 3-5",
    market: "100M+ Travelers",
    revenue: "$50M+",
    focus: ["Patagonia, Alps, Andes", "Global hotel chains", "Adventure tourism worldwide"],
    color: "from-purple-500 to-pink-500",
    scale: "50%",
  },
  {
    phase: "Phase 4",
    title: "B2B2C Licensing",
    timeline: "Year 4+",
    market: "Enterprise Scale",
    revenue: "$100M+",
    focus: ["White-label tourism AI", "Government tourism boards", "Travel company integrations"],
    color: "from-orange-500 to-red-500",
    scale: "25%",
  },
];

const partnerships = [
  {
    category: "Government",
    icon: "🏛️",
    partners: ["Nepal Tourism Board", "Ministry of Culture", "Local Municipalities"],
    value: "Policy support, data access, promotion",
    color: "from-blue-600 to-indigo-600",
  },
  {
    category: "Airlines",
    icon: "✈️",
    partners: ["Nepal Airlines", "Qatar Airways", "International Carriers"],
    value: "In-flight promotions, booking integration",
    color: "from-sky-500 to-blue-500",
  },
  {
    category: "Hotels & Hospitality",
    icon: "🏨",
    partners: ["Hyatt", "Local Homestays", "Boutique Hotels"],
    value: "Direct bookings, exclusive deals",
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "NGOs & Conservation",
    icon: "🌿",
    partners: ["WWF Nepal", "Mountain Legacy", "Cultural Trusts"],
    value: "Sustainable tourism, preservation",
    color: "from-green-500 to-emerald-500",
  },
];

export default function ScalabilityModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          >
            <span className="text-2xl">📈</span>
            <span className="font-bold text-lg">SCALABILITY</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-800">Built for Scale:</span>{" "}
            <span className="gradient-text">Thousands to Millions</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Architected from day one to handle exponential growth and global expansion
          </p>
        </motion.div>

        {/* Technical Scalability */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Technical</span>{" "}
            <span className="text-gray-800">Scalability</span>
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Enterprise-grade infrastructure ready for millions of concurrent users
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalScalability.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-blue-400 transition-all h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.split(", ").map((tech, j) => (
                        <span key={j} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Scalability - Expansion Phases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-4">
            <span className="text-gray-800">Business</span>{" "}
            <span className="gradient-text">Scalability</span>
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Four-phase expansion from Nepal to global adventure travel platform
          </p>

          <div className="space-y-6">
            {businessPhases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.8 + i * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-purple-400 transition-all">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Phase Info */}
                    <div className="lg:w-1/3">
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${phase.color} text-white rounded-full font-bold mb-4`}>
                        {phase.phase}
                      </div>
                      <h4 className="text-3xl font-bold text-gray-900 mb-2">{phase.title}</h4>
                      <div className="text-sm text-gray-600 mb-4">{phase.timeline}</div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">👥</span>
                          <span className="font-semibold text-gray-700">{phase.market}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">💰</span>
                          <span className="font-semibold text-gray-700">{phase.revenue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Focus Areas */}
                    <div className="lg:w-2/3">
                      <div className="mb-4">
                        <div className="text-sm font-bold text-gray-600 mb-2">Key Focus Areas:</div>
                        <ul className="space-y-2">
                          {phase.focus.map((item, j) => (
                            <li key={j} className="flex items-center gap-3">
                              <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-6">
                        <div className="text-sm font-bold text-gray-600 mb-2">Market Capture Potential</div>
                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${phase.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: phase.scale } : { width: 0 }}
                            transition={{ delay: 1 + i * 0.2, duration: 1 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4 }}
        >
          <h3 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Partnership</span>{" "}
            <span className="text-gray-800">Ecosystem</span>
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Strategic alliances across government, industry, and conservation
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerships.map((partnership, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 1.6 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className={`bg-gradient-to-br ${partnership.color} rounded-3xl p-8 shadow-xl text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-5xl">{partnership.icon}</div>
                      <h4 className="text-2xl font-bold">{partnership.category}</h4>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-bold opacity-90 mb-2">Partners:</div>
                      <div className="flex flex-wrap gap-2">
                        {partnership.partners.map((partner, j) => (
                          <span key={j} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/30">
                      <div className="text-sm font-bold opacity-90 mb-1">Value Creation:</div>
                      <div className="text-white/95">{partnership.value}</div>
                    </div>
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
          <div className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-3xl">
            <div className="bg-white rounded-3xl px-12 py-10">
              <p className="text-3xl font-bold text-gray-900 mb-2">
                Infrastructure Built for Billions
              </p>
              <p className="text-xl text-gray-600">
                From Nepal's mountains to the world's adventure destinations
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
