/**
 * Main Category API Route
 * GET /api/categories/[mainCategory] - Get subcategories for a main category
 */

import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { mainCategory: string } }
) {
  try {
    const { mainCategory } = params

    // TODO: Replace with actual database call
    const subCategories = [
      {
        id: 'sub_1',
        name: 'Concerts',
        slug: 'concerts',
        mainCategoryId: 'main_1',
        level: 'sub',
        order: 1,
        isActive: true
      }
    ]

    return NextResponse.json({
      success: true,
      data: subCategories
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch subcategories' },
      { status: 500 }
    )
  }
}
