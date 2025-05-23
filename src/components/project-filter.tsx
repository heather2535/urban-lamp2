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
  Layout,
  Package,
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
  "All Projects": <Folder className="h-4 w-4 sm:h-5 sm:w-5" />,
  "3D Design": <Grid className="h-4 w-4 sm:h-5 sm:w-5" />,
  "AI Integration": <Cpu className="h-4 w-4 sm:h-5 sm:w-5" />,
  Branding: <Tag className="h-4 w-4 sm:h-5 sm:w-5" />,
  "Data Vis": <BarChart className="h-4 w-4 sm:h-5 sm:w-5" />,
  "Graphic Design": <Palette className="h-4 w-4 sm:h-5 sm:w-5" />,
  "UI/UX": <Layers className="h-4 w-4 sm:h-5 sm:w-5" />,
  "UI/UX Design": <Layout className="h-4 w-4 sm:h-5 sm:w-5" />,
  "Product Design": <Package className="h-4 w-4 sm:h-5 sm:w-5" />,
  "Web Development": <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
}
export function ProjectFilter({ tags, selectedTag, onTagSelect, onSearch }: ProjectFilterProps) {
  // Move "All Projects" to the start of the tags array if it exists
  const sortedTags = ["All Projects", ...tags.filter((tag) => tag !== "All Projects")]

  // Set "All Projects" as default when no tag is selected
  useEffect(() => {
    if (!selectedTag) {
      onTagSelect("All Projects")
    }
  }, [selectedTag, onTagSelect])

  return (
    <div className="mb-8">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-wrap justify-center gap-3">
          {sortedTags.slice(0, Math.ceil(sortedTags.length / 2)).map((tag) => (
            <motion.button
              key={tag}
              onClick={() => onTagSelect(selectedTag === tag ? null : tag)}
              className={cn(
                "group flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 transition-all",
                selectedTag === tag || (tag === "All Projects" && !selectedTag)
                  ? "border-pink-500 bg-pink-500 text-white dark:bg-pink-600 dark:border-pink-600"
                  : "border-pink-200 bg-pink-100 hover:border-pink-500 hover:bg-pink-200 dark:bg-pink-900/30 dark:border-pink-800/50 dark:hover:bg-pink-900/50 dark:hover:border-pink-700",
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className={cn(
                  "flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full transition-colors",
                  selectedTag === tag || (tag === "All Projects" && !selectedTag)
                    ? "border-pink-500 bg-pink-500 text-white dark:bg-pink-600 dark:border-pink-600"
                    : "border-pink-200 bg-pink-100 hover:border-pink-500 hover:bg-pink-200 dark:bg-pink-900/30 dark:border-pink-800/50 dark:hover:bg-pink-900/50 dark:hover:border-pink-700",
                )}
              >
                {tagIcons[tag]}
              </span>
              <span className="text-xs font-medium">{tag}</span>
            </motion.button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {sortedTags.slice(Math.ceil(sortedTags.length / 2)).map((tag) => (
            <motion.button
              key={tag}
              onClick={() => onTagSelect(selectedTag === tag ? null : tag)}
              className={cn(
                "group flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 transition-all",
                selectedTag === tag || (tag === "All Projects" && !selectedTag)
                  ? "border-pink-500 bg-pink-500 text-white dark:bg-pink-600 dark:border-pink-600"
                  : "border-pink-200 bg-pink-100 hover:border-pink-500 hover:bg-pink-200 dark:bg-pink-900/30 dark:border-pink-800/50 dark:hover:bg-pink-900/50 dark:hover:border-pink-700",
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className={cn(
                  "flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full transition-colors",
                  selectedTag === tag || (tag === "All Projects" && !selectedTag)
                    ? "border-pink-500 bg-pink-500 text-white dark:bg-pink-600 dark:border-pink-600"
                    : "border-pink-200 bg-pink-100 hover:border-pink-500 hover:bg-pink-200 dark:bg-pink-900/30 dark:border-pink-800/50 dark:hover:bg-pink-900/50 dark:hover:border-pink-700",
                )}
              >
                {tagIcons[tag]}
              </span>
              <span className="text-xs font-medium">{tag}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
