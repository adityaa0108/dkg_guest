/**
 * Common/Shared Types
 */

/**
 * API Response wrapper
 */
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: ApiError
  message?: string
}

export interface ApiError {
  code: string
  message: string
  details?: any
}

/**
 * Pagination
 */
export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasMore: boolean
  }
}

/**
 * Sort options
 */
export interface SortOption {
  field: string
  order: 'asc' | 'desc'
}

/**
 * Loading states
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

/**
 * User (basic structure)
 */
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  role: 'user' | 'organizer' | 'admin'
  avatar?: string
  isVerified: boolean
  createdAt: string
  updatedAt: string
}

/**
 * Image type
 */
export interface ImageData {
  url: string
  alt?: string
  width?: number
  height?: number
}
