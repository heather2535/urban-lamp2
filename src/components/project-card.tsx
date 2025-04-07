import { Calendar, Share } from "lucide-react" // Import the Share icon
import { useState } from "react"
import Link from "next/link"
import { Project } from "@/types/project"

export function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false) // Track hover state for zoom effect

  return (
    <div
      className="relative block overflow-hidden bg-card transition-colors hover:bg-accent rounded-md mb-4" // Card hover effect
      onMouseEnter={() => setIsHovered(true)} // Trigger hover state
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {/* Image Section */}
      <div className="px-2 py-2 border border-input rounded-lg relative aspect-[21/9] overflow-hidden h-[250px]">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`rounded-lg object-cover transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`} // Apply zoom on hover
        />
      </div>

      {/* Title and Description - Linkable Content */}
      <Link href={project.href} passHref>
        <div className="p-4">
          <h3
            className={`text-xl font-semibold transition-colors ${isHovered ? "text-blue-500" : "text-black dark:text-white"}`} // Title turns blue on hover
          >
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
          <p className="mt-2 text-sm text-muted-foreground mb-20">{project.description}</p>
        </div>
      </Link>

      {/* Always Visible Metadata */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center gap-2 text-white">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{project.date}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags
            .filter((tag) => tag !== "All Projects") // Exclude the "All Projects" tag
            .map((tag) => (
              <span key={tag} className="badge badge-secondary text-xs">
                {tag}
              </span>
            ))}
        </div>
      </div>

      {/* Share Button */}
      <button
        className="border border-input absolute bottom-4 right-4 p-2 rounded-full bg-transparent text-white hover:bg-transparent"
        onClick={(e) => {
          e.stopPropagation() // Prevent the link from being followed when clicking the share button
          // Handle share functionality here
        }}
      >
        <Share className="h-5 w-5" />
      </button>
    </div>
  )
}
