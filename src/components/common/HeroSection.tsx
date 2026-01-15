"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const autoPlayIntervalRef = useRef(null);

  // Array of slide data with images and links
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1872&h=826&fit=crop',
      link: '#slide1'
    },
    {
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1872&h=826&fit=crop',
      link: '#slide2'
    },
    {
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=1872&h=826&fit=crop',
      link: '#slide3'
    },
    {
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1872&h=826&fit=crop',
      link: '#slide4'
    },
    {
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1872&h=826&fit=crop',
      link: '#slide5'
    }
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
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.pageX - translateX);
    e.preventDefault();
  }, [translateX]);

  const handleMouseMove = useCallback((e) => {
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
  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - translateX);
  }, [translateX]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - startX;
    setTranslateX(x);
  }, [isDragging, startX]);

  const handleTouchEnd = useCallback(() => {
    handleMouseUp();
  }, [handleMouseUp]);

  const handleSlideClick = useCallback((link) => {
    if (Math.abs(translateX) < 10 && !isDragging) {
      window.location.href = link;
    }
  }, [translateX, isDragging]);

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
          className="relative w-full h-full rounded-[1.67vw] overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides Container */}
          <div 
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
              transition: isDragging ? 'none' : 'transform 0.5s ease-out'
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full h-full relative flex-shrink-0"
                onClick={() => handleSlideClick(slide.link)}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable="false"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Book Now Button - Positioned at bottom center with proper overlap */}
        <div className="absolute -bottom-[1.46vw] left-1/2 transform -translate-x-1/2 z-20">
          <button 
            className="px-[2.5vw] h-[3.33vw] bg-gradient-to-l from-purple-500 to-pink-500 rounded-full outline outline-[0.52vw] outline-white hover:scale-105 active:scale-95 transition-transform duration-300 shadow-2xl"
            aria-label="Book now"
          >
            <span className="text-white text-[1.04vw] font-medium uppercase tracking-wide whitespace-nowrap">
              Book Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;