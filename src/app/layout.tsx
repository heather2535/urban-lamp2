import { Inter } from "next/font/google"
import { ThemeProvider } from "@/providers"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"  // Import Footer component
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} fade-in`} style={{ background: "linear-gradient(to right, #000000, #1a2a3a, #004d28, #6a4e92)" }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
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
