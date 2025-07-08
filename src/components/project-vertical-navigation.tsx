"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, Briefcase, Target, Lightbulb, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { id: "hero", label: "Overview", icon: Home },
  { id: "project-details", label: "Details", icon: Briefcase },
  { id: "problem", label: "Problem", icon: Target },
  { id: "research", label: "Research", icon: Lightbulb },
  { id: "competitive-analysis", label: "Competitive Analysis", icon: Users },
  { id: "sketching", label: "Sketching", icon: Home },
  { id: "lofi-wireframing", label: "LoFi Wireframing", icon: Briefcase },
  { id: "refining-prototyping", label: "Refining & Prototyping", icon: Target },
  { id: "reflections", label: "Reflections", icon: Users },
]

export default function ProjectVerticalNavigation() {
  const [activeSection, setActiveSection] = useState("hero")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'project-details', 'problem', 'solution', 'features']
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed left-8 top-32 z-30 hidden lg:block"
    >
      <nav className="bg-white/80 backdrop-blur-md rounded-lg p-6 shadow-lg min-w-[200px]">
        <ul className="space-y-4">
          {/* Return Home Button */}
          <li className="flex items-center gap-3 group">
            <Link
              href="/#projects"
              className="flex items-center gap-3 group"
            >
              <ArrowLeft className="w-3 h-3 text-gray-600 group-hover:text-orange-500 transition-all duration-300" />
              <span className="text-sm text-gray-600 opacity-60 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-mono">
                Return Home
              </span>
            </Link>
          </li>
          
          {/* Spacer */}
          <li className="h-8"></li>
          
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id} className="flex items-center group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-left"
                >
                  <span
                    className={`text-sm transition-all duration-300 whitespace-nowrap font-mono relative ${
                      activeSection === item.id
                        ? 'text-orange-500 opacity-100'
                        : 'text-gray-600 opacity-60 group-hover:opacity-100'
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-4 bg-orange-300 transition-all duration-300 group-hover:w-full -z-10"></span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </motion.div>
  )
} 