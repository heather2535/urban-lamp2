"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Circle, Square, Triangle, Award, Users, Coffee, Heart } from "lucide-react"
import { useRef } from "react"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

const skills = [
  { name: "UI/UX Design", level: 95, color: "from-blue-400 to-cyan-500" },
  { name: "Graphic Design", level: 90, color: "from-purple-400 to-pink-500" },
  { name: "Branding", level: 88, color: "from-orange-400 to-red-500" },
  { name: "Web Development", level: 85, color: "from-green-400 to-emerald-500" },
  { name: "Product Design", level: 92, color: "from-indigo-400 to-purple-500" },
  { name: "Research", level: 87, color: "from-pink-400 to-rose-500" },
]

const achievements = [
  {
    icon: Award,
    title: "Design Excellence Award",
    description: "Recognized for outstanding contribution to accessible design practices",
    year: "2024",
  },
  {
    icon: Users,
    title: "50+ Projects Completed",
    description: "Successfully delivered projects for startups to Fortune 500 companies",
    year: "2023",
  },
  {
    icon: Coffee,
    title: "Design Mentor",
    description: "Mentoring emerging designers through ADPList and local design communities",
    year: "2023",
  },
  {
    icon: Heart,
    title: "Accessibility Advocate",
    description: "Championing inclusive design practices across all projects",
    year: "Ongoing",
  },
]

const tools = [
  "Figma",
  "Adobe Creative Suite",
  "Sketch",
  "Principle",
  "Framer",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
]

export default function AboutPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 60])
    
  return (
    <div className="min-h-screen bg-white dark:bg-[#18181b] pt-24 pb-16" ref={containerRef}>
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-32 left-20 text-orange-300 opacity-15"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Circle size={90} />
        </motion.div>
        <motion.div
          className="absolute top-2/3 right-16 text-purple-300 opacity-20"
          animate={{ rotate: -360, y: [-25, 25, -25] }}
          transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Square size={65} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 text-pink-300 opacity-25"
          animate={{ rotate: 180, x: [-15, 15, -15] }}
          transition={{ duration: 13, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Triangle size={50} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
       

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32 pt-48 pb-24 px-6 md:px-8 lg:px-12"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/5">
              <div className="relative inline-block">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-6">
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
                    className="text-gray-600 dark:text-gray-400"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h1 className={`${playfair.className} text-3xl md:text-4xl font-normal mb-2 tracking-wide text-gray-900 dark:text-white`}>About me.</h1>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-8 -left-10 w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-8 w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-60"
                  animate={{ scale: [1.5, 1, 1.5] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              <h1 className={`${playfair.className} text-3xl md:text-4xl font-normal mb-12 tracking-wide text-gray-600 dark:text-gray-400 max-w-xl`}>
                Product designer crafting meaningful experiences through research, empathy, and creativity.
              </h1>

              <p className="text-md max-w-2xl mx-auto mb-4 font-extralight leading-relaxed text-gray-400">
              Growing up, I saw how often people around me struggled to make sense of systems that weren't designed with them in mind—forms that were hard to read, interfaces that felt cold or confusing, or everyday moments that could've been easier with just a little more thoughtfulness. I've always been drawn to clarity and beauty, but more than anything, I've been drawn to making people feel understood. That's what led me to design.

              </p>
              <br></br>

              <p className="text-md max-w-2xl mx-auto mb-4 font-extralight leading-relaxed text-gray-400">
              I studied Graphic Design at Boston University, where I developed not only a deep appreciation for typography, color, and composition, but also a mindset rooted in empathy and intention. For me, design isn't just about visuals—it's about building trust, guiding people through experiences, and communicating something bigger than words. I wanted to learn how to make work that didn't just look good, but that helped people feel capable, curious, and seen.
              </p>
              <br></br>

              <p className="text-md max-w-2xl mx-auto mb-4 font-extralight leading-relaxed text-gray-400">
              Over time, I found myself especially drawn to projects that required clarity—projects that translated complexity into simplicity, that helped someone find the right path, or that invited users into something they might've otherwise felt shut out of. I care deeply about the details because I know the details are what make something feel intuitive, polished, and real.
              </p>
              <br></br>

              <p className="text-md max-w-2xl mx-auto mb-4 font-extralight leading-relaxed text-gray-400">
              Design gives me a way to problem-solve with creativity, to listen deeply and respond with precision. I'm driven by work that's both functional and emotional—design that doesn't just solve problems, but that makes people feel at ease, empowered, or even inspired.


              </p>
            </div>

            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-full"
              >
                <div className="flex justify-start pl-12">
                  <div className="flex flex-col gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      animate={{ 
                        y: [0, -180, 0],
                        rotate: [-17, -17, -17],
                        scale: [1, 1.05, 1],
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                      drag
                      dragMomentum={false}
                      dragElastic={0.9}
                      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                      style={{ y: y1 }}
                      className="relative z-10"
                    >
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl transform rotate-3 opacity-50"></div>
                        <Image
                          className="relative w-48 h-64 object-cover rounded-xl shadow-xl cursor-grab active:cursor-grabbing border-4 border-white"
                          src="/images/image15.jpg"
                          width="192"
                          height="256"
                          alt="Heather working on design"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      animate={{ 
                        y: [0, 180, 0],
                        rotate: [16, 16, 16],
                        scale: [1, 1.05, 1],
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                      drag
                      dragMomentum={false}
                      dragElastic={0.9}
                      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                      style={{ y: y2 }}
                      className="relative z-10"
                    >
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl transform -rotate-2 opacity-50"></div>
                        <Image
                          className="relative w-48 h-64 object-cover rounded-xl shadow-xl cursor-grab active:cursor-grabbing border-4 border-white"
                          src="/images/image16.jpg?height=256&width=192"
                          width="192"
                          height="256"
                          alt="Design process"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      animate={{ 
                        y: [0, -180, 0],
                        rotate: [-16, -16, -16],
                        scale: [1, 1.05, 1],
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                      drag
                      dragMomentum={false}
                      dragElastic={0.9}
                      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                      style={{ y: y3 }}
                      className="relative z-10"
                    >
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl transform rotate-1 opacity-50"></div>
                        <Image
                          className="relative w-48 h-64 object-cover rounded-xl shadow-xl cursor-grab active:cursor-grabbing border-4 border-white"
                          src="/images/image17.jpg?height=256&width=192"
                          width="192"
                          height="256"
                          alt="Creative workspace"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      animate={{ 
                        y: [0, 180, 0],
                        rotate: [16, 16, 16],
                        scale: [1, 1.05, 1],
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                      drag
                      dragMomentum={false}
                      dragElastic={0.9}
                      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                      style={{ y: y4 }}
                      className="relative z-10"
                    >
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl transform -rotate-3 opacity-50"></div>
                        <Image
                          className="relative w-48 h-64 object-cover rounded-xl shadow-xl cursor-grab active:cursor-grabbing border-4 border-white"
                          src="/images/image18.jpg?height=256&width=192"
                          width="192"
                          height="256"
                          alt="Design collaboration"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Section */}
        <section className="bg-white dark:bg-[#18181b] rounded-3xl p-8 lg:p-12 shadow-lg mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              


             
            </motion.div>
          </div>
        </section>

       

    

    

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          
        </motion.div>
        </div>
    </div>
  )
}
