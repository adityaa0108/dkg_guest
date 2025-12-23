# Event Booking Platform

A modern, scalable event booking platform built with Next.js 14+, TypeScript, and Zustand for state management.

## 🏗️ Project Structure

```
adityaApp/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── api/                      # API Routes
│   │   │   ├── categories/           # Category endpoints
│   │   │   │   ├── [mainCategory]/
│   │   │   │   │   ├── [subCategory]/
│   │   │   │   │   │   └── route.ts  # Leaf categories API
│   │   │   │   │   └── route.ts      # Sub categories API
│   │   │   │   └── route.ts          # Main categories API
│   │   │   ├── events/               # Event endpoints
│   │   │   │   ├── [eventId]/
│   │   │   │   │   └── route.ts      # Single event API
│   │   │   │   └── route.ts          # Events list API
│   │   │   └── bookings/             # Booking endpoints
│   │   │       ├── [bookingId]/
│   │   │       │   └── route.ts      # Single booking API
│   │   │       └── route.ts          # Bookings API
│   │   ├── categories/               # Category pages
│   │   │   ├── [mainCategory]/
│   │   │   │   ├── [subCategory]/
│   │   │   │   │   ├── [category]/
│   │   │   │   │   │   └── page.tsx  # Final category page
│   │   │   │   │   └── page.tsx      # Sub category page
│   │   │   │   └── page.tsx          # Main category page
│   │   │   └── page.tsx              # All categories page
│   │   ├── events/                   # Event pages
│   │   │   ├── [eventId]/
│   │   │   │   └── page.tsx          # Event detail page
│   │   │   └── page.tsx              # Events listing page
│   │   ├── bookings/                 # Booking pages
│   │   │   ├── [bookingId]/
│   │   │   │   └── page.tsx          # Booking detail page
│   │   │   └── page.tsx              # User bookings page
│   │   ├── search/
│   │   │   └── page.tsx              # Search results page
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Home page
│   │   └── globals.css               # Global styles
│   │
│   ├── components/                   # React components
│   │   ├── navigation/
│   │   │   └── CategoryNavigation.tsx  # 3-level category menu
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── events/
│   │   │   ├── EventCard.tsx         # Event card component
│   │   │   ├── EventList.tsx         # Event list component
│   │   │   └── EventFilters.tsx      # Filters component
│   │   ├── bookings/
│   │   │   ├── BookingCard.tsx       # Booking card component
│   │   │   └── BookingForm.tsx       # Booking form component
│   │   └── common/
│   │       ├── Button.tsx
│   │       ├── Modal.tsx
│   │       ├── Loader.tsx
│   │       └── SearchBar.tsx
│   │
│   ├── store/                        # Zustand state management
│   │   ├── categoryStore.ts          # Category state
│   │   ├── eventStore.ts             # Event state
│   │   ├── bookingStore.ts           # Booking state
│   │   ├── uiStore.ts                # UI state (modals, menus, etc.)
│   │   └── index.ts
│   │
│   ├── services/                     # API service layer
│   │   ├── category.service.ts       # Category API calls
│   │   ├── event.service.ts          # Event API calls
│   │   ├── booking.service.ts        # Booking API calls
│   │   └── index.ts
│   │
│   ├── lib/                          # Library code
│   │   └── api-client.ts             # Axios instance with interceptors
│   │
│   ├── types/                        # TypeScript types
│   │   ├── category.types.ts         # Category interfaces
│   │   ├── event.types.ts            # Event interfaces
│   │   ├── booking.types.ts          # Booking interfaces
│   │   ├── common.types.ts           # Common/shared types
│   │   └── index.ts
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useCategories.ts          # Category data hook
│   │   ├── useEvents.ts              # Event data hook
│   │   ├── useBookings.ts            # Booking data hook
│   │   └── index.ts
│   │
│   ├── utils/                        # Utility functions
│   │   ├── date.utils.ts             # Date formatting utilities
│   │   ├── format.utils.ts           # Format utilities
│   │   ├── validation.utils.ts       # Validation utilities
│   │   ├── storage.utils.ts          # Local/session storage
│   │   └── index.ts
│   │
│   └── constants/                    # App constants
│       └── index.ts                  # Configuration constants
│
├── public/                           # Static assets
│
├── .env.local                        # Environment variables
├── .env.example                      # Example environment file
├── next.config.js                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies
└── README.md                         # This file
```

## 🎯 Key Features

### Three-Level Category System
- **Main Categories** (e.g., Music & Concerts, Sports & Fitness)
- **Sub Categories** (e.g., under Music: Concerts, Festivals)
- **Leaf Categories** (e.g., under Concerts: Rock Concerts, Jazz Concerts)

### State Management
- **Zustand** for global state management
- Separate stores for:
  - Categories (with tree structure)
  - Events (with filters and pagination)
  - Bookings (with draft support)
  - UI state (modals, menus, notifications)

### API Architecture
- RESTful API routes using Next.js App Router
- Service layer for API calls
- Axios client with interceptors
- Type-safe API responses

### Component Structure
- Organized by feature (events, bookings, categories)
- Common/shared components
- Layout components
- Navigation components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration.

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Development Guide

### Adding a New Feature

1. **Create Types** in `src/types/`
2. **Create API Routes** in `src/app/api/`
3. **Create Service** in `src/services/`
4. **Create Store** (if needed) in `src/store/`
5. **Create Components** in `src/components/`
6. **Create Page** in `src/app/`

### State Management with Zustand

```typescript
// Using a store in a component
import { useEventStore } from '@/store'

function MyComponent() {
  const { events, isLoading, setFilters } = useEventStore()
  
  // Use the state...
}
```

### Making API Calls

```typescript
// Using services
import { eventService } from '@/services'

const events = await eventService.getEvents(filters, page, limit)
```

### Custom Hooks

```typescript
// Using custom hooks for data fetching
import { useEvents } from '@/hooks'

function EventsPage() {
  const { events, isLoading, error } = useEvents()
  
  // Component logic...
}
```

## 🗂️ Routing Structure

### Category Navigation
- `/categories` - All main categories
- `/categories/[mainCategory]` - Sub categories
- `/categories/[mainCategory]/[subCategory]` - Leaf categories
- `/categories/[mainCategory]/[subCategory]/[category]` - Events in category

### Events
- `/events` - All events
- `/events/[eventId]` - Event details

### Bookings
- `/bookings` - User bookings
- `/bookings/[bookingId]` - Booking details

### Other
- `/search` - Search results
- `/` - Home page

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS (configured)
- **HTTP Client**: Axios
- **Validation**: Zod
- **Date Handling**: date-fns

## 📦 Additional Recommendations

### Consider Adding:

1. **Authentication**
   - NextAuth.js for authentication
   - User roles (user, organizer, admin)

2. **Database**
   - Prisma ORM
   - PostgreSQL or MongoDB

3. **Payment Integration**
   - Stripe or similar payment gateway

4. **Image Handling**
   - Next.js Image optimization
   - Cloudinary for image hosting

5. **Search**
   - Algolia or ElasticSearch for advanced search

6. **Analytics**
   - Google Analytics or Mixpanel

7. **Testing**
   - Jest for unit tests
   - Playwright for E2E tests

8. **Deployment**
   - Vercel (recommended for Next.js)
   - AWS or Google Cloud

9. **Monitoring**
   - Sentry for error tracking
   - Vercel Analytics

10. **Email Service**
    - SendGrid or AWS SES for booking confirmations

## 📄 License

MIT

## 👥 Contributing

Contributions welcome! Please read the contributing guidelines first.
