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
import { Menu, Palette } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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
            <Palette className="h-8 w-8 text-pink-500 text-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x" />
            <span className="text-pink-500 text-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x">
              Heather Davies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === "/projects" && "hover:text-pink-500 text-pink-500"
                      )}
                    >
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/graphics" legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === "/graphics" && "text-pink-500"
                      )}
                    >
                      Graphics
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === "/about" && "text-pink-500"
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

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[200px] pt-12">
                <nav className="flex flex-col gap-4">
                  <Link href="/projects" className={cn("text-sm transition-colors hover:text-pink-500",
                    pathname === "/projects" && "text-pink-500"
                  )}>
                    Projects
                  </Link>
                  <Link href="/graphics" className={cn("text-sm transition-colors hover:text-pink-500",
                    pathname === "/graphics" && "text-pink-500"
                  )}>
                    Graphics
                  </Link>
                  <Link href="/about" className={cn("text-sm transition-colors hover:text-pink-500",
                    pathname === "/about" && "text-pink-500"
                  )}>
                    About
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
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
