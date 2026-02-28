"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const WEDDING_CARDS = [
  { id: 1, image: "/images/Rectangle 654.png", label: "Mehndi" },
  { id: 2, image: "/images/Rectangle 654 (1).png", label: "Mehndi" },
  { id: 3, image: "/images/Rectangle 654 (2).png", label: "Mehndi" },
  { id: 4, image: "/images/Rectangle 654 (3).png", label: "Mehndi" },
];

function WeddingCard({
  card,
  isHovered,
  onHover,
  onLeave,
}: {
  card: (typeof WEDDING_CARDS)[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="relative flex-1 min-w-[200px] aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <img
        src={card.image}
        alt={card.label}
        className="w-full h-full object-cover transition-all duration-300"
      />
      {/* Dark overlay on hover - dims the image */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Hover button - pill shape, centered, 70% of card width */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-[70%] min-w-[120px] max-w-[220px] transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
        style={{ bottom: "2rem" }}
      >
        <div className="w-full py-3.5 px-6 rounded-full bg-white shadow-sm flex items-center justify-center">
          <span className="text-[#5C2D91] font-medium text-base">
            {card.label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function WeddingExtraSpecial() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="w-full max-w-[95vw] sm:max-w-[92vw] mx-auto my-12 sm:my-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FFF8FD] rounded-2xl sm:rounded-3xl shadow-lg p-8 sm:p-10 lg:p-12">
        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          style={{ fontFamily: "'Helvetica Rounded', 'Helvetica Neue', system-ui, sans-serif" }}
        >
          Make Your&apos;s Wedding Extra Special
        </h2>
        <p className="text-center text-[#AD7EB3] text-sm sm:text-base max-w-2xl mx-auto mb-10">
          we are thrilled to offer a range of exceptional decoration services
          tailored to elevate your space.
        </p>

        {/* Image cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {WEDDING_CARDS.map((card) => (
            <WeddingCard
              key={card.id}
              card={card}
              isHovered={hoveredCard === card.id}
              onHover={() => setHoveredCard(card.id)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>

        {/* EXPLORE MORE button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white shadow-md text-gray-900 font-medium text-sm uppercase tracking-wide hover:shadow-lg transition-shadow"
          >
            EXPLORE MORE
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
