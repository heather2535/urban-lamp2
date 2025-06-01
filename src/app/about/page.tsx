"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Circle, Square, Triangle, Award, Users, Coffee, Heart } from "lucide-react"
import { useRef } from "react"

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
    <div className="min-h-screen bg-gray-50 pt-24 pb-16" ref={containerRef}>
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
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-6">
              AB
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">OUT</span>
            </h1>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-8 -left-10 w-6 h-6 bg-orange-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-4 -right-8 w-4 h-4 bg-pink-400 rounded-full opacity-60"
              animate={{ scale: [1.5, 1, 1.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>

          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto mb-8">
            Passionate designer crafting meaningful experiences through research, empathy, and creativity.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-6 items-center justify-center mb-12">
            <Link
              href="mailto:daviesheather518@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors duration-300 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>daviesheather518@gmail.com</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/heatherrdavies/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors duration-300 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors duration-300 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span>Resume</span>
            </Link>
          </div>

          {/* Interactive Images Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full"
          >
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4 sm:flex sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: -17, y: -180, scale: 1.05 }}
                  drag
                  dragMomentum={false}
                  dragElastic={0.9}
                  dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                  style={{ y: y1 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 12,
                    mass: 2,
                    velocity: 0.5,
                  }}
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
                  whileHover={{ rotate: 16, y: -180, scale: 1.05 }}
                  drag
                  dragMomentum={false}
                  dragElastic={0.9}
                  dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                  style={{ y: y2 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 12,
                    mass: 2,
                    velocity: 0.5,
                  }}
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
                  whileHover={{ rotate: -16, y: -180, scale: 1.05 }}
                  drag
                  dragMomentum={false}
                  dragElastic={0.9}
                  dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                  style={{ y: y3 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 12,
                    mass: 2,
                    velocity: 0.5,
                  }}
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
                  whileHover={{ rotate: 16, y: -180, scale: 1.05 }}
                  drag
                  dragMomentum={false}
                  dragElastic={0.9}
                  dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                  style={{ y: y4 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 12,
                    mass: 2,
                    velocity: 0.5,
                  }}
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
        </motion.div>

        {/* Main Content Section */}
        <section className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Hi, I'm Heather Davies 👋</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a recent graduate from Boston University, with a B.F.A. in Graphic Design with a minor in Psychology. My
                  academic journey, internships, and passion for design have equipped me with a unique blend of creative
                  and technical expertise. Through coursework in UX/UI design, cognitive psychology, and design
                  strategy, I've developed a deep understanding of how to craft meaningful, user-centered experiences
                  that address real-world challenges.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-center">Passion for User-Centered Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I am deeply passionate about designing intuitive and impactful user experiences. By integrating
                    principles of psychology, visual storytelling, and data-driven strategies, I thrive on creating
                    designs that resonate with users and deliver measurable results.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-center">Future Aspirations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    As I approach graduation, I'm eager to bring my skills and passion to an innovative organization
                    where I can create impactful user experiences. I'm especially interested in opportunities that
                    combine design expertise with technical problem-solving.
                  </p>
                </div>
              </div>

              {/* Quote Section */}
              <div className="relative mt-12 p-8 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl">
                <div className="absolute -top-4 -left-4 text-6xl text-pink-500/20 font-serif">"</div>
                <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed italic text-center">
                  Design is not just what it looks like and feels like. Design is how it works.
                </blockquote>
                <div className="mt-6 text-center">
                  <cite className="text-lg text-gray-600">— Steve Jobs</cite>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Skills & Expertise</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12">Achievements & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                <span className="text-xs text-gray-500 font-medium">{achievement.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 hover:text-white transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Let's Create Something Amazing</h3>
            <p className="text-xl mb-8 opacity-90">
              Ready to bring your next project to life? I'd love to hear about your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="mailto:daviesheather518@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-800 rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get in Touch
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white hover:text-gray-800 transition-all duration-300"
              >
                View My Work
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
