import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'SiteRead — Reverse-Engineer Any Website',
  description: 'Point at any site — get full tech stack, architecture decisions, and a working rebuild. Not scraping — understanding.',
  keywords: 'website analysis, tech stack detection, reverse engineering, web architecture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0f] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
