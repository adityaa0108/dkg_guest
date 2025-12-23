/**
 * Sub Category API Route
 * GET /api/categories/[mainCategory]/[subCategory] - Get leaf categories
 */

import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { mainCategory: string; subCategory: string } }
) {
  try {
    const { mainCategory, subCategory } = params

    // TODO: Replace with actual database call
    const categories = [
      {
        id: 'cat_1',
        name: 'Rock Concerts',
        slug: 'rock-concerts',
        subCategoryId: 'sub_1',
        mainCategoryId: 'main_1',
        level: 'category',
        order: 1,
        isActive: true
      }
    ]

    return NextResponse.json({
      success: true,
      data: categories
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    )
  }
}
