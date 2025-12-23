/**
 * Category Service - API calls for categories
 */
import apiClient from '@/lib/api-client'
import type { MainCategory, SubCategory, LeafCategory, ApiResponse } from '@/types'

export const categoryService = {
  /**
   * Get all main categories
   */
  getMainCategories: async (): Promise<MainCategory[]> => {
    const response = await apiClient.get<any, ApiResponse<MainCategory[]>>('/categories')
    return response.data || []
  },

  /**
   * Get subcategories by main category slug
   */
  getSubCategories: async (mainCategorySlug: string): Promise<SubCategory[]> => {
    const response = await apiClient.get<any, ApiResponse<SubCategory[]>>(
      `/categories/${mainCategorySlug}`
    )
    return response.data || []
  },

  /**
   * Get leaf categories by sub category slug
   */
  getLeafCategories: async (
    mainCategorySlug: string,
    subCategorySlug: string
  ): Promise<LeafCategory[]> => {
    const response = await apiClient.get<any, ApiResponse<LeafCategory[]>>(
      `/categories/${mainCategorySlug}/${subCategorySlug}`
    )
    return response.data || []
  },

  /**
   * Get full category tree
   */
  getCategoryTree: async (): Promise<{
    mainCategories: MainCategory[]
    subCategories: SubCategory[]
    leafCategories: LeafCategory[]
  }> => {
    // This could be optimized with a single API call
    const mainCategories = await categoryService.getMainCategories()
    
    const subCategoriesPromises = mainCategories.map((main) =>
      categoryService.getSubCategories(main.slug)
    )
    const subCategoriesArrays = await Promise.all(subCategoriesPromises)
    const subCategories = subCategoriesArrays.flat()
    
    const leafCategoriesPromises = subCategories.map((sub) => {
      const main = mainCategories.find((m) => m.id === sub.mainCategoryId)
      return main ? categoryService.getLeafCategories(main.slug, sub.slug) : []
    })
    const leafCategoriesArrays = await Promise.all(leafCategoriesPromises)
    const leafCategories = leafCategoriesArrays.flat()
    
    return { mainCategories, subCategories, leafCategories }
  },
}
