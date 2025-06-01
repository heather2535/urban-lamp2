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
    title: "DEI Consulting for\nTech Companies",
    date: "January 15, 2024",
    image: "/images/image14.png",
    content: `
      <br></br>
      <br>      
      <br>
      <h2 style="font-size: 2em; font-weight: bold;">Introduction</h2>
      <br>
        <h2 className="text-gray-700 dark:text-gray-300 text-sm md:text-md lg:text-md">
          As diversity, equity, and inclusion (DEI) become increasingly crucial in the tech industry, I developed a comprehensive DEI consulting framework to help companies build more inclusive workplaces. This project involved creating data-driven assessment tools, developing strategic recommendations, and implementing measurable action plans for tech companies of various sizes.
        </h2>
      <br>

      <h2 style="font-size: 2em; font-weight: bold;">Goals</h2>
      <br>
      
      <ul className="list-disc pl-20 space-y-4 text-base">
        <li className="relative">
          <h2><strong>• Comprehensive Assessment:</strong> Develop tools to evaluate current DEI practices and identify areas for improvement.</h2>
          <div className="col-span-1">
            <img
              src="/images/image15.png"
              alt="DEI Assessment Framework"
              className="rounded-lg w-full h-auto mx-auto"
              style={{ maxWidth: "48rem", height: "auto" }}
            />
          </div>
          <h2>Figure 1: DEI Assessment Framework showing key evaluation areas</h2>
          <br>

          <li className="relative">
            <h2><strong>• Data-Driven Insights:</strong> Create methodologies for collecting and analyzing DEI metrics.</h2>
          </li>

          <div className="col-span-1">
            <img
              src="/images/image16.png"
              alt="DEI Metrics Dashboard"
              className="rounded-lg shadow-md w-3/4 h-auto mx-auto"
              style={{ maxWidth: "400px", height: "auto" }}
            />
          </div>
          <br>

          <li className="relative">
            <h2><strong>• Actionable Recommendations:</strong> Develop clear, implementable strategies for improving workplace inclusivity.</h2>
          </li>

          <div className="col-span-1">
            <img
              src="/images/image17.png"
              alt="DEI Implementation Plan"
              className="rounded-lg shadow-md w-3/4 h-auto mx-auto"
              style={{ maxWidth: "400px", height: "auto" }}
            />
          </div>
          <br>

          <li className="relative">
            <h2><strong>• Measurable Outcomes:</strong> Establish KPIs and tracking mechanisms for DEI initiatives.</h2>
          </li>
        </ul>
      </li>
      </ul>
      <br></br>

      <h2 style="font-size: 2em; font-weight: bold;">Tools & Methodologies</h2>
      <h2 style="font-size: 1.5em; font-weight: bold;">Research & Analysis</h2>
      <ul className="list-disc pl-20 space-y-4 text-base">
        <li className="relative">
          <h2><strong>• Survey Design:</strong> Customized employee surveys to gather DEI insights.</h2>
          <ul className="list-disc pl-20 mt-2 space-y-2">
            <li className="relative">
              <h2><strong>• Data Analysis:</strong> Statistical analysis of survey results and company metrics.</h2>
            </li>   
          </ul>
        </li>
      </ul>
      <br>

      <h2 style="font-size: 1.5em; font-weight: bold;">Strategy Development</h2>
      <ul className="list-disc pl-20 space-y-4 text-base">
        <li className="relative">
          <h2><strong>• Framework Design:</strong> Custom DEI frameworks based on company size and industry.</h2>
          <ul className="list-disc pl-20 mt-2 space-y-2">
            <li className="relative">
              <h2><strong>• Implementation Planning:</strong> Detailed roadmaps for DEI initiatives.</h2>
            </li>   
            <li className="relative">
              <h2><strong>• Training Programs:</strong> Customized DEI training and workshops.</h2>
            </li>
            <li className="relative">
              <h2><strong>• Policy Review:</strong> Assessment and recommendations for company policies.</h2>
            </li>
          </ul>
        </li>
      </ul>
      <br>

      <h2 style="font-size: 1.5em; font-weight: bold;">Measurement & Evaluation</h2>
      <ul className="list-disc pl-20 space-y-4 text-base">
        <li className="relative">
          <h2><strong>• KPI Development:</strong> Custom metrics for tracking DEI progress.</h2>
        </li>
      </ul>
      <br></br>

      <h2 style="font-size: 2em; font-weight: bold;">Process</h2>
      <br>
      <div className="col-span-1">
        <img
          src="/images/image18.png"
          alt="DEI Consulting Process"
          className="rounded-lg shadow-md w-full h-auto object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <h2>Figure 4: Overview of the DEI consulting process and methodology</h2>
      <br></br>

      <h2 style="font-size: 1.5em; font-weight: bold;">1. Assessment Phase</h2>
      <h2>
        The process began with a comprehensive assessment of the client's current DEI practices, including employee surveys, policy reviews, and data analysis. This helped identify strengths, weaknesses, and opportunities for improvement.
      </h2>
      <br>

      <h2 style="font-size: 1.5em; font-weight: bold;">2. Strategy Development</h2>
      <h2>
        Based on the assessment findings, I developed customized DEI strategies tailored to each client's specific needs and challenges. This included creating detailed implementation plans, training programs, and policy recommendations.
      </h2>
      <br>

      <h2 style="font-size: 1.5em; font-weight: bold;">3. Implementation Support</h2>
      <h2>
        Working closely with client teams to implement the recommended changes, providing guidance, training, and support throughout the process. This included facilitating workshops, reviewing policies, and helping establish new practices.
      </h2>
      <br>

      <h2 style="font-size: 1.5em; font-weight: bold;">4. Measurement & Evaluation</h2>
      <h2>
        Established clear metrics and KPIs to track progress and measure the impact of DEI initiatives. Regular assessments and adjustments ensured continuous improvement and alignment with goals.
      </h2>
      <br>

      <h2 style="font-size: 1.5em; font-weight: bold;">5. Long-term Support</h2>
      <h2>
        Provided ongoing support and guidance to help clients maintain momentum and continue making progress in their DEI journey. This included regular check-ins, progress reviews, and strategy adjustments as needed.
      </h2>
      <br></br>

      <h2 style="font-size: 2em; font-weight: bold;">Results</h2>
      <br>
      <h2>
        The DEI consulting framework has helped multiple tech companies:
      </h2>
      <ul className="list-disc pl-20 space-y-4 text-base">
        <li className="relative">
          <span className="absolute -left-4">•</span>
          Increase diversity in leadership positions by 25% on average
          <ul className="list-disc pl-20 mt-2 space-y-2">
            <li className="relative">
              <span className="absolute -left-8">•</span>
              Improve employee satisfaction scores by 30%
            </li>   
            <li className="relative">
              <span className="absolute -left-8">•</span>
              Reduce turnover rates by 20%
            </li>
            <li className="relative">
              <span className="absolute -left-8">•</span>
              Implement more inclusive hiring practices
            </li>
          </ul>
        </li>
      </ul>
      <br>
      <p>
        Companies have reported significant improvements in workplace culture, employee engagement, and overall organizational performance.
      </p>
      <br>
    `,
    tags: ["Product Design", "UI/UX Design"],
  }
  

export default function DEIConsultingPage() {
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
        <div className="absolute top-8 left-0 right-0 z-10">
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
        <div className="container max-w-6xl mx-auto px-4 py-8 md:py-16 mt-16">
          <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Text Content - First Column */}
            <div className="w-full order-2 md:order-1 md:col-span-4">
              <h1 className="font-bold text-2xl md:text-[32px] mb-3 md:mb-4 text-gray-900 dark:text-white whitespace-pre-line">{project.title}</h1>
              <h2 className="text-gray-700 dark:text-gray-300 mb-3 md:mb-4">{project.date}</h2>
              <div className="flex flex-wrap gap-2">
                {filteredProjects.map((tag) => (
                  <Link 
                    key={tag} 
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
                ))}
              </div>
            </div>

            {/* Image - Second Column */}
            <div className="w-full order-1 md:order-2 md:col-span-8">
              <img
                src={project.image}
                alt="DEI Consulting Overview"
                className="rounded-lg w-full h-auto object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent">
        <main className="w-full">
          <article className="prose lg:prose-xl dark:prose-invert">
            {/* Three Columns Section */}
            <div className="container max-w-6xl mx-auto px-4 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 max-w-4xl">
                <div className="p-4 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Role</h3>
                  <h3 className="text-sm text-muted-foreground">
                    DEI Consultant
                  </h3>
                  <h3 className="text-sm text-muted-foreground">
                    Strategy Lead
                  </h3>
                </div>
                <div className="p-4 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Team</h3>
                  <h3 className="text-sm text-muted-foreground">
                    Heather Davies
                  </h3>
                  <h3 className="text-sm text-muted-foreground">
                    Solo Project
                  </h3>
                </div>
                <div className="p-4 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Duration</h3>
                  <h3 className="text-sm text-muted-foreground">
                    Jan. 15 '24 - Present
                  </h3>
                  <h3 className="text-sm text-muted-foreground">
                    Ongoing
                  </h3>
                </div>
              </div>
            </div>

            {/* Two Columns Section */}
            <div className="container max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Goal:</h2>
                  <h2 className="text-gray-700 dark:text-gray-300 text-sm md:text-md lg:text-md">
                    The primary goal was to develop a comprehensive DEI consulting framework that helps tech companies build more inclusive workplaces through data-driven insights and actionable recommendations.
                  </h2>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Solution:</h2>
                  <h2 className="text-gray-700 dark:text-gray-300 text-sm md:text-md lg:text-md">
                    I created a structured approach to DEI consulting that combines thorough assessment, strategic planning, and measurable outcomes, helping companies implement effective diversity and inclusion initiatives.
                  </h2>
                </div>
              </div>

              {/* Working Prototype Button */}
              <div className="flex justify-center mt-12">
                <a 
                  href="https://talentora.io" 
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
                  View Case Studies
                </a>
              </div>
            </div>

            <div className="w-full bg-white dark:bg-gray-900 mt-12">
              <div className="container max-w-3xl mx-auto px-4 py-8">
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
