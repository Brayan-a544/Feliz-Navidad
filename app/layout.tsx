import type React from "react"
import type { Metadata } from "next"
import { Mountains_of_Christmas, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _mountainsOfChristmas = Mountains_of_Christmas({
  weight: ["400", "700"],
  subsets: ["latin"],
})

const _playfairDisplay = Playfair_Display({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Christmas Card for Edgar Emmanuel",
  description: "A special Christmas message filled with warm wishes",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
