import { JSX, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
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
  "UI/UX Design": {
    image: "/images/image1.jpg",
    description: "A comprehensive redesign of the user interface and experience for a leading mobile application, focusing on intuitive navigation and enhanced user engagement.",
    href: "/work/als-app"
  },
  "Product Design": {
    image: "/image10.png",
    description: "End-to-end product design process for a new SaaS platform, from initial concept to final implementation, emphasizing user-centered design principles.",
    href: "/work/hariri-institute"
  },
  "Web Development": {
    image: "/image1.png",
    description: "Modern web application development using cutting-edge technologies, delivering responsive and performant solutions for complex business needs.",
    href: "#"
  }
}

export function FeaturedProject({ projects }: FeaturedProjectProps) {
  const projectsList = Object.entries(projectData)

  return (
    <div className="mb-24 -mt-16 container mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Featured Projects
      </h2>
      {/* Projects Section */}
      <div className="max-w-7xl mx-auto rounded-[20px] p-5 relative">
        <div className="grid grid-cols-1 gap-8">
          {projectsList.map(([title, data], index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex gap-8">
                <div className="w-1/2">
                  <img
                    src={data.image}
                    alt={`Featured project: ${title}`}
                    className="rounded-lg h-full w-full object-cover"
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {data.description}
                    </p>
                  </div>
                  <Link href={data.href}>
                    <Button className="w-fit hover:text-black">
                      Read Case Study
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
