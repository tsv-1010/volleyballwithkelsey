import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Volleyball with Kelsey | Elite Volleyball Coaching in Petaluma & Santa Rosa",
  description: "Master the court with Coach Kelsey van Uden. Private volleyball lessons, group training, and elite coaching for athletes in Northern California. Volleyball private lessons Petaluma, Santa Rosa volleyball coaching.",
  keywords: "volleyball private lessons Petaluma, Santa Rosa volleyball coaching, Northern California elite volleyball training, volleyball coach, private volleyball training, youth volleyball lessons",
  openGraph: {
    title: "Volleyball with Kelsey | Elite Volleyball Coaching",
    description: "Pro-level technical training from a former collegiate star. Private lessons and group training in Petaluma & Santa Rosa.",
    type: "website",
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
