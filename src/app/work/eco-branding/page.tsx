"use client";
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package } from "lucide-react"

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
  "Crypto": <Cpu className="h-3 w-3" />,
  "Finance": <BarChart className="h-3 w-3" />,
}

const project = {
    title: "Designing a DEI Consulting Web Application",
    description: "Brand identity design for a line of sustainable, eco-friendly products.",
    date: "March 15, 2024",
    video: "/video4.mov?height=450&width=800", 
    content: ``,
    tags: ["Graphic Design", "Branding"],
  }
  

export default function CryptoDashboardPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const allTags = Array.from(new Set(project.tags))

  const filteredProjects = project.tags.filter((tag) => {
    const matchesTag = selectedTag ? tag === selectedTag : true
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTag && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container max-w-6xl mx-auto px-4 py-16">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
            {/* Back Button */}
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
        
          {/* Hero Section - Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center mt-10 mb-16">
            {/* Right Column - Video (now first on mobile) */}
            <div className="md:col-span-3 relative order-first md:order-last">
              <video 
                controls 
                width="100%" 
                height="auto" 
                className="object-cover rounded-lg shadow-lg"
                poster="/image4.png"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Left Column - Text Content */}
            <div className="md:col-span-2 space-y-6">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-[40px]">{project.title}</h1>
              <h2 className="text-muted-foreground">{project.date}</h2>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {filteredProjects.map((tag) => (
                  <Link 
                    key={tag} 
                    href={`/projects?tag=${encodeURIComponent(tag)}`}
                    className="no-underline"
                  >
                    <span 
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors cursor-pointer"
                    >
                      {tagIcons[tag]}
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>

            </div>
          </div>

          {/* Three Columns Section */}
          <div className="bg-background fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:to-[#1a2a3a] container max-w-6xl mx-auto px-4 flex justify-center">
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
                    Ben Gardiner
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Lucas Yoon
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Vincent Li
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Abdel Lokma
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-lg text-center">
                <h3 className="font-bold text-lg mb-2">Duration</h3>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-sm text-muted-foreground">
                    Sept. 09 '24 - Feb. 30 '25
                  </p>
                  <p className="text-sm text-muted-foreground">
                    6 months total
                  </p>
                </div>
              </div>
              
            </div>
            
          </div>

          {/* Full Width Text Section */}
          <div className="bg-background fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:to-[#1a2a3a] max-w-6xl mx-auto mb-16">
            <div className="space-y-6">
              <br></br>
              <h2 className="text-gray-700 dark:text-gray-300 text-md leading-relaxed">
                A comprehensive web application designed to facilitate DEI consulting services, enabling organizations to create more inclusive and equitable workplaces. The platform combines user-friendly interfaces with powerful tools for assessment, training, and progress tracking.
              </h2>
              <h2 className="text-gray-700 dark:text-gray-300 text-md leading-relaxed">
                Through extensive research and user testing, we developed a solution that addresses the unique needs of both consultants and organizations, making DEI initiatives more accessible and effective.
              </h2>
              <br></br>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">User Personas</h3>
          
          {/* User Personas Images */}
          <div className="grid grid-cols-1 md:grid-cols-1 max-w-6xl gap-8 mb-16">
            <div className="relative">
              <img 
                src="/image19.png" 
                alt="User persona for activists" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Persona: Social Justice Activist
              </p>
            </div>
           
          </div>

          {/* Three Column Cards Section */}
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">User Archetypes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Research Card */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Activists</h3>
                <h2 className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Activists who are working on the ground level to enact social justice change.
                </h2>
            </div>

            {/* Design Card */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Intellectuals</h3>
                <h2 className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  People in academia who want to join discussions around social justice.
                </h2>
            </div>

            {/* Development Card */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Businesses</h3>
                <h2 className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  People who want their business to be more socially conscious.
                </h2>
            </div>
          </div>
          <br></br><br></br>
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Journey Maps</h3>
          
          {/* Journey Maps Image */}
          <div className="relative max-w-6xl w-full mb-16">
            <img 
              src="/image17.png" 
              alt="User journey maps showing the experience flow" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <br></br>
              <img 
              src="/image18.png" 
              alt="User journey maps showing the experience flow" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
              User journey maps illustrating the key touchpoints and experience flow
            </p>
          </div>
          <br></br>
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Wireframes</h3>
          
          {/* Wireframes Image */}
          <div className="relative max-w-6xl w-full mb-16">
            <img 
              src="/image20.png" 
              alt="Initial wireframes showing the user interface layout" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
              Initial wireframes exploring the user interface and interaction patterns
            </p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: project.content }} />
              
          

          {/* Bottom Back Button */}
          <div className="mt-16 flex justify-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 group"
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
                className="transition-transform group-hover:-translate-x-1"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span className="hidden sm:inline">Back to Projects</span>
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}
