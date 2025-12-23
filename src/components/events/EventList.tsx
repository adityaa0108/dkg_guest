/**
 * EventList Component
 * Display list of events
 */

import type { Event } from '@/types'
import EventCard from './EventCard'

interface EventListProps {
  events: Event[]
  isLoading?: boolean
}

export default function EventList({ events, isLoading }: EventListProps) {
  if (isLoading) {
    return <div>Loading events...</div>
  }

  if (events.length === 0) {
    return <div>No events found</div>
  }

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}
