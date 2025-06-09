"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Linkedin, Mail, FileText } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Graphics", href: "/graphics" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 dark:bg-[#18181b]/90 backdrop-blur-xl shadow-sm py-4 border-b border-gray-100 dark:border-gray-800" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="relative group">
          <span className="text-2xl font-light tracking-wider text-white">
            heather
            <span className="inline-block w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full ml-1 group-hover:scale-150 transition-transform duration-300"></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium tracking-wide transition-all duration-300 group
                ${pathname === item.href ? "text-black dark:text-white" : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"}`}
            >
              {item.name}
              {pathname === item.href && (
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
        <div className="hidden lg:flex items-center space-x-6">
          {[
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:hello@heather.design", label: "Email" },
            { icon: FileText, href: "/resume.pdf", label: "Resume" },
          ].map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="relative p-2 text-gray-400 hover:text-white transition-all duration-300 group"
            >
              <Icon size={18} />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-10 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            <motion.span
              className="absolute top-1 left-0 w-6 h-0.5 bg-white origin-left"
              animate={mobileMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-3 left-0 w-6 h-0.5 bg-white"
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-5 left-0 w-6 h-0.5 bg-white origin-left"
              animate={mobileMenuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={mobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-[#18181b] border-t border-gray-800"
      >
        <div className="container mx-auto px-6 py-8">
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`block text-lg font-medium ${pathname === item.href ? "text-white" : "text-gray-400 hover:text-white"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  )
}
