/**
 * Category API - Fetch category and subcategory page data.
 * Replace mock implementations with actual API calls when backend is ready.
 */

import type { SubCategoryItemPageData, CategoryPageData } from '@/types/category';
import { productsData } from '@/lib/mock/products';

const BANNER_IMAGE = '/images/Frame-2147224979 1.png';

const CATEGORY_HERO_IMAGES: Record<string, string> = {
  anniversary: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1872&h=500&fit=crop',
  birthdays: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1872&h=500&fit=crop',
  'candlelight-dinners': 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1872&h=500&fit=crop',
  decorations: 'https://images.unsplash.com/photo-1464369095431-e9a21285b5f3?w=1872&h=500&fit=crop',
  festivals: 'https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=1872&h=500&fit=crop',
  'kids-celebrations': 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1872&h=500&fit=crop',
  'home-decoration': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1872&h=500&fit=crop',
  'corporate-events': 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1872&h=500&fit=crop',
  'tent-services': 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1872&h=500&fit=crop',
};

const DEFAULT_HERO = 'https://images.unsplash.com/photo-1464369095431-e9a21285b5f3?w=1872&h=500&fit=crop';

/**
 * Fetch subcategory item page data.
 * TODO: Replace with: const res = await apiClient.get(`/categories/${mainCategory}/${subCategory}/${itemSlug}`); return res.data;
 */
export async function getSubCategoryItemData(
  mainCategory: string,
  subCategory: string,
  itemSlug: string
): Promise<SubCategoryItemPageData> {
  // Mock - replace with API call
  const isMainCategory = mainCategory === subCategory && subCategory === itemSlug;
  const heroImage = isMainCategory
    ? (CATEGORY_HERO_IMAGES[mainCategory] || DEFAULT_HERO)
    : BANNER_IMAGE;

  return {
    mainCategory,
    subCategory,
    itemSlug,
    banner: { image: heroImage },
    subCategoryCards: [...Array(8)].map((_, i) => ({
      id: `card-${i}`,
    })),
    products: productsData,
    pagination: { page: 1, totalPages: 2, totalItems: 16 },
  };
}

/**
 * Fetch category page data (main or subcategory).
 * TODO: Replace with: const res = await apiClient.get(`/categories/${slug}`); return res.data;
 */
export async function getCategoryData(slug: string): Promise<CategoryPageData> {
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const heroImage = CATEGORY_HERO_IMAGES[slug] || DEFAULT_HERO;

  return {
    slug,
    banner: {
      image: heroImage,
      title,
      subtitle: 'Learn planning, coordination, and leadership skills to manage projects effectively.',
    },
    subCategoryCards: [...Array(8)].map((_, i) => ({ id: `card-${i}` })),
    products: productsData,
    pagination: { page: 1, totalPages: 2, totalItems: 16 },
  };
}
