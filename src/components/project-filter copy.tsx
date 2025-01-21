"use client"

import { Input } from "@/components/input"
import { cn } from "@/lib/utils"
import { Folder, Search, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, ChevronRight, ChevronLeft } from "lucide-react"
import { JSX, useEffect, useState, useRef } from "react"

interface ProjectFilterProps {
  tags: string[]
  selectedTag: string | null
  onTagSelect: (tag: string | null) => void
  onSearch: (search: string) => void
}

// Define tagIcons with explicit typing for keys
const tagIcons: Record<string, JSX.Element> = {
  "All Projects": <Folder className="h-5 w-5" />,
  "3D Design": <Grid className="h-5 w-5" />,
  "AI Integration": <Cpu className="h-5 w-5" />,
  Branding: <Tag className="h-5 w-5" />,
  "Data Visualization": <BarChart className="h-5 w-5" />,
  "Graphic Design": <Palette className="h-5 w-5" />,
  "UI/UX Design": <Layers className="h-5 w-5" />,
  "Web Development": <Code className="h-5 w-5" />,
}

export function ProjectFilter({ tags, selectedTag, onTagSelect, onSearch }: ProjectFilterProps) {
  const [showMore, setShowMore] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Ensure "All Projects" is selected by default
  useEffect(() => {
    if (!selectedTag) {
      onTagSelect("All Projects")
    }
  }, [selectedTag, onTagSelect])

  // Move "All Projects" to the start of the tags array if it exists
  const sortedTags = ["All Projects", ...tags.filter((tag) => tag !== "All Projects")]

  // Scroll the carousel left and right
  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjusted width for each tag (this can be increased or decreased depending on the desired size)
      const currentScroll = carouselRef.current.scrollLeft
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth

      if (direction === "left") {
        carouselRef.current.scrollTo({
          left: Math.max(currentScroll - scrollAmount, 0),
          behavior: "smooth",
        })
      } else {
        carouselRef.current.scrollTo({
          left: Math.min(currentScroll + scrollAmount, maxScroll),
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <div className="mb-8 flex flex-col gap-4">
      {/* Tags Carousel */}
      <div className="relative flex items-center gap-2 overflow-hidden">
        {/* Left Arrow Button */}
        <button
          className="px-2 py-1 flex items-center justify-center bg-muted-foreground rounded-full hover:bg-muted"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft className="h-5 w-5 text-muted-foreground" />
        </button>

        <div
          ref={carouselRef}
          className="flex-nowrap gap-4 overflow-x-auto hide-scrollbar"
        >
          {sortedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagSelect(selectedTag === tag ? null : tag)}
              className={cn(
                "inline-flex items-center rounded-full px-6 py-3 text-sm font-normal transition-colors pr-10",  // Increased padding for longer tags
                selectedTag === tag
                  ? "bg-input text-foreground pr-40"
                  : "pr-40 bg-transparent text-muted-foreground hover:bg-input hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "-ml-2 flex h-12 w-14 items-center justify-center rounded-full border-2 border-muted-foreground",
                  selectedTag === tag && "border-primary text-primary"
                )}
              >
                {tagIcons[tag]}
              </span>
              <span className="ml-3 whitespace-nowrap">{tag}</span> {/* Ensure the tag text stays on one line */}
            </button>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          className="px-2 py-1 flex items-center justify-center bg-muted-foreground rounded-full hover:bg-muted"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xs ml-auto">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search projects..."
          className="pl-10" // Ensure there's enough space for the icon
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  )
}
