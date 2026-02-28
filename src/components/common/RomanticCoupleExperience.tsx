"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="w-4 h-4">
            {star <= fullStars ? (
              <svg viewBox="0 0 20 20" fill="#FCD34D" className="w-full h-full">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ) : star === fullStars + 1 && hasHalfStar ? (
              <svg viewBox="0 0 20 20" className="w-full h-full">
                <defs>
                  <linearGradient id="half-star-romantic">
                    <stop offset="50%" stopColor="#FCD34D" />
                    <stop offset="50%" stopColor="#E4E4E7" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#half-star-romantic)"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="#E4E4E7" className="w-full h-full">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <span className="text-white text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function RomanticCoupleExperience() {
  return (
    <section className="w-full max-w-[95vw] sm:max-w-[92vw] mx-auto my-12 sm:my-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0px_56px_120px_0px_rgba(0,0,0,0.15)] overflow-hidden p-8 sm:p-10 lg:p-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Romantic Couple Experience
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            we are thrilled to offer a range of exceptional decoration services
            tailored to elevate your space.
          </p>
        </div>

        {/* Content Grid: 1 large left, 3 stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left - Large block with overlay */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-lg min-h-[320px]">
            <img
              src="/images/Image%20Container.png"
              alt="Romantic experience"
              className="w-full h-full min-h-[320px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
                Minnie Mouse Themed Birthday Party
              </h3>
              <p className="text-sm text-white/90 mb-4 max-w-xl">
                Learn planning, coordination, and leadership skills to manage
                projects effectively.
              </p>
              <StarRating rating={4.0} />
            </div>
          </div>

          {/* Right - 3 blocks stacked */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex-1 min-h-[140px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/Image.png"
                alt="Couple experience"
                className="w-full h-full min-h-[140px] object-cover"
              />
            </div>
            <div className="flex-1 min-h-[140px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/Image%20(1).png"
                alt="Couple in field"
                className="w-full h-full min-h-[140px] object-cover"
              />
            </div>
            <a
              href="#"
              className="flex-1 min-h-[100px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center gap-2 hover:shadow-xl transition-shadow"
            >
              <span className="text-white font-bold text-sm sm:text-base uppercase tracking-wide">
                EXPLORE MORE
              </span>
              <ChevronRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
