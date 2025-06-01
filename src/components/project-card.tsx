import * as React from "react"
import { Calendar, Share, Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package } from "lucide-react" // Import the Share icon
import { useState } from "react"
import Link from "next/link"
import { Project } from "@/types/project"

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

export function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false) // Track hover state for zoom effect

  return (
    <div
      className="relative block overflow-hidden bg-white dark:bg-gray-800 transition-colors rounded-xl mb-4 shadow-lg hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <Link href={project.href} className="block">
        <div className="border border-input rounded-t-lg overflow-hidden h-[200px] flex items-center justify-center">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
            className={`object-cover w-full h-full transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
        />
      </div>
      </Link>

      {/* Title and Description - Linkable Content */}
      <Link href={project.href} passHref>
        <div className="p-4">
          {/* Title */}
          <h3
            className={`text-md font-bold transition-colors ${isHovered ? "text-blue-500" : "text-black dark:text-white"}`}
          >
            {project.title}
          </h3>

          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags
              .filter((tag) => tag !== "All Projects")
              .map((tag) => (
                <Link 
                  key={tag} 
                  href={`/projects?tag=${encodeURIComponent(tag)}`}
                  className="no-underline"
                >
                  <span 
                    key={tag} 
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border-pink-200 bg-pink-100 hover:border-pink-500 hover:bg-pink-200 dark:bg-pink-900/30 dark:border-pink-800/50 dark:hover:bg-pink-900/50 dark:hover:border-pink-700 text-pink-700 dark:text-pink-100 transition-colors cursor-pointer"
                  >
                    {tagIcons[tag]}
                  {tag}
                </span>
                </Link>
              ))}
          </div>

          <h3 className="mt-2 text-sm text-muted-foreground">{project.description}</h3>
        </div>
      </Link>

      {/* Share Button */}
      <button
        className="border border-input absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-white text-black hover:bg-transparent"
        onClick={(e) => {
          e.stopPropagation()
          if (navigator.share) {
        navigator.share({
          title: project.title,
          text: project.description,
          url: project.href,
        }).catch((error) => console.error("Error sharing:", error))
          } else {
        console.log("Web Share API not supported in this browser.")
          }
        }}
      >
        <Share className="h-5 w-5" />
      </button>
    </div>
  )
}
