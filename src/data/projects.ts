import type { Project } from "../types/project"

export const projects: Project[] = [
  {
    title: "ALS: App in Collaboration with Boston Children's Hospital",
    description: "A web application designed to provide resources and support for individuals with ALS.",
    date: "December 28, 2024",
    image: "/images/image1.jpg",
    videoUrl: "/video2.mov",
    href: "/work/als-app",
    tags: ["All Projects", "UI/UX Design", "Product Design"],
  },
  {
    title: "Website Redesign for Hariri Institute at Duan Family Center for Faculty Computing and Engineering",
    description: "Complete redesign and development of the institute's web presence.",
    date: "March 03, 2025",
    image: "/image10.png",
    videoUrl: "/video1.mov",
    href: "/work/hariri-institute",
    tags: ["All Projects", "Web Development"],
  }, 

  {
    title: "Building a Crypto Price Tracker and Sentiment Analysis App",
    description: "Real-time cryptocurrency tracking dashboard with news integration and price alerts.",
    date: "December 28, 2024",
    image: "/image1.png",
    videoUrl: "/video2.mov",
    href: "/work/crypto-dashboard",
    tags: ["All Projects", "Web Development", "Graphic Design", "Branding"],
  },
  {
    title: "Talentora: Designing A Conversational AI Interview Platform",
    description: "A platform that uses AI to conduct interviews and evaluate candidates.",
    date: "February 3, 2025",
    image: "/image5.png",
    videoUrl: "/video1.mov",
    href: "/work/ai-task-manager",
    tags: ["All Projects", "Web Development", "Branding", "UI/UX Design"],
  },

  {
    title: "Designing a Web Applications for DEI Consulting",
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
    title: "BLOSM Add-On Venetian Map Simulation",
    description: "Using Blender, I created this simple simulation of a car driving across a bridge.",
    date: "June 10, 2023",
    image: "/image9.png",
    videoUrl: "/video7.mp4",
    href: "/work/establishing-shot",
    tags: ["All Projects", "3D Design"],
  },
  {
    title: "Architectural Visualization for 12/12 Aventura",
    description: "Using Blender, I created this simple simulation of a car driving across a bridge.",
    date: "June 10, 2023",
    image: "/gallery/image1.jpg",
    videoUrl: "/video7.mp4",
    href: "/work/establishing-shot",
    tags: ["All Projects", "Graphic Design", "3D Design"],
  },

  {
    title: "Establishing Shot Bridge Simulation",
    description: "Using Blender, I created this simple simulation of a car driving across a bridge.",
    date: "June 10, 2023",
    image: "/gallery/image5.png",
    videoUrl: "/video7.mp4",
    href: "/work/establishing-shot",
    tags: ["All Projects", "Graphic Design", "Branding"],
  },
]


export const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort()

