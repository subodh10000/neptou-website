"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const yearlyData = [
  { year: "2019", value: 1197191, label: "1.19M" },
  { year: "2020", value: 230085, label: "230K" },
  { year: "2021", value: 150962, label: "151K" },
  { year: "2022", value: 615460, label: "615K" },
  { year: "2023", value: 1014571, label: "1.01M" },
  { year: "2024", value: 1147567, label: "1.15M" },
];

const topMarkets = [
  { country: "India", flag: "🇮🇳", tourists: 317772, percentage: 27.7 },
  { country: "USA", flag: "🇺🇸", tourists: 111216, percentage: 9.7 },
  { country: "China", flag: "🇨🇳", tourists: 101879, percentage: 8.9 },
  { country: "UK", flag: "🇬🇧", tourists: 57554, percentage: 5.0 },
  { country: "Thailand", flag: "🇹🇭", tourists: 45231, percentage: 3.9 },
];

const monthlyData2024 = [
  { month: "Jan", value: 82345 },
  { month: "Feb", value: 95123 },
  { month: "Mar", value: 128167 },
  { month: "Apr", value: 105234 },
  { month: "May", value: 87456 },
  { month: "Jun", value: 68234 },
  { month: "Jul", value: 78123 },
  { month: "Aug", value: 91234 },
  { month: "Sep", value: 103456 },
  { month: "Oct", value: 124393 },
  { month: "Nov", value: 112345 },
  { month: "Dec", value: 98456 },
];

// Animated Number Component
function AnimatedNumber({ value, delay = 0, suffix = "" }: { value: number; delay?: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1500; // 1.5 seconds
      const increment = value / (duration / 16); // 60fps

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setDisplayValue(value);
          clearInterval(counter);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return <span ref={ref}>{displayValue.toLocaleString()}{suffix}</span>;
}

export default function MarketDataSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const maxYearly = Math.max(...yearlyData.map(d => d.value));
  const maxMonthly = Math.max(...monthlyData2024.map(d => d.value));

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 via-white to-orange-50 relative overflow-hidden">
      {/* Traditional border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-nepal-blue via-nepal-red to-nepal-gold" />

      {/* Background mandala */}
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] opacity-5 mandala-spin pointer-events-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-nepal-blue">
          <circle cx="100" cy="100" r="80" opacity="0.2" />
          <circle cx="100" cy="100" r="60" opacity="0.3" />
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={100 + 70 * Math.cos((i * Math.PI) / 6)}
              cy={100 + 70 * Math.sin((i * Math.PI) / 6)}
              r="15"
              opacity="0.4"
            />
          ))}
        </svg>
      </div>

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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          >
            <span className="text-2xl">📈</span>
            <span className="font-bold">MARKET INTELLIGENCE</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Market Data</span>{" "}
            <span className="text-gray-800">&amp; Trends</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Real numbers powering our strategy
          </p>
        </motion.div>

        {/* Yearly Arrivals Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border-2 border-gray-100"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Tourist Arrivals by Year</h3>
              <p className="text-gray-600">Strong recovery and growth trajectory</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-nepal-red">1.15M</div>
              <div className="text-sm text-green-600 font-bold">+13.1% YoY</div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="flex items-end justify-between gap-3 sm:gap-4 h-80 relative">
            {yearlyData.map((data, index) => {
              const heightPercentage = (data.value / maxYearly) * 100;
              const isPandemic = data.year === "2020" || data.year === "2021";
              const isRecovery = data.year === "2022" || data.year === "2023" || data.year === "2024";
              const isPrePandemic = data.year === "2019";

              return (
                <div key={index} className="flex-1 flex flex-col items-center justify-end">
                  <motion.div
                    className="w-full relative group cursor-pointer"
                    style={{ height: `${heightPercentage}%`, transformOrigin: 'bottom' }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: "easeOut" }}
                  >
                    <div
                      className={`w-full h-full rounded-t-xl ${
                        isPandemic
                          ? "bg-gradient-to-t from-red-400 to-red-500"
                          : isRecovery
                          ? "bg-gradient-to-t from-green-400 to-green-500"
                          : "bg-gradient-to-t from-blue-400 to-blue-500"
                      } shadow-xl hover:shadow-2xl group-hover:scale-x-105 transition-all relative overflow-visible`}
                    >
                      {/* Animated number on top of bar */}
                      <motion.div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 font-bold text-gray-900 text-xs sm:text-sm whitespace-nowrap"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 1.2 }}
                      >
                        <AnimatedNumber value={data.value} delay={(index * 150) + 1200} />
                      </motion.div>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                      <div className="font-bold text-lg">{data.label}</div>
                      <div className="text-xs">{data.value.toLocaleString()} tourists</div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                    </div>
                  </motion.div>

                  <div className="mt-4 text-center w-full">
                    <div className="font-bold text-gray-900 text-sm sm:text-base">{data.year}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{data.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-400 to-blue-500" />
              <span className="text-sm text-gray-600">Pre-Pandemic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-red-400 to-red-500" />
              <span className="text-sm text-gray-600">Pandemic Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-green-400 to-green-500" />
              <span className="text-sm text-gray-600">Recovery &amp; Growth</span>
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Top Source Markets */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Top Source Markets</h3>
            <div className="space-y-4">
              {topMarkets.map((market, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{market.flag}</span>
                      <div>
                        <div className="font-bold text-gray-900">{market.country}</div>
                        <div className="text-sm text-gray-600">{market.tourists.toLocaleString()} tourists</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-nepal-blue">{market.percentage}%</div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-nepal-blue to-nepal-red rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${market.percentage * 3.6}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                <span className="font-bold text-nepal-red">Focus:</span> Multilingual support for top 10 markets
              </div>
            </div>
          </motion.div>

          {/* Monthly Trend 2024 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Monthly Arrivals 2024</h3>
            <p className="text-gray-600 mb-6">Peak seasons: March &amp; October</p>

            {/* Line Chart */}
            <div className="h-64 relative">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 50}
                    x2="400"
                    y2={i * 50}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                ))}

                {/* Line path */}
                <motion.polyline
                  points={monthlyData2024
                    .map((d, i) => {
                      const x = (i / (monthlyData2024.length - 1)) * 380 + 10;
                      const y = 200 - (d.value / maxMonthly) * 180;
                      return `${x},${y}`;
                    })
                    .join(" ")}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2, delay: 0.7 }}
                />

                {/* Area under line */}
                <motion.polygon
                  points={`10,200 ${monthlyData2024
                    .map((d, i) => {
                      const x = (i / (monthlyData2024.length - 1)) * 380 + 10;
                      const y = 200 - (d.value / maxMonthly) * 180;
                      return `${x},${y}`;
                    })
                    .join(" ")} 390,200`}
                  fill="url(#areaGradient)"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />

                {/* Data points */}
                {monthlyData2024.map((d, i) => {
                  const x = (i / (monthlyData2024.length - 1)) * 380 + 10;
                  const y = 200 - (d.value / maxMonthly) * 180;
                  const isPeak = d.month === "Mar" || d.month === "Oct";

                  return (
                    <g key={i}>
                      <motion.circle
                        cx={x}
                        cy={y}
                        r={isPeak ? "6" : "4"}
                        fill={isPeak ? "#DC143C" : "#003893"}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                      />
                      {isPeak && (
                        <motion.circle
                          cx={x}
                          cy={y}
                          r="8"
                          fill="none"
                          stroke="#DC143C"
                          strokeWidth="2"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                          transition={{ duration: 0.5, delay: 1 + i * 0.05 }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Gradients */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#003893" />
                    <stop offset="50%" stopColor="#DC143C" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#003893" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Month labels */}
              <div className="flex justify-between mt-2">
                {monthlyData2024.map((d, i) => (
                  <div key={i} className="text-xs text-gray-600 font-medium">
                    {d.month}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600">Peak Month</div>
                <div className="text-2xl font-bold text-nepal-red">March</div>
                <div className="text-sm text-gray-600">128,167 tourists</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Total Revenue (FY 23/24)</div>
                <div className="text-2xl font-bold text-nepal-blue">NPR 82.33B</div>
                <div className="text-sm text-gray-600">~$617M USD</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Insight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-nepal-blue via-purple-600 to-nepal-red rounded-3xl shadow-2xl p-8 text-white text-center"
        >
          <h4 className="text-3xl font-bold mb-4">AI-Powered Market Intelligence</h4>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our platform uses this data to optimize tourist experiences, predict peak times,
            and connect travelers with authentic local experiences at the right moment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
