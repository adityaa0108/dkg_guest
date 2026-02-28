"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIAL_IMAGES = [
  { id: 1, image: "/images/Testimonial-Container.png" },
  { id: 2, image: "/images/Testimonial-Container.png" },
];

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((i) => (i === 0 ? TESTIMONIAL_IMAGES.length - 1 : i - 1));
  };

  const goNext = () => {
    setActiveIndex((i) => (i === TESTIMONIAL_IMAGES.length - 1 ? 0 : i + 1));
  };

  const currentImage = TESTIMONIAL_IMAGES[activeIndex];

  return (
    <section className="w-full max-w-[95vw] sm:max-w-[92vw] mx-auto my-12 sm:my-16 px-4 sm:px-6 lg:px-8">
      <div
        className="rounded-2xl sm:rounded-3xl overflow-hidden p-8 sm:p-10 lg:p-12"
        style={{ backgroundColor: "#F8F5F9" }}
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#9B49C5] mb-3 max-w-3xl mx-auto leading-tight">
            Success Stories That Inspire Confidence in What We Do
          </h2>
          <p className="text-[#B8A4C4] text-sm sm:text-base max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius elementum tristique. Duis cursus, mi quis viverra ut commodo
            diam libero vitae erat.
          </p>
        </div>

        {/* Testimonial card with arrows */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Left arrow */}
          <button
            onClick={goPrev}
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#6B2D4F" }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Card - image only */}
          <div className="flex-1 min-w-0 bg-white rounded-2xl border overflow-hidden">
            <img
              src={currentImage.image}
              alt="Testimonial"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right arrow */}
          <button
            onClick={goNext}
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#6B2D4F" }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
