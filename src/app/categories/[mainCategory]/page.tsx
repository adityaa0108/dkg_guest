/**
 * Main Category Page - Shows subcategories for a main category
 * Route: /categories/[mainCategory]
 * Example: /categories/music
 */

interface MainCategoryPageProps {
  params: {
    mainCategory: string
  }
}

export default function MainCategoryPage({ params }: MainCategoryPageProps) {
  return (
    <div>
      <h1>Main Category: {params.mainCategory}</h1>
      {/* Subcategories grid will be rendered here */}
    </div>
  )
}
