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
  title: "Fuse Networking App",
  date: "January 3, 2024",
  image: "/images/image29.png",
  content: `
  
    <br></br>
    <div className="grid grid-cols-3 gap-4">
      <div></div>
      <div className="mt-4">
        <img
          src="/images/image30.png"
          alt="ALS Clinical Decision Tool"
          className="rounded-lg shadow-md w-full max-w-sm mx-auto"
          style={{ height: "auto" }}
        />
        <h1 className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Figure 1: This is the Topic Model view of my final dashboard design.</h1>
      </div>
      <br></br>
           <div className="mt-4">
        <img
          src="/images/image31.png"
          alt="ALS Clinical Decision Tool"
          className="rounded-lg shadow-md w-full max-w-3xl"
          style={{ height: "auto" }}
        />
        <h1 className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Figure 2: And here's the Synopsis Graph view of my final design!</h1>
      </div>
      <div></div>
    </div>
    <br></br>
    <h2 style="font-size: 2em; font-weight: bold;">
V3 — Motion and Animation</h2>
    <br>
    <h1>
    Learning about and utilizing animation was very compelling to me because although I had worked with visual design in the past, I'd never really had an opportunity to implement animation and motion in a design before. I knew I wanted my animations to supplement the welcoming nature of my dashboard, so it was crucial that my animations enhanced my UX, and didn't sabotage it.
  </h1>
  <br>
      <h1>
      Upon assessing my dashboard, there were a few animations I immediately sought to implement, and a few others that occurred to me as I worked through my next iteration. I knew that I wanted to have the user be able to scroll down the Recommendaton bar ; however, I had to make sure that the way I animated in XD actually made it feel like a scroll bar, and not just a dissolving mess downward. This meant that all of the comment panels had to stay in place and not warp as the user scrolled.
      </h1>
      <br>
      <h1>
      Another animation that proved successful was the ability to click on the Graph View toggle to select which graph was to be viewed: Semantic Network or Topic Analysis. For this animation, I used an easing-out dissolve of the darkened button to indicate that the button was essentially shifting to the next question.  
</h1>

<h1>

 
  `,
  tags: ["UI/UX Design", "Branding"],
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
      <div className="mt-2 flex gap-4 items-center justify-center">
        <button onClick={prev} className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
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
          >
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <span className="text-gray-700 dark:text-gray-300">{index + 1} / {images.length}</span>
        <button onClick={next} className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
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
          >
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
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
    <div className="min-h-screen bg-white bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-black dark:via-[#1a1f2e] dark:to-[#2a2f3e]">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative w-full bg-white dark:bg-gray-900">
        {/* Top Back Button */}
        <div className="absolute top-8 left-0 right-0 z-10">
          <div className="container max-w-6xl mx-auto px-4">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-xs text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-6 py-3 rounded-lg transition-all duration-200 font-medium"
            >
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
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="container max-w-6xl mx-auto px-4 py-8 md:py-16 mt-16">
          <div className="flex flex-col md:grid md:grid-cols-5 gap-6 md:gap-8 items-center">
            {/* Text Content - First Column */}
            <div className="w-full order-2 md:order-1 md:col-span-2">
              <h1 className="font-bold text-2xl md:text-[32px] mb-3 md:mb-4 text-gray-900 dark:text-white whitespace-pre-line">{project.title}</h1>
              <h2 className="text-gray-700 dark:text-gray-300 mb-3 md:mb-4">{project.date}</h2>
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

            {/* Image - Second Column */}
            <div className="w-full order-1 md:order-2 md:col-span-3">
              <div style={{padding: "62.5% 0 0 0", position: "relative"}}>
                <iframe 
                  src="https://player.vimeo.com/video/1000863799?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                  style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} 
                  title="FUSE Final Demo"
                />
              </div>
              <script src="https://player.vimeo.com/api/player.js" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent">
        <main className="w-full">
          <article className="prose lg:prose-xl dark:prose-invert">
            {/* Three Columns Section */}
            <div className="container max-w-3xl mx-auto px-4">
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
                      Solo Project
                    </p>
                    
                  </div>
                </div>
                <div className="p-4 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Duration</h3>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-sm text-muted-foreground">
                      Jan. 2024 - May. 2024
                    </p>
                    <p className="text-sm text-muted-foreground">
                      4 mo. total
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Columns Section */}
            <div className="container max-w-3xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                <h3 className="font-bold text-lg mb-2">Problem</h3>

                  <h2 className="text-left text-sm md:text-md lg:text-md">
                  Navigating the internship application process can be frustrating for students. Many encounter outdated listings, disorganization, and a lack of transparency about qualifications and salaries. The frustration is compounded by poor follow-ups and difficulty in finding updated information. Students also struggle with complex, non-intuitive applications and wish for clearer filters. Additionally, there is a strong desire for easier connections with people who can provide referrals and resume support.

                  </h2>
                </div>
                <div>
                <h3 className="font-bold text-lg mb-2">Solution</h3>
                  <h1 className="text-left text-sm md:text-md lg:text-md">
                  Imagine having a tool that simplifies the internship application process and enhances your job search experience. That tool is Fuse. It's a comprehensive application designed to keep you informed and connected. Fuse features a live application tracker and quick ways to connect with recruiters. Companies are required to list detailed job descriptions, requirements, and company statistics, with reviews available for each job listing. The app includes active/new listing sections, an easy apply feature, and a filtered search option. Additionally, Fuse offers chatrooms tailored to your occupational interests and seamless access to recruiters and mentors, making it an ideal platform for streamlining your job search and networking efforts.

                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full bg-white dark:bg-gray-900">
              <div className="container max-w-3xl mx-auto px-4">
                <div className="mt-8">
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8">
                  <div className="space-y-6">
                    <div className="w-48 mx-auto">
                      <div id="discovery-slideshow" />
                      <Slideshow 
                        images={[
                          "/images/image38.png",
                          "/images/image39.png",
                          "/images/image40.png",
                          "/images/image41.png",
                          "/images/image42.png",
                          "/images/image43.png"
                        ]} 
                        id="discovery-slideshow"
                      />
                    </div>
                    
                    {/* Preview Grid */}
                    <div className="max-w-3xl mx-auto mt-8">
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                        <img
                          src="/images/image38.png"
                          alt="Preview 1"
                          className="rounded-lg w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                        <img
                          src="/images/image39.png"
                          alt="Preview 2"
                          className="rounded-lg w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                        <img
                          src="/images/image40.png"
                          alt="Preview 3"
                          className="rounded-lg w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                        <img
                          src="/images/image41.png"
                          alt="Preview 4"
                          className="rounded-lg w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                        <img
                          src="/images/image42.png"
                          alt="Preview 5"
                          className="rounded-lg w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                        <img
                          src="/images/image43.png"
                          alt="Preview 6"
                          className="rounded-lg w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-white dark:bg-gray-900">
              <div className="container max-w-3xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                  <div className="space-y-6">
                    <br></br>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Discovery</h2>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                    Before the meeting, our team conducted a comprehensive SWOT analysis to evaluate existing internship application platforms and identify gaps and opportunities. We also carried out customer interviews to develop detailed personas, capturing students' frustrations and needs. Additionally, we mapped out user journeys to understand their tasks, goals, and pain points. As we analyzed these findings, we identified areas where user needs and design requirements were unclear or misaligned. This prompted us to prepare a set of follow-up questions to refine our approach.
                    </h2>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                    During our meeting, we reviewed the insights from our research, including the SWOT analysis results, user personas, and journey maps. This collaborative discussion allowed us to address critical aspects of the app design, ensuring that Fuse effectively simplifies the internship application process, improves transparency, and enhances user connectivity with recruiters and mentors.
                    </h2>
                    
                    <div className="bg-background fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-black dark:via-[#1a1f2e] dark:to-[#2a2f3e] flex mx-auto w-full rounded-lg p-6 mt-6">
                      <ul className="list-disc pl-6 space-y-2">
                        <li className="text-left text-sm md:text-md lg:text-md">
                          <h2>Search and Networking</h2>
                        </li>
                        <li className="text-left text-sm md:text-md lg:text-md">
                          <h2>Applicant portal setup</h2>
                        </li>
                        <li className="text-left text-sm md:text-md lg:text-md">
                          <h2>Job Listing Management</h2>
                        </li>
                        <li className="text-left text-sm md:text-md lg:text-md">
                          <h2>Allow applicants to send acceptances and schedule interview times through the app and email.</h2>
                        </li>
                      </ul>
                    </div>
                    <br></br>
                    <h3 className="font-bold text-3xl mb-2 text-center">Ideation</h3>
                    <h3 className="font-bold text-xl mb-2 ">User Stories</h3>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                    The client provided three thorough user stories that addressed the entire user journey, involving tasks such as template form creation, sharing, editing, duplicating, and attaching a template to a post for others to complete. 
                    </h2>
                    
                    <div className="bg-background fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-black dark:via-[#1a1f2e] dark:to-[#2a2f3e] flex mx-auto w-full rounded-lg p-6 mt-6">
                      <ol className="list-decimal pl-6 space-y-3">
                        <li className="text-left text-sm md:text-md lg:text-md">
                          <h2>As a student, I want to create and save a template form so that I can easily apply to multiple internships with similar requirements.</h2>
                        </li>
                        <li className="text-left text-sm md:text-md lg:text-md">
                          <h2>As a student, I want to share my template with other students so that they can use it for their applications.</h2>
                        </li>
                        <li className="text-left text-sm md:text-md lg:text-md">
                          <h2>As a student, I want to edit and duplicate existing templates so that I can customize them for different applications.</h2>
                        </li>
                        <li className="text-left text-sm md:text-md lg:text-md">
                          <h2>As a student, I want to attach my template to a job posting so that other applicants can use it.</h2>
                        </li>
                      </ol>
                    </div>
                    <br></br>
                    <h3 className="font-bold text-xl mb-2 ">User Flows</h3>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                     For effective management, we divided the flows. I worked in collaboration with another designer on user flow three—a pivotal flow that shapes the template experience within the CRM, and a prominent feature of the product. Initially, I tackled its complexity independently. After completing my version of the flow, I presented the design to my teammate, and together, we refined and improved the aspects that required attention. This approach allowed me to apply my design thinking skills to create a streamlined form creation flow.
                    </h2>
                    
                    <div className="mt-6">
                      <img
                        src="/images/image44.png"
                        alt="User Flow Diagram"
                        className="rounded-lg  w-full max-w-3xl mx-auto"
                        style={{ height: "auto" }}
                      />
                      <h2 className="text-left text-sm md:text-md lg:text-md">User Flow 3: Template Creation and Management</h2>
                    </div>
                    <h3 className="font-bold text-xl mb-2 ">Sitemap</h3>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                    The sitemap was created to address three main oppurtunities. It should provide a way for users to easily connect with recruiters and employees from similar roles to expand users network. Next, it provides a way for users to gain transparency on company information and on their application processes. Finally, providing a filtering system for active jobs and specialized roles with up to date information.
                    </h2>

                    <div className="mt-6">
                      <img
                        src="/images/image45.png"
                        alt="Sitemap Diagram"
                        className="rounded-lg w-full max-w-3xl mx-auto"
                        style={{ height: "auto" }}
                      />
                      <h2 className="text-left text-sm md:text-md lg:text-md">Sitemap: Navigation Structure and Information Architecture</h2>
                    </div>
                    <h3 className="font-bold text-3xl mb-2 text-center ">Design</h3>
                    <h3 className="font-bold text-xl mb-2">Wireframes</h3>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                    In our design session, we decided to start all user flows from the Submissions page. Our intent was to enhance clarity with precise language. To achieve this, we made a deliberate change, renaming 'My Applications' to 'Submissions,' making it clear that all types of submissions (applications, surveys, registrations, and more) would be conveniently accessible in one place. This strategic move to centralize submissions, along with features like individual submissions, a template overview tab, and a quick template creation button in the top-right corner, streamlined user interactions for a more cohesive and seamless experience.
                    </h2>
                    
                    <div className="mt-8">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <img
                          src="/images/image46.png"
                          alt="Wireframe 1"
                          className="rounded-lg shadow-md w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                        <img
                          src="/images/image47.png"
                          alt="Wireframe 2"
                          className="rounded-lg shadow-md w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                        <img
                          src="/images/image48.png"
                          alt="Wireframe 3"
                          className="rounded-lg shadow-md w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                        <img
                          src="/images/image49.png"
                          alt="Wireframe 4"
                          className="rounded-lg shadow-md w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                        <img
                          src="/images/image50.png"
                          alt="Wireframe 5"
                          className="rounded-lg shadow-md w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                        <img
                          src="/images/image51.png"
                          alt="Wireframe 6"
                          className="rounded-lg shadow-md w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                        <img
                          src="/images/image52.png"
                          alt="Wireframe 7"
                          className="rounded-lg shadow-md w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                        <img
                          src="/images/image53.png"
                          alt="Wireframe 8"
                          className="rounded-lg shadow-md w-full cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ height: "auto" }}
                        />
                      </div>
                      
                      <h2 className="text-center text-sm md:text-md lg:text-md">Initial wireframes showing the submission flow and template management</h2>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Reflection</h2>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                    Presenting my prototype with the aim to help users find jobs and internships easily and apply to them quickly. 
                    </h2>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                    The first change I made to my prototype based on user feedback was with visuals. The initial version was looking to bland and old fashioned, so I switched to a visually more appeal look for all changes that you'll see in my prototype. 
                    </h2>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                    The second change I made was with the job filters. Initially users were having trouble finding specific filters so I incorporated a search bar and a filter system that relies on tags or keywords to find relevant job offers. 
                    </h2>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                    A third change I made related to the quick apply feature. Before there was no immediate feedback to the user that the application was submitted, so I added a confirmation page as well as a page where the user can view their pending or past applications. 
                    </h2>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                    Now moving on to my clickable prototype, first you'll be taken to the login and registration pages, where you would enter a new or existing username and password in order to get into the app.
                    </h2>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                    Once registering or logging in, the next ideal step would be to go to the account page and fill out the information fields that appear, including uploading your resume in order for the quick apply feature to work. So let's go to the filters page and try looking for a job relating to relevant fields. So you would pick the filters you wanted and press 'apply filters' to see job offerings related to your entered fields. 
                    </h2>
                    <h2 className="text-left text-sm md:text-md lg:text-md">
                      Next, you should be able to see some job offerings, and be able to click on them to start your
application. You will then be able to verify the information entered into you account is correct before hitting the 'quick apply' feature that will automatically fill the application out for you
                    </h2>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-white dark:bg-gray-900">
              <div className="container max-w-3xl mx-auto px-4">
                <div className="flex justify-center py-8">
                  <Link 
                    href="/projects" 
                    className="inline-flex items-center gap-2 text-xs text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-6 py-3 rounded-lg transition-all duration-200 font-medium"
                  >
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
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back to Projects
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
