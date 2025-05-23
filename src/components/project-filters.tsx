import * as React from "react"
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package } from "lucide-react"
import Link from "next/link"

// Define tagIcons with explicit typing for keys
const tagIcons: Record<string, React.ReactElement> = {
  "All Projects": <Folder className="h-3 w-3" />,
  "3D Design": <Grid className="h-3 w-3" />,
  "AI Integration": <Cpu className="h-3 w-3" />,
  "Branding": <Tag className="h-3 w-3" />,
  "Data Vis": <BarChart className="h-3 w-3" />,
  "Graphic Design": <Palette className="h-3 w-3" />,
  "UI/UX": <Layers className="h-3 w-3" />,
  "UI/UX Design": <Layout className="h-3 w-3" />,
  "Product Design": <Package className="h-3 w-3" />,
  "Web Development": <Code className="h-3 w-3" />,
}

const mainCategories = ["All Projects", ]
const subCategories = ["3D Design", "AI Integration", "Branding", "Data Vis", "Graphic Design"]

export function ProjectFilters({ selectedTag }: { selectedTag?: string }) {
  return (
    <div className="mb-8">
      {/* First Row - Main Categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {mainCategories.map((category) => (
          <Link 
            key={category} 
            href={`/projects?tag=${encodeURIComponent(category)}`}
            className="no-underline"
          >
            <span 
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                selectedTag === category
                  ? "bg-gray-200 text-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tagIcons[category]}
              {category}
            </span>
          </Link>
        ))}
      </div>

      {/* Second Row - Sub Categories */}
      <div className="flex flex-wrap gap-2">
        {subCategories.map((category) => (
          <Link 
            key={category} 
            href={`/projects?tag=${encodeURIComponent(category)}`}
            className="no-underline"
          >
            <span 
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                selectedTag === category
                  ? "bg-gray-200 text-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tagIcons[category]}
              {category}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
} 