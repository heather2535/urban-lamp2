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
    title: "Talentora: Designing A Conversational AI Interview Platform",
    description: "A platform that uses AI to conduct interviews and evaluate candidates.",
    date: "February 3, 2025",
    video: "/video1.mov?height=450&width=800", 
    content: `
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Introduction</h2>
      <br>
      <p>
      In today’s fast-paced job market, small to medium-sized businesses often struggle with the early stages of hiring. Without the resources for dedicated HR teams or costly recruiting agencies, these companies are forced to manually screen applicants—an inefficient, time-consuming process.
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
      Companies post jobs via job boards and manage them through their existing Applicant Tracking System (ATS). This triggers Talentora’s interview automation workflow.
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
      Employers upload detailed information about their company and the open role. This data allows Talentora to tailor the interview process to reflect the company’s values and job-specific requirements.
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
      Talentora’s AI agents, known as <strong>Ora Scouts</strong>, call applicants and conduct dynamic, conversational interviews using voice AI. These interactions mimic a real first-round interview.
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
      Employers receive a curated shortlist of top candidates, along with key insights into each applicant’s strengths, weaknesses, and cultural fit—making final selection faster and easier.
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
       <strong>Compared to HireVue:</strong> Talentora offers a more personalized and less “robotic” AI interaction, ideal for smaller companies.
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
    tags: ["All Projects", "Web Development", "Branding", "UI/UX Design"],


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
      <main className="container mt-6 max-w-2xl mx-auto px-4 py-8">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
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


        </article>
      </main>
    </div>
  )
}
