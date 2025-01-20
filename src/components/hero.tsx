"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Creative Developer
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Crafting digital experiences that combine beautiful design with powerful functionality.
            Specialized in modern web development and user interface design.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#projects"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                View My Work
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-foreground"
              >
                About Me <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

