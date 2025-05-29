"use client";
import { useState } from "react"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package } from "lucide-react"
import { Navigation } from "@/components/navigation"

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
    title: "Real-Time Cryptocurrency\nTracking Dashboard",
    date: "December 28, 2024",
    video: "/videos/video1.mov?height=450&width=800", 
    content: `
      <br></br>
      <br>      
      <br>
      <h2 style="font-size: 2em; font-weight: bold;">Introduction</h2>
      <br>
        <h2 className="text-gray-700 dark:text-gray-300">
          Cryptocurrency is one of the most volatile markets today, making it essential for investors to monitor not only live prices but also the sentiment surrounding each coin. To address this need, I designed and developed a Crypto Price Tracker and Sentiment Analysis App—a full-stack web application that aggregates real-time price data, analyzes the tone of crypto-related news, and provides alerts to help users stay informed and make better decisions.        
        </h2>
      <br>


 

      <h2 style="font-size: 2em; font-weight: bold;">Goals</h2>
    <br>
      
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2><strong>• Live Cryptocurrency Tracking:</strong> Real-time monitoring of the top 10 cryptocurrencies, including Bitcoin and Ethereum.</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
           <div className="col-span-1">
            <video
            className="rounded-lg w-full h-auto mx-auto"
            controls
            style={{ maxWidth: "48rem", height: "auto" }}
            >
            <source src="/videos/video1.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h2>Figure 2:  A cropped section of my app showing real-time price updates for top cryptocurrencies (e.g., BTC, ETH).
        </h2>
        <br>

          <li className="relative">
            <h2><strong>• Sentiment Analysis:</strong> A clear understanding of the tone of news articles surrounding each coin, categorized as Positive, Neutral, or Negative.</h2>

          </li>


            <div className="col-span-1">
          <video
            className="rounded-lg shadow-md w-3/4 h-auto mx-auto"
            controls
            style={{ maxWidth: "400px", height: "auto" }}
          >
            <source src="/videos/video2.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

<br>

          <li className="relative">
            <h2><strong>• News Integration:</strong> A curated feed of crypto-related news to inform users of market trends.</h2>
          </li>

                 <div className="col-span-1">
          <video
            className="rounded-lg shadow-md w-3/4 h-auto mx-auto"
            controls
            style={{ maxWidth: "400px", height: "auto" }}
          >
            <source src="/videos/video3.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <br>

           <li className="relative">
            <h2><strong>• Price Alerts:</strong> Immediate insights into major price changes or shifts in sentiment.</h2>
          </li>
        
          
        </ul>
      </li>
    </ul>
    <br></br>

    <h2 style="font-size: 2em; font-weight: bold;">Tools Used</h2>
   <h2 style="font-size: 1.5em; font-weight: bold;">Frontend</h2>
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2><strong>• React.js</strong>: For creating dynamic, responsive, and reusable UI components.</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2><strong>• Axios</strong>: For making HTTP requests to fetch live data from the backend.</h2>
          </li>   
        </ul>
      </li>
    </ul>
    <br>

    <h2 style="font-size: 1.5em; font-weight: bold;">Backend</h2>
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
       <h2><strong>• Node.js + Express.js</strong>: For building a lightweight server and managing routes and APIs.</h2>
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <h2><strong>• CoinMarketCap API: </strong> For real-time price data of cryptocurrencies.</h2>
          </li>   
          <li className="relative">
            <h2><strong>• News API: </strong> To fetch the latest cryptocurrency-related news articles.</h2>
          </li>
          <li className="relative">
            <h2><strong>• Google Cloud NLP API: </strong> For running sentiment analysis on fetched news content.</h2>
          </li>
          <li className="relative">
            <h2><strong>• node-cron: </strong> For scheduling periodic data updates.</h2>
          </li>  
        </ul>
      </li>
    </ul>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">Deployment</h2>
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <h2> <strong>• Heroku: </strong> For deploying the application and making it publicly accessible.</h2>
      </li>
    </ul>
    <br></br>


    <h2 style="font-size: 2em; font-weight: bold;">Process</h2>
    <br>
     <div className="col-span-1">
          <img
            src="/images/image13.png"
            alt="Hariri Institute Design System"
            className="rounded-lg shadow-md w-full h-auto object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <h2>Figure 4: Red highlighted section shows the backend code for the sentiment analysis file organization.</h2>
        <br></br>

    <h2 style="font-size: 1.5em; font-weight: bold;">1. Frontend Development</h2>
    <h2>
    I began by designing the dashboard using React.js, focusing on a modular component structure to handle live price updates, sentiment outputs, and the news feed. This approach allowed smooth updates without full page reloads, improving performance and user experience.
    </h2>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">2. Backend Development</h2>
    <h2>
    The backend was built with Node.js and Express.js, acting as a bridge between the APIs and the frontend. The CoinMarketCap API provided real-time price data, while the News API delivered articles which were then analyzed by Google Cloud's NLP service. Each article's sentiment score was parsed and labeled as Positive, Negative, or Neutral.
    </h2>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">3. Sentiment Analysis Integration</h2>
    <h2>
    The Google Cloud NLP API was used to analyze each news article's sentiment and extract key topics. The results were then categorized into Positive, Negative, or Neutral sentiments, providing users with a quick overview of how the market was feeling about specific coins.
    </h2>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">4. Cron Job Scheduling</h2>
    <h2>
    To ensure the sentiment data remained current, I implemented cron jobs using the node-cron package. These jobs fetched and updated the sentiment data every 12 hours, making sure that users always saw the most up-to-date analysis. This was crucial for keeping the app responsive and relevant, especially given the fast-moving nature of cryptocurrency markets.
    </h2>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">5. Deployment</h2>
    <h2>
    Once the development was complete, I deployed the application on Heroku, a cloud platform that supports Node.js applications. This made the app publicly accessible and ready for use by anyone interested in tracking cryptocurrency prices and sentiment.
    </h2>
    <br></br>

    
    <h2 style="font-size: 2em; font-weight: bold;">Results</h2>
    <br>
    <h2>
      The final application is a real-time dashboard that:
    </h2>
        <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
       Displays current prices for the top 10 cryptocurrencies.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Categorizes the tone of news coverage through sentiment analysis.
          </li>   
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Shows a live feed of relevant cryptocurrency news articles.
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            Updates sentiment data bi-daily to ensure timeliness.
          </li>
        </ul>
      </li>
    </ul>
    <br>
    <p>
    Users can now track not only the numbers but also the narratives shaping the market.
    </p>
    <br>
   
    `,
    tags: ["Web Development", "Data Visualization"],
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
        {/* Back Button */}
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
                src="/images/image12.png"
                alt="Crypto Dashboard Overview"
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
                    Full Stack Developer
                  </h3>
                  <h3 className="text-sm text-muted-foreground">
                    UX Designer
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
                    Dec. 24 '24 - Dec. 28 '24
                  </h3>
                  <h3 className="text-sm text-muted-foreground">
                    4 days total
                  </h3>
                </div>
              </div>
            </div>

            {/* Two Columns Section */}
            <div className="container max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Goal:</h2>
                  <h2 className="text-gray-700 dark:text-gray-300">
                    The primary goal was to create a real-time cryptocurrency tracking dashboard that provides users with live price data, sentiment analysis, and news integration. We aimed to help investors make informed decisions by combining multiple data sources into a single, intuitive interface.
                  </h2>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Solution:</h2>
                  <h2 className="text-gray-700 dark:text-gray-300">
                    I developed a full-stack web application that aggregates real-time price data from CoinMarketCap, analyzes news sentiment using Google Cloud NLP, and provides a clean, responsive interface for monitoring market trends and receiving price alerts.
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
                  Working Prototype
                </a>
              </div>
            </div>

            <div className="w-full bg-white dark:bg-gray-900 mt-12">
              <div className="container max-w-6xl mx-auto px-4 py-8">
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
                
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
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
