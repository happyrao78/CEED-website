"use client"
import { Urbanist } from 'next/font/google'
import './globals.css'
import FireFliesBackground from './_components/FireFliesBackground'
import React from 'react'
import { useEffect } from 'react'
const urbanist = Urbanist({ subsets: ['latin'] })


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}
export default function RootLayout({ children }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/660c99611ec1082f04de2773/1hqgje9b6';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <body className={urbanist.className}>
      <FireFliesBackground />
        {children}
        
      </body>
    </html>
  )
}
