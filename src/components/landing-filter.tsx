"use client"

import { Input } from "@/components/input"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

interface LandingFilterProps {
  tags: string[]
  selectedTag: string | null
  onTagSelect: (tag: string | null) => void
  onSearch: (search: string) => void
}

export function LandingFilter({ tags, selectedTag, onTagSelect, onSearch }: LandingFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2 sm:gap-4 border border-primary/40 px-2 py-2 max-w-4xl mx-auto rounded-full">
      <div className="flex flex-wrap gap-1 sm:gap-2 w-full justify-center">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagSelect(selectedTag === tag ? null : tag)}
            className={cn(
              "inline-flex px-3 sm:px-6 items-center rounded-full py-2 sm:py-3 text-xs font-normal transition-colors hover:bg-primary/20 hover:text-secondary-foreground",
              selectedTag === tag && "bg-primary/20 text-secondary-foreground",
            )}
          >
            {tag}
          </button>
        ))}
      </div>
      
    </div>
  )
}
