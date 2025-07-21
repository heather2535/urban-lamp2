"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUp } from "lucide-react"
import Link from "next/link"

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: "hypothesis", label: "Motivation" },
  { id: "project-overview", label: "Problem" },
  { id: "research", label: "Understanding our users" },
  { id: "problem", label: "Define" },
  { id: "competitive-analysis", label: "Ideate" },
  { id: "rebranding", label: "Rebranding" },
  { id: "sketching", label: "Challenges & Takeaways" },
]

export default function TalentoraVerticalNavigation() {
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isFixed, setIsFixed] = useState(true)
  const [showNav, setShowNav] = useState(true)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      setActiveSection(sectionId)
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
      
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      
      // Debounce the scroll detection
      scrollTimeoutRef.current = setTimeout(() => {
        const scrollPosition = window.scrollY + 250
        
        // Find the current section
        let currentSection = ""
        
        for (let i = navItems.length - 1; i >= 0; i--) {
          const sectionId = navItems[i].id
          const element = document.getElementById(sectionId)
          
          if (element) {
            const rect = element.getBoundingClientRect()
            const elementTop = rect.top + window.scrollY
            
            // For the first section (Empathise), add extra offset to only highlight when reaching the section title
            const offset = sectionId === "project-overview" ? 100 : 0
            const adjustedElementTop = elementTop + offset
            
            if (scrollPosition >= adjustedElementTop) {
              currentSection = sectionId
              break
            }
          }
        }
        
        setActiveSection(currentSection)
      }, 100) // 100ms debounce for smoother detection
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial call
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const updateFixedState = () => {
      const divider = document.getElementById("more-projects-divider");
      if (divider) {
        const dividerTop = divider.getBoundingClientRect().top;
        setIsFixed(dividerTop > 0);
      }
    };

    updateFixedState();
    window.addEventListener("scroll", updateFixedState);
    return () => window.removeEventListener("scroll", updateFixedState);
  }, []);

  useEffect(() => {
    const updateShowNav = () => {
      const sketchingElement = document.getElementById("sketching");
      if (sketchingElement) {
        const sketchingBottom = sketchingElement.getBoundingClientRect().bottom;
        setShowNav(sketchingBottom > 0);
      }
    };

    updateShowNav();
    window.addEventListener("scroll", updateShowNav);
    return () => window.removeEventListener("scroll", updateShowNav);
  }, []);

  if (!showNav) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed left-8 top-32 z-30 hidden lg:block"
    >
      <nav className="bg-white/80 backdrop-blur-md rounded-lg p-6 min-w-[200px]">
        <ul className="space-y-4">
          {/* Return Home or Scroll to Top Button */}
          <li className="flex items-center gap-3 group">
            {scrolled ? (
              <button
                onClick={handleScrollToTop}
                className="flex items-center gap-3 group"
                aria-label="Scroll to Top"
              >
                <ArrowUp className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-all duration-300" />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-all duration-300 whitespace-nowrap font-mono">
                  Scroll to Top
                </span>
              </button>
            ) : (
              <Link
                href="/#projects"
                className="flex items-center gap-3 group"
              >
                <ArrowLeft className="w-3 h-3 text-gray-600 group-hover:text-gray-900 transition-all duration-300" />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-all duration-300 whitespace-nowrap font-mono">
                  Return Home
                </span>
              </Link>
            )}
          </li>
          
          {/* Spacer */}
          <li className="h-8"></li>
          
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <li key={item.id} className="flex items-center group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-left w-full"
                >
                  <span
                    className={`text-sm transition-all duration-500 ease-in-out whitespace-nowrap font-mono relative ${
                      isActive 
                        ? 'text-gray-900 font-bold' 
                        : 'text-gray-600 group-hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-4 bg-orange-400 rounded opacity-40"></span>
                    )}
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