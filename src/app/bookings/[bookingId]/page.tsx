/**
 * Booking Detail Page
 * Route: /bookings/[bookingId]
 * Example: /bookings/bkg_123456
 */

interface BookingDetailPageProps {
  params: {
    bookingId: string
  }
}

export default function BookingDetailPage({ params }: BookingDetailPageProps) {
  return (
    <div>
      <h1>Booking Details</h1>
      <p>Booking ID: {params.bookingId}</p>
      {/* Booking details, ticket info, etc. */}
    </div>
  )
}
