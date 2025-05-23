"use client";
import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing
import { createPortal } from 'react-dom'
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package } from "lucide-react"
import React from 'react'

const project = {
  title: "12/12 Aventura Rendering",
  date: "December 3, 2024",
  image: "/images/image26.jpg",
  content: ``,
  tags: ["Graphic Design", "3D Design"],
}

// Define tagIcons with explicit typing for keys
const tagIcons: Record<string, React.ReactElement> = {
  "All Projects": <Folder className="h-3 w-3" />,
  "3D Design": <Grid className="h-3 w-3" />,
  "AI Integration": <Cpu className="h-3 w-3" />,
  "Branding": <Tag className="h-3 w-3" />,
  "Data Vis": <BarChart className="h-3 w-3" />,
  "Graphic Design": <Palette className="h-3 w-3" />,
  "UI/UX": <Layers className="h-3 w-3" />,
  "UI/UX Design": <Layout className="h-3 w-3" />,
  "Product Design": <Package className="h-3 w-3" />,
  "Web Development": <Code className="h-3 w-3" />,
}

function Slideshow({ images, id }: { images: string[], id: string }) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  if (!mounted) return null;

  const container = document.getElementById(id);
  if (!container) return null;

  return createPortal(
    <div className="mt-4 flex flex-col items-center">
      <img
        src={images[index]}
        alt={`ALS Clinical Decision Tool Design ${index + 1}`}
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="mt-2 flex gap-2">
        <button onClick={prev} className="px-2 py-1 bg-gray-200 rounded">Prev</button>
        <span>{index + 1} / {images.length}</span>
        <button onClick={next} className="px-2 py-1 bg-gray-200 rounded">Next</button>
      </div>
    </div>,
    container
  );
}

export default function CryptoDashboardPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const allTags = Array.from(new Set(project.tags))

  const filteredProjects = project.tags.filter((tag) => {
    const matchesTag = selectedTag ? tag === selectedTag : true
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTag && matchesSearch
  })

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative w-full bg-white dark:bg-gray-900">
        {/* Back Button */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="container max-w-6xl mx-auto px-4">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-sm text-gray-900 hover:text-gray-200 dark:text-white dark:hover:text-gray-200 hover:bg-black/70 px-4 py-2 rounded-lg transition-all duration-200"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="container max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mt-16 md:mt-0">
            {/* Left Column - Text */}
            <div className="md:col-span-1 order-2 md:order-1">
              <Link href="https://se-bch-als-resource-app-y3wu-pmgqv0yae-cs519team.vercel.app/bookmarks/default" className="no-underline">
                <div className="max-w-xl pl-4 md:pl-0">
                  <h1 className="font-bold text-[40px] mb-6 text-gray-900 dark:text-white whitespace-pre-line">{project.title}</h1>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">{project.date}</p>
                  <div className="flex flex-wrap gap-2">
                    {filteredProjects.map((tag, index) => (
                      <React.Fragment key={tag}>
                        {tag === "UI/UX" && <div className="w-full" />}
                        <Link 
                          href={`/projects?tag=${encodeURIComponent(tag)}`}
                          className="no-underline"
                        >
                          <Badge 
                            variant="secondary" 
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border-pink-200 bg-pink-100 hover:border-pink-500 hover:bg-pink-200 dark:bg-pink-900/30 dark:border-pink-800/50 dark:hover:bg-pink-900/50 dark:hover:border-pink-700 text-pink-700 dark:text-pink-100 transition-colors cursor-pointer"
                          >
                            {tagIcons[tag]}
                            {tag}
                          </Badge>
                        </Link>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Column - Image */}
            <div className="md:col-span-2 order-1 md:order-2">
              <Link href="/work/als-app" className="no-underline">
                <div className="relative">
                  <img
                    src={project.image}
                    alt="ALS Clinical Decision Tool"
                    className="w-full h-auto object-contain"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent">
        <main className="w-full">
          <article className="prose lg:prose-xl dark:prose-invert">
            {/* Three Columns Section */}
            <div className="container max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Role</h3>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-sm text-muted-foreground">
                      Design Strategist, UX
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Researcher, UI/UX
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Team</h3>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-sm text-muted-foreground">
                      Heather Davies
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Brian Zeng
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Avdeep Kaur
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Minyang Li
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Duration</h3>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-sm text-muted-foreground">
                      Sep. 2024 - Dec. 2024
                    </p>
                    <p className="text-sm text-muted-foreground">
                      4 mo. total
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Columns Section */}
            <div className="container max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Goal:</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                  Created a high-quality, photorealistic rendering for 12/12 Aventura Drive, a modern residential property, using AutoCAD, 3ds Max, and V-Ray

                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Solution:</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                  Utilizing 3D modeling and post-production enhancements in Photoshop, rendering highlights the property's sophisticated architectural details. 
                  </p>
                </div>
              </div>
            </div>

            

            <div className="w-full bg-white dark:bg-gray-900 mt-12">
              <div className="container max-w-6xl mx-auto px-4 py-8">
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
                
                {/* Gallery Section */}
                <div className="mt-16">
                  <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-6">
                      <img
                        src="/images/image27.jpg"
                        alt="Architectural Visualization 1"
                        className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      />
                      <img
                        src="/images/image28.jpg"
                        alt="Architectural Visualization 2"
                        className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    <div className="space-y-6">
                      <img
                        src="/images/image26.jpg"
                        alt="Architectural Visualization 3"
                        className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      />
                      <img
                        src="/images/image27.jpg"
                        alt="Architectural Visualization 4"
                        className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    <div className="space-y-6">
                      <img
                        src="/images/image28.jpg"
                        alt="Architectural Visualization 5"
                        className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      />
                      <img
                        src="/images/image26.jpg"
                        alt="Architectural Visualization 6"
                        className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex justify-center">
                  <Link 
                    href="/projects" 
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back to Projects
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
