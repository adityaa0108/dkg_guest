'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const VENUE_PAGE_URL = '/venue';

const cardsData = [
    {
        id: 1,
        tag: "Diwali",
        title: "Designed to Deliver Real Value and Tangible Results",
        image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=1824&h=659&fit=crop",
        alt: "Diwali Decorative Lamps"
    },
    {
        id: 2,
        tag: "Christmas",
        title: "Celebrate the Season with Exclusive Holiday Collections",
        image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f316ae?w=1824&h=659&fit=crop",
        alt: "Christmas Decorations"
    },
    {
        id: 3,
        tag: "Summer Sale",
        title: "Beat the Heat with Amazing Deals and Fresh Arrivals",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1824&h=659&fit=crop",
        alt: "Summer Beach Scene"
    },
    {
        id: 4,
        tag: "Eid Special",
        title: "Traditional Elegance Meets Modern Style This Festival",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1824&h=659&fit=crop",
        alt: "Eid Decorations"
    },
    {
        id: 5,
        tag: "Black Friday",
        title: "Unbeatable Deals You Don't Want to Miss This Season",
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1824&h=659&fit=crop",
        alt: "Black Friday Sale"
    },
    {
        id: 6,
        tag: "New Year",
        title: "Start Fresh with Our Exclusive New Year Collection",
        image: "https://images.unsplash.com/photo-1545128485-c400e7702796?w=1824&h=659&fit=crop",
        alt: "New Year Celebration"
    },
    {
        id: 7,
        tag: "Spring Sale",
        title: "Refresh Your Style with Vibrant Spring Collections",
        image: "https://images.unsplash.com/photo-1525310072745-f4e4211456f1?w=1824&h=659&fit=crop",
        alt: "Spring Flowers"
    },
    {
        id: 8,
        tag: "Holi",
        title: "Celebrate Colors with Our Festive Special Offers",
        image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1824&h=659&fit=crop",
        alt: "Holi Colors"
    },
    {
        id: 9,
        tag: "Valentine's Day",
        title: "Express Your Love with Our Curated Gift Collection",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1824&h=659&fit=crop",
        alt: "Valentine's Day"
    }
];

interface CardsCategoryProps {
  compact?: boolean;
}

const CardsCategory = ({ compact = false }: CardsCategoryProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;
    const totalPages = Math.ceil(cardsData.length / cardsPerPage);

    const handlePrevious = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    };

    const handleNext = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = cardsData.slice(startIndex, endIndex);

    const HERO_BANNER_IMAGE =
        'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1920&h=600&fit=crop';

    return (
        <div className={`bg-white min-h-screen pb-32 ${compact ? 'pt-24' : 'pt-[220px]'}`}>
            {/* Hero Banner */}
            <div className="w-full px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="relative w-full h-[240px] sm:h-[320px] lg:h-[400px] rounded-2xl overflow-hidden">
                        <img
                            src={HERO_BANNER_IMAGE}
                            alt="Festive celebrations"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute inset-0 flex items-end px-6 sm:px-10 lg:px-16 pb-8">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                                Festive Collections & Celebrations
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {currentCards.map((card, index) => (
                    <section 
                        key={card.id} 
                        className={`relative w-full ${index === 0 ? (compact ? 'pt-8' : 'pt-16') : 'pt-8'} pb-8 flex items-center justify-center`}
                    >
                        {/* Background Image Container - clickable */}
                        <Link
                            href={VENUE_PAGE_URL}
                            className={`absolute inset-0 w-full overflow-hidden rounded-[32px] block cursor-pointer ${compact ? 'h-[280px] md:h-[360px] lg:h-[420px]' : 'h-[400px] md:h-[500px] lg:h-[600px]'}`}
                        >
                            <img
                                src={card.image}
                                alt={card.alt}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay for better text visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        </Link>
                        
                        {/* Content Card - Positioned below the image */}
                        <div className={`relative z-10 w-[95%] md:w-[90%] lg:w-[85%] ${compact ? 'mt-[200px] md:mt-[280px] lg:mt-[340px]' : 'mt-[300px] md:mt-[400px] lg:mt-[500px]'}`}>
                            <div className={`bg-neutral-50/95 backdrop-blur-sm rounded-[32px] shadow-[2px_2px_80px_0px_rgba(0,0,0,0.15)] ${compact ? 'p-3 md:p-6' : 'p-4 md:p-9'}`}>
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12">
                                    {/* Text Content */}
                                    <div className="flex flex-col justify-center items-start gap-2 flex-1">
                                        {/* Tag */}
                                        <div className="py-1 rounded inline-flex justify-start items-center">
                                            <h2 className={`text-pink-900 font-semibold uppercase tracking-[0.2em] ${compact ? 'text-sm md:text-base' : 'text-xl md:text-2xl leading-9'}`}>
                                                {card.tag}
                                            </h2>
                                        </div>

                                        {/* Heading */}
                                        <div className="w-full">
                                            <h1 className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold leading-tight ${compact ? 'text-base md:text-lg lg:text-xl' : 'text-2xl md:text-3xl lg:text-4xl md:leading-9'}`}>
                                                {card.title}
                                            </h1>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="flex-shrink-0">
                                        <Link
                                            href={VENUE_PAGE_URL}
                                            className={`group block w-full rounded-full ${compact ? 'sm:w-40 h-10' : 'sm:w-60 h-14'} p-[2px] bg-gradient-to-l from-purple-500 to-pink-500 transition-all duration-300 ease-in-out hover:p-0`}
                                        >
                                            <span
                                                className={`w-full h-full bg-white rounded-full ${compact ? 'px-5' : 'px-9'}
                                                hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                                                transition-all duration-300 ease-in-out
                                                inline-flex justify-center items-center gap-2 shadow-md hover:shadow-lg`}
                                                aria-label={`See all ${card.tag} offers`}
                                            >
                                                <span className={`bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:text-white font-semibold uppercase tracking-wide transition-colors duration-300 ${compact ? 'text-sm' : 'text-base'}`}>
                                                    See All
                                                </span>

                                                <ArrowRight className={`text-purple-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 ${compact ? 'w-4 h-4' : 'w-5 h-5'}`} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                {/* Pagination */}
                <div className={`flex justify-center items-center gap-8 pt-12 pb-12 ${compact ? 'gap-6' : 'gap-12'}`}>
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className={`rounded-full flex items-center justify-center transition-opacity disabled:opacity-30 disabled:cursor-not-allowed hover:bg-pink-100 ${compact ? 'w-10 h-10' : 'w-16 h-16'}`}
                        aria-label="Previous page"
                    >
                        <ChevronLeft className={`text-pink-900 ${compact ? 'w-5 h-5' : 'w-7 h-7'}`} strokeWidth={2.67} />
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageClick(page)}
                                className={`rounded-full font-medium transition-all ${
                                    currentPage === page
                                        ? 'bg-pink-900 text-white'
                                        : 'bg-white text-pink-900 border border-pink-900 hover:bg-pink-50'
                                } ${compact ? 'w-10 h-10 text-lg' : 'w-16 h-16 text-3xl'}`}
                                aria-label={`Go to page ${page}`}
                                aria-current={currentPage === page ? 'page' : undefined}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`rounded-full flex items-center justify-center transition-opacity disabled:opacity-30 disabled:cursor-not-allowed hover:bg-pink-100 ${compact ? 'w-10 h-10' : 'w-16 h-16'}`}
                        aria-label="Next page"
                    >
                        <ChevronRight className={`text-pink-900 ${compact ? 'w-5 h-5' : 'w-7 h-7'}`} strokeWidth={2.67} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardsCategory;