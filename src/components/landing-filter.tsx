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
    <div className="mb-8 flex flex-wrap items-center gap-4 border border-primary/40 px-2 py-2 max-w-4xl mx-auto rounded-full">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagSelect(selectedTag === tag ? null : tag)}
            className={cn(
              "inline-flex items-center rounded-full  px-3 py-3 text-xs font-normal transition-colors hover:bg-primary/20 hover: text-secondary-foreground",
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
