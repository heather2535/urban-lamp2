"use client";
import * as React from "react"
import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing
import { createPortal } from 'react-dom'
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package } from "lucide-react"

const project = {
  title: "Website Redesign for Hariri Institute at Duan Family Center for Faculty Computing and Engineering",
  description: "Complete redesign and development of the institute's web presence.",
  date: "March 3, 2025",
  image: "/image10.png",
  content: `
  
    <br></br>
    <h2 style="font-size: 2em; font-weight: bold;">Introduction</h2>
    <br>
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <p className="text-left">
          The Hariri Institute for Computing, housed within Boston University's Duan Family Center for Faculty Computing and Engineering, needed a complete redesign of its outdated web presence. The site no longer reflected the scope or impact of the Institute's work and lacked visual cohesion, accessibility, and scalability.
          </p>
          <br>
          <p>
          I served as the lead UI/UX Designer, working closely with stakeholders to craft a modern, accessible, and maintainable site that aligned with BU's Office of Research theme while reflecting Hariri's distinct interdisciplinary mission.

          </p>
        </div>
        <div className="col-span-1">
          <img
            src="/images/image11.png"
            alt="Hariri Institute Website Overview"
            className="rounded-lg shadow-md w-1/2 h-auto mx-auto"
            style={{ maxWidth: "300px", maxHeight: "150px", height: "auto" }}
          />
        </div>
      </div>
    </div>
    <br>

    <h2 style="font-size: 2em; font-weight: bold;">Goals</h2>
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        Modernize and simplify the Hariri Institute website.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Align with Boston University’s Office of Research visual standards.
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Spotlight Hariri’s people, events, research clusters, and projects.
          </li>
           <li className="relative">
            <span className="absolute -left-8">•</span>
            Improve user experience for internal and external audiences.
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Streamline content management for non-technical staff.
          </li>
           <li className="relative">
            <span className="absolute -left-8">•</span>
            Ensure scalability for future growth and evolving needs.
          </li>
          
        </ul>
      </li>
    </ul>

    <br></br>
  
    <h2 style="font-size: 2em; font-weight: bold;">Process</h2>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">1. Research & Discovery</h2>
        <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        Conducted a full audit of the existing site to identify UX bottlenecks.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Held stakeholder interviews with the Communications Manager, Director of Operations, and faculty to understand communication priorities.
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Mapped current pain points: difficulty navigating archived content, manual updates, and low visibility of research.
        </ul>
      </li>
    </ul>
    <br>


     <h2 style="font-size: 1.5em; font-weight: bold;">2. UX & Information Architecture</h2>
        <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        Developed new site architecture and user flows prioritizing simplicity and clarity.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Created personas for key audiences (faculty, students, donors, external partners).
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Conducted informal usability testing using click-through Figma prototypes to validate navigation patterns and hierarchy.
        </ul>
      </li>
    </ul>
    <br>

       <div className="mt-4">
      <img
        src="/image12.png"
        alt="User Flow Chart"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
    <p> Figure 1: Site Architecture</p>
    <br></br>

     <h2 style="font-size: 1.5em; font-weight: bold;">3. Design System & Prototyping</h2>
        <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        Created low-to-high fidelity prototypes in Figma.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Designed reusable components (expandable bios, research highlights, event cards, FAQ accordions).
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Focused on mobile responsiveness and accessibility from the outset.
        </ul>
         <li className="relative">
            <span className="absolute -left-8">•</span>
            Designed scalable, modular components to support various content types and future growth.

            </ul>
      </li>
    </ul>
    <br>
     <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-8">
    
        <div className="col-span-1">
          <img
            src="/images/image8.png"
            alt="Hariri Institute Design System"
            className="rounded-lg shadow-md w-full h-auto object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
    <br></br>

     <h2 style="font-size: 1.5em; font-weight: bold;">4. Visual Identity & Customization</h2>
        <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        Used BU’s Office of Research theme as a foundation.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Introduced visual patterns unique to Hariri (custom hero modules, grid layouts, dynamic galleries).
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Balanced institutional branding with Hariri’s interdisciplinary identity.
        </ul>
      </li>
    </ul>
    <br>
         <div className="mt-4">
      <img
        src="/images/image9.png"
        alt="Low to High Fidelity Prototypes"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
     <p> Figure 2: Initial Design Concepts</p>
    <br></br>

       <h2 style="font-size: 1.5em; font-weight: bold;">5. Developer Handoff & Documentation</h2>
        <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        Delivered annotated mockups with interaction guidance for BU’s internal web development team.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Created a CMS layout guide for non-technical staff to maintain the site.
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Proposed custom backend content types (e.g., tag researchers by cluster, auto-link bios to news stories).
        </ul>
      </li>
    </ul>
    <br></br>

    <h2 style="font-size: 2em; font-weight: bold;">Results</h2>
    <br>
  <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        Successfully launched a redesigned, responsive website with improved UX and content discoverability.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Internal teams now have tools to maintain up-to-date, relevant content with ease.
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            External users can explore Hariri’s projects, events, and people more intuitively.
        </ul>
        <li className="relative">
            <span className="absolute -left-8">•</span>
            The design reflects Hariri’s leadership in computational research while remaining accessible to a general audience.
        </ul>
      </li>
    </ul>
    <br>
   
    </br>
   
    <div className="mt-4">
      <img
        src="/images/image7.png"
        alt="Low to High Fidelity Prototypes"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <br>
    <div className="mt-4">
      <img
        src="/images/image10.png"
        alt="Low to High Fidelity Prototypes"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
    <p> Figure 3 and 4: Proposed Splash Page Designs</p>
    <br>
    <br>

  <h2 style="font-size: 2em; font-weight: bold;">Tools Used</h2>
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        <strong>Figma</strong> – Design system, wireframes, high-fidelity mockups
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Miro</strong> – Site mapping and user journey diagrams
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Zoom & Google Meet</strong> – Stakeholder interviews and feedback sessions
          </li>
           <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Google Drive</strong> – Collaborative documentation and UI handoff
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Boston University CMS</strong> –  Implementation with developer guidance
          </li>
          
        </ul>
      </li>
    </ul>

    <br></br>
    
  `,
  tags: ["All Projects", "Web Development", "Product Design", "UI/UX"],
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

export default function CryptoDashboardPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const allTags = Array.from(new Set(project.tags))

  const filteredProjects = project.tags.filter((tag) => {
    const matchesTag = selectedTag ? tag === selectedTag : true
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTag && matchesSearch
  })

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      <main className="mt-6 container max-w-2xl mx-auto px-4 py-8">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          <h1 className="font-bold text-[40px] mt-4 mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-4">{project.date}</p>

          {/* Filtered Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {filteredProjects.map((tag) => (
              <Link 
                key={tag} 
                href={`/projects?tag=${encodeURIComponent(tag)}`}
                className="no-underline"
              >
                <Badge 
                  variant="secondary" 
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors cursor-pointer"
                >
                  {tagIcons[tag]}
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>

          {/* Video section */}
          <div className="relative mt-6 mb-6">
            <img
              src={project.image}
              alt="ALS Clinical Decision Tool"
              className="rounded-lg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
            {/* Three Columns Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Role</h3>
              <p className="text-sm text-muted-foreground">
              UX Designer
              </p>
            </div>
            <div className="p-4  rounded-lg">
              <h3 className="font-bold text-lg mb-2">Team</h3>
              <p className="text-sm text-muted-foreground">
              Heather Davies
                </p>
              <p className="text-sm text-muted-foreground">
              Kate Ragosta
              </p>
              <p className="text-sm text-muted-foreground">
              Selena Huang
              </p>
            </div>
            <div className="p-4  rounded-lg">
              <h3 className="font-bold text-lg mb-2">Duration</h3>
              <p className="text-sm text-muted-foreground">
              Nov. 2024 - March. 2025
              </p>
              <p className="text-sm text-muted-foreground">
              4 mo. total
              </p>
              <br></br>
            </div>
            </div>
          <p className="lead">{project.description}</p>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
         
          
        </article>
      </main>
    </div>
  )
}
