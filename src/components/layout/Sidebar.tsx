/**
 * Sidebar Component
 * For filters, categories, etc.
 */

'use client'

import { useUIStore } from '@/store'

export default function Sidebar() {
  const { isSidebarOpen } = useUIStore()

  if (!isSidebarOpen) return null

  return (
    <aside className="sidebar">
      {/* Sidebar content */}
    </aside>
  )
}
