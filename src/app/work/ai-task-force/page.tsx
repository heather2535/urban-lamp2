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

const playfair = Playfair_Display({ subsets: ['latin'] })

const project = {
  title: "AI Task Force Policy Dashboard",
  description: "A visual and interactive web app for student researchers and faculty conducting effective and responsible research using AI.",
  date: "December 3, 2024",
  image: "/images/image29.png",
  content: `
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div></div>
        <div className="mt-4">
          <img
            src="/images/image30.png"
            alt="ALS Clinical Decision Tool"
            className="rounded-lg shadow-md w-full max-w-sm mx-auto"
            style={{ height: "auto" }}
          />
          <h1 className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Figure 1: This is the Topic Model view of my final dashboard design.</h1>
        </div>
        <br></br>
        <div className="mt-4">
          <img
            src="/images/image31.png"
            alt="ALS Clinical Decision Tool"
            className="rounded-lg shadow-md w-full max-w-3xl"
            style={{ height: "auto" }}
          />
          <h1 className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Figure 2: And here's the Synopsis Graph view of my final design!</h1>
        </div>
        <div></div>
      </div>
    </div>
    <br></br>
    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">V3 — Motion and Animation</h3>
    <p className="text-gray-700 leading-relaxed mb-6">
      Learning about and utilizing animation was very compelling to me because although I had worked with visual design in the past, I'd never really had an opportunity to implement animation and motion in a design before. I knew I wanted my animations to supplement the welcoming nature of my dashboard, so it was crucial that my animations enhanced my UX, and didn't sabotage it.
    </p>
    <p className="text-gray-700 leading-relaxed mb-6">
      Upon assessing my dashboard, there were a few animations I immediately sought to implement, and a few others that occurred to me as I worked through my next iteration. I knew that I wanted to have the user be able to scroll down the Recommendaton bar ; however, I had to make sure that the way I animated in XD actually made it feel like a scroll bar, and not just a dissolving mess downward. This meant that all of the comment panels had to stay in place and not warp as the user scrolled.
    </p>
    <p className="text-gray-700 leading-relaxed mb-6">
      Another animation that proved successful was the ability to click on the Graph View toggle to select which graph was to be viewed: Semantic Network or Topic Analysis. For this animation, I used an easing-out dissolve of the darkened button to indicate that the button was essentially shifting to the next question.
    </p>
  `,
  tags: ["Web Development", "Product Design", "UI/UX"],
  role: "Design Strategist, UX Researcher, UI/UX",
  team: ["Heather Davies", "Jason Huang", "Wesley Wildman"],
  duration: "Sep. 2024 - Dec. 2024 (4 mo. total)",
  problem: "For this project, my goal was to design a visual and interactive web app for student researchers and faculty conducting research in the classroom. I was focused on a scenario in which a team of students are preparing a policy brief on integrating AI-driven tools into university classroom settings in their Data, Ethics, and Society course. However, due to an overall lack of comprehensive understanding in addressing the ethical implications of these technologies, student researchers and educators are seeking a way to promote better analysis in addressing the complex landscape of ethical AI usage.",
  goal: "I designed a visual and interactive web app, containing real data from a Data, Ethics, and Society course at Boston University, to help solve this issue. My visual and interactive web app had two views: a detailed dashboard view and a adding articles view. I wanted to make sure that while the detailed dashboard view allowed for exploration on the semantic network interconnection of various research papers, the adding articles view would ensure quick access to critical information about a paper and assess its relevance to her research."
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

            {/* Hero Image */}
            <motion.div
              className="relative w-full h-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Project Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 pt-60"
          >
            {/* Scroll to Explore */}
            <motion.div
              className="flex flex-col items-center justify-center gap-2 text-gray-500 my-24 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-sm">Scroll to explore</span>
              <ChevronRight className="w-4 h-4 rotate-90 group-hover:translate-y-1 transition-transform duration-300" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Title */}
              <div className="md:col-span-4">
                <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white`}>Project Details</h3>
              </div>

              {/* Labels */}
              <div className="md:col-span-4 space-y-12">
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
              <div className="md:col-span-4 space-y-12">
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

          {/* Problem Statement Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>Problem Statement</h3>
                <p className="text-gray-400 font-extralight">
                  The AI Task Force at Boston University needed a way to track and manage research projects while ensuring compliance with ethical guidelines and institutional policies. The existing process was manual and time-consuming, leading to potential delays and inconsistencies in research oversight.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Goals Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <h2 className={`text-3xl font-semibold mb-8 ${playfair.className}`}>Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <p className="text-gray-400 font-extralight">
                  The primary objectives of this project were to streamline research management, ensure compliance, and enhance collaboration. We aimed to create a centralized platform for tracking research progress and managing documentation, implement a system to track and verify compliance with ethical guidelines and institutional policies, and facilitate communication between researchers, faculty advisors, and institutional review boards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Research & Discovery Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <h2 className={`text-3xl font-semibold mb-8 ${playfair.className}`}>Research & Discovery</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className={`text-xl font-semibold mb-4 ${playfair.className}`}>User Interviews</h3>
                <p className="text-gray-400 font-extralight mb-8">
                  Conducted interviews with student researchers, faculty advisors, and institutional review board members to understand their needs, pain points, and workflows. Student researchers needed a way to track their progress and ensure compliance, faculty advisors wanted to monitor multiple projects and provide feedback, and institutional review boards needed a streamlined process for reviewing and approving research.
                </p>

                <h3 className={`text-xl font-semibold mb-4 ${playfair.className}`}>Competitive Analysis</h3>
                <p className="text-gray-400 font-extralight">
                  Analyzed existing research management systems and identified opportunities for improvement in terms of usability, compliance tracking, and collaboration features. Existing systems were often complex and difficult to navigate, compliance tracking was typically manual and error-prone, and collaboration features were limited or non-existent.
                </p>
              </div>
            </div>
          </motion.div>

          {/* User Personas Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <h2 className={`text-3xl font-semibold mb-8 ${playfair.className}`}>User Personas</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 dark:border-gray-800/50 group-hover:border-gray-300/50 dark:group-hover:border-gray-700/50 transition duration-300 h-full">
                      <h3 className="text-xl font-semibold mb-4">Student Researcher</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-extralight mb-4">
                        Graduate student conducting AI research who needs to track progress and ensure compliance with ethical guidelines.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-extralight space-y-2">
                        <li>Needs to track research progress</li>
                        <li>Must ensure compliance with guidelines</li>
                        <li>Wants to collaborate with advisors</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 dark:border-gray-800/50 group-hover:border-gray-300/50 dark:group-hover:border-gray-700/50 transition duration-300 h-full">
                      <h3 className="text-xl font-semibold mb-4">Faculty Advisor</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-extralight mb-4">
                        Professor overseeing multiple research projects who needs to monitor progress and provide guidance.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-extralight space-y-2">
                        <li>Monitors multiple projects</li>
                        <li>Provides feedback and guidance</li>
                        <li>Ensures research quality</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 dark:border-gray-800/50 group-hover:border-gray-300/50 dark:group-hover:border-gray-700/50 transition duration-300 h-full">
                      <h3 className="text-xl font-semibold mb-4">Review Board Member</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-extralight mb-4">
                        Institutional review board member who needs to evaluate research proposals and ensure compliance.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-extralight space-y-2">
                        <li>Reviews research proposals</li>
                        <li>Ensures compliance with policies</li>
                        <li>Provides approvals and feedback</li>
                      </ul>
                    </div>
                  </div>
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
            <h2 className={`text-3xl font-semibold mb-8 ${playfair.className}`}>Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${playfair.className}`}>Implementation</h3>
                    <p className="text-gray-400 font-extralight mb-6">
                      Work with developers to implement the dashboard, focusing on usability, compliance tracking, and collaboration features.
                    </p>
                    <ul className="list-disc list-inside text-gray-400 font-extralight space-y-2">
                      <li>Develop core functionality</li>
                      <li>Implement compliance tracking</li>
                      <li>Add collaboration features</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${playfair.className}`}>Testing & Iteration</h3>
                    <p className="text-gray-400 font-extralight mb-6">
                      Conduct user testing with student researchers, faculty advisors, and review board members to gather feedback and make improvements.
                    </p>
                    <ul className="list-disc list-inside text-gray-400 font-extralight space-y-2">
                      <li>Test with real users</li>
                      <li>Gather feedback</li>
                      <li>Make improvements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dashboard View Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/images/image32.jpg"
                        alt="Dashboard view showing semantic network interconnections"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <p className="text-right text-gray-400 mt-4 font-extralight">
                      Figure 1: Topic Model view of the final dashboard design
                    </p>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className={`${playfair.className} text-3xl font-semibold tracking-wide text-gray-900 dark:text-white mb-8`}>Dashboard View</h3>
                    <p className="text-gray-400 font-extralight mb-8">
                      The dashboard view provides a comprehensive overview of the research landscape, allowing users to explore semantic network interconnections between various research papers. This view helps researchers understand the relationships and patterns within their field of study.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Adder View Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col justify-center">
                    <h3 className={`${playfair.className} text-3xl font-semibold tracking-wide text-gray-900 dark:text-white mb-8`}>Adder View</h3>
                    <p className="text-gray-400 font-extralight mb-8">
                      The adder view provides a streamlined interface for quickly accessing critical information about research papers and assessing their relevance to ongoing research. This view helps researchers efficiently evaluate and incorporate new sources into their work.
                    </p>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/images/i.jpg"
                        alt="Adder view showing paper assessment interface"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <p className="text-right text-gray-400 mt-4 font-extralight">
                      Figure 2: Synopsis Graph view of the final design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Motion and Animation Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h3 className={`${playfair.className} text-3xl font-semibold tracking-wide text-gray-900 dark:text-white mb-8`}>V3 — Motion and Animation</h3>
                <div className="space-y-6">
                  <p className="text-gray-400 font-extralight">
                    Learning about and utilizing animation was very compelling to me because although I had worked with visual design in the past, I'd never really had an opportunity to implement animation and motion in a design before. I knew I wanted my animations to supplement the welcoming nature of my dashboard, so it was crucial that my animations enhanced my UX, and didn't sabotage it.
                  </p>
                  <p className="text-gray-400 font-extralight">
                    Upon assessing my dashboard, there were a few animations I immediately sought to implement, and a few others that occurred to me as I worked through my next iteration. I knew that I wanted to have the user be able to scroll down the Recommendaton bar ; however, I had to make sure that the way I animated in XD actually made it feel like a scroll bar, and not just a dissolving mess downward. This meant that all of the comment panels had to stay in place and not warp as the user scrolled.
                  </p>
                  <p className="text-gray-400 font-extralight">
                    Another animation that proved successful was the ability to click on the Graph View toggle to select which graph was to be viewed: Semantic Network or Topic Analysis. For this animation, I used an easing-out dissolve of the darkened button to indicate that the button was essentially shifting to the next question.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center px-16 mb-20">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-gray-300 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <Link
              href="/work/fuse"
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
