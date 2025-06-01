"use client";
import { useState } from "react"
import Navigation from "@/components/navigation"
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
    title: "Patient Healthcare Management Platform",
    description: "Comprehensive healthcare management system for patients and providers.",
    date: "April 22, 2024",
    video: "/video3.mov?height=450&width=800", 
    content: `
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Project Overview</h2>
      <p>The inspiration behind HealthSync was to bridge the gap between healthcare and technology. We aimed to create a platform that seamlessly connects users and hospitals, providing efficient healthcare solutions. This project was fueled by the desire to address real-time healthcare challenges using cutting-edge technology.</p>
      
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">What It Does</h2>
      <p>HealthSync is a comprehensive healthcare application designed to serve both users and hospitals. Users can access personalized dashboards to manage their health information, book appointments, and stay connected with healthcare providers. Hospitals, on the other hand, benefit from a dedicated dashboard that streamlines patient management, appointment scheduling, and overall health.</p>

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">How It Is Built</h2>
      <p>HealthSync was built using a stack of modern technologies. The front end is powered by React and Next.js, providing a robust user interface. To manage state and data, we adopted Redux and Redux Toolkit, which was a significant learning experience as it was the first time we used them for a large-scale project. On the backend, we developed a Node.js server that utilizes Express to handle API requests. The core of the application's data management is handled by a combination of Axios for HTTP requests and Redux Toolkit Query for efficient data fetching and management. During the development process, we encountered a few challenges, including initial setup hurdles with RTK Query and Next.js. However, we persevered, learned valuable lessons, and overcame these obstacles.
      
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Challenges Ran Into</h2>
      <p>We faced some initial challenges, particularly in configuring and integrating Redux Toolkit Query (RTK Query) with Next.js. The learning curve for this powerful tool was steep, but through perseverance and dedicated problem-solving, we successfully implemented RTK Query into our project. Additionally, handling real-time data and state management in a healthcare context presented unique challenges, which we tackled by enhancing our understanding of Redux and RTK Query.</p>
  
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Accomplishments</h2>
      <p>One of the most notable accomplishments is mastering Redux and Redux Toolkit for a significant project. This was the first time we utilized these technologies extensively, and the resulting efficient state management was a major achievement. Furthermore, we integrated a health assistant model based on GPT models into the application, offering personalized healthcare advice and information to users. This was a groundbreaking step for us, marking our first venture into this innovative field.</p>
      

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Insights Gained </h2>
      <p>Throughout the development of HealthSync, we learned invaluable lessons. Our proficiency in Redux and RTK Query improved significantly, allowing us to efficiently manage and synchronize application data. Additionally, we expanded our skills by integrating GPT-based health assistant features, opening up new opportunities in the healthcare technology sector.
        Incorporating Next.js into our development stack also broadened our knowledge and empowered us to build a large-scale application with improved performance and SEO capabilities. We are proud of the expertise we gained and look forward to applying these skills in future projects.

        This write-up encapsulates the journey of Caresync, highlighting the challenges we faced, the accomplishments we achieved, and the knowledge we acquired throughout the development process. We are excited to present this innovative healthcare solution and share our experiences with the world.</p>
            
      <br></br>
      
    `,
    tags: ["Web Development"],
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
      <main className="container max-w-2xl mx-auto px-4 mt-8 py-8">
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

          <h1 className="font-bold text-[40px] mt-4 mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-4">{project.date}</p>

          

          {/* Filtered Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
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

          {/* Video section */}
          <div className="relative mt-6 mb-6">
            <video controls width="100%" height="auto" className="object-cover rounded-lg">
              <source src={project.video} type="video/mp4" />
              {/* Fallback text for unsupported browsers */}
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="lead">{project.description}</p>
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
