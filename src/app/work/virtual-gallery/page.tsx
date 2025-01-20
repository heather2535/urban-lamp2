"use client";
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing

const project = {
    title: "Library Database E-Learning Platform",
    description: "Interactive virtual space for students to showcase their reads in an environment.",
    date: "January 10, 2024",
    description2: "Heather Davies - Jan 10, 2024",
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
      <p>During a collaborative team meeting, we reviewed the insights from the SWOT analysis, customer interviews, and journey maps. This discussion helped us clarify critical aspects of the app’s design and functionality, ensuring that the solution would improve accessibility to academic resources and simplify the learning process.</p>
      <br></br>

      <h2 style="font-size: 2em; font-weight: bold;">Key Features</h2>
      <br>
      <p>To address the needs and frustrations identified during our discovery phase, we focused on the following key features for Journalink:</p>
      <br>
      <h2 style="font-size: 1.5em; font-weight: bold;">1. Improved Accessibility to Academic Resources </h2>
      <p>Journalink consolidates all of a student’s textbooks and course readings in one convenient location, eliminating the need to navigate through multiple platforms to access essential resources.</p>
            
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
    tags: ["Web Development", "Data Visualization", "Crypto", "Finance"],
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
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container max-w-2xl mx-auto px-4 py-8">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          <p className="text-[14px] text-muted-foreground mt-8 mb-4">{project.description2}</p>

          <h1 className="font-bold text-[40px] mt-4 mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-4">{project.date}</p>

          {/* Tag and Search Filters */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="flex-grow max-w-md">
              <SearchBar onSearch={setSearchQuery} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="../" onClick={() => setSelectedTag(null)} className="px-4 py-2 border rounded">
                All
              </Link>
              {allTags.map((tag) => (
                <Link 
                  key={tag} 
                  href="../" 
                  onClick={() => setSelectedTag(tag)} 
                  className={`px-4 py-2 border rounded ${selectedTag === tag ? "bg-blue-500 text-white" : ""}`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Video section */}
          <div className="relative mb-6">
            <video controls width="100%" height="auto" className="object-cover rounded-lg">
              <source src={project.video} type="video/mp4" />
              {/* Fallback text for unsupported browsers */}
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="lead">{project.description}</p>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />

          {/* Filtered Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {filteredProjects.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}
