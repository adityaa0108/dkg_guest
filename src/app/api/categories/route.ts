/**
 * Categories API Route
 * GET /api/categories - Get all main categories
 */

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // TODO: Replace with actual database call
    const categories = [
      {
        id: 'main_1',
        name: 'Music & Concerts',
        slug: 'music',
        level: 'main',
        order: 1,
        isActive: true
      },
      {
        id: 'main_2',
        name: 'Sports & Fitness',
        slug: 'sports',
        level: 'main',
        order: 2,
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
