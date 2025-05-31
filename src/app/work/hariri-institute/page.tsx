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
  title: "Website Redesign for\n Hariri Institute",
  date: "September 3, 2024",
  image: "/image15.png",
  content: `

  
  
    
   


     

      

 
    
   
    

  <h2 style="font-size: 2em; font-weight: bold;">Tools Used</h2>
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2>• Figma</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2>• Miro</h2>
            <h2>• Site mapping and user journey diagrams</h2>
          </li>
          <li className="relative">
            <h2>• Zoom & Google Meet</h2>
            <h2>• Stakeholder interviews and feedback sessions</h2>
          </li>
           <li className="relative">
            <h2>• Google Drive</h2>
            <h2>• Collaborative documentation and UI handoff</h2>
          </li>
          <li className="relative">
            <h2>• Boston University CMS</h2>
            <h2>• Implementation with developer guidance</h2>
          </li>
          
        </ul>
      </li>
    </ul>

    <br></br>
    
  `,
  tags: [ "Web Development", "UX Research"],
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
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTag && matchesSearch
  })

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative w-full bg-white dark:bg-gray-900">
        {/* Top Back Button */}
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

        {/* Three Column Layout */}
        <div className="container max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mt-16 md:mt-0">
            {/* Left Column - Text */}
            <div className="md:col-span-1 order-2 md:order-1">
              <Link href="https://se-bch-als-resource-app-y3wu-pmgqv0yae-cs519team.vercel.app/bookmarks/default" className="no-underline">
                <div className="max-w-xl pl-4 md:pl-0">
                <h1 className="font-bold text-2xl md:text-[40px] mb-6 text-gray-900 dark:text-white whitespace-pre-line">{project.title}</h1>
                  <h2 className="text-gray-700 dark:text-gray-300 mb-6 text-lg">{project.date}</h2>
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
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border-pink-200 bg-pink-100 hover:border-pink-500 hover:bg-pink-200 dark:bg-pink-900/30 dark:border-pink-800/50 dark:hover:bg-pink-900/50 dark:hover:border-pink-700 text-pink-700 dark:text-pink-100 transition-colors cursor-pointer"
                          >
                            {tagIcons[tag]}
                            {tag}
                          </Badge>
                        </Link>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Column - Image */}
            <div className="md:col-span-2 order-1 md:order-2">
              <Link href="/work/als-app" className="no-underline">
                <div className="relative">
                  <img
                    src={project.image}
                    alt="ALS Clinical Decision Tool"
                    className="w-full h-auto object-contain"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent">
        <main className="w-full">
          <article className="prose lg:prose-xl dark:prose-invert">
            {/* Three Columns Section */}
            <div className="container max-w-6xl mx-auto px-4 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl">
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
                  <h2 className="text-gray-700 text-sm dark:text-gray-300">
                    The primary goal was to modernize and simplify the Hariri Institute website while aligning with Boston University's Office of Research visual standards. We aimed to improve user experience for both internal and external audiences while ensuring the site could be easily maintained by non-technical staff.
                  </h2>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Solution:</h2>
                  <h2 className="text-gray-700 text-sm dark:text-gray-300">
                    We developed a modern, accessible website that balances institutional branding with Hariri's interdisciplinary identity. The solution features a clean design system with reusable components, improved content discoverability, and a streamlined CMS for easy content management.
                  </h2>
                </div>
              </div>

              {/* Working Prototype Button */}
              <div className="flex justify-center mt-12">
                <a 
                  href="https://www.bu.edu/hic/" 
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
                </a>
              </div>
              
            </div>
            

            <div className="w-full bg-white dark:bg-gray-900 mt-12">
              <div className="container max-w-3xl mx-auto px-4 py-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Scope</h2>
              <h2 className="text-left text-sm md:text-md lg:text-md">
              To redesign and redevelop the website for the Boston University Hariri Institute an organization comprised of BU faculty and graduate students across disciplines to study and design intelligent systems. Hariri Institute researchers develop solutions in the areas of Automation, Robotics & Control, Computational Biology & Medicine, Cyber-Physical Systems, Data Analytics, Energy Systems, Information Sources, and Networks.
              </h2>
          <br></br>
          <h2 className="text-left text-sm md:text-md lg:text-md">
          The goals of the website redesign are to: 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <ul className="list-disc pl-20 space-y-2 text-base">
                <li className="relative">
                  <h2 className="text-left text-sm md:text-md lg:text-md">Develop a holistic architecture and modern UX experience that showcases the Hariri Institute's mission, research, collaborations, news, events, and facult profiles.</h2>
                </li>
                <li className="relative">
                  <h2 className="text-left text-sm md:text-md lg:text-md">Develop a new Events Calendar that better showcases important events, enables event categoriszation, and provides for a more streamlined editing process.</h2>
                </li>
                <li className="relative">
                  <h2 className="text-left text-sm md:text-md lg:text-md">Highlight and promote Hariri Institute's interdiscplinary research, collaboration, and events such as the Tsai Seminars that bring exposure from outside BU.</h2>
                </li>
                <li className="relative">
                  <h2 className="text-left text-sm md:text-md lg:text-md">Create a visual design for the website that focuses on engagement and education and is more in-line stylistically with the institute's new branding identity.</h2>
                </li>
                <li className="relative">
                  <h2 className="text-left text-sm md:text-md lg:text-md">Create landing page and other specialty page designs that automate the display of cross-promotional content.</h2>  
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/images/image11.png"
                alt="Hariri Institute Website Overview"
                className="rounded-lg w-3/4 h-auto object-contain"
                style={{ maxWidth: "300px", height: "auto" }}
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Process</h2>
            <h2 className="text-1xl font-bold mb-2 text-gray-900 dark:text-white">Website Design and Development</h2>
            <h2 className="text-left text-sm md:text-md lg:text-md">All website design projects undertaken are divided into five stages: 1. Assess 2. Design 3. Develop 4. Produce and 5. Refine.</h2>  
          <br></br>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Assess</h2>
          <h2 className="text-left text-sm md:text-md lg:text-md">During the Assessment stage, I collaborated with the Hariri Institute to identity project goals and organize new and existing information. User experience, business rules, functional requirements, and information architecture are then defined, documented, and submitted to the client for review.</h2>  
            <br></br>
            <h2 className="text-1xl font-bold mb-2 text-gray-900 dark:text-white">Site and User Exeperience Review</h2>
            <h2 className="text-left text-sm md:text-md lg:text-md">An initial review of the Hariri Institute website was conducted to identity issues relating to the current user experience. I then analyzed available site traffic data to determine how current users navigate the site and identify any technological or user interface roadblocks. Additionally, I reviewed site structure to identify where layout changes could benefit the target user experience.</h2>  
            <br></br>
            <h2 className="text-1xl font-bold mb-2 text-gray-900 dark:text-white">Target-User Experience Development</h2>
            <h2 className="text-left text-sm md:text-md lg:text-md">I worked with the Hariri Institute to define the user audiences it seeked to retain and attract, which informs website user scenarios that are key to developing the site's architecture and content flows. This will include a review of Hariri's social media channels and how best to leverage them on the website.</h2>  
            <br></br>
            <h2 className="text-1xl font-bold mb-2 text-gray-900 dark:text-white">Functional and Technical Requirements</h2>
            <h2 className="text-left text-sm md:text-md lg:text-md">I define any new requirements for the WordPress content management system (CMS) and plugins and work within BU's Information Technology department for the implementation/approval of new plugins. Options for specialty pages or any content that requires additional design or programming, will also be defined. After specific content types and pages are defined, I created wireframes of the site's architecture and content flows. Key engagements or complicated user interactions may be prototyped to ensure usability. </h2>  
            <br></br>
            <h2 className="text-left text-sm md:text-md lg:text-md">The results of this stage inform Design, Development, and Production, and provide an outline for content development and technology selection.</h2>  
            <br></br>
            <div className="mt-4">
            <img
              src="/image12.png"
              alt="User Flow Chart"
              className="rounded-lg shadow-md"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            </div>
            <h2 className="text-left text-sm md:text-md lg:text-md"> Figure 1: Site Architecture</h2>
            <br></br>
            
            <h2 className="text-1xl font-bold mb-2 text-gray-900 dark:text-white">1. Research & Discovery</h2>
            <ul className="list-disc pl-20 space-y-2 text-base">
            <li className="relative">
              <h2 className="text-left text-sm md:text-md lg:text-md">Conducted a full audit of the existing site to identify UX bottlenecks.</h2>
            </li>
              <li className="relative">
                  <h2 className="text-left text-sm md:text-md lg:text-md">Held stakeholder interviews with the Communications Manager, Director of Operations, and faculty to understand communication priorities.</h2>
            </li>
            <li className="relative">
              <h2 className="text-left text-sm md:text-md lg:text-md">Mapped current pain points: difficulty navigating archived content, manual updates, and low visibility of research.</h2>
            </li>
          </ul>
          <br></br>
          <h2 className="text-1xl mb-2 text-gray=900 font-bold">2. UX & Information Architecture</h2>
            <ul className="list-disc pl-20 space-y-4 text-base">
          <li className="relative">
            <h2 className="text-left text-sm md:text-md lg:text-md">Developed new site architecture and user flows prioritizing simplicity and clarity.</h2>
              <li className="relative">
                <h2 className="text-left text-sm md:text-md lg:text-md">Created personas for key audiences (faculty, students, donors, external partners).</h2>
              </li>
              <li className="relative">
                <h2 className="text-left text-sm md:text-md lg:text-md">Conducted informal usability testing using click-through Figma prototypes to validate navigation patterns and hierarchy.</h2>
            </li>
            
          </li>
        </ul>
        <br></br>

        <h2 className="text-1xl mb-2 text-gray-900 font-bold">3. Design System & Prototyping</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <ul className="list-disc pl-20 text-base">
              <li className="relative">
                <h2 className="text-left text-sm md:text-md lg:text-md">Created low-to-high fidelity prototypes in Figma.</h2>
              </li>
              <li className="relative">
                <h2 className="text-left text-sm md:text-md lg:text-md">Designed reusable components (expandable bios, research highlights, event cards, FAQ accordions).</h2>
              </li>
              <li className="relative">
                <h2 className="text-left text-sm md:text-md lg:text-md">Focused on mobile responsiveness and accessibility from the outset.</h2>
              </li>
              <li className="relative">
                <h2 className="text-left text-sm md:text-md lg:text-md">Designed scalable, modular components to support various content types and future growth.</h2>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/image8.png"
              alt="Hariri Institute Design System"
              className="rounded-lg  w-full h-auto object-contain"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <h2 className="text-left text-sm md:text-md lg:text-md"> Figure 2: Initial Wireframe System</h2>
        </div>
        <br></br>

        <h2 className="text-1xl mb-2 text-gray-900 font-bold">4. Visual Identity & Customization</h2>
        <ul className="list-disc pl-20 space-y-4 text-base">
          <li className="relative">
            <h2 className="text-left text-sm md:text-md lg:text-md">Used BU's Office of Research theme as a foundation.</h2>
            <li className="relative">
              <h2 className="text-left text-sm md:text-md lg:text-md">Introduced visual patterns unique to Hariri (custom hero modules, grid layouts, dynamic galleries).</h2>
            </li>
            <li className="relative">
              <h2 className="text-left text-sm md:text-md lg:text-md">Balanced institutional branding with Hariri's interdisciplinary identity.</h2>
            </li>  
          </li>
        </ul>
        
        <div id="visual-identity-slideshow" className="mt-4">
          <Slideshow 
            images={[
              "/images/image9.png",
              "/images/image10.png"
            ]} 
            id="visual-identity-slideshow"
          />
        </div>
        <h2 className="text-left text-sm md:text-md lg:text-md">Figure 3: Initial Design Concepts</h2>
        <br></br>
        <div className="mt-4">
     
    </div>

    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Results</h2> 
      <ul className="list-disc pl-20  text-base">
          <li className="relative">
            <h2 className="text-left text-sm md:text-md lg:text-md">Successfully launched a redesigned, responsive website with improved UX and content discoverability.</h2>
              </li>
              <li className="relative">
                <h2 className="text-left text-sm md:text-md lg:text-md">Internal teams now have tools to maintain up-to-date, relevant content with ease.</h2>
              </li>
              <li className="relative">
                <h2 className="text-left text-sm md:text-md lg:text-md">External users can explore Hariri's projects, events, and people more intuitively.</h2>
            </li>
            <li className="relative">
                <h2 className="text-left text-sm md:text-md lg:text-md">The design reflects Hariri's leadership in computational research while remaining accessible to a general audience.</h2>
          </li>
        </ul>
        <br></br>


        
        <br></br>

      
        
                
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
                
                {/* Bottom Back Button */}
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
