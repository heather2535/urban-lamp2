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
  description: "A web application designed to provide resources and support for individuals with ALS. The platform uses user input to recommend resources based on user input, making it easier for patients and caregivers to find relevant information.",
  date: "December 3, 2024",
  image: "/images/image1.jpg",
  content: `
  
    <br></br>
    <h2 style="font-size: 2em; font-weight: bold;">Introduction</h2>
    <br>
    <p>
    People with ALS (Amyotrophic Lateral Sclerosis) face a fragmented landscape of treatment options. While numerous clinical opportunities exist, most patients are presented with only a limited selection. This web application aims to bridge that gap by providing a guided platform that recommends resources based on user input—empowering patients and non-specialist clinicians to collaboratively explore the most relevant and up-to-date ALS treatments.
    </p>
    <br>
    <h2 style="font-size: 2em; font-weight: bold;">Goals</h2>
    <br>

    <ul className="list-disc pl-8 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        <strong> Support Collaborative Decision-Making: </strong> Create a tool that facilitates conversations between patients and clinicians around available treatment paths.
        <ul className="list-disc pl-8 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-4">•</span>
            <strong>Deliver Personalized Information:</strong> Recommend resources tailored to the patient's stage, symptoms, and needs.
          </li>
          <li className="relative">
            <span className="absolute -left-4">•</span>
            <strong>Ensure Accessibility and Ease of Use:</strong> Design an intuitive experience that accommodates both patients and generalist clinicians.
        </ul>
      </li>
      <li className="relative">
        <span className="absolute -left-4">•</span>
       <strong>Enable Sustainable Content Updates:</strong> Equip admins and clinic staff with a scalable backend for managing the latest resources and questions.
      </li>
    </ul>
    <br></br>
    <h2 style="font-size: 2em; font-weight: bold;">Process</h2>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">1. UX Research & Discovery</h2>
    <p> Through interviews with ALS patients and primary care physicians, several key challenges were identified:</p>

    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
          Patients are overwhelmed by the volume and complexity of treatment information.

        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Clinicians need a streamlined way to stay current with ALS developments.

          </li>
          <li className="relative">
            <span className="absolute -left-4">•</span>
            Both groups desire a system that is intuitive and light on cognitive load.

          </li>
        </ul>
      </li>
      <li className="relative">
        <span className="absolute -left-4">•</span>
        Personalization and clarity are essential to build trust and usability.

        </li>
    </ul>
    <br>
    <p>These insights shaped the app's design principles: clarity, accessibility, and progressive disclosure.

    </p>
    <br></br>
    <h2 style="font-size: 1.5em; font-weight: bold;">2. User Personas & Journey Mapping</h2>
    <p>I developed distinct personas representing:</p>
       <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        A patient navigating treatment stages
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            A generalist clinician unfamiliar with ALS-specific options
          </li>
          <li className="relative">
            <span className="absolute -left-4">•</span>An admin updating resources
            An admin updating resources
          </li>
        </ul>
      </li>
    </ul>

    <br>
    <p>Journey maps helped visualize each user's emotional and informational needs throughout the experience.</p>
    <br></br>

    <h2 style="font-size: 1.5em; font-weight: bold;">3. Information Architecture & Flow Design</h2>
    <p>I created a guided, question-based interface that mimics a "choose-your-own-path" conversation. User inputs dynamically steer the experience, reducing information overload and surfacing relevant recommendations in real time.
    </p>
     

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
    <br>
    <p> Figure 1: User Flow Chart</p>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">4. Prototyping</h2>
           <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        Built low-to-high fidelity prototypes that translated complex clinical decision trees into clean, usable flows.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Prototypes were iteratively tested to ensure they scaled as more branches and content were introduced.
          </li>
          <li className="relative">
            <span className="absolute -left-4">•</span>An admin updating resources
            I used tools like Figma and Typeform to simulate branching logic, with a future transition to a React-based system in mind.
          </li>
        </ul>
      </li>
    </ul>
    <br></br>
    <h2 style="font-size: 1.5em; font-weight: bold;">5. Interaction Design & Developer Handoff</h2>
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        Collaborated with developers to implement accessible UI patterns, including:
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            A responsive hamburger menu for simple navigation
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Bookmark features using localStorage so users can save resources without creating an account
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Visual consistency for clear affordance and reduced friction
          </li>
           <li className="relative">
            <span className="absolute -left-8">•</span>
            Planned future compatibility with frameworks like ReactFlow for more robust logic management.
          </li>
        </ul>
      </li>
    </ul>
   <br></br>
   <h2 style="font-size: 1.5em; font-weight: bold;">6. Scalability Planning</h2>
   <p>Knowing the project would eventually outgrow Typeform, I designed the interface with modularity and future extensibility in mind—supporting multimedia content, deeper branching logic, and dynamic routing.
   </p>
   <br></br>
  <h2 style="font-size: 2em; font-weight: bold;">Results</h2>
 <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        Delivered a prototype-ready, scalable interface tailored to ALS patients and generalist clinicians.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Created a structure that supports ongoing clinical updates and collaborative patient-clinician discussions.
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Implemented progress-saving features to reduce barriers to access, especially for first-time users.
          </li>
          
        </ul>
      </li>
    </ul>
    <br></br>



    <h2 style="font-size: 2em; font-weight: bold;">Tools Used</h2>
     <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        <strong>Figma</strong> – Interface design & prototyping
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Typeform</strong> – Early logic simulation
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Next.js</strong> – Front-end framework (planned for dynamic routing)
          </li>
           <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>ReactFlow</strong> – Future tool for custom question logic (<a href="https://reactflow.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">planned</a>)
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>localStorage API</strong> – Bookmarking and progress saving without account creation
          </li>
          
        </ul>
      </li>
    </ul>
    <br></br>
    <h2 style="font-size: 2em; font-weight: bold;">Recommended Next Steps</h2>

    <ol className="list-decimal pl-8 space-y-4" style={{ fontSize: "1.5em" }}>
  
      <li className="relative">
        <span className="absolute -left-4">1.</span>
        <strong>Custom Logic Builder for Admins</strong>
        <ul className="list-disc pl-8 mt-2 space-y-2" style={{ fontSize: "0.9em" }}>
          <li>Replace Typeform with a visual editor that allows non-technical users to create and update logic flows easily.</li>
          
        </ul>
      </li>
      <li className="relative">
        <span className="absolute -left-4">2.</span>
        <strong>Dynamic Routing for Personalization</strong>
        <ul className="list-disc pl-8 mt-2 space-y-2" style={{ fontSize: "0.9em" }}>
          <li>Use Next.js dynamic routes (e.g., [id].tsx) to generate personalized URLs that improve continuity across sessions and devices.</li>
        </ul>
      </li>
    </ol>
    <br></br>
    <div id="als-slideshow-1"></div>
    <br>
   
  
    <div className="mt-4">
      <img
        src="/images/image2.png"
        alt="Low to High Fidelity Prototypes"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
    <br></br>
        <div className="mt-4">
      <img
        src="/images/image4.png"
        alt="Low to High Fidelity Prototypes"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
       <br></br>
        <div className="mt-4">
      <img
        src="/images/image5.png"
        alt="Low to High Fidelity Prototypes"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
    <p> Figure 2-4: Researched Design System</p>
    <br></br>

    <br></br>
        <div className="mt-4">
      <img
        src="/images/image6.png"
        alt="Low to High Fidelity Prototypes"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  
    <br></br>
   
  
    <br></br>
    <h3 style="font-size: 2em; font-weight: bold;">
      <a 
        href="https://se-bch-als-resource-app-y3wu-pmgqv0yae-cs519team.vercel.app/bookmarks/default" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
      >
        Final Website for Client 
      </a>
    </h3>

   
  `,
  tags: ["All Projects", "Web Development", "Product Design", "UI/UX"],
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
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTag && matchesSearch
  })

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      <main className="mt-6 container max-w-2xl mx-auto px-4 py-8 pb-24">
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
              className="rounded-lg shadow-md"
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
              Brian Zeng
              </p>
              <p className="text-sm text-muted-foreground">
              Avdeep Kaur
              </p>
              <p className="text-sm text-muted-foreground">
              Minyang Li
              </p>
            </div>
            <div className="p-4  rounded-lg">
              <h3 className="font-bold text-lg mb-2">Duration</h3>
              <p className="text-sm text-muted-foreground">
              Sep. 2024 - Dec. 2024
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
