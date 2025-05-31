import { JSX, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Anton, Open_Sans } from "next/font/google"
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
  "Website Redesign for Hariri Institute": {
    image: "/image10.png",
    description: "End-to-end product design process for a new SaaS platform, from initial concept to final implementation, emphasizing user-centered design principles.",
    href: "/work/hariri-institute"
  },
  "Real-Time Cryptocurrency Tracking Dashboard": {
    image: "/image1.png",
    description: "Modern web application development using cutting-edge technologies, delivering responsive and performant solutions for complex business needs.",
    href: "/work/crypto-dashboard"
  }
}

const anton = Anton({ weight: '400', subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

export function FeaturedProject({ projects }: FeaturedProjectProps) {
  const projectsList = Object.entries(projectData)

  return (
    <div className="mb-28 pb-10 container mx-auto max-w-6xl px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-zinc-800 dark:text-white text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-0 ${anton.className}`}>
          <span className="text-primary">FEATURED</span>
        </h1>
        <h1 className={`text-gray-600 mb-10 dark:text-gray-300 text-base sm:text-lg mb-0 ${openSans.className} uppercase tracking-[0.5em] font-light`}>
          Projects
        </h1>
      </div>
      {/* Projects Section */}
      <div className="max-w-7xl mx-auto rounded-[20px] p-3 sm:p-5 relative">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {projectsList.map(([title, data], index) => (
            <div key={index} className="bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:to-[#1a2a3a] rounded-xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="w-full sm:w-1/2">
                  <img
                    src={data.image}
                    alt={`Featured project: ${title}`}
                    className="rounded-lg h-[200px] sm:h-full w-full object-cover"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-md sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                      {title}
                    </h3>
                    <h3 className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                      {data.description}
                    </h3>
                  </div>
                  <Link href={data.href}>
                    <Button className="w-full sm:w-fit hover:text-black">
                      <h3>Read Case Study</h3>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
