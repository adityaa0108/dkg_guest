/**
 * BookingCard Component
 * Display booking in a card format
 */

import type { Booking } from '@/types'
import Link from 'next/link'

interface BookingCardProps {
  booking: Booking
}

export default function BookingCard({ booking }: BookingCardProps) {
  return (
    <Link href={`/bookings/${booking.id}`} className="booking-card">
      <div className="booking-header">
        <span className="booking-number">{booking.bookingNumber}</span>
        <span className={`booking-status ${booking.status}`}>
          {booking.status}
        </span>
      </div>
      <div className="booking-details">
        <h3>{booking.eventSnapshot.title}</h3>
        <p>
          {new Date(booking.eventSnapshot.startDate).toLocaleDateString()}
        </p>
        <p>{booking.eventSnapshot.venue.name}</p>
        <p className="booking-amount">
          {booking.currency} {booking.totalAmount}
        </p>
      </div>
    </Link>
  )
}
