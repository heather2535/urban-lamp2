"use client"

import { useState } from 'react'
import { Input } from "@/components/input"

export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  return (
    <div className="mb-8">
      <Input
        type="text"
        placeholder="Search projects..."
        value={query}
        onChange={handleSearch}
        className="w-full max-w-md"
      />
    </div>
  )
}

