"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const PRODUCT_PAGE = '/product/blue-themed-welcome-baby-room-decor';

const HeroSection = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const autoPlayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Array of slide data with images and links
  const slides = [
    { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1872&h=826&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1872&h=826&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1872&h=826&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1872&h=826&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1872&h=826&fit=crop' },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isHovering && !isDragging) {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 4000);
      
      return () => {
        if (autoPlayIntervalRef.current) {
          clearInterval(autoPlayIntervalRef.current);
        }
      };
    }
    
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isHovering, isDragging, slides.length]);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - translateX);
    e.preventDefault();
  }, [translateX]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX - startX;
    setTranslateX(x);
  }, [isDragging, startX]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const threshold = 100;
    
    if (translateX > threshold) {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (translateX < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }
    
    setTranslateX(0);
  }, [isDragging, translateX, slides.length]);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - translateX);
  }, [translateX]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - startX;
    setTranslateX(x);
  }, [isDragging, startX]);

  const handleTouchEnd = useCallback(() => {
    handleMouseUp();
  }, [handleMouseUp]);

  const handleSlideClick = useCallback(() => {
    if (Math.abs(translateX) < 10 && !isDragging) {
      router.push(PRODUCT_PAGE);
    }
  }, [translateX, isDragging, router]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    if (isDragging) {
      handleMouseUp();
    }
  }, [isDragging, handleMouseUp]);

  return (
    <div className="relative w-full h-[44.9vw] flex items-center justify-center">
      <div className="relative w-full max-w-[97.5vw] h-[43.02vw] px-[1.25vw]">
        <div
          ref={containerRef}
          className="relative w-full h-full rounded-[1.67vw] overflow-hidden cursor-grab active:cursor-grabbing select-none isolate"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides Container - each slide is exactly 100% of viewport width */}
          <div 
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ 
              width: `${slides.length * 100}%`,
              transform: `translateX(calc(-${(currentIndex * 100) / slides.length}% + ${translateX}px))`,
              transition: isDragging ? 'none' : 'transform 0.5s ease-out'
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="h-full relative flex-shrink-0"
                style={{ width: `${100 / slides.length}%` }}
                onClick={handleSlideClick}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover object-center pointer-events-none block"
                  draggable="false"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Book Now Button - Positioned at bottom center with proper overlap */}
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