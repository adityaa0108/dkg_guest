import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Expand, ShoppingCart, ArrowRight } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import type { Product } from '@/types/category';

const getProductUrl = (product: Product) =>
  product.slug ? `/product/${product.slug}` : '/product/blue-themed-welcome-baby-room-decor';
import { productsData } from '@/lib/mock/products';

export type { Product };
export { productsData };

interface FilterButtonProps {
  onClick: () => void;
}

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

const FilterButton = ({ onClick }: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="h-16 px-8 py-5 bg-white rounded-2xl border-[1.37px] border-pink-900 inline-flex justify-start items-center gap-4 hover:bg-pink-50 transition-all duration-200 hover:shadow-lg"
    >
      <img src="/products/filter.svg" alt="Filter" className="w-6 h-6" />
      <div className="text-center justify-start text-pink-900 text-2xl font-normal font-['Inter'] leading-[79px]">Filter</div>
    </button>
  );
};

export const ProductCard = ({ product, compact = false }: ProductCardProps) => {
  const productUrl = getProductUrl(product);

  if (compact) {
    return (
      <div className="w-full flex flex-col bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-100 cursor-pointer group">
        <Link href={productUrl} className="w-full aspect-[3/4] relative bg-neutral-100 overflow-hidden block">
          <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={product.image} alt={product.title} />
          <div className="absolute right-2 top-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button type="button" onClick={(e) => e.stopPropagation()} className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-pink-50 shadow-md"><Heart className="w-4 h-4 text-pink-500" /></button>
            <button type="button" onClick={(e) => e.stopPropagation()} className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 shadow-md"><Expand className="w-4 h-4 text-gray-800" /></button>
            <button type="button" onClick={(e) => e.stopPropagation()} className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 shadow-md"><ShoppingCart className="w-4 h-4 text-gray-800" /></button>
          </div>
        </Link>
        <div className="p-4 flex flex-col gap-3">
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((s) => (
              <svg key={s} className="w-4 h-4" viewBox="0 0 20 20" fill="#FCD34D"><path d="M10 1.66797L12.575 6.88464L18.3333 7.7263L14.1667 11.7763L15.15 17.5013L10 14.808L4.85 17.5013L5.83333 11.7763L1.66667 7.7263L7.425 6.88464L10 1.66797Z" /></svg>
            ))}
            <span className="text-black text-sm font-semibold">{product.rating}</span>
          </div>
          <h2 className="text-black text-sm font-bold leading-tight line-clamp-2">{product.title}</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-black text-base font-semibold">₹{product.price}/-</span>
            <span className="text-zinc-400 text-sm line-through">₹{product.originalPrice}</span>
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-r-full">{product.discount}% OFF</span>
          </div>
          <Link href={productUrl} className="w-full h-10 px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center gap-2 text-white text-sm font-semibold uppercase hover:shadow-lg transition-all">
            Book Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full pb-[0.83vw] rounded-[1.67vw] inline-flex flex-col justify-start items-start gap-[0.83vw] bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 cursor-pointer group">
      {/* Image Section - clickable */}
      <Link href={productUrl} className="self-stretch aspect-[4/3] relative bg-neutral-100 rounded-tl-[1.67vw] rounded-tr-[1.67vw] overflow-hidden block">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={product.image}
          alt={product.title}
        />

        {/* Action Buttons - Only visible on hover */}
        <div className="absolute right-[1.25vw] top-[1.25vw] flex flex-col justify-start items-start gap-[0.63vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Heart Button */}
          <button type="button" onClick={(e) => e.stopPropagation()} className="w-[2.5vw] h-[2.5vw] bg-white rounded-full flex items-center justify-center hover:bg-pink-50 hover:scale-110 transition-all duration-200 shadow-md">
            <Heart className="w-[1.04vw] h-[1.04vw] text-pink-500" />
          </button>

          {/* Expand Button */}
          <button type="button" onClick={(e) => e.stopPropagation()} className="w-[2.5vw] h-[2.5vw] bg-white rounded-full flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all duration-200 shadow-md">
            <Expand className="w-[1.04vw] h-[1.04vw] text-gray-800" />
          </button>

          {/* Add to Cart Button */}
          <button type="button" onClick={(e) => e.stopPropagation()} className="w-[2.5vw] h-[2.5vw] bg-white rounded-full flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all duration-200 shadow-md">
            <ShoppingCart className="w-[1.04vw] h-[1.04vw] text-gray-800" />
          </button>
        </div>
      </Link>

      {/* Content Section */}
      <div className="self-stretch px-[0.83vw] flex justify-start items-center gap-[0.42vw]">
        <div className="w-full flex flex-col justify-start items-start gap-[1.04vw]">
          {/* Rating */}
          <div className="flex justify-center items-center gap-[0.63vw]">
            <div className="flex justify-start items-center gap-[0.42vw]">
              {[1, 2, 3, 4].map((star) => (
                <svg
                  key={star}
                  className="w-[1.04vw] h-[1.04vw]"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.66797L12.575 6.88464L18.3333 7.7263L14.1667 11.7763L15.15 17.5013L10 14.808L4.85 17.5013L5.83333 11.7763L1.66667 7.7263L7.425 6.88464L10 1.66797Z"
                    fill="#FCD34D"
                    stroke="#FCD34D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ))}
            </div>
            <div className="text-black text-[0.83vw] font-semibold font-sans leading-[0.83vw]">
              {product.rating}
            </div>
          </div>

          {/* Title */}
          <div className="self-stretch flex flex-col justify-start items-start gap-[0.63vw]">
            <h2 className="self-stretch text-black text-[1.25vw] font-bold tracking-wide">
              {product.title}
            </h2>

            {/* Price Section */}
            <div className="flex justify-start items-center gap-[0.52vw]">
              <div className="text-black text-[1.56vw] font-semibold font-sans">
                ₹{product.price}/-
              </div>
              <div className="text-zinc-400 text-[1.04vw] font-normal font-sans line-through leading-[1.25vw]">
                ₹{product.originalPrice}
              </div>
              <div className="h-[1.67vw] px-[0.83vw] bg-gradient-to-r from-lime-500/0 to-lime-500/30 rounded-tr-[2.6vw] rounded-br-[2.6vw] flex items-center justify-center">
                <div className="text-[#208400] text-[1.04vw] font-semibold font-sans leading-[1.25vw]">
                  {product.discount}%OFF
                </div>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <Link href={productUrl} className="h-[2.5vw] px-[1.67vw] py-[0.63vw] bg-gradient-to-l from-purple-500 to-pink-500 rounded-[5.21vw] flex justify-center items-center gap-[0.52vw] overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-purple-600 hover:to-pink-600">
            <span className="text-white text-[1.04vw] font-semibold font-sans uppercase leading-[1.25vw]">
              Book Now
            </span>
            <div className="w-[1.67vw] h-[1.67vw] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-[1.04vw] h-[1.04vw] text-white" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};


const ProductGrid = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;
  const totalPages = Math.ceil(productsData.length / cardsPerPage);

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
  const currentCards = productsData.slice(startIndex, endIndex);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-[3.33vw]">
      <div className="px-[2.5vw]">
        {/* Filter Button at Top Left */}
        <div className="mb-8">
          <FilterButton onClick={() => setShowFilterModal(!showFilterModal)} />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-[2.71vw]">
          {currentCards.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

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
                className={`w-16 h-16 rounded-full text-3xl font-medium transition-all ${currentPage === page
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

export default ProductGrid;