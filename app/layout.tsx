import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    "Residential and Business Cleaning Services Houston | Taylor's Magical Maids",
  description:
    "Discover top-notch cleaning services with Taylor's Magical Maids in Houston. Experience personalized, thorough cleaning solutions for your home. Book now for a magical touch!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
