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
    title: "Plant Care AI",
    description: "A mobile app designed to help urban dwellers nurture healthy indoor plants effortlessly",
    date: "December 3, 2024",
    image: "/images/image58.png",
    videoUrl: "/video10.mov",
    href: "/work/plant-care",
    tags: ["All Projects", "AI Diagnostics", "Plant Care", "Mobile App", "User Research", "UI/UX Design", "Accessibility"],
  },
  {
    title: "Talentora",
    description: "An AI Recruiting Tool for HR Managers",
    date: "February 3, 2025",
    image: "/image16.png",
    videoUrl: "/video1.mov",
    href: "/work/talentora",
    tags: ["All Projects", "AI Integration", "UI/UX Design", "Product Design", "Web Development", "User Research"],
  },
  {
    title: "Cervera Real Estate",
    description: "Designed and managed social media ads for agency",
    date: "June 10, 2023",
    image: "/gallery/image1.jpg",
    videoUrl: "/video7.mp4",
    href: "/work/aventura-rendering",
    tags: ["All Projects", "Graphic Design", "Web Design", "Branding"],
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
 

  

]


export const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort()

