import Image from "next/image"

const logos = [
  { src: "/placeholder.svg", alt: "Company 1" },
  { src: "/placeholder.svg", alt: "Company 2" },
  { src: "/placeholder.svg", alt: "Company 3" },
  { src: "/placeholder.svg", alt: "Company 4" },
  { src: "/placeholder.svg", alt: "Company 5" },
  { src: "/placeholder.svg", alt: "Company 6" },
  { src: "/placeholder.svg", alt: "Company 7" },
  { src: "/placeholder.svg", alt: "Company 8" },
]

export function ScrollingLogos() {
  return (
    <div className="relative flex w-full overflow-hidden bg-background py-12">
      <div className="animate-scroll-left flex w-full space-x-16">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex w-[200px] items-center justify-center">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={150}
              height={50}
              className="max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

