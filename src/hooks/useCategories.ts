/**
 * Custom Hook - useCategories
 * Fetches and manages category data
 */

'use client'

import { useEffect } from 'react'
import { useCategoryStore } from '@/store'
import { categoryService } from '@/services'

export const useCategories = () => {
  const {
    mainCategories,
    subCategories,
    leafCategories,
    categoryTree,
    isLoading,
    error,
    setMainCategories,
    setSubCategories,
    setLeafCategories,
    buildCategoryTree,
    setLoading,
    setError,
  } = useCategoryStore()

  useEffect(() => {
    const fetchCategories = async () => {
      if (mainCategories.length > 0) return // Already loaded

      setLoading(true)
      try {
        const data = await categoryService.getCategoryTree()
        setMainCategories(data.mainCategories)
        setSubCategories(data.subCategories)
        setLeafCategories(data.leafCategories)
        buildCategoryTree()
      } catch (err: any) {
        setError(err.message || 'Failed to fetch categories')
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return {
    mainCategories,
    subCategories,
    leafCategories,
    categoryTree,
    isLoading,
    error,
  }
}
