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
      className={
        `relative block overflow-hidden bg-white dark:bg-gray-800 transition-colors rounded-md mb-4 shadow-2xl hover:shadow-xl transition-transform duration-300 ${isHovered ? 'rotate-2' : ''}`
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Orange tape on top */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-5 w-40 h-4 bg-orange-300 rounded-none z-20 opacity-70 rotate-3"></div>
      {/* Image Section */}
      <Link href={project.href} className="block">
        <div className="rounded-t-lg overflow-hidden h-[200px] flex items-center justify-center p-6">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-300"
        />
      </div>
      </Link>

      {/* Title and Description - Linkable Content */}
      <Link href={project.href} passHref>
        <div className="p-4">
          {/* Title */}
          <h3
            className={`text-xl font-mono font-bold transition-colors ${isHovered ? "text-gray-900" : "text-gray-900"}`}
          >
            {project.title}
          </h3>

          <p className="font-mono text-sm mb-4 font-extralight leading-relaxed text-gray-600">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags
              .filter((tag) => tag !== "All Projects")
              .slice(0, 3)
              .map((tag, index) => {
                const colors = [
                  "bg-blue-100 text-blue-800",
                  "bg-green-100 text-green-800", 
                  "bg-purple-100 text-purple-800",
                  "bg-orange-100 text-orange-800",
                  "bg-pink-100 text-pink-800",
                  "bg-indigo-100 text-indigo-800"
                ]
                return (
                  <span 
                    key={tag} 
                    className={`font-mono px-2 py-1 rounded-sm text-xs ${colors[index % colors.length]}`}
                  >
                    {tag}
                  </span>
                )
              })}
          </div>
        </div>
      </Link>

      
    </div>
  )
}
