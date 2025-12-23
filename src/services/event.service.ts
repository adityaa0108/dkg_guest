/**
 * Event Service - API calls for events
 */
import apiClient from '@/lib/api-client'
import type { Event, EventFilters, EventListResponse, ApiResponse } from '@/types'

export const eventService = {
  /**
   * Get events with filters and pagination
   */
  getEvents: async (
    filters?: EventFilters,
    page: number = 1,
    limit: number = 10
  ): Promise<EventListResponse> => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...Object.fromEntries(
        Object.entries(filters || {}).map(([key, value]) => [key, String(value)])
      ),
    })

    const response = await apiClient.get<any, ApiResponse<EventListResponse>>(
      `/events?${params.toString()}`
    )
    return response.data || { events: [], total: 0, page, limit, hasMore: false }
  },

  /**
   * Get single event by ID
   */
  getEventById: async (eventId: string): Promise<Event | null> => {
    try {
      const response = await apiClient.get<any, ApiResponse<Event>>(`/events/${eventId}`)
      return response.data || null
    } catch (error) {
      return null
    }
  },

  /**
   * Get featured events
   */
  getFeaturedEvents: async (limit: number = 6): Promise<Event[]> => {
    const response = await eventService.getEvents(
      { isFeatured: true },
      1,
      limit
    )
    return response.events
  },

  /**
   * Get events by category
   */
  getEventsByCategory: async (
    categoryId: string,
    page: number = 1,
    limit: number = 10
  ): Promise<EventListResponse> => {
    return eventService.getEvents(
      { categoryIds: [categoryId] },
      page,
      limit
    )
  },

  /**
   * Search events
   */
  searchEvents: async (
    query: string,
    page: number = 1,
    limit: number = 10
  ): Promise<EventListResponse> => {
    return eventService.getEvents(
      { search: query },
      page,
      limit
    )
  },
}
