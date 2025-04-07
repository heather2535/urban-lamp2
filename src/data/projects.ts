import type { Project } from "../types/project"

export const projects: Project[] = [
  {
    title: "Cryptography Price Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with news integration and price alerts.",
    date: "December 28, 2024",
    image: "/image1.png?height=450&width=800",
    videoUrl: "/video2.mov?height=450&width=800",
    href: "/work/crypto-dashboard",
    tagline: "Real-time Crypto Tracking",
    tags: ["All Projects", "Web Development", "Data Visualization"],
  },
  {
    title: "Hariri Institute Website Redesign",
    description: "Complete redesign and development of the institute's web presence.",
    date: "September 22, 2024",
    image: "/image2.png?height=450&width=800",
    videoUrl: "/video1.mov?height=450&width=800",
    href: "/work/hariri-institute",
    tagline: "Academic Website Overhaul",
    tags: ["All Projects", "Web Development", "UI/UX Design"],
  },
  {
    title: "Healthcare Management Platform",
    description: "Comprehensive healthcare management system for patients and providers.",
    date: "April 22, 2024",
    image: "/image3.png?height=450&width=800",
    videoUrl: "/video1.mov?height=450&width=800",
    href: "/work/healthcare-platform",
    tagline: "Healthcare Management Solution",
    tags: ["All Projects", "Web Development", "UI/UX Design"],
  },

  {
    title: "DEI Consulting Web Application",
    description: "Brand identity design for a line of sustainable, eco-friendly products.",
    date: "March 15, 2024",
    image: "/image4.png?height=400&width=800",
    videoUrl: "/video1.mov?height=450&width=800",
    href: "/work/eco-branding",
    tagline: "Sustainable Brand Design",
    tags: ["All Projects","Graphic Design", "Branding"],
  },
  {
    title: "Conversational AI-Powered Interview Platform",
    description: "Combines Hume AI and Pipe Cat Frameworks with React, Next.js, and Figma to deliver an advanced interview platform. ",
    date: "February 3, 2024",
    image: "/image5.png?height=550&width=800",
    videoUrl: "/video1.mov?height=450&width=800",
    href: "/work/ai-task-manager",
    tagline: "Smart Productivity Tool",
    tags: ["All Projects", "Web Development", "AI Integration"],
  },
  {
    title: "Library Database E-Learning Platform ",
    description: "Interactive virtual space for students to showcase their reads in an environment.",
    date: "January 10, 2024",
    image: "/image6.png?height=480&width=800",
    videoUrl: "/video1.mov?height=450&width=800",
    href: "/work/virtual-gallery",
    tagline: "3D Art Showcase Platform",
    tags: ["All Projects", "Web Development", "3D Design"],
  },


]

export const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort()

