"use client";
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing

const project = {
    title: "Patient Healthcare Management Platform",
    description: "Comprehensive healthcare management system for patients and providers.",
    date: "April 22, 2024",
    description2: "Heather Davies - Apr 21, 2024",
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
    tags: ["Web Development", "Data Visualization", "Crypto", "Finance"],
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
      <main className="container max-w-2xl mx-auto px-4 py-8">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          <p className="text-[14px] text-muted-foreground mt-8 mb-4">{project.description2}</p>

          <h1 className="font-bold text-[40px] mt-4 mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-4">{project.date}</p>

          {/* Tag and Search Filters */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="flex-grow max-w-md">
              <SearchBar onSearch={setSearchQuery} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="../" onClick={() => setSelectedTag(null)} className="px-4 py-2 border rounded">
                All
              </Link>
              {allTags.map((tag) => (
                <Link 
                  key={tag} 
                  href="../" 
                  onClick={() => setSelectedTag(tag)} 
                  className={`px-4 py-2 border rounded ${selectedTag === tag ? "bg-blue-500 text-white" : ""}`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Video section */}
          <div className="relative mb-6">
            <video controls width="100%" height="auto" className="object-cover rounded-lg">
              <source src={project.video} type="video/mp4" />
              {/* Fallback text for unsupported browsers */}
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="lead">{project.description}</p>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />

          {/* Filtered Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {filteredProjects.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}
