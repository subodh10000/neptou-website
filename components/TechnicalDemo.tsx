"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  {
    category: "Frontend",
    icon: "📱",
    technologies: ["React Native", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    icon: "⚙️",
    technologies: ["Node.js", "Python (FastAPI)", "PostgreSQL", "Redis"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "AI/ML",
    icon: "🤖",
    technologies: ["OpenAI GPT-4", "LangChain", "TensorFlow", "Custom NLP"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Infrastructure",
    icon: "☁️",
    technologies: ["AWS", "Docker", "Kubernetes", "CloudFlare CDN"],
    color: "from-orange-500 to-red-500",
  },
];

const keyFeatures = [
  {
    feature: "Real-Time AI Chat",
    description: "Natural language processing for instant travel recommendations",
    tech: "GPT-4 + Custom Nepal Knowledge Base",
    metric: "<200ms response time",
    icon: "💬",
  },
  {
    feature: "Offline Maps & Navigation",
    description: "Download entire regions for offline trekking",
    tech: "MapBox + Custom Routing Algorithm",
    metric: "100% offline capability",
    icon: "🗺️",
  },
  {
    feature: "Multi-Language Translation",
    description: "Real-time translation for 10+ languages including Nepali",
    tech: "Google Translate API + Custom Glossary",
    metric: "95%+ accuracy",
    icon: "🌍",
  },
  {
    feature: "Smart Trip Optimization",
    description: "AI-powered itinerary planning based on weather, crowds, budget",
    tech: "Custom ML Model + Real-time Data",
    metric: "30% time savings",
    icon: "🎯",
  },
  {
    feature: "Safety Monitoring",
    description: "Real-time alerts for weather, altitude sickness, restricted areas",
    tech: "IoT Sensors + Government APIs",
    metric: "24/7 monitoring",
    icon: "🛡️",
  },
  {
    feature: "AR Cultural Guide",
    description: "Point camera at monuments for instant historical context",
    tech: "ARKit/ARCore + Computer Vision",
    metric: "1000+ landmarks",
    icon: "📸",
  },
];

const performanceMetrics = [
  { label: "App Load Time", value: "1.2s", color: "text-green-500" },
  { label: "Crash Rate", value: "0.01%", color: "text-green-500" },
  { label: "User Rating", value: "4.8/5", color: "text-yellow-500" },
  { label: "Daily Active Users", value: "85%", color: "text-blue-500" },
  { label: "API Uptime", value: "99.9%", color: "text-green-500" },
  { label: "Data Sync Speed", value: "<3s", color: "text-green-500" },
];

const appScreens = [
  {
    title: "AI Chat Interface",
    description: "Natural conversations about Nepal travel",
    placeholder: "🗨️",
  },
  {
    title: "Smart Itinerary",
    description: "AI-optimized day-by-day plans",
    placeholder: "📅",
  },
  {
    title: "Offline Maps",
    description: "Detailed topographic navigation",
    placeholder: "🗺️",
  },
  {
    title: "Cultural Guide",
    description: "AR-powered heritage exploration",
    placeholder: "🏛️",
  },
];

export default function TechnicalDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      {/* Animated circuit pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h20v20h-20z M40 10h20v20h-20z M10 40h20v20h-20z M40 40h20v20h-20z" stroke="white" strokeWidth="0.5" fill="none"/>
              <circle cx="30" cy="30" r="3" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
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
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          >
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-lg">TECHNICAL DEMO</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            <span className="gradient-text">Built with</span>{" "}
            <span className="text-white">Cutting-Edge Tech</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade architecture powering world-class AI experiences
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            System Architecture
          </h3>

          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border-2 border-white/10">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Client Layer */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 mb-4">
                  <div className="text-5xl mb-3">📱</div>
                  <h4 className="text-xl font-bold text-white mb-2">Client Layer</h4>
                  <div className="space-y-1 text-sm text-white/90">
                    <div>iOS App</div>
                    <div>Android App</div>
                    <div>Progressive Web App</div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">React Native + TypeScript</div>
              </div>

              {/* API Layer */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 mb-4">
                  <div className="text-5xl mb-3">⚡</div>
                  <h4 className="text-xl font-bold text-white mb-2">API Layer</h4>
                  <div className="space-y-1 text-sm text-white/90">
                    <div>REST API</div>
                    <div>GraphQL</div>
                    <div>WebSocket (Real-time)</div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">Node.js + FastAPI</div>
              </div>

              {/* Backend Services */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 mb-4">
                  <div className="text-5xl mb-3">🤖</div>
                  <h4 className="text-xl font-bold text-white mb-2">AI Services</h4>
                  <div className="space-y-1 text-sm text-white/90">
                    <div>NLP Engine</div>
                    <div>Recommendation AI</div>
                    <div>Translation Service</div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">GPT-4 + Custom Models</div>
              </div>
            </div>

            {/* Data Flow */}
            <div className="mt-8 flex items-center justify-center gap-4 text-white/60 text-sm">
              <span>Mobile App</span>
              <span>→</span>
              <span>API Gateway</span>
              <span>→</span>
              <span>Microservices</span>
              <span>→</span>
              <span>AI/ML Models</span>
              <span>→</span>
              <span>Database</span>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Technology Stack
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${stack.color} rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform`}>
                  <div className="text-5xl mb-4">{stack.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-4">{stack.category}</h4>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, j) => (
                      <div key={j} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Technical Features
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border-2 border-white/10 hover:border-purple-400/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{feature.feature}</h4>
                    <p className="text-gray-300 mb-3">{feature.description}</p>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="text-xs text-gray-400 mb-1">Technology</div>
                        <div className="text-sm font-semibold text-white">{feature.tech}</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="text-xs text-gray-400 mb-1">Performance</div>
                        <div className="text-sm font-semibold text-green-400">{feature.metric}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* App Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            App Showcase
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appScreens.map((screen, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 1.6 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border-2 border-white/20 shadow-xl">
                  {/* Phone mockup */}
                  <div className="aspect-[9/19] bg-white rounded-2xl mb-4 flex items-center justify-center text-8xl">
                    {screen.placeholder}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{screen.title}</h4>
                  <p className="text-sm text-gray-400">{screen.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.8 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-10 border-2 border-white/20"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Performance Metrics
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {performanceMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 2 + i * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
                <div className="text-sm text-white/80">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xl text-white/90">
              Production-ready with enterprise-grade reliability
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
          <div className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-3xl">
            <div className="bg-gray-900 rounded-3xl px-12 py-10">
              <p className="text-3xl font-bold text-white mb-2">
                Not Just an Idea. A Working Product.
              </p>
              <p className="text-xl text-gray-300">
                Built by engineers who understand scale
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
