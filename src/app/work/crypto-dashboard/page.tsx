"use client";
import { useState } from "react"
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
}

const project = {
    title: "Real-Time Cryptocurrency Tracking Dashboard with News Integration and Price Alerts",
    date: "December 28, 2024",
    video: "/crypto-dashboard-video.mov?height=450&width=800", 
    content: `
      <br></br>
      <br>      
      <br>
      <h2 style="font-size: 2em; font-weight: bold;">Introduction</h2>
      <br>
        <p>
          Cryptocurrency is one of the most volatile markets today, making it essential for investors to monitor not only live prices but also the sentiment surrounding each coin. To address this need, I designed and developed a Crypto Price Tracker and Sentiment Analysis App—a full-stack web application that aggregates real-time price data, analyzes the tone of crypto-related news, and provides alerts to help users stay informed and make better decisions.        
        </p>
      <br>


      <h2 style="font-size: 2em; font-weight: bold;">Goals</h2>
    <br>
      
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        <strong>Live Cryptocurrency Tracking:</strong> Real-time monitoring of the top 10 cryptocurrencies, including Bitcoin and Ethereum.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Sentiment Analysis:</strong> A clear understanding of the tone of news articles surrounding each coin, categorized as Positive, Neutral, or Negative.
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>News Integration:</strong> A curated feed of crypto-related news to inform users of market trends.
          </li>
           <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Price Alerts:</strong> Immediate insights into major price changes or shifts in sentiment.
          </li>
        
          
        </ul>
      </li>
    </ul>
    <br></br>

    <h2 style="font-size: 2em; font-weight: bold;">Tools Used</h2>
   <h2 style="font-size: 1.5em; font-weight: bold;">Frontend</h2>
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        <strong>React.js</strong>: For creating dynamic, responsive, and reusable UI components.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
            <strong>Axios</strong>: For making HTTP requests to fetch live data from the backend.
          </li>   
        </ul>
      </li>
    </ul>
    <br>

    <h2 style="font-size: 1.5em; font-weight: bold;">Backend</h2>
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
       <strong>Node.js + Express.js</strong>: For building a lightweight server and managing routes and APIs.
        <ul className="list-disc pl-20 mt-2 space-y-2">
          <li className="relative">
            <span className="absolute -left-8">•</span>
           <strong> CoinMarketCap API: </strong> For real-time price data of cryptocurrencies.
          </li>   
          <li className="relative">
            <span className="absolute -left-8">•</span>
           <strong> News API: </strong> To fetch the latest cryptocurrency-related news articles.
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
           <strong> Google Cloud NLP API: </strong> For running sentiment analysis on fetched news content.
          </li>
          <li className="relative">
            <span className="absolute -left-8">•</span>
           <strong> node-cron: </strong> For scheduling periodic data updates.
          </li>  
        </ul>
      </li>
    </ul>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">Deployment</h2>
    <ul className="list-disc pl-20 space-y-4 text-base">
      <li className="relative">
        <span className="absolute -left-4">•</span>
        <strong>Heroku: </strong> For deploying the application and making it publicly accessible.
      </li>
    </ul>
    <br></br>


    <h2 style="font-size: 2em; font-weight: bold;">Process</h2>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">1. Frontend Development</h2>
    <p>
    I began by designing the dashboard using React.js, focusing on a modular component structure to handle live price updates, sentiment outputs, and the news feed. This approach allowed smooth updates without full page reloads, improving performance and user experience.
    </p>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">2. Backend Development</h2>
    <p>
    The backend was built with Node.js and Express.js, acting as a bridge between the APIs and the frontend. The CoinMarketCap API provided real-time price data, while the News API delivered articles which were then analyzed by Google Cloud’s NLP service. Each article's sentiment score was parsed and labeled as Positive, Negative, or Neutral.
    </p>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">3. Sentiment Analysis Integration</h2>
    <p>
    The Google Cloud NLP API was used to analyze each news article's sentiment and extract key topics. The results were then categorized into Positive, Negative, or Neutral sentiments, providing users with a quick overview of how the market was feeling about specific coins.
    </p>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">4. Cron Job Scheduling</h2>
    <p>
    To ensure the sentiment data remained current, I implemented cron jobs using the node-cron package. These jobs fetched and updated the sentiment data every 12 hours, making sure that users always saw the most up-to-date analysis. This was crucial for keeping the app responsive and relevant, especially given the fast-moving nature of cryptocurrency markets.
    </p>
    <br>
    <h2 style="font-size: 1.5em; font-weight: bold;">Deployment</h2>
    <p>
    Once the development was complete, I deployed the application on Heroku, a cloud platform that supports Node.js applications. This made the app publicly accessible and ready for use by anyone interested in tracking cryptocurrency prices and sentiment.
    </p>
    <br></br>

    
    <h2 style="font-size: 2em; font-weight: bold;">Results</h2>
    <br>
    <p>
      The final application is a real-time dashboard that:
    </p>
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
    <h2 style="font-size: 2em; font-weight: bold;">Reflection</h2>
    <p>
    One of the most challenging aspects of this project was integrating multiple external data sources (CoinMarketCap, News API, and Google Cloud NLP) in a seamless way. The real-time data from cryptocurrency prices and news articles had to be handled carefully to ensure smooth communication between the frontend and backend. 
    </p>
    <br>
    <p>

  
      <div className="col-span-1">
          <img
            src="/images/image12.png"
            alt="Design Process and Research"
            className="rounded-lg shadow-md w-full h-auto object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      <p>Figure 1:  A full-page screenshot of my crypto app's dashboard.
      <br></br>
     
        <li><strong>Live Cryptocurrency Prices</strong>: Displays real-time prices for the top 10 cryptocurrencies, including Bitcoin, Ethereum, and others.</li>
           <div className="col-span-1">
            <video
            className="rounded-lg shadow-md w-full h-auto"
            controls
            style={{ maxWidth: "100%", height: "auto" }}
            >
            <source src="/videos/video1.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p>Figure 2:  A cropped section of my app showing real-time price updates for top cryptocurrencies (e.g., BTC, ETH).
        </p>
        <br>

        <li><strong>Sentiment Analysis</strong>: Analyzes the sentiment of news articles related to specific cryptocurrencies, categorizing them as Positive, Neutral, or Negative.</li>
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
        <p>Figure 3: A cropped section of my app showing real-time sentiment analysis for a specific cryptocurrency.
        <br></br>
        <li><strong>Crypto News Feed</strong>: Provides a curated feed of cryptocurrency-related news articles to keep users informed of market trends.</li>
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
    
        </ul>

      <br><br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Tech Stack</h2>
      
      <h3 style="font-size: 1.5em; font-weight: bold;">Frontend:</h3>
      <br>
      <ul>
        <li><strong>React.js</strong>: A JavaScript library for building responsive and dynamic user interfaces. React.js made it easy to create reusable components and manage the state of the app effectively.</li>
        <br>
        <li><strong>Axios</strong>: Used to make HTTP requests to the backend API, allowing the frontend to fetch real-time data from the server.</li>
      </ul>
      <br>
  
      <h3 style="font-size: 1.5em; font-weight: bold;">Backend:</h3>
      <br>
      <ul>
        <li><strong>Node.js</strong>: A JavaScript runtime environment for server-side development, enabling fast API requests and real-time data handling.</li>
        <br>
        <li><strong>Express.js</strong>: A lightweight web framework for building APIs and handling server routes.</li>
        <br>
        <li><strong>Google Cloud NLP API</strong>: Utilized for sentiment analysis and entity extraction from news articles.</li>
        <br>
        <li><strong>CoinMarketCap API</strong>: The primary source for real-time cryptocurrency price data.</li>
        <br>
        <li><strong>News API</strong>: Provides curated cryptocurrency-related news articles from trusted sources.</li>
        <br>
        <li><strong>node-cron</strong>: A library for scheduling periodic updates to sentiment data every 12 hours to ensure that the information remains fresh.</li>
      </ul>

      <br></br>
              <div className="col-span-1">
          <img
            src="/images/image13.png"
            alt="Hariri Institute Design System"
            className="rounded-lg shadow-md w-full h-auto object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <p>Figure 4 Red highlighted section shows the backend code for the sentiment analysis file organization.
        <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Development Process</h2>
      <br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Frontend Development</h3>
    
      <p>The first step in the development process was setting up the frontend. I used React.js to create the user interface, building components for displaying live cryptocurrency prices, news articles, and sentiment analysis data. The use of React allowed for a dynamic, component-based structure, where the app could update individual components without requiring a complete page reload. This made the app feel more fluid and responsive.</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Backend Development</h3>
      
      <p>On the backend, I set up a Node.js server using Express.js to handle API requests. I integrated the CoinMarketCap API to fetch live cryptocurrency price data and used the News API to gather cryptocurrency-related news articles. The sentiment analysis was the most complex part of the backend. I utilized the Google Cloud NLP API to analyze each news article's sentiment and extract key topics. The results were then categorized into Positive, Negative, or Neutral sentiments, providing users with a quick overview of how the market was feeling about specific coins.</p>
      
      <br>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Cron Job Scheduling</h3>
      <br>
      <p>To ensure the sentiment data remained current, I implemented cron jobs using the node-cron package. These jobs fetched and updated the sentiment data every 12 hours, making sure that users always saw the most up-to-date analysis. This was crucial for keeping the app responsive and relevant, especially given the fast-moving nature of cryptocurrency markets.</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Deployment</h3>
      <br>
      <p>Once the development was complete, I deployed the application on Heroku, a cloud platform that supports Node.js applications. This made the app publicly accessible and ready for use by anyone interested in tracking cryptocurrency prices and sentiment.</p>
  
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Challenges & Solutions</h2>
  
      <br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Integrating Multiple Data Sources</h3>
      <br>
      <p>One of the most challenging aspects of this project was integrating multiple external data sources (CoinMarketCap, News API, and Google Cloud NLP) in a seamless way. The real-time data from cryptocurrency prices and news articles had to be handled carefully to ensure smooth communication between the frontend and backend. I used Axios to make sure the data was fetched asynchronously and updated regularly.</p>
  
     
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Reflection</h2>
      <br>
      <p>Building the Crypto Price Tracker and Sentiment Analysis App was an incredibly rewarding experience. Throughout the process, I honed my full-stack development skills and gained a deeper understanding of how to work with APIs to integrate different services. I also learned how to handle large amounts of data efficiently and implement periodic updates using cron jobs.</p>
      
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Conclusion</h2>
      <br>
      <p>The Crypto Price Tracker and Sentiment Analysis App allowed me to combine multiple technologies to deliver a real-time application that provides valuable insights into the cryptocurrency market. This project has not only strengthened my technical skills but has also given me a deeper understanding of how sentiment analysis can provide context to financial data, enabling users to make smarter, more informed investment decisions. Whether you are an investor or just interested in the market, this tool offers a comprehensive view of the cryptocurrency landscape and its ever-changing dynamics.</p>
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
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTag && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-2xl mx-auto px-4 py-16">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          <h1 className="font-bold text-[40px] mt-4 mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-4">{project.date}</p>
          {/* Filtered Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {filteredProjects.map((tag) => (
              <Link 
                key={tag} 
                href={`/projects?tag=${encodeURIComponent(tag)}`}
                className="no-underline"
              >
                <Badge 
                  variant="secondary" 
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors cursor-pointer"
                >
                  {tagIcons[tag]}
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>


          {/* Video section */}
          <div className="relative mt-6 mb-6">
            <video controls width="100%" height="auto" className="object-cover rounded-lg">
              <source src={project.video} type="video/mp4" />
              {/* Fallback text for unsupported browsers */}
              Your browser does not support the video tag.
            </video>
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
            <div className="p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Team</h3>
              <p className="text-sm text-muted-foreground">
              Heather Davies
              </p>
              <p className="text-sm text-muted-foreground">
              Solo Project
              </p>
            </div>
            <div className="p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Duration</h3>
              <p className="text-sm text-muted-foreground">
              Dec. 24 '24 - Dec. 28 '24
              </p>
              <p className="text-sm text-muted-foreground">
              4 days total
              </p>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: project.content }} />

        </article>
      </main>
    </div>
  )
}
