"use client";
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"  // Assuming the SearchBar component is available
import Link from "next/link"  // Ensure to import Link for routing

const project = {
    title: "Chaos & Order: Graphic Design Thesis",
    description: "A collection of my graphic design work from my thesis.",
    date: "May 06, 2025",
    description2: "Heather Davies - May 6, 2025",
    video: "/video2.mov?height=450&width=800", 
    content: `
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Project Overview</h2>
      <p>The redesign of the Hariri Institute website is a crucial initiative aimed at aligning the site with the BU Office of Research theme, while customizing it to meet the specific needs and goals of the Institute. The project’s primary objectives are to enhance the user experience, improve accessibility, and streamline the content management process, all while maintaining the distinctive identity of the Hariri Institute. This redesign is driven by a desire to simplify navigation, engage visitors with dynamic visual elements, and make content management more intuitive and efficient for staff members.</p>
      
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Overview of Identified Problems</h2>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">1. Difficult Navigation</h3>
      <p>The existing website’s navigation system is overly complicated and cumbersome, making it difficult for users to find critical resources and key research initiatives. Many visitors struggle to locate essential information, whether it’s about ongoing research projects, faculty publications, or institutional updates. The navigation experience is unintuitive, causing users to abandon their search or feel frustrated by the lack of clear pathways to the content they need.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">2. Disorganized Content Structure</h3>
      <p>The current structure of the website’s content is disorganized and lacks coherence. Research initiatives and projects are buried within various pages, making it hard to highlight the Institute’s key work and achievements. There is no clear focus on presenting the most important content, which results in a missed opportunity to showcase the Institute’s impact and the groundbreaking research happening within its walls. This makes the site less compelling and harder for visitors to navigate.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">3. Lack of Engaging Design</h3>
      <p>The visual design of the current site does not reflect the innovative and forward-thinking nature of the Hariri Institute. The website is outdated and lacks engaging, interactive features that could make it more compelling for users. A modern and visually appealing design is essential not only for creating a positive user experience but also for communicating the Institute’s cutting-edge work in a way that resonates with visitors. The absence of interactive elements and contemporary design trends makes the site feel static and disconnected from the vibrant community of researchers and thought leaders it represents.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">4. Mobile Incompatibility</h3>
      <p>In today’s digital landscape, it is imperative that websites be fully responsive and optimized for use across all devices. The Hariri Institute website is currently not fully optimized for mobile and tablet devices, leading to a suboptimal user experience for those accessing the site from smaller screens. Given the increasing use of mobile devices for browsing the web, this incompatibility presents a significant barrier to engaging with a broad audience, including students, faculty, and potential collaborators.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">5. Inefficient Content Management System</h3>
      <p>Another major issue with the current website is its cumbersome and inefficient content management system (CMS). The CMS is difficult for staff to navigate, making it time-consuming and challenging to update or modify content. This inefficiency can lead to outdated information remaining on the site, reducing the site’s effectiveness as a resource hub for researchers, students, and other stakeholders. The lack of a user-friendly CMS limits the Institute’s ability to quickly adapt to changes in research initiatives or important news, hampering its ability to communicate effectively with its audience.</p>
      
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Overview of Proposed Solutions</h2>
      
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">1. Simplified Navigation</h3>
      <p>One of the primary goals of this redesign is to simplify the navigation structure. We will create an intuitive, user-friendly navigation system that allows visitors to quickly access important resources and research projects without unnecessary clicks. By categorizing content more effectively and ensuring that key information is easy to find, we will enhance the overall user experience. The revised navigation will focus on clarity, with clear labels and organized menus that guide users effortlessly to the information they are looking for.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">2. Restructured Content Layout</h3>
      <p>We will implement a more organized and structured content layout to ensure that critical research initiatives and ongoing projects are prominently featured. The new design will highlight the Institute’s most significant work, making it easy for visitors to discover key projects, publications, and collaborations. A clean, well-organized layout will allow visitors to engage with the content in a more meaningful way, offering them clear insights into the Institute’s mission and vision. The layout will also prioritize accessibility, ensuring that visitors with diverse needs can navigate the site easily.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">3. Modern Design Elements</h3>
      <p>To make the website more visually appealing and interactive, we will introduce a series of modern design elements. The visual design will feature a fresh, contemporary look that better reflects the Institute’s innovative research and academic community. This includes the use of high-quality images, bold typography, and sleek animations to create a dynamic user experience. Interactive features such as hover effects, accordion-style content sections, and scroll animations will help engage users and encourage them to explore the site further. This modern design approach will give the website a polished, professional look, while also fostering a sense of excitement about the Institute’s work.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">4. BU Research Theme Foundation</h3>
      <p>The new website will be built upon the BU Research theme, which will serve as a foundation for the overall structure and aesthetic of the site. However, we will customize this theme to reflect the unique identity and branding of the Hariri Institute. By incorporating customized design elements, color schemes, and typography, we will ensure that the site not only aligns with the broader BU Research theme but also stands out as a distinct representation of the Hariri Institute’s values and objectives.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">5. Mobile and Tablet Optimization</h3>
      <p>Given the growing reliance on mobile and tablet devices for web browsing, it is essential that the redesigned Hariri Institute website be fully responsive. We will ensure that the site is optimized for use on smartphones, tablets, and desktops, delivering a seamless experience across all screen sizes. Whether accessing the site from a laptop or a mobile device, users will have access to all the site’s features without experiencing any loss of functionality or readability. This optimization will help expand the Institute’s reach, making it easier for visitors to access information and engage with the content on the go.</p>

      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">6. Streamlined Content Management System</h3>
      <p>A major aspect of this redesign is the implementation of a new, more efficient content management system (CMS). The new CMS will be intuitive and user-friendly, allowing staff to easily update and modify content without the need for technical expertise. With a streamlined CMS, the Institute will be able to keep the website’s content current and relevant, ensuring that visitors always have access to the latest research, news, and updates. This will also reduce the time and effort required for staff to manage the site, increasing efficiency and ensuring that the site remains an effective communication tool for the Institute.</p>

      <br></br>
      <h3 style="font-size: 2em; font-weight: bold;">Tools and Technologies Used</h3>
      <br></br>
      <p>Throughout this project, we will be leveraging a range of design and development tools to create a high-quality, user-centric website.</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Figma for Web Design</h3>
      <p>Figma will play a central role in the design process. As a cloud-based design tool, Figma enables real-time collaboration, allowing multiple team members to work on the design simultaneously. The ability to create wireframes, prototypes, and design components within Figma will ensure that we have a clear vision of the final product before development begins. By using Figma’s interactive design capabilities, we will create detailed mockups and prototypes that allow stakeholders to visualize the site’s layout, features, and user flow. Figma’s ease of use and collaborative features will be crucial in aligning the design vision with the technical development team’s goals.</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">WordPress for CMS</h3>
      <p>For content management, we will implement WordPress as the CMS, as it is widely recognized for its flexibility and ease of use. WordPress allows for quick content updates and can be easily customized to fit the unique needs of the Hariri Institute. We will build custom templates and plugins within WordPress to ensure the CMS is fully aligned with the Institute’s workflow and needs.</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">Responsive Web Design</h3>
      <p>To ensure that the website is fully responsive, we will use CSS media queries and flexible grid layouts. These techniques will allow the site to adjust its design based on the device it is being viewed on, ensuring an optimal user experience on all screen sizes.</p>
      
      <br></br>
      <h3 style="font-size: 1.5em; font-weight: bold;">JavaScript and Front-End Development</h3>
      <p>JavaScript will be utilized to add dynamic features and interactive elements to the website, enhancing user engagement. From smooth transitions to interactive content, JavaScript will allow us to build a modern, fluid experience that encourages users to explore the site further.</p>
  
      <br></br>
      <h2 style="font-size: 2em; font-weight: bold;">Conclusion</h2>
  
     
      <br></br>
      <p>The redesign of the Hariri Institute website represents a significant opportunity to improve the user experience, streamline content management, and showcase the Institute’s world-class research initiatives. By addressing key issues such as navigation, content organization, and mobile optimization, we will create a website that not only looks great but also functions seamlessly across devices. With the integration of modern design elements and a user-friendly CMS, this redesign will empower the Institute to communicate its work more effectively and engage a wider audience, including researchers, students, and potential collaborators. Through careful planning, the use of advanced design tools like Figma, and a focus on user-centered design, the Hariri Institute website will be transformed into an essential resource for all stakeholders.</p>
      <br></br>
      
    `,
    tags: ["All Projects", "Graphic Design", "Branding"],
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
      <main className="container max-w-2xl mx-auto mt-6 px-4 py-8">
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

          <p className="lead">{project.description}</p>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />


        </article>
      </main>
    </div>
  )
}
