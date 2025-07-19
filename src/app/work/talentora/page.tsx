"use client";
import { useState } from "react"
import { Badge } from "@/components/badge"
import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import { Folder, Grid, Cpu, Tag, BarChart, Palette, Layers, Code, Layout, Package, ArrowLeft, ArrowUpRight, Circle, Square, Triangle, ExternalLink, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Playfair_Display } from 'next/font/google'
import { ProjectNavigation } from "@/components/project-navigation"
import TalentoraVerticalNavigation from "@/components/talentora-vertical-navigation"
import SectionTitle from "@/components/SectionTitle"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

const playfair = Playfair_Display({ subsets: ['latin'] })

const project = {
    title: "Designing a\nconversational AI interviewing interface.",
    description: "A platform that uses AI to conduct interviews and evaluate candidates.",
    date: "Less stress, better hires, smarter conversations.",
    image: "/image16.png",
    video: "/video1.mov?height=450&width=800", 

    tags: [ "Web Development", "Branding", "UI/UX Design"],
}

export default function TalentoraPage() {
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
    <div className="min-h-screen bg-white">

      {/* Project Vertical Navigation */}
      <TalentoraVerticalNavigation />

      {/* Top Navigation for Sections */}
      {/* Removed Overview and Problem nav bar as requested */}

      <main className="relative lg:ml-64">
        <article className="prose lg:prose-xl">
          {/* Hero Section */}
          <motion.div
            id="hero"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            {/* Text Content */}
            <motion.div
              className="relative z-10 pt-12 max-w-7xl pb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="px-16">
                <div className="max-w-7xl mx-auto space-y-4">
                  <motion.h1
                    className="font-mono text-3xl md:text-5xl font-normal tracking-wide leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="text-gray-600">
                      {project.title}
                    </span>
                  </motion.h1>

                  <motion.p
                    className={`${playfair.className} text-3xl md:text-5xl max-w-2xl font-normal leading-relaxed text-gray-800`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-3 text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <span className="text-xl font-extralight">{project.date}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative w-full h-[600px] overflow-hidden justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex justify-start -ml-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="w-full max-w-7xl h-full object-contain rounded-3xl"
                  style={{ objectPosition: 'center 30%' }}
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Project Details Section */}
          <motion.div
            id="project-details"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-16 px-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Role */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">role</h3>
                <p className="text-sm font-extralight text-gray-600">Design Strategist, UX Researcher, UI/UX</p>
              </div>

              {/* Team */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">team</h3>
                <p className="text-sm font-extralight text-gray-600">Heather Davies</p>
                <p className="text-sm font-extralight text-gray-600">Ben Gardiner</p>
                <p className="text-sm font-extralight text-gray-600">Lucas Yoon</p>
                <p className="text-sm font-extralight text-gray-600">Vincent Li</p>
                <p className="text-sm font-extralight text-gray-600">Ruby Chen</p>
                <p className="text-sm font-extralight text-gray-600">Abdel Lokma</p>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">tools</h3>
                <p className="text-sm font-extralight text-gray-600">Figma</p>
                <p className="text-sm font-extralight text-gray-600">React</p>
                <p className="text-sm font-extralight text-gray-600">Adobe Illustrator</p>
                <p className="text-sm font-extralight text-gray-600">Adobe Photoshop</p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-bold tracking-wide text-black mb-4">skills</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <p className="text-sm font-extralight text-gray-600">AI Integration</p>
                  <p className="text-sm font-extralight text-gray-600">UI/UX Design</p>
                  <p className="text-sm font-extralight text-gray-600">Product Design</p>
                  <p className="text-sm font-extralight text-gray-600">Web Development</p>
                  <p className="text-sm font-extralight text-gray-600">User Research</p>
                </div>
              </div>
            </div>
          </motion.div>

           {/* Diagonal Line Divider */}
           <div className="flex justify-center -py-4 -mt-10">
            <div className="flex space-x-3">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-8 bg-orange-300 transform rotate-45"
                />
              ))}
            </div>
          </div>

          

          {/* Content Section */}

          <motion.div
            id="hypothesis"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" px-16 scroll-mt-24"
            onMouseEnter={() => {
              const event = new CustomEvent('sectionHover', { detail: 'inspiration' })
              window.dispatchEvent(event)
            }}
            onMouseLeave={() => {
              const event = new CustomEvent('sectionHover', { detail: null })
              window.dispatchEvent(event)
            }}
          >

          </motion.div>

        
                  <br></br>

        {/* Section Title Example */}
         <div className="px-16">
           <SectionTitle>Hypothesis</SectionTitle>
         </div>
         

         <div className="px-16 -mt-2">
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  As hiring becomes increasingly <strong>fast-paced and competitive</strong>—especially for <strong>small to mid-sized companies</strong>—traditional recruiting methods are struggling to keep up. <strong>Overwhelmed teams</strong> often lack the resources to thoroughly screen every candidate, leading to <strong>rushed decisions and missed opportunities</strong>.

                              At the same time, candidates are seeking more <strong>personalized, transparent, and engaging</strong> ways to showcase their skills beyond a résumé.
</p>
<br></br>
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  I wanted to explore how <strong>conversational AI</strong> could reduce friction in <strong>early-stage interviews</strong>—making the process more <strong>efficient for employers</strong> while ensuring candidates feel <strong>seen, heard, and fairly evaluated</strong>.


</p>


</div>

        <div 
              id="project-overview" 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-4 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'project-overview' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
        ></div>

        <div className="px-16 md:col-span-12">      
        {/* Section Title Example */}
        <SectionTitle>Empathize</SectionTitle>
        </div>

                 <div className="px-16 -mt-2">
                   <p className="text-lg font-extralight leading-relaxed text-gray-600">
                   The first stage of design thinking—<strong>empathy</strong>—was crucial in shaping the foundation of Talentora. To truly understand the problem, I conducted interviews with both <strong>small business employers</strong> and <strong>active job seekers</strong> to uncover the frustrations, habits, and emotional undercurrents driving their hiring experiences, as well as explored competitors in the market.

</p>
                   
                   <br></br>
                   <p className=" text-3xl font-semibold leading-relaxed text-orange-400">
                  primary research
                  </p>
                   
                   <p className="text-lg font-extralight leading-relaxed text-gray-600">
                   The questions I asked included:
                    </p>
                  

                    <ul className="mt-2 text-lg font-extralight leading-relaxed text-gray-600 space-y-1">
                           <li>• How do you currently manage and organize incoming job applications?</li>
                           <li>• What’s the most time-consuming part of your hiring process?</li>
                           <li>• How do you typically conduct first-round interviews, and what challenges arise?</li>
                           <li>• Have you used video interviews or AI tools before? What was your experience like?</li>
                           <li>•How do you evaluate soft skills, communication style, or culture fit in early stages?</li>
                           <li>• What frustrates you the most when screening large volumes of candidates?</li>
                         </ul>


                   
                   <br></br>
                   <p className=" text-3xl font-semibold leading-relaxed text-orange-400">
                  secondary research
                  </p>
                   <h3 className="mt-4 font-sans text-3xl font-normal tracking-wide text-orange-500 border-l-4 border-orange-300 pl-6">
                   "I need a faster way to identify strong candidates without sacrificing quality or candidate experience."
                </h3>
                <br></br>
                   
                   <p className="text-lg font-extralight leading-relaxed text-gray-600">
                   Recruiter responses revealed <strong>burnout, inefficiency, and limited visibility</strong> beyond résumés. The need for better <strong>pre-screening tools</strong> that balance <strong>fairness with a personal touch</strong> became clear. These insights informed the design approach, focusing on <strong>reducing recruiter workload</strong> while preserving a <strong>human-centered interview experience</strong>.
                   </p>

                   <br></br>
                   <p className="text-lg font-extralight leading-relaxed text-gray-600">
                       Through <strong>bucketing and affinity mapping</strong> the insights, I formulated areas of the app that could use designing.


                      </p>

                                             
                       {/* Image after key opportunity areas */}
                       <div className="px-8 pt-4 flex justify-start -ml-8">
                         <div className="relative w-full max-w-7xl">
                           <Image
                             src="/images/talentora2.png"
                             alt="Plant Care Research Insights"
                             width={1200}
                             height={900}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 45%' }}
                             priority
                             loading="eager"
                           />
                         
                         </div>

                      

                   

                
            </div>
            <br></br>
 

                         <p className="text-lg font-extralight leading-relaxed text-gray-600">
                         The next stage, in which I started making design decisions and visualizing a solution based on what I learned from my research during the Discovery stage.



                </p>


            <div 
                  id="research" 
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 "
                  onMouseEnter={() => {
                    const event = new CustomEvent('sectionHover', { detail: 'research' })
                    window.dispatchEvent(event)
                  }}
                  onMouseLeave={() => {
                    const event = new CustomEvent('sectionHover', { detail: null })
                    window.dispatchEvent(event)
                  }}
                >
                  <div className="md:col-span-12">

                               {/* Competitive Analysis Section */}
            <div 
              id="research" 
              className=" grid grid-cols-1 md:grid-cols-12 gap-8 mt-6 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'research' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
            >
              <div className=" md:col-span-12">
                <SectionTitle>synthesizing research</SectionTitle>
                <div className="-mt-10 -mt-2">

                <p className=" text-3xl font-semibold leading-relaxed text-orange-400">
                  empathy map
                  </p>

                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  An empathy map is a collaborative tool teams can use to gain a deeper insight into their customers, organized by consumer thinking/feeling, what they’re experiencing and pain points.

                </p>
                
                         {/* Image after key opportunity areas */}
                         <div className="px-8  flex justify-center -ml-8">
                         <div className="relative w-full max-w-3xl">
                           <Image
                             src="/images/talentora4.png"
                             alt="Plant Care Research Insights"
                             width={1600}
                             height={1200}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 45%' }}
                           />
                         
                         </div>
                         </div>
                         <p className="text-lg font-extralight leading-relaxed text-gray-600">
                         The empathy map shows that recruiters and hiring managers feel overwhelmed by high applicant volumes and time-consuming screening, yet are wary of impersonal or biased AI tools. They seek deeper insights into candidates beyond résumés while facing pressure to hire quickly and maintain a strong employer brand. Their pains include inefficiency, burnout, and fear of bad hires, while their goals center on saving time, improving candidate fit, and ensuring a fair, human-centered hiring experience—highlighting the value of solutions like Talentora.

                </p>
                <p className=" pt-4 text-3xl font-semibold leading-relaxed text-orange-400">
                  user personas
                  </p>
                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  I created a distinct user persona which helped me align on strategies for moving forward and identify goals that need to be met to provide a good user experience for specific user groups.


                </p>

                                                  
                                                 {/* Image of user persona */}
                         <div className="px-8 pt-4 flex justify-center -ml-8">
                            <div className="relative w-full max-w-3xl">
                            <Image
                              src="/images/talentora5.png"
                              alt="User Persona"
                              width={1200}
                              height={900}
                              className="rounded-lg object-cover object-center"
                              style={{ objectPosition: 'center 45%' }}
                              priority
                              loading="eager"
                            />
                         
                         </div>
                         </div>
                         <br></br>
                  
                
                  
                </div>
              </div>
            </div>

            <div 
              id="problem" 
              className=" grid grid-cols-1 md:grid-cols-12 gap-8 mt-6 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'problem' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
            ></div>



                    <SectionTitle>Define</SectionTitle>
                    <div className="-mt-2">
                      <p className="text-lg font-extralight leading-relaxed text-gray-600">
                      Reframing the results from the research phase as “How might we..”(HMW) questions, to turn those into potential problem statements.


                    </p>
                    
                
                      <br></br>
                      <ul className="text-lg font-extralight leading-relaxed text-gray-600 space-y-1">
                           <li>• How might we help recruiters efficiently manage large volumes of applications without sacrificing quality?</li>
                           <li>• How might we help recruiters quickly spot top talent to avoid missing strong candidates?</li>
                           <li>• How might we help recruiters trust AI insights by ensuring transparency and explainability in candidate evaluations?</li>
                           <li>•  How might we ensure the hiring process remains personal and human-centered, even when using AI tools?</li>
                           
                         </ul>
                       
                       <br></br>
                       

                    
                
                       </div>
                       <br></br>
                       <p className="text-lg font-extralight leading-relaxed text-gray-600">
                       An impact-effort matrix helped me to identify the areas that had the highest impact while requiring lower development effort. I valued higher impact as opposed to lower effort for this redesign. I realized that there was an opportunity to integrate these experiences to both increase the ability for users to find relevant groceries and introduce them to new community-driven items throughout their purchasing process.
                       </p>

                

                

                {/* Image after key opportunity areas */}
              <div className="px-8 flex -mt-10 justify-center">
                          <div className="relative w-full max-w-4xl">
                           <Image
                             src="/images/talentora3.png"
                             alt="Impact Effort Matrix"
                             width={1600}
                             height={1200}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 50%' }}
                           />
                         
                </div>

                
                       

                
       
                        
                      </div>
                  </div>
                </div>
                <p className=" text-3xl font-semibold leading-relaxed text-orange-400">
                  user flow
                  </p>

                  <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  User stories are used to identify the functional needs, but don’t explore how to actually design the product to meet those functional needs.

                </p>
                    </div>
            



                           {/* Image after key opportunity areas */}
                            <div className="px-8 flex mt-4 justify-center">
                          <div className="relative w-full max-w-3xl">
                           <Image
                             src="/images/talentora6.png"
                             alt="Impact Effort Matrix"
                             width={1600}
                             height={1200}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 50%' }}
                           />
                         
                        </div>
                        </div>

            <div className="px-8 flex mt-4 justify-center">
                          <div className="relative w-full max-w-3xl">
                           <Image
                             src="/images/talentora7.png"
                             alt="Impact Effort Matrix"
                             width={1600}
                             height={1200}
                             className="rounded-lg object-cover object-center"
                             style={{ objectPosition: 'center 50%' }}
                           />
                         </div>
                         </div>

<div 
              id="competitive-analysis" 
              className="px-16 grid grid-cols-1 md:grid-cols-12 gap-8 mt-6 scroll-mt-24"
              onMouseEnter={() => {
                const event = new CustomEvent('sectionHover', { detail: 'competitive-analysis' })
                window.dispatchEvent(event)
              }}
              onMouseLeave={() => {
                const event = new CustomEvent('sectionHover', { detail: null })
                window.dispatchEvent(event)
              }}
            ></div>



            <div className="px-16">
              <SectionTitle>Ideate</SectionTitle>
            </div>
            <p className="px-16 text-lg font-extralight leading-relaxed text-gray-600">
            As we were working towards an MVP, I thought that first and foremost, the design strategy should start with acquiring customers. With no customers, no one will be seeing the product. Using the existing logo to work off of, I built a personalization onboarding experience for new users, starting from the Fitvio marketing page all the way to the authenticated home page. I started with Sam's—our casual health nut's—experience.

Sam can choose to start working out right away without even creating an account. To track her progress and engage with instructors though, she can create an account, answer a couple questions, and get a personalized list of workout videos in just a few minutes.

                </p>
            
            
            {/* Image after Ideate section title */}
            <div className="px-16 flex mt-4 justify-start">
              <div className="relative w-full max-w-6xl ">
                <Image
                  src="/images/talentora8.png"
                  alt="Ideate Process"
                  width={1600}
                  height={1200}
                  className="rounded-lg object-cover object-center"
                  style={{ objectPosition: 'center 50%' }}
                />
              </div>
            </div>
            
            {/* Two videos in columns after ideate image */}
            <div className="px-16 mt-20">
              <div className="max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative">
                    <video
                      className="w-full h-auto"
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ maxHeight: "400px" }}
                      onError={(e) => console.log('Video loading error:', e)}
                    >
                      <source src="/videos/video10.mp4" type="video/quicktime" />
                      <source src="/videos/video10.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <video
                      className="mt-10 w-full h-auto"
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ maxHeight: "400px" }}
                    >
                      <source src="/videos/video4.mp4" type="video/quicktime" />
                      <source src="/videos/video4.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  
                  <div className="relative">
                    <video
                      className="w-full h-auto"
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ maxHeight: "400px" }}
                    >
                      <source src="/videos/video13.mov" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <video
                      className="mt-10 w-full h-auto"
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ maxHeight: "400px" }}
                    >
                      <source src="/videos/video5.mov" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 px-16">
            <SectionTitle>Rebranding</SectionTitle>
          </div>
          <p className="px-16 text-lg font-extralight leading-relaxed text-gray-600">
                  Talentora is redefining hiring for small and medium-sized businesses. With a focus on <strong>efficiency</strong>, <strong>empathy</strong>, and <strong>intelligence</strong>, the platform helps teams hire smarter—without the high costs or time demands of traditional recruiting. Whether you're an overextended founder, a lean HR manager, or a job seeker looking for a modern interview experience, Talentora offers a powerful solution for building your dream team.
                </p>
                <div className="px-16 max-w-6xl flex mt-4 justify-center">
                <Image
                  src="/images/talentora9.png"
                  alt="Rebranding Process"
                  width={1600}
                  height={1200}
                  className="rounded-lg object-cover object-center w-full h-auto"
                  style={{ objectPosition: 'center 50%' }}
                />
                </div>
          {/* Text and Image in columns */}
          <div className="px-16 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div className="space-y-6">
               
                
                <p className="text-lg font-extralight leading-relaxed text-gray-600">
                  In addition, I wanted to extend the brand to all parts of Talentora, including the team itself. As we were working completely virtually, it was hard to build a team culture of connection and engagement. I uploaded our new logo as a Slack emoji to socialize the new brand with the team and build excitement.
                </p>
              </div>
              
              {/* Right Column - Image */}
              <div className="relative max-w-lg justify-startmx-auto">
                <Image
                  src="/images/talentora10.jpg"
                  alt="Rebranding Process"
                  width={1400}
                  height={1200}
                  className=" object-cover object-center w-full h-auto"
                  style={{ objectPosition: 'center 50%' }}
                />
              </div>
            </div>
          </div>
                     <div className="px-16 flex mt-10 max-w-7xl mx-auto justify-center">
          <Image
                  src="/images/talentora11.png"
                  alt="Rebranding Process"
                  width={1400}
                  height={1200}
                  className=" object-cover object-center w-full h-auto"
                  style={{ objectPosition: 'center 50%' }}
                />
                
              </div>
               <p className="max-w-7xl mx-auto text-sm font-extralight leading-relaxed text-gray-600 text-center mt-4 mb-10">
                 Logo Construction
               </p>

             <div className="px-16 flex mt-10 max-w-5xl justify-center mx-auto">
            
              <Image
                src="/images/talentora12.png"
                alt="Rebranding Process"
                width={1400}
                height={1200}
                className="object-cover object-center w-full h-auto"
                style={{ objectPosition: 'center 100%' }}
              />
            </div>
            <p className="max-w-7xl mx-auto text-sm font-extralight leading-relaxed text-gray-600 text-center mt-4 mb-10">
            Minimum spacing guidelines

               </p>

               <div className="px-16 flex mt-10 max-w-7xl justify-center mx-auto">
            
            <Image
              src="/images/talentora13.png"
              alt="Rebranding Process"
              width={1400}
              height={1200}
              className="object-cover object-center w-full h-auto"
              style={{ objectPosition: 'center 100%' }}
            />
          </div>
          <p className="max-w-7xl mx-auto text-sm font-extralight leading-relaxed text-gray-600 text-center mt-4 mb-10 ">
          Logo iterations and variations for light and dark mode
             </p>

             <div className="px-16 flex mt-10 max-w-7xl justify-center mx-auto">
            
            <Image
              src="/images/talentora14.png"
              alt="Rebranding Process"
              width={1400}
              height={1200}
              className="object-cover object-center w-full h-auto"
              style={{ objectPosition: 'center 100%' }}
            />
          </div>
          <p className="max-w-7xl mx-auto text-sm font-extralight leading-relaxed text-gray-600 text-center mt-4 mb-10 ">
          Talentora color palette
             </p>


             <p className="px-16 text-lg font-extralight leading-relaxed text-gray-600">
                             After establishing our rebrand, I applied it to a couple of designs from our onboarding journey.

             </p>





          

            
            
                         
                

             
                
                
            

             

 
            
            
           
                





        </article>
      </main>

      {/* Project Cards Navigation */}
      <div className="flex items-center px-16 py-20">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-6 text-2xl font-bold text-gray-900 whitespace-nowrap">More Projects</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      <div className="px-16 pt-0 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects
            .filter(project => project.href !== "/work/talentora")
            .slice(0, 3)
            .map((project) => (
              <ProjectCard key={project.href} project={project} />
            ))}
        </div>
      </div>
    </div>
  )
} 