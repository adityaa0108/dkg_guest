/**
 * Specific Category Page - Shows events for a specific category
 * Route: /categories/[mainCategory]/[subCategory]/[category]
 * Example: /categories/music/concerts/rock-concerts
 */

interface CategoryPageProps {
  params: {
    mainCategory: string
    subCategory: string
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <div>
      <h1>Category: {params.category}</h1>
      <p>Path: {params.mainCategory} → {params.subCategory} → {params.category}</p>
      {/* Events list will be rendered here */}
    </div>
  )
}
