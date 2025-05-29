"use client";
import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing
import { createPortal } from 'react-dom'
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package } from "lucide-react"
import React from 'react'

const project = {
  title: "ALS: App in Collaboration with Boston Children's Hospital",
  date: "December 3, 2024",
  image: "/images/image19.png",
  content: `
  
    <br></br>
    <div className="mt-4">
      <img
        src="/images/image19.png"
        alt="ALS Clinical Decision Tool"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
    <br></br>
    <h2 style="font-size: 2em; font-weight: bold;">Introduction</h2>
    <br>
    <h2>
    People with ALS (Amyotrophic Lateral Sclerosis) face a fragmented landscape of treatment options. While numerous clinical opportunities exist, most patients are presented with only a limited selection. This web application aims to bridge that gap by providing a guided platform that recommends resources based on user input—empowering patients and non-specialist clinicians to collaboratively explore the most relevant and up-to-date ALS treatments.
    </h2>
    <br>
    <h2 style="font-size: 2em; font-weight: bold;">Goals</h2>
    <br>
  <div className="mt-4">
      <img
        src="/images/image21.png"
        alt="ALS Clinical Decision Tool"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h2 className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Figure 1: Bookmarking Frames</h2>
    </div>
    <br></br>


    <ul className="list-disc pl-8 space-y-4 text-base">
      <li className="relative">
        <h2><strong>• Support Collaborative Decision-Making: </strong> Create a tool that facilitates conversations between patients and clinicians around available treatment paths.</h2>
        <ul className="list-disc pl-8 mt-2 space-y-2">
          <li className="relative">
            <h2><strong>• Deliver Personalized Information:</strong> Recommend resources tailored to the patient's stage, symptoms, and needs.</h2>
          </li>
          <li className="relative">
            <h2><strong>• Ensure Accessibility and Ease of Use:</strong> Design an intuitive experience that accommodates both patients and generalist clinicians.</h2>
        </ul>
      </li>
      <li className="relative">
       <h2><strong>• Enable Sustainable Content Updates:</strong> Equip admins and clinic staff with a scalable backend for managing the latest resources and questions.</h2>
      </li>
    </ul>
    <br></br>
      <div className="mt-4">
      <img
        src="/images/image22.png"
        alt="ALS Clinical Decision Tool"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h2 className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Figure 2: Bookmarking Frames</h2>
    </div>
    <br></br>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="mt-4">
        <img
          src="/images/image23.png"
          alt="ALS Clinical Decision Tool"
          className="rounded-lg shadow-md"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      
    </div>
    <br></br>
    <h2 style="font-size: 2em; font-weight: bold;">Process</h2>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">1. UX Research & Discovery</h2>
    <h2> Through interviews with ALS patients and primary care physicians, several key challenges were identified:</h2>

    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
          <h2>• Patients are overwhelmed by the volume and complexity of treatment information.</h2>

        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2>• Clinicians need a streamlined way to stay current with ALS developments.</h2>

          </li>
          <li className="relative">
            <h2>• Both groups desire a system that is intuitive and light on cognitive load.</h2>

          </li>
        </ul>
      </li>
      <li className="relative">
        <h2>• Personalization and clarity are essential to build trust and usability.</h2>

        </li>
    </ul>
    <br>
    <h2>These insights shaped the app's design principles: clarity, accessibility, and progressive disclosure.</h2>

    </p>
    <br></br>
    <h2 style="font-size: 1.5em; font-weight: bold;">2. User Personas & Journey Mapping</h2>
    <h2>I developed distinct personas representing:</h2>
       <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2>• A patient navigating treatment stages</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2>• A generalist clinician unfamiliar with ALS-specific options</h2>
          </li>
          <li className="relative">
            <h2>• An admin updating resources</h2>
          </li>
        </ul>
      </li>
    </ul>

    <br>
    <h2>Journey maps helped visualize each user's emotional and informational needs throughout the experience.</h2>
    <br></br>

    <h2 style="font-size: 1.5em; font-weight: bold;">3. Information Architecture & Flow Design</h2>
    <h2>I created a guided, question-based interface that mimics a "choose-your-own-path" conversation. User inputs dynamically steer the experience, reducing information overload and surfacing relevant recommendations in real time.
    </h2>
     

    <br>
    <br>
    <div className="mt-4">
      <img
        src="/images/image3.png"
        alt="User Flow Chart"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
    
    <h2 > Figure 1: User Flow Chart</h2>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">4. Prototyping</h2>
           <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2>• Built low-to-high fidelity prototypes that translated complex clinical decision trees into clean, usable flows.</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2>• Prototypes were iteratively tested to ensure they scaled as more branches and content were introduced.</h2>
          </li>
          <li className="relative">
            <h2>• An admin updating resources</h2>
            <h2>I used tools like Figma and Typeform to simulate branching logic, with a future transition to a React-based system in mind.</h2>
          </li>
        </ul>
      </li>
    </ul>
    <br></br>
    <h2 style="font-size: 1.5em; font-weight: bold;">5. Interaction Design & Developer Handoff</h2>
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2>• Collaborated with developers to implement accessible UI patterns, including:</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2>• A responsive hamburger menu for simple navigation</h2>
          </li>
          <li className="relative">
            <h2>• Bookmark features using localStorage so users can save resources without creating an account</h2>
          </li>
          <li className="relative">
            <h2>• Visual consistency for clear affordance and reduced friction</h2>
          </li>
           <li className="relative">
            <h2>• Planned future compatibility with frameworks like ReactFlow for more robust logic management.</h2>
          </li>
        </ul>
      </li>
    </ul>
   <br></br>
   <h2 style="font-size: 1.5em; font-weight: bold;">6. Scalability Planning</h2>
   <h2 >Knowing the project would eventually outgrow Typeform, I designed the interface with modularity and future extensibility in mind—supporting multimedia content, deeper branching logic, and dynamic routing.
   </h2>
   <br></br>
  <h2 style="font-size: 2em; font-weight: bold;">Results</h2>
 <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2>• Delivered a prototype-ready, scalable interface tailored to ALS patients and generalist clinicians.</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2>• Created a structure that supports ongoing clinical updates and collaborative patient-clinician discussions.</h2>
          </li>
          <li className="relative">
            <h2>• Implemented progress-saving features to reduce barriers to access, especially for first-time users.</h2>
          </li>
          
        </ul>
      </li>
    </ul>
    <br></br>



    <h2 style="font-size: 2em; font-weight: bold;">Tools Used</h2>
     <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2>•  <strong>Figma</strong> – Interface design & prototyping</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2>• <strong>Typeform</strong> – Early logic simulation</h2>
          </li>
          <li className="relative">
            <h2>• <strong>Next.js</strong> – Front-end framework (planned for dynamic routing)</h2>
          </li>
           <li className="relative">
            <h2>• <strong>ReactFlow</strong> – Future tool for custom question logic (<a href="https://reactflow.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">planned</a>)</h2>
          </li>
          <li className="relative">
            <h2>• <strong>localStorage API</strong> – Bookmarking and progress saving without account creation</h2>
          </li>
          
        </ul>
      </li>
    </ul>
    <br></br>
    <h2 style="font-size: 2em; font-weight: bold;">Recommended Next Steps</h2>

    <ol className="list-decimal pl-8 space-y-4" style={{ fontSize: "1.5em" }}>
  
      <li className="relative">
        <h2 className="text-2xl font-bold mb-4">1. <strong>Custom Logic Builder for Admins</strong></h2>
        <ul className="list-disc pl-8 mt-2 space-y-2 text-lg">
          <h2><li>Replace Typeform with a visual editor that allows non-technical users to create and update logic flows easily.</li></h2>
        </ul>
      </li>
      <li className="relative">
        <h2 className="text-2xl font-bold mb-4">2. <strong>Dynamic Routing for Personalization</strong></h2>
        <ul className="list-disc pl-8 mt-2 space-y-2 text-lg">
          <h2><li>Use Next.js dynamic routes (e.g., [id].tsx) to generate personalized URLs that improve continuity across sessions and devices.</li></h2>
        </ul>
      </li>
    </ol>
    <br></br>
    <div id="als-slideshow-1"></div>
    <br>
    <div className="mt-4">
        <h2 className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">Figure 2-4: Researched Design System</h2>

        <img
          src="/images/image25.png"
          alt="Low to High Fidelity Prototypes"
          className="rounded-lg shadow-md"
          style={{ maxWidth: "50%", height: "50%" }}
        />
      </div>
  
    
   
  
 

   
  `,
  tags: ["Web Development", "Product Design", "UI/UX"],
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

export default function CryptoDashboardPage() {
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
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative w-full bg-white dark:bg-gray-900">
        {/* Back Button */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="container max-w-6xl mx-auto px-4">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-xs bg-transparent sm:bg-black sm:hover:bg-gray-800 dark:sm:bg-white dark:sm:text-black dark:sm:hover:bg-gray-200 px-6 py-3 rounded-lg transition-all duration-200 font-medium"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-black sm:text-white dark:sm:text-black sm:hidden"
              >
                <path d="M15 18l-6-6 6-6"/>
              </svg>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="hidden sm:block text-white dark:text-black"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span className="hidden sm:inline text-white dark:text-black">Back to Projects</span>
            </Link>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16 md:mt-0">
            {/* Left Column - Text */}
            <div className="max-w-xl order-2 md:order-1 pl-4 md:pl-0">
              <h1 className="font-bold text-2xl md:text-[32px] mb-4 text-gray-900 dark:text-white whitespace-pre-line">{project.title}</h1>
              <h2 className="text-gray-700 dark:text-gray-300 mb-4">{project.date}</h2>
              <div className="flex flex-wrap gap-2">
                {filteredProjects.map((tag, index) => (
                  <React.Fragment key={tag}>
                    {tag === "UI/UX" && <div className="w-full" />}
                    <Link 
                      href={`/projects?tag=${encodeURIComponent(tag)}`}
                      className="no-underline"
                    >
                      <Badge 
                        variant="secondary" 
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-100 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors cursor-pointer"
                      >
                        {tagIcons[tag]}
                        {tag}
                      </Badge>
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative order-1 md:order-2">
              <img
                src={project.image}
                alt="ALS Clinical Decision Tool"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent">
        <main className="w-full">
          <article className="prose lg:prose-xl dark:prose-invert">
            {/* Three Columns Section */}
            <div className="container max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Role</h3>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-sm text-muted-foreground">
                      Design Strategist, UX
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Researcher, UI/UX
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Team</h3>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-sm text-muted-foreground">
                      Heather Davies
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Brian Zeng
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Avdeep Kaur
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Minyang Li
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Duration</h3>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-sm text-muted-foreground">
                      Sep. 2024 - Dec. 2024
                    </p>
                    <p className="text-sm text-muted-foreground">
                      4 mo. total
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Columns Section */}
            <div className="container max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Goal:</h2>
                  <h2 className="text-gray-700 dark:text-gray-300">
                    The primary goal was to create a user-friendly platform that helps ALS patients and their caregivers navigate the complex landscape of treatment options. We aimed to bridge the gap between available clinical opportunities and patient awareness, ensuring that users could easily find and understand relevant resources based on their specific needs and circumstances.
                  </h2>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Solution:</h2>
                  <h2 className="text-gray-700 dark:text-gray-300">
                    We developed an intuitive web application that uses a guided, question-based interface to recommend personalized resources. The solution features a clean, accessible design that accommodates both patients and generalist clinicians, with a scalable backend that allows for easy updates to treatment information and clinical pathways.
                  </h2>
                </div>
              </div>
            </div>

            <div className="container max-w-6xl mx-auto px-4 mt-8 flex justify-center">
              <Link 
                href="https://se-bch-als-resource-app-y3wu-pmgqv0yae-cs519team.vercel.app/bookmarks/default" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-6 py-3 rounded-lg transition-all duration-200"
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
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Working Prototype
              </Link>
            </div>

            <div className="w-full bg-white dark:bg-gray-900 mt-12">
              <div className="container max-w-6xl mx-auto px-4 py-8">
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
                
                <div className="mt-16 flex justify-center">
                  <Link 
                    href="/projects" 
                    className="inline-flex items-center gap-2 text-xs bg-transparent sm:bg-black sm:hover:bg-gray-800 dark:sm:bg-white dark:sm:text-black dark:sm:hover:bg-gray-200 px-6 py-3 rounded-lg transition-all duration-200 font-medium"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-black sm:text-white dark:sm:text-black sm:hidden"
                    >
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="hidden sm:block text-white dark:text-black"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span className="hidden sm:inline text-white dark:text-black">Back to Projects</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
