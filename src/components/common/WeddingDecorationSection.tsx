'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ProductCard, type Product } from './ProductCard';

const WEDDING_PRODUCTS: Product[] = [
  {
    id: 201,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=1000&fit=crop',
    title: 'Carnival Fun Birthday Decor',
    rating: 4.5,
    price: 2499,
    originalPrice: 9999,
    discount: 24,
  },
  {
    id: 202,
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=1000&fit=crop',
    title: 'Wild West Birthday Decor',
    rating: 4.8,
    price: 2499,
    originalPrice: 9999,
    discount: 24,
  },
  {
    id: 203,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1000&fit=crop',
    title: 'Rockstar Music Birthday Decor',
    rating: 4.0,
    price: 2499,
    originalPrice: 9999,
    discount: 24,
  },
  {
    id: 204,
    image: 'https://images.unsplash.com/photo-1464369095431-e9a21285b5f3?w=800&h=1000&fit=crop',
    title: 'Mad Scientist Birthday Decor',
    rating: 4.0,
    price: 2499,
    originalPrice: 9999,
    discount: 24,
  },
];

export default function WeddingDecorationSection() {
  return (
    <section className="py-12 lg:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
              Wedding Decoration
            </h2>
            <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto">
              we are thrilled to offer a range of exceptional decoration services tailored to elevate your space.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WEDDING_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products/wedding-decoration"
              className="inline-flex items-center gap-2 text-gray-800 font-semibold hover:text-purple-600 transition-colors"
            >
              EXPLORE MORE
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
