"use client"
import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const services = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=600&fit=crop',
        title: 'Sparklers & Lights'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=600&fit=crop',
        title: 'Custom Cakes'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=600&fit=crop',
        title: 'Balloon Decorations'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=600&fit=crop',
        title: 'Party Supplies'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1464983308776-8f0526bb8e86?w=400&h=600&fit=crop',
        title: 'Photography'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=400&h=600&fit=crop',
        title: 'Venue Setup'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=600&fit=crop',
        title: 'Entertainment'
    }
];

const ServiceCard = ({ service, isHovered, onHover, onLeave }) => {
    return (
        <div
            className=" w-[20vw] h-[28.13vw] relative rounded-[1.67vw] overflow-hidden group cursor-pointer transition-all duration-500"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />

            {/* Top Label - slides down on hover */}
            <div
                className={`absolute left-[0.73vw] w-[20vw] h-[2.5vw] transition-all duration-500 ${isHovered ? 'top-[1.25vw]' : 'top-[-2.6vw]'
                    }`}
            >
                <div className="w-[16.67vw] h-[2.5vw] ml-[1.15vw] bg-gradient-to-l from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                    <div className="text-white text-[0.83vw] font-semibold font-['Inter'] uppercase tracking-wide">
                        {service.title}
                    </div>
                </div>
            </div>

            {/* Bottom Button - slides up on hover */}
            <div
                className={`absolute left-[0.73vw] w-[20vw] h-[2.5vw] transition-all duration-500 ${isHovered ? 'bottom-[1.25vw]' : 'bottom-[-3.23vw]'
                    }`}
            >
                <div className="w-[16.67vw] h-[2.5vw] ml-[1.15vw] bg-gradient-to-l from-purple-500 to-pink-500 rounded-[0.42vw] flex items-center justify-center gap-[0.42vw] shadow-lg hover:shadow-xl transition-shadow">
                    <span className="text-white text-[0.83vw] font-semibold font-['Inter'] uppercase tracking-wide">
                        Explore More
                    </span>
                    <ChevronRight className="w-[1.04vw] h-[1.04vw] text-white" />
                </div>
            </div>
        </div>
    );
};

const ExploreMoreCard = () => {
    return (
        <div className="flex-shrink-0 w-[20vw] h-[28.13vw] bg-gradient-to-l from-purple-500 to-pink-500 rounded-[1.67vw] overflow-hidden flex flex-col items-center justify-center gap-[1.67vw] cursor-pointer hover:shadow-2xl transition-all duration-500 group">
            <div className="text-white text-[2.5vw] font-black font-['Inter'] uppercase tracking-[0.2em] text-center leading-tight group-hover:scale-110 transition-transform duration-500">
                Explore<br />More
            </div>
        </div>
    );
};

export default function BirthdayServicesCarousel() {
    const scrollContainerRef = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            checkScrollPosition();
            return () => container.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 432; // 384px card width + 48px gap
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full min-h-screen bg-neutral-50 flex items-center justify-center p-[1.67vw]">
            <div className="w-full max-w-[87.5vw] bg-neutral-50 rounded-[1.67vw] shadow-[0px_56px_120px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-pink-900/10 p-[2.5vw] relative">

                {/* Header Section */}
                <div className="mb-[2.5vw]">
                    <h1
                        className="w-[37.41vw] justify-center text-[3.13vw] font-bold mb-[1.25vw] leading-[3.65vw] 
               bg-gradient-to-l from-purple-500 to-pink-500 
               bg-clip-text text-transparent"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                        Make Your Birthday Extra Special
                    </h1>

                    <p
                        className="text-[1.25vw] font-normal leading-[1.67vw] w-[31.05vw]  
               bg-gradient-to-l from-purple-500 to-pink-500 
               bg-clip-text text-transparent"
                    >
                        We are thrilled to offer a range of exceptional decoration services tailored to elevate your space.
                    </p>
                </div>
                {/* Carousel Container */}
                <div className="relative">
                    {/* Left Scroll Button */}
                    {canScrollLeft && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[2.5vw] h-[2.5vw] bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 -ml-[1.25vw]"
                            aria-label="Scroll left"
                        >
                            <ChevronRight className="w-[1.25vw] h-[1.25vw] text-purple-500 rotate-180" />
                        </button>
                    )}

                    {/* Right Scroll Button */}
                    {canScrollRight && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[2.5vw] h-[2.5vw] bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 -mr-[1.25vw]"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-[1.25vw] h-[1.25vw] text-purple-500" />
                        </button>
                    )}

                    {/* Scrollable Content */}
                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto overflow-y-hidden scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        <div className="inline-flex gap-[2.5vw] pr-[2.5vw]">
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    isHovered={hoveredCard === service.id}
                                    onHover={() => setHoveredCard(service.id)}
                                    onLeave={() => setHoveredCard(null)}
                                />
                            ))}
                            <ExploreMoreCard />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="flex justify-center gap-[0.42vw] mt-[1.67vw]">
                    {[...Array(Math.ceil((services.length + 1) / 3))].map((_, index) => (
                        <div
                            key={index}
                            className="w-[0.42vw] h-[0.42vw] rounded-full bg-purple-300 transition-all duration-300"
                        />
                    ))}
                </div>
            </div>

            <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
}