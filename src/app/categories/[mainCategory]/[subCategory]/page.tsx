/**
 * Sub Category Page - Shows categories within a subcategory
 * Route: /categories/[mainCategory]/[subCategory]
 * Example: /categories/music/concerts
 */

interface SubCategoryPageProps {
  params: {
    mainCategory: string
    subCategory: string
  }
}

export default function SubCategoryPage({ params }: SubCategoryPageProps) {
  return (
    <div>
      <h1>Sub Category: {params.subCategory}</h1>
      <p>Under: {params.mainCategory}</p>
      {/* Categories list will be rendered here */}
    </div>
  )
}
