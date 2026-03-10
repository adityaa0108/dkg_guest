/**
 * Mock product data - used by category API and ProductCard.
 * Replace with API fetch when backend is ready.
 */

import type { Product } from '@/types/category';
import { slugify } from '@/utils/format.utils';

const products: Omit<Product, 'slug'>[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=1000&fit=crop", title: "Under the Sea Birthday Decor", rating: 4.0, price: 2499, originalPrice: 9999, discount: 75 },
  { id: 2, image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=1000&fit=crop", title: "Unicorn Theme Party Package", rating: 4.8, price: 3299, originalPrice: 12999, discount: 75 },
  { id: 3, image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=1000&fit=crop", title: "Superhero Adventure Setup", rating: 4.5, price: 2899, originalPrice: 10999, discount: 74 },
  { id: 4, image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&h=1000&fit=crop", title: "Princess Castle Decor Bundle", rating: 4.9, price: 3799, originalPrice: 14999, discount: 75 },
  { id: 5, image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=1000&fit=crop", title: "Dinosaur Park Theme Set", rating: 4.6, price: 2699, originalPrice: 10499, discount: 74 },
  { id: 6, image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=1000&fit=crop", title: "Magical Fairy Garden Kit", rating: 4.7, price: 3499, originalPrice: 13499, discount: 74 },
  { id: 7, image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1000&fit=crop", title: "Space Explorer Party Pack", rating: 4.4, price: 2999, originalPrice: 11499, discount: 74 },
  { id: 8, image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=1000&fit=crop", title: "Jungle Safari Adventure", rating: 4.3, price: 2799, originalPrice: 10799, discount: 74 },
  { id: 9, image: "https://images.unsplash.com/photo-1481162854517-d9e353af153d?w=800&h=1000&fit=crop", title: "Rainbow Carnival Celebration", rating: 4.9, price: 3599, originalPrice: 13999, discount: 74 },
  { id: 10, image: "https://images.unsplash.com/photo-1530047625168-4b29bfbc2c4d?w=800&h=1000&fit=crop", title: "Frozen Ice Palace Theme", rating: 4.8, price: 3899, originalPrice: 14899, discount: 74 },
  { id: 11, image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=1000&fit=crop", title: "Pirate Treasure Hunt Set", rating: 4.5, price: 3199, originalPrice: 12299, discount: 74 },
  { id: 12, image: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?w=800&h=1000&fit=crop", title: "Candy Land Sweet Party", rating: 4.7, price: 2899, originalPrice: 11199, discount: 74 },
  { id: 13, image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&h=1000&fit=crop", title: "Racing Car Champion Theme", rating: 4.6, price: 3299, originalPrice: 12699, discount: 74 },
  { id: 14, image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop", title: "Mermaid Lagoon Wonderland", rating: 4.9, price: 3999, originalPrice: 15299, discount: 74 },
  { id: 15, image: "https://images.unsplash.com/photo-1482928448487-a5e0fc32d2e9?w=800&h=1000&fit=crop", title: "Circus Big Top Extravaganza", rating: 4.4, price: 3399, originalPrice: 13099, discount: 74 },
];

export const productsData: Product[] = products.map((p) => ({
  ...p,
  slug: slugify(p.title),
}));

/** Resolve product ID from slug for exclusion (e.g. Recently Viewed) */
export function getProductIdBySlug(slug: string): number | null {
  const product = productsData.find((p) => p.slug === slug);
  return product ? (product.id as number) : null;
}
