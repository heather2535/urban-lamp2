"use client";
import { useState } from "react"
import Navigation from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package, ArrowLeft, ArrowUpRight, Circle, Square, Triangle, ExternalLink, ChevronRight } from "lucide-react"
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
    title: "Designing a DEI Consulting Web Application",
    description: "Brand identity design for a line of sustainable, eco-friendly products.",
    date: "March 15, 2024",
    video: "/video4.mov?height=450&width=800", 
    content: ``,
    tags: ["Graphic Design", "Branding"],
  }
  

export default function CryptoDashboardPage() {
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
            className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center mt-10 mb-16"
          >
            {/* Right Column - Video */}
            <motion.div
              className="md:col-span-3 relative order-first md:order-last"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative max-w-[640px] mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
                  <video 
                    controls 
                    width="100%" 
                    height="auto" 
                    className="object-cover rounded-lg"
                    poster="/image4.png"
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
                Designing a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">DEI</span> Consulting Web Application
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
                  <p className="text-gray-600">Ruby Chen</p>
                  <p className="text-gray-600">Avdeep Kaur</p>
                  <p className="text-gray-600">David Lee</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Duration</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Sept. 09 '24 - Feb. 30 '25</p>
                  <p className="text-gray-600">6 months total</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Problem Statement and Goal Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Problem Statement</h3>
                <p className="text-gray-700 leading-relaxed">
                  A comprehensive web application designed to facilitate DEI consulting services, enabling organizations to create more inclusive and equitable workplaces. The platform combines user-friendly interfaces with powerful tools for assessment, training, and progress tracking.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Goal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Through extensive research and user testing, we developed a solution that addresses the unique needs of both consultants and organizations, making DEI initiatives more accessible and effective.
                </p>
              </div>
            </div>
          </motion.div>

          {/* User Archetypes Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <h3 className="text-2xl font-bold mb-4">User Archetypes</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              The people using this platform as discussed in previous meetings fall into three archtypes and we are trying to tailor the website to help people from all these different archetypes, like activists, and say intellectuals who want to join discussions and businesses who want to be sociall consciouss, our goal was to cater to all three archetypes and provide features that would create an experience for all types of people who are using this website.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Archetype Cards */}
              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Activists</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Activists who are working on the ground level to enact social justice change.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Intellectuals</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  People in academia who want to join discussions around social justice.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Businesses</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  People who want their business to be more socially conscious.
                </p>
              </div>
            </div>
          </motion.div>

          {/* User Research Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <h3 className="text-2xl font-bold mb-4">User Research</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Now I'll just briefly dive into some of the user research that we made before we started the process of designing this app.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              I made two user personas and jourey maps that kind of talk through essentially what a user would try to do on this application.
            </p>
            <div className="relative group mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/image17.png"
                  alt="User journey maps showing the experience flow"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              For example, we have one where Brandon Jones is a Federal Agenecy Director which is part of one of our Archetypes that we came up with. What this user journey walks through is his expectations of creating a discussion and then being able to join that discussion and talk in it. So, I created these five steps essentially, that go with that. So he creates his account to engage with our platform, and then he navigates to the communities, joins, it, and then tries to look through all the posts that are there. And from that, I had the idea of what he would be able to do afterwards if he wanted to make posts or not and then be able to have recommended discussion groups come up onto his feed, based on what he likes and what he's actually joined, and that would kind of continue that cycle of engagement that was created within just the discussions part of it.
            </p>
          </motion.div>

          {/* Journey Maps Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <div className="relative group mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/image18.png"
                  alt="User journey maps showing the experience flow"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              For a second persona, we created Marie Academic which is part ofthe academic archetype and she wants to essentially schedule appoints with you, and so we have that same five step process with that for our journey, and essentially it's that she creates an account on our website, schedules an appointment with you, selects timeslots, and then we have some follow-up actions, that kind of keep that engagement going, of learning to stand up for herself if that's what she wanted to do, and be able to check back in with you and make follow-up apointments, to keep that user coming back to our website in some way.
            </p>
          </motion.div>

          {/* User Flow Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <h3 className="text-2xl font-bold mb-4">User Flow</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is essentially a visual representation of how the user is going to navigate through the app once they sign in.
            </p>
            <div className="relative group mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/image21.png"
                  alt="User flow diagram showing the main interaction paths"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              So, the user begins at the dashboard, and this is where they can quickly make appointments, cathc up the added course content, or browse through any of their diversity communities. On scheduling appointments, they can choose what type of appointment they want to scheudle – one on one vs. group. And in event calendar, they can see all upcoming events and register for open events, and then in coaching, they can request a workshop with the client, or they can also browse coaching packages or download free content. Next in the communities, individuals will be able to see groups recommended to them based on their user archetype, and then finally all of these features are building off of the goal that we have for this app, which is to get people to interact with community coontent regarding DEI and also purchase the client's coaching packages.
            </p>
          </motion.div>

          {/* Key Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Based on our user research and journey maps, we identified several key features that would enhance the user experience and meet the needs of our different user archetypes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Community Engagement</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Users can join and participate in DEI-focused communities, share resources, and engage in meaningful discussions with like-minded individuals.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Appointment Scheduling</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Flexible scheduling system for one-on-one consultations, group sessions, and workshops, with automated reminders and follow-ups.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Resource Library</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Comprehensive collection of DEI resources, including articles, guides, and downloadable content for continuous learning.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Event Management</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Calendar integration for upcoming events, workshops, and training sessions, with easy registration and participation tracking.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Wireframes Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <h3 className="text-2xl font-bold mb-4">Wireframes</h3>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/image20.png"
                  alt="Initial wireframes showing the user interface layout"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <p className="text-center text-gray-600 mt-4 font-medium">
              Initial wireframes exploring the user interface and interaction patterns
            </p>
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
              href="/work/ai-task-force"
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