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
      <section className="flex items-center justify-center px-4">
        <div className="flex items-center justify-center relative w-full py-20 sm:py-40">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          <div className="container relative z-20">
            <div className="mx-auto max-w-3xl px-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-pink-500/40 flex-shrink-0">
                  <img
                    src="/images/profile.png"
                    alt="Heather's profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <h1 className="text-zinc-800 dark:text-white text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-2 sm:mb-0">
                    <span className="text-primary">Heather Davies</span>
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-2">
                    Multidisciplinary Designer
                  </p>
                  <p className="text-gray-700 dark:text-white/70 text-sm sm:text-base max-w-2xl mb-4">
                    Passionate about creating purposeful, research-driven products that enhance usability, accessibility, and overall performance. My work combines visual polish with a deep understanding of how people think, feel, and use technology.
                  </p>
                  {/* Contact Links */}
                  <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
                    <a 
                      href="mailto:heather.davies@example.com" 
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                      daviesheather518@gmail.com
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/heatherrdavies/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                      LinkedIn
                    </a>
                    <a 
                      href="/resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-10 -mt-20 bg-white dark:bg-gray-900">
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
