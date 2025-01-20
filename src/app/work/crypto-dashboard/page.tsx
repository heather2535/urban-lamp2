"use client";
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing

const project = {
    title: "Cryptography Price Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with news integration and price alerts.",
    date: "December 28, 2024",
    description2: "Heather Davies - Dec 28, 2024",
    video: "/crypto-dashboard-video.mov?height=450&width=800", 
    content: `
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Building a Crypto Price Tracker and Sentiment Analysis App</h2>
      <h2 style="font-size: 1.5em; ;">A Full-Stack Journey</h2>
      <br>

      <p>Cryptocurrency is one of the most volatile markets today, making it crucial for investors to track not only the live prices but also the sentiment surrounding various coins. In this blog, I will reflect on my journey of building a Crypto Price Tracker and Sentiment Analysis App, a tool that allows users to track live cryptocurrency prices and analyze sentiment through news articles. The app aggregates real-time data and offers insights into the current market trends, using a combination of advanced technologies to deliver a seamless user experience.</p>
      
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Project Overview</h2>
      <br>
      <p>The goal of this web application is to provide users with real-time insights into the cryptocurrency market, allowing them to monitor prices, analyze market sentiment, and stay updated with the latest crypto-related news. The app tracks the live prices of the top 10 cryptocurrencies and uses sentiment analysis to assess the tone of news articles related to each cryptocurrency. The sentiment analysis is powered by Google Cloud's Natural Language Processing (NLP) API, which helps categorize news articles as Positive, Negative, or Neutral. The app aims to provide users with a comprehensive understanding of the cryptocurrency landscape by integrating various data sources and presenting them in an easy-to-understand format.</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Features</h3>
      <br>
      <ul>
        <li><strong>Live Cryptocurrency Prices</strong>: Displays real-time prices for the top 10 cryptocurrencies, including Bitcoin, Ethereum, and others.</li>
        <li><strong>Sentiment Analysis</strong>: Analyzes the sentiment of news articles related to specific cryptocurrencies, categorizing them as Positive, Neutral, or Negative.</li>
        <li><strong>Crypto News Feed</strong>: Provides a curated feed of cryptocurrency-related news articles to keep users informed of market trends.</li>
        <li><strong>Prediction Model (Optional)</strong>: A feature that estimates the future price of a cryptocurrency based on user input regarding investment amount and time frame.</li>
      </ul>

      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Tech Stack</h2>
      <br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Frontend:</h3>
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
      <h2 style="font-size: 2em; font-weight: bold;">Development Process</h2>
      <br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Frontend Development</h3>
      <br>
      <p>The first step in the development process was setting up the frontend. I used React.js to create the user interface, building components for displaying live cryptocurrency prices, news articles, and sentiment analysis data. The use of React allowed for a dynamic, component-based structure, where the app could update individual components without requiring a complete page reload. This made the app feel more fluid and responsive.</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Backend Development</h3>
      <br>
      <p>On the backend, I set up a Node.js server using Express.js to handle API requests. I integrated the CoinMarketCap API to fetch live cryptocurrency price data and used the News API to gather cryptocurrency-related news articles. The sentiment analysis was the most complex part of the backend. I utilized the Google Cloud NLP API to analyze each news article’s sentiment and extract key topics. The results were then categorized into Positive, Negative, or Neutral sentiments, providing users with a quick overview of how the market was feeling about specific coins.</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Sentiment Analysis & Caching</h3>
      <br>
      <p>The sentiment analysis feature required processing a large amount of text data from various news sources. The Google Cloud NLP API was instrumental in simplifying this task. It allowed me to analyze the tone of each article, identify key entities (e.g., coin names, market trends), and categorize the sentiment as Positive, Negative, or Neutral. The analysis results were then cached for frequently queried coins to reduce the number of API calls and improve performance.</p>
      
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
      <h3 style="font-size: 1.5em; font-weight: bold;">Sentiment Analysis Accuracy</h3>
      <br>
      <p>The sentiment analysis process required careful handling to ensure accuracy. The Google Cloud NLP API provided strong capabilities for sentiment analysis, but interpreting the results correctly was key to offering actionable insights. I had to continuously refine the way sentiment was categorized to ensure it reflected the tone of the articles accurately.</p>
  
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Periodic Data Updates</h3>
      <br>
      <p>Keeping the data fresh was another significant challenge. With cryptocurrency prices and news changing rapidly, I needed to ensure that the sentiment data was updated regularly. Implementing cron jobs to fetch new sentiment data every 12 hours was an effective solution that helped keep the app up-to-date without overloading the system with too many API calls.</p>
  
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
