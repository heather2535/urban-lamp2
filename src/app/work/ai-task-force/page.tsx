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
  title: "Generative AI Advice Dashboard",
  date: "December 3, 2024",
  image: "/images/image29.png",
  content: `
  
    <br></br>
    <div className="max-w-3xl mx-auto">
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
  tags: [ "Web Development", "Product Design", "UI/UX"],
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
    <div className="min-h-screen bg-background fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-black dark:via-[#1a1f2e] dark:to-[#2a2f3e]">
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
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Text Content - First Column */}
            <div className="w-full order-2 md:order-1">
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
            <div className="w-full order-1 md:order-2">
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
                      Jason Huang
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Wesley Wildman
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
                  <h2 className="text-gray-700 dark:text-gray-300">
                  For this project, my goal was to design a visual and interactive web app for student researchers and faculty conducting research in the classroom. I was focused on a scenario in which a team of students are preparing a policy brief on integrating AI-driven tools into university classroom settings in their Data, Ethics, and Society course. However, due to an overall lack of comprehensive understanding in addressing the ethical implications of these technologies, student researchers and educators are seeking a way to promote better analysis in addressing the complex landscape of ethical AI usage. I designed a visual and interactive web app, containing real data from a Data, Ethics, and Society course at Boston University, to help solve this issue. 
                  </h2>
                </div>
                <div>
                  <h1 className="text-gray-700 dark:text-gray-300">
                  My visual and interactive web app had two views: a detailed dashboard view and a adding articles view. I wanted to make sure that while the detailed dashboard view allowed for exploration on the semantic network interconnection of various research papers, the adding articles view would ensure quick access to critical information about a paper and assess its relevance to her research. In order to create a strong user experience that met each of these requirements, it was important for me to first conduct adequate design research. Here's how the process unfolded!
                  </h1>
                </div>
              </div>
            </div>

            <div className="container max-w-3xl mx-auto px-4">
              <div className="mt-8">
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-6">
                  <img
                    src="/images/image32.jpg"
                    alt="Design Process"
                    className="rounded-lg shadow-md w-full max-w-sm mx-auto"
                    style={{ height: "auto" }}
                  />
                  <img
                    src="/images/i.jpg"
                    alt="Design Process"
                    className="rounded-lg shadow-md w-full max-w-sm mx-auto"
                    style={{ height: "auto" }}
                  />
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard View</h2>
                  <h2 className="text-gray-700 dark:text-gray-300">
                    <strong>Idea 1:</strong> A search bar to input queries to start your research, with pre-defined example prompts to guide users. Search options include additional filters or settings for refining the search.
                  </h2>
                  <h2 className="text-gray-700 dark:text-gray-300">
                    <strong>Idea 2:</strong> A list of papers or articles matching the search query are displayed in the search results, with options to select papers to add to a graph.
                  </h2>
                  <h2 className="text-gray-700 dark:text-gray-300">
                    <strong>Idea 3:</strong> Semantic network graph displays a connections/node-based search. This graphical representation displays connections between papers, filtered by tags, keywords, or other attributes. Right navigation displays detailed information about the selected paper, including title, tags, and additional information.
                  </h2>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Adder View</h2>
                  <h2 className="text-gray-700 dark:text-gray-300">
                    <strong>Idea 1:</strong> The User Profile Section allows access to user profile and settings. By tapping on saved graphs, a list of saved graphs created by the user opens. Similarly, the saved papers button opens a list of papers saved by the user. while the settings allow for configuration preferences to be set for the application, such as light mode and dark mode. Finally, there is an option to log out of the application.
                  </h2>
                  <h2 className="text-gray-700 dark:text-gray-300">
                    <strong>Idea 2:</strong> List View/Grid View Toggle options to view saved papers in a list or grid format.
                  </h2>
                  <h2 className="text-gray-700 dark:text-gray-300">
                    <strong>Idea 3:</strong> Semantic network graph displays a connections/node-based search. This graphical representation displays connections between papers, filtered by tags, keywords, or other attributes. Right navigation displays detailed information about the selected paper, including title, tags, and additional information.
                  </h2>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-gray-700 dark:text-gray-300">
                  After much ideation, I finally decided on emphasizing idea 1, the three step process, as there was too much information and functionality features to have it all displayed on one screen. However, I knew that I still wanted to incorporate components of the other 2 concepts as well. Here's what the iterative process was like!
                </h2>
                <br></br>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">V1– Black and White Iterations</h2>
                <br></br>
                <h2> Dashboard view</h2>
                <div className="mt-6">
                  <img
                    src="/images/image33.png"
                    alt="Black and White Iterations"
                    className="rounded-lg shadow-md w-full max-w-3xl mx-auto"
                    style={{ height: "auto" }}
                  />
                  <h2 className="text-center text-gray-700 dark:text-gray-300 mt-4">My first black-and-white iterations of the dashboard view.</h2>
                <br></br>
                <h2 className="text-gray-700 dark:text-gray-300">
                There were a few key features I wanted to highlight in my first digital iterations. First, in the dashboard view, I wanted to make sure the Selected Articles, Recommended Articles, and Connections Node Graph were all emphasized enough. Thus, I wanted to lay out the visual hierarchy in a way that allowed the user to follow those components in a natural, cohesive manner.
                </h2>
                <br></br>
                <h2 className="text-gray-700 dark:text-gray-300">
                The eye immediately gravitates towards the Selected Articles bar on the left, and the user can quickly reference their chosen content along with relevant tags and metadata. As the eye moves to the right, the user is able to identify the box to see their recommended articles. Then, they can scan the list of additional articles tailored to the user's interests. For the digital iteration, I included and detailed a few additional capabilities, such as tagging posts with hashtags to organize commentary, as well as the ability to expand dropdowns for more details.
                </h2>
                <br></br>
                <h2 className="text-gray-700 dark:text-gray-300">
                The eye then transitions to the Connections Node Graph on the far right. This visual representation maps out the relationships between different articles, offering more insight into how various pieces of content are interconnected. The interactive controls at the bottom of this section, such as zooming in, zooming out, and downloading, enhance user interaction.
                </h2>
                <br></br>
                <h2 className="text-gray-700 dark:text-gray-300">
                Clicking on an entry in the Selected or Recommended bar opens a comprehensive view on the right side,. This view includes an overview, references, and citations, ensuring that users have all the necessary information in one place. For this iteration, I also included a tagging feature, allowing users to categorize articles with relevant keywords like AI Policy and AI Ethics. This addition helps in organizing and filtering content based on specific themes or topics.
                </h2>
                <br></br>
                <h2 className="text-gray-700 dark:text-gray-300">
                I made sure to utilize a grid in my first iteration so that I could layout out my components in a way that was visually complementary and unified. Using the grid structure, I sought to balance the detailed article view with the Selected and Recommended bar, while still emphasizing the Connections Node Graph. However, in hindsight, I don't think I did a great job with balance on iteration 1, as the article details box was shifted too far to the left on the screen. This is something I aimed to fix on future iterations.
                </h2>
                <br></br>
                  <h2>Adder View V-1</h2>
                <div className="mt-12">
                  <img
                    src="/images/image34.png"
                    alt="Dashboard Iteration"
                    className="rounded-lg shadow-md w-full max-w-3xl mx-auto"
                    style={{ height: "auto" }}
                  />
                  <h2 className="text-center text-gray-700 dark:text-gray-300 mt-4">Iteration 1 of the adder view.</h2>
                  <br></br>
                  <h2 className="text-gray-700 dark:text-gray-300">
                  My first digital iteration for the adder view is an action that occurs when the user hits the add button on the top of the dashboard navigation. When this occurs, the central part of the screen opens a pop-up window. While the visual components are much more simple, I flushed out a few additioonal functionalities the adder view should have. A few of these include: 
                    <ol className="list-decimal pl-6 mt-2 space-y-2">
                      <li>A search bar to input queries to start your research, with pre-defined example prompts to guide users.</li>
                      <li>A list of papers or articles matching the search query are displayed in the search results, with options to select papers to add to a graph.</li>
                      <li>A semantic network graph displays a connections/node-based search. This graphical representation displays connections between papers, filtered by tags, keywords, or other attributes.</li>
                    </ol>
                </h2>
                <br></br>
                <h2 className="text-gray-700 dark:text-gray-300">
                A few of the design decisions I made included placing the adder view at the central part of the screen. Because this is the primary functionality, I felt it should occupy the most significant portion of the screen.For the search button, I chose to place it next to the search bar because this is where the mouse, and eye, naturally gravitates toward.                </h2>
                </div>

                <div className="mt-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <img
                        src="/images/image35.png"
                        alt="Adder View Iteration"
                        className="rounded-lg shadow-md w-full max-w-lg mx-auto"
                        style={{ height: "auto" }}
                      />
                         <img
                        src="/images/image36.png"
                        alt="Adder View Iteration"
                        className="rounded-lg shadow-md w-full max-w-lg mx-auto"
                        style={{ height: "auto" }}
                      />
                    </div>
                    <div className="space-y-6">
                      <h2 className="text-gray-700 dark:text-gray-300">
                      For my next dashboard view black-and-white iteration, I made a few design tweaks to convey different feelings when looking at the dashboard. Based on my persona analysis, I concluded that most students would want to feel less overwhelmed by the paper details on the screen. I decided to make the panels rounded to convey a more lighthearted, fun vibe. This is also why I included more space for the connections graph and further emphasized it to make things feel more balanced.  
                      </h2>
                      <h2 className="text-gray-700 dark:text-gray-300">
                        
                      I originally kept the instructor view more square on my second iteration, but I later decided to change this to achieve visual consistency among the two dashboards. The persona of Prof. Rodriguez indicated she wanted policy research to seem "chill" to her students, so I determined it'd be important for her dashboard to also feel more lighthearted and soft. A couple other design changes I made were expanding the size of the adder box and distinguishing suggested buttons more clearly.
                      </h2>
                    </div>
                    
               

                  </div>
                  <br></br>
                  <br></br>
                  
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">V2 — Color Iterations</h2>
                  <br></br>
                  <h2 className="text-gray-700 dark:text-gray-300">
                  I was really excited to start working with color because I felt it would be able to help me accent certain features of my dashboard. Furthermore, I knew that the right color would be able to reaffirm the feeling of lightheartedness I wanted to convey.
                  </h2>
                  <br></br>
                  <h2 className="text-gray-700 dark:text-gray-300">
                  I started by playing around with a light blue and light red color. After tweaking the values of each hue for a bit, I realized that blue felt too prototype-y and text was difficult to read, and red was a little too bold. Ultimately, I settled on a shade of light purple that I felt captured the essence of my dashboard: it was calming, clean, and most importantly, welcoming. I wanted my dashboard to invite the user to interact with it, and the softness of the lavender purple I chose really conveyed that sense of emotional draw.
                        </h2>

                <br></br>
                <h2 className="text-gray-700 dark:text-gray-300">
                Color proved to be a very effective tool, as it allowed me to draw the user's eye to certain parts of the page. In addition, it also helped me demonstrate certain capabilities. For example, I made the "Search" button filled with the purple color to highlight its importance, but I almost made the area surrounding the selected question a few shades darker. This implied that the question had been "clicked on" as though it were a button!  
                        </h2>
                </div>
                </div>
              </div>
            </div>
            

            <div className="w-full bg-white dark:bg-gray-900 mt-12">
              <div className="bg-white dark:bg-gray-900 container max-w-6xl mx-auto px-4 py-8">
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
              </div>
            </div>

            {/* Bottom Back Button */}
            <div className="mt-16 flex justify-center">
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
          </article>
        </main>
      </div>
    </div>
  )
}
