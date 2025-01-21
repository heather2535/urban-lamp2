"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/navigation-menu"
import { Code2 } from 'lucide-react'

import { ModeToggle } from "./mode-toggle"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname() // Get current route

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full border-b border-white/10 z-50 backdrop-blur-md transition-colors duration-300",
        scrolled ? "bg-white/20 supports-[backdrop-filter]:bg-background/30" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-pink-500 text-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x" />
            <span className="text-gradient text-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x">
              Heather Davies
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === "/projects" && "text-white" // Active link style
                      )}
                    >
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === "/about" && "text-white" // Active link style
                      )}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

const navigationMenuTriggerStyle = () => {
  return cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-white focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-white data-[inactive]:text-white/70"
  )
}
