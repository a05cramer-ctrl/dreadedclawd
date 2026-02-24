import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dreadedclawd.com'),
  title: 'Dreaded Clawd | Power in Every Trade',
  description: 'Decentralized trading network connecting verified vendors and buyers in a secure, transparent ecosystem. $DCLAW powers the future of peer-to-peer commerce.',
  keywords: ['Dreaded Clawd', 'DCLAW', 'memecoin', 'Web3', 'decentralized', 'marketplace', 'crypto'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-charcoal-950 text-white">
        {children}
      </body>
    </html>
  )
}
