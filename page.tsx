import { ModeToggle } from "@/components/ui/mode-toggle"
import { Navigation } from "@/components/ui/navigation"
import { ProjectGrid } from "@/components/ui/project-grid"
import { Hero } from "@/components/ui/hero"

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

