"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package, ArrowLeft, ArrowUpRight, Circle, Square, Triangle, ExternalLink, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

const project = {
  title: "Hariri Institute",
  description: "A comprehensive redesign of the Hariri Institute's digital presence, focusing on improved user experience, content organization, and visual identity that reflects their position as a leader in computational research.",
  date: "September 3, 2024",
  image: "/images/image55.png",
  tags: ["Web Development", "UX Research", "Information Architecture", "CMS", "Design System", "Accessibility", "User Research", "Prototyping"],
  role: "Design Strategist, UX Researcher, UI/UX",
  team: ["Heather Davies", "Brian Zeng", "Avdeep Kaur", "Minyang Li"],
  duration: "Sep. 2024 - Dec. 2024 (4 mo. total)",
  goal: "The primary goal was to modernize and simplify the Hariri Institute website while aligning with Boston University's Office of Research visual standards. We aimed to improve user experience for both internal and external audiences while ensuring the site could be easily maintained by non-technical staff.",
  solution: "We developed a modern, accessible website that balances institutional branding with Hariri's interdisciplinary identity. The solution features a clean design system with reusable components, improved content discoverability, and a streamlined CMS for easy content management.",
  prototypeUrl: "https://www.bu.edu/hic/",
  overview: "To redesign and redevelop the website for the Boston University Hariri Institute an organization comprised of BU faculty and graduate students across disciplines to study and design intelligent systems. Hariri Institute researchers develop solutions in the areas of Automation, Robotics & Control, Computational Biology & Medicine, Cyber-Physical Systems, Data Analytics, Energy Systems, Information Sources, and Networks.",
  goals: [
    "Develop a holistic architecture and modern UX experience that showcases the Hariri Institute's mission, research, collaborations, news, events, and faculty profiles.",
    "Develop a new Events Calendar that better showcases important events, enables event categorization, and provides for a more streamlined editing process.",
    "Highlight and promote Hariri Institute's interdisciplinary research, collaboration, and events such as the Tsai Seminars that bring exposure from outside BU.",
    "Create a visual design for the website that focuses on engagement and education and is more in-line stylistically with the institute's new branding identity.",
    "Create landing page and other specialty page designs that automate the display of cross-promotional content."
  ],
  process: {
    research: [
      "Conducted a full audit of the existing site to identify UX bottlenecks.",
      "Held stakeholder interviews with the Communications Manager, Director of Operations, and faculty to understand communication priorities.",
      "Mapped current pain points: difficulty navigating archived content, manual updates, and low visibility of research."
    ],
    ux: [
      "Developed new site architecture and user flows prioritizing simplicity and clarity.",
      "Created personas for key audiences (faculty, students, donors, external partners).",
      "Conducted informal usability testing using click-through Figma prototypes to validate navigation patterns and hierarchy."
    ],
    design: [
      "Created low-to-high fidelity prototypes in Figma.",
      "Designed reusable components (expandable bios, research highlights, event cards, FAQ accordions).",
      "Focused on mobile responsiveness and accessibility from the outset.",
      "Designed scalable, modular components to support various content types and future growth."
    ],
    visual: [
      "Used BU's Office of Research theme as a foundation.",
      "Introduced visual patterns unique to Hariri (custom hero modules, grid layouts, dynamic galleries).",
      "Balanced institutional branding with Hariri's interdisciplinary identity."
    ]
  },
  results: [
    "Successfully launched a redesigned, responsive website with improved UX and content discoverability.",
    "Internal teams now have tools to maintain up-to-date, relevant content with ease.",
    "External users can explore Hariri's projects, events, and people more intuitively.",
    "The design reflects Hariri's leadership in computational research while remaining accessible to a general audience."
  ],
  tools: [
    { name: "Figma", description: "Design and prototyping" },
    { name: "Miro", description: "Site mapping and user journey diagrams" },
    { name: "Zoom & Google Meet", description: "Stakeholder interviews and feedback sessions" },
    { name: "Google Drive", description: "Collaborative documentation and UI handoff" },
    { name: "Boston University CMS", description: "Implementation with developer guidance" }
  ],
  additionalImages: ["/images/image8.png", "/images/image9.png", "/images/image10.png"],
  architectureImage: "/image12.png"
}

export default function HaririInstitutePage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const allTags = Array.from(new Set(project.tags))

  const filteredProjects = project.tags.filter((tag) => {
    const matchesTag = selectedTag ? tag === selectedTag : true
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTag && matchesSearch
  })

  return (
    <div className="min-h-screen bg-transparent">
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

      <main className="relative">
        <article className="prose lg:prose-xl dark:prose-invert">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-32 left-8 z-20"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/10 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-900/20 dark:hover:bg-white/20 transition-colors duration-300"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Text Content */}
            <motion.div
              className="relative z-10 pt-60 pb-20 w-screen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="px-16">
                <div className="max-w-7xl mx-auto space-y-8">
                  <motion.h1
                    className={`${playfair.className} text-3xl md:text-5xl font-normal tracking-wide`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="text-gray-900 dark:text-white">
                      {project.title}
                    </span>
                  </motion.h1>

                  <motion.p
                    className={`${playfair.className} text-3xl md:text-5xl max-w-2xl font-normal leading-relaxed text-gray-800 dark:text-white/90`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-3 text-gray-800 dark:text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <span className="text-sm font-medium">{project.date}</span>
                  </motion.div>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap justify-end gap-2 max-w-xl ml-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    {filteredProjects.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-900/10 dark:bg-white/20 backdrop-blur-md text-gray-900 dark:text-white rounded-full text-xs font-extralight hover:bg-gray-900/20 dark:hover:bg-white/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative w-full h-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-3xl"
                priority
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
            </motion.div>
          </motion.div>

          {/* Scroll to Explore */}
          <motion.div
            className="flex flex-col items-center justify-center gap-2 text-gray-500 mt-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronRight className="w-4 h-4 rotate-90" />
          </motion.div>

          {/* Project Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Title */}
              <div className="md:col-span-4">
                <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white`}>Project Details</h3>
              </div>

              {/* Labels */}
              <div className="md:col-span-4 space-y-8">
                <div>
                  <h3 className="text-sm font-extralight uppercase tracking-wide text-gray-400">DURATION</h3>
                </div>
                <div>
                  <h3 className="text-sm font-extralight uppercase tracking-wide text-gray-400">ROLE</h3>
                </div>
                <div>
                  <h3 className="text-sm font-extralight uppercase tracking-wide text-gray-400">TEAM</h3>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-4 space-y-8">
                <div>
                  <p className="text-sm font-extralight text-gray-400">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm font-extralight text-gray-400">{project.role}</p>
                </div>
                <div>
                  {project.team.map((member) => (
                    <p key={member} className="text-sm font-extralight text-gray-400">
                      {member}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>Project Overview</h3>
                <p className="text-md font-extralight leading-relaxed text-gray-400 mb-8">
                  {project.overview}
                </p>
                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">Goals:</h4>
                  <ul className="space-y-4">
                    {project.goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>Process</h3>
                
                {/* Research & Discovery */}
                <div className="mb-12">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">1. Research & Discovery</h4>
                  <ul className="space-y-4">
                    {project.process.research.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* UX & Information Architecture */}
                <div className="mb-12">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">2. UX & Information Architecture</h4>
                  <ul className="space-y-4">
                    {project.process.ux.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Design System & Prototyping */}
                <div className="mb-12">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">3. Design System & Prototyping</h4>
                  <ul className="space-y-4">
                    {project.process.design.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Identity & Customization */}
                <div className="mb-12">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">4. Visual Identity & Customization</h4>
                  <ul className="space-y-4">
                    {project.process.visual.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Design System Images */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {project.additionalImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={image}
                          alt={`Design System Concept ${index + 1}`}
                          width={300}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results & Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Results */}
              <div className="md:col-span-6">
                <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>Results</h3>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-400">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="md:col-span-6">
                <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>Tools Used</h3>
                <div className="space-y-6">
                  {project.tools.map((tool, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">{tool.name}</h4>
                      <p className="text-sm text-gray-400">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Working Prototype Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 text-center"
          >
            <Link
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Working Prototype
            </Link>
          </motion.div>
        </article>
      </main>
    </div>
  )
}
