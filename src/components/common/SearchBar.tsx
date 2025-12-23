/**
 * SearchBar Component
 */

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUIStore } from '@/store'

export default function SearchBar() {
  const router = useRouter()
  const { searchQuery, setSearchQuery } = useUIStore()
  const [localQuery, setLocalQuery] = useState(searchQuery)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(localQuery)
    router.push(`/search?q=${encodeURIComponent(localQuery)}`)
  }

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search events..."
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}
