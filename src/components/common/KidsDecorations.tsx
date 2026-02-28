"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CAROUSEL_IMAGES = [
  { id: 1, image: "/images/Container.png" },
  { id: 2, image: "/images/Container.png" },
];

export default function KidsDecorations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current && containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      checkScroll();
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = containerWidth * 0.85 + 16; // 85% + gap-4
      scrollRef.current.scrollBy({
        left: dir === "right" ? cardWidth : -cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative z-10 w-full">
      {/* Horizontal gradient - pink left to purple right */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600" />

      {/* Decorative illustrations */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <svg className="absolute bottom-8 left-[5%] w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
        </svg>
        <svg className="absolute bottom-12 left-[15%] w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
        <svg className="absolute bottom-6 right-[20%] w-14 h-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <svg className="absolute bottom-10 right-[10%] w-11 h-11 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
        </svg>
        <svg className="absolute bottom-16 left-[25%] w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3v18M3 12h18" />
        </svg>
      </div>

      <div className="relative w-full px-4 sm:px-6 pt-12 sm:pt-16 pb-12 sm:pb-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Kids Decorations
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
            Hear from our happy Students! See how we&apos;ve helped them achieve their goals and create lasting impact.
          </p>
        </div>

        {/* Carousel - center image full, left/right partial with gradient overlay */}
        <div ref={containerRef} className="relative w-full max-w-[95vw] mx-auto overflow-hidden rounded-2xl h-[45vw] max-h-[500px] min-h-[280px]">
          {/* Left gradient overlay - fades the partial left image */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgba(236, 72, 153, 0.9) 0%, rgba(236, 72, 153, 0.4) 40%, transparent 100%)",
            }}
          />

          {/* Right gradient overlay - fades the partial right image */}
          <div
            className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, rgba(147, 51, 234, 0.9) 0%, rgba(147, 51, 234, 0.4) 40%, transparent 100%)",
            }}
          />

          {/* Left nav - white outline circle, overlaps left gradient */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center transition-opacity ${
              canScrollLeft ? "opacity-100 cursor-pointer hover:bg-white/10" : "opacity-40 cursor-default pointer-events-none"
            }`}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Right nav - white outline circle, overlaps right gradient */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center transition-opacity ${
              canScrollRight ? "opacity-100 cursor-pointer hover:bg-white/10" : "opacity-40 cursor-default pointer-events-none"
            }`}
            aria-label="Scroll right"
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Scrollable carousel - cards show partial left/right */}
          <div
            ref={scrollRef}
            className="h-full overflow-x-auto overflow-y-hidden scrollbar-hide flex gap-4 px-14 sm:px-16"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              scrollSnapType: "x mandatory",
            }}
          >
            {CAROUSEL_IMAGES.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[85%] min-w-[85%] h-full rounded-xl overflow-hidden scroll-snap-center"
              >
                <img
                  src={item.image}
                  alt="Kids decoration"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SEE ALL button - centered with balanced gap above and below, fully within gradient section */}
        <div className="flex justify-center items-center w-full py-8 sm:py-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-12 py-4 rounded-full font-semibold text-sm uppercase tracking-wide text-gray-900 shadow-lg hover:shadow-xl transition-shadow shrink-0"
            style={{
              background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #ec4899, #9333ea) border-box",
              border: "2px solid transparent",
            }}
          >
            SEE ALL
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
