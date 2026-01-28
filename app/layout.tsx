import React from "react"
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'B.Sc & M.Sc Programmes Admission - PSG College of Technology',
  description: 'PSG College of Technology - Science Programmes Admission 2025. Apply for B.Sc, M.Sc, and 5 Year Integrated M.Sc Programmes.',
  generator: 'PSG Tech',
  keywords: 'PSG Tech, PSG College of Technology, B.Sc, M.Sc, Admission 2025, Science Programmes, Coimbatore',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
