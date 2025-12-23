/**
 * Booking Store - Manages booking state
 */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { Booking, CreateBookingRequest, BookingListResponse } from '@/types'

interface BookingState {
  // Data
  bookings: Booking[]
  currentBooking: Booking | null
  
  // Draft booking (cart-like functionality)
  draftBooking: CreateBookingRequest | null
  
  // Pagination
  currentPage: number
  totalPages: number
  totalBookings: number
  hasMore: boolean
  
  // Loading states
  isLoading: boolean
  error: string | null
  
  // Actions
  setBookings: (response: BookingListResponse) => void
  addBookings: (response: BookingListResponse) => void
  setCurrentBooking: (booking: Booking | null) => void
  
  createDraftBooking: (draft: CreateBookingRequest) => void
  updateDraftBooking: (draft: Partial<CreateBookingRequest>) => void
  clearDraftBooking: () => void
  
  getBookingById: (id: string) => Booking | undefined
  getBookingByNumber: (bookingNumber: string) => Booking | undefined
  
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  
  reset: () => void
}

export const useBookingStore = create<BookingState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        bookings: [],
        currentBooking: null,
        draftBooking: null,
        
        currentPage: 1,
        totalPages: 0,
        totalBookings: 0,
        hasMore: false,
        
        isLoading: false,
        error: null,
        
        // Actions
        setBookings: (response) => 
          set({
            bookings: response.bookings,
            currentPage: response.page,
            totalBookings: response.total,
            totalPages: Math.ceil(response.total / response.limit),
            hasMore: response.hasMore
          }),
        
        addBookings: (response) => 
          set(state => ({
            bookings: [...state.bookings, ...response.bookings],
            currentPage: response.page,
            totalBookings: response.total,
            totalPages: Math.ceil(response.total / response.limit),
            hasMore: response.hasMore
          })),
        
        setCurrentBooking: (booking) => 
          set({ currentBooking: booking }),
        
        createDraftBooking: (draft) => 
          set({ draftBooking: draft }),
        
        updateDraftBooking: (draft) => 
          set(state => ({
            draftBooking: state.draftBooking 
              ? { ...state.draftBooking, ...draft }
              : null
          })),
        
        clearDraftBooking: () => 
          set({ draftBooking: null }),
        
        getBookingById: (id) => 
          get().bookings.find(booking => booking.id === id),
        
        getBookingByNumber: (bookingNumber) => 
          get().bookings.find(booking => booking.bookingNumber === bookingNumber),
        
        setLoading: (loading) => 
          set({ isLoading: loading }),
        
        setError: (error) => 
          set({ error }),
        
        reset: () => 
          set({
            bookings: [],
            currentBooking: null,
            currentPage: 1,
            totalPages: 0,
            totalBookings: 0,
            hasMore: false,
            error: null
          }),
      }),
      {
        name: 'booking-storage',
        partialize: (state) => ({ draftBooking: state.draftBooking }) // Only persist draft
      }
    ),
    { name: 'BookingStore' }
  )
)
