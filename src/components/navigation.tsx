"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, Linkedin, FileText, Mail } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm py-4 border-b border-gray-100" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="relative group">
          <span className="text-2xl font-light tracking-wider">
            heather
            <span className="inline-block w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full ml-1 group-hover:scale-150 transition-transform duration-300"></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12">
          {["Home", "Projects", "Graphics", "About", "Contact"].map((item, index) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`relative text-sm font-medium tracking-wide transition-all duration-300 group ${
                pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? "text-black" : "text-gray-500 hover:text-black"
              }`}
            >
              {item}
              {pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) && (
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                />
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/heatherrdavies/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:daviesheather518@gmail.com"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            <FileText className="h-6 w-6" />
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[200px] pt-12">
              <nav className="flex flex-col gap-4">
                {["Home", "Projects", "Graphics", "About", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={cn(
                      "text-sm transition-colors hover:text-pink-500",
                      pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) && "text-pink-500"
                    )}
                  >
                    {item}
                  </Link>
                ))}
                <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                <a 
                  href="https://www.linkedin.com/in/heatherrdavies/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-pink-500 flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a 
                  href="mailto:daviesheather518@gmail.com"
                  className="text-sm transition-colors hover:text-pink-500 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-pink-500 flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
