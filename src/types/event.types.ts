/**
 * Event Types
 */

export interface Event {
  id: string
  title: string
  slug: string
  description: string
  longDescription?: string
  
  // Category relationships
  categoryId: string
  subCategoryId: string
  mainCategoryId: string
  
  // Event details
  organizerId: string
  organizerName: string
  venue: Venue
  
  // Date and time
  startDate: string
  endDate: string
  timezone: string
  
  // Pricing
  pricing: EventPricing[]
  currency: string
  
  // Media
  imageUrl: string
  images: string[]
  videoUrl?: string
  
  // Capacity
  totalCapacity: number
  availableSeats: number
  
  // Status
  status: 'draft' | 'published' | 'cancelled' | 'completed'
  isActive: boolean
  isFeatured: boolean
  
  // SEO
  metaTitle?: string
  metaDescription?: string
  tags: string[]
  
  // Timestamps
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

export interface Venue {
  name: string
  address: Address
  coordinates?: Coordinates
  capacity?: number
}

export interface Address {
  street: string
  city: string
  state: string
  country: string
  zipCode: string
}

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface EventPricing {
  id: string
  name: string
  description?: string
  price: number
  currency: string
  capacity: number
  available: number
  minQuantity: number
  maxQuantity: number
  isActive: boolean
}

/**
 * Event Filters
 */
export interface EventFilters {
  categoryIds?: string[]
  subCategoryIds?: string[]
  mainCategoryIds?: string[]
  startDate?: string
  endDate?: string
  minPrice?: number
  maxPrice?: number
  location?: string
  isFeatured?: boolean
  search?: string
}

/**
 * Event List Response
 */
export interface EventListResponse {
  events: Event[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}
