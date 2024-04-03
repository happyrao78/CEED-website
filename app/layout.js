"use client"
import { Urbanist } from 'next/font/google'
import './globals.css'
import FireFliesBackground from './_components/FireFliesBackground'
import React from 'react'
const urbanist = Urbanist({ subsets: ['latin'] })


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}
export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <FireFliesBackground />
        {children}
        
      </body>
    </html>
  )
}
