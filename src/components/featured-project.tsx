import { JSX, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
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
 
} from "lucide-react"
import { ScrollingLogos } from "./scrolling-logos"

interface FeaturedProjectProps {
  projects: {
    title: string
    description: string
    tags: string[]
    videoUrl?: string
  }[]
}

// Add a mapping of tags to their videos
const tagVideos: { [key: string]: string } = {
  "Web Development": "/video1.mov",
  "Data Vis": "/video4.mov",
  "UI/UX": "/video3.mov",
  "Graphic Design": "/video4.mov",
  "Branding": "/video3.mov",
}

export function FeaturedProject({ projects }: FeaturedProjectProps) {
  const [currentVideo, setCurrentVideo] = useState("/video1.mov")
  const [nextVideo, setNextVideo] = useState("/video5.mov")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [activeTag, setActiveTag] = useState("Web Development")
  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))
  const videos = Object.values(tagVideos)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Get array of tag names in the same order as videos
  const orderedTags = Object.keys(tagVideos)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % videos.length
      setNextVideo(videos[nextIndex])
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentVideo(videos[nextIndex])
        setCurrentIndex(nextIndex)
        // Set the active tag to match the current video
        setActiveTag(orderedTags[nextIndex])
        setIsTransitioning(false)
      }, 700)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, videos, orderedTags])

  // Update handleTagClick to also update currentIndex
  const handleTagClick = (tag: string) => {
    const tagIndex = orderedTags.indexOf(tag)
    if (tagIndex !== -1) {
      setActiveTag(tag)
      setIsTransitioning(true)
      setCurrentIndex(tagIndex)
      setCurrentVideo(videos[tagIndex])
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }
  }

  // Create a mapping for tags to their respective icons
  const tagIcons: { [key: string]: JSX.Element } = {
    "Web Development": <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
    "Data Vis": <BarChart className="h-4 w-4 sm:h-5 sm:w-5" />,
    "UI/UX": <Layers className="h-4 w-4 sm:h-5 sm:w-5" />,
    "Graphic Design": <Palette className="h-4 w-4 sm:h-5 sm:w-5" />,
    "Branding": <Tag className="h-4 w-4 sm:h-5 sm:w-5" />,
    "3D Design": <Grid className="h-4 w-4 sm:h-5 sm:w-5" />,
    "AI Integration": <Cpu className="h-4 w-4 sm:h-5 sm:w-5" />,
  }

  // Slice the tags to only show the first 4
  const displayedTags = allTags.slice(1, 6);

  return (
    <div className="container mx-auto max-w-full border-pink-500">
      {/* Tags and Text Section */}
      <div className="relative z-20 mb-8">
        <div className="w-full">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
              {/* Tags */}
              <div className="w-full max-w-6xl px-2 sm:px-5 py-2 sm:py-3 rounded-full flex items-center justify-center">
                <div
                  className="flex flex-wrap lg:flex-nowrap justify-center transition-all ease-in-out duration-500 gap-2 sm:gap-3"
                  style={{
                    transform: activeTag ? "translateX(-10px)" : "translateX(0)",
                  }}
                >
                  {displayedTags.map((tag) => (
                    <motion.button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={cn(
                        "group flex items-center gap-1 sm:gap-2 whitespace-nowrap rounded-full border px-2 sm:px-4 py-1.5 sm:py-2 transition-all",
                        activeTag === tag
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-gray-300 dark:border-border bg-background/20 hover:border-primary hover:bg-primary/10"
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span
                        className={cn(
                          "flex h-6 sm:h-8 w-6 sm:w-8 items-center justify-center rounded-full transition-colors",
                          activeTag === tag
                            ? "bg-primary-foreground text-primary"
                            : "bg-gray-200 dark:bg-background/30 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                        )}
                      >
                        {tagIcons[tag] || <Tag className="h-4 sm:h-5 w-4 sm:w-5" />}
                      </span>
                      <span className="text-xs sm:text-sm font-medium">{tag}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Streamlining Text */}
              <div className="text-center text-gray-700 dark:text-white/70 mt-4 mb-8">
                <p className="text-sm font-regular max-w-3xl px-6">
                  Streamlining deployments, automating workflows, optimizing performance, and ensuring the long-term stability of your websites and applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-pink-400/20 border-[1px] border-pink-300/40 max-w-4xl mx-auto rounded-[20px] p-5 relative"
        style={{
          boxShadow: "0 -30px 100px 20px rgba(236, 72, 153, 0.2)",
        }}>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVideo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative z-10"
            >
              <video
                className="rounded-lg h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
