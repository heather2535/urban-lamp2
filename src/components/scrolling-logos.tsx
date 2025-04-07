import Image from "next/image";

const logos = [
  { src: "/logo4.png", alt: "Company 1" },
  { src: "/logo5.png", alt: "Company 4" },
  { src: "/logo6.png", alt: "Company 5" },
  { src: "/logo7.webp", alt: "Company 6" },
  { src: "/logo8.png", alt: "Company 6" },
  { src: "/logo9.png", alt: "Company 6" },
];

export function ScrollingLogos() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-12">
      <div
        className="flex items-center space-x-12 animate-scroll"
        style={{
          width: "max-content", // Ensures the container expands based on content
          borderBottom: "px solid #FF69B4", // Inline styling for pink border below
        }}
      >
        {/* Render logos twice for seamless scrolling */}
        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            style={
              logo.src === "/logo8.png"
                ? { transform: "scale(0.75)" } // Smaller size for logo8
                : {}
            }
          >
            <Image
              src={logo.src || "/logo4.png"}
              alt={logo.alt}
              width={200}
              height={90}
              className="max-w-full object-contain opacity-50"
              style={{
                filter: "grayscale(1) hue-rotate(330deg)", // Apply grayscale and rotate hues to pink
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
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
        }
      `}</style>
    </div>
  );
}
