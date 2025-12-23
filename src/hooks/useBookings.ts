/**
 * Custom Hook - useBookings
 * Fetches and manages booking data
 */

'use client'

import { useEffect } from 'react'
import { useBookingStore } from '@/store'
import { bookingService } from '@/services'

export const useBookings = (autoFetch: boolean = true) => {
  const {
    bookings,
    isLoading,
    error,
    currentPage,
    hasMore,
    setBookings,
    setLoading,
    setError,
  } = useBookingStore()

  const fetchBookings = async (page: number = 1) => {
    setLoading(true)
    try {
      const data = await bookingService.getBookings(page)
      setBookings(data)
    } catch (err: any) {
      setError(err.message || 'Failed to fetch bookings')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (autoFetch) {
      fetchBookings()
    }
  }, [])

  const loadMore = () => {
    if (!isLoading && hasMore) {
      fetchBookings(currentPage + 1)
    }
  }

  return {
    bookings,
    isLoading,
    error,
    currentPage,
    hasMore,
    fetchBookings,
    loadMore,
  }
}
