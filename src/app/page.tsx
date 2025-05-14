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
      <div className="flex items-center justify-center relative w-full py-60 sm:py-40">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" /> {/* Grainy texture */}
        
        <div className="container relative z-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex items-center gap-6 mb-8">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-pink-500/40 flex-shrink-0">
            <img
            src="/images/profile.png"
            alt="Heather's profile picture"
            className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start h-40 justify-between">
            <h1 className="text-zinc-800 dark:text-white text-4xl font-bold tracking-tight sm:text-6xl lg:text-6xl">
            <span className="text-primary">Heather Davies</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:textlg mb-2">
            Multidisciplinary Designer
            </p>
            <p className="text-gray-700 dark:text-white/70 text-base sm:text-md max-w-2xl">
            I’m a multidisciplinary designer crafting elegant, user-first experiences. My work combines visual polish with a deep understanding of how people think, feel, and use technology.

            </p>
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
