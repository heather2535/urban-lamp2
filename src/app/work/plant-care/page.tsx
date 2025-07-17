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
    <h3 className="text-3xl font-bold text-gray-600 mb-6">V3 — Motion and Animation</h3>
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
              className="relative z-10 pt-10 pb-8"
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
              className="relative w-full h-[600px] overflow-hidden -mt-40"
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
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <p className="text-sm font-extralight text-gray-600">AI Diagnostics</p>
                  <p className="text-sm font-extralight text-gray-600">User Research</p>
                  <p className="text-sm font-extralight text-gray-600">Plant Care</p>
                  <p className="text-sm font-extralight text-gray-600">UI/UX Design</p>
                  <p className="text-sm font-extralight text-gray-600">Mobile App</p>
                  <p className="text-sm font-extralight text-gray-600">Accessibility</p>
                </div>
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

          
                <div className="-mt-2">
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  PlantCare AI began as a simple question: what if your houseplants had their own AI caretaker? In an era where <strong>people are more invested in their indoor greenery</strong> than ever before—especially in dense urban environments—many are discovering that keeping plants alive and <strong>thriving is harder than it looks</strong>. Whether it's remembering to water on time, diagnosing mysterious leaf spots, or figuring out the best light placement in a small apartment, the responsibilities of plant care can quickly overwhelm even the most enthusiastic plant parent.                  
                  </p>
                  <br></br>
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  I designed PlantCare AI as a mobile-first experience that brings together <strong>AI-driven diagnostics, personalized care scheduling, and community support</strong> into one seamless interface. It's not just a plant care app; it's a full-time, photo-based plant companion that lives <strong>in your pocket</strong>.
                  </p>
                </div>
              
            
            <div 
              id="problem" 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-4 scroll-mt-24"
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


                <div className="-mt-2">
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  The core problem I wanted to address was the feeling of helplessness many users experience when <strong>their plants start to decline</strong>. Most plant care apps offer either generic tips or static watering reminders, <strong>but they don't account for </strong>the actual condition of the plant in real time. Worse still, <strong>users often don't know what they're doing wrong</strong> until it's too late. This leads to discouragement and <strong>disengagement</strong>. Many of these users live in cities, often with unpredictable light conditions, busy schedules, and little access to expert guidance.
                  </p>
                  
                  <br></br>
                  
                  {/* Image before design challenge */}
                  <div className="-mt-8 flex justify-start ">
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
                  
                  <p className="mt-6 text-lg font-extralight leading-tight text-gray-600">
                  Thus I explored:
                  </p>
                                      <h3 className="mt-4 font-sans text-3xl font-normal tracking-wide text-orange-500 border-l-4 border-orange-300 pl-6">How might we help indoor plant owners diagnose, care for, and feel confident about their plants through a personalized, proactive experience?</h3>

                </div>
                
                <div 
                  id="research" 
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 scroll-mt-4"
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
                    <div className="-mt-2">
                      <p className="text-lg font-extralight leading-relaxed text-gray-600">
                        As indoor gardening surged in popularity —especially among urban dwellers seeking connection, calm, or cleaner air —many new plant owners found themselves frustrated by the <strong>complexity of plant care</strong>. What starts as joy often turns to <strong>uncertainty </strong>when symptoms like yellowing leaves or drooping stems appear without explanation. Through <strong>surveys, interviews, and contextual inquiry</strong> with 8 plant owners living in small apartments, I explored this emotional journey and the <strong>knowledge gaps</strong> that prevent confident plant care.
                      </p>
                      <br></br>
                      <p className="text-lg font-extralight leading-relaxed text-gray-600">
                        Many of these users shared a <strong>common experience</strong>: they cared deeply about their plants, but <strong>lacked the time, expertise, or guidance</strong> to nurture them effectively. They expressed a desire for <strong>reassurance, structure, and quick help</strong>—especially when <strong>noticing early signs of distress in their plants</strong>.
                       </p>
                       
                       <div className="mt-6">
                         <p className="text-lg font-extralight leading-relaxed text-gray-600 mb-4">
                           Some notable user insights included:
                         </p>
                         <ul className="text-lg font-extralight leading-relaxed text-gray-600 space-y-2 ">
                           <li>• "I can tell something's wrong, but I don't know what to search for."</li>
                           <li>• "I downloaded a plant app but forgot to open it again."</li>
                           <li>• "Sometimes I'm watering too much, sometimes not enough—I can't tell."</li>
                           <li>• "I wish someone could just look at my plant and tell me what to do."</li>
                           <li>• "I love my plants, but I feel guilty when they start dying."</li>
                         </ul>

                         <p className="text-lg font-extralight leading-relaxed text-gray-600 mt-4 ">
                         Through <strong>bucketing and affinity mapping </strong>the insights, I formulated areas of the app that I could begin designing.
                         </p>

                       </div>
                       
                       {/* Image after key opportunity areas */}
                       <div className="flex justify-start -ml-8">
                         <div className="relative w-full max-w-7xl">
                           <Image
                             src="/images/plant-care8.png"
                             alt="Plant Care Research Insights"
                             width={1600}
                             height={1200}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 45%' }}
                           />
                         
                         </div>
                
                       </div>
                       <p className="text-lg font-extralight leading-relaxed text-gray-600 mb-4">
                           Through thematic coding and affinity mapping, I identified several key opportunity areas:
                         </p>
                         <ul className="text-lg font-extralight leading-relaxed text-gray-600 space-y-1">
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
              className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6 scroll-mt-4"
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
                <div className="-mt-2">
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  I examined PlantSnap, PictureThis, and Planta to see how existing successful apps focusing on AI-driven diagnostics, personalized care, and community support for indoor plant owner compared to PlantCare AI.
                  </p>
                  <br></br>
                  <p className="ml-6 text-3xl font-semibold leading-relaxed text-orange-400">
                  search
                  </p>
                  
                  {/* Image after Captures real-time */}
                  <div className="flex justify-start ">
                    <div className="relative w-full max-w-7xl">
                      <Image
                        src="/images/plant-care9.png"
                        alt="Real-time Plant Monitoring"
                        width={1600}
                        height={1200}
                        className="rounded-lg"
                      />
                      
                    </div>
                  </div>
                  
                  <br></br>
                  <p className="-mt-6 ml-6 text-3xl font-semibold leading-relaxed text-orange-400">
                  community engagement
                  </p>
                  
                  {/* Image after Engagement and Motivation */}
                  <div className="flex justify-start ">
                    <div className="relative w-full max-w-7xl">
                      <Image
                        src="/images/plant-care10.png"
                        alt="User Engagement Features"
                        width={1600}
                        height={1200}
                        className="rounded-lg object-cover"
                        style={{ objectPosition: 'center 45%' }}
                      />
                      
                      <p className="text-lg font-extralight leading-relaxed text-gray-600 mt-6">
                        With this comparison, I also began to form <strong>assumptions about what different users value </strong> and how that shapes each app's design choices. Users of apps like PlantSnap and PictureThis seem to prioritize accuracy, speed, and confidence in <strong>solving urgent problems</strong>—suggesting that these users may be <strong>beginners or busy individuals</strong> looking for quick answers rather than deep learning. In contrast, Planta and PlantCare AI cater to users who want a more <strong>holistic, long-term relationship with their plants</strong>. These users likely value progress tracking, personalized advice, and community connection, <strong>not just reactive</strong> care. This insight guided my own design decisions toward making PlantCare AI feel like a <strong>trustworthy, empathetic companion</strong>—one that not only solves problems but also <strong>celebrates progress and nurtures confidence</strong>.
                      </p>
                     
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            
            {/* Sketching Section */}
            <div 
              id="sketching" 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6 scroll-mt-4"
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
                <div className="-mt-2">
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  With a clear understanding of users’ emotional pain points—uncertainty, guilt, and isolation—I began sketching out key interaction points where reassurance and simplicity could be built into the experience. I explored layouts that prioritized image-based diagnosis, streamlined care actions, and progress feedback. One of my primary goals during sketching was to reduce cognitive load while maintaining a sense of companionship. I iterated on ways to make AI recommendations feel like gentle nudges rather than commands, experimenting with visual metaphors like glowing indicators, chat-style prompts, and photo-first onboarding to make the app feel inviting from the first tap.
                  </p>
                  <br></br>
                 


    
                </div>
              </div>
            </div>

            {/* Image after Captures real-time */}
            <div className="flex justify-start ">
                    <div className="relative w-full -mt-6 max-w-7xl">
                      <Image
                        src="/images/plant-care11.png"
                        alt="Sketching Wireframes"
                        width={1600}
                        height={1200}
                        className="rounded-lg"
                      />
                      
                    </div>
                  </div>

                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  My initial sketches focused on creating an experience that felt as simple and reassuring as texting a friend about your plant. For example:
                  </p>

                  <ul className="text-lg font-extralight leading-relaxed text-gray-600 space-y-1">
                    <li>• <strong>Photo-first diagnosis </strong>— placing the camera and gallery upload as the primary action on the home screen so users could get instant feedback without digging through menus.</li>
                    <li>• <strong>Conversational results</strong> — presenting diagnoses and care instructions in friendly, chat-style cards rather than dense text blocks.</li>
                    <li>• <strong>Progress tracking</strong> — showing users how their plant is doing over time with a simple progress bar and emoji indicators.</li>
                    <li>• <strong>Community support</strong> — featuring a chat feature where users can share their plant care journeys and get advice from other plant lovers.</li>
                  </ul>
                  <br></br>
                  
            
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
                <div className="mt-1">
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  I then iterated on the wireframes with a focus on how AI-driven insights, actionable fixes, and visual feedback loops could create a more anchored, habit-forming experience.
                  </p>
                  <br></br>
                  
                </div>
              </div>
            </div>

             {/* Image after Captures real-time */}
             <div className="flex justify-start ">
                    <div className="relative w-full -mt-6 max-w-full">
                      <Image
                        src="/images/plant-care12.png"
                        alt="Sketching Wireframes"
                        width={1600}
                        height={1200}
                        className="rounded-lg"
                      />
                      
                    </div>
                  </div>

                  <div className="mt-1">
                  <ul className="text-lg font-extralight leading-relaxed text-gray-600 space-y-1">
                    <li>• Created a camera Viewfinder Interface with professional camera UI with grid lines, focus corners, and controls.</li>
                    <li>• Incorporated large image display with overlay annotations and health indicators to accentruate photo-centric results. L</li>
                    <li>• Each slide tells a different part of the plant care story</li>
                    <li>• Added Interactive task list with completion buttons, shows overdue warnings</li>
                  </ul>
                  <br></br>
                 
                </div>
                <br></br>
                   
    {/* Image after Captures real-time */}
                <div className="flex justify-center ">
                    <div className="relative w-full -mt-6 max-w-3xl">
                      <Image
                        src="/images/plant-care13.png"
                        alt="Sketching Wireframes"
                        width={1600}
                        height={1200}
                        className="rounded-lg"
                      />
                      
                    </div>
                  </div>

                  <div className="mt-1">
                  <ul className="text-lg font-extralight leading-relaxed text-gray-600 space-y-1">
                    <li>• Introduced a processing animation, using progress indicators for visual feedback during AI analysis. </li>
                    <li>• Included interactive controls such as flash, zoom, and focus controls for better user experience.</li>
                   
                  </ul>
                  <br></br>
                 
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
                <div className="mt-1">
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
                <div className="mt-1">
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
                        <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-600">Growth Tracking & Insights</h3>
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
                        <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-600">AI Plant Health Scanner</h3>
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
                        <h3 className="font-mono text-3xl font-normal tracking-wide text-gray-600">Community & Expert Chat</h3>
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

