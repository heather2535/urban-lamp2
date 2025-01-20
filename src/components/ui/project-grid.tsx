"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MoreVertical, Copy, Share, Twitter, Linkedin } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

type Project = {
  title: string
  description: string
  date: string
  image: string
  href: string
  tagline: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "Cryptography Price Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with news integration and price alerts.",
    date: "December 28, 2024",
    image: "/image1.png",
    href: "/work/crypto-dashboard",
    tagline: "Real-time Crypto Tracking",
    tags: ["Web Development", "Data Visualization"],
  },
  {
    title: "Hariri Institute Website Redesign",
    description: "Complete redesign and development of the institute's web presence.",
    date: "September 22, 2024",
    image: "/image2.png",
    href: "/work/hariri-institute",
    tagline: "Academic Website Overhaul",
    tags: ["Web Development", "UI/UX Design"],
  },
  {
    title: "Healthcare Management Platform",
    description: "Comprehensive healthcare management system for patients and providers.",
    date: "April 22, 2024",
    image: "/image3.png",
    href: "/work/healthcare-platform",
    tagline: "Healthcare Management Solution",
    tags: ["Web Development", "UI/UX Design"],
  },
  {
    title: "DEI Consulting Website",
    description: "Brand identity design for a web-app based platform that empowers individuals and organisations through courses and resources while creating a space for users to engage, share, and advance their journey toward building more diverse, inclusive, and equitable communities.",
    date: "September 15, 2024",
    image: "/image4.png",
    href: "/work/eco-branding",
    tagline: "Sustainable Brand Design",
    tags: ["Graphic Design", "Branding"],
  },
  {
    title: "Conversational AI Interview Platform",
    description: "Combines Hume AI and Pipe Cat Frameworks with React, Next.js, and Figma to deliver an advanced mock interview platform. Built with React and Next.js to power a fast, dynamic interfaces for a superior experience.",
    date: "September 3, 2024",
    image: "/image5.png",
    href: "/work/ai-task-manager",
    tagline: "Smart Productivity Tool",
    tags: ["Web Development", "AI Integration"],
  },
  {
    title: "Library Database E-Learning Platform",
    description: "Helping students land jobs and build connections",
    date: "January 10, 2024",
    image: "/image6.png",
    href: "/work/virtual-gallery",
    tagline: "Learning Management Platform",
    tags: ["Web Development", "3D Design"],
  },
]

export function ProjectGrid() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const handleCopyLink = (href: string) => {
    const link = `${window.location.origin}${href}`
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast({
          title: "Link copied",
          description: "The project link has been copied to your clipboard.",
        })
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err)
        toast({
          title: "Failed to copy link",
          description: "An error occurred while trying to copy the link.",
          variant: "destructive",
        })
      })
  }

  const handleShare = (platform: "twitter" | "linkedin", project: Project) => {
    const link = `${window.location.origin}${project.href}`
    const text = `Check out this project: ${project.title}`
    let shareUrl = ""

    if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`
    }

    window.open(shareUrl, "_blank")
  }

  const filteredProjects = selectedTag ? projects.filter((project) => project.tags.includes(selectedTag)) : projects

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6" id="projects">
        My Projects
      </h2>
      <div className="mb-8 flex flex-wrap gap-2">
        <Button variant={selectedTag === null ? "default" : "outline"} onClick={() => setSelectedTag(null)}>
          All
        </Button>
        {allTags.map((tag) => (
          <Button key={tag} variant={selectedTag === tag ? "default" : "outline"} onClick={() => setSelectedTag(tag)}>
            {tag}
          </Button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
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
                <div className="flex items-center justify-between">
                  <time className="text-sm text-muted-foreground">{project.date}</time>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                      <Share className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleCopyLink(project.href)}>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Link
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShare("twitter", project)}>
                        <Twitter className="mr-2 h-4 w-4" />
                        Share on Twitter
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShare("linkedin", project)}>
                        <Linkedin className="mr-2 h-4 w-4" />
                        Share on LinkedIn
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-none tracking-tight">{project.title}</h3>
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

