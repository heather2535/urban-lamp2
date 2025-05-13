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
    <h2 style="font-size: 1.5em; font-weight: bold;">1. User Research & Interviews</h2>


    <ul className="list-disc pl-12 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        <strong> Support Collaborative Decision-Making: </strong> Create a tool that facilitates conversations between patients and clinicians around available treatment paths.
        <ul className="list-disc pl-12 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-4">•</span>
            <strong>Deliver Personalized Information:</strong> Recommend resources tailored to the patient's stage, symptoms, and needs.
          </li>
          <li className="relative">
            <span className="absolute -left-4">•</span>
            <strong>Ensure Accessibility and Ease of Use:</strong> Design an intuitive experience that accommodates both patients and generalist clinicians.
          </li>
        </ul>
      </li>
      <li className="relative">
        <span className="absolute -left-4">•</span>
        <strong>Enable Sustainable Content Updates:</strong> Equip admins and clinic staff with a scalable backend for managing the latest resources and questions.
      </li>
    </ul>



    <ol className="list-decimal pl-8 space-y-4" style={{ fontSize: "1.5em" }}>
      <li className="relative">
        <ul className="list-disc pl-8 mt-2 space-y-2" style={{ fontSize: "0.9em" }}>
          <li>Conducted interviews with ALS patients and their caregivers</li>
          <li>Spoke with general practitioners and specialists</li>
          <li>Analyzed pain points in current treatment information access</li>
        </ul>
      </li>
      <li className="relative">
        <span className="absolute -left-4">2.</span>
        <strong>Information Architecture</strong>
        <ul className="list-disc pl-8 mt-2 space-y-2" style={{ fontSize: "0.9em" }}>
          <li>Mapped out decision trees for different patient scenarios</li>
          <li>Designed question flows based on research insights</li>
          <li>Created content structure for resources and recommendations</li>
        </ul>
      </li>
      <li className="relative">
        <span className="absolute -left-4">3.</span>
        <strong>Prototyping & Testing</strong>
        <ul className="list-disc pl-8 mt-2 space-y-2" style={{ fontSize: "0.9em" }}>
          <li>Developed low-fidelity wireframes</li>
          <li>Created interactive prototypes in Figma</li>
          <li>Conducted usability testing with target users</li>
        </ul>
      </li>
      <li className="relative">
        <span className="absolute -left-4">4.</span>
        <strong>Implementation & Iteration</strong>
        <ul className="list-disc pl-8 mt-2 space-y-2" style={{ fontSize: "0.9em" }}>
          <li>Built initial version using Typeform</li>
          <li>Integrated with Next.js for custom features</li>
          <li>Added bookmarking and progress tracking</li>
        </ul>
      </li>
    </ol>
    <br></br>
    <div id="als-slideshow-1"></div>
    <br>
    <h2 style="font-size: 2em; font-weight: bold;">User Flow Chart
    </h2>
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
    <p>As the UX Designer and UX Researcher on this project, my role was centered around improving how patients with ALS and non-specialist clinicians navigate and access relevant, up-to-date treatment options. ALS treatment landscapes evolve rapidly, yet many patients are only presented with limited clinical options. I was tasked with designing a tool that facilitates more informed, collaborative decision-making between patients and clinicians by guiding users through personalized question flows that ultimately provide targeted resources and treatment suggestions.
    </p>
    <br></br>

    <h2 style="font-size: 2em; font-weight: bold;">Design Challenges & UX Research Insights
    </h2>
    <br>
    <p>Through early user research—including interviews with patients and clinicians—it became clear that:
    </p>
    <br>
    <ul>
    <li>*   Patients often feel overwhelmed by the lack of clear, accessible information about their treatment options.</li>
    <li>* Clinicians expressed a need for a tool that simplifies the process of staying updated on the latest ALS treatments and resources.</li>
    <li>* Both groups emphasized the importance of a user-friendly interface that minimizes cognitive load and facilitates collaboration.</li>
    <li>* Patients and clinicians highlighted the value of personalized recommendations tailored to the patient's specific condition and stage of the disease.</li>
    </ul>
    <br>
    <p>These insights shaped the guiding UX principles of clarity, accessibility, and progressive disclosure (presenting information only when needed).</p>
 
    <br></br>
    <h3 style="font-size: 2em; font-weight: bold;">UX Contributions & Solutions</h3>
    
    <br></br>
    <h3 style="font-size: 1.5em; font-weight: bold;">1. Information Architecture & Flow Design</h3>
    <p>I designed the question-based interaction model to simulate a "guided conversation" tailored to each user's situation. Each answer dynamically adjusts the direction of the form, helping users avoid information overload.</p>
    
    <br></br>
    <h3 style="font-size: 1.5em; font-weight: bold;">2. User Personas & Journey Mapping</h3>
    <p>I developed distinct personas (ALS patient, generalist clinician, and admin) and created user journey maps to better understand each user's emotional and informational needs throughout the experience.
    </p>
    
    <br></br>
    <h3 style="font-size: 1.5em; font-weight: bold;">3. Low to High Fidelity Prototypes</h3>
    <p>I translated the Figma-based clinical logic trees into a usable, testable interface, ensuring that the design could scale as more branches were added. This included prototyping branching logic that mimicked what was built out in Typeform, with future implementation in mind.
    </p>
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

    <h3 style="font-size: 1.5em; font-weight: bold;">4. Interface & Interaction Design</h3>
    <p>I collaborated with the dev team to ensure the tool was intuitive to use—incorporating a hamburger menu for simplified navigation, consistent visual styling, and bookmark functionality to return to saved resources later.
    </p>

    <br></br>
    <h3 style="font-size: 1.5em; font-weight: bold;">5. Designing for Extendability</h3>
    <p>Knowing that our solution needed to evolve beyond Typeform, I designed with scalability in mind—planning how ReactFlow or a future custom backend might take over, ensuring the interface could accommodate multimedia content and more complex flows without confusion.
    </p>
  
    <br></br>
    <h3 style="font-size: 1.5em; font-weight: bold;">6. Bookmark & Progress Features:</h3>
    <p>I advocated for and helped scope out the implementation of localStorage-based saving of progress and resources, so users wouldn't need to create an account to return to where they left off—removing a major barrier to accessibility.
    </p>
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
    <h3 style="font-size: 2em; font-weight: bold;">Recommended Next Steps</h3>
    <br>
    <h3 style="font-size: 1.2em; font-weight: bold;">1. Custom Logic Builder for Admins</h3>
    <p>The current admin flow relies on Typeform. Building an intuitive interface for non-technical users (like clinic staff) to update questions and answers will be key for sustainability.
    </p>

    <br></br>
    <h3 style="font-size: 1.2em; font-weight: bold;">2. Improved Personalization & Routing</h3>
    <p>With Next.js dynamic routing ([id].tsx), we can map directly to major question trees—streamlining the experience and offering personalized URLs that can be shared across devices.
    </p>
  
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
            <div className="p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Role</h3>
              <p className="text-sm text-muted-foreground">
              UI/UX Researcher
              </p>
              <p className="text-sm text-muted-foreground">
              UX Designer
              </p>
            </div>
            <div className="p-4  rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Team</h3>
              <p className="text-sm text-muted-foreground">
              Heather Davies
                </p>
              <p className="text-sm text-muted-foreground">
              Team of 4
              </p>
            </div>
            <div className="p-4  rounded-lg shadow-sm">
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
