"use client";
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import { createPortal } from 'react-dom'
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package, ArrowLeft, ArrowUpRight, Circle, Square, Triangle, ExternalLink, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import React from 'react'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

const project = {
  title: "Fuse Networking App",
  description: "A comprehensive platform designed to simplify the internship application process and enhance job search experience for students.",
  date: "January 3, 2024",
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
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">V3 — Motion and Animation</h2>
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
  tags: ["UI/UX Design", "Branding"],
}

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
}

function Slideshow({ images, id }: { images: string[], id: string }) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  if (!mounted) return null;

  const container = document.getElementById(id);
  if (!container) return null;

  return createPortal(
    <div className="mt-4 flex flex-col items-center">
      <img
        src={images[index]}
        alt={`ALS Clinical Decision Tool Design ${index + 1}`}
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="mt-2 flex gap-4 items-center justify-center">
        <button onClick={prev} className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <span className="text-gray-700 dark:text-gray-300">{index + 1} / {images.length}</span>
        <button onClick={next} className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>,
    container
  );
}

export default function FusePage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const allTags = Array.from(new Set(project.tags))

  const filteredProjects = project.tags.filter((tag) => {
    const matchesTag = selectedTag ? tag === selectedTag : true
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
                    className={`text-3xl md:text-5xl max-w-2xl font-normal leading-relaxed text-gray-800 dark:text-white/90 ${playfair.className}`}
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
                    <span className="text-sm font-extralight">{project.date}</span>
                  </motion.div>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap justify-end gap-2 max-w-xl ml-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    {["UI/UX Design", "Mobile App", "User Research", "Prototyping", "Accessibility", "Networking"].map((tag) => (
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

            {/* Hero Video */}
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full">
                <div style={{padding: "42.5% 0 0 0", position: "relative"}}>
                  <iframe 
                    src="https://player.vimeo.com/video/1000863799?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=0&amp;autoplay=1&amp;muted=1&amp;loop=1" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                    style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
                    title="FUSE Final Demo"
                  />
                  <div className="absolute inset-0 bg-gray-800/50 dark:bg-gray-800/50 rounded-[2rem]"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll to Explore */}
          <motion.div
            className="flex flex-col items-center justify-center gap-2 text-gray-500 mt-16 mb-16 relative z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronRight className="w-4 h-4 rotate-90" />
          </motion.div>

          {/* Project Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 "
          >
            <div className="max-w-7xl mx-auto">
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
                    <p className="text-sm font-extralight text-gray-400">Jan. 2024 - May 2024 (4 mo. total)</p>
                  </div>
                  <div>
                    <p className="text-sm font-extralight text-gray-400">Design Strategist, UX Researcher, UI/UX</p>
                  </div>
                  <div>
                    <p className="text-sm font-extralight text-gray-400">Heather Davies</p>
                    <p className="text-sm font-extralight text-gray-400">Solo Project</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Problem & Goal Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>Problem & Goal</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Problem Statement</h4>
                      <p className="text-gray-400 font-extralight">Navigating the internship application process can be frustrating for students. Many encounter outdated listings, disorganization, and a lack of transparency about qualifications and salaries. The frustration is compounded by poor follow-ups and difficulty in finding updated information. Students also struggle with complex, non-intuitive applications and wish for clearer filters. Additionally, there is a strong desire for easier connections with people who can provide referrals and resume support.</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Solution</h4>
                      <p className="text-gray-400 font-extralight">Imagine having a tool that simplifies the internship application process and enhances your job search experience. That tool is Fuse. It's a comprehensive application designed to keep you informed and connected. Fuse features a live application tracker and quick ways to connect with recruiters. Companies are required to list detailed job descriptions, requirements, and company statistics, with reviews available for each job listing. The app includes active/new listing sections, an easy apply feature, and a filtered search option. Additionally, Fuse offers chatrooms tailored to your occupational interests and seamless access to recruiters and mentors, making it an ideal platform for streamlining your job search and networking efforts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Discovery Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>Discovery</h3>
                  <div className="space-y-6">
                    <p className="text-gray-400 font-extralight">Before the meeting, our team conducted a comprehensive SWOT analysis to evaluate existing internship application platforms and identify gaps and opportunities. We also carried out customer interviews to develop detailed personas, capturing students' frustrations and needs. Additionally, we mapped out user journeys to understand their tasks, goals, and pain points. As we analyzed these findings, we identified areas where user needs and design requirements were unclear or misaligned. This prompted us to prepare a set of follow-up questions to refine our approach.</p>
                    <p className="text-gray-400 font-extralight">During our meeting, we reviewed the insights from our research, including the SWOT analysis results, user personas, and journey maps. This collaborative discussion allowed us to address critical aspects of the app design, ensuring that Fuse effectively simplifies the internship application process, improves transparency, and enhances user connectivity with recruiters and mentors.</p>
                    <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6 mt-6">
                      <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Search and Networking</li>
                        <li className="text-gray-700">Applicant portal setup</li>
                        <li className="text-gray-700">Job Listing Management</li>
                        <li className="text-gray-700">Allow applicants to send acceptances and schedule interview times through the app and email.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ideation Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>Ideation</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">User Stories</h4>
                      <p className="text-gray-400 font-extralight mb-6">The client provided three thorough user stories that addressed the entire user journey, involving tasks such as template form creation, sharing, editing, duplicating, and attaching a template to a post for others to complete.</p>
                      <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6">
                        <ol className="list-decimal pl-6 space-y-3">
                          <li className="text-gray-700">As a student, I want to create and save a template form so that I can easily apply to multiple internships with similar requirements.</li>
                          <li className="text-gray-700">As a student, I want to share my template with other students so that they can use it for their applications.</li>
                          <li className="text-gray-700">As a student, I want to edit and duplicate existing templates so that I can customize them for different applications.</li>
                          <li className="text-gray-700">As a student, I want to attach my template to a job posting so that other applicants can use it.</li>
                        </ol>
                      </div>
                    </div>

                    <div className="md:col-span-12">
                      <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>User Flows</h3>
                      <p className="text-gray-400 font-extralight mb-6">For effective management, we divided the flows. I worked in collaboration with another designer on user flow three—a pivotal flow that shapes the template experience within the CRM, and a prominent feature of the product. Initially, I tackled its complexity independently. After completing my version of the flow, I presented the design to my teammate, and together, we refined and improved the aspects that required attention. This approach allowed me to apply my design thinking skills to create a streamlined form creation flow.</p>
                      <div className="relative group mb-8">
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                        <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src="/images/image44.png"
                            alt="User Flow Diagram"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                      <p className="text-right text-gray-600 mt-4 font-medium">User Flow 3: Template Creation and Management</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Sitemap</h4>
                      <p className="text-gray-400 font-extralight mb-6">The sitemap was created to address three main opportunities. It should provide a way for users to easily connect with recruiters and employees from similar roles to expand users network. Next, it provides a way for users to gain transparency on company information and on their application processes. Finally, providing a filtering system for active jobs and specialized roles with up to date information.</p>
                      <div className="relative group mb-8">
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                        <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src="/images/image45.png"
                            alt="Sitemap Diagram"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                      <p className="text-right text-gray-600 mt-4 font-medium">Sitemap: Navigation Structure and Information Architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Design Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>Design</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Wireframes</h4>
                      <p className="text-gray-400 font-extralight mb-6">In our design session, we decided to start all user flows from the Submissions page. Our intent was to enhance clarity with precise language. To achieve this, we made a deliberate change, renaming 'My Applications' to 'Submissions,' making it clear that all types of submissions (applications, surveys, registrations, and more) would be conveniently accessible in one place. This strategic move to centralize submissions, along with features like individual submissions, a template overview tab, and a quick template creation button in the top-right corner, streamlined user interactions for a more cohesive and seamless experience.</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {[46, 47, 48, 49, 50, 51, 52, 53].map((num) => (
                          <div key={num} className="relative">
                            <div className="bg-white rounded-lg overflow-hidden ">
                              <Image
                                src={`/images/image${num}.png`}
                                alt={`Wireframe ${num - 45}`}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-center text-gray-600 mt-4 font-medium">Initial wireframes showing the submission flow and template management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reflection Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white mb-8`}>Reflection</h3>
                  <div className="space-y-6">
                    <p className="text-gray-400 font-extralight">Presenting my prototype with the aim to help users find jobs and internships easily and apply to them quickly.</p>
                    <p className="text-gray-400 font-extralight">The first change I made to my prototype based on user feedback was with visuals. The initial version was looking to bland and old fashioned, so I switched to a visually more appeal look for all changes that you'll see in my prototype.</p>
                    <p className="text-gray-400 font-extralight">The second change I made was with the job filters. Initially users were having trouble finding specific filters so I incorporated a search bar and a filter system that relies on tags or keywords to find relevant job offers.</p>
                    <p className="text-gray-400 font-extralight">A third change I made related to the quick apply feature. Before there was no immediate feedback to the user that the application was submitted, so I added a confirmation page as well as a page where the user can view their pending or past applications.</p>
                    <p className="text-gray-400 font-extralight">Now moving on to my clickable prototype, first you'll be taken to the login and registration pages, where you would enter a new or existing username and password in order to get into the app.</p>
                    <p className="text-gray-400 font-extralight">Once registering or logging in, the next ideal step would be to go to the account page and fill out the information fields that appear, including uploading your resume in order for the quick apply feature to work. So let's go to the filters page and try looking for a job relating to relevant fields. So you would pick the filters you wanted and press 'apply filters' to see job offerings related to your entered fields.</p>
                    <p className="text-gray-400 font-extralight">Next, you should be able to see some job offerings, and be able to click on them to start your application. You will then be able to verify the information entered into you account is correct before hitting the 'quick apply' feature that will automatically fill the application out for you.</p>
                  </div>
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
              href="/work/crypto-dashboard"
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
