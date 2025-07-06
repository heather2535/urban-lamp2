"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Mail, FileText, ArrowUpRight, Circle, Square, Triangle, Layers, Cloud, Stethoscope, Users } from "lucide-react"
import { Playfair_Display } from 'next/font/google'
import { useTheme } from "next-themes"
import { projects } from "@/data/projects"

const playfair = Playfair_Display({ subsets: ['latin'] })

// Typing Animation Component
const TypingAnimation = ({ text, className }: { text: string; className: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 30) // Even faster typing speed (reduced from 50ms to 30ms)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  // Function to render text with highlighted words
  const renderTextWithHighlight = (text: string) => {
    const words = text.split(' ')
    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,!?]/g, '').toLowerCase()
      if (['designer', 'builder', 'storyteller'].includes(cleanWord)) {
        return (
          <span key={index}>
            <span className="text-violet-600">{word}</span>
            {index < words.length - 1 ? ' ' : ''}
          </span>
        )
      }
      if (cleanWord === 'alix') {
        return (
          <span key={index} className="relative inline-block">
            <div className="absolute -bottom-1 left-0 w-full h-3 bg-violet-600/60 rounded-sm transform -rotate-1 z-0"></div>
            <span className="relative z-10">{word}</span>
            {index < words.length - 1 ? ' ' : ''}
          </span>
        )
      }
      return word + (index < words.length - 1 ? ' ' : '')
    })
  }

  return (
    <span className={className}>
      {renderTextWithHighlight(displayText)}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [time, setTime] = useState(new Date())
  const { theme } = useTheme()

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
    <div className={theme === "dark" ? "bg-[#18181b] text-white min-h-screen flex flex-col" : "bg-gray-50 text-black min-h-screen flex flex-col"}>
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
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
          className="absolute top-1/3 right-20 text-purple-300 opacity-15"
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

      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center px-8 lg:px-40">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
          {/* Left side - Text content */}
          <div className="lg:col-span-2 space-y-8">
            <TypingAnimation 
              text="Hi! I'm Heather. I'm a designer by instinct, builder by practice, and storyteller at heart. I believe in crafting experiences that not only solve real problems but spark joy." 
              className="font-mono text-xl md:text-2xl lg:text-3xl font-normal tracking-wide leading-relaxed"
            />
            <p className="font-mono italic text-gray-400 text-lg">Recently graduated from Boston University</p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-violet-600 text-white rounded-lg font-mono text-sm font-medium hover:bg-violet-700 transition-colors duration-300"
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
                className="inline-flex items-center justify-center px-8 py-3 border border-violet-600 text-violet-600 rounded-lg font-mono text-sm font-medium hover:bg-violet-600 hover:text-white transition-colors duration-300"
              >
                View Work
              </button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Purple tape on top */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-violet-600/50 rounded-none transform -rotate-1 z-20"></div>
              
              <div className="shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg pt-12 pb-8 pl-8 pr-8 bg-white/5 backdrop-blur-sm">
                <div className="w-64 h-80 overflow-hidden shadow-lg">
                  <Image 
                    src="/images/profile.png" 
                    alt="Heather's portrait" 
                    width={256} 
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
                  UX dreamer, matcha sipper,<br />
                  & proud plant parent 🌿✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Featured Projects Section */}
      <section id="projects" className="pt-8 pb-20">
        <div className="container mx-auto px-16 lg:px-32">
          {/* Projects Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cliiimate Project - Temporarily Removed */}
            {/* <div className="shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg p-6 bg-white/5 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="relative my-6">
                  <div className={`relative ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-sm overflow-hidden`}>
                    <Image
                      src="/images/image56.png"
                      alt="Climate App Design"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
                <Link href="/work/climate-app" className="hover:opacity-90 transition-opacity">
                  <div>
                    <div className="mb-3">
                      <h3 className={`text-2xl font-normal font-mono ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Cliimate</h3>
                    </div>
                    <p className="font-mono text-sm mb-4 font-extralight leading-relaxed text-black dark:text-white">
                      Seamless access to personalized weather insights
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Weather API", "Mobile Design", "UI/UX", "User Research", "Prototyping", "Accessibility"].map((tag, index) => {
                        const colors = [
                          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                          "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
                          "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
                          "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
                          "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                        ]
                        return (
                          <span key={tag} className={`font-mono px-3 py-1 rounded-full text-sm ${colors[index % colors.length]}`}>
                            {tag}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </Link>
              </div>
            </div> */}

            {/* Plant Care AI Project */}
            <div className="shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg p-6 bg-white/5 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="relative my-6">
                  <div className={`relative ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-sm overflow-hidden`}>
                    <Image
                      src="/images/image58.png"
                      alt="Plant Care AI Design"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
                <Link href="/work/plant-care" className="hover:opacity-90 transition-opacity">
                  <div>
                    <div className="mb-3">
                      <h3 className={`text-2xl font-normal font-mono ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Plant Care AI</h3>
                    </div>
                    <p className="font-mono text-sm mb-4 font-extralight leading-relaxed text-black dark:text-white">
                   Help urban dwellers nurture healthy indoor plants effortlessly
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["AI Diagnostics", "Plant Care", "Mobile App", "User Research", "UI/UX Design", "Accessibility"].map((tag, index) => {
                        const colors = [
                          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                          "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
                          "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
                          "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
                          "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                        ]
                        return (
                          <span key={tag} className={`font-mono px-3 py-1 rounded-full text-sm ${colors[index % colors.length]}`}>
                            {tag}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
            {projects.filter(p => p.title !== "Hariri Institute Website").map((project, index) => (
              <div key={project.title} className="shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg p-6 bg-white/5 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="relative my-6">
                    <div className={`relative ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-sm overflow-hidden`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                  <Link href={project.href} className="hover:opacity-90 transition-opacity">
                    <div>
                      <div className="mb-3">
                        <h3 className={`text-2xl font-normal font-mono ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
                      </div>
                      <p className="font-mono text-sm mb-4 font-extralight leading-relaxed text-black dark:text-white">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tags.filter(tag => tag !== "All Projects").map((tag, index) => {
                          const colors = [
                            "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                            "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
                            "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
                            "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
                            "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                          ]
                          return (
                            <span key={tag} className={`font-mono px-3 py-1 rounded-full text-sm ${colors[index % colors.length]}`}>
                              {tag}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-20">
            <Link
              href="/projects"
              className="group inline-flex items-center px-12 py-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View All Projects
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex justify-between items-center px-8 py-4 text-xs text-gray-400">
        <span>SANTA CLARA, CALIFORNIA</span>
        <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZoneName: 'short' })}</span>
      </footer>
    </div>
  )
}
