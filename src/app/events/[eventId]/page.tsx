/**
 * Event Detail Page
 * Route: /events/[eventId]
 * Example: /events/evt_123456
 */

interface EventDetailPageProps {
  params: {
    eventId: string
  }
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  return (
    <div>
      <h1>Event Details</h1>
      <p>Event ID: {params.eventId}</p>
      {/* Event details, booking form, etc. */}
    </div>
  )
}
