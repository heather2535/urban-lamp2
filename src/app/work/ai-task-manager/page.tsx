"use client";
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing

const project = {
    title: "Talentora: Designing A Conversational AI Interview Platform",
    description: "A platform that uses AI to conduct interviews and evaluate candidates.",
    date: "February 3, 2025",
    description2: "Heather Davies - Feb 3, 2024",
    video: "/video1.mov?height=450&width=800", 
    content: `
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Project Overview</h2>
      <br>
      <p>In today’s competitive job market, talent acquisition is more crucial than ever. However, many businesses—especially smaller and medium-sized companies—struggle with the first-round screening process. The hiring process often involves manually sifting through hundreds of resumes, conducting lengthy interviews, and spending valuable time that could otherwise be focused on business growth.</p>
      <br>
      <p>Talentora aims to solve this problem by automating the first round of the recruitment process using AI. This platform is designed to serve medium-sized businesses that do not have dedicated HR teams or the resources to outsource recruiting to traditional agencies. These companies are often innovative, willing to adopt new technologies, and working with small teams, typically between 10 to 50 employees.</p>

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">The Problem</h2>
      <br>
      <p>For many small to medium-sized businesses, talent acquisition is a costly and time-consuming challenge. Traditional recruiting agencies are expensive, and most businesses cannot afford to hire a dedicated HR team. As a result, these companies often rely on manual and inefficient methods to screen applicants, resulting in wasted time, mis-hired talent, and missed opportunities.</p>
      <br>
      <p>At Talentora, we believe that the first-round talent screening process is ripe for automation. By streamlining and automating this initial step using artificial intelligence, we can help businesses save time, improve the accuracy of their hiring process, and focus on what matters most: building their teams with the right people.</p>

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">How It Works</h2>
      <br>
      <p>Talentora provides an AI-driven, automated solution to help businesses efficiently screen candidates for the first round of interviews. Here’s a breakdown of how the process works:</p>
      <br>
      <h2 style="font-size: 1.2em; font-weight: bold;">1. Job Posting</h2>
      <p>The process begins when a company posts a job on various job sites. This job posting is then managed using the company’s Applicant Tracking System (ATS), which triggers Talentora’s service.</p>
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

        <br>
      <h2 style="font-size: 1.2em; font-weight: bold;">2. Company & Role Information Upload</h2>
      <p>Once the job posting is live, the company uploads details about both the company and the job role to Talentora. The platform uses this data to tailor its output and ensure it matches the specific requirements of the role and the company’s culture.</p>
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

      <h2 style="font-size: 1.2em; font-weight: bold;">3. Screening Process</h2>
      <p>Talentora’s AI-driven system, known as Ora Scouts, takes over the next step by calling the applicants of the job posting. Ora Scouts conducts first-round interviews, asking each applicant a series of pre-set and dynamic questions.</p>
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

      <h2 style="font-size: 1.2em; font-weight: bold;">4. Interview Analysis</h2>
      <p>After the interviews are conducted, Talentora’s AI system analyzes the candidate responses. It scores candidates based on their fit for the role, how well they handle questions, and their overall confidence during the interview.</p>
      <br> 
      <h2 style="font-size: 1.2em; font-weight: bold;">5. Candidate Output</h2>
      <p>Finally, Talentora produces a list of qualified candidates. Along with the list, companies receive a summary of each interview, highlighting key insights such as the candidate’s strengths and weaknesses, their potential fit for the company, and other important factors. This makes it easier for businesses to identify the best candidates without needing to go through hours of manual interviews.</p>
      <br></br>


      <h2 style="font-size: 2em; font-weight: bold;">User Research</h2> 
      <p>To ensure Talentora meets the needs of its target audience, we conducted in-depth user research, focusing on three key customer profiles:</p>

    
      <br>
      <h3 style="font-size: 1.2em; font-weight: bold;">1. Small Tech Founder of a Startup</h3>
      <p>This persona represents a founder at a growing startup, often wearing many hats and lacking the time and resources to manage a full-scale recruiting process. They need an automated solution that streamlines hiring and delivers high-quality results without the overhead of traditional recruitment methods.</p>
      
            
      <br>
      <h3 style="font-size: 1.2em; font-weight: bold;">2. Mid-Sized Tech Firm HR Manager</h3>
      <p>The HR manager at a medium-sized tech firm is responsible for handling multiple aspects of HR, including hiring. With a small team and limited resources, they need a tool that can efficiently manage and streamline the recruitment process, particularly the initial screening phase.</p>
    
      <br>
      <h3 style="font-size: 1.2em; font-weight: bold;">3. Average Job Applicant</h3>
      <p>We also analyzed the average applicant who may be using Talentora’s platform to go through a more automated and efficient interview process. The platform’s ability to offer a seamless, AI-driven interview experience is a major selling point for candidates who prefer a streamlined and modern approach.</p>
      <br>
      <p>To further refine Talentora’s features, we compared our platform with two existing applicant management systems—HireVue and HackerRank—which have similar goals but different approaches:</p>
      <br>      
      <p>HireVue uses AI-driven tools to streamline hiring for large companies, but users have reported discomfort with the AI interaction.</p>   
      <p>HackerRank caters more to startup recruiters and educators, offering pre-recorded interviews for improved evaluation consistency. However, HackerRank faces limitations in terms of team coordination and overall customization.</p>
      <br>
      <p>This analysis reveals that Talentora offers a more tailored solution for medium-sized businesses, with a focus on customization, user-friendliness, and real-time engagement, addressing the gaps left by existing platforms.</p>


      <br></br>
      <h3 style="font-size: 2em; font-weight: bold;">Tech Stack</h3>
      <p>Talentora’s platform is powered by a robust tech stack, split across three repositories, each focused on different aspects of the product. Here’s a look at the tools and technologies that power Talentora:</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">1. Front-End Web App</h3>
      <p>The user interface and experience of Talentora’s platform are built using Next.js and React. These modern JavaScript frameworks allow for fast, responsive, and dynamic web applications, ensuring a smooth user experience for both businesses and applicants.</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">2. Applicant Analysis Repository</h3>
      <p>Talentora’s core functionality lies in its ability to analyze candidate responses effectively. This is powered by Hume AI, a semantic analysis API that processes and scores interview responses based on factors like relevance, clarity, and emotional intelligence. The analysis repository provides an overall score for each candidate and generates a detailed summary of their interview performance.</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">3. Bot Repository</h3>
      <p>The real-time interaction with candidates is handled by Pipecat, an open-source framework for speech-to-text and text-to-speech large language models (LLMs). Pipecat ensures a seamless, conversational experience for applicants, enabling real-time interactions with generative AI bots that conduct the interviews. The bot repository powers the voice interactions between Ora Scouts and the applicants, providing an immersive and interactive first-round interview process.</p>
  
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Conclusion</h2>
  
      <br>
      <p>Talentora is revolutionizing the way small and medium-sized businesses approach talent acquisition. By automating the first-round screening process with AI, we provide businesses with an affordable, efficient, and effective solution to find the best candidates.</p>
  
      <br>
      <p>With a tailored solution, a user-friendly interface, and cutting-edge technology, Talentora is setting a new standard for how companies manage their recruitment process—especially those without dedicated HR teams or large budgets.</p>
  
      <br>
      <p>Whether you're a startup founder, an HR manager in a growing company, or a job seeker looking for an innovative interview experience, Talentora offers the tools to simplify the process, save time, and ultimately build stronger, more successful teams.</p>
  
      <br></br>
   
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
          <p className="text-[14px] text-muted-foreground mt-8 mb-4">{project.description2}</p>

          <h1 className="font-bold text-[40px] mt-4 mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-4">{project.date}</p>

           {/* Filtered Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
            {filteredProjects.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
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
