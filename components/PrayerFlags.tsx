"use client";

import { motion } from "framer-motion";

export default function PrayerFlags() {
  const colors = [
    "#003893", // Blue
    "#FFFFFF", // White
    "#DC143C", // Red
    "#22C55E", // Green
    "#FFD700", // Yellow/Gold
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none overflow-hidden h-32">
      {/* Prayer flag string */}
      <svg className="w-full h-full">
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="30"
          stroke="#4B5563"
          strokeWidth="2"
        />
      </svg>

      {/* Prayer flags */}
      <div className="absolute top-0 left-0 right-0 flex justify-around px-4">
        {[...Array(15)].map((_, i) => {
          const color = colors[i % colors.length];
          const delay = i * 0.1;

          return (
            <motion.div
              key={i}
              className="relative"
              style={{
                transformOrigin: "top center",
              }}
              initial={{ rotate: -2, y: 0 }}
              animate={{
                rotate: [-2, 2, -2],
                y: [0, 5, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
            >
              {/* Flag pole */}
              <div className="w-0.5 h-8 bg-gray-600 mx-auto" />

              {/* Flag */}
              <div
                className="w-12 h-8 shadow-lg relative"
                style={{
                  backgroundColor: color,
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                }}
              >
                {/* Om Mani Padme Hum symbol representation */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                    style={{
                      color: color === "#FFFFFF" ? "#000000" : "#FFFFFF",
                    }}
                  >
                    <circle cx="12" cy="12" r="8" opacity="0.6" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
