"use client";
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing

const project = {
    title: "DEI Consulting Web Application",
    description: "Brand identity design for a line of sustainable, eco-friendly products.",
    date: "March 15, 2024",
    description2: "Heather Davies - Mar 15, 2024",
    video: "/video4.mov?height=450&width=800", 
    content: `
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Project Overview</h2>
      <br>
      <p>Dr. Starks is working to create a dynamic and comprehensive course platform that facilitates deep engagement with clients, aiming to address complex social justice issues. The goal is to build a space where individuals can engage in meaningful discussions, access valuable resources, and collaborate on actionable strategies to create change.</p>
      <br>
      <p>This platform will serve not only as an educational tool but also as a community hub for fostering equity and inclusivity. It will be designed to help users advance their journey toward building more diverse, inclusive, and equitable communities. Through thoughtful design and well-crafted resources, we aim to support the growth of individuals and organizations committed to social justice work.</p>

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">The Problem</h2>
      <br>
      <p>The problem we are addressing is twofold: first, the need for an accessible, robust web app that serves as a comprehensive learning and engagement platform; second, the need for a space where people from all walks of life—activists, intellectuals, businesses—can come together to have open, productive conversations around social justice.</p>
      <br>
      <p>The platform will empower individuals and organizations with the tools they need to advance their causes. By combining structured learning with a social hub, we’ll enable users to build stronger, more effective networks, share knowledge, and push forward the cause of diversity and inclusion in their personal and professional lives.</p>

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">User Archetypes</h2>

      <br>
      <p>Understanding the diverse needs of our users is central to the development of this platform. Below are the main archetypes we aim to serve:</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Activists</h3>
      <br>
      <p>Activists working on the ground level to enact social justice changes will benefit from the practical resources and knowledge shared within the platform. They need tools that help them organize, strategize, and engage with others in the field. This platform will be tailored to provide real-world, actionable insights and a space for networking and sharing strategies.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Intellectuals</h3>
      <br>
      <p>Academics and thought leaders in the social justice field will be able to use this platform as a space to engage in deeper discussions about theory, practice, and research. The platform will help connect these individuals with other like-minded people and give them access to research-backed tools and frameworks to support their advocacy.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Businesses</h3>
      <br>
      <p>Companies that want to build a socially conscious reputation will also be users of this platform. They will seek ways to make their operations more equitable and inclusive, aligning their business models with social justice values. The platform will provide businesses with tools to implement best practices in diversity, equity, and inclusion, as well as resources for building socially responsible organizations.</p>

      <br></br>
      <h1 style="font-size: 2em; font-weight: bold;">User Needs</h1>
      <br>
      <p>To better understand the core functionality needed, we’ve identified some key needs based on user feedback and testing:</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Scheduling Content Sessions</h3>
      <br>
      <p style="font-weight: bold;">"I want to be able to receive an email/text confirmation of my upcoming appointment and learn to use my voice for social change by scheduling content sessions."</p>
      <br>
      <p>Users need to easily schedule content sessions and receive confirmation of appointments. This will ensure a seamless experience for those looking to engage with content, interact with experts, and learn more about using their voice in the fight for social change.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Engagement in Discussions</h3>
      <br>
      <p style="font-weight: bold;">"I want to be able to filter which discussions I want to engage in."</p>
      <br>
      <p>This feature is crucial for users who want to engage in specific conversations. Whether they’re interested in activism, business practices, or academic discussions, users need a way to filter and prioritize topics that matter most to them. Providing filters will help users focus their energy on relevant discussions while ensuring the space remains relevant and manageable for each individual.</p>

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">User Testing & Iterations</h2>
      <br>
      <p>As part of the development process, we have been conducting user testing to ensure that the platform aligns with user needs and expectations. Based on feedback, we’ve made several iterations, particularly in the account creation process.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Account Creation Iterations</h3>
      <br>
      <p style="font-size: 1.2em; font-weight: bold;">Before</p>
      <p>Initially, we started with site templates that simplified the process but didn’t fully address user needs. The process was generic, and users struggled with navigating through account creation smoothly.</p>
      <br>
      <p style="font-size: 1.2em; font-weight: bold;">After</p>
      <p>After gathering user feedback, we refined the account creation flow by adding personalized questions, enabling users to select the type of user archetype (activist, intellectual, business) they identify with. This change allows us to better tailor the user experience from the very beginning, ensuring that users are immediately offered the resources and discussions most relevant to their interests and needs.</p>



      <br></br>
      <h3 style="font-size: 2em; font-weight: bold;">Conclusion</h3>
      <br>
      <p>By addressing the needs of our key user archetypes—activists, intellectuals, and businesses—we are building a platform that serves as a cornerstone for social justice change. Through meaningful discussions, curated resources, and tools for learning and engagement, we aim to provide users with the resources they need to succeed in their social justice endeavors. Our ongoing iterations based on user testing ensure that we stay true to our mission of fostering a diverse, inclusive, and equitable space for all.</p>
      <br>
      <p>As we continue to develop and improve the platform, we are excited about the impact it will have in creating stronger communities and driving social change.</p>

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
