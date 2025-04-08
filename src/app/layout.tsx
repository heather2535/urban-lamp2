import { Inter } from "next/font/google"
import { ThemeProvider } from "@/providers"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"  // Import Footer component
import "./globals.css"
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Heather Davies',
  description: 'Creative Engineer & AI Enthusiast',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.className} fade-in bg-gradient-to-r from-white via-[#e6f0ff] to-[#f0e6ff] dark:from-black dark:via-[#1a2a3a] dark:to-[#6a4e92]`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main>{children}</main> {/* Main content area */}
            <Footer /> {/* Footer added here */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
