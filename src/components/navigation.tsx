"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
})

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
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-[#18181b]/90 backdrop-blur-xl shadow-sm py-4 border-b border-gray-100 dark:border-gray-800" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12 mx-auto">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm tracking-wide transition-all duration-300 group  font-extralight
                ${pathname === item.href ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`}
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
          ].map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="relative p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group"
            >
              <Icon size={18} />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
          ))}
          <div className="w-[34px] h-[34px] flex items-center justify-center">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu Button and Mode Toggle */}
        <div className="lg:hidden flex items-center space-x-4 ml-auto">
          <div className="w-[34px] h-[34px] flex items-center justify-center">
            <ModeToggle />
          </div>
          <button
            className="relative z-10 p-2 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <div className="w-5 h-5 relative">
              <motion.span
                className={`absolute top-0.5 left-0 w-5 h-0.5 bg-gray-900 dark:bg-white origin-left`}
                animate={mobileMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`absolute top-2 left-0 w-5 h-0.5 bg-gray-900 dark:bg-white`}
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`absolute top-3.5 left-0 w-5 h-0.5 bg-gray-900 dark:bg-white origin-left`}
                animate={mobileMenuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={mobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-white/80 dark:bg-[#18181b]/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800"
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
                  className={`block text-lg ${playfair.className} font-extralight ${pathname === item.href ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}
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
