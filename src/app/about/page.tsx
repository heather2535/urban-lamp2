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
      <main className="py-14">
        {/* Hero Section */}
        <section className="flex items-center justify-center pt-28 px-4">
          <div className="flex items-center justify-center relative w-full py-16 sm:py-24">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="container relative z-20">
              <div className="mx-auto max-w-5xl text-center">
                <div className="relative animate-float">
                  <div className="absolute inset-0 blur-[120px] -z-10 bg-[radial-gradient(circle,rgba(236,72,153,0.4)_0%,rgba(236,72,153,0.2)_30%,transparent_70%)] animate-ambient-glow" />
                  <h1 className="text-foreground text-7xl font-semibold tracking-tight text-center">
                    About Me
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Text Section with full-width white background */}
        <section className="bg-white dark:bg-gray-900 w-full min-h-screen">
          <div className="max-w-2xl mx-auto px-4 py-8">
            <div className="flex flex-col gap-6">
              {/* Quote Section */}
              <div className="relative mt-12 mb-12">
                <div className="absolute -top-10 -left-10 text-9xl text-pink-500/10 dark:text-pink-500/20 font-serif">"</div>
                <blockquote className="text-3xl md:text-4xl font-light text-gray-800 dark:text-white/90 leading-relaxed italic">
                  Design is not just what it looks like and feels like. Design is how it works.
                </blockquote>
                <div className="mt-8 text-right">
                  <p className="text-lg text-gray-600 dark:text-gray-400">— Steve Jobs</p>
                </div>
              </div>

              <p className="text-md text-center text-gray-700 dark:text-gray-300">Hi, I'm Heather Davies, a senior at Boston University, where I'm pursuing a B.F.A. in Graphic Design with a minor in Psychology. My academic journey, internships, and passion for design have equipped me with a unique blend of creative and technical expertise. Through coursework in UX/UI design, cognitive psychology, and design strategy, I've developed a deep understanding of how to craft meaningful, user-centered experiences that address real-world challenges</p>
              
              <h1 className="text-xl font-bold text-center">Passion for User-Centered Design</h1>
              <p className="text-md text-center text-gray-700 dark:text-gray-300">I am deeply passionate about designing intuitive and impactful user experiences. By integrating principles of psychology, visual storytelling, and data-driven strategies, I thrive on creating designs that resonate with users and deliver measurable results. Whether it's simplifying workflows, improving usability, or enhancing brand identity, I'm driven by the opportunity to use design as a tool for positive change.</p>
              
              <p className="text-md text-center text-gray-700 dark:text-gray-300">I thrive in collaborative environments, whether I'm leading a team or contributing as a member. I believe the best solutions come from open communication and diverse perspectives.</p>
              
              <h1 className="text-xl font-bold text-center">Future Aspirations</h1>
              <p className="text-md text-center text-gray-700 dark:text-gray-300">As I approach graduation, I'm eager to bring my skills and passion to an innovative organization where I can create impactful user experiences. I'm especially interested in opportunities that combine design expertise with technical problem-solving to enhance user satisfaction and contribute to meaningful projects.</p>
              
              <h1 className="text-xl font-semibold text-center">Let's Connect!</h1>
              <p className="text-md text-center text-gray-700 dark:text-gray-300">I'm always excited to connect with fellow designers, professionals, and mentors. Whether it's collaborating, sharing insights, or exploring new opportunities, I welcome the chance to grow and learn from others.
              Feel free to connect with me on LinkedIn or check out my work on GitHub.</p>

              {/* Images Section */}
              <div className="relative w-full overflow-hidden mt-12 mb-12">
                <div className="flex animate-scroll">
                  <div className="flex gap-4">
                    <Image
                      className="w-64 h-64 object-cover rounded-md shadow-lg"
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
            </div>
          </div>
        </section>
      </main>

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
    </div>
  )
}

