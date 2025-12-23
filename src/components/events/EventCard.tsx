/**
 * EventCard Component
 * Display event in a card format
 */

import type { Event } from '@/types'
import Link from 'next/link'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`} className="event-card">
      <div className="event-image">
        <img src={event.imageUrl} alt={event.title} />
      </div>
      <div className="event-details">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <div className="event-meta">
          <span>{new Date(event.startDate).toLocaleDateString()}</span>
          <span>{event.venue.name}</span>
        </div>
      </div>
    </Link>
  )
}
