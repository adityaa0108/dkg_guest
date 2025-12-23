# 📁 Complete Folder Structure

```
adityaApp/
│
├── 📂 src/
│   │
│   ├── 📂 app/                               # Next.js App Router
│   │   ├── 📂 api/                          # API Routes (Backend)
│   │   │   ├── 📂 categories/
│   │   │   │   ├── 📂 [mainCategory]/
│   │   │   │   │   ├── 📂 [subCategory]/
│   │   │   │   │   │   └── 📄 route.ts      # GET /api/categories/[main]/[sub]
│   │   │   │   │   └── 📄 route.ts          # GET /api/categories/[main]
│   │   │   │   └── 📄 route.ts              # GET /api/categories
│   │   │   │
│   │   │   ├── 📂 events/
│   │   │   │   ├── 📂 [eventId]/
│   │   │   │   │   └── 📄 route.ts          # GET /api/events/[id]
│   │   │   │   └── 📄 route.ts              # GET /api/events
│   │   │   │
│   │   │   └── 📂 bookings/
│   │   │       ├── 📂 [bookingId]/
│   │   │       │   └── 📄 route.ts          # GET,PATCH /api/bookings/[id]
│   │   │       └── 📄 route.ts              # GET,POST /api/bookings
│   │   │
│   │   ├── 📂 categories/                   # Frontend Pages
│   │   │   ├── 📂 [mainCategory]/
│   │   │   │   ├── 📂 [subCategory]/
│   │   │   │   │   ├── 📂 [category]/
│   │   │   │   │   │   └── 📄 page.tsx      # /categories/music/concerts/rock
│   │   │   │   │   └── 📄 page.tsx          # /categories/music/concerts
│   │   │   │   └── 📄 page.tsx              # /categories/music
│   │   │   └── 📄 page.tsx                  # /categories
│   │   │
│   │   ├── 📂 events/
│   │   │   ├── 📂 [eventId]/
│   │   │   │   └── 📄 page.tsx              # /events/[id]
│   │   │   └── 📄 page.tsx                  # /events
│   │   │
│   │   ├── 📂 bookings/
│   │   │   ├── 📂 [bookingId]/
│   │   │   │   └── 📄 page.tsx              # /bookings/[id]
│   │   │   └── 📄 page.tsx                  # /bookings
│   │   │
│   │   ├── 📂 search/
│   │   │   └── 📄 page.tsx                  # /search
│   │   │
│   │   ├── 📄 layout.tsx                    # Root Layout
│   │   ├── 📄 page.tsx                      # Home Page
│   │   └── 📄 globals.css                   # Global Styles
│   │
│   ├── 📂 components/                       # React Components
│   │   ├── 📂 navigation/
│   │   │   └── 📄 CategoryNavigation.tsx    # 3-Level Category Menu
│   │   │
│   │   ├── 📂 layout/
│   │   │   ├── 📄 Header.tsx                # Site Header
│   │   │   ├── 📄 Footer.tsx                # Site Footer
│   │   │   └── 📄 Sidebar.tsx               # Sidebar (Filters, etc.)
│   │   │
│   │   ├── 📂 events/
│   │   │   ├── 📄 EventCard.tsx             # Event Display Card
│   │   │   ├── 📄 EventList.tsx             # List of Events
│   │   │   └── 📄 EventFilters.tsx          # Event Filter Controls
│   │   │
│   │   ├── 📂 bookings/
│   │   │   ├── 📄 BookingCard.tsx           # Booking Display Card
│   │   │   └── 📄 BookingForm.tsx           # Create Booking Form
│   │   │
│   │   └── 📂 common/
│   │       ├── 📄 Button.tsx                # Reusable Button
│   │       ├── 📄 Modal.tsx                 # Modal Component
│   │       ├── 📄 Loader.tsx                # Loading Spinner
│   │       └── 📄 SearchBar.tsx             # Search Input
│   │
│   ├── 📂 store/                            # Zustand State Management
│   │   ├── 📄 categoryStore.ts              # Category State & Tree
│   │   ├── 📄 eventStore.ts                 # Events, Filters, Pagination
│   │   ├── 📄 bookingStore.ts               # Bookings & Draft Cart
│   │   ├── 📄 uiStore.ts                    # UI State (Modals, Menus)
│   │   └── 📄 index.ts                      # Export all stores
│   │
│   ├── 📂 services/                         # API Service Layer
│   │   ├── 📄 category.service.ts           # Category API Calls
│   │   ├── 📄 event.service.ts              # Event API Calls
│   │   ├── 📄 booking.service.ts            # Booking API Calls
│   │   └── 📄 index.ts                      # Export all services
│   │
│   ├── 📂 lib/                              # Library Code
│   │   └── 📄 api-client.ts                 # Configured Axios Instance
│   │
│   ├── 📂 types/                            # TypeScript Definitions
│   │   ├── 📄 category.types.ts             # Category Interfaces
│   │   ├── 📄 event.types.ts                # Event Interfaces
│   │   ├── 📄 booking.types.ts              # Booking Interfaces
│   │   ├── 📄 common.types.ts               # Shared Types
│   │   └── 📄 index.ts                      # Export all types
│   │
│   ├── 📂 hooks/                            # Custom React Hooks
│   │   ├── 📄 useCategories.ts              # Category Data Hook
│   │   ├── 📄 useEvents.ts                  # Event Data Hook
│   │   ├── 📄 useBookings.ts                # Booking Data Hook
│   │   └── 📄 index.ts                      # Export all hooks
│   │
│   ├── 📂 utils/                            # Utility Functions
│   │   ├── 📄 date.utils.ts                 # Date Formatting
│   │   ├── 📄 format.utils.ts               # Text/Currency Formatting
│   │   ├── 📄 validation.utils.ts           # Input Validation
│   │   ├── 📄 storage.utils.ts              # Browser Storage
│   │   └── 📄 index.ts                      # Export all utils
│   │
│   └── 📂 constants/                        # Application Constants
│       └── 📄 index.ts                      # Config & Enums
│
├── 📂 public/                               # Static Assets
│   └── (images, fonts, etc.)
│
├── 📄 .env.local                           # Environment Variables
├── 📄 .env.example                         # Example Env File
├── 📄 .gitignore                           # Git Ignore Rules
├── 📄 .eslintrc.json                       # ESLint Configuration
├── 📄 next.config.js                       # Next.js Config
├── 📄 tsconfig.json                        # TypeScript Config
├── 📄 tailwind.config.js                   # Tailwind Config
├── 📄 postcss.config.js                    # PostCSS Config
├── 📄 package.json                         # Dependencies
├── 📄 README.md                            # Project Documentation
└── 📄 STRUCTURE.md                         # Architecture Guide
```

## 🎯 Key Architecture Highlights

### 1. **Three-Level Category System**
```
Main Category (Music)
    └── Sub Category (Concerts)
        └── Category (Rock Concerts)
            └── Events
```

### 2. **State Management (Zustand)**
- `categoryStore` - Category tree & navigation
- `eventStore` - Events, filters, pagination
- `bookingStore` - Bookings & cart functionality
- `uiStore` - Modals, menus, notifications

### 3. **API Structure**
```
/api/categories                          → All main categories
/api/categories/[main]                   → Sub categories
/api/categories/[main]/[sub]             → Leaf categories
/api/events                              → All events
/api/events/[id]                         → Single event
/api/bookings                            → User bookings
/api/bookings/[id]                       → Single booking
```

### 4. **Component Organization**
- **Layout** - Header, Footer, Sidebar
- **Navigation** - Category navigation tree
- **Events** - Event cards, lists, filters
- **Bookings** - Booking cards, forms
- **Common** - Reusable UI components

### 5. **Data Flow**
```
Component → Hook → Store → Service → API → Database
                    ↓
                  Update → Re-render
```

## 📊 Statistics

- **Total Files**: ~60+
- **Pages**: 12 (including dynamic routes)
- **API Endpoints**: 7
- **Components**: 13+
- **Stores**: 4
- **Services**: 3
- **Types**: 4 type files
- **Hooks**: 3 custom hooks
- **Utils**: 4 utility modules

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Next Steps

1. Install dependencies: `npm install`
2. Set up environment variables in `.env.local`
3. Connect to your database
4. Implement authentication
5. Add payment integration
6. Deploy to Vercel

---

**Created with ❤️ for scalable event booking platform**
