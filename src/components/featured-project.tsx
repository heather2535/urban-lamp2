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
    imageUrl?: string
  }[]
}

// Add a mapping of tags to their images
const tagImages: { [key: string]: string } = {
  "UI/UX Design": "/images/image1.jpg",
  "Product Design": "/image10.png",
  "Web Development": "/image1.png",
  "Graphic Design": "/image13.png",
  "Branding": "/image5.png",
}

export function FeaturedProject({ projects }: FeaturedProjectProps) {
  const [currentImage, setCurrentImage] = useState("/images/image1.jpg")
  const [nextImage, setNextImage] = useState("/image10.jpg")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [activeTag, setActiveTag] = useState("UI/UX Design")
  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))
  const images = Object.values(tagImages)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Get array of tag names in the same order as images
  const orderedTags = Object.keys(tagImages)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length
      setNextImage(images[nextIndex])
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentImage(images[nextIndex])
        setCurrentIndex(nextIndex)
        // Set the active tag to match the current image
        setActiveTag(orderedTags[nextIndex])
        setIsTransitioning(false)
      }, 700)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, images, orderedTags])

  // Update handleTagClick to also update currentIndex
  const handleTagClick = (tag: string) => {
    const tagIndex = orderedTags.indexOf(tag)
    if (tagIndex !== -1) {
      setActiveTag(tag)
      setIsTransitioning(true)
      setCurrentIndex(tagIndex)
      setCurrentImage(images[tagIndex])
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }
  }

  // Create a mapping for tags to their respective icons
  const tagIcons: { [key: string]: JSX.Element } = {
    "UI/UX Design": <Cpu className="h-4 w-4 sm:h-5 sm:w-5" />,
    "Web Development": <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
    "Product Design": <BarChart className="h-4 w-4 sm:h-5 sm:w-5" />,
    "Branding": <Palette className="h-4 w-4 sm:h-5 sm:w-5" />,
    "Graphic Design": <Cpu className="h-4 w-4 sm:h-5 sm:w-5" />,
  }

  // Slice the tags to only show the first 4
  const displayedTags = allTags.slice(1, 6);

  return (
    <div className="mb-24 -mt-16 container mx-auto max-w-full border-pink-500">
      {/* Tags and Text Section */}
      
        
     

      <div className="relative z-20 mb-4">
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
           
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="bg-pink-400/20 border-[1px] border-pink-300/40 max-w-4xl mx-auto rounded-[20px] p-5 relative"
        style={{
          boxShadow: "0 -30px 100px 20px rgba(236, 72, 153, 0.2)",
        }}>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src={currentImage}
                alt={`Featured project for ${activeTag}`}
                className="rounded-lg h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
