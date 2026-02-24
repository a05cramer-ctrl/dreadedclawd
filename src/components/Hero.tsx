'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AgentTerminal } from './AgentTerminal'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Gold orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gold-600/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-white/60 font-mono">AGENT ONLINE — $DCLAW</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-6 lg:hidden flex justify-center"
            >
              <Image
                src="/logo.png"
                alt="Dreaded Clawd"
                width={140}
                height={140}
                className="rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.25)]"
                priority
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-4"
            >
              <span className="text-white">Dreaded</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600">
                Clawd
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-display font-semibold text-gold-500 mb-4"
            >
              An Autonomous On-Chain Agent.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white/60 text-base max-w-lg mb-10 leading-relaxed"
            >
              DCLAW is a self-executing AI agent deployed on-chain. It monitors markets, executes strategies,
              and manages positions — 24/7, without human intervention. You hold the token. The agent does the work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 mb-10 max-w-sm"
            >
              <a
                href="#"
                className="flex items-center justify-center px-5 py-3.5 bg-gold-600 text-black font-semibold rounded-lg hover:bg-gold-500 transition-colors text-sm"
              >
                Deploy Agent
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-5 py-3.5 font-semibold text-gold-500 border border-gold-600/40 rounded-lg hover:bg-gold-600/10 transition-colors text-sm"
              >
                Buy $DCLAW
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-5 py-3.5 font-semibold text-white/70 border border-white/15 rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-5 py-3.5 font-semibold text-white/70 border border-white/15 rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                Chart
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-6 text-sm"
            >
              <div>
                <p className="text-gold-500 font-bold text-lg">$4.2M</p>
                <p className="text-white/50">Volume Processed</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-gold-500 font-bold text-lg">98.7%</p>
                <p className="text-white/50">Uptime</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-gold-500 font-bold text-lg">14,200+</p>
                <p className="text-white/50">Txns Executed</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Agent terminal + image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center gap-6"
          >
            <Image
              src="/logo.png"
              alt="Dreaded Clawd"
              width={180}
              height={180}
              className="rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.3)]"
              priority
            />
            <AgentTerminal />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-950 to-transparent pointer-events-none" />
    </section>
  )
}
