"use client";
import { useState, useEffect } from "react"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import { createPortal } from 'react-dom'
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package, ArrowLeft, ArrowUp, ArrowUpRight, Circle, Square, Triangle, ExternalLink, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'
import { ProjectNavigation } from "@/components/project-navigation"
import ProjectVerticalNavigation from "@/components/project-vertical-navigation"
import SectionTitle from "@/components/SectionTitle"
import { ProjectCard } from '@/components/project-card'
import { projects } from '@/data/projects'

const playfair = Playfair_Display({ subsets: ['latin'] })

// Auto Carousel Component
function AutoCarousel({ images, altTexts }: { images: string[], altTexts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full max-w-sm">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={altTexts[index]}
            className={`w-full h-auto object-contain transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            } ${index === currentIndex ? 'relative' : 'absolute top-0 left-0'}`}
          />
        ))}
      </div>
      
      {/* Navigation arrows */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
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
            className="text-gray-700"
          >
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
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
            className="text-gray-700"
          >
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// Video Carousel Component
function VideoCarousel({ videos, altTexts }: { videos: string[], altTexts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Change video every 5 seconds (longer for videos)

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <div className="w-full max-w-sm">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        {videos.map((video, index) => (
          <video
            key={index}
            className={`w-full h-auto object-contain transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            } ${index === currentIndex ? 'relative' : 'absolute top-0 left-0'}`}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)}
          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
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
            className="text-gray-700"
          >
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)}
          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
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
            className="text-gray-700"
          >
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function Slideshow({ images, id }: { images: string[], id: string }) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  if (!mounted) return null;

  const container = document.getElementById(id);
  if (!container) return null;

  return createPortal(
    <div className="mt-4 flex flex-col items-center">
      <img
        src={images[index]}
        alt={`ALS Clinical Decision Tool Design ${index + 1}`}
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="mt-2 flex gap-2">
        <button onClick={prev} className="px-2 py-1 bg-gray-200 rounded">Prev</button>
        <span>{index + 1} / {images.length}</span>
        <button onClick={next} className="px-2 py-1 bg-gray-200 rounded">Next</button>
      </div>
    </div>,
    container
  );
}

const project = {
  title: "Cervera Real Estate",
  date: "Designing and Managing Social Media for Real Estate Agency",
  image: "/images/image26.jpg",
  content: ``,
  tags: ["Graphic Design", "3D Design"],
}

// Define tagIcons with explicit typing for keys
const tagIcons: Record<string, React.ReactElement> = {
  "All Projects": <Folder className="h-3 w-3" />,
  "3D Design": <Grid className="h-3 w-3" />,
  "AI Integration": <Cpu className="h-3 w-3" />,
  "Branding": <Tag className="h-3 w-3" />,
  "Data Vis": <BarChart className="h-3 w-3" />,
  "Graphic Design": <Palette className="h-3 w-3" />,
  "UI/UX": <Layers className="h-3 w-3" />,
  "UI/UX Design": <Layout className="h-3 w-3" />,
  "Product Design": <Package className="h-3 w-3" />,
  "Web Development": <Code className="h-3 w-3" />,
}

// Custom Vertical Navigation for Aventura Rendering
function AventuraVerticalNavigation() {
  const [scrolled, setScrolled] = useState(false)
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateShowNav = () => {
      const gallery = document.getElementById("gallery");
      if (gallery) {
        const rect = gallery.getBoundingClientRect();
        setShowNav(rect.bottom > 0);
      }
    };
    updateShowNav();
    window.addEventListener("scroll", updateShowNav);
    return () => window.removeEventListener("scroll", updateShowNav);
  }, []);

  if (!showNav) return null;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed left-8 top-32 z-30 hidden lg:block"
    >
      <nav className="bg-white/80 backdrop-blur-md rounded-lg p-6 min-w-[200px]">
        <ul className="space-y-4">
          {/* Return Home or Scroll to Top Button */}
          <li className="flex items-center gap-3 group">
            {scrolled ? (
              <button
                onClick={handleScrollToTop}
                className="flex items-center gap-3 group"
                aria-label="Scroll to Top"
              >
                <ArrowUp className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-all duration-300" />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-all duration-300 whitespace-nowrap font-mono">
                  Scroll to Top
                </span>
              </button>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-3 group"
              >
                <ArrowLeft className="w-3 h-3 text-gray-600 group-hover:text-gray-900 transition-all duration-300" />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-all duration-300 whitespace-nowrap font-mono">
                  Return Home
                </span>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}

export default function AventuraRenderingPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const allTags = Array.from(new Set(project.tags))

  const filteredProjects = project.tags.filter((tag) => {
    const matchesTag = selectedTag ? tag === selectedTag : true
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTag && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">

      {/* Project Vertical Navigation */}
      <AventuraVerticalNavigation />

      {/* Top Navigation for Sections */}
      {/* Removed Overview and Problem nav bar as requested */}

      <main className="relative lg:ml-64">
        <article className="prose lg:prose-xl pb-20">
          {/* Hero Section */}
          <motion.div
            id="hero"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Text Content */}
            <motion.div
              className="relative z-10 pt-10 pb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="px-16 pr-32">
                <div className="max-w-7xl mx-auto space-y-4">
                  <motion.h1
                    className="font-mono text-3xl md:text-5xl font-normal tracking-wide leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="text-gray-600">
                      {project.title}
                    </span>
                  </motion.h1>

                  <motion.p
                    className={`${playfair.className} text-3xl md:text-5xl max-w-2xl font-normal leading-relaxed text-gray-800`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-3 text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <span className="text-xl font-extralight">{project.date}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative w-full h-[600px] overflow-hidden -mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="px-16 pr-32">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="w-full max-w-6xl h-full object-contain rounded-3xl"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Project Details Section */}
          <motion.div
            id="project-details"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="-mt-48 -pt-16 pb-16 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Role */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">role</h3>
                <p className="text-sm font-extralight text-gray-600">Design Strategist, UX</p>
                <p className="text-sm font-extralight text-gray-600">Researcher, UI/UX</p>
              </div>

              {/* Team */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">team</h3>
                <p className="text-sm font-extralight text-gray-600">Heather Davies</p>
                <p className="text-sm font-extralight text-gray-600">Anastasiia Mann</p>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">tools</h3>
                <p className="text-sm font-extralight text-gray-600">Figma</p>
                <p className="text-sm font-extralight text-gray-600">React</p>
                <p className="text-sm font-extralight text-gray-600">Adobe Illustrator</p>
                <p className="text-sm font-extralight text-gray-600">Adobe Photoshop</p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">skills</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <p className="text-sm font-extralight text-gray-600">AI Integration</p>
                  <p className="text-sm font-extralight text-gray-600">UI/UX Design</p>
                  <p className="text-sm font-extralight text-gray-600">Product Design</p>
                  <p className="text-sm font-extralight text-gray-600">Web Development</p>
                  <p className="text-sm font-extralight text-gray-600">User Research</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Diagonal Line Divider */}
          <div className="flex justify-center -py-4 -mt-10">
            <div className="flex space-x-3">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-8 bg-orange-300 transform rotate-45"
                />
              ))}
            </div>
          </div>

          {/* Goal and Solution Section */}
          <div className="px-16  mx-auto ">
            <div className="mt-12">
              <div>
              <SectionTitle>Introduction</SectionTitle>               
              <p className="text-lg font-extralight text-gray-600">I took on a hands-on marketing internship at Cervera Real Estate in Miami, where I designed and managed social media ads for multiple realtors and real estate agents. I was responsible for creating Instagram posts for each realtor's personal brand identity. </p>
            
              <p className="mt-4 text-lg font-extralight text-gray-600">In addition to social media content, I led the creation of presentation slide decks for onboarding new agents. I used Canva and Adobe Creative Cloud to craft clear, polished presentations that effectively communicated company policies and culture in a visually engaging way. Not only did this require graphic design skills, but also the ability to translate complex data into an accessible and attractive format. </p>

            <p className="mt-4 text-lg font-extralight text-gray-600">Through this internship, I deepened my understanding of how to build and maintain a cohesive brand identity across digital platforms. I also sharpened my collaboration skills by working closely with clients and internal teams to iterate on designs to meet specific needs and objectives. </p>
 
              </div>
             
            </div>
          </div>

          {/* Social Media Ads Section */}
          <div className="px-16 mt-12">
          <SectionTitle>Social Media Ads</SectionTitle>               
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AutoCarousel 
                images={[
                  "/images/cervera1.png",
                  "/images/cervera2.png",
                  "/images/cervera3.png",
                ]}
                altTexts={[
                  "Cervera Real Estate Social Media Ad 1",
                  "Cervera Real Estate Social Media Ad 2",
                  "Cervera Real Estate Social Media Ad 3"
                ]}
              />
              <AutoCarousel 
                images={[
                  "/images/cervera4.png",
                  "/images/cervera5.png",
                ]}
                altTexts={[
                  "Cervera Real Estate Social Media Ad 1",
                  "Cervera Real Estate Social Media Ad 2",
                  "Cervera Real Estate Social Media Ad 3"
                ]}
              />
              <AutoCarousel 
                images={[
                  "/images/cervera6.png",
                  "/images/cervera7.png",
                  "/images/cervera8.png",
                  "/images/cervera10.png",
                ]}
                altTexts={[
                  "Cervera Real Estate Ad 1",
                  "Cervera Real Estate Video 2",
                  "Cervera Real Estate Video 3"
                ]}
              />
            </div>
              <div className="mt-12">
            <SectionTitle>Presentation Design</SectionTitle>               
            <p className="text-lg font-extralight text-gray-600">
            To support Cervera Real Estate’s agent onboarding process, I designed a polished, easy-to-navigate slide presentation that walked new hires through the ActivePipe marketing platform—a key tool for email automation and client outreach.
            </p>
            </div>
            <iframe src="https://player.flipsnack.com?hash=Q0ZERDhDQThCN0ErN2Npb21mOGNqbA==" width="100%" height="480" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>


                <div className="mt-12">
            <SectionTitle>July Events E-Flyer</SectionTitle>   
            <p className="text-lg font-extralight text-gray-600">
            I created an e-flyer for Cervera Real Estate’s July events, including a real estate seminar and a property tour. The flyer was designed to be visually appealing and easy to navigate, with a focus on highlighting the key features and benefits of the properties being showcased.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div className="p-4 bg-white rounded-lg shadow">
                    <Image src="/images/cervera13.png" alt="July Events E-Flyer 1" width={1920} height={1080} className="w-full h-auto" />
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <Image src="/images/cervera14.png" alt="July Events E-Flyer 2" width={1920} height={1080} className="w-full h-auto" />
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <Image src="/images/cervera15.png" alt="July Events E-Flyer 3" width={1920} height={1080} className="w-full h-auto" />
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <Image src="/images/cervera16.png" alt="July Events E-Flyer 4" width={1920} height={1080} className="w-full h-auto" />
                  </div>
                  
                </div>
                            </div> 
<div className="mt-12">
                            <SectionTitle>Gallery</SectionTitle> 
                            </div>  
                             {/* Gallery Section */}
                             <p className="text-lg font-extralight text-gray-600">

                Created a high-quality, photorealistic rendering for 12/12 Aventura Drive, a modern residential property, using AutoCAD, 3ds Max, and V-Ray.
</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <Image src="/images/image27.jpg" alt="Architectural Visualization 1" width={1920} height={1080} />
                  <Image src="/images/image28.jpg" alt="Architectural Visualization 2" width={1920} height={1080} />
                  <Image src="/images/image26.jpg" alt="Architectural Visualization 3" width={1920} height={1080} />
                  <Image src="/images/image27.jpg" alt="Architectural Visualization 4" width={1920} height={1080} />
                  <Image src="/images/image28.jpg" alt="Architectural Visualization 5" width={1920} height={1080} />
                  <Image src="/images/image26.jpg" alt="Architectural Visualization 6" width={1920} height={1080} />
                </div>



          </div>




          <div className="w-full bg-white dark:bg-gray-900 mt-12">
            <div className="container max-w-full mx-auto px-4 py-8">
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
              
             

              {/* Replace the Return Home button at the bottom with More Projects section */}
              {/* More Projects Section - full width */}
              <div className="w-full">
                <div className="flex items-center w-full py-20">
                  <hr className="flex-grow border-gray-300" />
                  <span className="mx-6 text-xl font-bold font-mono text-gray-900 whitespace-nowrap">more from my portfolio</span>
                  <hr className="flex-grow border-gray-300" />
                </div>
                <div className="w-full pt-0 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {projects
                      .filter(project => project.href !== "/work/cervera-real-estate")
                      .slice(0, 3)
                      .map((project) => (
                        <ProjectCard key={project.href} project={project} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
