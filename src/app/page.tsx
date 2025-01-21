"use client"
import { useState, useMemo, useRef } from "react"
import { ProjectCard } from "@/components/project-card"
import { LandingFilter } from "@/components/landing-filter"
import { AuraCursor } from "@/components/aura-cursor"
import { Navigation } from "@/components/navigation"
import { projects, allTags } from "@/data/projects"
import { Button } from "@/components/button"
import { SkillsSection } from "@/components/skills-section"
import { ProjectFilter } from "@/components/project-filter"
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
    <div className="group min-h-screen bg-background fade-in" style={{ background: "linear-gradient(to right, #000000, #1a2a3a, #004d28, #6a4e92)" }}>
      <AuraCursor />

      {/* Hero Section */}
      <section className="flex items-center justify-center px-4">
        <div className="flex items-center justify-center relative w-full py-32 sm:py-48">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" /> {/* Grainy texture */}
          
          <div className="container relative z-20">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-white text-2xl font-semibold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
                Hi I'm Heather, Creative Engineer, AI Enthusiast
              </h1>
              <p className="px-20 mx-20 mt-6 text-lg leading-8 text-white font-light">
                Crafting digital experiences that combine functionality with powerful design. 
              </p>

            <div className="mt-10 flex items-center justify-center gap-x-4">
              <Link href="/projects" passHref>
                <Button size="lg" variant="default"className="py-6 px-6">
                  Get started
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button size="lg" variant="outline" className="py-6 px-12">
                  About
                </Button>
              </Link>
            </div>

            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <FeaturedProject projects={filteredProjects} />
      

      {/* Projects Section */}
      



      {/* Skills Section */}
      <div className="px-10 -mt-8 pt-8  bg-background" >
        <SkillsSection />
      </div>
    </div>
  )
}
