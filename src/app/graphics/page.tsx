"use client"
import { AuraCursor } from "@/components/aura-cursor"
import { Navigation } from "@/components/navigation"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

const galleryImages = [
  { src: "/gallery/image1.jpg", alt: "Project 1", title: "Project 1" },
  { src: "/gallery/image2.gif", alt: "Project 2", title: "Project 2" },
  { src: "/gallery/image3.jpg", alt: "Project 3", title: "Project 3" },
  { src: "/gallery/image4.gif", alt: "Project 4", title: "Project 4" },
  { src: "/gallery/image5.png", alt: "Project 5", title: "Project 5" },
  { src: "/gallery/image6.jpg", alt: "Project 6", title: "Project 6" },
  { src: "/gallery/image7.png", alt: "Project 7", title: "Project 7" },
  { src: "/gallery/image8.png", alt: "Project 8", title: "Project 8" },
  { src: "/gallery/image9.png", alt: "Project 9", title: "Project 9" },
  { src: "/gallery/image10.png", alt: "Project 10", title: "Project 10" },
  { src: "/gallery/image11.jpg", alt: "Project 11", title: "Project 11" },
  { src: "/gallery/image12.jpg", alt: "Project 12", title: "Project 12" },


]

export default function GraphicsPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

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
              onClick={() => setSelectedImage(image)}
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogTitle>{selectedImage?.title}</DialogTitle>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
