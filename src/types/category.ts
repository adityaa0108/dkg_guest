/**
 * Shared types for category pages. Designed to match typical API response shapes
 * for easy integration later.
 */

export interface Product {
  id: string | number;
  slug?: string;
  image: string;
  title: string;
  rating: number;
  price: number;
  originalPrice: number;
  discount: number;
}

export interface SubCategoryCard {
  id: string;
  image?: string;
  title?: string;
  slug?: string;
}

export interface PaginationInfo {
  page: number;
  totalPages: number;
  totalItems?: number;
}

export interface CategoryBanner {
  image: string;
  title?: string;
  subtitle?: string;
}

export interface SubCategoryItemPageData {
  mainCategory: string;
  subCategory: string;
  itemSlug: string;
  banner: CategoryBanner;
  subCategoryCards?: SubCategoryCard[];
  products: Product[];
  pagination?: PaginationInfo;
}

export interface CategoryPageData {
  slug: string;
  banner: CategoryBanner;
  subCategoryCards?: SubCategoryCard[];
  products: Product[];
  pagination?: PaginationInfo;
}
