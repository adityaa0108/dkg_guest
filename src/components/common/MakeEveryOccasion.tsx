"use client";

import React, { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

const IMAGE_CARDS = [
  {
    id: 1,
    image: "/images/Rectangle 654.png",
    hoverImage: "/images/Rectangle 654 (1).png",
    label: "PRE-WEDDING PHOTOGRAPHY",
  },
  {
    id: 2,
    image: "/images/Rectangle 654 (1).png",
    hoverImage: "/images/Rectangle 654 (2).png",
    label: "PRE-WEDDING PHOTOGRAPHY",
  },
  {
    id: 3,
    image: "/images/Rectangle 654 (2).png",
    hoverImage: "/images/Rectangle 654 (3).png",
    label: "PRE-WEDDING PHOTOGRAPHY",
  },
  {
    id: 4,
    image: "/images/Rectangle 654 (3).png",
    hoverImage: "/images/Container.png",
    label: "PRE-WEDDING PHOTOGRAPHY",
  },
  {
    id: 5,
    image: "/images/Container.png",
    hoverImage: "/images/Rectangle 654.png",
    label: "PRE-WEDDING PHOTOGRAPHY",
  },
];

function ImageCard({
  card,
  isHovered,
  onHover,
  onLeave,
}: {
  card: (typeof IMAGE_CARDS)[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="flex-shrink-0 w-64 sm:w-72 lg:w-80 h-80 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden relative group cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Default image */}
      <img
        src={card.image}
        alt={card.label}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Hover image */}
      <img
        src={card.hoverImage}
        alt={card.label}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Overlay button at bottom - only visible on hover */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
          <span className="text-white text-sm font-semibold uppercase tracking-wide">
            {card.label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MakeEveryOccasion() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="w-full max-w-[95vw] sm:max-w-[92vw] mx-auto my-12 sm:my-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0px_56px_120px_0px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[400px]">
          {/* Left - Fixed content: heading top, button bottom */}
          <div
            className="flex-1 lg:flex-initial lg:w-[45%] xl:w-[40%] p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#FFF8FD] min-h-[320px]"
            style={{ fontFamily: "'Helvetica Rounded', 'Helvetica Neue', system-ui, sans-serif" }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#FF478D] to-[#9A47FF] bg-clip-text text-transparent">
                Make Every Occasion
                <br />
                Extra Special
              </h2>
              <p className="text-[#AD7EB3] text-sm sm:text-base leading-relaxed max-w-md">
                we are thrilled to offer a range of exceptional decoration services
                tailored to elevate your space.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 w-fit px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF478D] to-[#9A47FF] text-white font-medium text-sm uppercase tracking-wide hover:shadow-lg hover:scale-[1.02] transition-all mt-8"
            >
              EXPLORE MORE
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Scrollable images */}
          <div className="flex-1 lg:min-w-0 overflow-hidden">
            <div
              ref={scrollRef}
              className="h-full overflow-x-auto overflow-y-hidden scrollbar-hide flex gap-4 p-6 lg:p-8"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {IMAGE_CARDS.map((card) => (
                <ImageCard
                  key={card.id}
                  card={card}
                  isHovered={hoveredCard === card.id}
                  onHover={() => setHoveredCard(card.id)}
                  onLeave={() => setHoveredCard(null)}
                />
              ))}
            </div>
          </div>
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
