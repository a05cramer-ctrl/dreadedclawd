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
        <div className="flex items-center justify-between h-16 lg:h-18">
          <a href="#" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Dreaded Clawd" width={36} height={36} className="rounded-lg" />
            <span className="font-display font-bold text-lg text-white">Dreaded Clawd</span>
            <span className="text-xs font-mono text-gold-600 border border-gold-600/30 px-1.5 py-0.5 rounded">$DCLAW</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-white/60 hover:text-white transition-colors font-mono">agent</a>
            <a href="#utility" className="text-sm text-white/60 hover:text-white transition-colors font-mono">utility</a>
            <a href="#tokenomics" className="text-sm text-white/60 hover:text-white transition-colors font-mono">tokenomics</a>
            <a href="#roadmap" className="text-sm text-white/60 hover:text-white transition-colors font-mono">roadmap</a>
            <a href="#community" className="text-sm text-white/60 hover:text-white transition-colors font-mono">network</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-gold-500 border border-gold-600/40 rounded-lg hover:bg-gold-600/10 transition-colors"
            >
              Buy $DCLAW
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold bg-gold-600 text-black rounded-lg hover:bg-gold-500 transition-colors"
            >
              Deploy Agent
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/70"
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
            <div className="flex flex-col gap-4 font-mono">
              <a href="#about" className="text-white/70 hover:text-gold-500" onClick={() => setMobileOpen(false)}>agent</a>
              <a href="#utility" className="text-white/70 hover:text-gold-500" onClick={() => setMobileOpen(false)}>utility</a>
              <a href="#tokenomics" className="text-white/70 hover:text-gold-500" onClick={() => setMobileOpen(false)}>tokenomics</a>
              <a href="#roadmap" className="text-white/70 hover:text-gold-500" onClick={() => setMobileOpen(false)}>roadmap</a>
              <a href="#community" className="text-white/70 hover:text-gold-500" onClick={() => setMobileOpen(false)}>network</a>
              <a href="#" className="text-gold-500 font-medium">Buy $DCLAW</a>
              <a href="#" className="text-gold-500 font-medium">Deploy Agent</a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
