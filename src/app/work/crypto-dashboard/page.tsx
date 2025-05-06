"use client";
import { useState } from "react"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing

const project = {
    title: "Building a Crypto Price Tracker and Sentiment Analysis Web App",
    description: "Real-time cryptocurrency tracking dashboard with news integration and price alerts.",
    date: "December 28, 2024",
    description2: "Heather Davies - Dec 28, 2024",
    video: "/crypto-dashboard-video.mov?height=450&width=800", 
    content: `
      <br></br>
      <br>      
      <br>
      <h2 style="font-size: 2em; font-weight: bold;">Project Overview</h2>
      <br>
            <p>Cryptocurrency is one of the most volatile markets today, making it crucial for investors to track not only the live prices but also the sentiment surrounding various coins. In this blog, I will reflect on my journey of building a Crypto Price Tracker and Sentiment Analysis App, a tool that allows users to track live cryptocurrency prices and analyze sentiment through news articles. The app aggregates real-time data and offers insights into the current market trends, using a combination of advanced technologies to deliver a seamless user experience.</p>
<br>
      <p>The goal of this web application is to provide users with real-time insights into the cryptocurrency market, allowing them to monitor prices, analyze market sentiment, and stay updated with the latest crypto-related news. The app tracks the live prices of the top 10 cryptocurrencies and uses sentiment analysis to assess the tone of news articles related to each cryptocurrency. The sentiment analysis is powered by Google Cloud's Natural Language Processing (NLP) API, which helps categorize news articles as Positive, Negative, or Neutral. The app aims to provide users with a comprehensive understanding of the cryptocurrency landscape by integrating various data sources and presenting them in an easy-to-understand format.</p>
     <br>
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
      <h3 style="font-size: 1.5em; font-weight: bold;">Features</h3>
      <br>
      <ul>
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
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTag && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-2xl mx-auto px-4 py-16">
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
