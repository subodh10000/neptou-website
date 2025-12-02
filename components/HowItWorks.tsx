"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Download Neptou",
    description: "Get the app from the App Store and create your free account in seconds.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Choose Your Adventure",
    description: "Browse curated experiences, hidden gems, and popular destinations across Nepal.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Plan Your Journey",
    description: "Let our AI create a personalized itinerary, or customize it to match your style.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Explore & Enjoy",
    description: "Use offline maps, connect with guides, and discover Nepal like a local. Share your journey!",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-32 h-32 text-nepal-blue" fill="currentColor">
              <path d="M50,10 L61,35 L90,35 L67,52 L78,77 L50,60 L22,77 L33,52 L10,35 L39,35 Z" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gray-800">How</span>{" "}
            <span className="gradient-text">Neptou Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your Nepal adventure in four simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-nepal-blue via-nepal-red to-nepal-gold transform -translate-y-1/2 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const stepRef = useRef(null);
              const stepInView = useInView(stepRef, { once: true, margin: "-50px" });

              return (
                <motion.div
                  key={index}
                  ref={stepRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 h-full relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                    {/* Number badge */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-nepal-red to-pink-600 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="text-nepal-blue mb-6"
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Decorative gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-nepal-blue to-nepal-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={stepInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <svg className="w-16 h-16 text-nepal-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#download"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-nepal-blue to-blue-600 text-white text-xl font-bold rounded-full shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
