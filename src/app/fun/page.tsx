"use client"

import Image from "next/image"

type FunItem = {
  src?: string;
  video?: string;
  alt: string;
  caption: string;
};

const funSections: {
  title: string;
  subtitle: string;
  items: FunItem[];
}[] = [
  {
    title: "touch designer",
    subtitle: "exploring creativity through pixels and vectors.",
    items: [
      {
        src: "/images/image68.png",
        alt: "From RGB noise, each operator maps signal flow into motion",
        caption: "From RGB noise, each operator maps signal flow into motion",
      },
      {
        video: "/videos/video9.mov",
        alt: "Vector art exploration",
        caption: "Vector vortex exploration in Adobe Illustrator",
      },
    ],
  },
  {
    title: "building structures",
    subtitle: "Boston Unviersity's 808 lab was my crafting space",
    items: [
      {
        video: "/videos/video8.mov",
        alt: "I designed the golden gate bridge made out of toothpicks",
        caption: "I designed the golden gate bridge made out of toothpicks",
      },
      {
        src: "/images/image64.png",
        alt: "mailbox for Isabelle",
        caption: "I thought this project would take 2 hours, but it ended up taking fifty!"
      },
    ],
  },
  {
    title: "chaos theory & fractalization",
    subtitle: "pattern, disruption, and everything in between.",
    items: [
      {
        video: "/videos/video7.mov",
        alt: "Legend of Zelda: Colgera Battle Theme",
        caption: "A web app  based on the chaos theory of fractals",
      },
      {
        src: "/images/image62.png",
        alt: "Designed a research book for my thesis",
        caption: "Designed a research book for my pattern explorations",
      },
    ],
  },
  {
    title: "laser printing",
    subtitle: "life, rendered in light and glass.",
    items: [
      {
        src: "/images/image66.png",
        alt: "Live etching from the laser cutter",
        caption: "Live etching from the laser cutter",
      },
      {
        src: "/images/image67.png",
        alt: "In glowing neon acrylic, laser-cut icons from the city I live in",
        caption: "In glowing neon acrylic, laser-cut icons from the city I live in ",
      },
    ],
  },
  {
    title: "Off-World Architecture",
    subtitle: "realtime sci-fi rendering.",
    items: [
      {
        src: "/gallery/image53.png",
        alt: "psychedelic space station",
        caption: "psychedelic space station 👾",
      },
      {
        video: "/videos/video6.mov",
        alt: "my latte art journey",
        caption: "sci-fi particle simulation in blender",
      },
    ],
  },
]

export default function FunPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-2 sm:px-6 lg:px-16 pt-36">
      <div className="max-w-6xl mx-auto space-y-24">
        {funSections.map((section, idx) => (
          <div key={section.title} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Section Title and Subtitle */}
            <div className="md:col-span-1 flex flex-col items-start md:items-end md:pr-8">
              <h2 className="text-4xl sm:text-5xl font-mono font-bold text-[#4B2E19] lowercase mb-2 whitespace-pre-line text-left md:text-right leading-tight">
                {section.title}
              </h2>
              <p className="text-md sm:text-lg text-gray-600 font-light mb-4 md:mb-0 text-left md:text-right max-w-xs">
                {section.subtitle}
              </p>
            </div>
            {/* Images Grid */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {section.items.map((item, i) => (
                <div key={item.alt} className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center polaroid-card">
                  {/* Tape accent */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-orange-500/50 z-10"></div>
                  {item.video ? (
                    <div className="w-full aspect-square overflow-hidden mb-8">
                      <video
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-square overflow-hidden mb-8">
                      <Image
                        src={item.src!}
                        alt={item.alt}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="text-xs sm:text-sm font-mono text-gray-700 text-center mt-2">
                    {item.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 