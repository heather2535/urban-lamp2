import { JSX, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Anton, Open_Sans, Playfair_Display } from "next/font/google"
import {
  Folder,
  Search,
  Grid,
  Cpu,
  Tag,
  BarChart,
  Palette,
  Layers,
  Code,
  ArrowRight,
} from "lucide-react"
import { ScrollingLogos } from "./scrolling-logos"
import { Button } from "@/components/button"
import Link from "next/link"
import { useTheme } from "next-themes"

interface FeaturedProjectProps {
  projects: {
    title: string
    description: string
    tags: string[]
    imageUrl?: string
  }[]
}

// Add a mapping of tags to their images and descriptions
const projectData: { [key: string]: { image: string; description: string; href: string } } = {
  "ALS App Design with Boston Children's Hospital": {
    image: "/images/image1.jpg",
    description: "A comprehensive redesign of the user interface and experience for a leading mobile application, focusing on intuitive navigation and enhanced user engagement.",
    href: "/work/als-app"
  },
  "DEI Consulting for Tech Companies": {
    image: "/image4.png",
    description: "Strategic DEI consulting services helping tech companies build more inclusive workplaces through data-driven insights and actionable recommendations.",
    href: "/work/dei-consulting"
  },
  "Website Redesign for Hariri Institute": {
    image: "/image10.png",
    description: "End-to-end product design process for a new SaaS platform, from initial concept to final implementation, emphasizing user-centered design principles.",
    href: "/work/hariri-institute"
  },
}

const anton = Anton({ weight: '400', subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export function FeaturedProject({ projects }: FeaturedProjectProps) {
  const projectsList = Object.entries(projectData)
  const { theme } = useTheme()

  return (
    <div className="mb-28 pb-10 container mx-auto max-w-6xl px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-zinc-800 dark:text-white text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-0 ${playfair.className}`}>
          <span className="text-primary">FEATURED</span>
        </h1>
        <h1 className={`text-gray-600 mb-10 dark:text-gray-300 text-base sm:text-lg mb-0 ${playfair.className} uppercase tracking-[0.5em] font-light`}>
          Projects
        </h1>
      </div>
      {/* Projects Section */}
      <div className="max-w-7xl mx-auto rounded-[20px] p-3 sm:p-5 relative">
        <div className="space-y-24">
          {/* ALS Project */}
          {projectsList.slice(0, 1).map(([title, data], index) => (
            <div key={index} className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className={`inline-block px-4 py-2 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-blue-100 text-blue-800"} rounded-full text-sm font-medium mb-4`}>
                    UX/UI Design
                  </span>
                  <h3 className={`text-3xl lg:text-4xl font-bold mb-4 leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {title}
                  </h3>
                  <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-lg leading-relaxed`}>
                    {data.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["User Research", "Prototyping", "Accessibility", "Mobile Design"].map((tag) => (
                    <span key={tag} className={`px-3 py-1 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"} rounded-full text-sm`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={data.href}
                  className={`inline-flex items-center font-medium group ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-900 hover:text-blue-600"} transition-colors duration-300`}
                >
                  Read Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </div>

              <div className="lg:col-span-7">
                <div className="relative group">
                  <div className={`absolute -inset-4 ${theme === "dark" ? "bg-gray-800" : "bg-blue-100"} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500`}></div>
                  <div className={`relative ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl overflow-hidden shadow-xl`}>
                    <img
                      src={data.image}
                      alt={`Featured project: ${title}`}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className={`absolute top-6 right-6 ${theme === "dark" ? "bg-gray-800/90" : "bg-white/90"} backdrop-blur-sm rounded-full p-3`}>
                      <ArrowRight className={`w-5 h-5 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* DEI Consulting Project */}
          {projectsList.slice(1, 2).map(([title, data], index) => (
            <div key={index} className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className={`inline-block px-4 py-2 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-purple-100 text-purple-800"} rounded-full text-sm font-medium mb-4`}>
                    Strategy & Research
                  </span>
                  <h3 className={`text-3xl lg:text-4xl font-bold mb-4 leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {title}
                  </h3>
                  <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-lg leading-relaxed`}>
                    {data.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["Strategy", "Research", "Data Analysis", "Consulting"].map((tag) => (
                    <span key={tag} className={`px-3 py-1 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"} rounded-full text-sm`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={data.href}
                  className={`inline-flex items-center font-medium group ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-900 hover:text-purple-600"} transition-colors duration-300`}
                >
                  Read Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </div>

              <div className="lg:col-span-7">
                <div className="relative group">
                  <div className={`absolute -inset-4 ${theme === "dark" ? "bg-gray-800" : "bg-purple-100"} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500`}></div>
                  <div className={`relative ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl overflow-hidden shadow-xl`}>
                    <img
                      src={data.image}
                      alt={`Featured project: ${title}`}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className={`absolute top-6 right-6 ${theme === "dark" ? "bg-gray-800/90" : "bg-white/90"} backdrop-blur-sm rounded-full p-3`}>
                      <ArrowRight className={`w-5 h-5 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Hariri Institute Project */}
          {projectsList.slice(2, 3).map(([title, data], index) => (
            <div key={index} className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className={`inline-block px-4 py-2 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-orange-100 text-orange-800"} rounded-full text-sm font-medium mb-4`}>
                    Web Design
                  </span>
                  <h3 className={`text-3xl lg:text-4xl font-bold mb-4 leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {title}
                  </h3>
                  <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-lg leading-relaxed`}>
                    {data.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["Web Design", "UI/UX", "Development", "Research"].map((tag) => (
                    <span key={tag} className={`px-3 py-1 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"} rounded-full text-sm`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={data.href}
                  className={`inline-flex items-center font-medium group ${theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-900 hover:text-orange-600"} transition-colors duration-300`}
                >
                  Read Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </div>

              <div className="lg:col-span-7">
                <div className="relative group">
                  <div className={`absolute -inset-4 ${theme === "dark" ? "bg-gray-800" : "bg-orange-100"} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500`}></div>
                  <div className={`relative ${theme === "dark" ? "bg-gray-900" : "bg-white"} rounded-2xl overflow-hidden shadow-xl`}>
                    <img
                      src={data.image}
                      alt={`Featured project: ${title}`}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className={`absolute top-6 right-6 ${theme === "dark" ? "bg-gray-800/90" : "bg-white/90"} backdrop-blur-sm rounded-full p-3`}>
                      <ArrowRight className={`w-5 h-5 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
