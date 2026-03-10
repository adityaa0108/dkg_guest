"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CAROUSEL_IMAGES = [
  { id: 1, image: "/images/Container.png" },
  { id: 2, image: "/images/Container.png" },
  { id: 3, image: "/images/Container.png" },
  { id: 4, image: "/images/Container.png" },
  { id: 5, image: "/images/Container.png" },
];

export default function KidsDecorations() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
      containScroll: "trimSnaps",
    },
    [WheelGesturesPlugin()]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

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

  return (
    <section className="relative z-10 w-full overflow-visible">
      {/* Horizontal gradient - pink left to purple right */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600" />

      <div className="relative w-full px-4 sm:px-6 pt-12 sm:pt-16 pb-12 sm:pb-16 overflow-visible">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Kids Decorations
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
            Hear from our happy Students! See how we&apos;ve helped them achieve their goals and create lasting impact.
          </p>
        </div>

        {/* Carousel - Embla with touch, mouse drag, and wheel scroll */}
        <div className="relative w-full max-w-[95vw] mx-auto overflow-hidden rounded-2xl h-[45vw] max-h-[500px] min-h-[280px]">
          {/* Left gradient overlay */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(236, 72, 153, 0.9) 0%, rgba(236, 72, 153, 0.4) 40%, transparent 100%)",
            }}
          />

          {/* Right gradient overlay */}
          <div
            className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, rgba(147, 51, 234, 0.9) 0%, rgba(147, 51, 234, 0.4) 40%, transparent 100%)",
            }}
          />

          {/* Left nav */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center transition-opacity disabled:opacity-40 disabled:pointer-events-none opacity-100 cursor-pointer hover:bg-white/10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Right nav */}
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center transition-opacity disabled:opacity-40 disabled:pointer-events-none opacity-100 cursor-pointer hover:bg-white/10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Embla Carousel - scrollable by touch, mouse drag, and wheel/trackpad */}
          <div
            ref={emblaRef}
            className="h-full overflow-hidden touch-pan-x cursor-grab active:cursor-grabbing select-none"
          >
            <div className="flex h-full gap-4 px-14 sm:px-16">
              {CAROUSEL_IMAGES.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_85%] shrink-0"
                >
                  <a
                    href="/categories/kids-celebrations"
                    className="block w-full h-full rounded-xl overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt="Kids decoration"
                      className="w-full h-full object-cover"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative image - below carousel, full width */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden flex items-end justify-center">
          <img
            src="/images/Frame 2147224853.svg"
            alt=""
            className="w-[95.39vw] max-w-full object-contain object-bottom"
            aria-hidden
          />
        </div>

        {/* SEE ALL button - half in section, half out, with space from top */}
        <div className="relative z-10 flex justify-center items-center w-full pt-8 sm:pt-12 -mb-[1.5vw]">
          <a
            href="/categories/kids-celebrations"
            className="relative flex items-center gap-[0.42vw] border-2 border-pink-400 text-pink-500 bg-white hover:bg-pink-50 transition-colors duration-200 rounded-full px-[2.92vw] py-[0.83vw] text-[0.68vw] font-bold tracking-[0.13em] cursor-pointer shadow-sm translate-y-1/2"
          >
            SEE ALL <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
