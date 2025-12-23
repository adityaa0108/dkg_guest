/**
 * Booking Service - API calls for bookings
 */
import apiClient from '@/lib/api-client'
import type {
  Booking,
  CreateBookingRequest,
  BookingListResponse,
  ApiResponse,
} from '@/types'

export const bookingService = {
  /**
   * Get user bookings
   */
  getBookings: async (
    page: number = 1,
    limit: number = 10
  ): Promise<BookingListResponse> => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    })

    const response = await apiClient.get<any, ApiResponse<BookingListResponse>>(
      `/bookings?${params.toString()}`
    )
    return response.data || { bookings: [], total: 0, page, limit, hasMore: false }
  },

  /**
   * Get single booking by ID
   */
  getBookingById: async (bookingId: string): Promise<Booking | null> => {
    try {
      const response = await apiClient.get<any, ApiResponse<Booking>>(
        `/bookings/${bookingId}`
      )
      return response.data || null
    } catch (error) {
      return null
    }
  },

  /**
   * Create new booking
   */
  createBooking: async (bookingData: CreateBookingRequest): Promise<Booking> => {
    const response = await apiClient.post<any, ApiResponse<Booking>>(
      '/bookings',
      bookingData
    )
    if (!response.data) {
      throw new Error('Failed to create booking')
    }
    return response.data
  },

  /**
   * Cancel booking
   */
  cancelBooking: async (bookingId: string): Promise<Booking> => {
    const response = await apiClient.patch<any, ApiResponse<Booking>>(
      `/bookings/${bookingId}`,
      { status: 'cancelled' }
    )
    if (!response.data) {
      throw new Error('Failed to cancel booking')
    }
    return response.data
  },

  /**
   * Get booking by booking number
   */
  getBookingByNumber: async (bookingNumber: string): Promise<Booking | null> => {
    try {
      // This would need a separate API endpoint or search
      const response = await bookingService.getBookings(1, 100)
      return (
        response.bookings.find((b) => b.bookingNumber === bookingNumber) || null
      )
    } catch (error) {
      return null
    }
  },
}
