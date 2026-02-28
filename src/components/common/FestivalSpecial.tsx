"use client";

import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  { id: 3, src: "/images/Image (3).png", alt: "Festival decoration" },
  { id: 4, src: "/images/Image (4).png", alt: "Festival celebration" },
  { id: 5, src: "/images/Image (5).png", alt: "Festival lights" },
  { id: 6, src: "/images/Image (6).png", alt: "Festival colors" },
  { id: 7, src: "/images/Image (3).png", alt: "Festival decoration" },
];

export default function FestivalSpecial() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full max-w-[95vw] sm:max-w-[92vw] mx-auto my-12 sm:my-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)] overflow-hidden p-8 sm:p-10 lg:p-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#A052D2] mb-3">
            Make Every Festival Special
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
            we are thrilled to offer a range of exceptional decoration services
            tailored to elevate your space.
          </p>
        </div>

        {/* Top wide image */}
        <div className="w-full rounded-xl overflow-hidden mb-6 sm:mb-8">
          <img
            src="/images/Image Placeholder.png"
            alt="Festival decoration"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Scrollable gallery */}
        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide flex gap-4 pb-2 -mx-1"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="group flex-shrink-0 w-48 sm:w-56 lg:w-64 aspect-square rounded-xl overflow-hidden relative cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay with buttons */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between items-center py-4 px-3">
                {/* Top pill - PHOTOGRAPHY */}
                <span
                  className="festival-pill festival-pill-top px-5 py-2 text-white text-xs font-semibold tracking-wider whitespace-nowrap"
                  style={{
                    background: "linear-gradient(90deg, #EC4899 0%, #A855F7 100%)",
                  }}
                >
                  PHOTOGRAPHY
                </span>
                {/* Bottom pill - EXPLORE MORE */}
                <a
                  href="#"
                  className="festival-pill festival-pill-bottom px-5 py-2 text-white text-xs font-semibold tracking-wider whitespace-nowrap flex items-center gap-1.5"
                  style={{
                    background: "linear-gradient(90deg, #EC4899 0%, #A855F7 100%)",
                  }}
                >
                  EXPLORE MORE
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* EXPLORE MORE link */}
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-600 font-medium text-sm sm:text-base hover:text-gray-900 transition-colors"
          >
            EXPLORE MORE
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Pill shape - top: inward curve bottom-left, outward curve top-right */
        .festival-pill-top {
          border-radius: 9999px 28px 16px 9999px;
        }
        /* Pill shape - bottom: inward curve top-left, outward curve bottom-right */
        .festival-pill-bottom {
          border-radius: 16px 9999px 9999px 28px;
        }
      `}</style>
    </section>
  );
}
