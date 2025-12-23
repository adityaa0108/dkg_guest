/**
 * UI Store - Manages UI-related state
 */
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface UIState {
  // Navigation
  isMobileMenuOpen: boolean
  isCategoryMenuOpen: boolean
  
  // Modals
  modals: {
    [key: string]: boolean
  }
  
  // Sidebar
  isSidebarOpen: boolean
  
  // Search
  isSearchOpen: boolean
  searchQuery: string
  
  // Toast/Notifications
  notifications: Notification[]
  
  // Theme
  theme: 'light' | 'dark' | 'system'
  
  // Actions
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
  
  toggleCategoryMenu: () => void
  closeCategoryMenu: () => void
  
  openModal: (modalId: string) => void
  closeModal: (modalId: string) => void
  toggleModal: (modalId: string) => void
  
  toggleSidebar: () => void
  
  openSearch: () => void
  closeSearch: () => void
  setSearchQuery: (query: string) => void
  
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
  
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
  duration?: number
}

export const useUIStore = create<UIState>()(
  devtools(
    (set, get) => ({
      // Initial state
      isMobileMenuOpen: false,
      isCategoryMenuOpen: false,
      modals: {},
      isSidebarOpen: false,
      isSearchOpen: false,
      searchQuery: '',
      notifications: [],
      theme: 'system',
      
      // Actions
      toggleMobileMenu: () => 
        set(state => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
      
      closeMobileMenu: () => 
        set({ isMobileMenuOpen: false }),
      
      toggleCategoryMenu: () => 
        set(state => ({ isCategoryMenuOpen: !state.isCategoryMenuOpen })),
      
      closeCategoryMenu: () => 
        set({ isCategoryMenuOpen: false }),
      
      openModal: (modalId) => 
        set(state => ({ 
          modals: { ...state.modals, [modalId]: true } 
        })),
      
      closeModal: (modalId) => 
        set(state => ({ 
          modals: { ...state.modals, [modalId]: false } 
        })),
      
      toggleModal: (modalId) => 
        set(state => ({ 
          modals: { ...state.modals, [modalId]: !state.modals[modalId] } 
        })),
      
      toggleSidebar: () => 
        set(state => ({ isSidebarOpen: !state.isSidebarOpen })),
      
      openSearch: () => 
        set({ isSearchOpen: true }),
      
      closeSearch: () => 
        set({ isSearchOpen: false, searchQuery: '' }),
      
      setSearchQuery: (query) => 
        set({ searchQuery: query }),
      
      addNotification: (notification) => {
        const id = `notification_${Date.now()}`
        set(state => ({
          notifications: [...state.notifications, { ...notification, id }]
        }))
        
        // Auto-remove after duration
        if (notification.duration) {
          setTimeout(() => {
            get().removeNotification(id)
          }, notification.duration)
        }
      },
      
      removeNotification: (id) => 
        set(state => ({
          notifications: state.notifications.filter(n => n.id !== id)
        })),
      
      clearNotifications: () => 
        set({ notifications: [] }),
      
      setTheme: (theme) => 
        set({ theme }),
    }),
    { name: 'UIStore' }
  )
)
