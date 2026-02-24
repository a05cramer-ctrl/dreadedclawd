'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Dreaded Clawd" width={40} height={40} className="rounded-lg" />
            <span className="font-display font-bold text-xl text-gold-500">Dreaded Clawd</span>
            <span className="text-gold-600 font-semibold text-sm">$DCLAW</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-white/80 hover:text-gold-500 transition-colors">About</a>
            <a href="#utility" className="text-sm text-white/80 hover:text-gold-500 transition-colors">Utility</a>
            <a href="#tokenomics" className="text-sm text-white/80 hover:text-gold-500 transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-sm text-white/80 hover:text-gold-500 transition-colors">Roadmap</a>
            <a href="#community" className="text-sm text-white/80 hover:text-gold-500 transition-colors">Network</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-gold-500 border border-gold-600/50 rounded-lg hover:bg-gold-600/10 transition-colors"
            >
              Buy $DCLAW
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium bg-gold-600 text-charcoal-950 rounded-lg hover:bg-gold-500 transition-colors"
            >
              Enter the Network
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/80"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-white/80 hover:text-gold-500" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#utility" className="text-white/80 hover:text-gold-500" onClick={() => setMobileOpen(false)}>Utility</a>
              <a href="#tokenomics" className="text-white/80 hover:text-gold-500" onClick={() => setMobileOpen(false)}>Tokenomics</a>
              <a href="#roadmap" className="text-white/80 hover:text-gold-500" onClick={() => setMobileOpen(false)}>Roadmap</a>
              <a href="#community" className="text-white/80 hover:text-gold-500" onClick={() => setMobileOpen(false)}>Network</a>
              <a href="#" className="text-gold-500 font-medium">Buy $DCLAW</a>
              <a href="#" className="text-gold-500 font-medium">Enter the Network</a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
