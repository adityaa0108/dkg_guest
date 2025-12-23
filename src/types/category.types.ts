/**
 * Category Types
 * Represents the three-level category hierarchy
 */

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  imageUrl?: string
  parentId?: string | null
  level: 'main' | 'sub' | 'category'
  order: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface MainCategory extends Category {
  level: 'main'
  parentId: null
  subCategories?: SubCategory[]
}

export interface SubCategory extends Category {
  level: 'sub'
  parentId: string
  mainCategoryId: string
  categories?: LeafCategory[]
}

export interface LeafCategory extends Category {
  level: 'category'
  parentId: string
  subCategoryId: string
  mainCategoryId: string
}

/**
 * Category Navigation Tree
 * Used for building the navigation menu
 */
export interface CategoryTree {
  main: MainCategory
  subs: {
    [subCategoryId: string]: SubCategory & {
      categories: LeafCategory[]
    }
  }
}

/**
 * Category Breadcrumb
 */
export interface CategoryBreadcrumb {
  main?: MainCategory
  sub?: SubCategory
  category?: LeafCategory
}
