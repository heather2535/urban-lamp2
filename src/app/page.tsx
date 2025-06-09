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
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700 mx-auto mb-12 shadow-lg">
          <Image src="/images/profile.png" alt="Heather's portrait" width={128} height={128} />
        </div>
        <h1 className={`${playfair.className} text-5xl md:text-7xl font-normal mb-8 tracking-wide`}>Heather Davies</h1>
        <p className="text-lg max-w-2xl mx-auto mb-4 font-extralight leading-relaxed text-gray-400">
          Product Designer with a strong foundation in human-centered design. Experienced in leading research studies and leveraging both qualitative and quantitative methods to generate actionable insights. Skilled at translating research findings into product strategies that enhance quality, usability, and simplicity across design solutions.
        </p>
        <p className="italic text-gray-400 mb-4">Recently graduated from Boston University</p>
      </main>

      {/* Featured Projects Section */}
      <section id="projects" className={`py-20 ${theme === "dark" ? "bg-[#18181b]" : "bg-white"}`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Layers className="w-8 h-8 text-primary" />
            </div>
            <h1 className={`text-zinc-800 dark:text-white text-5xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-0 ${playfair.className}`}>
              <span className="text-primary">Projects.</span>
            </h1>
          </div>
          {/* Projects Grid */}
          <div className="space-y-24 md:space-y-32 lg:space-y-24">
            {/* Cliiimate Project */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <Link href="/work/climate-app" className="lg:col-span-5 space-y-6 hover:opacity-90 transition-opacity">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Cloud className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className={`text-4xl font-normal ${theme === "dark" ? "text-white" : "text-gray-900"} ${playfair.className}`}>Cliimate</h3>
                  </div>
                  <p className="text-md max-w-2xl mx-auto mb-4 font-extralight leading-relaxed text-gray-400">
                    Provides users with seamless access to accurate, personalized weather insights across multiple locations, including a detailed 5-day forecast.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Weather API", "Mobile Design", "UI/UX", "User Research", "Prototyping", "Accessibility"].map((tag) => (
                      <span key={tag} className={`px-3 py-1 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"} rounded-full text-sm`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              <div className="lg:col-span-7">
                <div className="relative">
                  <div className={`relative ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-sm overflow-hidden shadow-xl`}>
                    <Image
                      src="/images/image56.png"
                      alt="Climate App Design"
                      width={700}
                      height={500}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Plant Care AI Project */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <Link href="/work/plant-care" className="lg:col-span-5 space-y-6 hover:opacity-90 transition-opacity">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Cloud className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className={`text-4xl font-normal ${theme === "dark" ? "text-white" : "text-gray-900"} ${playfair.className}`}>Plant Care AI</h3>
                  </div>
                  <p className="text-md max-w-2xl mx-auto mb-4 font-extralight leading-relaxed text-gray-400">
                  A platform designed to help urban dwellers nurture healthy indoor plants effortlessly. By leveraging AI-driven plant health diagnostics and empowers users to keep their green companions thriving.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["AI Diagnostics", "Plant Care", "Mobile App", "User Research", "UI/UX Design", "Accessibility"].map((tag) => (
                      <span key={tag} className={`px-3 py-1 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"} rounded-full text-sm`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              <div className="lg:col-span-7">
                <div className="relative">
                  <div className={`relative ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-sm overflow-hidden shadow-xl`}>
                    <Image
                      src="/images/image58.png"
                      alt="Climate App Design"
                      width={700}
                      height={500}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
            

            {projects.map((project, index) => (
              <div key={project.title} className="grid lg:grid-cols-12 gap-12 items-center">
                <Link href={project.href} className="lg:col-span-5 space-y-6 hover:opacity-90 transition-opacity">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <Cloud className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className={`text-4xl font-normal ${theme === "dark" ? "text-white" : "text-gray-900"} ${playfair.className}`}>{project.title}</h3>
                    </div>
                    <p className="text-md max-w-2xl mx-auto mb-4 font-extralight leading-relaxed text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.filter(tag => tag !== "All Projects").map((tag) => (
                        <span key={tag} className={`px-3 py-1 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"} rounded-full text-sm`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>

                <div className="lg:col-span-7">
                  <div className="relative">
                    <div className={`relative ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-sm overflow-hidden shadow-xl`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={700}
                        height={500}
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
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
