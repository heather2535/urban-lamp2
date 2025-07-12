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
        {/* About Me Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 mt-4 text-center"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light text-gray-700 text-left dark:text-gray-200 mt-6 max-w-5xl mx-auto leading-loose">Product designer crafting meaningful experiences through <span className="font-semibold text-orange-400">research, empathy, and creativity</span>.</p>
        </motion.div>
        {/* Alternating Polaroid/Text Card Layout */}
        <div className="space-y-24 max-w-6xl mx-auto -mt-12">
          {/* Row 1: Text left, Image right */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-center">
            {/* Text Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-[#b97d6c] text-white rounded-xl p-8 max-w-md w-full shadow-[0_0_20px_rgba(0,0,0,0.1)]"
            >
              {/* Tape accents */}
              <div className="absolute -top-3 -left-3 w-16 h-4 bg-orange-200 rotate-[-8deg] z-10"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-4 bg-orange-200 rotate-[8deg] z-10"></div>
              <h3 className="text-3xl font-bold mb-2">my experience</h3>
              <p className="text-md font-extralight leading-relaxed text-white">Growing up, I saw how often people around me struggled to make sense of systems that weren't designed with them in mind—forms that were hard to read, interfaces that felt cold or confusing, or everyday moments that could've been easier with just a little more thoughtfulness. I've always been drawn to clarity and beauty, but more than anything, I've been drawn to making people feel understood. That's what led me to design.</p>
            </motion.div>
            {/* Polaroid Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] pt-10 p-6 flex flex-col items-center max-w-sm w-full"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-30 h-6 bg-green-200 z-10"></div>
              <Image src="/images/image69.png" alt="Sunflowers" width={360} height={240} className=" object-cover w-full" />
              <p className="font-mono text-sm text-gray-700 mt-2">soaking up the rays at Martin Canyon Creek 🌻</p>
            </motion.div>
          </div>

          {/* Row 2: Image left, Text right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 justify-center">
            {/* Text Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-[#b97d6c] text-white rounded-xl p-8 max-w-md w-full shadow-xl"
            >
              <div className="absolute -top-3 -left-3 w-16 h-4 bg-orange-200 rotate-[-8deg] z-10"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-4 bg-orange-200 rotate-[8deg] z-10"></div>
              <h3 className="text-3xl font-bold mb-2">my background</h3>
              <p className="text-md font-extralight leading-relaxed text-white">I studied Graphic Design at Boston University, where I developed not only a deep appreciation for typography, color, and composition, but also a mindset rooted in empathy and intention. For me, design isn't just about visuals—it's about building trust, guiding people through experiences, and communicating something bigger than words. I wanted to learn how to make work that didn't just look good, but that helped people feel capable, curious, and seen.</p>
            </motion.div>
            {/* Polaroid Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl shadow-xl p-4 flex flex-col items-center max-w-xs w-full"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-green-200 z-10"></div>
              <Image src="/images/image70.png" alt="CMU Graduation" width={240} height={360} className="object-cover w-full" />
              <p className="text-xs text-gray-700 mt-2">grad day at CMU! 🎓</p>
            </motion.div>
          </div>

         

       
        </div>
      </div>
    </div>
  )
}
