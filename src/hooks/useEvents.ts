/**
 * Custom Hook - useEvents
 * Fetches and manages event data
 */

'use client'

import { useEffect } from 'react'
import { useEventStore } from '@/store'
import { eventService } from '@/services'
import type { EventFilters } from '@/types'

export const useEvents = (filters?: EventFilters, autoFetch: boolean = true) => {
  const {
    events,
    isLoading,
    error,
    currentPage,
    hasMore,
    setEvents,
    setFilters,
    setLoading,
    setError,
  } = useEventStore()

  const fetchEvents = async (page: number = 1) => {
    setLoading(true)
    try {
      const data = await eventService.getEvents(filters, page)
      setEvents(data)
      if (filters) {
        setFilters(filters)
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch events')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (autoFetch) {
      fetchEvents()
    }
  }, [JSON.stringify(filters)])

  const loadMore = () => {
    if (!isLoading && hasMore) {
      fetchEvents(currentPage + 1)
    }
  }

  return {
    events,
    isLoading,
    error,
    currentPage,
    hasMore,
    fetchEvents,
    loadMore,
  }
}
