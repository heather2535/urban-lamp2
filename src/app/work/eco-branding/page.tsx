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
          {/* Top Back Button */}
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 mt-8 mb-8"
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

          {/* Hero Section - Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start mb-16">
            {/* Left Column - Text Content */}
            <div className="md:col-span-2 space-y-6">
              <h1 className="font-bold text-[40px]">{project.title}</h1>
              <p className="text-muted-foreground">{project.date}</p>
              
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

              <p className="lead text-lg">{project.description}</p>
            </div>

            {/* Right Column - Video */}
            <div className="md:col-span-3 relative">
              <video controls width="100%" height="auto" className="object-cover rounded-lg shadow-lg">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Full Width Text Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="space-y-6">
              <h2 className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                A comprehensive web application designed to facilitate DEI consulting services, enabling organizations to create more inclusive and equitable workplaces. The platform combines user-friendly interfaces with powerful tools for assessment, training, and progress tracking.
              </h2>
              <h2 className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Through extensive research and user testing, we developed a solution that addresses the unique needs of both consultants and organizations, making DEI initiatives more accessible and effective.
              </h2>
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
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Activists who are working on the ground level to enact social justice change.
                </p>
            </div>

            {/* Design Card */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Intellectuals</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  People in academia who want to join discussions around social justice.
                </p>
            </div>

            {/* Development Card */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Businesses</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  People who want their business to be more socially conscious.
                </p>
            </div>
          </div>
          <br></br>
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
        </article>
      </main>
    </div>
  )
}
