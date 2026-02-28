"use client";

import React from "react";

const STATS = [
  { value: "10+", label: "Years of experience" },
  { value: "20k", label: "Completed projects" },
  { value: "240+", label: "Team members" },
  { value: "12+", label: "Advanced tools" },
];

export default function StatsSection() {
  return (
    <section className="w-full max-w-[95vw] sm:max-w-[92vw] mx-auto my-12 sm:my-16 px-4 sm:px-6 lg:px-8">
      <div className="py-8 sm:py-10">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg px-6 sm:px-10 lg:px-16 py-10 sm:py-12">
          <div className="group flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-6 lg:gap-8 cursor-default">
            {STATS.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <div className="flex flex-col items-center text-center sm:px-8 lg:px-12">
                  {/* Default: less gradient | Hover (anywhere): all show filled gradient */}
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent opacity-55 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.value}
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base mt-2 font-medium">
                    {stat.label}
                  </span>
                </div>
                {index < STATS.length - 1 && (
                  <div className="hidden sm:block w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
