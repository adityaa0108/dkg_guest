"use client";

import React, { useState } from "react";
import { Heart, ChevronRight } from "lucide-react";

const PACKAGES = [
  {
    id: 1,
    title: "Minnie Mouse Themed Birthday Party",
    description:
      "Learn planning, coordination, and leadership skills to manage projects effectively.",
    rating: 4.0,
    image: "/images/Rectangle 654.png",
  },
  {
    id: 2,
    title: "Minnie Mouse Themed Birthday Party",
    description:
      "Learn planning, coordination, and leadership skills to manage projects effectively.",
    rating: 4.0,
    image: "/images/Rectangle 654 (1).png",
  },
  {
    id: 3,
    title: "Minnie Mouse Themed Birthday Party",
    description:
      "Learn planning, coordination, and leadership skills to manage projects effectively.",
    rating: 4.0,
    image: "/images/Rectangle 654 (2).png",
  },
  {
    id: 4,
    title: "Minnie Mouse Themed Birthday Party",
    description:
      "Learn planning, coordination, and leadership skills to manage projects effectively.",
    rating: 4.0,
    image: "/images/Rectangle 654 (3).png",
  },
];

const BANNER_IMAGE = "/images/Rectangle 654.png";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="w-4 h-4 sm:w-5 sm:h-5">
            {star <= fullStars ? (
              <svg viewBox="0 0 20 20" fill="#FCD34D" className="w-full h-full">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="#E4E4E7" className="w-full h-full">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <span className="text-sm text-gray-400">{rating.toFixed(1)}</span>
    </div>
  );
}

function ServiceCard({
  package: pkg,
  isFavorite,
  onToggleFavorite,
}: {
  package: (typeof PACKAGES)[0];
  isFavorite: boolean;
  onToggleFavorite: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row min-h-[280px]">
      {/* Left: Text content */}
      <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-purple-300">
            AT YOUR LOCATION
          </p>
          <h3 className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 leading-tight">
            {pkg.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {pkg.description}
          </p>
          <StarRating rating={pkg.rating} />
        </div>

        <div className="flex items-center gap-3 mt-6">
          <button className="flex-1 min-w-[140px] py-3 px-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center gap-2 text-white font-semibold text-sm uppercase tracking-wide">
            BOOK NOW
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
          </button>
          <button
            onClick={onToggleFavorite}
            className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
            aria-label="Add to favorites"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-pink-500 stroke-pink-500" : "stroke-gray-400"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full lg:w-[45%] lg:min-w-[280px] h-48 lg:h-auto lg:min-h-[280px] flex-shrink-0">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default function LevelUp() {
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full max-w-[90vw] sm:max-w-[87.5vw] mx-auto my-8 sm:my-12 bg-neutral-50 rounded-2xl sm:rounded-3xl shadow-[0px_56px_120px_0px_rgba(0,0,0,0.15)] overflow-hidden p-5 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Level Up Your Birthday Party
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl">
            we are thrilled to offer a range of exceptional decoration services
            tailored to elevate your space.
          </p>
        </div>

        {/* Banner */}
        <div className="mb-8 sm:mb-12 rounded-xl sm:rounded-2xl overflow-hidden">
          <img
            src={BANNER_IMAGE}
            alt="Birthday party decoration with balloons and celebration"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
          />
        </div>

        {/* Cards: each card = text left | image right */}
        <div className="space-y-6 sm:space-y-8">
          {PACKAGES.map((pkg) => (
            <ServiceCard
              key={pkg.id}
              package={pkg}
              isFavorite={!!favorites[pkg.id]}
              onToggleFavorite={() => toggleFavorite(pkg.id)}
            />
          ))}
        </div>

        {/* Explore More */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-500 text-sm sm:text-base font-medium uppercase tracking-wide hover:text-gray-700 transition-colors"
          >
            Explore More
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
