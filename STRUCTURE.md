# Project Structure Documentation

## Overview

This document provides detailed information about the folder structure and architecture decisions for the Event Booking Platform.

## Architecture Principles

### 1. **Separation of Concerns**
- **Presentation Layer**: React components (`src/components/`, `src/app/`)
- **Business Logic**: Zustand stores (`src/store/`)
- **Data Layer**: API services (`src/services/`)
- **API Layer**: Next.js API routes (`src/app/api/`)

### 2. **Feature-Based Organization**
Components are organized by feature (events, bookings, categories) rather than by type.

### 3. **Type Safety**
Comprehensive TypeScript types ensure type safety across the application.

## Detailed Structure

### `/src/app` - Next.js App Router

```
app/
├── api/                    # Backend API routes
│   ├── categories/         # Category CRUD operations
│   ├── events/            # Event CRUD operations
│   └── bookings/          # Booking CRUD operations
├── categories/            # Category browsing pages
├── events/                # Event listing and detail pages
├── bookings/              # User booking management
├── search/                # Search functionality
├── layout.tsx             # Root layout with providers
├── page.tsx               # Landing page
└── globals.css            # Global styles
```

**Key Points:**
- Uses Next.js 14 App Router (not Pages Router)
- API routes are colocated with frontend routes
- Dynamic routes use `[param]` syntax
- Each route can have its own layout, loading, and error states

### `/src/components` - Reusable Components

```
components/
├── navigation/            # Navigation-related components
│   └── CategoryNavigation.tsx  # 3-level category tree
├── layout/                # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Sidebar.tsx
├── events/                # Event-specific components
│   ├── EventCard.tsx
│   ├── EventList.tsx
│   └── EventFilters.tsx
├── bookings/              # Booking-specific components
│   ├── BookingCard.tsx
│   └── BookingForm.tsx
└── common/                # Shared components
    ├── Button.tsx
    ├── Modal.tsx
    ├── Loader.tsx
    └── SearchBar.tsx
```

**Component Guidelines:**
- Each component should have a single responsibility
- Use TypeScript interfaces for props
- Mark client components with `'use client'` directive
- Server components by default

### `/src/store` - State Management

```
store/
├── categoryStore.ts       # Category state and tree structure
├── eventStore.ts          # Events, filters, pagination
├── bookingStore.ts        # Bookings and draft bookings
├── uiStore.ts             # UI state (modals, menus)
└── index.ts               # Central export
```

**Store Design:**
- Uses Zustand for lightweight state management
- Each store manages a specific domain
- Actions are colocated with state
- DevTools integration for debugging
- Persist middleware for bookingStore (cart functionality)

### `/src/services` - API Services

```
services/
├── category.service.ts    # Category API calls
├── event.service.ts       # Event API calls
├── booking.service.ts     # Booking API calls
└── index.ts               # Central export
```

**Service Layer Benefits:**
- Abstracts API calls from components
- Centralizes error handling
- Type-safe API responses
- Easy to mock for testing

### `/src/types` - TypeScript Types

```
types/
├── category.types.ts      # Category, MainCategory, SubCategory, LeafCategory
├── event.types.ts         # Event, EventFilters, EventListResponse
├── booking.types.ts       # Booking, CreateBookingRequest
├── common.types.ts        # ApiResponse, PaginatedResponse, User
└── index.ts               # Central export
```

**Type Definitions:**
- Comprehensive interfaces for all entities
- Shared types for common patterns
- Export from central index for easy imports

### `/src/hooks` - Custom React Hooks

```
hooks/
├── useCategories.ts       # Fetch and manage categories
├── useEvents.ts           # Fetch and manage events
├── useBookings.ts         # Fetch and manage bookings
└── index.ts               # Central export
```

**Hook Patterns:**
- Encapsulate data fetching logic
- Connect stores with services
- Provide clean API to components
- Handle loading and error states

### `/src/utils` - Utility Functions

```
utils/
├── date.utils.ts          # Date formatting, relative time
├── format.utils.ts        # Currency, numbers, text formatting
├── validation.utils.ts    # Input validation helpers
├── storage.utils.ts       # localStorage/sessionStorage wrappers
└── index.ts               # Central export
```

### `/src/constants` - Application Constants

```
constants/
└── index.ts               # App config, API endpoints, status enums
```

### `/src/lib` - Library Code

```
lib/
└── api-client.ts          # Configured Axios instance
```

## Data Flow

### 1. **Fetching Data**
```
Component → Custom Hook → Service → API Route → Database
```

### 2. **Updating State**
```
Component → Store Action → Service → API Route → Database
         ↓
      Store Update → Component Re-render
```

### 3. **Three-Level Category Navigation**

```
MainCategory (e.g., "Music & Concerts")
    ↓
SubCategory (e.g., "Concerts")
    ↓
LeafCategory (e.g., "Rock Concerts")
    ↓
Events (filtered by category)
```

**Implementation:**
- `categoryStore` maintains the tree structure
- `buildCategoryTree()` creates nested structure
- Navigation components traverse the tree
- Dynamic routes match the hierarchy

## Best Practices

### Component Development
1. Use server components by default
2. Add `'use client'` only when needed (hooks, events)
3. Keep components small and focused
4. Extract reusable logic into hooks
5. Use TypeScript interfaces for props

### State Management
1. Use Zustand stores for global state
2. Use React state for local component state
3. Keep actions colocated with state
4. Use selectors for derived state

### API Development
1. Use Next.js API routes for backend
2. Validate input with Zod or similar
3. Return consistent ApiResponse format
4. Handle errors appropriately
5. Use HTTP status codes correctly

### Type Safety
1. Define interfaces for all entities
2. Use generic types for reusable patterns
3. Avoid `any` type
4. Export types from central location

## Future Enhancements

### Recommended Additions:
1. **Middleware** folder for authentication, validation
2. **Tests** folder for unit and integration tests
3. **Public/assets** for images, fonts
4. **Schemas** folder for Zod validation schemas
5. **Config** folder for environment-specific configs

### Scalability Considerations:
1. Add **feature flags** for gradual rollouts
2. Implement **caching** strategy (Redis, React Query)
3. Add **rate limiting** to API routes
4. Implement **pagination** for all list endpoints
5. Add **search indexing** for better performance

## Conclusion

This structure provides:
- ✅ Clear separation of concerns
- ✅ Type safety throughout
- ✅ Scalable architecture
- ✅ Easy to test
- ✅ Industry-standard patterns
- ✅ Excellent developer experience
