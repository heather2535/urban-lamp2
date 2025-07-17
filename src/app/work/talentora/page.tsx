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
import TalentoraVerticalNavigation from "@/components/talentora-vertical-navigation"
import SectionTitle from "@/components/SectionTitle"

const playfair = Playfair_Display({ subsets: ['latin'] })

const project = {
    title: "Designing A\nConversational AI Interviewing Interface",
    description: "A platform that uses AI to conduct interviews and evaluate candidates.",
    date: "Less stress, better hires, smarter conversations.",
    image: "/image16.png",
    video: "/video1.mov?height=450&width=800", 
    content: `
      <br></br>

    

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Goals</h2>
      <br>
      <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
       <h2>• Automate first-round candidate screening to reduce the time and cost of recruitment.</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2><strong>• Support small to mid-sized businesses</strong> (typically 10–50 employees) without full-scale HR teams.
          </li>   
          <li className="relative">
            <h2><strong>• Deliver intelligent, human-like interview experiences</strong> using real-time AI interactions.
          </li>
          <li className="relative">
            <h2><strong>• Ensure accurate candidate evaluation</strong> with semantic and emotional insight analysis.
          </li>
        </ul>
      </li>
    </ul>
      <br></br>

        <h2 style="font-size: 2em; font-weight: bold;">Process</h2>
      <br>
  
      <h2 style="font-size: 1.5em; font-weight: bold;">1. Job Posting Trigger</h2>
      <h2>
      Companies post jobs via job boards and manage them through their existing Applicant Tracking System (ATS). This triggers Talentora's interview automation workflow.
      </h2>
      <br>
      <div className="relative max-w-[640px] mx-auto my-8">
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
        <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
          <img
            src="/images/image14.png"
            alt="Hariri Institute Design Process"
            className="rounded-2xl w-full h-auto object-cover"
            style={{ maxHeight: "200px" }}
          />
        </div>
      </div>

        <br></br>
      <h2 style="font-size: 1.5em; font-weight: bold;">2. Role & Company Upload</h2>
      <h2>
      Employers upload detailed information about their company and the open role. This data allows Talentora to tailor the interview process to reflect the company's values and job-specific requirements.
      </h2>
      <br>
      <div className="relative max-w-[640px] mx-auto my-8">
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
        <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
          <video
            className="rounded-2xl w-full h-auto"
            controls
            style={{ maxHeight: "200px" }}
          >
            <source src="/videos/video4.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <br></br>

      <h2 style="font-size: 1.5em; font-weight: bold;">3. AI-Driven Interview via Ora Scouts</h2>
      <h2>
      Talentora's AI agents, known as <strong>Ora Scouts</strong>, call applicants and conduct dynamic, conversational interviews using voice AI. These interactions mimic a real first-round interview.
      </h2>
      <br>
      <div className="relative max-w-[640px] mx-auto my-8">
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
        <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
          <video
            className="rounded-2xl w-full h-auto"
            controls
            style={{ maxHeight: "200px" }}
          >
            <source src="/videos/video5.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <br></br>

      <h2 style="font-size: 1.5em; font-weight: bold;">4. Interview Analysis & Scoring</h2>
      <h2>
      Interviews are analyzed for clarity, confidence, relevance, and emotional intelligence using semantic AI tools. Each candidate is scored based on their performance.
      </h2>
      <br></br>
      <h2 style="font-size: 1.5em; font-weight: bold;">5. Candidate Summary Output</h2>
      <h2>
      Employers receive a curated shortlist of top candidates, along with key insights into each applicant's strengths, weaknesses, and cultural fit—making final selection faster and easier.
      </h2>
      <br></br>


      <h2 style="font-size: 2em; font-weight: bold;">Results</h2> 
      <h2>
      Talentora delivers a <strong>streamlined hiring experience</strong> for companies and a modern, intuitive process for candidates. It reduces time-to-hire, improves the quality of shortlisted candidates, and removes the burden of early-stage interviewing for small teams.
      </h2>

      <br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Key Differentiators</h3>
        <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
       <h2><strong>• Compared to HireVue:</strong> Talentora offers a more personalized and less "robotic" AI interaction, ideal for smaller companies.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Compared to HackerRank:</strong> Talentora enables real-time, voice-based interviews, providing deeper insight and better team alignment.
          </li>  
        </ul>
      </li>
    </ul>

    <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Tools Used</h2> 
        <h3 style="font-size: 1.5em; font-weight: bold;">Front-End Web App</h3>

        <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2><span className="absolute -left-4">•</span>
       Frameworks: Next.js, React</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2><span className="absolute -left-8">•</span>
            Purpose: Delivers a fast, modern interface for both employers and applicants.</h2>
          </li>  
        </ul>
      </li>
    </ul>

  
      <br>
      <h2 style="font-size: 1.5em; font-weight: bold;">Applicant Analysis Repository</h2>
      <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2><span className="absolute -left-4">•</span>
       Technology: Hume AI (Semantic & Emotional Analysis)</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2><span className="absolute -left-8">•</span>
            Purpose: Scores candidate responses and generates insightful summaries for decision-makers.</h2>
          </li>  
        </ul>
      </li>
    </ul>

          <br>
      <h2 style="font-size: 1.5em; font-weight: bold;"> Bot Repository</h2>
      <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2><span className="absolute -left-4">•</span>
       Technology: Pipecat (Speech-to-Text, Text-to-Speech LLMs)</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2><span className="absolute -left-8">•</span>
            Purpose: Powers real-time, human-like interview conversations through Ora Scouts.</h2>
          </li>  
        </ul>
      </li>
    </ul>

    <br></br>
     <h2 style="font-size: 2em; font-weight: bold;">Reflection</h2> 
      <h2>
      Talentora is redefining hiring for small and medium-sized businesses. With a focus on <strong>efficiency</strong>, <strong>empathy</strong>, and <strong>intelligence</strong>, the platform helps teams hire smarter—without the high costs or time demands of traditional recruiting. Whether you're an overextended founder, a lean HR manager, or a job seeker looking for a modern interview experience, Talentora offers a powerful solution for building your dream team.
      </h2>
    `,
    tags: [ "Web Development", "Branding", "UI/UX Design"],
}

export default function TalentoraPage() {
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
      <TalentoraVerticalNavigation />

      {/* Top Navigation for Sections */}
      {/* Removed Overview and Problem nav bar as requested */}

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
              className="relative z-10 pt-12 pb-8"
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
              className="relative w-full h-[400px] overflow-hidden -mt-2"
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
                  className="w-full max-w-5xl h-full object-contain rounded-3xl"
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
                <p className="text-sm font-extralight text-gray-600">Heather Davies</p>
                <p className="text-sm font-extralight text-gray-600">Ben Gardiner</p>
                <p className="text-sm font-extralight text-gray-600">Lucas Yoon</p>
                <p className="text-sm font-extralight text-gray-600">Vincent Li</p>
                <p className="text-sm font-extralight text-gray-600">Ruby Chen</p>
                <p className="text-sm font-extralight text-gray-600">Abdel Lokma</p>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">tools</h3>
                <p className="text-sm font-extralight text-gray-600">Figma</p>
                <p className="text-sm font-extralight text-gray-600">React</p>
                <p className="text-sm font-extralight text-gray-600">Adobe Illustrator</p>
                <p className="text-sm font-extralight text-gray-600">Adobe Photoshop</p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">skills</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <p className="text-sm font-extralight text-gray-600">AI Integration</p>
                  <p className="text-sm font-extralight text-gray-600">UI/UX Design</p>
                  <p className="text-sm font-extralight text-gray-600">Product Design</p>
                  <p className="text-sm font-extralight text-gray-600">Web Development</p>
                  <p className="text-sm font-extralight text-gray-600">User Research</p>
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

          

          {/* Content Section */}

          <motion.div
            id="hypothesis"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" px-16 scroll-mt-24"
            onMouseEnter={() => {
              const event = new CustomEvent('sectionHover', { detail: 'inspiration' })
              window.dispatchEvent(event)
            }}
            onMouseLeave={() => {
              const event = new CustomEvent('sectionHover', { detail: null })
              window.dispatchEvent(event)
            }}
          >

          </motion.div>

          <p className="mt-10 px-16 text-lg font-extralight leading-relaxed text-gray-600">
          The purpose of this app is to make it easier for recruiters to engage with candidates and experience a more streamlined, human-first interview process.


</p>
                  <br></br>

        {/* Section Title Example */}
         <div className="px-16">
           <SectionTitle>Hypothesis</SectionTitle>
         </div>
         

         <div className="px-16 -mt-2">
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  As hiring becomes increasingly fast-paced and competitive—especially for small to mid-sized companies—traditional recruiting methods are struggling to keep up. Overwhelmed teams often lack the resources to thoroughly screen every candidate, leading to rushed decisions and missed opportunities.

                              At the same time, candidates are seeking more personalized, transparent, and engaging ways to showcase their skills beyond a résumé.
</p>
<br></br>
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  I wanted to explore how conversational AI could reduce friction in early-stage interviews—making the process more efficient for employers while ensuring candidates feel seen, heard, and fairly evaluated.


</p>


</div>

        <div 
              id="project-overview" 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-4 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'project-overview' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
        ></div>

        <div className="px-16 md:col-span-12">      
        {/* Section Title Example */}
        <SectionTitle>Empathize</SectionTitle>
        </div>

                 <div className="px-16 -mt-2">
                   <p className="text-lg font-extralight leading-relaxed text-gray-600">
                   The first stage of design thinking—empathy—was crucial in shaping the foundation of Talentora. To truly understand the problem, I conducted interviews with both small business employers and active job seekers to uncover the frustrations, habits, and emotional undercurrents driving their hiring experiences, as well as explored competitors in the market.

</p>
                   
                   <br></br>
                   <p className=" text-3xl font-semibold leading-relaxed text-orange-400">
                  primary research
                  </p>
                   
                   <p className="text-lg font-extralight leading-relaxed text-gray-600">
                   The questions I asked included:
                    </p>
                  

                    <ul className="mt-2 text-lg font-extralight leading-relaxed text-gray-600 space-y-1">
                           <li>• How do you currently manage and organize incoming job applications?</li>
                           <li>• What’s the most time-consuming part of your hiring process?</li>
                           <li>• How do you typically conduct first-round interviews, and what challenges arise?</li>
                           <li>• Have you used video interviews or AI tools before? What was your experience like?</li>
                           <li>•How do you evaluate soft skills, communication style, or culture fit in early stages?</li>
                           <li>• What frustrates you the most when screening large volumes of candidates?</li>
                         </ul>


                   
                   <br></br>
                   <p className=" text-3xl font-semibold leading-relaxed text-orange-400">
                  secondary research
                  </p>
                   <h3 className="mt-4 font-sans text-3xl font-normal tracking-wide text-orange-500 border-l-4 border-orange-300 pl-6">
                   "I need a faster way to identify strong candidates without sacrificing quality or candidate experience."
                </h3>
                <br></br>
                   
                   <p className="text-lg font-extralight leading-relaxed text-gray-600">
                   Recruiter responses revealed burnout, inefficiency, and limited visibility beyond résumés. The need for better pre-screening tools that balance fairness with a personal touch became clear. These insights informed the design approach, focusing on reducing recruiter workload while preserving a human-centered interview experience.
                   </p>

                   <br></br>
                   <p className="text-lg font-extralight leading-relaxed text-gray-600">
                       Through <strong>bucketing and affinity mapping</strong> the insights, I formulated areas of the app that could use designing.


                      </p>

                                             
                       {/* Image after key opportunity areas */}
                       <div className="px-8 pt-4 flex justify-start -ml-8">
                         <div className="relative w-full max-w-7xl">
                           <Image
                             src="/images/talentora2.png"
                             alt="Plant Care Research Insights"
                             width={1200}
                             height={900}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 45%' }}
                             priority
                             loading="eager"
                           />
                         
                         </div>

                      

                   

                
            </div>
            <br></br>
 

                         <p className="text-lg font-extralight leading-relaxed text-gray-600">
                         The next stage, in which I started making design decisions and visualizing a solution based on what I learned from my research during the Discovery stage.



                </p>


            <div 
                  id="problem" 
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 "
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

                               {/* Competitive Analysis Section */}
            <div 
              id="research" 
              className=" grid grid-cols-1 md:grid-cols-12 gap-8 mt-6 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'research' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
            >
              <div className=" md:col-span-12">
                <SectionTitle>synthesizing research</SectionTitle>
                <div className="-mt-10 -mt-2">

                <p className=" text-3xl font-semibold leading-relaxed text-orange-400">
                  empathy map
                  </p>

                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  An empathy map is a collaborative tool teams can use to gain a deeper insight into their customers, organized by consumer thinking/feeling, what they’re experiencing and pain points.

                </p>
                
                         {/* Image after key opportunity areas */}
                         <div className="px-8  flex justify-center -ml-8">
                         <div className="relative w-full max-w-3xl">
                           <Image
                             src="/images/talentora4.png"
                             alt="Plant Care Research Insights"
                             width={1600}
                             height={1200}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 45%' }}
                           />
                         
                         </div>
                         </div>
                         <p className="text-lg font-extralight leading-relaxed text-gray-600">
                         The empathy map shows that recruiters and hiring managers feel overwhelmed by high applicant volumes and time-consuming screening, yet are wary of impersonal or biased AI tools. They seek deeper insights into candidates beyond résumés while facing pressure to hire quickly and maintain a strong employer brand. Their pains include inefficiency, burnout, and fear of bad hires, while their goals center on saving time, improving candidate fit, and ensuring a fair, human-centered hiring experience—highlighting the value of solutions like Talentora.

                </p>
                <p className=" pt-4 text-3xl font-semibold leading-relaxed text-orange-400">
                  user personas
                  </p>
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  I created a distinct user persona which helped me align on strategies for moving forward and identify goals that need to be met to provide a good user experience for specific user groups.


                </p>

                                                  
                                                 {/* Image of user persona */}
                         <div className="px-8 pt-4 flex justify-center -ml-8">
                            <div className="relative w-full max-w-3xl">
                            <Image
                              src="/images/talentora5.png"
                              alt="User Persona"
                              width={1200}
                              height={900}
                              className="rounded-lg object-cover object-center"
                              style={{ objectPosition: 'center 45%' }}
                              priority
                              loading="eager"
                            />
                         
                         </div>
                         </div>
                         <br></br>
                  
                
                  
                </div>
              </div>
            </div>

            <div 
              id="problem" 
              className=" grid grid-cols-1 md:grid-cols-12 gap-8 mt-6 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'research' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
            ></div>



                    <SectionTitle>Define</SectionTitle>
                    <div className="-mt-2">
                      <p className="text-lg font-extralight leading-relaxed text-gray-600">
                      Reframing the results from the research phase as “How might we..”(HMW) questions, to turn those into potential problem statements.


                    </p>
                    
                
                      <br></br>
                      <ul className="text-lg font-extralight leading-relaxed text-gray-600 space-y-1">
                           <li>• How might we help recruiters efficiently manage large volumes of applications without sacrificing quality?</li>
                           <li>• How might we help recruiters quickly spot top talent to avoid missing strong candidates?</li>
                           <li>• How might we help recruiters trust AI insights by ensuring transparency and explainability in candidate evaluations?</li>
                           <li>•  How might we ensure the hiring process remains personal and human-centered, even when using AI tools?</li>
                           
                         </ul>
                       
                       <br></br>
                       

                    
                
                       </div>
                       <br></br>
                       <p className="text-lg font-extralight leading-relaxed text-gray-600">
                       An impact-effort matrix helped me to identify the areas that had the highest impact while requiring lower development effort. I valued higher impact as opposed to lower effort for this redesign. I realized that there was an opportunity to integrate these experiences to both increase the ability for users to find relevant groceries and introduce them to new community-driven items throughout their purchasing process.
                       </p>

                

                {/* Image after key opportunity areas */}
              <div className="px-8 flex -mt-10 justify-center">
                          <div className="relative w-full max-w-4xl">
                           <Image
                             src="/images/talentora3.png"
                             alt="Impact Effort Matrix"
                             width={1600}
                             height={1200}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 50%' }}
                           />
                         
                </div>

                
                       

                
       
                        
                      </div>
                  </div>
                </div>
                <p className=" text-3xl font-semibold leading-relaxed text-orange-400">
                  user flow
                  </p>

                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  User stories are used to identify the functional needs, but don’t explore how to actually design the product to meet those functional needs.

                </p>
                    </div>
            



                           {/* Image after key opportunity areas */}
                            <div className="px-8 flex mt-4 justify-center">
                          <div className="relative w-full max-w-3xl">
                           <Image
                             src="/images/talentora6.png"
                             alt="Impact Effort Matrix"
                             width={1600}
                             height={1200}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 50%' }}
                           />
                         
                        </div>
                        </div>

            <div className="px-8 flex mt-4 justify-center">
                          <div className="relative w-full max-w-3xl">
                           <Image
                             src="/images/talentora7.png"
                             alt="Impact Effort Matrix"
                             width={1600}
                             height={1200}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 50%' }}
                           />
                         
                </div>
                </div>
            

            

 
            
            
           
                



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