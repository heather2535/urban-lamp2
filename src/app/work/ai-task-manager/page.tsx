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
}

const project = {
    title: "Talentora: Designing A\nConversational AI Interview Platform",
    description: "A platform that uses AI to conduct interviews and evaluate candidates.",
    date: "February 3, 2025",
    video: "/video1.mov?height=450&width=800", 
    content: `
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Introduction</h2>
      <br>
      <p>
      In today's fast-paced job market, small to medium-sized businesses often struggle with the early stages of hiring. Without the resources for dedicated HR teams or costly recruiting agencies, these companies are forced to manually screen applicants—an inefficient, time-consuming process.
      </p>
      <br>
      <p>
      Talentora is an AI-powered platform designed to automate first-round interviews, helping businesses identify top candidates quickly and effectively. By streamlining this critical step, Talentora enables teams to focus on what matters: building strong, high-performing teams.
      </p>

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Goals</h2>
      <br>
      <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
       <strong>Automate first-round candidate screening</strong> to reduce the time and cost of recruitment.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Support small to mid-sized businesses</strong> (typically 10–50 employees) without full-scale HR teams.
          </li>   
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Deliver intelligent, human-like interview experiences</strong> using real-time AI interactions.
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Ensure accurate candidate evaluation</strong> with semantic and emotional insight analysis.
          </li>
        </ul>
      </li>
    </ul>
      <br></br>



        <h2 style="font-size: 2em; font-weight: bold;">Process</h2>
      <br>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">1. Job Posting Trigger</h2>
      <p>
      Companies post jobs via job boards and manage them through their existing Applicant Tracking System (ATS). This triggers Talentora's interview automation workflow.
      </p>
      <br>
      <div className="col-span-1">
            <img
              src="/images/image14.png"
              alt="Hariri Institute Design Process"
              className="rounded-lg shadow-md w-3/4 h-auto mx-auto"
              style={{ maxWidth: "400px", maxHeight: "200px", height: "auto" }}
            />
          </div>
        </div>

        <br></br>
      <h2 style="font-size: 1.5em; font-weight: bold;">2. Role & Company Upload</h2>
      <p>
      Employers upload detailed information about their company and the open role. This data allows Talentora to tailor the interview process to reflect the company's values and job-specific requirements.
      </p>
      <br>
             <div className="col-span-1">
          <video
            className="rounded-lg shadow-md w-3/4 h-auto mx-auto"
            controls
            style={{ maxWidth: "400px", maxHeight: "200px", height: "auto" }}
          >
            <source src="/videos/video4.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <br></br>

      <h2 style="font-size: 1.5em; font-weight: bold;">3. AI-Driven Interview via Ora Scouts</h2>
      <p>
      Talentora's AI agents, known as <strong>Ora Scouts</strong>, call applicants and conduct dynamic, conversational interviews using voice AI. These interactions mimic a real first-round interview.
      </p>
      <br>
        <div className="col-span-1">
          <video
            className="rounded-lg shadow-md w-3/4 h-auto mx-auto"
            controls
            style={{ maxWidth: "400px", maxHeight: "200px", height: "auto" }}
          >
            <source src="/videos/video5.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <br></br>

      <h2 style="font-size: 1.5em; font-weight: bold;">4. Interview Analysis & Scoring</h2>
      <p>
      Interviews are analyzed for clarity, confidence, relevance, and emotional intelligence using semantic AI tools. Each candidate is scored based on their performance.
      </p>
      <br></br>
      <h2 style="font-size: 1.5em; font-weight: bold;">5. Candidate Summary Output</h2>
      <p>
      Employers receive a curated shortlist of top candidates, along with key insights into each applicant's strengths, weaknesses, and cultural fit—making final selection faster and easier.
      </p>
      <br></br>


      <h2 style="font-size: 2em; font-weight: bold;">Results</h2> 
      <p>
      Talentora delivers a <strong>streamlined hiring experience</strong> for companies and a modern, intuitive process for candidates. It reduces time-to-hire, improves the quality of shortlisted candidates, and removes the burden of early-stage interviewing for small teams.
      </p>

      <br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Key Differentiators</h3>
        <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
       <strong>Compared to HireVue:</strong> Talentora offers a more personalized and less "robotic" AI interaction, ideal for smaller companies.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Compared to HackerRank:</strong> Talentora enables real-time, voice-based interviews, providing deeper insight and better team alignment.
          </li>  
        </ul>
      </li>
    </ul>

    <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Tools Used</h2> 
        <h3 style="font-size: 1.5em; font-weight: bold;">Front-End Web App</h3>

        <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
       Frameworks: Next.js, React
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Purpose: Delivers a fast, modern interface for both employers and applicants.
          </li>  
        </ul>
      </li>
    </ul>

  
      <br>
      <h2 style="font-size: 1.5em; font-weight: bold;">Applicant Analysis Repository</h2>
      <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
       Technology: Hume AI (Semantic & Emotional Analysis)
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Purpose: Scores candidate responses and generates insightful summaries for decision-makers.
          </li>  
        </ul>
      </li>
    </ul>

          <br>
      <h2 style="font-size: 1.5em; font-weight: bold;"> Bot Repository</h2>
      <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
       Technology: Pipecat (Speech-to-Text, Text-to-Speech LLMs)
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
           Purpose: Powers real-time, human-like interview conversations through Ora Scouts.
          </li>  
        </ul>
      </li>
    </ul>

    <br></br>
     <h2 style="font-size: 2em; font-weight: bold;">Reflection</h2> 
      <p>
      Talentora is redefining hiring for small and medium-sized businesses. With a focus on <strong>efficiency</strong>, <strong>empathy</strong>, and <strong>intelligence</strong>, the platform helps teams hire smarter—without the high costs or time demands of traditional recruiting. Whether you're an overextended founder, a lean HR manager, or a job seeker looking for a modern interview experience, Talentora offers a powerful solution for building your dream team.

      </p>
  
   
    `,
    tags: [ "Web Development", "Branding", "UI/UX Design"],


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
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative w-full h-[600px] bg-white dark:bg-gray-900">
        <img
          src="/image16.png"
          alt="AI Task Manager Overview"
          className="absolute inset-0 w-[1920px] h-[600px] object-cover object-center"
          style={{ objectPosition: '60% 30%' }}
        />
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
        <div className="absolute inset-0 flex flex-col justify-center p-8">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-6xl">
              <h1 className="font-bold text-[32px] mb-4 text-gray-900 dark:text-white whitespace-pre-line">{project.title}</h1>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.date}</p>
              <div className="flex flex-wrap gap-2">
                {filteredProjects.map((tag) => (
                  <Link 
                    key={tag} 
                    href={`/projects?tag=${encodeURIComponent(tag)}`}
                    className="no-underline"
                  >
                    <Badge 
                      variant="secondary" 
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-100 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors cursor-pointer"
                    >
                      {tagIcons[tag]}
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent">
        <main className="w-full">
          <article className="prose lg:prose-xl dark:prose-invert">
            {/* Three Columns Section */}
            <div className="container max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Role</h3>
                  <p className="text-sm text-muted-foreground">
                  Design Strategist, UX
                  </p>
                  <p className="text-sm text-muted-foreground">
                  Researcher, UI/UX
                  </p>
                </div>
                <div className="p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Team</h3>
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
                <div className="p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Duration</h3>
                  <p className="text-sm text-muted-foreground">
                  Sept. 09 '24 - Feb. 30 '25
                  </p>
                  <p className="text-sm text-muted-foreground">
                  6 months total
                  </p>
                </div>
              </div>
            </div>

            {/* Two Columns Section */}
            <div className="container max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Goal:</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    The primary goal was to create an AI-powered platform that automates first-round interviews, helping businesses identify top candidates quickly and effectively. We aimed to streamline the hiring process for small to medium-sized businesses without dedicated HR teams.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Solution:</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    We developed a full-stack web application that uses AI to conduct dynamic, conversational interviews through voice AI agents called Ora Scouts. The platform analyzes responses using semantic and emotional insight analysis to provide accurate candidate evaluations.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full bg-white dark:bg-gray-900 mt-12">
              <div className="container max-w-6xl mx-auto px-4 py-8">
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
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
