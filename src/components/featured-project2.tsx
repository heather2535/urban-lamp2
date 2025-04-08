"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Palette, ChevronRight } from "lucide-react"

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiFigma,
  SiAdobecreativecloud,
} from "react-icons/si"

const skills = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
  { name: "Adobe CC", icon: SiAdobecreativecloud, color: "text-[#DA1F26]" },
]

export function AutomationSection() {
    return (
      <section className="mx-auto max-w-6xl mt-12 py-20 relative z-30">
        <div className="flex justify-center items-center h-full mb-12">
          <Palette className="h-12 w-12 text-pink-500 text-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x" />
        </div>
  
        <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-center text-zinc-800 dark:text-white">Design & Development</h2>
        <div className="mx-auto mb-12 mt-12 max-w-2xl text-center text-zinc-800 dark:text-gray-500 text-md">
          <p>
            Proficient in UI/UX Design, 3D Design, AI Integration, Branding, and Data Visualization. 
            Experienced with design tools such as Figma and Adobe Creative Cloud, 
            and development technologies including React, Next.js, TypeScript, Tailwind CSS, and Node.js.
          </p>
        </div>
  
{/* Parent Card with radial gradient behind and backdrop blur */}
<div className="relative z-30">
  {/* Rainbow Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-green-500 opacity-50 rounded-lg blur-xl" />
  
  {/* Card with video */}
  <Card className="relative px-4 pb-40 pt-10 bg-white/5 backdrop-blur-sm border-white/10 transition-colors rounded-b-[0px] z-30">
    <div className="relative z-10">
      {/* Video content */}
      <video
        className="rounded-lg h-full w-full object-cover transition-opacity duration-700 ease-in-out"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video4.mov" type="video/mp4" />
        <source src="/fallback-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </Card>
</div>

  {/* Additional Two Columns with Subdivided Rows */}
<div className="relative z-30 mt-0">
  {/* Top Horizontal Line */}
  <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20"></div>

  <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-6xl">
    {/* First Column */}
    <div className="p-10 border-b border-gray dark:border-white/20">
      <h3 className="text-lg font-bold text-zinc-800 dark:text-white">UI/UX Design</h3>
      <p className="text-gray-700 dark:text-white/70 mt-2">
        Proficient in creating user-centered designs that enhance user experience.
      </p>
      <a href="/projects" className="mt-4 inline-block text-blue-400 hover:text-blue-500">
        Explore Projects <ChevronRight className="w-4 h-4 inline-block" />
      </a>
    </div>

    {/* Second Column */}
    <div className="p-10 border-b lg:border-l border-gray dark:border-white/20">
      <h3 className="text-lg font-bold text-zinc-800 dark:text-white">3D Design & Branding</h3>
      <p className="text-gray-700 dark:text-white/70 mt-2">
        Skilled in creating visually appealing 3D designs and branding concepts.
      </p>
      <a href="/work/ai-task-manager" className="mt-4 inline-block text-blue-400 hover:text-blue-500">
        View Case Study <ChevronRight className="w-4 h-4 inline-block" />
      </a>
    </div>

    {/* Third Column */}
    <div className="p-10 border-b lg:border-l border-gray dark:border-white/20">
      <h3 className="text-lg font-bold text-zinc-800 dark:text-white">Graphic Design</h3>
      <p className="text-gray-700 dark:text-white/70 mt-2">
        Expertise in presenting complex data in an easily digestible and visually appealing format.
      </p>
      <a href="/work/hariri-institute" className="mt-4 inline-block text-blue-400 hover:text-blue-500">
        Explore Work <ChevronRight className="w-4 h-4 inline-block" />
      </a>
    </div>
  </div>

</div>

      </section>
    )
  }
  