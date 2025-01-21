import { Inter } from "next/font/google"
import { ThemeProvider } from "@/providers"
import { Navigation } from "@/components/navigation"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div>
            <Navigation />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
