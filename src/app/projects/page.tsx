"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Search, Circle, Square, Triangle } from "lucide-react"

const projectCategories = [
  { id: "all", label: "All Projects", color: "from-pink-400 to-purple-500" },
  { id: "3d", label: "3D Design", color: "from-blue-400 to-cyan-500" },
  { id: "branding", label: "Branding", color: "from-orange-400 to-red-500" },
  { id: "graphic", label: "Graphic Design", color: "from-green-400 to-emerald-500" },
  { id: "product", label: "Product Design", color: "from-purple-400 to-pink-500" },
  { id: "uiux", label: "UI/UX Design", color: "from-indigo-400 to-blue-500" },
  { id: "web", label: "Web Development", color: "from-yellow-400 to-orange-500" },
]

const projects = [
  {
    id: 1,
    title: "Website Redesign for Hariri Institute",
    description: "Complete redesign and development of the institute's web presence.",
    image: "/image15.png?height=400&width=600",
    categories: ["web", "uiux"],
    tags: ["Web Development", "UI/UX Design"],
    color: "from-purple-100 to-pink-100",
  },
  {
    id: 2,
    title: "ALS App Design with Boston Children's Hospital",
    description: "A web application designed to provide resources and support for individuals with ALS.",
    image: "/images/image1.jpg?height=400&width=600",
    categories: ["uiux", "product"],
    tags: ["UI/UX Design", "Product Design"],
    color: "from-blue-100 to-cyan-100",
  },
  {
    id: 3,
    title: "Designing a DEI Consulting Web Application",
    description: "Brand identity design for a line of sustainable, eco-friendly products.",
    image: "/image4.png?height=400&width=600",
    categories: ["graphic", "branding"],
    tags: ["Graphic Design", "Branding"],
    color: "from-green-100 to-emerald-100",
  },
  {
    id: 4,
    title: "Generative AI Task Force Advice Dashboard",
    description: "A dashboard that provides advice to the Generative AI Task Force.",
    image: "/images/image29.png?height=400&width=600",
    categories: ["uiux", "product"],
    tags: ["UI/UX Design", "Product Design"],
    color: "from-purple-100 to-pink-100",
  },
  {
    id: 5,
    title: "Fuse Networking App",
    description: "A tool that simplifies the internship application process and enhances your job search experiences.",
    image: "/images/image37.png?height=400&width=600",
    categories: ["uiux", "branding"],
    tags: ["UI/UX Design", "Branding"],
    color: "from-cyan-100 to-blue-100",
  },
  {
    id: 6,
    title: "Real-Time Cryptocurrency Tracking Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with news integration and price alerts.",
    image: "/image1.png?height=400&width=600",
    categories: ["web", "product"],
    tags: ["Web Development", "Product Design"],
    color: "from-orange-100 to-red-100",
  },
  {
    id: 7,
    title: "Talentora: A Conversational AI Interview Platform",
    description: "Designing a platform that uses AI to evaluate job applicants.",
    image: "/image5.png?height=400&width=600",
    categories: ["uiux", "web", "branding"],
    tags: ["UI/UX Design", "Web Development"],
    color: "from-indigo-100 to-purple-100",
  },
  {
    id: 8,
    title: "Library Database E-Learning Platform",
    description: "Interactive virtual space for students to showcase their reads in an environment.",
    image: "/image14.png?height=400&width=600",
    categories: ["uiux", "product"],
    tags: ["UI/UX Design", "Product Design"],
    color: "from-emerald-100 to-green-100",
  },
  {
    id: 9,
    title: "Healthcare Management Platform",
    description: "Comprehensive healthcare management system for patients and providers.",
    image: "/image3.png?height=400&width=600",
    categories: ["branding", "graphic"],
    tags: ["Branding", "Graphic Design"],
    color: "from-green-100 to-teal-100",
  },
  {
    id: 10,
    title: "12/12 Aventura Rendering",
    description: "Using AutoCAD, 3ds Max, and V-Ray to create a high-quality, photorealistic renderings.",
    image: "/gallery/image1.jpg?height=400&width=600",
    categories: ["3d", "uiux"],
    tags: ["3D Design", "UI/UX Design"],
    color: "from-violet-100 to-purple-100",
  },
  {
    id: 11,
    title: "Chaos & Order: Graphic Design Thesis",
    description: "A collection of my graphic design work from my thesis.",
    image: "/gallery/image36.png?height=400&width=600",
    categories: ["uiux", "product"],
    tags: ["UI/UX Design", "Product Design"],
    color: "from-blue-100 to-indigo-100",
  },
  
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.categories.includes(activeCategory)
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-32 left-16 text-orange-300 opacity-15"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Circle size={80} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-24 text-purple-300 opacity-20"
          animate={{ rotate: -360, y: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Square size={60} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/3 text-pink-300 opacity-25"
          animate={{ rotate: 180, x: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Triangle size={45} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-6">
              PRO
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">JECTS</span>
            </h1>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-8 -left-12 w-6 h-6 bg-orange-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-4 -right-8 w-4 h-4 bg-pink-400 rounded-full opacity-60"
              animate={{ scale: [1.5, 1, 1.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>

          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Designing interfaces that connect, guide, and delight.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : "bg-white text-gray-600 hover:text-black hover:shadow-md border border-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all duration-300 outline-none"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <Link
                href={`/work/${project.id === 1 ? 'hariri-institute' :
                      project.id === 2 ? 'als-app' :
                      project.id === 3 ? 'dei-consulting' :
                      project.id === 4 ? 'ai-task-force' :
                      project.id === 5 ? 'fuse' :
                      project.id === 6 ? 'crypto-dashboard' :
                      project.id === 7 ? 'talentora' :
                      project.id === 8 ? 'library-platform' :
                      project.id === 9 ? 'healthcare-platform' :
                      project.id === 10 ? 'aventura-rendering' :
                      project.id === 11 ? 'chaos-order' : ''}`}
                className="block"
              >
                <div className="relative">
                  <div
                    className={`absolute -inset-3 bg-gradient-to-r ${project.color} rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500`}
                  ></div>
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-4 h-4 text-gray-700" />
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>

                      <div className="inline-flex items-center text-black font-medium group-hover:text-pink-600 transition-colors duration-300">
                        View Project
                        <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
