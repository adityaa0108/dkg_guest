"use client";

import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PRODUCT_PAGE = "/product/blue-themed-welcome-baby-room-decor";

const slides = [
  { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1872&h=826&fit=crop" },
  { image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1872&h=826&fit=crop" },
  { image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1872&h=826&fit=crop" },
  { image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1872&h=826&fit=crop" },
  { image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1872&h=826&fit=crop" },
];

const HeroSection = () => {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({ delay: 4000, stopOnInteraction: true }),
      WheelGesturesPlugin(),
    ]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const handleSlideClick = () => {
    router.push(PRODUCT_PAGE);
  };

  return (
    <div className="relative w-full h-[44.9vw] flex items-center justify-center">
      <div className="relative w-full max-w-[97.5vw] h-[43.02vw] px-[1.25vw]">
        <div className="relative w-full h-full rounded-[1.67vw] overflow-hidden">
          <div ref={emblaRef} className="overflow-hidden h-full touch-pan-x cursor-grab active:cursor-grabbing select-none">
            <div className="flex h-full -ml-0">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-0 cursor-pointer"
                  onClick={handleSlideClick}
                >
                  <div className="relative w-full h-[43.02vw]">
                    <img
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover object-center pointer-events-none select-none block"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev/Next buttons */}
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-[0.5vw] top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm shadow-md hover:bg-white disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-[0.5vw] top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm shadow-md hover:bg-white disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Book Now Button */}
        <div className="absolute -bottom-[1.46vw] left-1/2 transform -translate-x-1/2 z-20">
          <a
            href={PRODUCT_PAGE}
            className="inline-block px-[2.5vw] h-[3.33vw] bg-gradient-to-l from-purple-500 to-pink-500 rounded-full outline outline-[0.52vw] outline-white hover:scale-105 active:scale-95 transition-transform duration-300 shadow-2xl flex items-center justify-center"
            aria-label="Book now"
          >
            <span className="text-white text-[1.04vw] font-medium uppercase tracking-wide whitespace-nowrap">
              Book Now
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
