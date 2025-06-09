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
  title: "Cliiimate",
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
                    A mobile app that helps users track their carbon footprint and make sustainable choices in their daily lives.
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

          {/* Three Columns Section */}
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
                  <p className="text-sm font-extralight text-gray-400">Sep. 2024 - Dec. 2024</p>
                  <p className="text-sm font-extralight text-gray-400">4 mo. total</p>
                </div>
                <div>
                  <p className="text-sm font-extralight text-gray-400">Design Strategist, UX</p>
                  <p className="text-sm font-extralight text-gray-400">Researcher, UI/UX</p>
                </div>
                <div>
                  <p className="text-sm font-extralight text-gray-400">Heather Davies</p>
                  <p className="text-sm font-extralight text-gray-400">Jason Huang</p>
                  <p className="text-sm font-extralight text-gray-400">Wesley Wildman</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20">
              <div className="md:col-span-8">
                <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white`}>Project Overview</h3>
                <div className="mt-8">
                  <p className="text-md font-extralight leading-relaxed text-gray-400">
                    Cliimate is a responsive weather dashboard designed to support both business travelers and agricultural planners in making time-sensitive, location-based decisions. The app simplifies multi-location weather tracking by providing real-time comparisons of temperature, local time, and conditions across global destinations. For long-term users, it offers detailed climate trends, seasonal forecasting, and an agricultural planning view with a growing season calendar. Built with clarity, scalability, and travel-focused UX in mind, Cliimate bridges the gap between short-term weather checks and strategic, data-driven planning.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20">
              <div className="md:col-span-8">
                <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white`}>Problem</h3>
                <div className="mt-8">
                  <p className="text-md font-extralight leading-relaxed text-gray-400">
                  Frequent travelers and long-term planners alike struggle to find weather platforms that support nuanced, location-based planning needs. For business travelers, navigating time zones and fluctuating weather across multiple cities can disrupt schedules and decision-making. Meanwhile, individuals relying on long-term weather trends—such as farmers or agricultural planners—require more than just daily forecasts; they need contextual, seasonal data to make informed choices months in advance. Despite the availability of weather apps, few offer a unified, intuitive interface that serves both these user groups with equal depth and clarity.   
                  </p>
                  <br></br>
                  <p className="text-md font-extralight leading-relaxed text-gray-400">
                  As someone who regularly switches between planning short-term logistics and long-term strategies, I designed WeatherZone as a bridge between these use cases—one that offers precision, personalization, and peace of mind.
                  </p>

                </div>
                
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20">
              <div className="md:col-span-8">
                <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white`}>Solution</h3>
                <div className="mt-8">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    To address the needs of both frequent travelers and long-term weather planners, I designed Cliimate—a responsive, user-centric weather application built for clarity, mobility, and foresight. For business travelers, the app offers a Travel Weather Hub with multi-location tracking, real-time local time displays, and automatic temperature comparisons—allowing users to quickly assess conditions across time zones. For long-term planners like farmers and outdoor professionals, the Agricultural Activity section provides access to a growing season calendar, extended forecasts, and key agricultural dates. Cliimate features an intuitive tabbed interface, rich data visualizations, and personalized settings, empowering users to make informed decisions—whether navigating global meetings or planning months ahead for the next planting season.
                  </p>

                  {/* Full Width Scrolling Image */}
                  <div className="w-screen relative overflow-hidden bg-gray-100 dark:bg-gray-900 my-20">
                    <div className="relative w-full h-[400px] ">
                      <div className="absolute inset-0 flex animate-scroll">
                        <div className="flex space-x-4">
                          <Image
                            src="/images/image56.png"
                            alt="Climate App Interface"
                            width={1920}
                            height={1080}
                            className="h-[600px] w-auto object-cover"
                          />
                          <Image
                            src="/images/image56.png"
                            alt="Climate App Interface"
                            width={1920}
                            height={1080}
                            className="h-[600px] w-auto object-cover"
                          />
                          <Image
                            src="/images/image56.png"
                            alt="Climate App Interface"
                            width={1920}
                            height={1080}
                            className="h-[600px] w-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">1. Overview Mode (Default for Travelers)</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Interactive weather cards for each city</li>
                        <li>Current local time, timezone, and conditions</li>
                        <li>Quick temperature comparison with "Hottest/Coolest" badges</li>
                        <li>Travel stats dashboard for total cities, timezone range, and weather extremes</li>
                        <li>Five-day forecast preview based on selected location</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">2. Detailed Mode</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Full hourly breakdowns and weather trends</li>
                        <li>Interactive location maps</li>
                        <li>In-depth weather metrics for solo analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">3. Long-Term Mode</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>1- to 6-month forecasting tools</li>
                        <li>Historical weather comparisons</li>
                        <li>Agricultural planning view with a growing season calendar and key farming dates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#18181b] rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
             <div className="md:col-span-4">
                <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white`}>Project Overview</h3>
                <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Cliimate is a responsive weather dashboard designed to support both business travelers and agricultural planners in making time-sensitive, location-based decisions. The app simplifies multi-location weather tracking by providing real-time comparisons of temperature, local time, and conditions across global destinations. For long-term users, it offers detailed climate trends, seasonal forecasting, and an agricultural planning view with a growing season calendar. Built with clarity, scalability, and travel-focused UX in mind, Cliimate bridges the gap between short-term weather checks and strategic, data-driven planning.</p>
              </div>
              </div>
            <div className="max-w-4xl mx-auto space-y-12">
              

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Problem Space</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Most weather apps are built for casual, single-location checking. Business travelers and agricultural planners, however, face deeper challenges:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>How can I quickly compare weather and time zones across destinations?</li>
                  <li>When is the best time to plant, harvest, or travel based on seasonal data?</li>
                  <li>How do I switch from a broad overview to a deep dive without friction?</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">User Types</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Primary User</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">✈️ Business travelers managing multiple destinations</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Needs clear local time display</li>
                      <li>Wants rapid weather comparisons</li>
                      <li>Prefers real-time summaries</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Secondary User</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">🌾 Agricultural planners & long-term forecasters</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Uses climate data to plan over 1–6 months</li>
                      <li>Needs tools like growing season calendars</li>
                      <li>Relies on long-term historical trend data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Solution Overview</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  To meet the needs of both user groups, I built Cliiimate with a three-mode interface:
                </p>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">1. Overview Mode (Default for Travelers)</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Interactive weather cards for each city</li>
                      <li>Current local time, timezone, and conditions</li>
                      <li>Quick temperature comparison with "Hottest/Coolest" badges</li>
                      <li>Travel stats dashboard for total cities, timezone range, and weather extremes</li>
                      <li>Five-day forecast preview based on selected location</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">2. Detailed Mode</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Full hourly breakdowns and weather trends</li>
                      <li>Interactive location maps</li>
                      <li>In-depth weather metrics for solo analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">3. Long-Term Mode</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li>1- to 6-month forecasting tools</li>
                      <li>Historical weather comparisons</li>
                      <li>Agricultural planning view with a growing season calendar and key farming dates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Design Decisions</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Card-Based Layout: Chosen for scannability across multiple cities</li>
                  <li>Airplane Icons and Travel Messaging: Reinforces the app's travel-first design</li>
                  <li>Color-Badged Extremes: Instantly identify hottest/coldest cities</li>
                  <li>Three-tab Toggle: Makes switching between planning levels intuitive</li>
                  <li>Minimal UI: Prioritized legibility and speed, even under stress (like travel days)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Challenges</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Designing for two user personas with drastically different goals</li>
                  <li>Preventing interface overload while preserving depth</li>
                  <li>Creating a system where travel stats, weather, and time zones naturally converge</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Features Summary</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Multi-location weather tracking</li>
                  <li>Local time & timezone display</li>
                  <li>Quick-view 5-day forecasts</li>
                  <li>In-depth temperature trend breakdowns</li>
                  <li>Long-term planning and agricultural tools</li>
                  <li>Clean, scalable responsive UI</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Impact & Outcome</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Cliimate delivers a balanced experience where global travelers and grounded planners alike can:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Make informed decisions quickly</li>
                  <li>Confidently prepare for both short trips and long seasons</li>
                  <li>Manage multiple destinations from a single, unified interface</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6 italic">
                  "CLiimate isn't just about checking the weather. It's about planning your path—whether you're flying across time zones or sowing seeds for the season ahead."
                </p>
              </div>

              {/* Hero Image Duplicate */}
              <div className="relative w-full h-[80vh] overflow-hidden">
                <Image
                  src="/images/image56.png"
                  alt="Climate App Interface"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            </div>
          </motion.div>
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

