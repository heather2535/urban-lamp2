"use client";
import { useState } from "react"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package } from "lucide-react"
import Navigation from "@/components/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronRight, ExternalLink, ArrowUpRight } from "lucide-react"
import { Circle, Square, Triangle } from "lucide-react"
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

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
    description: "A comprehensive platform designed to track cryptocurrency prices, analyze market sentiment, and provide real-time insights for informed investment decisions.",
    date: "December 28, 2024",
    video: "/videos/video1.mov?height=450&width=800", 
    content: `
      <br></br>
      <br>      
      <br>
      <h2 style="font-size: 2em; font-weight: bold;">Introduction</h2>
      <br>
        <h2 className="text-gray-700 dark:text-gray-300 text-sm md:text-md lg:text-md">
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
             <div className="relative max-w-[640px] mx-auto my-8">
               <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
               <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
                 <video
                   className="rounded-2xl w-full h-auto"
                   controls
                   style={{ maxWidth: "100%", height: "auto" }}
                 >
                   <source src="/videos/video1.mov" type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
               </div>
             </div>
           </div>
           <h2 className="text-center text-gray-600 mt-4 font-medium">Figure 2: A cropped section of my app showing real-time price updates for top cryptocurrencies (e.g., BTC, ETH).</h2>
           <br>

          <li className="relative">
            <h2><strong>• Sentiment Analysis:</strong> A clear understanding of the tone of news articles surrounding each coin, categorized as Positive, Neutral, or Negative.</h2>

          </li>

          <div className="col-span-1">
            <div className="relative max-w-[640px] mx-auto my-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
                <video
                  className="rounded-2xl w-full h-auto"
                  controls
                  style={{ maxWidth: "100%", height: "auto" }}
                >
                  <source src="/videos/video2.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

<br>

          <li className="relative">
            <h2><strong>• News Integration:</strong> A curated feed of crypto-related news to inform users of market trends.</h2>
          </li>

          <div className="col-span-1">
            <div className="relative max-w-[640px] mx-auto my-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/40 via-pink-400/40 to-purple-400/40 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl overflow-hidden border border-orange-200 shadow-2xl p-6">
                <video
                  className="rounded-2xl w-full h-auto"
                  controls
                  style={{ maxWidth: "100%", height: "auto" }}
                >
                  <source src="/videos/video3.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
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
    tags: ["Web Development", "Product Design"],
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

      <Navigation />
      <main className="relative">
        <article className="prose lg:prose-xl dark:prose-invert">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-32 left-8 z-20"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/10 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-900/20 dark:hover:bg-white/20 transition-colors duration-300"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Text Content */}
            <motion.div
              className="relative z-10 pt-60 pb-20 w-screen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="px-16">
                <div className="max-w-7xl mx-auto space-y-8">
                  <motion.h1
                    className={`${playfair.className} text-3xl md:text-5xl font-normal tracking-wide`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="text-gray-900 dark:text-white">
                      {project.title}
                    </span>
                  </motion.h1>

                  <motion.p
                    className={`${playfair.className} text-3xl md:text-5xl max-w-2xl font-normal leading-relaxed text-gray-800 dark:text-white/90`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-3 text-gray-800 dark:text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <span className="text-sm font-medium">{project.date}</span>
                  </motion.div>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap justify-end gap-2 max-w-xl ml-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    {filteredProjects.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-900/10 dark:bg-white/20 backdrop-blur-md text-gray-900 dark:text-white rounded-full text-xs font-extralight hover:bg-gray-900/20 dark:hover:bg-white/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Video */}
            <motion.div
              className="relative w-full h-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <video
                src={project.video}
                className="w-full h-full object-cover rounded-3xl"
                autoPlay
                muted
                loop
                playsInline
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
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

          {/* Project Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Title */}
              <div className="md:col-span-4">
                <h3 className={`${playfair.className} text-3xl font-normal tracking-wide text-gray-900 dark:text-white`}>Project Details</h3>
              </div>

              {/* Labels */}
              <div className="md:col-span-4 space-y-8">
                <div>
                  <h3 className="text-sm font-extralight uppercase tracking-wide text-gray-400">DURATION</h3>
                </div>
                <div>
                  <h3 className="text-sm font-extralight uppercase tracking-wide text-gray-400">ROLE</h3>
                </div>
                <div>
                  <h3 className="text-sm font-extralight uppercase tracking-wide text-gray-400">TEAM</h3>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-4 space-y-8">
                <div>
                  <p className="text-sm font-extralight text-gray-400">Dec. 24 '24 - Dec. 28 '24 (4 days total)</p>
                </div>
                <div>
                  <p className="text-sm font-extralight text-gray-400">Full Stack Developer, UX Designer</p>
                </div>
                <div>
                  <p className="text-sm font-extralight text-gray-400">Heather Davies (Solo Project)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16"
          >
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </motion.div>

          {/* Working Prototype Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 px-16 text-center"
          >
            <Link
              href="https://talentora.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Working Prototype
            </Link>
          </motion.div>
        </article>
      </main>
    </div>
  )
}
