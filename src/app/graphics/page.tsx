"use client"
import { AuraCursor } from "@/components/aura-cursor"
import { Navigation } from "@/components/navigation"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const galleryImages = [
  { src: "/gallery/image13.png", alt: "Grunge Never Dies", title: "Editorial Design of Grunge Never Dies: A Tribute to the Grunge Era" },
  { src: "/gallery/image14.jpg", alt: "Graphic Design Place Branding", title: "Graphic Design Place Branding" },
  { src: "/gallery/image15.jpg", alt: "Land of The Rising Sun Editorial", title: "Land of The Rising Sun Editorial" },
  { src: "/gallery/image16.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image17.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image18.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image19.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image20.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image21.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image22.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image23.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image24.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image25.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image26.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image27.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image28.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image29.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image36.png", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image38.png", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image39.png", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image40.png", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image41.png", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image42.png", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image43.png", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image44.png", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image45.png", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image46.png", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image47.png", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  
]

const tags = ["All", "3D", "Editorial", "Branding", "UI/UX", "Motion"]

const firstContainerImages = [
  { src: "/gallery/image42.png", alt: "Audiozic Prototype 1" },
  { src: "/gallery/image43.png", alt: "Audiozic Prototype 2" },
  { src: "/gallery/image44.png", alt: "Audiozic Prototype 3" },
  { src: "/gallery/image45.png", alt: "Audiozic Prototype 4" },
  { src: "/gallery/image46.png", alt: "Audiozic Prototype 5" },
  { src: "/gallery/image47.png", alt: "Audiozic Prototype 6" },
  { src: "/gallery/image42.png", alt: "Audiozic Prototype 7" },
  { src: "/gallery/image43.png", alt: "Audiozic Prototype 8" },
  { src: "/gallery/image44.png", alt: "Audiozic Prototype 9" },
  { src: "/gallery/image45.png", alt: "Audiozic Prototype 10" },
  { src: "/gallery/image46.png", alt: "Audiozic Prototype 11" },
  { src: "/gallery/image47.png", alt: "Audiozic Prototype 12" }
];

const thirdContainerImages = [
  { src: "/gallery/image35.jpg", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
  { src: "/gallery/image36.jpg", alt: "Muse Marketing Editorial Design", title: "Muse Marketing Editorial Design" },
  { src: "/gallery/image48.jpg", alt: "Project 6", title: "Project 6" },
  { src: "/gallery/image49.jpg", alt: "Project 7", title: "Project 7" },
  { src: "/gallery/image50.jpg", alt: "Project 8", title: "Project 8" }
];

export default function GraphicsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedContainer, setSelectedContainer] = useState<string | null>(null)
  const pathname = usePathname()

  const showNext = () => {
    if (selectedIndex === null || selectedContainer === null) return
    const currentImages = 
      selectedContainer === 'first' ? firstContainerImages :
      selectedContainer === 'third' ? thirdContainerImages :
      galleryImages
    setSelectedIndex((selectedIndex + 1) % currentImages.length)
  }

  const showPrevious = () => {
    if (selectedIndex === null || selectedContainer === null) return
    const currentImages = 
      selectedContainer === 'first' ? firstContainerImages :
      selectedContainer === 'third' ? thirdContainerImages :
      galleryImages
    setSelectedIndex(selectedIndex === 0 ? currentImages.length - 1 : selectedIndex - 1)
  }

  return (
    <div className="group min-h-screen bg-background fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-black dark:via-[#1a2a3a] dark:to-[#6a4e92]">
      <AuraCursor />
      <Navigation />

      {/* Title Section */}
      <section className="flex items-center justify-center px-4">
        <div className="flex items-center justify-center relative w-full py-16 sm:py-24">
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

     
      {/* First Container */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              {/* First Project - 1/2 width */}
              <div className="w-1/2">
                <div 
                  className="relative cursor-pointer hover:opacity-90 transition-opacity flex flex-col h-full"
                  onClick={() => {
                    setSelectedIndex(0)
                    setSelectedContainer('first')
                  }}
                >
                  <div className="flex-grow">
                    <img
                      src="/gallery/image36.png"
                      alt="Chaos & Order"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Chaos & Order: Graphic Design Thesis</h3>
                    <p className="text-muted-foreground">Click to view full project</p>
                  </div>
                </div>
              </div>

              {/* Grid of Images - 1/2 width */}
              <div className="w-1/2">
                <div className="grid grid-cols-4 gap-2 h-full">
                  {firstContainerImages.map((image, index) => (
                    <div 
                      key={index}
                      className="aspect-[4/3] overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => {
                        setSelectedIndex(index)
                        setSelectedContainer('first')
                      }}
                    >
                      <div className="relative h-full">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Container Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-2">
              {[
                { src: "/gallery/image5.png", alt: "Audiozic Prototype", title: "Audiozic Prototype" },
                { src: "/gallery/image30.png", alt: "Muse Marketing Editorial Design", title: "Muse Marketing Editorial Design" },
                { src: "/gallery/image31.png", alt: "Project 6", title: "Project 6" },
                { src: "/gallery/image32.png", alt: "Project 7", title: "Project 7" },
                { src: "/gallery/image33.png", alt: "Project 8", title: "Project 8" },
                { src: "/gallery/image34.png", alt: "Project 9", title: "Project 9" }
              ].map((image, index) => (
                <div 
                  key={index}
                  className="aspect-[4/3] overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
                  onClick={() => {
                    setSelectedIndex(index)
                    setSelectedContainer('second')
                  }}
                >
                  <div className="relative flex-grow">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-2 bg-white/50 dark:bg-gray-800/50">
                    <h3 className="text-sm font-semibold text-foreground truncate">{image.title}</h3>
                    <p className="text-xs text-muted-foreground truncate">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-foreground">Muse Marketing: Editorial Design</h2>
              <p className="text-sm text-muted-foreground mt-1">Click to view full project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Container Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-5 gap-2">
              {thirdContainerImages.map((image, index) => (
                <div 
                  key={index}
                  className="overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full"
                  onClick={() => {
                    setSelectedIndex(index)
                    setSelectedContainer('third')
                  }}
                >
                  <div className="relative h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-foreground">Cervera Real Estate: Graphic Design & Branding Specialist</h2>
              <p className="text-sm text-muted-foreground mt-1">Click to view full project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Container */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              {/* Grid of Images - 1/2 width */}
              <div className="w-1/2">
                <div className="grid grid-cols-4 gap-2 h-full">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <div 
                      key={index}
                      className="aspect-[4/3] overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
                      onClick={() => setSelectedIndex(index + 1)}
                    >
                      <div className="relative flex-grow">
                        <img
                          src={galleryImages[index + 1].src}
                          alt={galleryImages[index + 1].alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-2 bg-white/50 dark:bg-gray-800/50">
                        <h3 className="text-sm font-semibold text-foreground truncate">{galleryImages[index + 1].title}</h3>
                        <p className="text-xs text-muted-foreground truncate">{galleryImages[index + 1].alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* First Project - 1/2 width */}
              <div className="w-1/2">
                <div 
                  className="relative cursor-pointer hover:opacity-90 transition-opacity flex flex-col h-full"
                  onClick={() => setSelectedIndex(0)}
                >
                  <div className="flex-grow">
                    <img
                      src={galleryImages[0].src}
                      alt={galleryImages[0].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{galleryImages[0].title}</h3>
                    <p className="text-muted-foreground">Click to view full project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={selectedIndex !== null} onOpenChange={() => {
        setSelectedIndex(null)
        setSelectedContainer(null)
      }}>
        <DialogContent className="max-w-6xl">
          <DialogTitle>
            {selectedIndex !== null && selectedContainer !== null 
              ? (selectedContainer === 'first' ? firstContainerImages[selectedIndex].alt :
                 selectedContainer === 'third' ? thirdContainerImages[selectedIndex].title :
                 galleryImages[selectedIndex].title)
              : ""}
          </DialogTitle>
          <div className="relative">
            {selectedIndex !== null && selectedContainer !== null && (
              <img
                src={selectedContainer === 'first' ? firstContainerImages[selectedIndex].src :
                     selectedContainer === 'third' ? thirdContainerImages[selectedIndex].src :
                     galleryImages[selectedIndex].src}
                alt={selectedContainer === 'first' ? firstContainerImages[selectedIndex].alt :
                     selectedContainer === 'third' ? thirdContainerImages[selectedIndex].alt :
                     galleryImages[selectedIndex].alt}
                className={`w-full rounded-lg ${
                  selectedContainer === 'third' ? 'max-h-[60vh] object-contain' : 'h-auto'
                }`}
              />
            )}
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {(selectedContainer === 'first' ? firstContainerImages :
              selectedContainer === 'third' ? thirdContainerImages :
              galleryImages).map((image, index) => (
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
