/**
 * BookingForm Component
 * Form for creating a booking
 */

'use client'

import { useState } from 'react'
import { useBookingStore } from '@/store'
import type { Event, CreateBookingRequest } from '@/types'

interface BookingFormProps {
  event: Event
}

export default function BookingForm({ event }: BookingFormProps) {
  const { createDraftBooking } = useBookingStore()
  const [formData, setFormData] = useState<Partial<CreateBookingRequest>>({
    eventId: event.id,
    tickets: [],
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Validate and submit
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      {/* TODO: Implement booking form UI */}
      <div>Booking Form Component</div>
    </form>
  )
}
