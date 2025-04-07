"use client"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import { AuraCursor } from "@/components/aura-cursor"
import { useState, useMemo, useRef, useEffect } from "react"


export default function About() {
      const [showAura, setShowAura] = useState(true)
    
  return (
    <div className={`group min-h-screen bg-background fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-black dark:via-[#1a2a3a] dark:to-[#6a4e92] ${showAura ? "" : "pointer-events-none"}`}>
              {showAura && <AuraCursor />}

      <Navigation />
      <main className="container mx-auto px-4 py-14">
        <div className="max-w-2xl mx-auto">
        <div className="relative w-full">       
          <Image
            className="w-80 mt-12 h-auto rounded-full shadow-lg mx-auto"
            src="/about.png"
            width="500"
            height="500"
            alt="image"
          />
        </div>
          <h1 className="text-xl font-semibold mt-8 mb-2 text-center">About Me</h1>
          <p className="text-lg mb-4 text-center">Hi, I'm Heather Davies, a senior at Boston University, where I'm pursuing a B.F.A. in Graphic Design with a minor in Psychology. My academic journey, internships, and passion for design have equipped me with a unique blend of creative and technical expertise. Through coursework in UX/UI design, cognitive psychology, and design strategy, I've developed a deep understanding of how to craft meaningful, user-centered experiences that address real-world challenges</p>
          <h1 className="text-xl font-semibold mt-8 mb-2 text-center">Passion for User-Centered Design </h1>
          <p className="text-lg mb-4 text-center">I am deeply passionate about designing intuitive and impactful user experiences. By integrating principles of psychology, visual storytelling, and data-driven strategies, I thrive on creating designs that resonate with users and deliver measurable results. Whether it's simplifying workflows, improving usability, or enhancing brand identity, I'm driven by the opportunity to use design as a tool for positive change.</p>
          <h1 className="text-xl font-semibold mt-8 mb-2 text-center">Technical Proficiency</h1>
          <p className="text-lg mb-4 text-center">I bring a diverse set of skills to every project, blending creativity with technical know-how.
            I am highly proficient in design tools like:
            Figma, Photoshop, Illustrator, and Sketch.

            I also excel in prototyping tools such as:
            InVision and Principle, and I have front-end development skills in HTML and CSS, allowing me to bridge the gap between design and development.

            In addition, I'm experienced with:
            Asana, Jira, Trello, and agile methodologies like Scrum and Kanban.
            These tools have supported my ability to manage product lifecycles, lead cross-functional teams, and deliver user-focused results.</p>
          <h1 className="text-xl font-semibold mt-8 mb-2 text-center">Projects and Experience          </h1>
          <p className="text-lg mb-4 text-center">Throughout my academic and professional journey, I've led and contributed to a wide range of impactful projects:

            Talentora: As the Lead User Experience Designer, I developed the branding, user interface, and over 50 screens, increasing brand recognition and streamlining hiring processes through an AI-powered recruiting platform.
            Boston University Ethical AI Dashboard: Designed an interactive dashboard integrating tools like ShadCN, MUI, and Next.js, supporting researchers in making responsible AI decisions.
            Boston Children's Hospital ALS Resource App: Improved usability and satisfaction by 30% through intuitive interface designs.
            DEI-Focused Consulting App: Led the design of workflows for a tool empowering companies to implement measurable diversity practices.</p>
          <h1 className="text-xl font-semibold mt-8 mb-2 text-center">Constant Learner and Collaborative Team Member          </h1>
          <p className="text-lg mb-4 text-center">In the ever-evolving fields of UX/UI and design, I value the importance of continuous learning. I stay up-to-date with emerging trends and technologies, taking courses and attending workshops on topics like machine learning, agile methodologies, and accessibility in design.</p>
          <p className="text-lg mb-4 text-center">I thrive in collaborative environments, whether I'm leading a team or contributing as a member. I believe the best solutions come from open communication and diverse perspectives.</p>
          <h1 className="text-xl font-semibold mt-8 mb-2 text-center">Future Aspirations          </h1>
          <p className="text-lg mb-4 text-center">As I approach graduation, I'm eager to bring my skills and passion to an innovative organization where I can create impactful user experiences. I'm especially interested in opportunities that combine design expertise with technical problem-solving to enhance user satisfaction and contribute to meaningful projects.</p>
          <h1 className="text-xl font-semibold mt-8 mb-2 text-center">Let's Connect!          </h1>
          <p className="text-lg mb-4 text-center">I'm always excited to connect with fellow designers, professionals, and mentors. Whether it's collaborating, sharing insights, or exploring new opportunities, I welcome the chance to grow and learn from others.
         Feel free to connect with me on LinkedIn or check out my work on GitHub.
         </p>


        </div>
      </main>
    </div>
  )
}

