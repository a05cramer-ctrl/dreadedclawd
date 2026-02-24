'use client'

import { motion } from 'framer-motion'

const capabilities = [
  {
    title: 'Market Intelligence',
    description: 'Continuously scans on-chain data, order books, and liquidity pools across multiple DEXs to surface high-conviction signals.',
    tag: 'PERCEPTION',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Autonomous Execution',
    description: 'Executes swaps, positions, and rebalancing without manual input. Smart contract logic ensures every action is verifiable on-chain.',
    tag: 'ACTION',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Risk Management',
    description: 'Dynamic stop-loss, position sizing, and portfolio rebalancing built into the agent logic. Protect capital as a first-order objective.',
    tag: 'PROTECTION',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Community Governance',
    description: '$DCLAW holders vote on strategy parameters, risk thresholds, and which markets the agent is permitted to operate in.',
    tag: 'GOVERNANCE',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-mono text-gold-600 uppercase tracking-widest mb-4">What is DCLAW</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              Not a token.<br />
              <span className="text-gold-500">An agent.</span>
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              Most tokens have a whitepaper. DCLAW has a brain.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Dreaded Clawd is a fully autonomous AI agent that lives on-chain. It reads market data, formulates strategies, and executes transactions in real time — all verifiable on the blockchain. The token isn't just equity in the ecosystem; it's the key that activates the agent.
            </p>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gold-600/5 border border-gold-600/20">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              <p className="text-sm text-white/70 font-mono">Agent status: <span className="text-green-400">ACTIVE</span> — last action 43s ago</p>
            </div>
          </motion.div>

          {/* Right — capabilities */}
          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-xl p-5 hover:border-gold-600/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-gold-500">{cap.icon}</div>
                  <span className="text-xs font-mono text-gold-600/80">{cap.tag}</span>
                </div>
                <h3 className="font-display font-semibold text-base mb-2">{cap.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
