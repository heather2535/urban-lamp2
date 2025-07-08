"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Mail, FileText, ArrowUpRight, Circle, Square, Triangle, Layers, Cloud, Stethoscope, Users, ChevronDown } from "lucide-react"
import { Playfair_Display } from 'next/font/google'
import { useTheme } from "next-themes"
import { projects } from "@/data/projects"
import VerticalNavigation from "@/components/vertical-navigation"

const playfair = Playfair_Display({ subsets: ['latin'] })

// Typing Animation Component
const TypingAnimation = ({ text, subText, className }: { text: string; subText?: string; className: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [displaySubText, setDisplaySubText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [subTextIndex, setSubTextIndex] = useState(0)
  const [showSubText, setShowSubText] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 30) // Even faster typing speed (reduced from 50ms to 30ms)

      return () => clearTimeout(timeout)
    } else if (subText && !showSubText) {
      // Start subtext after main text is complete
      const timeout = setTimeout(() => {
        setShowSubText(true)
      }, 500) // 500ms delay before starting subtext

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, subText, showSubText])

  useEffect(() => {
    if (showSubText && subText && subTextIndex < subText.length) {
      const timeout = setTimeout(() => {
        setDisplaySubText(prev => prev + subText[subTextIndex])
        setSubTextIndex(prev => prev + 1)
      }, 30)

      return () => clearTimeout(timeout)
    }
  }, [subTextIndex, subText, showSubText])

  // Function to render text with highlighted words
  const renderTextWithHighlight = (text: string) => {
    const words = text.split(' ')
    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,!?]/g, '').toLowerCase()
      if (['designer', 'builder', 'storyteller'].includes(cleanWord)) {
        return (
          <span key={index}>
            <span className="text-orange-500">{word}</span>
            {index < words.length - 1 ? ' ' : ''}
          </span>
        )
      }
      if (cleanWord === 'alix') {
        return (
          <span key={index} className="relative inline-block">
            <div className="absolute -bottom-1 left-0 w-full h-3 bg-orange-500/60 rounded-sm transform -rotate-1 z-0"></div>
            <span className="relative z-10">{word}</span>
            {index < words.length - 1 ? ' ' : ''}
          </span>
        )
      }
      return word + (index < words.length - 1 ? ' ' : '')
    })
  }

  return (
    <div className={className}>
      <div>
        {renderTextWithHighlight(displayText)}
        {currentIndex < text.length && <span className="animate-pulse">|</span>}
      </div>
      {showSubText && (
        <div className="mt-8">
          <p className="font-mono italic text-gray-400 text-sm sm:text-base">
            {displaySubText}
            {subTextIndex < (subText?.length || 0) && <span className="animate-pulse">|</span>}
          </p>
        </div>
      )}
    </div>
  )
}

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-50 text-black min-h-screen flex flex-col">
      {/* Floating geometric shapes - Hidden on mobile to prevent interference */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
        <motion.div
          className="absolute top-20 left-10 text-orange-300 opacity-20"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            rotate: 360,
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Circle size={60} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-20 text-orange-400 opacity-15"
          animate={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * 0.01,
            rotate: -360,
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Square size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 text-pink-300 opacity-25"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * -0.02,
            rotate: 180,
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Triangle size={35} />
        </motion.div>
      </div>

      {/* Vertical Navigation */}
      <VerticalNavigation />

      {/* Hero Section */}
      <main id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-40 py-8 sm:py-0 lg:ml-0">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-2 items-center">
          {/* Left side - Text content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="h-32 sm:h-40">
              <TypingAnimation 
                text="Hi! I'm Heather. I'm a designer by instinct, builder by practice, and storyteller at heart. I believe in crafting experiences that not only solve real problems but spark joy." 
                subText="Recently graduated from Boston University"
                className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide leading-relaxed text-left"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-24 sm:pt-32 lg:pt-56">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 sm:px-16 py-3 border border-orange-500 text-orange-500 rounded-lg font-mono text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors duration-300"
              >
                Resume
              </Link>
              <button
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
                className="inline-flex items-center justify-center px-12 sm:px-16 py-3 bg-orange-500 text-white rounded-lg font-mono text-sm font-medium hover:bg-orange-600 transition-colors duration-300"
              >
                View Work <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Coral orange tape on top */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-6 sm:h-8 bg-orange-500/50 rounded-none transform -rotate-1 z-20"></div>
              
              <div className="shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg pt-10 sm:pt-14 pb-8 sm:pb-10 pl-2 sm:pl-4 pr-2 sm:pr-4 bg-white/5 backdrop-blur-sm">
                <div className="w-48 sm:w-64 h-48 sm:h-64 overflow-hidden shadow-lg">
                  <Image 
                    src="/images/profile.png" 
                    alt="Heather's portrait" 
                    width={256} 
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-mono text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 text-center">
                  UX dreamer, matcha sipper,<br />
                  & proud plant parent 🌿✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Location and Time - Full Width */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center px-6 lg:px-8 py-4 text-xs text-gray-400 gap-2 sm:gap-0">
        <span>SANTA CLARA, CALIFORNIA</span>
        <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZoneName: 'short' })}</span>
      </div>

      {/* Featured Projects Section */}
      <section id="projects" className="pt-10 pb-20">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
          {/* Projects Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {projects.filter(p => 
              p.title !== "Hariri Institute Website" && 
              p.href !== "/work/healthcare-platform" &&
              p.href !== "/work/chaosthesis" &&
              p.href !== "/work/ai-task-manager" &&
              p.href !== "/work/architectural-vis" &&
              p.href !== "/work/marketing-campaign"
            ).map((project, index) => (
              <Link key={project.title} href={project.href} className="hover:opacity-90 transition-opacity">
                <div className="shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg p-4 sm:p-6 bg-white/5 backdrop-blur-sm hover:rotate-2 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="relative my-4 sm:my-6">
                      <div className="relative bg-white rounded-none overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="w-full h-48 sm:h-64 object-cover transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-3">
                        <h3 className="text-xl sm:text-2xl font-mono font-semibold text-gray-900 text-center">{project.title}</h3>
                      </div>
                      <p className="font-mono text-sm mb-4 font-extralight leading-relaxed text-black">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.tags.filter(tag => tag !== "All Projects").slice(0, 3).map((tag, index) => {
                          const colors = [
                            "bg-blue-100 text-blue-800",
                            "bg-green-100 text-green-800",
                            "bg-purple-100 text-purple-800",
                            "bg-orange-100 text-orange-800",
                            "bg-pink-100 text-pink-800",
                            "bg-indigo-100 text-indigo-800"
                          ]
                          return (
                            <span key={tag} className={`font-mono px-2 sm:px-3 py-1 rounded-full text-xs ${colors[index % colors.length]}`}>
                              {tag}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
