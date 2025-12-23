/**
 * Category Store - Manages category state
 */
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { 
  MainCategory, 
  SubCategory, 
  LeafCategory, 
  CategoryTree,
  CategoryBreadcrumb 
} from '@/types'

interface CategoryState {
  // Data
  mainCategories: MainCategory[]
  subCategories: SubCategory[]
  leafCategories: LeafCategory[]
  categoryTree: Record<string, CategoryTree>
  
  // UI State
  selectedMainCategory: MainCategory | null
  selectedSubCategory: SubCategory | null
  selectedLeafCategory: LeafCategory | null
  breadcrumb: CategoryBreadcrumb
  
  // Loading states
  isLoading: boolean
  error: string | null
  
  // Actions
  setMainCategories: (categories: MainCategory[]) => void
  setSubCategories: (categories: SubCategory[]) => void
  setLeafCategories: (categories: LeafCategory[]) => void
  buildCategoryTree: () => void
  
  selectMainCategory: (category: MainCategory | null) => void
  selectSubCategory: (category: SubCategory | null) => void
  selectLeafCategory: (category: LeafCategory | null) => void
  
  getMainCategoryBySlug: (slug: string) => MainCategory | undefined
  getSubCategoryBySlug: (slug: string) => SubCategory | undefined
  getLeafCategoryBySlug: (slug: string) => LeafCategory | undefined
  
  getSubCategoriesByMainId: (mainId: string) => SubCategory[]
  getLeafCategoriesBySubId: (subId: string) => LeafCategory[]
  
  setBreadcrumb: (breadcrumb: CategoryBreadcrumb) => void
  clearSelection: () => void
  
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useCategoryStore = create<CategoryState>()(
  devtools(
    (set, get) => ({
      // Initial state
      mainCategories: [],
      subCategories: [],
      leafCategories: [],
      categoryTree: {},
      
      selectedMainCategory: null,
      selectedSubCategory: null,
      selectedLeafCategory: null,
      breadcrumb: {},
      
      isLoading: false,
      error: null,
      
      // Actions
      setMainCategories: (categories) => 
        set({ mainCategories: categories }),
      
      setSubCategories: (categories) => 
        set({ subCategories: categories }),
      
      setLeafCategories: (categories) => 
        set({ leafCategories: categories }),
      
      buildCategoryTree: () => {
        const { mainCategories, subCategories, leafCategories } = get()
        const tree: Record<string, CategoryTree> = {}
        
        mainCategories.forEach(main => {
          const subs = subCategories.filter(sub => sub.mainCategoryId === main.id)
          const subsWithCategories: any = {}
          
          subs.forEach(sub => {
            subsWithCategories[sub.id] = {
              ...sub,
              categories: leafCategories.filter(leaf => leaf.subCategoryId === sub.id)
            }
          })
          
          tree[main.id] = {
            main,
            subs: subsWithCategories
          }
        })
        
        set({ categoryTree: tree })
      },
      
      selectMainCategory: (category) => 
        set({ 
          selectedMainCategory: category,
          selectedSubCategory: null,
          selectedLeafCategory: null
        }),
      
      selectSubCategory: (category) => 
        set({ selectedSubCategory: category, selectedLeafCategory: null }),
      
      selectLeafCategory: (category) => 
        set({ selectedLeafCategory: category }),
      
      getMainCategoryBySlug: (slug) => 
        get().mainCategories.find(cat => cat.slug === slug),
      
      getSubCategoryBySlug: (slug) => 
        get().subCategories.find(cat => cat.slug === slug),
      
      getLeafCategoryBySlug: (slug) => 
        get().leafCategories.find(cat => cat.slug === slug),
      
      getSubCategoriesByMainId: (mainId) => 
        get().subCategories.filter(sub => sub.mainCategoryId === mainId),
      
      getLeafCategoriesBySubId: (subId) => 
        get().leafCategories.filter(leaf => leaf.subCategoryId === subId),
      
      setBreadcrumb: (breadcrumb) => 
        set({ breadcrumb }),
      
      clearSelection: () => 
        set({ 
          selectedMainCategory: null,
          selectedSubCategory: null,
          selectedLeafCategory: null,
          breadcrumb: {}
        }),
      
      setLoading: (loading) => 
        set({ isLoading: loading }),
      
      setError: (error) => 
        set({ error }),
    }),
    { name: 'CategoryStore' }
  )
)
