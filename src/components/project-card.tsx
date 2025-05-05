import { Calendar, Share } from "lucide-react" // Import the Share icon
import { useState } from "react"
import Link from "next/link"
import { Project } from "@/types/project"

export function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false) // Track hover state for zoom effect

  return (
    <div
      className="relative block  h-[400px]  overflow-hidden bg-transparent transition-colors rounded-md mb-4" // Card hover effect
      onMouseEnter={() => setIsHovered(true)} // Trigger hover state
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {/* Image Section */}
      <div className="border border-input rounded-lg overflow-hidden h-[200px] flex items-center justify-center"> {/* Reduced height */}
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`rounded-lg object-cover w-full h-full transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`} // Make image fill the container
        />
      </div>

      {/* Title and Description - Linkable Content */}
      <Link href={project.href} passHref>
        <div className="p-3"> {/* Reduced padding */}
          {/* Always Visible Metadata */}
          <div className="mb-3"> {/* Reduced margin */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4 text-pink-500" />
              <span className="text-sm">{project.date}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            className={`text-md font-bold transition-colors ${isHovered ? "text-blue-500" : "text-black dark:text-white"}`} // Title turns blue on hover
          >
            {project.title}
          </h3>

          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags
              .filter((tag) => tag !== "All Projects") // Exclude the "All Projects" tag
              .map((tag) => (
                <span key={tag} className="badge badge-secondary text-xs">
                  {tag}
                </span>
              ))}
          </div>

          <p className="mt-2 text-sm text-muted-foreground mb-16">{project.description}</p> {/* Adjusted bottom margin */}
        </div>
      </Link>

      {/* Share Button */}
      <button
        className="border border-input absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-white text-black hover:bg-transparent"
        onClick={(e) => {
          e.stopPropagation() // Prevent the link from being followed when clicking the share button
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
