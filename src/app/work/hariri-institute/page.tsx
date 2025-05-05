"use client";
import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing
import { createPortal } from 'react-dom'

const project = {
  title: "Website Redesign for Hariri Institute at Duan Family Center for Faculty Computing and Engineering",
  description: "Complete redesign and development of the institute's web presence.",
  date: "March 3, 2025",
  description2: "Heather Davies - Mar 3, 2025",
  image: "/image11.png",
  content: `
  
    <br></br>
    <h2 style="font-size: 2em; font-weight: bold;">Project Overview</h2>
    <br>
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <p className="text-left">The Hariri Institute, housed within the Duan Family Center for Faculty Computing and Engineering, needed a complete overhaul of its outdated web presence. The site had become difficult to navigate, visually inconsistent, and disconnected from the dynamic, interdisciplinary work the Institute supports. As the lead UI/UX Designer on this project, I worked over a 4-month period to redesign and rebuild the website with a focus on clarity, accessibility, and sustainable content management. The goal was to align the design with Boston University's Office of Research theme while giving the Hariri Institute its own voice through refined structure, visuals, and functionality.</p>
        </div>
        <div className="col-span-1">
          <img
            src="/images/image11.png"
            alt="Hariri Institute Website Overview"
            className="rounded-lg shadow-md w-full h-auto object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
    <br>

    <div className="container mx-auto mt-12">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <p className="text-left">The primary goal was to modernize the website to better serve its core audiences: researchers, faculty, students, institutional partners, and donors. This meant aligning the visual identity with Boston University's official Office of Research theme, while designing flexible content systems tailored to Hariri's needs. The challenge was to balance institutional consistency with custom storytelling—spotlighting Hariri's people, research clusters, events, and initiatives without overwhelming visitors.</p>
        </div>
        <div className="col-span-1">
          <img
            src="/images/image12.png"
            alt="Hariri Institute Design Goals"
            className="rounded-lg shadow-md w-full h-auto object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
    <br>

    <br></br>
    <div id="als-slideshow-1"></div>
    <br>
    <h2 style="font-size: 2em; font-weight: bold;">Goals and Design Approach
    </h2>
    <br>
    <p>The primary goal was to modernize the website to better serve its core audiences: researchers, faculty, students, institutional partners, and donors. This meant aligning the visual identity with Boston University's Office of Research theme, while designing flexible content systems tailored to Hariri's needs. The challenge was to balance institutional consistency with custom storytelling—spotlighting Hariri's people, research clusters, events, and initiatives without overwhelming visitors.
    </p>
    <br>
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <p className="text-left">My design approach focused on clarity, accessibility, and modularity. I began with a comprehensive audit of the current site structure, followed by stakeholder interviews to better understand communication priorities. These conversations revealed a desire for greater emphasis on people and research projects, along with the need to surface upcoming events and recent news without relying on manual updates.</p>
        </div>
        <div className="col-span-1">
          <img
            src="/images/image9.png"
            alt="Design Process and Research"
            className="rounded-lg shadow-md w-full h-auto object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
    <br>
    <p>
    My design approach focused on clarity, accessibility, and modularity. I began with a comprehensive audit of the current site structure, followed by stakeholder interviews to better understand communication priorities. These conversations revealed a desire for greater emphasis on people and research projects, along with the need to surface upcoming events and recent news without relying on manual updates. With this feedback, I created new site maps, user flows, and low-fidelity wireframes that simplified the navigation structure and content hierarchy.
    </p>
    <br>
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <p className="text-left">Throughout the project, I worked closely with the Institute's Communications Manager, Director of Operations, and affiliated researchers to test concepts and iterate on designs. I conducted informal usability tests using click-through prototypes to gauge how users explored pages, which links they gravitated toward, and where confusion arose.</p>
        </div>
        <div className="col-span-1">
          <video
            className="rounded-lg shadow-md w-3/4 h-auto mx-auto"
            controls
            style={{ maxWidth: "400px", height: "auto" }}
          >
            <source src="/videos/hariri-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    <br>
    <div className="mt-4">
      <img
        src="/image12.png"
        alt="User Flow Chart"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
    <br>
    <p> Figure 1: Site Architecture</p>
    <br>
    <h2 style="font-size: 2em; font-weight: bold;">UX Research and Stakeholder Engagement
    </h2>
    <p>Throughout the project, I worked closely with the Institute's Communications Manager, Director of Operations, and affiliated researchers to test concepts and iterate on designs. I conducted informal usability tests using click-through prototypes to gauge how users explored pages, which links they gravitated toward, and where confusion arose. Feedback from these sessions guided layout decisions, such as where to position the Research Clusters page, how to structure People directories, and what filters to implement on the Events calendar.
    </p>
    <br>
    <p>
One key insight was that many internal users relied on the website to locate archived events, research outputs, and member information. As a result, the new design features improved search and filtering options, anchor links for fast access to content, and better visual grouping of related material.
    </p>
    <br>
    <br></br>
     <div className="mt-4">
      <img
        src="/images/image9.png"
        alt="Low to High Fidelity Prototypes"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
    <br>
     <p> Figure 2: Initial Design Concepts</p>
    <br></br>
    <h2 style="font-size: 2em; font-weight: bold;">Design Execution
</h2>

    <p>Visually, I sought to represent Hariri's interdisciplinary and forward-looking identity. While adapting the BU Office of Research theme as a foundation, I introduced custom components and layout patterns—such as grid-based research highlights, accordion-based FAQs, and expandable bios—to support deeper engagement with complex content.</p>
    <br>
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <p className="text-left">Visually, I sought to represent Hariri's interdisciplinary and forward-looking identity. While adapting the BU Office of Research theme as a foundation, I introduced custom components and layout patterns—such as grid-based research highlights, accordion-based FAQs, and expandable bios—to support deeper engagement with complex content.</p>
        </div>
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
    <br>
    <p>
    All screens were designed with mobile responsiveness in mind, ensuring seamless access across devices. I created a scalable design system in Figma, which included reusable components, spacing rules, and visual tokens for consistency throughout development. Every component was annotated with intended behavior for developers, such as hover states, collapsible logic, and breakpoint behavior.

</p>
    </br>
   
    <div className="mt-4">
      <img
        src="/images/image7.png"
        alt="Low to High Fidelity Prototypes"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
    <br></br>
        <div className="mt-4">
      <img
        src="/images/image8.png"
        alt="Low to High Fidelity Prototypes"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
    <p> Figure 3 and 4: Proposed Splash Page Designs</p>
       <br></br>
      <div className="mt-4">
      <img
        src="/images/image10.png"
        alt="Low to High Fidelity Prototypes"
        className="rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
      
    <h2 style="font-size: 2em; font-weight: bold;">Implementation and Handoff
    </h2>
    <p>
    Because the development was being carried out by BU's internal web team, I produced high-fidelity mockups and exportable assets along with a detailed UI documentation handoff. I also prepared a CMS layout guide to support future content editing by non-technical staff. Key sections included: flexible hero modules, news/event feeds, people pages, and a dynamic project gallery. Each was designed for ease of maintenance while maintaining visual cohesion across the site.
    </p>
    <br>
  
    <p>
    To improve editorial workflow, I mapped out custom content types and user permissions that could be implemented in the backend—such as tagging researchers by cluster, or linking news stories directly to faculty bios. These choices empowered the Hariri team to maintain an up-to-date, relevant web presence with minimal technical friction.
    </p>

    <br></br>
    <h2 style="font-size: 2em; font-weight: bold;">Outcomes and Next Steps
    </h2>
    <p>
    The redesigned website not only achieved a clean, modern interface but also helped improve internal content workflows and external engagement. Visitors can now easily navigate the breadth of Hariri's work—from AI policy research to faculty grants—and researchers within the institute have a platform that accurately reflects their collaborative efforts. The website better communicates Hariri's leadership in computational research while remaining accessible to new visitors unfamiliar with its mission.    
    </p>
    <br>
    <p>
    Looking ahead, I proposed a set of next-phase improvements including integration of a searchable research publication archive, a faculty dashboard for updating profiles, and analytics tracking to evaluate how users engage with the new structure over time. I also recommended periodic UX audits to keep pace with the Institute's growth and ensure the design evolves alongside its work.

  </p>
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
          <p className="text-[14px] text-muted-foreground mt-8 mb-4">{project.description2}</p>

          <h1 className="font-bold text-[40px] mt-4 mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-4">{project.date}</p>

      
           {/* Filtered Tags */}
                 <div className="mt-4 flex flex-wrap gap-2">
            {filteredProjects.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
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
