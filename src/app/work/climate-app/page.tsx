"use client";
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package, ArrowLeft, ArrowUpRight, Circle, Square, Triangle, ExternalLink, ChevronRight, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

const project = {
  title: "Designing a Smarter Way to Plan with Weather",
  description: "Provides users with seamless access to accurate, personalized weather insights across multiple locations, including a detailed 5-day forecast.",
  date: "December 3, 2024",
  image: "/images/image57.png",
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
  tags: ["User Research", "Mobile Design", "UI/UX", "Product Design", "Wireframing", "Prototyping"],
}

export default function CryptoDashboardPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState("inspiration")
  const [hasScrolled, setHasScrolled] = useState(false)

  const allTags = Array.from(new Set(project.tags))

  const filteredProjects = project.tags.filter((tag) => {
    const matchesTag = selectedTag ? tag === selectedTag : true
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTag && matchesSearch
  })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'inspiration', 'problem', 'research', 'competitive-analysis', 
        'sketching', 'lofi-wireframing', 'refining-prototyping', 
        'being-intentional-with-color', 'sparking-joy', 'reflections'
      ]
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'inspiration', label: 'Inspiration' },
    { id: 'problem', label: 'Problem' },
    { id: 'research', label: 'Research' },
    { id: 'competitive-analysis', label: 'Competitive Analysis' },
    { id: 'sketching', label: 'Sketching' },
    { id: 'lofi-wireframing', label: 'LoFi Wireframing' },
    { id: 'refining-prototyping', label: 'Refining & Prototyping' },
    { id: 'being-intentional-with-color', label: 'Being Intentional with Color' },
    { id: 'sparking-joy', label: 'Sparking Joy!' },
    { id: 'reflections', label: 'Reflections' }
  ]

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

      {/* Vertical Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed left-8 top-32 z-30 hidden lg:block"
      >
        <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-lg p-6">
          <ul className="space-y-4">
            {/* Return Home Button */}
            <li className="flex items-center gap-3 group">
              <Link
                href="/#projects"
                className="flex items-center gap-3 group"
              >
                <ArrowLeft className="w-3 h-3 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-300" />
                <span className="text-sm text-gray-600 dark:text-gray-400 opacity-60 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-arial">
                  Return Home
                </span>
              </Link>
            </li>
            
            {/* Spacer */}
            <li className="h-8"></li>
            
            {navItems.map((item) => (
              <li key={item.id} className="flex items-center group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-left"
                >
                  <span
                    className={`text-sm transition-all duration-300 whitespace-nowrap font-arial relative ${
                      activeSection === item.id
                        ? 'text-purple-500 opacity-100'
                        : 'text-gray-600 dark:text-gray-400 opacity-60 group-hover:opacity-100'
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-4 bg-purple-300 transition-all duration-300 group-hover:w-full -z-10"></span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      <main className="relative">
        <article className="prose lg:prose-xl dark:prose-invert">

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
              className="relative z-10 pt-60 pb-20 w-screen lg:pl-64"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="px-16">
                <div className="max-w-7xl mx-auto space-y-8">
                  <motion.h1
                    className="text-3xl md:text-5xl font-normal tracking-wide font-mono"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="text-gray-900 dark:text-white">
                      {project.title}
                    </span>
                  </motion.h1>

                                    <motion.p
                    className="text-lg md:text-xl max-w-2xl font-thin leading-relaxed text-gray-800 dark:text-white/90 font-arial"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    How can we help users easily plan across multiple locations and timeframes using weather data?
                  </motion.p>




                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative w-full h-[400px] lg:pl-64 px-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="max-w-5xl mx-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover rounded-3xl opacity-50"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>



          {/* Project Details Section */}
          <motion.div
            className="lg:pl-64 px-16 py-[32rem] mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Role */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400  tracking-wide">Role</h3>
                  <p className="text-gray-900 dark:text-white font-arial">Product Designer</p>

                </div>

                {/* Team */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400  tracking-wide">Team</h3>
                  <p className="text-gray-900 dark:text-white font-arial">Individual</p>

                </div>

                {/* Tools */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400  tracking-wide">Tools</h3>
                  <p className="text-gray-900 dark:text-white font-arial">Figma</p>
                  <p className="text-gray-900 dark:text-white font-arial">Adobe XD</p>
                  <p className="text-gray-900 dark:text-white font-arial">Miro</p>
                  <p className="text-gray-900 dark:text-white font-arial">Notion</p>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400  tracking-wide">Skills</h3>
                  <p className="text-gray-900 dark:text-white font-mono">User Research</p>
                  <p className="text-gray-900 dark:text-white font-mono">Wireframing</p>
                  <p className="text-gray-900 dark:text-white font-mono">Prototyping</p>
                  <p className="text-gray-900 dark:text-white font-mono">Visual Design</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inspiration Section */}
          <section id="inspiration" className="mb-20 px-16 lg:pl-48 -mt-[32rem]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className={`${playfair.className} text-4xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>
                Inspiration
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                The inspiration for Cliimate came from observing how people interact with weather information in their daily lives. I noticed that existing weather apps often focus on single-location forecasts, missing the opportunity to serve users who need to manage multiple destinations or plan long-term activities.
              </p>
            </motion.div>
          </section>

          {/* Problem Section */}
          <section id="problem" className="mb-20 px-16 lg:pl-48">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className={`${playfair.className} text-4xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>
                Problem
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Frequent travelers and long-term planners alike struggle to find weather platforms that support nuanced, location-based planning needs. For business travelers, navigating time zones and fluctuating weather across multiple cities can disrupt schedules and decision-making.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Meanwhile, individuals relying on long-term weather trends—such as farmers or agricultural planners—require more than just daily forecasts; they need contextual, seasonal data to make informed choices months in advance.
              </p>
            </motion.div>
          </section>

          {/* Research Section */}
          <section id="research" className="mb-20 px-16 lg:pl-48">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className={`${playfair.className} text-4xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>
                Research
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                My research involved interviewing business travelers, agricultural planners, and outdoor professionals to understand their weather-related pain points and decision-making processes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Findings</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Business travelers need quick comparisons across multiple time zones</li>
                    <li>Agricultural planners require seasonal forecasting tools</li>
                    <li>Users want both overview and detailed views without switching apps</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">User Personas</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Frequent business travelers managing global schedules</li>
                    <li>Farmers and agricultural professionals</li>
                    <li>Outdoor event planners and organizers</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Competitive Analysis Section */}
          <section id="competitive-analysis" className="mb-20 px-16 lg:pl-48">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className={`${playfair.className} text-4xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>
                Competitive Analysis
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                I analyzed existing weather applications to identify gaps in the market and opportunities for innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Weather Apps</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Focus on single-location forecasts, limited multi-location support
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Travel Apps</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Include weather but as secondary feature, not optimized for planning
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Agricultural Tools</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Specialized but complex, not accessible to general users
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Sketching Section */}
          <section id="sketching" className="mb-20 px-16 lg:pl-48">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className={`${playfair.className} text-4xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>
                Sketching
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Initial sketches focused on exploring different layout approaches for displaying multiple locations and weather information simultaneously.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg mt-8">
                <p className="text-gray-600 dark:text-gray-400 text-center italic">
                  [Sketch images would be displayed here]
                </p>
              </div>
            </motion.div>
          </section>

          {/* LoFi Wireframing Section */}
          <section id="lofi-wireframing" className="mb-20 px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className={`${playfair.className} text-4xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>
                LoFi Wireframing
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Low-fidelity wireframes helped me test different information architectures and user flows before committing to detailed designs.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg mt-8">
                <p className="text-gray-600 dark:text-gray-400 text-center italic">
                  [Wireframe images would be displayed here]
                </p>
              </div>
            </motion.div>
          </section>

          {/* Refining & Prototyping Section */}
          <section id="refining-prototyping" className="mb-20 px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className={`${playfair.className} text-4xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>
                Refining & Prototyping
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                The refinement process involved multiple iterations of the interface, focusing on improving usability and visual hierarchy.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg mt-8">
                <p className="text-gray-600 dark:text-gray-400 text-center italic">
                  [Prototype images would be displayed here]
                </p>
              </div>
            </motion.div>
          </section>

          {/* Being Intentional with Color Section */}
          <section id="being-intentional-with-color" className="mb-20 px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className={`${playfair.className} text-4xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>
                Being Intentional with Color
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                Color choices were carefully considered to enhance readability and create meaningful visual associations with weather conditions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Color Strategy</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Blue tones for cool temperatures</li>
                    <li>Orange/red tones for warm temperatures</li>
                    <li>Neutral grays for interface elements</li>
                    <li>High contrast for accessibility</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Accessibility</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>WCAG AA compliant color ratios</li>
                    <li>Color-blind friendly palettes</li>
                    <li>Consistent color coding</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Sparking Joy! Section */}
          <section id="sparking-joy" className="mb-20 px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className={`${playfair.className} text-4xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>
                Sparking Joy!
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                The most rewarding aspect of this project was creating an interface that not only solves practical problems but also delights users with thoughtful interactions and beautiful design.
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-8 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Joyful Moments</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Smooth animations that guide user attention</li>
                  <li>Intuitive interactions that feel natural</li>
                  <li>Beautiful weather visualizations</li>
                  <li>Helpful micro-interactions</li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* Reflections Section */}
          <section id="reflections" className="mb-20 px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className={`${playfair.className} text-4xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>
                Reflections
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                This project taught me the importance of understanding diverse user needs and creating solutions that serve multiple use cases without compromising on simplicity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Learnings</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Balance between simplicity and functionality</li>
                    <li>Importance of user research in design decisions</li>
                    <li>Value of iterative design process</li>
                    <li>Power of thoughtful color and typography</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Future Improvements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Enhanced accessibility features</li>
                    <li>More advanced weather predictions</li>
                    <li>Integration with calendar systems</li>
                    <li>Community features for weather sharing</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>
        </article>
      </main>
    </div>
  )
}

const styles = `
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}
`

