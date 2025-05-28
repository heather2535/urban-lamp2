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
import { Anton, Open_Sans } from 'next/font/google'

const anton = Anton({ 
  subsets: ['latin'],
  weight: ['400'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300'],
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
    <div className="group min-h-screen bg-background fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:to-[#1a2a3a]">
      <AuraCursor />
      <Navigation />

      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 border-b border-gray-300/80 dark:border-white/10">
        <div className="flex items-center justify-center relative w-full py-32 sm:py-60">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Decorative Doodles */}
          <div className="absolute top-10 right-10 w-64 h-64 opacity-20 dark:opacity-10 pointer-events-none animate-float">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="animate-wiggle">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M20,20 Q40,40 60,20 T100,20 T140,20 T180,20 M20,60 Q40,80 60,60 T100,60 T140,60 T180,60 M20,100 Q40,120 60,100 T100,100 T140,100 T180,100 M20,140 Q40,160 60,140 T100,140 T140,140 T180,140"
                className="text-pink-500 dark:text-pink-400"
              />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-500 dark:text-pink-400" />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M160,40 L180,20 M160,60 L180,40 M160,80 L180,60 M160,100 L180,80 M160,120 L180,100 M160,140 L180,120"
                className="text-pink-500 dark:text-pink-400"
              />
            </svg>
          </div>

          <div className="absolute bottom-10 left-10 w-48 h-48 opacity-15 dark:opacity-8 pointer-events-none rotate-45 animate-float-delayed">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="animate-wiggle-reverse">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M20,20 Q40,40 60,20 T100,20 T140,20 T180,20 M20,60 Q40,80 60,60 T100,60 T140,60 T180,60 M20,100 Q40,120 60,100 T100,100 T140,100 T180,100 M20,140 Q40,160 60,140 T100,140 T140,140 T180,140"
                className="text-pink-500 dark:text-pink-400"
              />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-500 dark:text-pink-400" />
            </svg>
          </div>

          <div className="absolute top-1/2 left-10 w-32 h-32 opacity-10 dark:opacity-5 pointer-events-none -rotate-12 animate-float-slow">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="animate-wiggle-slow">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M20,20 Q40,40 60,20 T100,20 T140,20 T180,20 M20,60 Q40,80 60,60 T100,60 T140,60 T180,60"
                className="text-pink-500 dark:text-pink-400"
              />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-500 dark:text-pink-400" />
            </svg>
          </div>

          <div className="absolute bottom-1/2 right-10 w-40 h-40 opacity-15 dark:opacity-8 pointer-events-none rotate-12 animate-float-delayed-slow">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="animate-wiggle-reverse-slow">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M160,40 L180,20 M160,60 L180,40 M160,80 L180,60 M160,100 L180,80 M160,120 L180,100 M160,140 L180,120"
                className="text-pink-500 dark:text-pink-400"
              />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-500 dark:text-pink-400" />
            </svg>
          </div>
          
          <div className="container relative z-20">
            <div className="mx-auto max-w-4xl px-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12 mb-12">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/profile.png"
                    alt="Heather's profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                  <h1 className={`text-zinc-800 dark:text-white text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight mb-0 ${anton.className}`}>
                    <span className="text-primary">HEATHER</span>
                  </h1>
                  <h1 className={`text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-0 ${openSans.className} uppercase tracking-[0.3em]`}>
                    Multidisciplinary Designer
                  </h1>
                  <div className="h-4"></div>
                  <h1 className="text-gray-700 dark:text-white/70 text-sm sm:text-base max-w-2xl mb-6">
                    Passionate about creating purposeful, research-driven products that enhance usability, accessibility, and overall performance. My work combines visual polish with a deep understanding of how people think, feel, and use technology.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-10 -mt-20">
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

      <style jsx>{`
        @keyframes float-around {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -15px) rotate(5deg); }
          50% { transform: translate(-15px, 10px) rotate(-5deg); }
          75% { transform: translate(15px, 15px) rotate(3deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes float-around-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-20px, 15px) rotate(-5deg); }
          50% { transform: translate(15px, -10px) rotate(5deg); }
          75% { transform: translate(-15px, -15px) rotate(-3deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes float-around-3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, 20px) rotate(3deg); }
          50% { transform: translate(-20px, -15px) rotate(-3deg); }
          75% { transform: translate(10px, 15px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes float-around-4 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-15px, -20px) rotate(-3deg); }
          50% { transform: translate(20px, 15px) rotate(3deg); }
          75% { transform: translate(-10px, -15px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-float {
          animation: float-around 15s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-around-2 18s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-around-3 20s ease-in-out infinite;
        }
        .animate-float-delayed-slow {
          animation: float-around-4 17s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
