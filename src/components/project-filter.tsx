"use client"

import { Input } from "@/components/input"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import {
  Folder,
  Search,
  Grid,
  Cpu,
  Tag,
  BarChart,
  Palette,
  Layers,
  Code,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import { type JSX, useEffect, useState, useRef } from "react"

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
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  // Ensure "All Projects" is selected by default
  useEffect(() => {
    if (!selectedTag) {
      onTagSelect("All Projects")
    }
  }, [selectedTag, onTagSelect])

  // Check scroll possibilities
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      }
    }

    checkScroll()
    scrollContainerRef.current?.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)

    return () => {
      scrollContainerRef.current?.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  // Move "All Projects" to the start of the tags array if it exists
  const sortedTags = ["All Projects", ...tags.filter((tag) => tag !== "All Projects")]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="mb-8 flex flex-col gap-4">
      <div className="relative flex items-center gap-2">
        {/* Left scroll button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: canScrollLeft ? 1 : 0 }}
          className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm"
          onClick={() => scroll("left")}
          style={{ display: canScrollLeft ? "flex" : "none" }}
        >
          <ChevronLeft className="h-4 w-4" />
        </motion.button>

        {/* Tags container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-10 py-10 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {sortedTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => onTagSelect(selectedTag === tag ? null : tag)}
              className={cn(
                "group flex items-center gap-2 whitespace-nowrap rounded-full border px-6 py-3 transition-all",
                selectedTag === tag
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:border-primary hover:bg-primary/10",
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                  selectedTag === tag
                    ? "bg-primary-foreground text-primary"
                    : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary",
                )}
              >
                {tagIcons[tag]}
              </span>
              <span className="text-sm font-medium">{tag}</span>
            </motion.button>
          ))}
        </div>

        {/* Right scroll button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: canScrollRight ? 1 : 0 }}
          className="border border-input absolute right-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 shadow-md backdrop-blur-sm"
          onClick={() => scroll("right")}
          style={{ display: canScrollRight ? "flex" : "none" }}
        >
          <ChevronRight className="h-4 w-4" />
        </motion.button>
      </div>


    </div>
  )
}
