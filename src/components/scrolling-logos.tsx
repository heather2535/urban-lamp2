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
    <div className="relative flex w-full overflow-hidden bg-background py-12">
      <div
        className="flex space-x-16 px-10 mx-auto"
        style={{
          display: "flex",
          animation: "scroll-right-to-left 20s linear infinite",
        }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={logo.src || "/logo4.png"}
              alt={logo.alt}
              width={200} // Increased size of logos
              height={90} // Increased size of logos
              className="max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-center-to-left {
          0% {
            transform: translateX(50%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
