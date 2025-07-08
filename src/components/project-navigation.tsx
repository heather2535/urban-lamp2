"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"

interface ProjectNavigationProps {
  currentProjectHref: string
}

export function ProjectNavigation({ currentProjectHref }: ProjectNavigationProps) {
  // Find current project index
  const currentIndex = projects.findIndex(project => project.href === currentProjectHref)
  
  // If current project is not found in the array, don't show navigation
  if (currentIndex === -1) {
    return null
  }
  
  // Get next project (cycle back to first if at end)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  
  // Get previous project (cycle to last if at beginning)
  const prevProject = projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="border-t border-gray-200 bg-white py-12 px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          {/* Project Navigation */}
          <div className="flex items-center gap-4">
            {/* Previous Project */}
            <Link
              href={prevProject.href}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <div className="text-right">
                <div className="text-xs text-gray-500">Previous</div>
                <div className="text-sm font-medium">{prevProject.title}</div>
              </div>
            </Link>

            {/* Next Project */}
            <Link
              href={nextProject.href}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors duration-300"
            >
              <div className="text-left">
                <div className="text-xs text-orange-200">Next</div>
                <div className="text-sm font-medium">{nextProject.title}</div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 