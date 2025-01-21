"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/badge"

type GraphicProject = {
  title: string
  description: string
  image: string
  href: string
  tagline: string
  tags: string[]
}

const graphicProjects: GraphicProject[] = [
  {
    title: "Cryptography Price Dashboard",
    description: "Sleek visualization of real-time crypto data.",
    image: "/placeholder.svg?height=450&width=800",
    href: "/work/crypto-dashboard",
    tagline: "Data Aesthetics",
    tags: ["Data Visualization", "UI Design"],
  },
  {
    title: "Hariri Institute Website Redesign",
    description: "Modern academic web presence reimagined.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/work/hariri-institute",
    tagline: "Academic Elegance",
    tags: ["Web Design", "Branding"],
  },
  {
    title: "Healthcare Management Platform",
    description: "User-centric healthcare interface design.",
    image: "/placeholder.svg?height=500&width=800",
    href: "/work/healthcare-platform",
    tagline: "Healing UX",
    tags: ["UI/UX Design", "Healthcare"],
  },
  {
    title: "Eco-Friendly Product Branding",
    description: "Sustainable visual identity for eco-products.",
    image: "/placeholder.svg?height=400&width=800",
    href: "/work/eco-branding",
    tagline: "Green Aesthetics",
    tags: ["Branding", "Packaging Design"],
  },
  {
    title: "AI-Powered Task Manager",
    description: "Intuitive design for AI-driven productivity.",
    image: "/placeholder.svg?height=550&width=800",
    href: "/work/ai-task-manager",
    tagline: "Smart Visuals",
    tags: ["UI Design", "Icon Design"],
  },
  {
    title: "Virtual Art Gallery",
    description: "Immersive 3D space for digital art showcase.",
    image: "/placeholder.svg?height=480&width=800",
    href: "/work/virtual-gallery",
    tagline: "Digital Canvas",
    tags: ["3D Design", "Virtual Spaces"],
  },
]

export function GraphicsGrid() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">My Graphics</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {graphicProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
          >
            <Link href={project.href} className="block">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold leading-none tracking-tight">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{project.tagline}</p>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

