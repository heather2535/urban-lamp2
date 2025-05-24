import type { Project } from "../types/project"

export const projects: Project[] = [
  {
    title: "Generative AI Task Force Advice Dashboard",
    description: "A web application designed to provide resources and support for individuals with ALS.",
    date: "December 28, 2024",
    image: "/images/image29.png",
    videoUrl: "/video2.mov",
    href: "/work/ai-task-force",
    tags: ["All Projects", "UI/UX Design", "Product Design"],
  },
  {
    title: "ALS App Design with Boston Children's Hospital",
    description: "A web application designed to provide resources and support for individuals with ALS.",
    date: "December 28, 2024",
    image: "/images/image1.jpg",
    videoUrl: "/video2.mov",
    href: "/work/als-app",
    tags: ["All Projects", "UI/UX Design", "Product Design"],
  },
  {
    title: "Website Redesign for Hariri Institute",
    description: "Complete redesign and development of the institute's web presence.",
    date: "March 03, 2025",
    image: "/image15.png",
    videoUrl: "/video1.mov",
    href: "/work/hariri-institute",
    tags: ["All Projects", "Web Development"],
  }, 

  {
    title: "Real-Time Cryptocurrency Tracking Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with news integration and price alerts.",
    date: "December 28, 2024",
    image: "/image1.png",
    videoUrl: "/video2.mov",
    href: "/work/crypto-dashboard",
    tags: ["All Projects", "Web Development", "Branding"],
  },
  {
    title: "Talentora: A Conversational AI Interview Platform",
    description: "Designing a platform that uses AI to evaluate job applicants.",
    date: "February 3, 2025",
    image: "/image5.png",
    videoUrl: "/video1.mov",
    href: "/work/ai-task-manager",
    tags: ["All Projects", "Web Development", "Branding", "UI/UX Design"],
  },

  {
    title: "Designing a DEI Consulting Web Application",
    description: "Brand identity design for a line of sustainable, eco-friendly products.",
    date: "March 15, 2024",
    image: "/image4.png",
    videoUrl: "/video1.mov",
    href: "/work/eco-branding",
    tags: ["All Projects","Graphic Design", "Branding"],
  },
 
  {
    title: "Library Database E-Learning Platform ",
    description: "Interactive virtual space for students to showcase their reads in an environment.",
    date: "January 10, 2024",
    image: "/image14.png",
    videoUrl: "/video1.mov",
    href: "/work/virtual-gallery",
    tags: ["All Projects", "Web Development"],
  },
  {
    title: "Healthcare Management Platform",
    description: "Comprehensive healthcare management system for patients and providers.",
    date: "April 22, 2024",
    image: "/image3.png",
    videoUrl: "/video1.mov",
    href: "/work/healthcare-platform",
    tags: ["All Projects", "Web Development"],
  },



  {
    title: "Chaos & Order: Graphic Design Thesis",
    description: "A collection of my graphic design work from my thesis.",
    date: "May 06, 2025",
    image: "/image13.png",
    videoUrl: "/video1.mov",
    href: "/work/chaosthesis",
    tags: ["All Projects", "Graphic Design", "Branding"],
  },

  {
    title: "12/12 Aventura Rendering",
    description: "Using AutoCAD, 3ds Max, and V-Ray to create a high-quality, photorealistic renderings.",
    date: "June 10, 2023",
    image: "/gallery/image1.jpg",
    videoUrl: "/video7.mp4",
    href: "/work/architectural-vis",
    tags: ["All Projects", "Graphic Design", "3D Design"],
  },

  {
    title: "Marketing Campaign for a New Product",
    description: "Using Blender, I created this simple simulation of a car driving across a bridge.",
    date: "June 10, 2023",
    image: "/gallery/image5.png",
    videoUrl: "/video7.mp4",
    href: "/work/marketing-campaign",
    tags: ["All Projects", "Graphic Design", "Branding"],
  },
]


export const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort()

