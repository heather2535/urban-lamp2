"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code2 } from "lucide-react"

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

export function SkillsSection() {
    return (
      <section className="mx-auto max-w-6xl mt-12 py-20">
        <div className="flex justify-center items-center h-full mb-12">
          <Code2 className="h-12 w-12 text-pink-500 text-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x" />
        </div>
  
        <h2 className="text-6xl font-bold mb-8 text-center text-white">Skills & Technologies</h2>
        <div className="mx-auto mb-12 mt-12 max-w-2xl text-center text-white text-lg">
          <p>
            Proficient in UI/UX Design, 3D Design, AI Integration, Branding, and Data Visualization. 
            Experienced with design tools such as Figma and Adobe Creative Cloud, 
            and development technologies including React, Next.js, TypeScript, Tailwind CSS, and Node.js.
          </p>
        </div>
  
        {/* Parent Card with radial gradient behind and backdrop blur */}
        <div className="relative">
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-green-500 opacity-50 rounded-lg blur-xl"
          />
          <Card className="relative px-20 pb-80 pt-10 bg-white/5 backdrop-blur-sm border-white/10 transition-colors rounded-b-[0px] z-10">
            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex flex-col items-center">
                      <skill.icon className={`h-12 w-12 mb-4 ${skill.color}`} />
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
  {/* Additional Two Columns with Subdivided Rows */}
<div className="relative mt-0">
  {/* Top Horizontal Line */}
  <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20"></div>

  <div className="grid grid-cols-[2fr_1fr] mx-auto max-w-6xl">
    {/* First Column */}
    <div className="p-10 border-b border-white/20">
      <h3 className="text-lg font-semibold text-white">UI/UX Design</h3>
      <p className="text-white/70 mt-2">
        Proficient in creating user-centered designs that enhance user experience.
      </p>
      <a href="/projects/ui-ux-design" className="mt-4 inline-block text-blue-400 hover:text-blue-500">
        Explore Projects
      </a>
    </div>

    {/* Second Column Subdivided into Two Rows */}
    <div className="border-l border-b border-white/20">
      <div className="p-10 border-b border-white/20">
        <h3 className="text-lg font-semibold text-white">3D Design & Branding</h3>
        <p className="text-white/70 mt-2">
          Skilled in creating visually appealing 3D designs and branding concepts.
        </p>
        <a href="/work/ai-task-manager" className="mt-4 inline-block text-blue-400 hover:text-blue-500">
          View Case Study
        </a>
      </div>
      <div className="p-10">
        <h3 className="text-lg font-semibold text-white">Data Visualization</h3>
        <p className="text-white/70 mt-2">
          Expertise in presenting complex data in an easily digestible and visually appealing format.
        </p>
        <a href="/work/hariri-institute" className="mt-4 inline-block text-blue-400 hover:text-blue-500">
          Explore Work
        </a>
      </div>
    </div>
  </div>

</div>

      </section>
    )
  }
  