import { ModeToggle } from "@/components/mode-toggle"
import { Navigation } from "@/components/navigation"
import { ProjectGrid } from "@/components/project-grid"
import { Hero } from "@/components/hero"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <ProjectGrid />
      </main>
    </div>
  )
}

