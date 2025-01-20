import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/badge"

const project = {
  title: "Cryptography Price Dashboard",
  description: "Real-time cryptocurrency tracking dashboard with news integration and price alerts.",
  date: "December 28, 2024",
  video: "/crypto-dashboard-video.mov?height=450&width=800", // Replace with actual video source
  content:
    "This project involved creating a comprehensive cryptocurrency dashboard that provides real-time price tracking, news integration, and customizable price alerts. The dashboard was built using React for the frontend, with real-time data fetched from cryptocurrency APIs. The main challenges included managing real-time data streams and creating an intuitive user interface for complex financial information.",
  tags: ["Web Development", "Data Visualization"],
}

export default function CryptoDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container max-w-2xl mx-auto px-4 py-8">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          <h1 className="font-bold text-[40px] mt-4 mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-4">{project.date}</p>
          <div className="mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="mr-2">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Video section */}
          <div className="relative mb-6">
            <video
              controls
              width="100%"
              height="auto"
              className="object-cover rounded-lg"
            >
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
