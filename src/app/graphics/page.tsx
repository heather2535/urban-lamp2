"use client"
import { AuraCursor } from "@/components/aura-cursor"
import { Navigation } from "@/components/navigation"

const galleryImages = [
  { src: "/gallery/image1.jpg", alt: "Project 1" },
  { src: "/gallery/image2.jpg", alt: "Project 2" },
  { src: "/gallery/image3.jpg", alt: "Project 3" },
  { src: "/gallery/image4.jpg", alt: "Project 4" },
  { src: "/gallery/image5.jpg", alt: "Project 5" },
  { src: "/gallery/image6.jpg", alt: "Project 6" },
]

export default function GraphicsPage() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
