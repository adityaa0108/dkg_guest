/**
 * EventFilters Component
 * Filters for event listing
 */

'use client'

import { useEventStore } from '@/store'

export default function EventFilters() {
  const { filters, setFilters } = useEventStore()

  return (
    <div className="event-filters">
      {/* TODO: Implement filter UI */}
      <div>Event Filters Component</div>
    </div>
  )
}
