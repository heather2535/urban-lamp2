import { JSX, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Folder, BarChart, Layers, Palette, Tag } from "lucide-react"

interface FeaturedProjectProps {
  projects: {
    title: string
    description: string
    tags: string[]
    videoUrl?: string
  }[]
}

export function FeaturedProject({ projects }: FeaturedProjectProps) {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [activeTag, setActiveTag] = useState<string | null>(null) // Track active tag
  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

  // Function to handle the video change with a delay to trigger transition
  const handleProjectChange = (project: typeof selectedProject) => {
    if (project !== selectedProject) {
      setIsTransitioning(true)
      setTimeout(() => {
        setSelectedProject(project)
        setIsTransitioning(false)
      }, 300) // Delay to allow transition to complete
    }
  }

  // Function to handle tag click
  const handleTagClick = (tag: string) => {
    setActiveTag(tag)
    const project = projects.find((p) => p.tags.includes(tag))
    if (project) handleProjectChange(project)
  }

  // Create a mapping for tags to their respective icons
  const tagIcons: { [key: string]: JSX.Element } = {
    "web dev": <Folder className="h-5 w-5" />,
    "data vis": <BarChart className="h-5 w-5" />,
    "ui ux": <Layers className="h-5 w-5" />,
    "palette": <Palette className="h-5 w-5" />,
    "branding": <Tag className="h-5 w-5" />,
  }

  // Slice the tags to only show the first 4
  const displayedTags = allTags.slice(1, 6);

  return (
    <div className="container mx-auto max-w-full border-pink-500">
      {/* Border with glow effect */}
      <div className="bg-pink-400/20 border-[1px] border-pink-300/40 max-w-6xl mx-auto rounded-[20px] p-5 relative"
        style={{
          boxShadow: "0 -30px 100px 20px rgba(236, 72, 153, 0.2)", // Adjust as needed
        }}>
        {/* Container for both the video and the glow */}
        <div className="relative">
          {/* Video content placed on top of the glow */}
          <div className="relative z-10">
            {/* Apply transition for smooth fade/slide */}
            <video
              key={selectedProject.videoUrl}
              className={cn(
                "rounded-lg h-full w-full object-cover transition-opacity duration-700 ease-in-out",
                isTransitioning && "opacity-0" // Make video invisible during transition
              )}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={selectedProject.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Full-Width Section Cutting Off Video */}
      <div className="relative -mt-20 z-20 border-t border-b">
        <div
          className="w-full h-32 bg-background flex items-center justify-center"
          style={{
            boxShadow: "0 -80px 100px 20px rgba(128, 0, 128, 0.5)", // Adjust as needed
          }}
        >
          {/* Tags Section inside Full-Width Section */}
          <div className="max-w-5xl w-full border-2 px-5 py-3 rounded-full mt-6 flex flex-wrap items-center justify-center">
            <div
              className="flex transition-all ease-in-out duration-500 gap-3"
              style={{
                transform: activeTag ? "translateX(-10px)" : "translateX(0)", // Shift when tag is clicked
              }}
            >
              {displayedTags.map((tag) => (
                <motion.button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={cn(
                    "group flex items-center gap-2 whitespace-nowrap rounded-full border px-6 py-3 transition-all",
                    activeTag === tag
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:border-primary hover:bg-primary/10"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                      activeTag === tag
                        ? "bg-primary-foreground text-primary"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                    )}
                  >
                    {/* Correct icon rendering based on tag */}
                    {tagIcons[tag.toLowerCase()] || <Tag className="h-5 w-5" />}
                  </span>
                  <span className="text-sm font-medium">{tag}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
