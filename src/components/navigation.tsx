"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Linkedin, Mail, GithubIcon, X as LucideX } from "lucide-react"
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
    { name: "Work", href: "/#projects" },
    { name: "Fun", href: "/fun" },
    { name: "Resume", href: "/resume.pdf" },
    { name: "About", href: "/about" },

  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm pt-6 pb-4" : "bg-transparent pt-8 pb-6"
      }`}
    >
      <div className="w-full px-6 lg:px-8 flex items-center justify-between">
        {/* Name on the left */}
        <div className="font-mono text-3xl font-light text-orange-500">
          <Link href="/" className="hover:text-orange-600 transition-colors duration-300">
            <span className="monospace-200 header-name">
              Heather Davies
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - aligned to the right */}
        <nav className="hidden lg:flex items-center space-x-12">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm tracking-wide transition-all duration-300 group font-thin font-mono
                ${pathname === item.href ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"}`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Social Icons */}
          <div className="flex items-center space-x-4 ml-8">
            {[
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@heather.design", label: "Email" },
              { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
            ].map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="relative p-2 text-orange-500 hover:text-gray-900 transition-all duration-300 group"
              >
                <Icon size={label === "Email" ? 22 : 18} fill="currentColor" stroke={label === "Email" ? "white" : "currentColor"} />
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button and Mode Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            className="relative z-10 p-2 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <div className="w-5 h-5 relative">
              <motion.span
                className={`absolute top-0.5 left-0 w-5 h-0.5 bg-gray-900 origin-left`}
                animate={mobileMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`absolute top-2 left-0 w-5 h-0.5 bg-gray-900`}
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`absolute top-3.5 left-0 w-5 h-0.5 bg-gray-900 origin-left`}
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
        animate={mobileMenuOpen ? { opacity: 1, height: "100vh" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-50 bg-[#FFB085] flex flex-col justify-between items-center ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Name and Close X at the top */}
        <div className="w-full flex items-center justify-between px-8 pt-8">
          <span className="w-10" />
          <span className="font-mono text-3xl font-thin text-white text-center flex-1">Heather Davies</span>
          <button
            className="text-white z-50"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <LucideX size={44} strokeWidth={1.5} strokeLinecap="round" />
          </button>
        </div>
        {/* Navlinks center */}
        <div className="flex flex-col w-full -mt-12">
          <div className="space-y-8 w-full flex flex-col ">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`block text-3xl font-mono text-white text-center tracking-wide hover:font-bold ${pathname === item.href ? "font-bold" : "font-normal"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Social icons at the bottom */}
        <div className="w-full pb-10 flex justify-center">
          <div className="flex items-center space-x-6">
            {[
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@heather.design", label: "Email", mail: true },
              { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
            ].map(({ icon: Icon, href, label, mail }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="p-2 text-white hover:text-gray-900 transition-all duration-300 group"
              >
                {mail ? (
                  <Icon size={28} fill="white" stroke="#FFB085" />
                ) : (
                  <Icon size={28} fill="currentColor" stroke="currentColor" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  )
}
