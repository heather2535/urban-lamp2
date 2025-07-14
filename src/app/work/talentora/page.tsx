"use client";
import { useState } from "react"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package, ArrowLeft, ArrowUpRight, Circle, Square, Triangle, ExternalLink, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'
import { ProjectNavigation } from "@/components/project-navigation"
import ProjectVerticalNavigation from "@/components/project-vertical-navigation"
import SectionTitle from "@/components/SectionTitle"

const playfair = Playfair_Display({ subsets: ['latin'] })

const project = {
    title: "Designing A\nConversational AI Interviewing Interface",
    description: "A platform that uses AI to conduct interviews and evaluate candidates.",
    date: "Less stress, better hires, smarter conversations.",
    image: "/image16.png",
    video: "/video1.mov?height=450&width=800", 
    content: `
      <br></br>

    

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Goals</h2>
      <br>
      <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
       <h2>• Automate first-round candidate screening to reduce the time and cost of recruitment.</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2><strong>• Support small to mid-sized businesses</strong> (typically 10–50 employees) without full-scale HR teams.
          </li>   
          <li className="relative">
            <h2><strong>• Deliver intelligent, human-like interview experiences</strong> using real-time AI interactions.
          </li>
          <li className="relative">
            <h2><strong>• Ensure accurate candidate evaluation</strong> with semantic and emotional insight analysis.
          </li>
        </ul>
      </li>
    </ul>
      <br></br>

        <h2 style="font-size: 2em; font-weight: bold;">Process</h2>
      <br>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">1. Job Posting Trigger</h2>
      <h2>
      Companies post jobs via job boards and manage them through their existing Applicant Tracking System (ATS). This triggers Talentora's interview automation workflow.
      </h2>
      <br>
      <div className="relative max-w-[640px] mx-auto my-8">
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
        <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
          <img
            src="/images/image14.png"
            alt="Hariri Institute Design Process"
            className="rounded-2xl w-full h-auto object-cover"
            style={{ maxHeight: "200px" }}
          />
        </div>
      </div>

        <br></br>
      <h2 style="font-size: 1.5em; font-weight: bold;">2. Role & Company Upload</h2>
      <h2>
      Employers upload detailed information about their company and the open role. This data allows Talentora to tailor the interview process to reflect the company's values and job-specific requirements.
      </h2>
      <br>
      <div className="relative max-w-[640px] mx-auto my-8">
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
        <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
          <video
            className="rounded-2xl w-full h-auto"
            controls
            style={{ maxHeight: "200px" }}
          >
            <source src="/videos/video4.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <br></br>

      <h2 style="font-size: 1.5em; font-weight: bold;">3. AI-Driven Interview via Ora Scouts</h2>
      <h2>
      Talentora's AI agents, known as <strong>Ora Scouts</strong>, call applicants and conduct dynamic, conversational interviews using voice AI. These interactions mimic a real first-round interview.
      </h2>
      <br>
      <div className="relative max-w-[640px] mx-auto my-8">
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
        <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
          <video
            className="rounded-2xl w-full h-auto"
            controls
            style={{ maxHeight: "200px" }}
          >
            <source src="/videos/video5.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <br></br>

      <h2 style="font-size: 1.5em; font-weight: bold;">4. Interview Analysis & Scoring</h2>
      <h2>
      Interviews are analyzed for clarity, confidence, relevance, and emotional intelligence using semantic AI tools. Each candidate is scored based on their performance.
      </h2>
      <br></br>
      <h2 style="font-size: 1.5em; font-weight: bold;">5. Candidate Summary Output</h2>
      <h2>
      Employers receive a curated shortlist of top candidates, along with key insights into each applicant's strengths, weaknesses, and cultural fit—making final selection faster and easier.
      </h2>
      <br></br>


      <h2 style="font-size: 2em; font-weight: bold;">Results</h2> 
      <h2>
      Talentora delivers a <strong>streamlined hiring experience</strong> for companies and a modern, intuitive process for candidates. It reduces time-to-hire, improves the quality of shortlisted candidates, and removes the burden of early-stage interviewing for small teams.
      </h2>

      <br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Key Differentiators</h3>
        <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
       <h2><strong>• Compared to HireVue:</strong> Talentora offers a more personalized and less "robotic" AI interaction, ideal for smaller companies.
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
        <h2><span className="absolute -left-4">•</span>
       Frameworks: Next.js, React</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2><span className="absolute -left-8">•</span>
            Purpose: Delivers a fast, modern interface for both employers and applicants.</h2>
          </li>  
        </ul>
      </li>
    </ul>

  
      <br>
      <h2 style="font-size: 1.5em; font-weight: bold;">Applicant Analysis Repository</h2>
      <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2><span className="absolute -left-4">•</span>
       Technology: Hume AI (Semantic & Emotional Analysis)</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2><span className="absolute -left-8">•</span>
            Purpose: Scores candidate responses and generates insightful summaries for decision-makers.</h2>
          </li>  
        </ul>
      </li>
    </ul>

          <br>
      <h2 style="font-size: 1.5em; font-weight: bold;"> Bot Repository</h2>
      <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2><span className="absolute -left-4">•</span>
       Technology: Pipecat (Speech-to-Text, Text-to-Speech LLMs)</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2><span className="absolute -left-8">•</span>
            Purpose: Powers real-time, human-like interview conversations through Ora Scouts.</h2>
          </li>  
        </ul>
      </li>
    </ul>

    <br></br>
     <h2 style="font-size: 2em; font-weight: bold;">Reflection</h2> 
      <h2>
      Talentora is redefining hiring for small and medium-sized businesses. With a focus on <strong>efficiency</strong>, <strong>empathy</strong>, and <strong>intelligence</strong>, the platform helps teams hire smarter—without the high costs or time demands of traditional recruiting. Whether you're an overextended founder, a lean HR manager, or a job seeker looking for a modern interview experience, Talentora offers a powerful solution for building your dream team.
      </h2>
    `,
    tags: [ "Web Development", "Branding", "UI/UX Design"],
}

export default function TalentoraPage() {
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
    <div className="min-h-screen bg-white">

      {/* Project Vertical Navigation */}
      <ProjectVerticalNavigation />

      {/* Top Navigation for Sections */}
      {/* Removed Overview and Problem nav bar as requested */}

      <main className="relative lg:ml-64">
        <article className="prose lg:prose-xl">
          {/* Hero Section */}
          <motion.div
            id="hero"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Text Content */}
            <motion.div
              className="relative z-10 pt-10 pb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="px-16 pr-32">
                <div className="max-w-7xl mx-auto space-y-4">
                  <motion.h1
                    className="font-mono text-3xl md:text-5xl font-normal tracking-wide leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="text-gray-600">
                      {project.title}
                    </span>
                  </motion.h1>

                  <motion.p
                    className={`${playfair.className} text-3xl md:text-5xl max-w-2xl font-normal leading-relaxed text-gray-800`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-3 text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <span className="text-xl font-extralight">{project.date}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative w-full h-[400px] overflow-hidden -mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex justify-start">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="w-full max-w-5xl h-full object-contain rounded-3xl"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Project Details Section */}
          <motion.div
            id="project-details"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-16 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Role */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">role</h3>
                <p className="text-sm font-extralight text-gray-600">Design Strategist, UX Researcher, UI/UX</p>
              </div>

              {/* Team */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">team</h3>
                <p className="text-sm font-extralight text-gray-600">Heather Davies</p>
                <p className="text-sm font-extralight text-gray-600">Ben Gardiner</p>
                <p className="text-sm font-extralight text-gray-600">Lucas Yoon</p>
                <p className="text-sm font-extralight text-gray-600">Vincent Li</p>
                <p className="text-sm font-extralight text-gray-600">Ruby Chen</p>
                <p className="text-sm font-extralight text-gray-600">Abdel Lokma</p>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">tools</h3>
                <p className="text-sm font-extralight text-gray-600">Figma</p>
                <p className="text-sm font-extralight text-gray-600">React</p>
                <p className="text-sm font-extralight text-gray-600">Adobe Illustrator</p>
                <p className="text-sm font-extralight text-gray-600">Adobe Photoshop</p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">skills</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <p className="text-sm font-extralight text-gray-600">AI Integration</p>
                  <p className="text-sm font-extralight text-gray-600">UI/UX Design</p>
                  <p className="text-sm font-extralight text-gray-600">Product Design</p>
                  <p className="text-sm font-extralight text-gray-600">Web Development</p>
                  <p className="text-sm font-extralight text-gray-600">User Research</p>
                </div>
              </div>
            </div>
          </motion.div>

           {/* Diagonal Line Divider */}
           <div className="flex justify-center -py-4 -mt-10">
            <div className="flex space-x-3">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-8 bg-orange-300 transform rotate-45"
                />
              ))}
            </div>
          </div>

          

          {/* Content Section */}

          <motion.div
            id="project-overview"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 scroll-mt-24"
            onMouseEnter={() => {
              const event = new CustomEvent('sectionHover', { detail: 'inspiration' })
              window.dispatchEvent(event)
            }}
            onMouseLeave={() => {
              const event = new CustomEvent('sectionHover', { detail: null })
              window.dispatchEvent(event)
            }}
          >

          </motion.div>

        {/* Section Title Example */}
         <div className="px-16">
           <SectionTitle>Introduction</SectionTitle>
         </div>

         <div className="px-16 -mt-2">
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  In today's fast-paced job market, small to medium-sized businesses often struggle with the early stages of hiring. Without the resources for dedicated HR teams or costly recruiting agencies, these companies are forced to manually screen applicants—an inefficient, time-consuming process.
                  </p>
                  <br></br>
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  Talentora is an AI-powered platform designed to automate first-round interviews, helping businesses identify top candidates quickly and effectively. By streamlining this critical step, Talentora enables teams to focus on what matters: building strong, high-performing teams.
                  </p>
        </div>

        <div 
              id="problem" 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-4 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'problem' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
        ></div>

        <div className="px-16 md:col-span-12">      
        {/* Section Title Example */}
        <SectionTitle>Problem</SectionTitle>
        </div>

                 <div className="px-16 -mt-2">
                   <p className="text-lg font-extralight leading-relaxed text-gray-600">
                   The hiring process is broken—especially for <strong>small to mid-sized companies without dedicated HR teams</strong>. These organizations often rely on <strong>overworked founders or office managers</strong> to manually screen applicants, leading to rushed decisions, overlooked talent, and hours lost to repetitive, low-impact work.
                   </p>
                   
                   <br></br>
                   
                   <p className="text-lg font-extralight leading-relaxed text-gray-600">
                   While existing platforms offer resume filters or video submissions, they fall short of replicating the <strong>nuance and adaptability of a real conversation</strong>. Static, one-size-fits-all assessments miss the context behind a candidate's answers and can't capture qualities like <strong>emotional intelligence, communication style, or cultural alignment</strong>.
                   </p>
                   
                   <br></br>
                   
                   <p className="text-lg font-extralight leading-relaxed text-gray-600">
                   For companies juggling growth and operations, this <strong>early-stage hiring friction</strong> creates a bottleneck that slows down teams and costs them the best talent.
                   </p>
                   
                   <br></br>

                   <br></br>
                   <p className="mt-6 text-lg font-extralight leading-tight text-gray-600">
                  Thus I explored:
            </p>
            <h3 className="mt-4 font-sans text-3xl font-normal tracking-wide text-orange-500 border-l-4 border-orange-300 pl-6">
                How might we help companies automate their first-round interviews?
                </h3>

                
            </div>

            <div 
                  id="research" 
                  className="px-16 grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 scroll-mt-22"
                  onMouseEnter={() => {
                    const event = new CustomEvent('sectionHover', { detail: 'research' })
                    window.dispatchEvent(event)
                  }}
                  onMouseLeave={() => {
                    const event = new CustomEvent('sectionHover', { detail: null })
                    window.dispatchEvent(event)
                  }}
                >
                  <div className="md:col-span-12">
                    <SectionTitle>Research</SectionTitle>
                    <div className="-mt-2">
                      <p className="text-lg font-extralight leading-relaxed text-gray-600">
                      As the UX designer on Talentora, an AI-powered platform for automating first-round interviews, I took the lead in shaping how product design and engineering aligned to create an experience that felt intelligent, intuitive, and trustworthy. With a small, fast-moving team, I knew that early collaboration would be essential—not just to define what we could build, but to uncover what we should build.
                      </p>
                      <br></br>
                      <p className="text-lg font-extralight leading-relaxed text-gray-600">
                      I kicked off the feature planning process by facilitating a series of design-engineering brainstorms. My goal was to surface all potential ideas—no matter how ambitious—before filtering based on feasibility. I encouraged the team to think broadly: What could an AI assistant do if we weren’t constrained by time or resources?
                       </p>
                       
                    
                       
                       {/* Image after key opportunity areas */}
                       <div className="px-8 pt-4 flex justify-start -ml-8">
                         <div className="relative w-full max-w-7xl">
                           <Image
                             src="/images/talentora2.png"
                             alt="Plant Care Research Insights"
                             width={1600}
                             height={1200}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 45%' }}
                           />
                         
                         </div>
                
                       </div>
                       <p className="text-lg font-extralight leading-relaxed text-gray-600 mb-4">
                           Through thematic coding and affinity mapping, I identified several key opportunity areas:
                         </p>
                         <ul className="text-lg font-extralight leading-relaxed text-gray-600 space-y-1">
                           <li>• Users need real-time, image-based diagnostics they can trust.</li>
                           <li>• Care advice must be simple, personalized, and actionable—not generic.</li>
                           <li>• Motivation increases when users can track progress and see improvement.</li>
                           <li>• Many feel alone in their plant care struggles and seek community validation or support.</li>
                         </ul>
                        
                      </div>
                  </div>
                </div>
            
           
                



          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-gray-300 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <Link
              href="/work/virtual-gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Next Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
} 