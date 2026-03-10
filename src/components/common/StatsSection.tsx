"use client";

import React, { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "10+", target: 10, suffix: "+", label: "Years of experience" },
  { value: "20k", target: 20, suffix: "k", label: "Completed projects" },
  { value: "240+", target: 240, suffix: "+", label: "Team members" },
  { value: "12+", target: 12, suffix: "+", label: "Advanced tools" },
];

const DURATION = 1800;
const STAGGER = 120;

function useCountUp(
  target: number,
  suffix: string,
  isVisible: boolean,
  delay: number
) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) {
      startTimeRef.current = null;
      setCount(0);
      return;
    }

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const effectiveElapsed = Math.max(0, elapsed - delay);
      const progress = Math.min(effectiveElapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);

      if (progress < 1 || elapsed < delay) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, isVisible, delay]);

  return `${count}${suffix}`;
}

function StatItem({
  stat,
  index,
  isLast,
  isVisible,
}: {
  stat: (typeof STATS)[0];
  index: number;
  isLast: boolean;
  isVisible: boolean;
}) {
  const displayValue = useCountUp(
    stat.target,
    stat.suffix,
    isVisible,
    index * STAGGER
  );

  return (
    <>
      <div
        className="group flex flex-col items-center text-center sm:px-10 lg:px-14 flex-shrink-0 transition-transform duration-300 hover:scale-105"
        role="group"
        aria-label={`${stat.value} ${stat.label}`}
      >
        <span
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 bg-clip-text text-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden
        >
          {displayValue}
        </span>
        <span className="text-gray-700 text-sm sm:text-base mt-2 font-medium whitespace-nowrap">
          {stat.label}
        </span>
      </div>
      {!isLast && (
        <div
          className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-pink-400 to-transparent flex-shrink-0 opacity-60"
          aria-hidden
        />
      )}
    </>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-[95vw] sm:max-w-[92vw] mx-auto my-16 sm:my-20 px-4 sm:px-6 lg:px-8"
      aria-label="Company statistics"
    >
      <div className="py-8 sm:py-10">
        <div className="relative overflow-hidden bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-pink-100/50 border border-pink-100/80 px-6 sm:px-12 lg:px-20 py-12 sm:py-14">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-transparent to-purple-50/20 pointer-events-none" />
          <div className="relative group flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-4 lg:gap-6 cursor-default sm:flex-nowrap">
            {STATS.map((stat, index) => (
              <StatItem
                key={stat.label}
                stat={stat}
                index={index}
                isLast={index === STATS.length - 1}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
