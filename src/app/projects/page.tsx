"use client"
import { ChevronRight } from "lucide-react";  // Import the ChevronRight icon
import { useState, useMemo, useRef } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import { AuraCursor } from "@/components/aura-cursor"
import { Navigation } from "@/components/navigation"
import { projects, allTags } from "@/data/projects"
import { Button } from "@/components/button"
import { Anton } from 'next/font/google'

const anton = Anton({ 
  subsets: ['latin'],
  weight: ['400'],
})

const styles = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ambientGlow {
  0% { 
    opacity: 0.4;
    transform: scale(1);
  }
  50% { 
    opacity: 0.7;
    transform: scale(1.1);
  }
  100% { 
    opacity: 0.4;
    transform: scale(1);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

.animate-slide-up-delayed {
  animation: slideUp 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-ambient-glow {
  animation: ambientGlow 8s ease-in-out infinite;
}
`

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
    <>
      <style>{styles}</style>
      <div className="group min-h-screen bg-white dark:bg-gray-900">
        <AuraCursor />

        {/* Hero Section */}
        <section className="flex items-center justify-center py-4 px-4">
          <div className="flex items-center justify-center relative w-full pt-32 sm:pt-48">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" /> {/* Grainy texture */}
            
            <div className="container relative z-20">
              <div className="mx-auto max-w-5xl text-center">
                <div className="relative animate-float">
                  <div className="absolute inset-0 blur-[100px] -z-10 bg-[radial-gradient(circle,rgba(236,72,153,0.4)_0%,rgba(236,72,153,0.2)_30%,transparent_70%)] animate-ambient-glow" />
                  <h1 className={`text-6xl sm:text-7xl lg:text-9xl font-black mb-2 sm:mb-0 text-center ${anton.className}`}>
                    <span className="text-primary">PROJECTS</span>
                  </h1>
                  <h3 className="mt-6 text-md leading-8 text-gray-700 dark:text-gray-200 mb-6 animate-slide-up-delayed">
                    Designing interfaces that connect, guide, and delight. 
                  </h3>
                </div>

                <div className="mt-12 animate-slide-up-delayed">
                  <ProjectFilter
                    tags={allTags}
                    selectedTag={selectedTag}
                    onTagSelect={setSelectedTag}
                    onSearch={setSearchQuery}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="bg-background fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-black dark:via-[#1a1f2e] dark:to-[#2a2f3e] flex mx-auto w-full min-h-screen px-4 sm:px-12 pt-22 pb-32">
          <div className="container mx-auto max-w-7xl">
            <div className="mt-4 flex items-center justify-center space-x-2">
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
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
    </>
  )
}
