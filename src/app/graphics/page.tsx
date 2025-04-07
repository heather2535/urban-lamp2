"use client"
import { AuraCursor } from "@/components/aura-cursor"
import { Navigation } from "@/components/navigation"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

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

export default function GraphicsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

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

      {/* Simple Title Section */}
      <section className="flex items-center justify-center px-4 pt-32">
        <div className="container relative z-20">
          <h1 className="text-foreground text-7xl font-semibold tracking-tight text-center">
            Graphics
          </h1>
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
              <>
                <img
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].alt}
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={showPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={showNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
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
