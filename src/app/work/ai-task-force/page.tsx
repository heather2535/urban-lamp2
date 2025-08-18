"use client";
import { useState } from "react"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package, ArrowLeft, ArrowUpRight, Circle, Square, Triangle, ExternalLink, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'
import { ProjectNavigation } from "@/components/project-navigation"
import VerticalNavigation from "@/components/vertical-navigation"
import SectionTitle from "@/components/SectionTitle"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

const playfair = Playfair_Display({ subsets: ['latin'] })

const project = {
  title: "AI Task Force\nWeb App",
  description: "that guides the university’s approach to generative AI by reviewing practices, recommending policies.",
  date: "December 3, 2024",
  image: "/images/image29.png",
  content: `
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div></div>
        <div className="mt-4">
          <img
            src="/images/image29.png"
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
    <div className="min-h-screen bg-white">

      {/* Project Vertical Navigation */}
      <VerticalNavigation />

      <main className="relative lg:ml-64">
        <article className="prose lg:prose-xl">


          {/* Hero Section */}
          <motion.div
            id="hero"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Text Content */}
            <motion.div
              className="relative z-10 pt-12 max-w-7xl pb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="px-16">
                <div className="max-w-7xl mx-auto space-y-4">
                  <motion.h1
                    className="font-mono text-3xl md:text-5xl font-normal tracking-wide leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="text-gray-600">
                      {project.title}
                    </span>
                  </motion.h1>

                  <motion.p
                    className={`${playfair.className} text-3xl md:text-5xl max-w-2xl font-normal leading-relaxed text-gray-800`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-3 text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <span className="text-xl font-extralight">{project.date}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative w-full h-[600px] overflow-hidden justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex justify-start -ml-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="w-full max-w-7xl h-full object-contain rounded-3xl"
                  style={{ objectPosition: 'center 30%' }}
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Project Details Section */}
          <motion.div
            id="project-details"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 pb-16 px-16"
          >
            <div className="grid grid-cols-1  md:grid-cols-4 gap-8">
              {/* Role */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">role</h3>
                <p className="text-sm font-extralight text-gray-600">Design Strategist, UX Researcher, UI/UX</p>
              </div>

              {/* Team */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">team</h3>
                <p className="text-sm font-extralight text-gray-600">Heather Davies</p>
                <p className="text-sm font-extralight text-gray-600">Jason Huang</p>
                <p className="text-sm font-extralight text-gray-600">Wesley Wildman</p>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">tools</h3>
                <p className="text-sm font-extralight text-gray-600">Figma</p>
                <p className="text-sm font-extralight text-gray-600">Adobe XD</p>
                <p className="text-sm font-extralight text-gray-600">Adobe Illustrator</p>
                <p className="text-sm font-extralight text-gray-600">Adobe Photoshop</p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">skills</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <p className="text-sm font-extralight text-gray-600">AI/ML</p>
                  <p className="text-sm font-extralight text-gray-600">UI/UX Design</p>
                  <p className="text-sm font-extralight text-gray-600">Product Design</p>
                  <p className="text-sm font-extralight text-gray-600">Data Visualization</p>
                  <p className="text-sm font-extralight text-gray-600">User Research</p>
                </div>
              </div>
            </div>
          </motion.div>

           {/* Diagonal Line Divider */}
           <div className="flex justify-center pt-10 -mt-10">
            <div className="flex space-x-3">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className=" w-1 h-8 bg-orange-300 transform rotate-45"
                />
              ))}
            </div>
          </div>

          {/* Problem Statement Section */}
          <motion.div
            id="problem"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-16 scroll-mt-4"
            onMouseEnter={() => {
              const event = new CustomEvent('sectionHover', { detail: 'problem' })
              window.dispatchEvent(event)
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <SectionTitle>Problem Statement</SectionTitle>
                <p className="text-gray-600 font-extralight leading-relaxed">
                  The AI Task Force at Boston University needed a way to track and manage research projects while ensuring compliance with ethical guidelines and institutional policies. The existing process was manual and time-consuming, leading to potential delays and inconsistencies in research oversight.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Goals Section */}
          <motion.div
            id="goals"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-16 scroll-mt-4"
            onMouseEnter={() => {
              const event = new CustomEvent('sectionHover', { detail: 'goals' })
              window.dispatchEvent(event)
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <SectionTitle>Goals</SectionTitle>
                <p className="text-gray-600 font-extralight leading-relaxed">
                  The primary objectives of this project were to streamline research management, ensure compliance, and enhance collaboration. We aimed to create a centralized platform for tracking research progress and managing documentation, implement a system to track and verify compliance with ethical guidelines and institutional policies, and facilitate communication between researchers, faculty advisors, and institutional review boards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Research & Discovery Section */}
          <motion.div
            id="research"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-16 scroll-mt-4"
            onMouseEnter={() => {
              const event = new CustomEvent('sectionHover', { detail: 'research' })
              window.dispatchEvent(event)
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <SectionTitle>Research & Discovery</SectionTitle>
                <h3 className="text-xl font-semibold mb-4 font-mono">User Interviews</h3>
                <p className="text-gray-600 font-extralight leading-relaxed mb-8">
                  Conducted interviews with student researchers, faculty advisors, and institutional review board members to understand their needs, pain points, and workflows. Student researchers needed a way to track their progress and ensure compliance, faculty advisors wanted to monitor multiple projects and provide feedback, and institutional review boards needed a streamlined process for reviewing and approving research.
                </p>

                <h3 className="text-xl font-semibold mb-4 font-mono">Competitive Analysis</h3>
                <p className="text-gray-600 font-extralight leading-relaxed">
                  Analyzed existing research management systems and identified opportunities for improvement in terms of usability, compliance tracking, and collaboration features. Existing systems were often complex and difficult to navigate, compliance tracking was typically manual and error-prone, and collaboration features were limited or non-existent.
                </p>
              </div>
            </div>
          </motion.div>

          {/* User Personas Section */}
          <motion.div
            id="personas"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-16 scroll-mt-4"
            onMouseEnter={() => {
              const event = new CustomEvent('sectionHover', { detail: 'personas' })
              window.dispatchEvent(event)
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <SectionTitle>User Personas</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 group-hover:border-gray-300/50 transition duration-300 h-full">
                      <h3 className="text-xl font-semibold mb-4 font-mono">Student Researcher</h3>
                      <p className="text-gray-600 font-extralight mb-4">
                        Graduate student conducting AI research who needs to track progress and ensure compliance with ethical guidelines.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 font-extralight space-y-2">
                        <li>Needs to track research progress</li>
                        <li>Must ensure compliance with guidelines</li>
                        <li>Wants to collaborate with advisors</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 group-hover:border-gray-300/50 transition duration-300 h-full">
                      <h3 className="text-xl font-semibold mb-4 font-mono">Faculty Advisor</h3>
                      <p className="text-gray-600 font-extralight mb-4">
                        Professor overseeing multiple research projects who needs to monitor progress and provide guidance.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 font-extralight space-y-2">
                        <li>Monitors multiple projects</li>
                        <li>Provides feedback and guidance</li>
                        <li>Ensures research quality</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50 group-hover:border-gray-300/50 transition duration-300 h-full">
                      <h3 className="text-xl font-semibold mb-4 font-mono">Review Board Member</h3>
                      <p className="text-gray-600 font-extralight mb-4">
                        Institutional review board member who needs to evaluate research proposals and ensure compliance.
                      </p>
                      <ul className="list-disc list-inside text-gray-600 font-extralight space-y-2">
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
            id="next-steps"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-16 scroll-mt-4"
            onMouseEnter={() => {
              const event = new CustomEvent('sectionHover', { detail: 'next-steps' })
              window.dispatchEvent(event)
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <SectionTitle>Next Steps</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 font-mono">Implementation</h3>
                    <p className="text-gray-600 font-extralight mb-6 leading-relaxed">
                      Work with developers to implement the dashboard, focusing on usability, compliance tracking, and collaboration features.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-extralight space-y-2">
                      <li>Develop core functionality</li>
                      <li>Implement compliance tracking</li>
                      <li>Add collaboration features</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 font-mono">Testing & Iteration</h3>
                    <p className="text-gray-600 font-extralight mb-6 leading-relaxed">
                      Conduct user testing with student researchers, faculty advisors, and review board members to gather feedback and make improvements.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 font-extralight space-y-2">
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
            id="dashboard-view"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-16 scroll-mt-4"
            onMouseEnter={() => {
              const event = new CustomEvent('sectionHover', { detail: 'dashboard-view' })
              window.dispatchEvent(event)
            }}
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
                    <h3 className="text-3xl font-semibold tracking-wide text-gray-900 mb-8 font-mono">Dashboard View</h3>
                    <p className="text-gray-600 font-extralight mb-8 leading-relaxed">
                      The dashboard view provides a comprehensive overview of the research landscape, allowing users to explore semantic network interconnections between various research papers. This view helps researchers understand the relationships and patterns within their field of study.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Adder View Section */}
          <motion.div
            id="adder-view"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-16 scroll-mt-4"
            onMouseEnter={() => {
              const event = new CustomEvent('sectionHover', { detail: 'adder-view' })
              window.dispatchEvent(event)
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-semibold tracking-wide text-gray-900 mb-8 font-mono">Adder View</h3>
                    <p className="text-gray-600 font-extralight mb-8 leading-relaxed">
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
            id="motion-animation"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-16 scroll-mt-4"
            onMouseEnter={() => {
              const event = new CustomEvent('sectionHover', { detail: 'motion-animation' })
              window.dispatchEvent(event)
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <SectionTitle>V3 — Motion and Animation</SectionTitle>
                <div className="space-y-6">
                  <p className="text-gray-600 font-extralight leading-relaxed">
                    Learning about and utilizing animation was very compelling to me because although I had worked with visual design in the past, I'd never really had an opportunity to implement animation and motion in a design before. I knew I wanted my animations to supplement the welcoming nature of my dashboard, so it was crucial that my animations enhanced my UX, and didn't sabotage it.
                  </p>
                  <p className="text-gray-600 font-extralight leading-relaxed">
                    Upon assessing my dashboard, there were a few animations I immediately sought to implement, and a few others that occurred to me as I worked through my next iteration. I knew that I wanted to have the user be able to scroll down the Recommendaton bar ; however, I had to make sure that the way I animated in XD actually made it feel like a scroll bar, and not just a dissolving mess downward. This meant that all of the comment panels had to stay in place and not warp as the user scrolled.
                  </p>
                  <p className="text-gray-600 font-extralight leading-relaxed">
                    Another animation that proved successful was the ability to click on the Graph View toggle to select which graph was to be viewed: Semantic Network or Topic Analysis. For this animation, I used an easing-out dissolve of the darkened button to indicate that the button was essentially shifting to the next question.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center px-16 mb-20">
            <Link
              href="/#projects"
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
