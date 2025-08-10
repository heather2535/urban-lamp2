"use client";
import { useState } from "react"
import Navigation from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package } from "lucide-react"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { Circle, Square, Triangle } from "lucide-react"

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

const project = {
    title: "Library Database E-Learning Platform",
    description: "Interactive virtual space for students to showcase their reads in an environment.",
    date: "January 10, 2024",
    video: "/video6.mp4?height=450&width=800", 
    content: `
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Problem</h2>
      <br>
      <p>For college students, accessing required readings and textbooks is a critical part of their academic success. However, many students find existing learning management systems (LMS) such as Blackboard and Canvas outdated and difficult to navigate. These platforms often serve multiple functions, from submitting assignments and tracking grades to participating in class discussions and accessing course materials.</p>
      <br>
      <p>The problem arises when these LMS platforms attempt to handle everything in one place, making it hard for students to efficiently locate textbooks, required readings, and other academic resources. As a result, students often experience frustration when trying to manage their academic content in one all-encompassing system.</p>

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Solution</h2>
      <br>
      <p>Journalink is an innovative platform designed to streamline the academic experience by storing all textbooks and course readings in one central location. Students can add notes, underline and highlight text, and bookmark important sections or pages for easy reference. By offloading the responsibility of accessing course materials from the main LMS, Journalink allows platforms like Blackboard and Canvas to focus on their primary tasks—gradebooks, assignment submissions, and class discussions—while making course documents more accessible and easier to navigate.</p>
      <p>This approach enhances the user experience by simplifying the process of accessing course readings, enabling students to stay organized and engaged with their academic content. With a more user-friendly interface that consolidates all required readings in one place, students will have easier access to important documents, boosting engagement and improving overall academic success.</p>

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Discovery</h2>
      <br>
      <p>Before diving into design and development, our team took a methodical approach to understanding the user experience and evaluating existing LMS platforms. This process began with a comprehensive SWOT analysis to identify the strengths, weaknesses, opportunities, and threats of current systems like Blackboard and Canvas. Through this, we discovered several critical gaps in usability and efficiency.</p>
      <br>           
      <p>Next, we conducted customer interviews to develop detailed personas, capturing the frustrations, needs, and pain points of students. These interviews helped us gain insights into how students interact with course materials and where current systems fall short.</p>
      <br>
      <p>To further refine our approach, we mapped out user journeys to understand students' tasks, goals, and frustrations when trying to navigate course materials. Through this process, we identified areas where user needs were unclear or misaligned with existing systems. This prompted the creation of follow-up questions to address these challenges more effectively.</p>
      <br>
      <p>During a collaborative team meeting, we reviewed the insights from the SWOT analysis, customer interviews, and journey maps. This discussion helped us clarify critical aspects of the app's design and functionality, ensuring that the solution would improve accessibility to academic resources and simplify the learning process.</p>
      <br></br>

      <h2 style="font-size: 2em; font-weight: bold;">Key Features</h2>
      <br>
      <p>To address the needs and frustrations identified during our discovery phase, we focused on the following key features for Journalink:</p>
      <br>
      <h2 style="font-size: 1.5em; font-weight: bold;">1. Improved Accessibility to Academic Resources </h2>
      <p>Journalink consolidates all of a student's textbooks and course readings in one convenient location, eliminating the need to navigate through multiple platforms to access essential resources.</p>
            
      <br>          
      <h2 style="font-size: 1.5em; font-weight: bold;">2. Collaborative Note-Taking</h2>
      <p>Students can collaboratively add notes, comment on, and highlight sections of course textbooks and required readings. This feature allows multiple users to interact with the same document simultaneously, fostering collaboration and enhancing student engagement.</p>
            
      <br>          
      <h2 style="font-size: 1.5em; font-weight: bold;">3. Linking Information Across Pages</h2>
      <p>Users can create databases within Journalink that link related information across different pages, enabling them to easily reference and cross-check materials throughout the course.</p>
        
      <br>          
      <h2 style="font-size: 1.5em; font-weight: bold;">4. Enhanced Team Collaboration</h2>
      <p>Commenting features, mentions, and shared workspaces allow users to coordinate projects and share knowledge more effectively. These tools encourage collaboration among peers, facilitating better learning outcomes.</p>
    
      <br></br>       
      <h2 style="font-size: 2em; font-weight: bold;">User Stories</h2>
      <br>     
      <p>To ensure the app meets the needs of its users, we developed three thorough user stories that outline the entire user journey:</p>
      <br>
      <h2 style="font-size: 1.5em; font-weight: bold;">1. Template Form Creation</h2>        
      <p>To ensure the app meets the needs of its users, we developed three thorough user stories that outline the entire user journey:</p>
      <br>     
      <h2 style="font-size: 1.5em; font-weight: bold;">2. Networking and Transparency</h2>         
      <p>Users should be able to easily connect with recruiters and employees in similar roles to expand their professional network. Transparency in company information and the internship/application process is also essential to keep students informed.</p>
      <br>     
      <h2 style="font-size: 1.5em; font-weight: bold;">3. Specialized Job Listings</h2>          
      <p>The app provides a filtering system for active jobs and specialized roles with up-to-date information, ensuring that students can find relevant opportunities quickly.      </p>
      <p>Additionally, we created a sitemap to address these opportunities and ensure that the platform is both functional and user-friendly.</p>

      <br></br>     
      <h2 style="font-size: 2em; font-weight: bold;">Usability Testing</h2>
      <br>
      <h2 style="font-size: 1.5em; font-weight: bold;">1. Sign-On Screen</h2>       
      <p>Finding: On the sign-up/login page, users had difficulty locating where to select "Login" if they already had an account. Solution: We redesigned the layout to make the login section more prominent and easier to identify.</p>

      <br>       
      <h2 style="font-size: 1.5em; font-weight: bold;">2. Discovery Page Layout</h2>       
      <p>Finding: On the discovery page, course books and titles were shown as a list, making it difficult for users to visually identify books based on their covers. Solution: We transformed the list into a scrollable grid, allowing users to see the cover images of the books. This made the discovery process more dynamic and visually engaging, offering more user interaction points.</p>

      <br></br>       
      <h2 style="font-size: 2em; font-weight: bold;">Conclusion</h2>  
      <br>
      <p>Journalink provides a seamless and user-centric platform for students to manage their course materials more effectively. By simplifying access to textbooks and readings, and by providing a space for collaboration and annotation, Journalink enhances the overall learning experience and helps students stay engaged with their coursework. With its intuitive design, Journalink improves accessibility, reduces frustration, and empowers students to take control of their academic journey.</p>
      <br>
      <p>By streamlining the academic resource access and offering collaborative tools, Journalink aims to make course material management simpler and more efficient, ensuring students are equipped to succeed in their studies.</p>

      <br></br>


    `,
    tags: ["Web Development", "UI/UX Design"],
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
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-32 left-16 text-orange-300 opacity-15"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Circle size={80} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-24 text-purple-300 opacity-20"
          animate={{ rotate: -360, y: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Square size={60} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/3 text-pink-300 opacity-25"
          animate={{ rotate: 180, x: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Triangle size={45} />
        </motion.div>
      </div>

     
      <main className="container mx-auto px-6 lg:px-8 relative z-10">
        <article className="prose lg:prose-xl dark:prose-invert">
         

          {/* Hero Section - Two Column Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-5 gap-16 items-start mt-10 mb-16"
          >
            {/* Right Column - Video */}
            <motion.div
              className="md:col-span-3 relative order-first md:order-last"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative max-w-[400px] mx-auto mt-8 md:mt-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
                  <video 
                    controls 
                    width="100%" 
                    height="auto" 
                    className="object-cover rounded-lg aspect-[3/4]"
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>

            {/* Left Column - Text Content */}
            <motion.div
              className="md:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-5xl lg:text-7xl font-black tracking-tight leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Library</span>{" "}
                <span className="text-black">Database E-Learning Platform</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex items-center gap-3 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-sm">{project.date}</span>
              </motion.div>

              {/* Tags */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {filteredProjects.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll to Explore */}
          <motion.div
            className="flex flex-col items-center justify-center gap-2 text-gray-500 mt-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronRight className="w-4 h-4 rotate-90" />
          </motion.div>

          {/* Three Columns Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Role</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Design Strategist, UX</p>
                  <p className="text-gray-600">Researcher, UI/UX</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Team</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Heather Davies</p>
                  <p className="text-gray-600">Solo Project</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Duration</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">Sep. 2024 - Dec. 2024</p>
                  <p className="text-gray-600">4 mo. total</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Problem Statement and Goal Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Problem</h3>
                <p className="text-gray-700 leading-relaxed">
                  For college students, accessing required readings and textbooks is a critical part of their academic success. However, many students find existing learning management systems (LMS) such as Blackboard and Canvas outdated and difficult to navigate. These platforms often serve multiple functions, from submitting assignments and tracking grades to participating in class discussions and accessing course materials.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The problem arises when these LMS platforms attempt to handle everything in one place, making it hard for students to efficiently locate textbooks, required readings, and other academic resources. As a result, students often experience frustration when trying to manage their academic content in one all-encompassing system.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Solution</h3>
                <p className="text-gray-700 leading-relaxed">
                  Journalink is an innovative platform designed to streamline the academic experience by storing all textbooks and course readings in one central location. Students can add notes, underline and highlight text, and bookmark important sections or pages for easy reference.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  By offloading the responsibility of accessing course materials from the main LMS, Journalink allows platforms like Blackboard and Canvas to focus on their primary tasks—gradebooks, assignment submissions, and class discussions—while making course documents more accessible and easier to navigate.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-20"
          >
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </motion.div>

        </article>
      </main>
    </div>
  )
}

