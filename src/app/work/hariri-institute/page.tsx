"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, Circle, Square, Triangle, ExternalLink, ChevronRight } from "lucide-react"
import { useState } from "react"

// Mock project data - in a real app, this would come from a database or API
const projectData = {
  id: "hariri-institute",
  title: "Website Redesign for Hariri Institute",
  date: "September 3, 2024",
  tags: ["Web Development", "UX Research"],
  heroImage: "/image15.png",
  mobileImage: "/placeholder.svg?height=600&width=300",
  tabletImage: "/placeholder.svg?height=500&width=400",
  additionalImages: ["/images/image8.png", "/images/image9.png", "/images/image10.png"],
  role: "Design Strategist, UX Researcher, UI/UX",
  team: ["Heather Davies", "Brian Zeng", "Avdeep Kaur", "Minyang Li"],
  duration: "Sep. 2024 - Dec. 2024 (4 mo. total)",
  goal: "The primary goal was to modernize and simplify the Hariri Institute website while aligning with Boston University's Office of Research visual standards. We aimed to improve user experience for both internal and external audiences while ensuring the site could be easily maintained by non-technical staff.",
  solution:
    "We developed a modern, accessible website that balances institutional branding with Hariri's interdisciplinary identity. The solution features a clean design system with reusable components, improved content discoverability, and a streamlined CMS for easy content management.",
  prototypeUrl: "https://www.bu.edu/hic/",
  scopeImages: [
    "/images/image11.png",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
  ],
  architectureImage: "/image12.png",
  clientLogo: "/placeholder.svg?height=100&width=200",
  overview:
    "A comprehensive redesign of the Hariri Institute's digital presence, focusing on improved user experience, content organization, and visual identity that reflects their position as a leader in computational research.",
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [activeImage, setActiveImage] = useState(0)
  const images = [projectData.heroImage, ...projectData.additionalImages]

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

      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-white text-gray-900 mb-20">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Back to Projects Button */}
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

          <div className="grid lg:grid-cols-5 gap-12 items-start pb-20">
            {/* Project Info - Left Column */}
            <motion.div
              className="space-y-8 lg:col-span-2"
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
                <span className="inline-block">Website</span>{" "}
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                  Redesign
                </span>
                <br />
                <span className="inline-block">for Hariri Institute</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {projectData.overview}
              </motion.p>

              <motion.div
                className="flex items-center gap-3 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-sm">September 3, 2024</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="text-sm">{projectData.duration.split("(")[0]}</span>
              </motion.div>

              {/* Tags */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {projectData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image - Right Column */}
            <motion.div
              className="relative lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
                  <Image
                    src="/images/image55.png"
                    alt="Desktop preview"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <ChevronRight className="w-5 h-5 text-gray-500 rotate-90" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Project Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
        >
          {/* Role, Team, Duration */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Role</h3>
              <p className="text-gray-600">{projectData.role}</p>
    </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Team</h3>
              <div className="space-y-1">
                {projectData.team.map((member) => (
                  <p key={member} className="text-gray-600 text-sm">
                    {member}
                  </p>
                ))}
    </div>
        </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Duration</h3>
              <p className="text-gray-600">{projectData.duration}</p>
        </div>
      </div>

          {/* Goal and Solution */}
          <div className="grid lg:grid-cols-2 gap-12 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Goal:</h3>
              <p className="text-gray-700 leading-relaxed">{projectData.goal}</p>
    </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Solution:</h3>
              <p className="text-gray-700 leading-relaxed">{projectData.solution}</p>
    </div>
    </div>
      
          {/* Working Prototype Button */}
          <div className="text-center">
            <Link
              href={projectData.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Working Prototype
            </Link>
          </div>
        </motion.div>

        {/* Project Scope Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Project Scope</h2>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                To redesign and redevelop the website for the Boston University Hariri Institute an organization
                comprised of BU faculty and graduate students across disciplines to study and design intelligent
                systems. Hariri Institute researchers develop solutions in the areas of Automation, Robotics & Control,
                Computational Biology & Medicine, Cyber-Physical Systems, Data Analytics, Energy Systems, Information
                Sources, and Networks.
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-bold">The goals of the website redesign were to:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Develop a holistic architecture and modern UX experience that showcases the Hariri Institute's
                      mission, research, collaborations, news, events, and faculty profiles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Develop a new Events Calendar that better showcases important events, enables event
                      categorization, and provides for a more streamlined editing process.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Highlight and promote Hariri Institute's interdisciplinary research, collaboration, and events
                      such as the Tsai Seminars that bring exposure from outside BU.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Create a visual design for the website that focuses on engagement and education and is more
                      in-line stylistically with the institute's new branding identity.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Create landing page and other specialty page designs that automate the display of
                      cross-promotional content.
                    </span>
                  </li>
                </ul>
      </div>
          </div>

            <div className="lg:col-span-4">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/image11.png"
                    alt="Hariri Institute Website Overview"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
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
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Process</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Website Design and Development</h3>
              <p className="text-gray-700 leading-relaxed">
                All website design projects undertaken are divided into five stages: 1. Assess 2. Design 3. Develop 4.
                Produce and 5. Refine.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Assessment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Assess</h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white via-blue-50 via-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                During the Assessment stage, I collaborated with the Hariri Institute to identify project goals and
                organize new and existing information. User experience, business rules, functional requirements, and
                information architecture are then defined, documented, and submitted to the client for review.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Site and User Experience Review</h3>
                <p className="text-gray-700 leading-relaxed">
                  An initial review of the Hariri Institute website was conducted to identify issues relating to the
                  current user experience. I then analyzed available site traffic data to determine how current users
                  navigate the site and identify any technological or user interface roadblocks. Additionally, I
                  reviewed site structure to identify where layout changes could benefit the target user experience.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Target-User Experience Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  I worked with the Hariri Institute to define the user audiences it seeked to retain and attract, which
                  informs website user scenarios that are key to developing the site's architecture and content flows.
                  This will include a review of Hariri's social media channels and how best to leverage them on the
                  website.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Functional and Technical Requirements</h3>
              <p className="text-gray-700 leading-relaxed">
                I define any new requirements for the WordPress content management system (CMS) and plugins and work
                within BU's Information Technology department for the implementation/approval of new plugins. Options
                for specialty pages or any content that requires additional design or programming, will also be defined.
                After specific content types and pages are defined, I created wireframes of the site's architecture and
                content flows. Key engagements or complicated user interactions may be prototyped to ensure usability.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The results of this stage inform Design, Development, and Production, and provide an outline for content
                development and technology selection.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Site Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Site Architecture</h2>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl p-8">
              <Image
                src={projectData.architectureImage || "/placeholder.svg"}
                alt="Site Architecture Diagram"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <p className="text-center text-gray-600 mt-4 font-medium">Figure 1: Site Architecture</p>
            </div>
          </div>
        </motion.div>

        {/* Design Process Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12 mb-20"
        >
          {/* Research & Discovery */}
          <div>
            <h2 className="text-2xl font-bold mb-6">1. Research & Discovery</h2>
            <div className="bg-gradient-to-br from-white via-blue-50 via-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Conducted a full audit of the existing site to identify UX bottlenecks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Held stakeholder interviews with the Communications Manager, Director of Operations, and faculty to
                    understand communication priorities.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Mapped current pain points: difficulty navigating archived content, manual updates, and low
                    visibility of research.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* UX & Information Architecture */}
          <div>
            <h2 className="text-2xl font-bold mb-6">2. UX & Information Architecture</h2>
            <div className="bg-gradient-to-br from-white via-blue-50 via-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Developed new site architecture and user flows prioritizing simplicity and clarity.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Created personas for key audiences (faculty, students, donors, external partners).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Conducted informal usability testing using click-through Figma prototypes to validate navigation
                    patterns and hierarchy.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Design System & Prototyping */}
          <div>
            <h2 className="text-2xl font-bold mb-6">3. Design System & Prototyping</h2>
            <div className="bg-gradient-to-br from-white via-blue-50 via-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Created low-to-high fidelity prototypes in Figma.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Designed reusable components (expandable bios, research highlights, event cards, FAQ accordions).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Focused on mobile responsiveness and accessibility from the outset.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Designed scalable, modular components to support various content types and future growth.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Identity & Customization */}
          <div>
            <h2 className="text-2xl font-bold mb-6">4. Visual Identity & Customization</h2>
            <div className="bg-gradient-to-br from-white via-blue-50 via-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Used BU's Office of Research theme as a foundation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Introduced visual patterns unique to Hariri (custom hero modules, grid layouts, dynamic galleries).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Balanced institutional branding with Hariri's interdisciplinary identity.
                  </span>
                </li>
              </ul>
            </div>

            {/* Design System Images */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {["/images/image8.png", "/images/image9.png", "/images/image10.png"].map((image, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Design System Concept ${index + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-4 font-medium">
              Figure 3: Design System and Visual Identity Concepts
            </p>
          </div>
        </motion.div>

        {/* Results & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Results */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8">Results</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Successfully launched a redesigned, responsive website with improved UX and content discoverability.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Internal teams now have tools to maintain up-to-date, relevant content with ease.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  External users can explore Hariri's projects, events, and people more intuitively.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  The design reflects Hariri's leadership in computational research while remaining accessible to a
                  general audience.
                </span>
              </li>
            </ul>
          </div>

          {/* Tools Used */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8">Tools Used</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Figma</h4>
                <p className="text-sm text-gray-600">Design and prototyping</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Miro</h4>
                <p className="text-sm text-gray-600">Site mapping and user journey diagrams</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Zoom & Google Meet</h4>
                <p className="text-sm text-gray-600">Stakeholder interviews and feedback sessions</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Google Drive</h4>
                <p className="text-sm text-gray-600">Collaborative documentation and UI handoff</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Boston University CMS</h4>
                <p className="text-sm text-gray-600">Implementation with developer guidance</p>
            </div>
            </div>
          </div>
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
            href="/projects/next-project"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Next Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
