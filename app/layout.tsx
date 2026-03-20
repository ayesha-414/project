import React from "react"
import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Body font (clean & readable)
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

// Heading font (professional / elegant)
const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-heading'
});

export const metadata: Metadata = {
  title: "B.Sc & M.Sc Programmes Admission - PSG College of Technology",
  icons: {
    icon: "/image/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable} 
          ${headingFont.variable} 
          font-sans antialiased
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}