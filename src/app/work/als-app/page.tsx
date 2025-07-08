"use client";
import { useState } from "react"
import Navigation from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package, ArrowLeft, ArrowUpRight, Circle, Square, Triangle, ExternalLink, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'
import { ProjectNavigation } from "@/components/project-navigation"
import ProjectVerticalNavigation from "@/components/project-vertical-navigation"

const playfair = Playfair_Display({ subsets: ['latin'] })

const project = {
  title: "Offering personalized treatment and support for individuals with ALS. ",
  description: "ALS App Design with ngBoston Children's Hospital",
  date: "In collaboration with Boston Children's Hospital",
  image: "/images/image1.jpg",
  tags: ["All Projects", "UI/UX Design", "Product Design", "Healthcare", "User Research", "Accessibility"],
  role: "Design Strategist, UX Researcher, UI/UX",
  team: ["Heather Davies", "Brian Zeng", "Avdeep Kaur", "Minyang Li"],
  duration: "Sep. 2024 - Dec. 2024 (4 mo. total)",
  goal: "The primary goal was to create a user-friendly platform that helps ALS patients and their caregivers navigate the complex landscape of treatment options. We aimed to bridge the gap between available clinical opportunities and patient awareness, ensuring that users could easily find and understand relevant resources based on their specific needs and circumstances.",
  solution: "We developed an intuitive web application that uses a guided, question-based interface to recommend personalized resources. The solution features a clean, accessible design that accommodates both patients and generalist clinicians, with a scalable backend that allows for easy updates to treatment information and clinical pathways.",
  prototypeUrl: "https://se-bch-als-resource-app-y3wu-pmgqv0yae-cs519team.vercel.app/bookmarks/default",
  overview: "People with ALS (Amyotrophic Lateral Sclerosis) face a fragmented landscape of treatment options. While numerous clinical opportunities exist, most patients are presented with only a limited selection. This web application aims to bridge that gap by providing a guided platform that recommends resources based on user input—empowering patients and non-specialist clinicians to collaboratively explore the most relevant and up-to-date ALS treatments.",
  goals: [
    "Support Collaborative Decision-Making: Create a tool that facilitates conversations between patients and clinicians around available treatment paths.",
    "Deliver Personalized Information: Recommend resources tailored to the patient's stage, symptoms, and needs.",
    "Ensure Accessibility and Ease of Use: Design an intuitive experience that accommodates both patients and generalist clinicians.",
    "Enable Sustainable Content Updates: Equip admins and clinic staff with a scalable backend for managing the latest resources and questions."
  ],
  process: {
    research: [
      "Patients are overwhelmed by the volume and complexity of treatment information.",
      "Clinicians need a streamlined way to stay current with ALS developments.",
      "Both groups desire a system that is intuitive and light on cognitive load.",
      "Personalization and clarity are essential to build trust and usability."
    ],
    personas: [
      "A patient navigating treatment stages",
      "A generalist clinician unfamiliar with ALS-specific options",
      "An admin updating resources"
    ],
    architecture: "I created a guided, question-based interface that mimics a 'choose-your-own-path' conversation. User inputs dynamically steer the experience, reducing information overload and surfacing relevant recommendations in real time.",
    prototyping: [
      "Built low-to-high fidelity prototypes that translated complex clinical decision trees into clean, usable flows.",
      "Prototypes were iteratively tested to ensure they scaled as more branches and content were introduced.",
      "I used tools like Figma and Typeform to simulate branching logic, with a future transition to a React-based system in mind."
    ],
    interaction: [
      "A responsive hamburger menu for simple navigation",
      "Bookmark features using localStorage so users can save resources without creating an account",
      "Visual consistency for clear affordance and reduced friction",
      "Planned future compatibility with frameworks like ReactFlow for more robust logic management."
    ],
    scalability: "Knowing the project would eventually outgrow Typeform, I designed the interface with modularity and future extensibility in mind—supporting multimedia content, deeper branching logic, and dynamic routing."
  },
  results: [
    "Delivered a prototype-ready, scalable interface tailored to ALS patients and generalist clinicians.",
    "Created a structure that supports ongoing clinical updates and collaborative patient-clinician discussions.",
    "Implemented progress-saving features to reduce barriers to access, especially for first-time users."
  ],
  tools: [
    { name: "Figma", description: "Interface design & prototyping" },
    { name: "Typeform", description: "Early logic simulation" },
    { name: "Next.js", description: "Front-end framework (planned for dynamic routing)" },
    { name: "ReactFlow", description: "Future tool for custom question logic" },
    { name: "localStorage API", description: "Bookmarking and progress saving without account creation" }
  ],
  nextSteps: [
    {
      title: "Custom Logic Builder for Admins",
      description: "Replace Typeform with a visual editor that allows non-technical users to create and update logic flows easily."
    },
    {
      title: "Dynamic Routing for Personalization",
      description: "Use Next.js dynamic routes (e.g., [id].tsx) to generate personalized URLs that improve continuity across sessions and devices."
    }
  ]
}

export default function ProjectDetailPage() {
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

      {/* Project Vertical Navigation */}
      <ProjectVerticalNavigation />

      <main className="relative lg:ml-64">
        <article className="prose lg:prose-xl dark:prose-invert">
          {/* Back Button */}
         

          {/* Hero Section */}
          <motion.div
            id="hero"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full scroll-mt-32"
          >
            {/* Text Content */}
            <motion.div
              className="relative z-10 pt-40 pb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="px-16 pr-32">
                <div className="max-w-7xl mx-auto space-y-4">
                  <motion.h1
                    className="font-mono text-3xl md:text-5xl font-normal tracking-wide leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="text-gray-900 dark:text-white">
                      {project.title}
                    </span>
                  </motion.h1>

                  <motion.div
                    className="flex items-center gap-3 text-gray-800 dark:text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <span className="text-lg font-extralight">{project.date}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative w-full pl-16 pr-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover rounded-3xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Project Details Section */}
          <motion.div
            id="project-details"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-16 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Role */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">role</h3>
                <p className="text-sm font-extralight text-gray-400">{project.role}</p>
              </div>

              {/* Team */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">team</h3>
                {project.team.map((member) => (
                  <p key={member} className="text-sm font-extralight text-gray-400">
                    {member}
                  </p>
                ))}
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">tools</h3>
                {project.tools.map((tool) => (
                  <p key={tool.name} className="text-sm font-extralight text-gray-400">
                    {tool.name}
                  </p>
                ))}
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">skills</h3>
                {project.tags.filter(tag => tag !== "All Projects").map((tag) => (
                  <p key={tag} className="text-sm font-extralight text-gray-400">
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scroll to Explore */}

          {/* Project Overview Section */}
          <motion.div
            id="problem"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 scroll-mt-32"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8">Problem</h3>
                <p className="text-md font-extralight leading-relaxed text-gray-400 mb-8">
                  {project.overview}
                </p>
                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">Goals:</h4>
                  <ul className="space-y-4">
                    {project.goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400 font-extralight">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research Section */}
          <motion.div
            id="research"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 scroll-mt-32"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8">Research</h3>
                <p className="text-md font-extralight leading-relaxed text-gray-400 mb-8">
                  Understanding the needs and challenges of ALS patients and their caregivers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Competitive Analysis Section */}
          <motion.div
            id="competitive-analysis"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 scroll-mt-32"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8">Competitive Analysis</h3>
                <p className="text-md font-extralight leading-relaxed text-gray-400 mb-8">
                  Analyzing existing solutions and identifying opportunities for improvement.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sketching Section */}
          <motion.div
            id="sketching"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 scroll-mt-32"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8">Sketching</h3>
                <p className="text-md font-extralight leading-relaxed text-gray-400 mb-8">
                  Initial ideation and concept development through hand-drawn sketches.
                </p>
              </div>
            </div>
          </motion.div>

          {/* LoFi Wireframing Section */}
          <motion.div
            id="lofi-wireframing"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 scroll-mt-32"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8">LoFi Wireframing</h3>
                <p className="text-md font-extralight leading-relaxed text-gray-400 mb-8">
                  Creating low-fidelity wireframes to establish information architecture and user flows.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Refining & Prototyping Section */}
          <motion.div
            id="refining-prototyping"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 scroll-mt-32"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8">Refining & Prototyping</h3>
                <p className="text-md font-extralight leading-relaxed text-gray-400 mb-8">
                  Iterative refinement and high-fidelity prototyping based on user feedback.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Reflections Section */}
          <motion.div
            id="reflections"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 scroll-mt-32"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8">Reflections</h3>
                <p className="text-md font-extralight leading-relaxed text-gray-400 mb-8">
                  Key learnings and insights from the design process.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Results & Tools Section */}
          <motion.div
            id="features"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 scroll-mt-32"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Results */}
              <div className="md:col-span-6">
                <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8">Results</h3>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-400 font-extralight">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="md:col-span-6">
                <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8">Tools Used</h3>
                <div className="space-y-6">
                  {project.tools.map((tool, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">{tool.name}</h4>
                      <p className="text-sm text-gray-400 font-extralight">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Steps Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8">Recommended Next Steps</h3>
                <div className="space-y-8">
                  {project.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-medium flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{step.title}</h4>
                        <p className="text-gray-400 font-extralight">{step.description}</p>
                      </div>
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

      {/* Project Navigation */}
      <ProjectNavigation currentProjectHref="/work/als-app" />
    </div>
  )
}

