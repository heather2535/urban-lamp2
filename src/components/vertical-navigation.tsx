"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, Briefcase, User, Mail } from "lucide-react"

interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", icon: Home },
  { id: "projects", label: "Work", icon: Briefcase },
]

export default function VerticalNavigation() {
  const [activeSection, setActiveSection] = useState("hero")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects']
      
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
      className="fixed left-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block"
    >
      <nav className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id} className="flex items-center group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 group"
                >
                  <Icon 
                    className={`w-4 h-4 transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-orange-500'
                        : 'text-gray-600 group-hover:text-orange-500'
                    }`}
                  />
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