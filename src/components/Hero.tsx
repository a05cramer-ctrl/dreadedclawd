'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AgentTerminal } from './AgentTerminal'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle gold gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-gold-500 border border-gold-600/30 rounded-full bg-gold-600/5">
            $DCLAW — Decentralized Trading Network
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Dreaded Clawd"
            width={200}
            height={200}
            className="mx-auto rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tight mb-6"
        >
          <span className="gold-glow text-white">Dreaded</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-700 gold-glow">
            Clawd
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl font-display font-semibold text-gold-500 mb-4"
        >
          Power in Every Trade.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-12"
        >
          A secure decentralized exchange connecting verified vendors and buyers.
          Join a transparent ecosystem where every transaction is protected by smart contracts and community governance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <a
            href="#"
            className="group relative px-8 py-4 bg-gold-600 text-charcoal-950 font-semibold rounded-lg overflow-hidden transition-all hover:bg-gold-500"
          >
            <span className="relative z-10">Enter the Network</span>
            <div className="absolute inset-0 bg-gold-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#"
            className="px-8 py-4 font-semibold text-gold-500 border-2 border-gold-600/50 rounded-lg hover:bg-gold-600/10 transition-colors"
          >
            Buy $DCLAW
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <a
            href="https://x.com/DreadedClawd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white/70 border-2 border-white/15 rounded-lg hover:bg-white/5 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Twitter
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white/70 border-2 border-white/15 rounded-lg hover:bg-white/5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            Chart
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-8 text-sm text-white/50 mb-12"
        >
          <span>Smart Contract Secured</span>
          <span>•</span>
          <span>Verified Vendors</span>
          <span>•</span>
          <span>Community Governed</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <AgentTerminal />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-950 to-transparent pointer-events-none" />
    </section>
  )
}
