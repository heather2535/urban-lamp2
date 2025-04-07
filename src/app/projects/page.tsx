"use client"
import { ChevronRight } from "lucide-react";  // Import the ChevronRight icon
import { useState, useMemo, useRef } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import { AuraCursor } from "@/components/aura-cursor"
import { Navigation } from "@/components/navigation"
import { projects, allTags } from "@/data/projects"
import { Button } from "@/components/button"

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
    <div className="group min-h-screen bg-background" >
      <AuraCursor />

      {/* Hero Section */}
      <section className="flex items-center justify-center px-4">
        <div className="flex items-center justify-center relative w-full py-32 sm:py-48">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" /> {/* Grainy texture */}
          
            <div className="container relative z-20">
            <div className="mx-auto max-w-5xl text-center">

              <div className="relative">
                <div className="absolute inset-0 blur-3xl -z-10 bg-[radial-gradient(circle,rgba(236,72,153,0.6)_0%,transparent_70%)]" />
                <h1 className="text-foreground text-1xl font-semibold tracking-tight text-7xl">
                  Projects
                </h1>
                <p className=" mt-6 text-lg leading-8 text-black dark:text-white font-light mb-6">
                Crafting digital experiences. 
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
{/* Projects Section */}
<section ref={projectsRef} className="flex mx-auto max-w-full min-h-screen bg-gradient-to-b from-background to-accent/20 px-12 py-22">
  <div className="container -mb-2">
    <div className="flex items-center space-x-2">
      <h2 className="text-foreground text-3xl font-bold tracking-tight mb-6 sm:text-3xl lg:text-3xl">
        Tags
      </h2>
      <ChevronRight
        className="text-foreground text-4xl mb-4 transform -translate-x-1"
        strokeWidth={4}
      />
    </div>

    <ProjectFilter
      tags={allTags}
      selectedTag={selectedTag}
      onTagSelect={setSelectedTag}
      onSearch={setSearchQuery}
    />

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.href} project={project} />
      ))}
    </div>

    {filteredProjects.length === 0 && (
      <div className="mt-12 text-center text-muted-foreground">No projects found matching your criteria</div>
    )}
  </div>
</section>

    </div>
  )
}
