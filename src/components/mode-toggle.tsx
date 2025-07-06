"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 text-violet-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute h-5 w-5 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
      </div>
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
    </button>
  )
}

