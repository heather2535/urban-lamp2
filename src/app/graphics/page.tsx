"use client"
import { AuraCursor } from "@/components/aura-cursor"
import { Navigation } from "@/components/navigation"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const galleryImages = [
  { src: "/gallery/image1.jpg", alt: "12/12 Aventura Rendering", title: "12/12 Aventura Rendering" },
  { src: "/gallery/image2.gif", alt: "Graphic Design Place Branding", title: "Graphic Design Place Branding" },
  { src: "/gallery/image3.jpg", alt: "Land of The Rising Sun Editorial", title: "Land of The Rising Sun Editorial" },
  { src: "/gallery/image4.gif", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image5.png", alt: "Muse Marketing Editorial Design", title: "Muse Marketing Editorial Design" },
  { src: "/gallery/image6.jpg", alt: "Project 6", title: "Project 6" },
  { src: "/gallery/image7.png", alt: "Project 7", title: "Project 7" },
  { src: "/gallery/image8.png", alt: "Project 8", title: "Project 8" },
  { src: "/gallery/image9.png", alt: "Project 9", title: "Project 9" },
  { src: "/gallery/image10.png", alt: "Project 10", title: "Project 10" },
  { src: "/gallery/image11.jpg", alt: "Project 11", title: "Project 11" },
  { src: "/gallery/image12.jpg", alt: "Project 12", title: "Project 12" },
]

const tags = ["All", "3D", "Editorial", "Branding", "UI/UX", "Motion"]

export default function GraphicsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const showNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % galleryImages.length)
  }

  const showPrevious = () => {
    if (selectedIndex === null) return
    setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1)
  }

  return (
    <div className="group min-h-screen bg-background">
      <AuraCursor />
      <Navigation />

      {/* Title Section */}
      <section className="flex items-center justify-center px-4">
        <div className="flex items-center justify-center relative w-full py-32 sm:py-48">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="container relative z-20">
            <div className="mx-auto max-w-5xl text-center">
              <div className="relative">
                <div className="absolute inset-0 blur-3xl -z-10 bg-[radial-gradient(circle,rgba(236,72,153,0.6)_0%,transparent_70%)]" />
                <h1 className="text-foreground text-7xl font-semibold tracking-tight text-center">
                  Graphics
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="flex mx-auto w-full bg-gradient-to-b from-background to-accent/20 px-4 sm:px-12">
        <div className="container mx-auto">
          <h2 className="text-foreground text-3xl font-bold tracking-tight mb-6">
            Tags
          </h2>
          <div className="flex flex-wrap gap-3 mb-8 max-w-full">
            {tags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setSelectedTag(tag === "All" ? null : tag)}
                className={cn(
                  "group flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 transition-all",
                  selectedTag === tag || (tag === "All" && !selectedTag)
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:border-primary hover:bg-primary/10"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium">{tag}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </section>

      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-6xl">
          <DialogTitle>{selectedIndex !== null ? galleryImages[selectedIndex].title : ""}</DialogTitle>
          <div className="relative">
            {selectedIndex !== null && (
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`h-20 w-auto cursor-pointer rounded-md transition-opacity ${
                  selectedIndex === index ? 'opacity-100 ring-2 ring-primary' : 'opacity-50 hover:opacity-100'
                }`}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
