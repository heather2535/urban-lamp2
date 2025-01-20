"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Copy, Share, Twitter, Linkedin } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/dropdown-menu";
import { Button } from "@/components/button";
import { Badge } from "@/components/badge";
import { Toast, ToastAction, ToastProvider } from "@radix-ui/react-toast"; // Correct import for Toast
import { SearchBar } from "./search-bar";

type Project = {
  title: string;
  description: string;
  date: string;
  image: string;
  href: string;
  tagline: string;
  tags: string[];
};

const projects: Project[] = [
  // The project data remains the same...
];

export function ProjectGrid() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [toastVisible, setToastVisible] = useState(false); // To control toast visibility

  const handleCopyLink = (href: string) => {
    const link = `${window.location.origin}${href}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setToastVisible(true); // Show the toast
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        setToastVisible(true); // Show error toast
      });
  };

  const handleShare = (platform: "twitter" | "linkedin", project: Project) => {
    const link = `${window.location.origin}${project.href}`;
    const text = `Check out this project: ${project.title}`;
    let shareUrl = "";

    if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;
    }

    window.open(shareUrl, "_blank");
  };

  const filteredProjects = projects.filter((project) => {
    const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

  return (
    <ToastProvider>
      <div>
        <h2 className="text-3xl font-bold mb-6" id="projects">
          My Projects
        </h2>
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex-grow max-w-md">
            <SearchBar onSearch={setSearchQuery} />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant={selectedTag === null ? "default" : "outline"} onClick={() => setSelectedTag(null)}>
              All
            </Button>
            {allTags.map((tag) => (
              <Button key={tag} variant={selectedTag === tag ? "default" : "outline"} onClick={() => setSelectedTag(tag)}>
                {tag}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
            >
              <Link href={project.href} className="block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-muted-foreground">{project.date}</time>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                        <Share className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleCopyLink(project.href)}>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Link
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleShare("twitter", project)}>
                          <Twitter className="mr-2 h-4 w-4" />
                          Share on Twitter
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleShare("linkedin", project)}>
                          <Linkedin className="mr-2 h-4 w-4" />
                          Share on LinkedIn
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold leading-none tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{project.tagline}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        open={toastVisible}
        onOpenChange={setToastVisible}
        duration={3000}
      >
        <div className="flex items-center">
          <span className="mr-2">Link copied to clipboard!</span>
          <ToastAction altText="Close" onClick={() => setToastVisible(false)}>
            Close
          </ToastAction>
        </div>
      </Toast>
    </ToastProvider>
  );
}
