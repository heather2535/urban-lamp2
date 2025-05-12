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
          <h1 className="text-3xl font-semibold mt-8 mb-2 text-center">About Me</h1>
          
          <div className="relative w-full overflow-hidden mt-6 mb-12">
            <div className="flex animate-scroll">
              <div className="flex gap-6">
                <Image
                  className="w-64 h-64 object-cover rounded-lg shadow-lg"
                  src="/images/image15.jpg"
                  width="256"
                  height="256"
                  alt="Gallery image 1"
                />
                <Image
                  className="w-64 h-64 object-cover rounded-lg shadow-lg"
                  src="/images/image16.jpg"
                  width="256"
                  height="256"
                  alt="Gallery image 2"
                />
                <Image
                  className="w-64 h-64 object-cover rounded-lg shadow-lg"
                  src="/images/image17.jpg"
                  width="256"
                  height="256"
                  alt="Gallery image 3"
                />
                <Image
                  className="w-64 h-64 object-cover rounded-lg shadow-lg"
                  src="/images/image18.jpg"
                  width="256"
                  height="256"
                  alt="Gallery image 4"
                />
              </div>
              
            </div>
          </div>

          <style jsx global>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <p className="text-md mb-4 text-center text-gray-700 dark:text-gray-300">Hi, I'm Heather Davies, a senior at Boston University, where I'm pursuing a B.F.A. in Graphic Design with a minor in Psychology. My academic journey, internships, and passion for design have equipped me with a unique blend of creative and technical expertise. Through coursework in UX/UI design, cognitive psychology, and design strategy, I've developed a deep understanding of how to craft meaningful, user-centered experiences that address real-world challenges</p>
          <h1 className="text-xl font-bold mt-8 mb-2 text-center">Passion for User-Centered Design </h1>
          <p className="text-md mb-4 text-center text-gray-700 dark:text-gray-300">I am deeply passionate about designing intuitive and impactful user experiences. By integrating principles of psychology, visual storytelling, and data-driven strategies, I thrive on creating designs that resonate with users and deliver measurable results. Whether it's simplifying workflows, improving usability, or enhancing brand identity, I'm driven by the opportunity to use design as a tool for positive change.</p>
           
          
          <p className="text-md mb-4 text-center text-gray-700 dark:text-gray-300">I thrive in collaborative environments, whether I'm leading a team or contributing as a member. I believe the best solutions come from open communication and diverse perspectives.</p>
          <h1 className="text-xl font-bold mt-8 mb-2 text-center">Future Aspirations          </h1>
          <p className="text-md mb-4 text-center text-gray-700 dark:text-gray-300">As I approach graduation, I'm eager to bring my skills and passion to an innovative organization where I can create impactful user experiences. I'm especially interested in opportunities that combine design expertise with technical problem-solving to enhance user satisfaction and contribute to meaningful projects.</p>
          <h1 className="text-xl font-semibold mt-8 mb-2 text-center">Let's Connect!          </h1>
          <p className="text-md mb-4 text-center text-gray-700 dark:text-gray-300">I'm always excited to connect with fellow designers, professionals, and mentors. Whether it's collaborating, sharing insights, or exploring new opportunities, I welcome the chance to grow and learn from others.
         Feel free to connect with me on LinkedIn or check out my work on GitHub.
         </p>


        </div>
      </main>
    </div>
  )
}

