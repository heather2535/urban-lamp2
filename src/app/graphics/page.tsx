"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Circle, Square, Triangle } from "lucide-react"

const graphicsProjects = [
  {
    id: 1,
    title: "Chaos & Order: Graphic Design Thesis",
    description: "Click to view full project",
    mainImage: "/gallery/image36.png?height=600&width=800",
    detailImages: [
      "/gallery/image42.png?height=300&width=400",
      "/gallery/image43.png?height=300&width=400",
      "/gallery/image44.png?height=300&width=400",
      "/gallery/image45.png?height=300&width=400",
    ],
    color: "from-pink-100 to-purple-100",
  },
  {
    id: 2,
    title: "Muse Marketing: Editorial Design",
    description: "Click to view full project",
    gridImages: [
      "/gallery/image5.png?height=400&width=300",
      "/gallery/image30.png?height=500&width=400",
      "/gallery/image31.png?height=400&width=300",
      "/gallery/image32.png?height=450&width=350",
      "/gallery/image33.png?height=400&width=300",
      "/gallery/image34.png?height=500&width=400",
    ],
    color: "from-green-100 to-emerald-100",
  },
  {
    id: 3,
    title: "Cervera Real Estate: Graphic Design & Branding Specialist",
    description: "Click to view full project",
    brandingImages: [
      "/gallery/image35.jpg?height=400&width=300",
      "/gallery/image36.jpg?height=400&width=500",
      "/gallery/image48.jpg?height=400&width=400",
      "/gallery/image49.jpg?height=400&width=300",
      "/gallery/image50.jpg?height=400&width=400",
    ],
    color: "from-blue-100 to-cyan-100",
  },
  {
    id: 4,
    title: "Editorial Design of Grunge Never Dies: A Tribute to the Grunge Era",
    description: "Click to view full project",
    thumbnailImages: [
      "/gallery/image13.png?height=150&width=150",
      "/gallery/image14.jpg?height=150&width=150",
      "/gallery/image15.jpg?height=150&width=150",
      "/gallery/image16.jpg?height=150&width=150",
      "/gallery/image17.jpg?height=150&width=150",
      "/gallery/image18.jpg?height=150&width=150",
      "/gallery/image19.jpg?height=150&width=150",
      "/gallery/image20.jpg?height=150&width=150",
      "/gallery/image21.jpg?height=150&width=150",
      "/gallery/image22.jpg?height=150&width=150",
      "/gallery/image23.jpg?height=150&width=150",
      "/gallery/image24.jpg?height=150&width=150",
      "/gallery/image25.jpg?height=150&width=150",
      "/gallery/image26.jpg?height=150&width=150",
      "/gallery/image27.jpg?height=150&width=150",
      "/gallery/image28.jpg?height=150&width=150",
    ],
    featuredImage: "/gallery/image13.png?height=500&width=600",
    color: "from-orange-100 to-red-100",
  },
] as const;

type GraphicsProject = typeof graphicsProjects[number];

export default function GraphicsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-40 right-20 text-orange-300 opacity-20"
          animate={{ rotate: 360, scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Circle size={70} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 left-16 text-purple-300 opacity-15"
          animate={{ rotate: -360, x: [-15, 15, -15] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Square size={50} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 text-pink-300 opacity-25"
          animate={{ rotate: 180, y: [-20, 20, -20] }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Triangle size={40} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-6">
              GRAPH
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">ICS</span>
            </h1>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -left-8 w-5 h-5 bg-orange-400 rounded-full"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-2 -right-6 w-3 h-3 bg-pink-400 rounded-full opacity-70"
              animate={{ scale: [1.3, 1, 1.3] }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {/* Project 1: Chaos & Order - Featured + Detail Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative">
              <div
                className={`absolute -inset-6 bg-gradient-to-r ${graphicsProjects[0].color} rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500`}
              ></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl p-8">
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* Main Image */}
                  <div className="lg:col-span-7">
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={graphicsProjects[0].mainImage || "/placeholder.svg"}
                        alt={graphicsProjects[0].title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Detail Images Grid */}
                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-2 gap-4 h-full">
                      {(graphicsProjects[0]?.detailImages || []).map((image, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${graphicsProjects[0]?.title || 'Project'} detail ${index + 1}`}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-8">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-pink-600 transition-colors duration-300">
                    {graphicsProjects[0].title}
                  </h3>
                  <Link
                    href={`/graphics/${graphicsProjects[0].id}`}
                    className="inline-flex items-center text-gray-600 hover:text-black font-medium transition-colors duration-300"
                  >
                    {graphicsProjects[0].description}
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2: Muse Marketing - Editorial Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative">
              <div
                className={`absolute -inset-6 bg-gradient-to-r ${graphicsProjects[1].color} rounded-3xl transform -rotate-1 group-hover:rotate-1 transition-transform duration-500`}
              ></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl p-8">
                {/* Images Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {(graphicsProjects[1]?.gridImages || []).map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${graphicsProjects[1]?.title || 'Project'} ${index + 1}`}
                        width={300}
                        height={400}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {graphicsProjects[1].title}
                  </h3>
                  <Link
                    href={`/graphics/${graphicsProjects[1].id}`}
                    className="inline-flex items-center text-gray-600 hover:text-black font-medium transition-colors duration-300"
                  >
                    {graphicsProjects[1].description}
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3: Cervera Real Estate - Branding Layout */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative">
              <div
                className={`absolute -inset-6 bg-gradient-to-r ${graphicsProjects[2].color} rounded-3xl transform rotate-1 group-hover:-rotate-1 transition-transform duration-500`}
              ></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl p-8">
                {/* Branding Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                  {(graphicsProjects[2]?.brandingImages || []).map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${graphicsProjects[2]?.title || 'Project'} ${index + 1}`}
                        width={300}
                        height={400}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {graphicsProjects[2].title}
                  </h3>
                  <Link
                    href={`/graphics/${graphicsProjects[2].id}`}
                    className="inline-flex items-center text-gray-600 hover:text-black font-medium transition-colors duration-300"
                  >
                    {graphicsProjects[2].description}
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 4: Grunge Never Dies - Thumbnail Grid + Featured */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative">
              <div
                className={`absolute -inset-6 bg-gradient-to-r ${graphicsProjects[3].color} rounded-3xl transform -rotate-1 group-hover:rotate-1 transition-transform duration-500`}
              ></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl p-8">
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* Thumbnail Grid */}
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-4 gap-2">
                      {(graphicsProjects[3]?.thumbnailImages || []).map((image, index) => (
                        <div key={index} className="relative overflow-hidden rounded-md">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${graphicsProjects[3]?.title || 'Project'} thumbnail ${index + 1}`}
                            width={150}
                            height={150}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="lg:col-span-5">
                    <div className="relative overflow-hidden rounded-xl h-full">
                      <Image
                        src={graphicsProjects[3].featuredImage || "/placeholder.svg"}
                        alt={graphicsProjects[3].title}
                        width={600}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-8">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {graphicsProjects[3].title}
                  </h3>
                  <Link
                    href={`/graphics/${graphicsProjects[3].id}`}
                    className="inline-flex items-center text-gray-600 hover:text-black font-medium transition-colors duration-300"
                  >
                    {graphicsProjects[3].description}
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white rounded-2xl p-12 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Inspired by the work?</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Let's collaborate on your next creative project and bring your visual identity to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start a Project
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
