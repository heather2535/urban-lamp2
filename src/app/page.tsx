"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Mail, FileText, ArrowUpRight, Circle, Square, Triangle } from "lucide-react"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "Website Redesign for Hariri Institute",
      description: "Complete redesign and development of the institute's web presence.",
      image: "/image15.png?height=400&width=600",
      categories: ["web", "uiux"],
      tags: ["Web Development", "UI/UX Design"],
      color: "from-purple-100 to-pink-100",
    },
    {
      id: 2,
      title: "ALS App Design with Boston Children's Hospital",
      description: "A web application designed to provide resources and support for individuals with ALS.",
      image: "/images/image1.jpg?height=400&width=600",
      categories: ["uiux", "product"],
      tags: ["UI/UX Design", "Product Design"],
      color: "from-blue-100 to-cyan-100",
    },
    {
      id: 3,
      title: "Designing a DEI Consulting Web Application",
      description: "Brand identity design for a line of sustainable, eco-friendly products.",
      image: "/image4.png?height=400&width=600",
      categories: ["graphic", "branding"],
      tags: ["Graphic Design", "Branding"],
      color: "from-green-100 to-emerald-100",
    },
    {
      id: 4,
      title: "Generative AI Task Force Advice Dashboard",
      description: "A dashboard that provides advice to the Generative AI Task Force.",
      image: "/images/image29.png?height=400&width=600",
      categories: ["uiux", "product"],
      tags: ["UI/UX Design", "Product Design"],
      color: "from-purple-100 to-pink-100",
    },
    {
      id: 5,
      title: "Fuse Networking App",
      description: "A tool that simplifies the internship application process and enhances your job search experiences.",
      image: "/images/image37.png?height=400&width=600",
      categories: ["uiux", "branding"],
      tags: ["UI/UX Design", "Branding"],
      color: "from-cyan-100 to-blue-100",
    },
    {
      id: 6,
      title: "Real-Time Cryptocurrency Tracking Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with news integration and price alerts.",
      image: "/image1.png?height=400&width=600",
      categories: ["web", "product"],
      tags: ["Web Development", "Product Design"],
      color: "from-orange-100 to-red-100",
    },
    {
      id: 7,
      title: "Talentora: A Conversational AI Interview Platform",
      description: "Designing a platform that uses AI to evaluate job applicants.",
      image: "/image5.png?height=400&width=600",
      categories: ["uiux", "web", "branding"],
      tags: ["UI/UX Design", "Web Development"],
      color: "from-indigo-100 to-purple-100",
    },
    {
      id: 8,
      title: "Library Database E-Learning Platform",
      description: "Interactive virtual space for students to showcase their reads in an environment.",
      image: "/image14.png?height=400&width=600",
      categories: ["uiux", "product"],
      tags: ["UI/UX Design", "Product Design"],
      color: "from-emerald-100 to-green-100",
    },
    {
      id: 9,
      title: "Eco-Friendly Product Branding",
      description: "Sustainable product line branding with a focus on environmental consciousness.",
      image: "/images/image2.png?height=400&width=600",
      categories: ["branding", "graphic"],
      tags: ["Branding", "Graphic Design"],
      color: "from-green-100 to-teal-100",
    },
    {
      id: 10,
      title: "Virtual Reality Museum Experience",
      description: "Immersive VR platform for exploring art and historical artifacts.",
      image: "/images/image3.png?height=400&width=600",
      categories: ["3d", "uiux"],
      tags: ["3D Design", "UI/UX Design"],
      color: "from-violet-100 to-purple-100",
    },
    {
      id: 11,
      title: "Smart Home Control Interface",
      description: "Intuitive dashboard for managing smart home devices and automation.",
      image: "/images/image6.png?height=400&width=600",
      categories: ["uiux", "product"],
      tags: ["UI/UX Design", "Product Design"],
      color: "from-blue-100 to-indigo-100",
    },
    {
      id: 12,
      title: "Fitness Tracking Mobile App",
      description: "Comprehensive fitness tracking and workout planning application.",
      image: "/images/image7.png?height=400&width=600",
      categories: ["uiux", "product"],
      tags: ["UI/UX Design", "Product Design"],
      color: "from-red-100 to-orange-100",
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-10 text-orange-300 opacity-20"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            rotate: 360,
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Circle size={60} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-20 text-purple-300 opacity-15"
          animate={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * 0.01,
            rotate: -360,
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Square size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 text-pink-300 opacity-25"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * -0.02,
            rotate: 180,
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Triangle size={35} />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Name with creative typography */}
                <div className="relative">
                  <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none">
                    <span className="block text-black">HEATH</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 relative">
                      ER
                      <motion.div
                        className="absolute -top-4 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                      />
                </span>                         
</h1>
        
                  {/* Decorative line */}
                  <motion.div
                    className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-orange-400 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>

                {/* Subtitle with creative layout */}
                <div className="relative">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-lg lg:text-xl font-medium text-gray-600 tracking-[0.2em] uppercase"
                  >
                    Multidisciplinary
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-2xl lg:text-3xl font-light text-black ml-8"
                  >
                    Designer
                  </motion.p>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="max-w-2xl"
                >
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                    Passionate about creating{" "}
                    <span className="font-medium text-black">purposeful, research-driven products</span> that enhance
                    usability, accessibility, and overall performance. My work combines{" "}
                    <span className="italic text-purple-600">visual polish</span> with a deep understanding of how
                    people think, feel, and use technology.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex flex-wrap gap-6 pt-4"
                >
                  <Link
                    href="/projects"
                    className="group relative px-8 py-4 bg-black text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10 font-medium">View Projects</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                  <Link
                    href="/contact"
                    className="group px-8 py-4 border-2 border-gray-300 text-black rounded-full hover:border-black transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 font-medium">Get in Touch</span>
                    <ArrowUpRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                {/* Background elements */}
                <div className="absolute -inset-8 bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 rounded-[3rem] transform rotate-6"></div>
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-200 via-pink-100 to-purple-200 rounded-[2.5rem] transform -rotate-3"></div>

                {/* Main image container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <Image
                    src="/images/profile.png"
                    alt="Heather's portrait"
                    fill
                    priority
                    className="w-full h-full object-cover object-[center_30%] scale-110 rounded-[2rem] shadow-2xl border-4 border-white filter brightness-105 contrast-105 saturate-90"
                  />

                  {/* Floating accent */}
                  <motion.div
                    className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />

                  {/* Bottom accent */}
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg"
                    animate={{ x: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        {/* Section header */}
        <div className="container mx-auto px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="relative inline-block">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-4">
                FEATURED
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                  PROJECTS
                </span>
              </h2>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-4 h-4 bg-orange-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full opacity-60"
                animate={{ scale: [1.5, 1, 1.5] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>

            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              A curated selection of projects that showcase my approach to
              <span className="italic"> thoughtful design</span> and
              <span className="font-medium"> user-centered solutions</span>.
            </p>
          </motion.div>
      </div>
      
        {/* Projects Grid */}
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {/* Project 1 - Large featured */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-7">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/image1.jpg?height=500&width=700"
                      alt="ALS App Design"
                      width={700}
                      height={500}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <ArrowUpRight className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                    UX/UI Design
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    ALS App Design with Boston Children's Hospital
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A comprehensive redesign of the user interface and experience for a leading mobile application,
                    focusing on intuitive navigation and enhanced user engagement through research-driven design
                    decisions.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["User Research", "Prototyping", "Accessibility", "Mobile Design"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
      </div>

                <Link
                  href="/work/als-app"
                  className="inline-flex items-center text-black font-medium group hover:text-blue-600 transition-colors duration-300"
                >
                  Read Case Study
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Projects 2 & 3 - Side by side */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Project 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl transform -rotate-1 group-hover:rotate-1 transition-transform duration-500"></div>
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/image4.png?height=300&width=500"
                      alt="DEI Consulting"
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-3">
                        Strategy & Research
                      </span>
                      <h3 className="text-xl font-bold mb-3">DEI Consulting for Tech Companies</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Strategic DEI consulting services helping tech companies build more inclusive workplaces through
                        data-driven insights.
                      </p>
                      <Link
                        href="/projects/dei-consulting"
                        className="inline-flex items-center text-black font-medium group-hover:text-purple-600 transition-colors duration-300"
                      >
                        View Project
                        <ArrowUpRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl transform rotate-1 group-hover:-rotate-1 transition-transform duration-500"></div>
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/image15.png?height=300&width=500"
                      alt="Hariri Institute Website"
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-3">
                        Web Design
                      </span>
                      <h3 className="text-xl font-bold mb-3">Website Redesign for Hariri Institute</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        End-to-end product design process for a new SaaS platform, emphasizing user-centered design
                        principles.
                      </p>
                      <Link
                        href="/work/hariri-institute"
                        className="inline-flex items-center text-black font-medium group-hover:text-orange-600 transition-colors duration-300"
                      >
                        View Project
                        <ArrowUpRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
      </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center px-12 py-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View All Projects
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
      </div>
      </section>
    </div>
  )
}
