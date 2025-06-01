"use client";
import { useState } from "react"
import Navigation from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package, ArrowLeft, ArrowUpRight, Circle, Square, Triangle, ExternalLink, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

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
    title: "Talentora Designing A\nConversational AI Interview Platform",
    description: "A platform that uses AI to conduct interviews and evaluate candidates.",
    date: "February 3, 2025",
    video: "/video1.mov?height=450&width=800", 
    content: `
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Introduction</h2>
      <br>
      <h2>
      In today's fast-paced job market, small to medium-sized businesses often struggle with the early stages of hiring. Without the resources for dedicated HR teams or costly recruiting agencies, these companies are forced to manually screen applicants—an inefficient, time-consuming process.
      </h2>
      <br>
      <p>
      Talentora is an AI-powered platform designed to automate first-round interviews, helping businesses identify top candidates quickly and effectively. By streamlining this critical step, Talentora enables teams to focus on what matters: building strong, high-performing teams.
      </p>

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

export default function AITaskManagerPage() {
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
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-32 left-16 text-orange-300 opacity-15"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Circle size={80} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-24 text-purple-300 opacity-20"
          animate={{ rotate: -360, y: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Square size={60} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/3 text-pink-300 opacity-25"
          animate={{ rotate: 180, x: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Triangle size={45} />
        </motion.div>
      </div>

      <Navigation />
      <main className="container mx-auto px-6 lg:px-8 relative z-10">
        <article className="prose lg:prose-xl dark:prose-invert">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 mb-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero Section - Two Column Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-5 gap-16 items-start mt-10 mb-16"
          >
            {/* Right Column - Image */}
            <motion.div
              className="md:col-span-3 relative order-first md:order-last"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative max-w-[640px] mx-auto mt-8 md:mt-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
                  <img
                    src="/image16.png"
                    alt="AI Task Manager Overview"
                    className="rounded-2xl w-full h-auto object-cover"
                    style={{ maxHeight: "500px" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Left Column - Text Content */}
            <motion.div
              className="md:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-5xl lg:text-7xl font-black tracking-tight leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Talentora</span>{" "}
                <span className="text-black">Designing A<br />Conversational AI Interview Platform</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex items-center gap-3 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-sm">{project.date}</span>
              </motion.div>

              {/* Tags */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {filteredProjects.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll to Explore */}
          <motion.div
            className="flex flex-col items-center justify-center gap-2 text-gray-500 mt-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronRight className="w-4 h-4 rotate-90" />
          </motion.div>

          {/* Three Columns Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Role</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Design Strategist, UX</p>
                  <p className="text-gray-600">Researcher, UI/UX</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Team</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Heather Davies</p>
                  <p className="text-gray-600">Ben Gardiner</p>
                  <p className="text-gray-600">Lucas Yoon</p>
                  <p className="text-gray-600">Vincent Li</p>
                  <p className="text-gray-600">Abdel Lokma</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Duration</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Sept. 09 '24 - Feb. 30 '25</p>
                  <p className="text-gray-600">6 months total</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Problem Statement and Goal Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Goal</h3>
                <p className="text-gray-700 leading-relaxed">
                  The primary goal was to create an AI-powered platform that automates first-round interviews, helping businesses identify top candidates quickly and effectively. We aimed to streamline the hiring process for small to medium-sized businesses without dedicated HR teams.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Solution</h3>
                <p className="text-gray-700 leading-relaxed">
                  We developed a full-stack web application that uses AI to conduct dynamic, conversational interviews through voice AI agents called Ora Scouts. The platform analyzes responses using semantic and emotional insight analysis to provide accurate candidate evaluations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
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
