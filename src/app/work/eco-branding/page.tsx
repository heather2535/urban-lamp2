"use client";
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package } from "lucide-react"

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
  "Crypto": <Cpu className="h-3 w-3" />,
  "Finance": <BarChart className="h-3 w-3" />,
}

const project = {
    title: "Designing a DEI Consulting Web Application",
    description: "Brand identity design for a line of sustainable, eco-friendly products.",
    date: "March 15, 2024",
    video: "/video4.mov?height=450&width=800", 
    content: ``,
    tags: ["Graphic Design", "Branding"],
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
      <main className="container max-w-full mx-auto px-4 py-16">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
            {/* Back Button */}
            <div className="absolute top-24 left-0 right-0 z-10">
          <div className="container max-w-full mx-auto px-4">
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
        
          {/* Hero Section - Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center mt-10 mb-16">
            {/* Right Column - Video (now first on mobile) */}
            <div className="md:col-span-3 relative order-first md:order-last">
              <video 
                controls 
                width="100%" 
                height="auto" 
                className="object-cover rounded-lg"
                poster="/image4.png"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Left Column - Text Content */}
            <div className="md:col-span-2 space-y-6">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-[40px]">{project.title}</h1>
              <h2 className="text-muted-foreground">{project.date}</h2>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {filteredProjects.map((tag) => (
                  <Link 
                    key={tag} 
                    href={`/projects?tag=${encodeURIComponent(tag)}`}
                    className="no-underline"
                  >
                    <span 
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors cursor-pointer"
                    >
                      {tagIcons[tag]}
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>

            </div>
          </div>

          {/* Three Columns Section */}
          <div className="bg-background fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:to-[#1a2a3a] container max-w-full mx-auto px-4 flex justify-center">
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
                    Ruby Chen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Avdeep Kaur
                  </p>
                  <p className="text-sm text-muted-foreground">
                    David Lee
                  </p>
                  
                </div>
              </div>
              <div className="p-4 rounded-lg text-center">
                <h3 className="font-bold text-lg mb-2">Duration</h3>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-sm text-muted-foreground">
                    Sept. 09 '24 - Feb. 30 '25
                  </p>
                  <p className="text-sm text-muted-foreground">
                    6 months total
                  </p>
                </div>
              </div>
              
            </div>
            
          </div>

          {/* Full Width Text Section */}
          <div className="w-full bg-background fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:to-[#1a2a3a]">
            <div className="container max-w-3xl mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                <h3 className="font-bold text-lg mb-2">Problem Statement</h3>
                  <h2 className="text-left text-sm md:text-md lg:text-md">
                    A comprehensive web application designed to facilitate DEI consulting services, enabling organizations to create more inclusive and equitable workplaces. The platform combines user-friendly interfaces with powerful tools for assessment, training, and progress tracking.
                  </h2>
                </div>
                <div>
                <h3 className="font-bold text-lg mb-2">Goal</h3>
                  <h2 className="text-left text-sm md:text-md lg:text-md leading-relaxed">
                    Through extensive research and user testing, we developed a solution that addresses the unique needs of both consultants and organizations, making DEI initiatives more accessible and effective.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          
          {/* User Archetypes Section */}
          <div className="w-full bg-white dark:bg-gray-900">
            <div className="container max-w-3xl mx-auto px-4 py-16">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">User Archetypes</h3>
              <h2 className="text-sm md:text-md lg:text-md">The people using this platform as discussed in previous meetings fall into three archtypes and we are trying to tailor the website to help people from all these different archetypes, like activists, and say intellectuals who want to join discussions and businesses who want to be sociall consciouss, our goal was to cater to all three archetypes and provide features that would create an experience for all types of people who are using this website.</h2>
              <br></br>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Research Card */}
                <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Activists</h3>
                  <h2 className="text-gray-700 dark:text-gray-300 text-sm md:text-md lg:text-md">
                    Activists who are working on the ground level to enact social justice change.
                  </h2>
                </div>

                {/* Design Card */}
                <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Intellectuals</h3>
                  <h2 className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-md lg:text-md">
                    People in academia who want to join discussions around social justice.
                  </h2>
                </div>

                {/* Development Card */}
                <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Businesses</h3>
                  <h2 className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-md lg:text-md">
                    People who want their business to be more socially conscious.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* User Personas Section */}
          <div className="w-full bg-white dark:bg-gray-900">
            <div className="container max-w-3xl mx-auto px-4 pb-16">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">User Research</h3>
              <h2 className="text-sm md:text-md lg:text-md mb-4">Now I'll just briefly dive into some of the user research that we made before we started the process of designing this app.</h2>
              <h2 className="text-sm md:text-md lg:text-md mb-4">I made two user personas and jourey maps that kind of talk through essentially what a user would try to do on this application.</h2>
              <div className="mb-4">
                <img 
                  src="/image17.png" 
                  alt="User journey maps showing the experience flow" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
              <h2 className="text-sm md:text-md lg:text-md">For example, we have one where Brandon Jones is a Federal Agenecy Director which is part of one of our Archetypes that we came up with. What this user journey walks through is his expectations of creating a discussion and then being able to join that discussion and talk in it. So, I created these five steps essentially, that go with that. So he creates his account to engage with our platform, and then he navigates to the communities, joins, it, and then tries to look through all the posts that are there. And from that, I had the idea of what he would be able to do afterwards if he wanted to make posts or not and then be able to have recommended discussion groups come up onto his feed, based on what he likes and what he's actually joined, and that would kind of continue that cycle of engagement that was created within just the discussions part of it. </h2>
            </div>
          </div>

          {/* Journey Maps Section */}
          <div className="w-full bg-white dark:bg-gray-900">
            <div className="container max-w-3xl mx-auto px-4 pb-16">
              <div className="space-y-8">
                <img 
                  src="/image18.png" 
                  alt="User journey maps showing the experience flow" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  User journey maps illustrating the key touchpoints and experience flow
                </p>
              </div>
              <br></br>
              <h2 className="text-sm md:text-md lg:text-md">For a second persona, we created Marie Academic which is part ofthe academic archetype and she wants to essentially schedule appoints with you, and so we have that same five step process with that for our journey, and essentially it's that she creates an account on our website, schedules an appointment with you, selects timeslots, and then we have some follow-up actions, that kind of keep that engagement going, of learning to stand up for herself if that's what she wanted to do, and be able to check back in with you and make follow-up apointments, to keep that user coming back to our website in some way. </h2>
            </div>
          </div>

          {/* User Flow Section */}
          <div className="w-full bg-white dark:bg-gray-900">
            <div className="container max-w-3xl mx-auto px-4 pb-16">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">User Flow</h3>
              <h2 className="text-sm md:text-md lg:text-md mb-4">This is essentially a visual representation of how the user is going to navigate through the app once they sign in.</h2>
              <div className="mb-4">
                <img 
                  src="/image21.png" 
                  alt="User flow diagram showing the main interaction paths" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
              <h2 className="text-sm md:text-md lg:text-md">So, the user begins at the dashboard, and this is where they can quickly make appointments, cathc up the added course content, or browse through any of their diversity communities. On scheduling appointments, they can choose what type of appointment they want to scheudle – one on one vs. group. And in event calendar, they can see all upcoming events and register for open events, and then in coaching, they can request a workshop with the client, or they can also browse coaching packages or download free content. Next in the communities, individuals will be able to see groups recommended to them based on their user archetype, and then finally all of these features are building off of the goal that we have for this app, which is to get people to interact with community coontent regarding DEI and also purchase the client's coaching packages.</h2>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="w-full bg-white dark:bg-gray-900">
            <div className="container max-w-3xl mx-auto px-4 pb-16">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Key Features</h3>
              <h2 className="text-sm md:text-md lg:text-md mb-4">Based on our user research and journey maps, we identified several key features that would enhance the user experience and meet the needs of our different user archetypes.</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white via-[#e6f0ff] via-[#d4e4ff] via-[#f0e6ff] to-[#f5f0ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:via-[#1a2a3a] dark:to-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Onboarding</h3>
                  <h2 className="text-sm md:text-md lg:text-md text-gray-700 dark:text-gray-300">
                    Streamlined onboarding process with guided tutorials and interactive walkthroughs to help users get started quickly.
                  </h2>
                  <div className="mt-4">
                    <img 
                      src="/image23.gif" 
                      alt="Onboarding Process" 
                      className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                    <h2 className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Figure 5: Onboarding Flow</h2>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white via-[#e6f0ff] via-[#d4e4ff] via-[#f0e6ff] to-[#f5f0ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:via-[#1a2a3a] dark:to-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Appointment Scheduling</h3>
                  <h2 className="text-sm md:text-md lg:text-md text-gray-700 dark:text-gray-300">
                    Flexible scheduling system for one-on-one consultations, group sessions, and workshops, with automated reminders and follow-ups.
                  </h2>
                  <div className="mt-4">
                    <img 
                      src="/image24.gif" 
                      alt="Onboarding Process" 
                      className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                    <h2 className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Figure 6: Appointment Scheduling Flow</h2>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white via-[#e6f0ff] via-[#d4e4ff] via-[#f0e6ff] to-[#f5f0ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:via-[#1a2a3a] dark:to-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Community Discussions</h3>
                  <h2 className="text-sm md:text-md lg:text-md text-gray-700 dark:text-gray-300">
                    Comprehensive collection of DEI resources, including articles, guides, and downloadable content for continuous learning.
                  </h2>
                  <div className="mt-4">
                    <img 
                      src="/image26.gif" 
                      alt="Onboarding Process" 
                      className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                    <h2 className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Figure 7: Community Discussion Flow</h2>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white via-[#e6f0ff] via-[#d4e4ff] via-[#f0e6ff] to-[#f5f0ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:via-[#1a2a3a] dark:to-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Manage Coaching Content</h3>
                  <h2 className="text-sm md:text-md lg:text-md text-gray-700 dark:text-gray-300">
                    Calendar integration for upcoming events, workshops, and training sessions, with easy registration and participation tracking.
                  </h2>
                  <div className="mt-4">
                    <img 
                      src="/image25.gif" 
                      alt="Onboarding Process" 
                      className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Figure 8: Course Content Flow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Testing Section */}
          <div className="w-full bg-white dark:bg-gray-900">
            <div className="container max-w-3xl mx-auto px-4 py-16">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">User Testing</h3>
              <h2 className="text-sm md:text-md lg:text-md mb-4">We conducted extensive user testing to validate our design decisions and ensure the platform meets the needs of all user archetypes. Here are the key findings from our testing sessions:</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-white via-[#e6f0ff] via-[#d4e4ff] via-[#f0e6ff] to-[#f5f0ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:via-[#1a2a3a] dark:to-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-sm font-bold mb-2 text-gray-900 dark:text-white">Less Redundant Dashboard</h3>
                  <h2 className="text-sm md:text-md lg:text-md text-gray-700 dark:text-gray-300">
                    Dashboard should cater to user interest and be less redundant
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-white via-[#e6f0ff] via-[#d4e4ff] via-[#f0e6ff] to-[#f5f0ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:via-[#1a2a3a] dark:to-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-sm font-bold mb-2 text-gray-900 dark:text-white">More Interactive Communities</h3>
                  <h2 className="text-sm md:text-md lg:text-md text-gray-700 dark:text-gray-300">
                    Communities tab needs more clarity and interactivity
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-white via-[#e6f0ff] via-[#d4e4ff] via-[#f0e6ff] to-[#f5f0ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:via-[#1a2a3a] dark:to-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-sm font-bold mb-2 text-gray-900 dark:text-white">User Friendly Onboarding</h3>
                  <h2 className="text-sm md:text-md lg:text-md text-gray-700 dark:text-gray-300">
                    Added a welcome to the app message and more visuals
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-white via-[#e6f0ff] via-[#d4e4ff] via-[#f0e6ff] to-[#f5f0ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:via-[#1a2a3a] dark:to-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-sm font-bold mb-2 text-gray-900 dark:text-white">Course Content</h3>
                  <h2 className="text-sm md:text-md lg:text-md text-gray-700 dark:text-gray-300">
                    Created clearer categories for what is course content
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Reflection Section */}
          <div className="w-full bg-white dark:bg-gray-900">
            <div className="container max-w-3xl mx-auto px-4 py-16">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Reflection</h3>
              <h2 className="text-sm md:text-md lg:text-md mb-8">Looking back on this project, here are the key learnings and insights that shaped our approach to DEI consulting platform design:</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-white via-[#e6f0ff] via-[#d4e4ff] via-[#f0e6ff] to-[#f5f0ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:via-[#1a2a3a] dark:to-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Design Process Evolution</h3>
                  <h2 className="text-sm md:text-md lg:text-md text-gray-700 dark:text-gray-300">
                    The iterative nature of our design process revealed the importance of continuous user feedback. Each testing phase brought new insights that significantly improved the platform's usability and accessibility.
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-white via-[#e6f0ff] via-[#d4e4ff] via-[#f0e6ff] to-[#f5f0ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:via-[#1a2a3a] dark:to-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">User-Centric Approach</h3>
                  <h2 className="text-sm md:text-md lg:text-md text-gray-700 dark:text-gray-300">
                    Understanding the diverse needs of our user archetypes helped us create a more inclusive platform. The balance between academic rigor and practical accessibility was crucial for success.
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-white via-[#e6f0ff] via-[#d4e4ff] via-[#f0e6ff] to-[#f5f0ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:via-[#1a2a3a] dark:to-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Technical Implementation</h3>
                  <h2 className="text-sm md:text-md lg:text-md text-gray-700 dark:text-gray-300">
                    The integration of various features while maintaining performance and scalability taught us valuable lessons about technical architecture and user experience optimization.
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-white via-[#e6f0ff] via-[#d4e4ff] via-[#f0e6ff] to-[#f5f0ff] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:via-[#1a2a3a] dark:to-[#1a1a2e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Future Considerations</h3>
                  <h2 className="text-sm md:text-md lg:text-md text-gray-700 dark:text-gray-300">
                    Looking ahead, we see opportunities for AI integration, enhanced community features, and expanded analytics capabilities to further improve the platform's effectiveness.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: project.content }} />
              
          

          {/* Bottom Back Button */}
          <div className="mt-16 flex justify-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 group"
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
                className="transition-transform group-hover:-translate-x-1"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span className="hidden sm:inline">Back to Projects</span>
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}
