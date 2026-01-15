import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const cardsData = [
    {
        id: 1,
        tag: "Diwali",
        title: "Designed to Deliver Real Value and Tangible Results",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1824&h=659&fit=crop",
        alt: "Diwali Decorative Lamps"
    },
    {
        id: 2,
        tag: "Christmas",
        title: "Celebrate the Season with Exclusive Holiday Collections",
        image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1824&h=659&fit=crop",
        alt: "Christmas Decorations"
    },
    {
        id: 3,
        tag: "Summer Sale",
        title: "Beat the Heat with Amazing Deals and Fresh Arrivals",
        image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1824&h=659&fit=crop",
        alt: "Summer Beach Scene"
    },
    {
        id: 4,
        tag: "Eid Special",
        title: "Traditional Elegance Meets Modern Style This Festival",
        image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=1824&h=659&fit=crop",
        alt: "Eid Decorations"
    },
    {
        id: 5,
        tag: "Black Friday",
        title: "Unbeatable Deals You Don't Want to Miss This Season",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1824&h=659&fit=crop",
        alt: "Black Friday Sale"
    },
    {
        id: 6,
        tag: "New Year",
        title: "Start Fresh with Our Exclusive New Year Collection",
        image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1824&h=659&fit=crop",
        alt: "New Year Celebration"
    },
    {
        id: 7,
        tag: "Spring Sale",
        title: "Refresh Your Style with Vibrant Spring Collections",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1824&h=659&fit=crop",
        alt: "Spring Flowers"
    },
    {
        id: 8,
        tag: "Holi",
        title: "Celebrate Colors with Our Festive Special Offers",
        image: "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?w=1824&h=659&fit=crop",
        alt: "Holi Colors"
    },
    {
        id: 9,
        tag: "Valentine's Day",
        title: "Express Your Love with Our Curated Gift Collection",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1824&h=659&fit=crop",
        alt: "Valentine's Day"
    }
];

const CardsCategory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;
    const totalPages = Math.ceil(cardsData.length / cardsPerPage);

    const handlePrevious = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    };

    const handleNext = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = cardsData.slice(startIndex, endIndex);

    return (
        <div className="bg-white min-h-screen pb-32 pt-[220px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {currentCards.map((card, index) => (
                    <section 
                        key={card.id} 
                        className={`relative w-full ${index === 0 ? 'pt-16' : 'pt-8'} pb-8 flex items-center justify-center`}
                    >
                        {/* Background Image Container */}
                        <div className="absolute inset-0 w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-[32px]">
                            <img
                                src={card.image}
                                alt={card.alt}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay for better text visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        </div>
                        
                        {/* Content Card - Positioned below the image */}
                        <div className="relative z-10 w-[95%] md:w-[90%] lg:w-[85%] mt-[300px] md:mt-[400px] lg:mt-[500px]">
                            <div className="bg-neutral-50/95 backdrop-blur-sm rounded-[32px] shadow-[2px_2px_80px_0px_rgba(0,0,0,0.15)] p-4 md:p-9">
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
                                    {/* Text Content */}
                                    <div className="flex flex-col justify-center items-start gap-3 flex-1">
                                        {/* Tag */}
                                        <div className="py-1 rounded inline-flex justify-start items-center">
                                            <h2 className="text-pink-900 text-xl md:text-2xl font-semibold uppercase leading-9 tracking-[0.2em]">
                                                {card.tag}
                                            </h2>
                                        </div>

                                        {/* Heading */}
                                        <div className="w-full">
                                            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-9">
                                                {card.title}
                                            </h1>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="flex-shrink-0">
                                        <div
                                            className="group w-full sm:w-60 h-14 p-[2px] rounded-full
                                            bg-gradient-to-l from-purple-500 to-pink-500
                                            transition-all duration-300 ease-in-out
                                            hover:p-0"
                                        >
                                            <button
                                                className="w-full h-full px-9 bg-white rounded-full
                                                hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                                                transition-all duration-300 ease-in-out
                                                flex justify-center items-center gap-2
                                                shadow-md hover:shadow-lg"
                                                aria-label={`See all ${card.tag} offers`}
                                            >
                                                <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:text-white text-base font-semibold uppercase tracking-wide transition-colors duration-300">
                                                    See All
                                                </span>

                                                <ArrowRight className="w-5 h-5 text-purple-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                {/* Pagination */}
                <div className="flex justify-center items-center gap-12 pt-16 pb-12">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="w-16 h-16 rounded-full flex items-center justify-center transition-opacity disabled:opacity-30 disabled:cursor-not-allowed hover:bg-pink-100"
                        aria-label="Previous page"
                    >
                        <ChevronLeft className="w-7 h-7 text-pink-900" strokeWidth={2.67} />
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageClick(page)}
                                className={`w-16 h-16 rounded-full text-3xl font-medium transition-all ${
                                    currentPage === page
                                        ? 'bg-pink-900 text-white'
                                        : 'bg-white text-pink-900 border border-pink-900 hover:bg-pink-50'
                                }`}
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
                        className="w-16 h-16 rounded-full flex items-center justify-center transition-opacity disabled:opacity-30 disabled:cursor-not-allowed hover:bg-pink-100"
                        aria-label="Next page"
                    >
                        <ChevronRight className="w-7 h-7 text-pink-900" strokeWidth={2.67} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardsCategory;