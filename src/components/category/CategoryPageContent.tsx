'use client';

import Link from 'next/link';
import { ProductCard } from '../common/ProductCard';
import type { CategoryPageData, Product } from '@/types/category';

interface CategoryPageContentProps {
  /** Page data - from API or mock. When integrating API, pass fetched data here. */
  data: CategoryPageData;
}

export default function CategoryPageContent({ data }: CategoryPageContentProps) {
  const {
    banner,
    subCategoryCards = [],
    products = [],
    pagination = { page: 1, totalPages: 1 },
  } = data;

  const productPageUrl = (product: Product) =>
    product.slug ? `/product/${product.slug}` : '/product/blue-themed-welcome-baby-room-decor';

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section - with text overlay */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[280px] lg:h-[360px] rounded-2xl overflow-hidden">
            <img
              src={banner.image}
              alt={banner.title || ''}
              className="w-full h-full object-cover"
            />
            {(banner.title || banner.subtitle) && (
              <>
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center px-6 lg:px-16">
                  <div className="max-w-2xl">
                    {banner.title && (
                      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3">
                        {banner.title}
                      </h1>
                    )}
                    {banner.subtitle && (
                      <p className="text-white/90 text-base lg:text-lg">{banner.subtitle}</p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Subcategory cards - placeholder or from API */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {subCategoryCards.length > 0
            ? subCategoryCards.map((card) => (
                <div
                  key={card.id}
                  className="aspect-[4/3] rounded-xl bg-pink-100 border border-pink-200 min-h-0 overflow-hidden"
                >
                  {card.image ? (
                    <img src={card.image} alt={card.title || ''} className="w-full h-full object-cover" />
                  ) : null}
                </div>
              ))
            : [...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl bg-pink-100 border border-pink-200 min-h-0"
                />
              ))}
        </div>

        {/* Filter Button */}
        <div className="mb-8">
          <button className="h-14 px-6 bg-white rounded-2xl border-2 border-pink-900 inline-flex items-center gap-3 hover:bg-pink-50 transition-colors shadow-sm">
            <img src="/products/filter.svg" alt="Filter" className="w-5 h-5" />
            <span className="text-pink-900 text-base font-semibold">Filter</span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={productPageUrl(product)} className="block">
              <ProductCard product={product} compact />
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <button
            disabled={pagination.page <= 1}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ←
          </button>
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                page === pagination.page
                  ? 'bg-purple-500 text-white'
                  : 'border border-gray-300 hover:bg-gray-50 text-gray-600'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            disabled={pagination.page >= pagination.totalPages}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
