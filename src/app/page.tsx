"use client"
import { useState, useMemo, useRef } from "react"
import { ProjectCard } from "@/components/project-card"
import { LandingFilter } from "@/components/landing-filter"
import { AuraCursor } from "@/components/aura-cursor"
import { Navigation } from "@/components/navigation"
import { projects, allTags } from "@/data/projects"
import { Button } from "@/components/button"
import { SkillsSection } from "@/components/skills-section"
import { AutomationSection } from "@/components/featured-project2"

import { ProjectFilter } from "@/components/project-filter copy"
import { FeaturedProject } from "@/components/featured-project"
import Link from "next/link"
import { Anton } from 'next/font/google'
import { Linkedin, Mail, FileText } from "lucide-react"

const anton = Anton({ 
  subsets: ['latin'],
  weight: ['400'],
})

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const projectsRef = useRef<HTMLDivElement>(null)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesTag = !selectedTag || project.tags.includes(selectedTag)

      return matchesSearch && matchesTag
    })
  }, [searchQuery, selectedTag])

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="group min-h-screen bg-background fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-black dark:via-[#1a2a3a] dark:to-[#6a4e92]">
      <AuraCursor />
      <Navigation />

      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 border-b border-gray-300/80 dark:border-white/10 h-[1080px]">
        <div className="flex items-center justify-center relative w-full h-full">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          <div className="container relative z-20">
            <div className="mx-auto max-w-[90vw] px-4">
              <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start gap-12 mb-12 relative">
                <div className="relative w-36 h-36 sm:w-56 sm:h-56 rounded-full overflow-hidden flex-shrink-0 sm:absolute sm:right-0 sm:top-0 sm:translate-y-[-15%] z-0">
                  <img
                    src="/images/profile.png"
                    alt="Heather's profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center text-center w-full sm:pr-24 sm:pt-8 relative z-10">
                  <h1 className={`text-pink-600/40 dark:text-pink-400 text-4xl sm:text-6xl lg:text-8xl font-black mb-2 sm:mb-0 text-center ${anton.className}`}>
                    <span>HEATHER DAVIES</span>
                  </h1>
                  <h1 className={`text-zinc-800 dark:text-white text-5xl sm:text-7xl lg:text-9xl font-black mb-2 sm:mb-0 text-center ${anton.className}`}>
                    <span className="text-primary">PRODUCT DESIGNER</span>
                  </h1>
                 
                  <h1 className="text-gray-700 dark:text-white/70 text-sm sm:text-lg lg:text-2xl max-w-[90vw] mb-4 text-center tracking-tight">
                    CRAFTING BEAUTIFUL, ACCESSIBLE, AND PERFORMANT DIGITAL EXPERIENCES.
                  </h1>
                  
                  {/* Contact Links */}
                  <div className="flex flex-row justify-center gap-4 sm:gap-32 w-full max-w-[90vw] mt-8 sm:mt-32">
                    <a 
                      href="https://www.linkedin.com/in/heatherrdavies/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-2 sm:p-4 border-b-2 border-gray-800 dark:border-gray-200 hover:border-pink-500 transition-colors"
                    >
                      <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 mb-2" />
                      <span className="text-xs sm:text-sm">LinkedIn</span>
                    </a>
                    <a 
                      href="mailto:daviesheather518@gmail.com"
                      className="flex flex-col items-center p-2 sm:p-4 border-b-2 border-gray-800 dark:border-gray-200 hover:border-pink-500 transition-colors"
                    >
                      <Mail className="h-6 w-6 sm:h-8 sm:w-8 mb-2" />
                      <span className="text-xs sm:text-sm">Email</span>
                    </a>
                    <a 
                      href="/resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-2 sm:p-4 border-b-2 border-gray-800 dark:border-gray-200 hover:border-pink-500 transition-colors"
                    >
                      <FileText className="h-6 w-6 sm:h-8 sm:w-8 mb-2" />
                      <span className="text-xs sm:text-sm">Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-10 -mt-20 bg-zinc-100 dark:bg-zinc-900">
        <div className="container mx-auto max-w-4xl px-4">
          <div ref={projectsRef} className="mt-32">
            <FeaturedProject projects={filteredProjects} />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      {/* <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-9xl text-pink-500/10 dark:text-pink-500/20 font-serif">"</div>
            <blockquote className="text-3xl md:text-4xl font-light text-gray-800 dark:text-white/90 leading-relaxed italic">
              Design is not just what it looks like and feels like. Design is how it works.
            </blockquote>
            <div className="mt-8 text-right">
              <p className="text-lg text-gray-600 dark:text-gray-400">— Steve Jobs</p>
            </div>
          </div>
        </div>
      </section> */}

     

     


     
    </div>
  )
}
