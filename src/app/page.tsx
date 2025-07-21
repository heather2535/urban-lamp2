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
const TypingAnimation = ({ text, subText, className, subTextClassName }: { text: string; subText?: string; className: string; subTextClassName?: string }) => {
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
            <div className="absolute -bottom-1 left-0 w-full  bg-orange-500/60 rounded-sm transform -rotate-1 z-0"></div>
            <span className="relative z-10 text-gray-900">{word}</span>
            {index < words.length - 1 ? ' ' : ''}
          </span>
        )
      }
      return <span key={index} className="text-gray-900">{word + (index < words.length - 1 ? ' ' : '')}</span>
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
          <p className={`font-mono italic text-gray-400 text-sm sm:text-base ${subTextClassName}`}>
            {displaySubText}
            {subTextIndex < (subText?.length || 0) && <span className="animate-pulse">|</span>}
          </p>
        </div>
      )}
    </div>
  )
}

export default function Portfolio() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Vertical Navigation */}
      <VerticalNavigation />

      {/* Hero Section */}
      <main id="hero" className="w-full max-w-6xl mx-auto min-h-[75vh] flex items-center justify-center px-8 py-8 sm:py-20">
        <div className="w-full max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-start">
          {/* Title/text: full width on mobile, 2/3 width on md+ */}
          <div className="order-2 md:order-1 space-y-4 sm:space-y-6">
            <div className="min-h-[7.5rem] sm:min-h-[9rem] md:min-h-[11rem] lg:min-h-[13rem] flex flex-col justify-start">
              <TypingAnimation 
                text="Hi! I'm Heather. I'm a designer by instinct, builder by practice, and storyteller at heart. I believe in crafting experiences that not only solve real problems but spark joy." 
                subText="Recently graduated from Boston University"
                className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide leading-relaxed text-left mb-2 text-gray-900"
                subTextClassName="font-mono text-xs sm:text-sm text-gray-900 mt-4"
              />
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row pt-24 gap-4">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 sm:px-16 py-3 border border-orange-500 text-orange-500 rounded-lg font-mono text-sm font-medium hover:outline hover:outline-2 hover:outline-orange-500 transition-all "
              >
                Resumé
              </Link>
              <button
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
                className="inline-flex items-center justify-center px-12 sm:px-12 py-3 bg-orange-500 text-white rounded-lg font-mono text-sm font-medium hover:bg-orange-600 transition-colors duration-300"
              >
                View Work <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          {/* Image: full width on mobile, 1/3 width on md+ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-1 md:order-2 flex justify-center md:justify-end w-full md:w-auto"
          >
            <div className="relative">
              {/* Orange Rectangle Divider */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-orange-400 rounded-none z-20 opacity-50"></div>
              <div className="shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg pt-10 sm:pt-14 pb-8 sm:pb-10 pl-2 sm:pl-4 pr-2 sm:pr-4 bg-white/5 backdrop-blur-sm flex flex-col items-center">
                <div className="w-48 sm:w-64 h-48 sm:h-64 overflow-hidden shadow-lg flex justify-center items-center">
                  <Image 
                    src="/images/profile.png" 
                    alt="Heather's portrait" 
                    width={256} 
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-mono text-md sm:text-md text-gray-600 mt-3 sm:mt-4 text-center">
                Venice, matcha, tabs,  —<br />
                creative vibes 🍵 
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

    

      {/* Featured Projects Section */}
      <section id="projects" className="w-full max-w-6xl mx-auto px-4 sm:px-8 pb-20 scroll-mt-24">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 sm:gap-12">
            {projects.filter(p => 
              p.title !== "Hariri Institute Website" && 
              p.href !== "/work/healthcare-platform" &&
              p.href !== "/work/chaosthesis" &&
              p.href !== "/work/marketing-campaign"
            ).slice(0, 4).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 * index }}
              >
                <Link href={project.href} className="hover:opacity-90 transition-opacity">
                  <div className="shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg p-4 sm:p-6 bg-white/5 backdrop-blur-sm hover:rotate-2 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out">
                    {/* Orange Rectangle Divider */}
                    <div className="-mt-10 w-48 h-8 bg-orange-400 rounded-none mx-auto z-20 opacity-50"></div>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="relative my-4 sm:my-6">
                        <div className="relative bg-white rounded-none overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={300}
                            className={`w-full h-48 sm:h-64 object-cover transition-transform duration-500 ${
                              project.title === "Talentora" ? "object-top" : ""
                            }`}
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
                        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
