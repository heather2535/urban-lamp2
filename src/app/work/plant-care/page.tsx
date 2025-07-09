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
import SectionTitle from "@/components/SectionTitle"

const playfair = Playfair_Display({ subsets: ['latin'] })

const project = {
  title: "Helping urban dwellers nurture healthy indoor plants effortlessly.",
  description: "Provides users with seamless access to accurate, personalized weather insights across multiple locations, including a detailed 5-day forecast.",
  date: "Your leafy roommates just got an upgrade.",
  image: "/images/image60.png",
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
          <h1 className="text-center text-sm text-gray-600 mt-2">Figure 1: This is the Topic Model view of my final dashboard design.</h1>
        </div>
        <br></br>
        <div className="mt-4">
          <img
            src="/images/image31.png"
            alt="ALS Clinical Decision Tool"
            className="rounded-lg shadow-md w-full max-w-3xl"
            style={{ height: "auto" }}
          />
          <h1 className="text-center text-sm text-gray-600 mt-2">Figure 2: And here's the Synopsis Graph view of my final design!</h1>
        </div>
        <div></div>
      </div>
    </div>
    <br></br>
    <h3 className="text-3xl font-bold text-gray-900 mb-6">V3 — Motion and Animation</h3>
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
  tags: ["AI Diagnostics", "Plant Care", "Mobile App", "User Research", "UI/UX Design", "Accessibility"],
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
      <ProjectVerticalNavigation />

      {/* Top Navigation for Sections */}
      {/* Removed Overview and Problem nav bar as requested */}

      <main className="relative lg:ml-64">
        <article className="prose lg:prose-xl">
          {/* Back Button */}
          

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
              className="relative z-10 pt-36 pb-8"
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
                    <span className="text-gray-900">
                      {project.title}
                    </span>
                  </motion.h1>

                  <motion.p
                    className={`${playfair.className} text-3xl md:text-5xl max-w-2xl font-normal leading-relaxed text-gray-800`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-3 text-gray-800"
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
              className="relative w-full h-[600px] overflow-hidden -mt-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex justify-start">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="w-full max-w-6xl h-full object-contain rounded-3xl"
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
            className="py-16 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Role */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">role</h3>
                <p className="text-sm font-extralight text-gray-600">Design Strategist, UX Researcher, UI/UX</p>
              </div>

              {/* Team */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">team</h3>
                <p className="text-sm font-extralight text-gray-600">Individual</p>

              </div>

              {/* Tools */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">tools</h3>
                <p className="text-sm font-extralight text-gray-600">Figma</p>
                <p className="text-sm font-extralight text-gray-600">Adobe XD</p>
                <p className="text-sm font-extralight text-gray-600">Protopie</p>
                <p className="text-sm font-extralight text-gray-600">Miro</p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">skills</h3>
                <p className="text-sm font-extralight text-gray-600">AI Diagnostics</p>
                <p className="text-sm font-extralight text-gray-600">Plant Care</p>
                <p className="text-sm font-extralight text-gray-600">Mobile App</p>
                <p className="text-sm font-extralight text-gray-600">User Research</p>
                <p className="text-sm font-extralight text-gray-600">UI/UX Design</p>
                <p className="text-sm font-extralight text-gray-600">Accessibility</p>
              </div>
            </div>
          </motion.div>

          {/* Diagonal Line Divider */}
          <div className="flex justify-center -py-4 -mt-10">
            <div className="flex space-x-3">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-8 bg-orange-300 transform rotate-45"
                />
              ))}
            </div>
          </div>

         

          <motion.div
            id="project-overview"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 scroll-mt-24"
            onMouseEnter={() => {
              const event = new CustomEvent('sectionHover', { detail: 'inspiration' })
              window.dispatchEvent(event)
            }}
            onMouseLeave={() => {
              const event = new CustomEvent('sectionHover', { detail: null })
              window.dispatchEvent(event)
            }}
          >
                {/* Section Title Example */}
                <SectionTitle>Inspiration</SectionTitle>

          
                <div className="mt-2">
                  <p className="text-md font-extralight leading-relaxed text-gray-600">
                  PlantCare AI began as a simple question: what if your houseplants had their own AI caretaker? In an era where people are more invested in their indoor greenery than ever before—especially in dense urban environments—many are discovering that keeping plants alive and thriving is harder than it looks. Whether it's remembering to water on time, diagnosing mysterious leaf spots, or figuring out the best light placement in a small apartment, the responsibilities of plant care can quickly overwhelm even the most enthusiastic plant parent.                  
                  </p>
                  <br></br>
                  <p className="text-md font-extralight leading-relaxed text-gray-600">
                  I designed PlantCare AI as a mobile-first experience that brings together AI-driven diagnostics, personalized care scheduling, and community support into one seamless interface. It's not just a plant care app; it's a full-time, photo-based plant companion that lives in your pocket.
                  </p>
                </div>
              
            
            <div 
              id="problem" 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'problem' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
            >
              <div className="md:col-span-12">
                {/* Section Title Example */}
                <SectionTitle>Problem</SectionTitle>
                <div className="mt-2">
                  <p className="text-md font-extralight leading-relaxed text-gray-600">
                  The core problem I wanted to address was the feeling of helplessness many users experience when their plants start to decline. Most plant care apps offer either generic tips or static watering reminders, but they don't account for the actual condition of the plant in real time. Worse still, users often don't know what they're doing wrong until it's too late. This leads to discouragement, disengagement, and sometimes, giving up on plant care altogether. Many of these users live in cities, often with unpredictable light conditions, busy schedules, and little access to expert guidance.
                  </p>
                  
                  <br></br>
                  
                  {/* Image before design challenge */}
                  <div className="flex justify-start my-8">
                    <div className="relative w-full max-w-7xl">
                      <Image
                        src="/images/plant-care7.png"
                        alt="Plant Care App Interface"
                        width={1600}
                        height={1200}
                        className="rounded-lg"
                      />
                      <p className="text-sm font-extralight leading-relaxed text-gray-600 mt-2 text-center">
                        User feedback annotations highlighting key usability pain points during early testing.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-md font-extralight leading-relaxed text-gray-600">
                  Thus I explored:
                  </p>
                                      <h3 className="font-sans text-3xl font-normal tracking-wide text-orange-500 border-l-4 border-orange-300 pl-6 py-4">How might we help indoor plant owners diagnose, care for, and feel confident about their plants through a personalized, proactive experience?</h3>

                </div>
                
                <div 
                  id="research" 
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 scroll-mt-22"
                  onMouseEnter={() => {
                    const event = new CustomEvent('sectionHover', { detail: 'research' })
                    window.dispatchEvent(event)
                  }}
                  onMouseLeave={() => {
                    const event = new CustomEvent('sectionHover', { detail: null })
                    window.dispatchEvent(event)
                  }}
                >
                  <div className="md:col-span-12">
                    <SectionTitle>Research</SectionTitle>
                    <div className="mt-2">
                      <p className="text-md font-extralight leading-relaxed text-gray-600">
                        As <strong>indoor gardening surged in popularity</strong>—especially among <strong>urban dwellers seeking connection, calm, or cleaner air</strong>—many new plant owners found themselves frustrated by the <strong>complexity of plant care</strong>. What starts as joy often turns to <strong>uncertainty when symptoms like yellowing leaves or drooping stems appear without explanation</strong>. Through <strong>surveys, interviews, and contextual inquiry with 8 plant owners living in small apartments</strong>, I explored this <strong>emotional journey and the knowledge gaps that prevent confident plant care</strong>.
                      </p>
                      <br></br>
                                                                    <p className="text-md font-extralight leading-relaxed text-gray-600">
                        Many of these users shared a <strong>common experience</strong>: they <strong>cared deeply about their plants</strong>, but lacked the <strong>time, expertise, or guidance to nurture them effectively</strong>. They expressed a desire for <strong>reassurance, structure, and quick help</strong>—especially when <strong>noticing early signs of distress in their plants</strong>.
                       </p>
                       
                       <div className="mt-6">
                         <p className="text-md font-extralight leading-relaxed text-gray-600 mb-4">
                           Some notable user insights included:
                         </p>
                         <ul className="text-md font-extralight leading-relaxed text-gray-600 space-y-2 mb-6">
                           <li>• "I can tell something's wrong, but I don't know what to search for."</li>
                           <li>• "I downloaded a plant app but forgot to open it again."</li>
                           <li>• "Sometimes I'm watering too much, sometimes not enough—I can't tell."</li>
                           <li>• "I wish someone could just look at my plant and tell me what to do."</li>
                           <li>• "I love my plants, but I feel guilty when they start dying."</li>
                         </ul>
                         
               
                       </div>
                       
                       {/* Image after key opportunity areas */}
                       <div className="flex justify-start my-8 -ml-8">
                         <div className="relative w-full max-w-7xl">
                           <Image
                             src="/images/plant-care8.png"
                             alt="Plant Care Research Insights"
                             width={1600}
                             height={1200}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 45%' }}
                           />
                           <p className="text-sm font-extralight leading-relaxed text-gray-600 mt-2 text-center">
                             Research insights and user journey mapping from early interviews and surveys.
                           </p>
                         </div>
                
                       </div>
                       <p className="text-md font-extralight leading-relaxed text-gray-600 mb-4">
                           Through thematic coding and affinity mapping, I identified several key opportunity areas:
                         </p>
                         <ul className="text-md font-extralight leading-relaxed text-gray-600 space-y-2">
                           <li>• Users need real-time, image-based diagnostics they can trust.</li>
                           <li>• Care advice must be simple, personalized, and actionable—not generic.</li>
                           <li>• Motivation increases when users can track progress and see improvement.</li>
                           <li>• Many feel alone in their plant care struggles and seek community validation or support.</li>
                         </ul>
                        
                      </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Competitive Analysis Section */}
            <div 
              id="competitive-analysis" 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'competitive-analysis' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
            >
              <div className="md:col-span-12">
                <SectionTitle>Competitive Analysis</SectionTitle>
                <div className="mt-2">
                  <p className="text-md font-extralight leading-relaxed text-gray-600">
                    Competitive analysis content will go here. This section will contain detailed analysis of existing plant care apps and their features, identifying gaps and opportunities in the market.
                  </p>
                  <br></br>
                  <p className="text-md font-extralight leading-relaxed text-gray-600">
                    Additional content to make this section more detectable for scroll navigation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sketching Section */}
            <div 
              id="sketching" 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'sketching' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
            >
              <div className="md:col-span-12">
                <SectionTitle>Sketching</SectionTitle>
                <div className="mt-2">
                  <p className="text-md font-extralight leading-relaxed text-gray-600">
                    Sketching content will go here. This section will showcase the initial ideation and sketching process, including early concepts and design explorations.
                  </p>
                  <br></br>
                  <p className="text-md font-extralight leading-relaxed text-gray-600">
                    Additional content to make this section more detectable for scroll navigation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* LoFi Wireframing Section */}
            <div 
              id="lofi-wireframing" 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'lofi-wireframing' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
            >
              <div className="md:col-span-12">
                <SectionTitle>LoFi Wireframing</SectionTitle>
                <div className="mt-2">
                  <p className="text-md font-extralight leading-relaxed text-gray-600">
                    LoFi wireframing content will go here. This section will display low-fidelity wireframes and early interface designs, showing the evolution from sketches to digital mockups.
                  </p>
                  <br></br>
                  <p className="text-md font-extralight leading-relaxed text-gray-600">
                    Additional content to make this section more detectable for scroll navigation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Refining & Prototyping Section */}
            <div 
              id="refining-prototyping" 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'refining-prototyping' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
            >
              <div className="md:col-span-12">
                <SectionTitle>Refining & Prototyping</SectionTitle>
                <div className="mt-2">
                  <p className="text-md font-extralight leading-relaxed text-gray-600">
                    Refining & prototyping content will go here. This section will show the iterative refinement process and high-fidelity prototyping, including user testing insights and design iterations.
                  </p>
                  <br></br>
                  <p className="text-md font-extralight leading-relaxed text-gray-600">
                    Additional content to make this section more detectable for scroll navigation.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              id="solution" 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'solution' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
            >
              <div className="md:col-span-12">
                {/* Section Title Example */}
                <SectionTitle>Solution</SectionTitle>
                <div className="mt-2">
                <p className="text-md font-extralight leading-relaxed text-gray-600">
                The solution was PlantCare AI—a mobile app that leverages the power of AI to scan, diagnose, and recommend care strategies based on an actual photo of your plant. Users simply take a snapshot of a leaf or stem using their phone camera, and the AI instantly detects common problems such as overwatering, underwatering, pests, nutrient deficiencies, or fungal infections. Each diagnosis comes with clear, actionable treatment steps, making it easy to address issues before they spiral out of control.
                </p>
                <br></br>
                <br></br>

                <div className="flex justify-center">
                  <div className="w-full max-w-[1400px] px-4">
                    <div className="bg-gray-100 rounded-xl p-16 overflow-hidden relative">
                      <p className="absolute top-6 left-6 text-sm text-gray-600 font-extralight tracking-wider uppercase">
                        Preview of final mobile screens
                      </p>
                      <div className="flex gap-0 animate-scroll mt-8">
                        <div className="flex gap-0">
                          <div className="relative w-[calc(100vw/5)] aspect-[16/9] min-h-[700px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/plant-care1.png"
                              alt="Plant Care Feature 1"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="relative w-[calc(100vw/5)] aspect-[16/9] min-h-[700px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/plant-care2.png"
                              alt="Plant Care Feature 2"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="relative w-[calc(100vw/5)] aspect-[16/9] min-h-[700px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/plant-care3.png"
                              alt="Plant Care Feature 3"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="relative w-[calc(100vw/5)] aspect-[16/9] min-h-[700px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/plant-care4.png"
                              alt="Plant Care Feature 4"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="relative w-[calc(100vw/5)] aspect-[16/9] min-h-[700px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/plant-care5.png"
                              alt="Plant Care Feature 5"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="relative w-[calc(100vw/5)] aspect-[16/9] min-h-[700px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/plant-care6.png"
                              alt="Plant Care Feature 6"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                        {/* Duplicate the images for seamless scrolling */}
                        <div className="flex gap-0">
                          <div className="relative w-[calc(100vw/5)] aspect-[16/9] min-h-[700px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/plant-care1.png"
                              alt="Plant Care Feature 1"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="relative w-[calc(100vw/5)] aspect-[16/9] min-h-[700px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/plant-care2.png"
                              alt="Plant Care Feature 2"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="relative w-[calc(100vw/5)] aspect-[16/9] min-h-[700px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/plant-care3.png"
                              alt="Plant Care Feature 3"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="relative w-[calc(100vw/5)] aspect-[16/9] min-h-[700px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/plant-care4.png"
                              alt="Plant Care Feature 4"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="relative w-[calc(100vw/5)] aspect-[16/9] min-h-[700px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/plant-care5.png"
                              alt="Plant Care Feature 5"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="relative w-[calc(100vw/5)] aspect-[16/9] min-h-[700px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/plant-care6.png"
                              alt="Plant Care Feature 6"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                  {/* Video Section */}
                  <div id="features" className="my-8 max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-4 items-start">
                      <div className="lg:col-span-4">
                        <div className="relative w-[280px] h-[500px]">
                          <video
                            src="/video10.mov"
                            className="absolute inset-0 w-full h-full rounded-lg mix-blend-multiply"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        </div>
                      </div>
                      <div className="lg:col-span-8 pt-32">
                        <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900">Growth Tracking & Insights</h3>
                        <ul className="text-md font-extralight leading-relaxed text-gray-600">
                        <br></br>
                        <li>• By uploading weekly photos, users allow the AI to detect small shifts in the plant's appearance—like early leaf yellowing or hidden pest damage. </li>
                        <li>• These insights help users respond to problems before they escalate.</li>

                          </ul>
                      </div>
                    </div>
                  </div>

                  {/* Video Section */}
                  <div className="my-8 max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-4 items-start ">
                      <div className="lg:col-span-8 pt-32">
                        <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900">AI Plant Health Scanner</h3>
                      <br></br>
                        <ul className="text-md font-extralight leading-relaxed text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Users can take a photo of a leaf or stem, and the app immediately identifies issues such as overwatering, underwatering, pests, nutrient deficiencies, or diseases. </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>The AI then delivers a categorized diagnosis along with clear, actionable treatment steps that even beginners can follow with confidence.</span>
                          </li>
                         
                        </ul>
                      </div>
                      <div className="lg:col-span-4">
                        <div className="relative w-[280px] h-[500px]">
                          <video
                            src="/video11.mov"
                            className="absolute inset-0 w-full h-full rounded-lg mix-blend-multiply"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                       {/* Video Section */}
                       <div className="my-8 max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-4 items-start pb-20">
                      <div className="lg:col-span-4">
                        <div className="relative w-[280px] h-[500px]">
                          <video
                            src="/video12.mov"
                            className="absolute inset-0 w-full h-full rounded-lg mix-blend-multiply"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        </div>
                      </div>
                      <div className="lg:col-span-8 pt-32">
                        <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-900">Community & Expert Chat</h3>
                        <ul className="text-md font-extralight leading-relaxed text-gray-600">
                        <br></br>
                        <li>• PlantCare AI compiles recent health data and translates it into suggested questions or topics for community discussion. </li>
                        <li>• Users can engage with plant experts or share experiences with other plant lovers in an Instagram-style feed, making the experience social and supportive.</li>

                          </ul>
                      </div>
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
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
             
           
          </motion.div>
        </article>
      </main>

      {/* Project Navigation */}
      <ProjectNavigation currentProjectHref="/work/plant-care" />
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

