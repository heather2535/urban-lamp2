"use client"

import { useEffect, useRef } from "react"

export function AuraCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const updateCursor = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      cursor.style.setProperty("--mouse-x", `${x}px`)
      cursor.style.setProperty("--mouse-y", `${y}px`)
    }

    window.addEventListener("mousemove", updateCursor)
    return () => window.removeEventListener("mousemove", updateCursor)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-600 ease-in-out group-hover:opacity-40"
      style={{
        background:
          "radial-gradient(circle 400px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(229, 64, 164, 0.15), transparent 80%)",
      }}
    />
  )
}

