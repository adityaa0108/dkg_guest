/**
 * Application Constants
 */

export const APP_CONFIG = {
  name: 'Event Booking Platform',
  description: 'Book events across multiple categories',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
}

export const PAGINATION = {
  defaultLimit: 10,
  maxLimit: 100,
  pageSizes: [10, 20, 50, 100],
}

export const DATE_FORMATS = {
  display: 'MMM dd, yyyy',
  displayLong: 'MMMM dd, yyyy',
  displayFull: 'EEEE, MMMM dd, yyyy',
  time: 'hh:mm a',
  datetime: 'MMM dd, yyyy hh:mm a',
}

export const STORAGE_KEYS = {
  authToken: 'auth_token',
  user: 'user',
  cart: 'cart',
  filters: 'filters',
  theme: 'theme',
}

export const API_ENDPOINTS = {
  categories: '/categories',
  events: '/events',
  bookings: '/bookings',
  auth: '/auth',
  users: '/users',
}

export const EVENT_STATUS = {
  draft: 'Draft',
  published: 'Published',
  cancelled: 'Cancelled',
  completed: 'Completed',
} as const

export const BOOKING_STATUS = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  cancelled: 'Cancelled',
  completed: 'Completed',
} as const

export const PAYMENT_STATUS = {
  pending: 'Pending',
  completed: 'Completed',
  failed: 'Failed',
  refunded: 'Refunded',
} as const
