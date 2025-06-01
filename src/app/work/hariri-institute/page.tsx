"use client";
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing
import { createPortal } from 'react-dom'
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package, ArrowLeft, ArrowUpRight, Circle, Square, Triangle, ExternalLink, ChevronRight } from "lucide-react"
import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"

const project = {
  title: "ALS: App in Collaboration with Boston Children's Hospital",
  date: "December 3, 2024",
  image: "/images/image19.png",
  content: `
  
    
   
   
   



  
    
   
  
 

   
  `,
  tags: ["Web Development", "Product Design", "UI/UX"],
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
      <div className="mt-2 flex gap-2">
        <button onClick={prev} className="px-2 py-1 bg-gray-200 rounded">Prev</button>
        <span>{index + 1} / {images.length}</span>
        <button onClick={next} className="px-2 py-1 bg-gray-200 rounded">Next</button>
      </div>
    </div>,
    container
  );
}

const projectData = {
  id: "als-app",
  title: "ALS App Design with Boston Children's Hospital",
  date: "December 3, 2024",
  tags: ["Web Development", "Product Design", "UI/UX"],
  heroImage: "/images/image19.png",
  role: "Design Strategist, UX Researcher, UI/UX",
  team: ["Heather Davies", "Brian Zeng", "Avdeep Kaur", "Minyang Li"],
  duration: "Sep. 2024 - Dec. 2024 (4 mo. total)",
  goal: "The primary goal was to create a user-friendly platform that helps ALS patients and their caregivers navigate the complex landscape of treatment options. We aimed to bridge the gap between available clinical opportunities and patient awareness, ensuring that users could easily find and understand relevant resources based on their specific needs and circumstances.",
  solution: "We developed an intuitive web application that uses a guided, question-based interface to recommend personalized resources. The solution features a clean, accessible design that accommodates both patients and generalist clinicians, with a scalable backend that allows for easy updates to treatment information and clinical pathways.",
  prototypeUrl: "https://se-bch-als-resource-app-y3wu-pmgqv0yae-cs519team.vercel.app/bookmarks/default",
  overview: "A comprehensive web application designed to provide resources and support for individuals with ALS, focusing on improved user experience and personalized treatment recommendations.",
}

export default function ProjectDetailPage() {
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

          <div className="grid lg:grid-cols-2 gap-6 items-start pb-20">
            {/* Project Info - Left Column */}
            <motion.div
              className="space-y-8"
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
                <span className="inline-block">ALS App</span>{" "}
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                  Design
                </span>
                <br />
                <span className="inline-block">with Boston Children's Hospital</span>
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
                <span className="text-sm">{projectData.date}</span>
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
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative max-w-[800px] mx-auto">
                <Image
                  src={projectData.heroImage}
                  alt="ALS App Design"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
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

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
        >
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                People with ALS (Amyotrophic Lateral Sclerosis) face a fragmented landscape of treatment options. While numerous clinical opportunities exist, most patients are presented with only a limited selection. This web application aims to bridge that gap by providing a guided platform that recommends resources based on user input—empowering patients and non-specialist clinicians to collaboratively explore the most relevant and up-to-date ALS treatments.
              </p>
            </div>

            {/* Goals */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Goals</h2>
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-lg p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          <strong>Support Collaborative Decision-Making:</strong> Create a tool that facilitates conversations between patients and clinicians around available treatment paths.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          <strong>Deliver Personalized Information:</strong> Recommend resources tailored to the patient's stage, symptoms, and needs.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          <strong>Ensure Accessibility and Ease of Use:</strong> Design an intuitive experience that accommodates both patients and generalist clinicians.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          <strong>Enable Sustainable Content Updates:</strong> Equip admins and clinic staff with a scalable backend for managing the latest resources and questions.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Process</h2>
              
              {/* UX Research & Discovery */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">1. UX Research & Discovery</h3>
                <div className="bg-gradient-to-br from-white via-blue-50 via-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Through interviews with ALS patients and primary care physicians, several key challenges were identified:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Patients are overwhelmed by the volume and complexity of treatment information.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Clinicians need a streamlined way to stay current with ALS developments.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Both groups desire a system that is intuitive and light on cognitive load.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Personalization and clarity are essential to build trust and usability.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* User Personas & Journey Mapping */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">2. User Personas & Journey Mapping</h3>
                <div className="bg-gradient-to-br from-white via-blue-50 via-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I developed distinct personas representing:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">A patient navigating treatment stages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">A generalist clinician unfamiliar with ALS-specific options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">An admin updating resources</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Information Architecture & Flow Design */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">3. Information Architecture & Flow Design</h3>
                <div className="bg-gradient-to-br from-white via-blue-50 via-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                  <p className="text-gray-700 leading-relaxed">
                    I created a guided, question-based interface that mimics a "choose-your-own-path" conversation. User inputs dynamically steer the experience, reducing information overload and surfacing relevant recommendations in real time.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/images/image3.png"
                        alt="User Flow Chart"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <p className="text-center text-gray-600 mt-4">Figure 1: User Flow Chart</p>
                </div>
              </div>

              {/* Prototyping */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">4. Prototyping</h3>
                <div className="bg-gradient-to-br from-white via-blue-50 via-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Built low-to-high fidelity prototypes that translated complex clinical decision trees into clean, usable flows.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Prototypes were iteratively tested to ensure they scaled as more branches and content were introduced.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">I used tools like Figma and Typeform to simulate branching logic, with a future transition to a React-based system in mind.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Interaction Design & Developer Handoff */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">5. Interaction Design & Developer Handoff</h3>
                <div className="bg-gradient-to-br from-white via-blue-50 via-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Collaborated with developers to implement accessible UI patterns, including:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">A responsive hamburger menu for simple navigation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Bookmark features using localStorage so users can save resources without creating an account</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Visual consistency for clear affordance and reduced friction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Planned future compatibility with frameworks like ReactFlow for more robust logic management.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Scalability Planning */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">6. Scalability Planning</h3>
                <div className="bg-gradient-to-br from-white via-blue-50 via-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                  <p className="text-gray-700 leading-relaxed">
                    Knowing the project would eventually outgrow Typeform, I designed the interface with modularity and future extensibility in mind—supporting multimedia content, deeper branching logic, and dynamic routing.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Delivered a prototype-ready, scalable interface tailored to ALS patients and generalist clinicians.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Created a structure that supports ongoing clinical updates and collaborative patient-clinician discussions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Implemented progress-saving features to reduce barriers to access, especially for first-time users.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tools Used */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools Used</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Figma</strong> – Interface design & prototyping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Typeform</strong> – Early logic simulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>Next.js</strong> – Front-end framework (planned for dynamic routing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>ReactFlow</strong> – Future tool for custom question logic (<a href="https://reactflow.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">planned</a>)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700"><strong>localStorage API</strong> – Bookmarking and progress saving without account creation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Recommended Next Steps */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Next Steps</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <ol className="space-y-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Custom Logic Builder for Admins</h3>
                      <p className="text-gray-700">Replace Typeform with a visual editor that allows non-technical users to create and update logic flows easily.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Dynamic Routing for Personalization</h3>
                      <p className="text-gray-700">Use Next.js dynamic routes (e.g., [id].tsx) to generate personalized URLs that improve continuity across sessions and devices.</p>
                    </div>
                  </li>
                </ol>
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
            href="/work/dei-consulting"
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