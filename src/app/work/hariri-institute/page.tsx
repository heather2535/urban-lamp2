"use client";
import * as React from "react"
import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing
import { createPortal } from 'react-dom'
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package } from "lucide-react"

const project = {
  title: "Website Redesign for\n Hariri Institute",
  date: "September 3, 2024",
  image: "/image15.png",
  content: `

  
  
    
   


     

      

 
    
   
    

  

    <br></br>
    
  `,
  tags: [ "Web Development", "UX Research"],
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
      <div className="w-full h-[400px] flex items-center justify-center">
        <img
          src={images[index]}
          alt={`ALS Clinical Decision Tool Design ${index + 1}`}
          className="rounded-lg object-contain max-h-full w-auto"
          style={{ maxWidth: "100%" }}
        />
      </div>
      <div className="mt-4 flex items-center gap-4">
        <button 
          onClick={prev} 
          className="w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition-all duration-200"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <span className="text-sm text-gray-600 dark:text-gray-400">{index + 1} / {images.length}</span>
        <button 
          onClick={next} 
          className="w-12 h-12 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition-all duration-200"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>,
    container
  );
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
        {/* Top Back Button */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="container max-w-6xl mx-auto px-4">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-xs bg-transparent sm:bg-black sm:hover:bg-gray-800 dark:sm:bg-white dark:sm:text-black dark:sm:hover:bg-gray-200 px-6 py-3 rounded-lg transition-all duration-200 font-medium"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-black sm:text-white dark:sm:text-black sm:hidden"
              >
                <path d="M15 18l-6-6 6-6"/>
              </svg>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="hidden sm:block text-white dark:text-black"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span className="hidden sm:inline text-white dark:text-black">Back to Projects</span>
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
                <h1 className="font-bold text-2xl md:text-[40px] mb-6 text-gray-900 dark:text-white whitespace-pre-line">{project.title}</h1>
                  <h2 className="text-gray-700 dark:text-gray-300 mb-6 text-lg">{project.date}</h2>
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
            <div className="container max-w-6xl mx-auto px-4 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl">
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
                  <h2 className="text-gray-700 text-sm dark:text-gray-300">
                    The primary goal was to modernize and simplify the Hariri Institute website while aligning with Boston University's Office of Research visual standards. We aimed to improve user experience for both internal and external audiences while ensuring the site could be easily maintained by non-technical staff.
                  </h2>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Solution:</h2>
                  <h2 className="text-gray-700 text-sm dark:text-gray-300">
                    We developed a modern, accessible website that balances institutional branding with Hariri's interdisciplinary identity. The solution features a clean design system with reusable components, improved content discoverability, and a streamlined CMS for easy content management.
                  </h2>
                </div>
              </div>

              {/* Working Prototype Button */}
              <div className="flex justify-center mt-12">
                <a 
                  href="https://www.bu.edu/hic/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-6 py-3 rounded-lg transition-all duration-200"
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
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Working Prototype
                </a>
              </div>
              
            </div>
            

            <div className="w-full bg-white dark:bg-gray-900 mt-12">
              <div className="container max-w-3xl mx-auto px-4 py-8">
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
                
                {/* Bottom Back Button */}
                <div className="mt-16 flex justify-center">
                  <Link 
                    href="/projects" 
                    className="inline-flex items-center gap-2 text-xs bg-transparent sm:bg-black sm:hover:bg-gray-800 dark:sm:bg-white dark:sm:text-black dark:sm:hover:bg-gray-200 px-6 py-3 rounded-lg transition-all duration-200 font-medium"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-black sm:text-white dark:sm:text-black sm:hidden"
                    >
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="hidden sm:block text-white dark:text-black"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span className="hidden sm:inline text-white dark:text-black">Back to Projects</span>
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
