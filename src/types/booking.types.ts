/**
 * Booking Types
 */

export interface Booking {
  id: string
  bookingNumber: string
  
  // References
  eventId: string
  userId: string
  
  // Event snapshot (in case event details change)
  eventSnapshot: {
    title: string
    startDate: string
    endDate: string
    venue: {
      name: string
      address: string
    }
  }
  
  // Booking details
  tickets: BookingTicket[]
  totalAmount: number
  currency: string
  
  // Customer info
  customerInfo: CustomerInfo
  
  // Payment
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded'
  paymentMethod?: string
  paymentId?: string
  paidAt?: string
  
  // Status
  status: 'confirmed' | 'cancelled' | 'pending' | 'completed'
  
  // Additional
  specialRequests?: string
  promoCode?: string
  discount?: number
  
  // Timestamps
  createdAt: string
  updatedAt: string
  cancelledAt?: string
}

export interface BookingTicket {
  id: string
  pricingId: string
  pricingName: string
  quantity: number
  pricePerTicket: number
  totalPrice: number
  ticketNumbers?: string[]
}

export interface CustomerInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address?: {
    street?: string
    city?: string
    state?: string
    country?: string
    zipCode?: string
  }
}

/**
 * Booking Request (for creating a booking)
 */
export interface CreateBookingRequest {
  eventId: string
  tickets: {
    pricingId: string
    quantity: number
  }[]
  customerInfo: CustomerInfo
  specialRequests?: string
  promoCode?: string
}

/**
 * Booking List Response
 */
export interface BookingListResponse {
  bookings: Booking[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}
