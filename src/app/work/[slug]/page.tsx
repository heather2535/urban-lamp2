import { Navigation } from "@/components/ui/navigation"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
        slug: "crypto-dashboard",
        date2: "Heather Davies • Dec 27, 2024",
        title: "Empowering Smarter Crypto Trading: Your Gateway to Financial Independence",
        description : "Real-time cryptocurrency tracking dashboard with news integration and price alerts.",
        date: "December 28, 2024",
        video: "/crypto-dashboard-video.mov",
        content: `
          <p class="text-2xl font-bold mb-4">The Vision: Redefining Crypto Trading</p>
          <p>Cryptocurrency trading is often seen as a high-stakes game, with steep learning curves and volatile markets making it inaccessible to many. Our mission is to change that narrative. By combining advanced AI technology, seamless user interfaces, and robust market insights, we’ve created a platform that democratizes access to the tools and strategies previously reserved for elite traders.</p>
          <p>We believe in empowering you to take control of your financial future by leveraging cutting-edge technology to trade smarter—not harder.</p>
          <br></br>
          <p class="text-2xl font-bold mb-4">Key Features: Designed With You in Mind</p>
          <p>Our app is designed to cater to your unique needs as a trader, offering a feature-rich environment that enhances your trading experience. Here’s a glimpse into what makes our platform stand out:</p>
          <p class="text-1xl font-bold mb-4">1. Real-Time Market Insights</p>
          <p>Stay ahead of the curve with live price updates, interactive charts, and in-depth market analysis. Our app integrates seamlessly with leading exchanges like Binance, Binance US, and Coinbase, ensuring you have access to the most up-to-date data at your fingertips.</p>
          <p class="text-1xl font-bold mb-4">2. Trader Tracking and Copy Trading</p>
          <p>Follow the strategies of well-known crypto traders and receive real-time notifications when they make trades. Better yet, use our automated copy trading feature to mirror their moves and capitalize on their expertise.</p>
         
          <p>Google Cloud NLP API – For analyzing sentiment and extracting key topics from news articles.</p>
          <p>CoinMarketCap API – To fetch real-time cryptocurrency price data.</p>
          <p>News API – For fetching cryptocurrency-related news articles.</p>
          <p>Cron Jobs (node-cron) – For scheduling periodic updates to sentiment data every 12 hours.</p>

          <br></br>
          <p class="text-2xl font-bold">Features</p>
          <ul>
            <li>Live Cryptocurrency Prices</li>
            <li>Sentiment Analysis</li>
            <li>News Integration</li>
            <li>Price Alerts</li>
          </ul>
        `,
        tags: ["Web Development", "Data Visualization"]
      },
      
      
  {
    slug: "hariri-institute",
    title: "Hariri Institute Website Redesign",
    description: "Complete redesign and development of the institute's web presence.",
    date: "September 22, 2024",
    video: "/video2.mov",
    content: `
        <p class="text-2xl font-bold mb-4">Project Overview</p>
        <p>The Hariri Institute for Computing and Computational Science & Engineering is embarking on a comprehensive website redesign to enhance its user experience and align with the BU Office of Research theme. The new design will address several identified issues while modernizing the interface and making critical resources more accessible. As we work toward creating a more intuitive, visually appealing, and mobile-friendly website, we are committed to improving both the functionality and aesthetic appeal of the site for all users.</p>
        <p>Users can view live prices for the top 10 cryptocurrencies, receive sentiment summaries for specific coins based on recent news, and access additional crypto-related news articles.</p>
        <br></br>
        <p class="text-2xl font-bold mb-4">Identified Problems</p>
        <p>Upon reviewing the current website, our team identified several key challenges that were hindering the user experience. The most prominent issue was navigation: users found it difficult to locate key resources due to a cluttered and poorly structured menu. Additionally, the content structure was disorganized, making it challenging to highlight important research initiatives and key updates. The visual design was outdated, lacking interactive features and dynamic elements that could engage users. Furthermore, the website’s limited compatibility with mobile devices resulted in a suboptimal user experience, while the content management system was inefficient, making it difficult for staff to update or modify content.</p>
         <br></br>
        <p class="text-2xl font-bold mb-4">Proposed Solutions</p>
        <p>To tackle these issues, we have devised a series of solutions that aim to streamline navigation, improve content layout, and create a visually engaging experience. One of the primary changes is to rework the navigation structure. The goal is to simplify access to important resources and projects by categorizing them into expandable dropdowns, which will reduce information overload and make it easier for users to find what they need. The content layout will also be overhauled to better showcase ongoing research initiatives and key projects, ensuring that critical information is prominently displayed and easy to access. The new design will include interactive elements, such as animated statistics and hover-optimized graphics, to create a dynamic user experience. For example, the Impact Report, which is currently hosted as a downloadable PDF, will be featured in an interactive format through digital publishing platforms like Flipsnack and Issuu. This will make the report more accessible and user-friendly, particularly on mobile devices.</p>
        <p>Incorporating the BU Research theme will provide a solid foundation for the redesign, while customized elements will reflect the Hariri Institute’s identity. The website will also be fully optimized for mobile and tablet users, ensuring a seamless experience across all devices. Another major update is streamlining the content management system, which will simplify the process for staff to update and manage site content. These updates are essential to making the website both functional and user-friendly, allowing staff to efficiently manage resources and communicate updates.</p>
        <br></br>
        <p class="text-2xl font-bold mb-4">Improvements to About Us</p>
        <p>The About Us section of the website will see major improvements. Currently, the 'Our Impact' page features the Impact Report, but the format is not ideal for mobile users. By integrating interactive features like animated percentage statistics and enhancing the graphic’s design with hover optimization and branding colors, we will make the page more engaging and easier to navigate. Similarly, the Centers & Initiatives section will be restructured to address issues with the long dropdown menu. The 11 centers and initiatives will be categorized into broader topics, which can be expanded for further exploration. This will simplify the navigation process and make it less overwhelming for users to explore all available options.</p>
        <br></br>
        <p class="text-2xl font-bold mb-4">Revamping the Research Section</p>
        <p>The Research section of the website will undergo significant updates as well. The Focused Research Programs page, which currently features a long list of programs, will be reorganized to display programs in a more manageable format. We plan to implement expandable dropdowns for each program, and create horizontal and vertical menus to allow users to navigate research by year or topic. A filtering system and search bar will be added to further streamline the process, enabling users to easily find research by year or specific keywords. By organizing research in this way, we can reduce information overload and improve the overall user experience.</p>
        <br></br>
        <p class="text-2xl font-bold mb-4">Updating the People Section</p>
        <p>The People section, which currently displays over 400 faculty affiliates in a long, hard-to-navigate list, will also be redesigned. The goal is to standardize the layout for displaying faculty members, using one template for consistency and to improve visual appeal. Additionally, the faculty members will be sorted alphabetically, and a search bar will be added for easier access to specific individuals. This update will help improve organization and make it easier for users to navigate the extensive list of faculty members.</p>
        <br></br>
        <p class="text-2xl font-bold mb-4">Looking Ahead</p>
        <p>As we move forward with this exciting project, we are confident that these updates will significantly improve the user experience on the Hariri Institute website. The redesigned website will make it easier for students, faculty, and visitors to access key resources, explore ongoing research initiatives, and stay informed about the Institute’s activities. We look forward to sharing the new website with the Hariri Institute community and are committed to creating a user-centered design that reflects the Institute’s mission of advancing research in computing and computational science. Stay tuned for more updates as we continue to develop and refine the site.</p>
        <br></br>
      
    `,
    tags: ["Web Development", "Data Visualization"]
    },
  {
    slug: "healthcare-platform",
    title: "Healthcare Management Platform",
    description: "Comprehensive healthcare management system for patients and providers.",
    date: "April 22, 2024",
    video: "/video3.mov",
    content: `
    <p class="text-2xl font-bold mb-4">Project Description</p>
    <p>The inspiration behind HealthSync was to bridge the gap between healthcare and technology. We aimed to create a platform that seamlessly connects users and hospitals, providing efficient healthcare solutions. This project was fueled by the desire to address real-time healthcare challenges using cutting-edge technology.</p>
    <br></br>
    <p class="text-2xl font-bold mb-4">What it Does</p>
    <p>HealthSync is a comprehensive healthcare application designed to serve both users and hospitals. Users can access personalized dashboards to manage their health information, book appointments, and stay connected with healthcare providers. Hospitals, on the other hand, benefit from a dedicated dashboard that streamlines patient management, appointment scheduling, and overall health. </p>
     <br></br>
    <p class="text-2xl font-bold mb-4">How it is Built</p>
    <p>HealthSync was built using a stack of modern technologies. The front end is powered by React and Next.js, providing a robust user interface. To manage state and data, we adopted Redux and Redux Toolkit, which was a significant learning experience as it was the first time we used them for a large-scale project. On the backend, we developed a Node.js server that utilizes Express to handle API requests. The core of the application's data management is handled by a combination of Axios for HTTP requests and Redux Toolkit Query for efficient data fetching and management. During the development process, we encountered a few challenges, including initial setup hurdles with RTK Query and Next.js. However, we persevered, learned valuable lessons, and overcame these obstacles.</p>
    <br></br>
    <p class="text-2xl font-bold mb-4">Challenges Ran into</p>
    <p>We faced some initial challenges, particularly in configuring and integrating Redux Toolkit Query (RTK Query) with Next.js. The learning curve for this powerful tool was steep, but through perseverance and dedicated problem-solving, we successfully implemented RTK Query into our project. Additionally, handling real-time data and state management in a healthcare context presented unique challenges, which we tackled by enhancing our understanding of Redux and RTK Query.</p>
    <br></br>
    <p class="text-2xl font-bold mb-4">Accomplishments</p>
    <p>One of the most notable accomplishments is mastering Redux and Redux Toolkit for a significant project. This was the first time we utilized these technologies extensively, and the resulting efficient state management was a major achievement. Furthermore, we integrated a health assistant model based on GPT models into the application, offering personalized healthcare advice and information to users. This was a groundbreaking step for us, marking our first venture into this innovative field.</p>
    <br></br>

    <p class="text-2xl font-bold mb-4">Insights Gained</p>
    <p>Throughout the development of HealthSync, we learned invaluable lessons. Our proficiency in Redux and RTK Query improved significantly, allowing us to efficiently manage and synchronize application data. Additionally, we expanded our skills by integrating GPT-based health assistant features, opening up new opportunities in the healthcare technology sector. Incorporating Next.js into our development stack also broadened our knowledge and empowered us to build a large-scale application with improved performance and SEO capabilities. We are proud of the expertise we gained and look forward to applying these skills in future projects.</p>
  
`,
    tags: ["Web Development", "UI/UX Design"]
  },
  {
    slug: "eco-branding",
    title: "DEI Consulting Website",
    description: "Developed a web-app based platform that empowers individuals and organizations through courses and resources while creating a space for users to engage, share, and advance their journey toward building more diverse, inclusive, and equitable communities.",
    date: "September 15, 2024",
    video: '/video4.mov',
    content: `
    <p class="text-2xl font-bold mb-4">Project Overview</p>
    <p>Dr. Starks needs a comprehensive course platform to effectively engage with clients and address complex social justice challenges. There is also a need for a community hub that fosters equitable and inclusive spaces for meaningful conversations and collaboration.</p>
    <br></br>
    <p class="text-2xl font-bold mb-4">The Problem</p>
    <p>We aim to develop a web-app based platform that empowers individuals and organisations through courses and resources while creating a space for users to engage, share, and advance their journey toward building more diverse, inclusive, and equitable communities. </p>
     <br></br>
    <p class="text-2xl font-bold mb-4">User Archetypes</p>
    <p>Activists who are working on the ground level to enact social justice change.</p>
    <p>Intellectuas  in academia who want to join discussions around social justice.</p>
    <p>Businesses who want their business to be socially conscious.</p>

    <br></br>
    
`,
    tags: ["Graphic Design", "Branding"]
  },
  {
    slug: "ai-task-manager",
    title: "Video Interview Recruiting Platform",
    description: "Combines Hume AI and Pipe Cat Frameworks with React, Next.js, and Figma to deliver an advanced mock interview platform. Built with React and Next.js to power a fast, dynamic interfaces for a superior experience.",
    date: "February 3, 2024",
    video: "/video5.mp4",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-task-manager-2Tz9RvF9oDtf3sCJJLLJC6Xj7Xveuu.jpg",
    content: `
    <p class="text-2xl font-bold mb-4">Project Overview</p>
    <p>Every company knows that talent is their most important asset; however, most businesses have a terrible first-round talent acquisition process.  We believe the first-round screening is perfect for AI automation. We’re targeting medium sized businesses without the resources for HR teams. Innovative willing to adopt new tech Lower budget can’t afford traditional recruiting agencies, as well as Small team Between 10-50 employees without established HR.</p>
    <br></br>
    <p class="text-2xl font-bold mb-4">How it Works </p>
    <p>The job is posted on job sites and managed using the companies ATS system., prompting the service. The company uploads information about the company and the role, and Talentora tailors its output to fit that information. Performing screenings  Ora Scouts call the applicants of the job posting, perform first round interview, and record the responses. We then analyze Interviews  by  scoring each candidates’ by fit for role, handling questions, and   overall confidence. We  output a list of qualified   candidates along with key summaries of their interview.</p>
     <br></br>
    <p class="text-2xl font-bold mb-4">User Research</p>
    <p>The first step in this process was defining our customer profile, a detailed and dynamic representation of our customer. We looked at three key potential customers: a small tech founder of a startup, a mid-sized tech firm HR manager, and analysed the average applicant. HireVue and HackerRank are applicant management systems with similar goals to Talentora. While HireVue focuses on streamlining hiring for large companies with AI-driven tools, users report discomfort with AI interactions. HackerRank targeting recruiters in startups and education, offering pre-recorded interviews and improved evaluation consistency, while has limitations in team coordination. This analysis highlights how Talentora can offer a more tailored solution. </p>
    <br></br>
    <p class="text-2xl font-bold mb-4">Tech Stack</p>
    <p>The codebase for this product is split into three different repositories. 
The first is the web app, which handles the front-end, and is made using Next.js and React. 
The second is the analysis repository, which scores the applicants and provides an overall summary. This was built using Hume AI, which is a semantic analysis API. 
The third and final is called the bot repository, and this handles the real-time generative AI voice bots. This was built using Pipecat, which is an open source framework for speech-to-text and text-to-speech LLMs and provides a succinct speech to speech experience. </p>
<br></br>

    
`,   
    tags: ["Web Development", "AI Integration"]
  },
  {
    slug: "virtual-gallery",
    title: "Library Database E-Learning Platform ",
    description: "Helping students land jobs and build connections.",
    date: "January 10, 2024",
    video: "/video6.mp4",
    content: '"The Virtual Art Gallery is a web-based 3D environment where artists can showcase their work in immersive, customizable virtual spaces. Users can navigate through the gallery using intuitive controls, view artworks from different angles, and even attend virtual exhibition openings. The project required expertise in 3D web technologies, optimizing for performance across various devices, and creating an intuitive interface for both artists uploading their work and visitors exploring the gallery."',
    tags: ["Web Development", "3D Design"]
  }
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container  max-w-4xl mx-auto px-20 py-8">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          <p className="text-muted-foreground mb-8">{project.date2}</p>
          <h1 className= "font-bold text-[3rem] mb-8 leading-tight">{project.title}</h1>
          <p className="text-muted-foreground mb-8">{project.date}</p>
          <div className="mb-8">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="mr-2">{tag}</Badge>
            ))}
          </div>
          <div className="relative aspect-video mb-6">
            <video
                src={project.video}
                className="object-cover rounded-lg"
                controls
                autoPlay
                muted
            />
            </div>

          <p className="lead text-muted-foreground mb-6">{project.description}</p>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </article>
      </main>
    </div>
  )
}

;