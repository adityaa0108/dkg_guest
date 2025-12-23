/**
 * Event Store - Manages event state
 */
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Event, EventFilters, EventListResponse } from '@/types'

interface EventState {
  // Data
  events: Event[]
  featuredEvents: Event[]
  selectedEvent: Event | null
  
  // Pagination
  currentPage: number
  totalPages: number
  totalEvents: number
  hasMore: boolean
  
  // Filters
  filters: EventFilters
  
  // Loading states
  isLoading: boolean
  error: string | null
  
  // Actions
  setEvents: (response: EventListResponse) => void
  addEvents: (response: EventListResponse) => void
  setFeaturedEvents: (events: Event[]) => void
  setSelectedEvent: (event: Event | null) => void
  
  setFilters: (filters: Partial<EventFilters>) => void
  clearFilters: () => void
  
  getEventById: (id: string) => Event | undefined
  getEventBySlug: (slug: string) => Event | undefined
  getEventsByCategory: (categoryId: string) => Event[]
  
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  
  reset: () => void
}

export const useEventStore = create<EventState>()(
  devtools(
    (set, get) => ({
      // Initial state
      events: [],
      featuredEvents: [],
      selectedEvent: null,
      
      currentPage: 1,
      totalPages: 0,
      totalEvents: 0,
      hasMore: false,
      
      filters: {},
      
      isLoading: false,
      error: null,
      
      // Actions
      setEvents: (response) => 
        set({
          events: response.events,
          currentPage: response.page,
          totalEvents: response.total,
          totalPages: Math.ceil(response.total / response.limit),
          hasMore: response.hasMore
        }),
      
      addEvents: (response) => 
        set(state => ({
          events: [...state.events, ...response.events],
          currentPage: response.page,
          totalEvents: response.total,
          totalPages: Math.ceil(response.total / response.limit),
          hasMore: response.hasMore
        })),
      
      setFeaturedEvents: (events) => 
        set({ featuredEvents: events }),
      
      setSelectedEvent: (event) => 
        set({ selectedEvent: event }),
      
      setFilters: (filters) => 
        set(state => ({ 
          filters: { ...state.filters, ...filters },
          currentPage: 1 // Reset to first page on filter change
        })),
      
      clearFilters: () => 
        set({ filters: {}, currentPage: 1 }),
      
      getEventById: (id) => 
        get().events.find(event => event.id === id),
      
      getEventBySlug: (slug) => 
        get().events.find(event => event.slug === slug),
      
      getEventsByCategory: (categoryId) => 
        get().events.filter(event => event.categoryId === categoryId),
      
      setLoading: (loading) => 
        set({ isLoading: loading }),
      
      setError: (error) => 
        set({ error }),
      
      reset: () => 
        set({
          events: [],
          selectedEvent: null,
          currentPage: 1,
          totalPages: 0,
          totalEvents: 0,
          hasMore: false,
          filters: {},
          error: null
        }),
    }),
    { name: 'EventStore' }
  )
)
