"use client";
import { useState } from "react"
import Navigation from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package, ArrowLeft, ArrowUpRight, Circle, Square, Triangle, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

// Define tagIcons with explicit typing for keys
const tagIcons: Record<string, React.ReactElement> = {
  "All Projects": <Folder className="h-3 w-3" />,
  "3D Design": <Grid className="h-3 w-3" />,
  "AI Integration": <Cpu className="h-3 w-3" />,
  "Branding": <Tag className="h-3 w-3" />,
  "Data Vis": <BarChart className="h-3 w-3" />,
  "Graphic Design": <Palette className="h-3 w-3" />,
  "UI/UX": <Layers className="h-3 w-3" />,
  "UI/UX Design": <Layout className="h-3 w-3" />,
  "Product Design": <Package className="h-3 w-3" />,
  "Web Development": <Code className="h-3 w-3" />,
  "Crypto": <Cpu className="h-3 w-3" />,
  "Finance": <BarChart className="h-3 w-3" />,
}

const project = {
    title: "Patient Healthcare Management Platform",
    description: "Comprehensive healthcare management system for patients and providers.",
    date: "April 22, 2024",
    video: "/video3.mov?height=450&width=800", 
    content: `
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Project Overview</h2>
      <p>The inspiration behind HealthSync was to bridge the gap between healthcare and technology. We aimed to create a platform that seamlessly connects users and hospitals, providing efficient healthcare solutions. This project was fueled by the desire to address real-time healthcare challenges using cutting-edge technology.</p>
      
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">What It Does</h2>
      <p>HealthSync is a comprehensive healthcare application designed to serve both users and hospitals. Users can access personalized dashboards to manage their health information, book appointments, and stay connected with healthcare providers. Hospitals, on the other hand, benefit from a dedicated dashboard that streamlines patient management, appointment scheduling, and overall health.</p>

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">How It Is Built</h2>
      <p>HealthSync was built using a stack of modern technologies. The front end is powered by React and Next.js, providing a robust user interface. To manage state and data, we adopted Redux and Redux Toolkit, which was a significant learning experience as it was the first time we used them for a large-scale project. On the backend, we developed a Node.js server that utilizes Express to handle API requests. The core of the application's data management is handled by a combination of Axios for HTTP requests and Redux Toolkit Query for efficient data fetching and management. During the development process, we encountered a few challenges, including initial setup hurdles with RTK Query and Next.js. However, we persevered, learned valuable lessons, and overcame these obstacles.
      
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Challenges Ran Into</h2>
      <p>We faced some initial challenges, particularly in configuring and integrating Redux Toolkit Query (RTK Query) with Next.js. The learning curve for this powerful tool was steep, but through perseverance and dedicated problem-solving, we successfully implemented RTK Query into our project. Additionally, handling real-time data and state management in a healthcare context presented unique challenges, which we tackled by enhancing our understanding of Redux and RTK Query.</p>
  
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Accomplishments</h2>
      <p>One of the most notable accomplishments is mastering Redux and Redux Toolkit for a significant project. This was the first time we utilized these technologies extensively, and the resulting efficient state management was a major achievement. Furthermore, we integrated a health assistant model based on GPT models into the application, offering personalized healthcare advice and information to users. This was a groundbreaking step for us, marking our first venture into this innovative field.</p>
      

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Insights Gained </h2>
      <p>Throughout the development of HealthSync, we learned invaluable lessons. Our proficiency in Redux and RTK Query improved significantly, allowing us to efficiently manage and synchronize application data. Additionally, we expanded our skills by integrating GPT-based health assistant features, opening up new opportunities in the healthcare technology sector.
        Incorporating Next.js into our development stack also broadened our knowledge and empowered us to build a large-scale application with improved performance and SEO capabilities. We are proud of the expertise we gained and look forward to applying these skills in future projects.

        This write-up encapsulates the journey of Caresync, highlighting the challenges we faced, the accomplishments we achieved, and the knowledge we acquired throughout the development process. We are excited to present this innovative healthcare solution and share our experiences with the world.</p>
            
      <br></br>
      
    `,
    tags: ["Web Development"],
  }
  

export default function HealthcarePlatformPage() {
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

      <Navigation />
      <main className="container mx-auto px-6 lg:px-8 relative z-10">
        <article className="prose lg:prose-xl dark:prose-invert">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 mb-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero Section - Two Column Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-5 gap-16 items-start mt-10 mb-16"
          >
            {/* Right Column - Video */}
            <motion.div
              className="md:col-span-3 relative order-first md:order-last"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative max-w-[640px] mx-auto mt-8 md:mt-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
                  <video 
                    controls 
                    width="100%" 
                    height="auto" 
                    className="object-cover rounded-lg"
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>

            {/* Left Column - Text Content */}
            <motion.div
              className="md:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-5xl lg:text-7xl font-black tracking-tight leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Patient</span>{" "}
                <span className="text-black">Healthcare Management Platform</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex items-center gap-3 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-sm">{project.date}</span>
              </motion.div>

              {/* Tags */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {filteredProjects.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
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

          {/* Three Columns Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Role</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Design Strategist, UX</p>
                  <p className="text-gray-600">Researcher, UI/UX</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Team</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Heather Davies</p>
                  <p className="text-gray-600">Solo Project</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Duration</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">April 2024</p>
                  <p className="text-gray-600">1 month</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-gray-300 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <Link
              href="/work/virtual-gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Next Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}
