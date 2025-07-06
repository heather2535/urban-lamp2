import type { Project } from "../types/project"

export const projects: Project[] = [
  // {
  //   title: "Website Redesign for Hariri Institute",
  //   description: "Complete redesign and development of the institute's web presence.",
  //   date: "March 03, 2025",
  //   image: "/image15.png",
  //   videoUrl: "/video1.mov",
  //   href: "/work/hariri-institute",
  //   tags: ["All Projects", "Web Development"],
  // }, 
  {
    title: "ALS App Design",
    description: "A web application with Boston Children's Hospital",
    date: "December 28, 2024",
    image: "/images/image1.jpg",
    videoUrl: "/video2.mov",
    href: "/work/als-app",
    tags: ["All Projects", "UI/UX Design", "Product Design", "Healthcare", "User Research", "Accessibility"],
  },
  {
    title: "A DEI Consulting Web App",
    description: "Enabling more equitable workplaces",
    date: "March 15, 2024",
    image: "/image4.png",
    videoUrl: "/video1.mov",
    href: "/work/dei-consulting",
    tags: ["All Projects", "Graphic Design", "Branding", "Web Development", "User Research", "UI/UX Design"],
  },
 
  {
    title: "Generative AI Task Force Dashboard",
    description: "Provides advice to the Generative AI Task Force",
    date: "December 28, 2024",
    image: "/images/image29.png",
    videoUrl: "/video2.mov",
    href: "/work/ai-task-force",
    tags: ["All Projects", "UI/UX Design", "Product Design", "Data Visualization", "AI/ML", "User Research"],
  },
 
 
  {
    title: "Fuse Networking App",
    description: " Simplifies the internship application process",
    date: "December 28, 2024",
    image: "/images/image37.png",
    videoUrl: "/video2.mov",
    href: "/work/fuse",
    tags: ["All Projects", "UI/UX Design", "Branding", "Mobile App", "User Research", "Product Design"],
  },
  
   
 

  {
    title: "Real-Time Crypto Tracking",
    description: "Dashboard with news integration and price alerts",
    date: "December 28, 2024",
    image: "/image1.png",
    videoUrl: "/video2.mov",
    href: "/work/crypto-dashboard",
    tags: ["All Projects", "Web Development", "Product Design", "Data Visualization", "Real-time", "UI/UX Design"],
  },
 

  {
    title: "Talentora",
    description: "A Conversational AI Interview Platform",
    date: "February 3, 2025",
    image: "/image5.png",
    videoUrl: "/video1.mov",
    href: "/work/ai-task-manager",
    tags: ["All Projects", "Web Development", "Branding", "UI/UX Design"],
  },

  
  {
    title: "Journalink",
    description: "Library Database E-Learning Platform",
    date: "January 10, 2024",
    image: "/image14.png",
    videoUrl: "/video1.mov",
    href: "/work/virtual-gallery",
    tags: ["All Projects", "Web Development", "UI/UX Design", "E-Learning", "User Research", "Product Design"],
  },
  {
    title: "Healthcare Management Platform",
    description: "Comprehensive healthcare management system for patients and providers.",
    date: "April 22, 2024",
    image: "/image3.png",
    videoUrl: "/video1.mov",
    href: "/work/healthcare-platform",
    tags: ["All Projects", "Web Development", "Healthcare", "UI/UX Design", "User Research", "Product Design"],
  },



  {
    title: "Chaos & Order: Graphic Design Thesis",
    description: "A collection of my graphic design work from my thesis.",
    date: "May 06, 2025",
    image: "/gallery/image36.png",
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

