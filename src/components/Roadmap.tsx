'use client'

import { motion } from 'framer-motion'

const phases = [
  {
    phase: 1,
    title: 'Agent Genesis',
    status: 'LIVE',
    statusColor: 'text-green-400 border-green-400/30 bg-green-400/10',
    items: [
      'Smart contract architecture & audit',
      '$DCLAW token deployment',
      'Agent v1 — market scanning & signals',
      'Community governance bootstrap',
    ],
  },
  {
    phase: 2,
    title: 'Autonomous Trading',
    status: 'IN PROGRESS',
    statusColor: 'text-gold-500 border-gold-500/30 bg-gold-500/10',
    items: [
      'Agent v2 — autonomous swap execution',
      'Staking & tiered access launch',
      'Risk management framework',
      'Operator dashboard release',
    ],
  },
  {
    phase: 3,
    title: 'Multi-Agent Network',
    status: 'UPCOMING',
    statusColor: 'text-white/40 border-white/20 bg-white/5',
    items: [
      'Sub-agent deployment for Architects',
      'Cross-chain expansion (Solana, Base)',
      'Agent-to-agent coordination layer',
      'Real-time performance analytics',
    ],
  },
  {
    phase: 4,
    title: 'Protocol Sovereignty',
    status: 'FUTURE',
    statusColor: 'text-white/30 border-white/10 bg-white/5',
    items: [
      'Fully decentralized agent governance',
      'Institutional API integrations',
      'Revenue sharing at scale',
      'DCLAW as cross-protocol agent standard',
    ],
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-gold-600 uppercase tracking-widest mb-4">Timeline</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">Roadmap</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Phased deployment of the most capable autonomous trading agent in Web3.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold-600/60 via-gold-600/20 to-transparent" />

          <div className="space-y-10">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-charcoal-900 border-2 border-gold-600 flex items-center justify-center">
                  <span className="font-display font-bold text-gold-500 text-sm">{phase.phase}</span>
                </div>

                <div className="flex-1 glass rounded-xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="font-display font-semibold text-xl">Phase {phase.phase}: {phase.title}</h3>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded border ${phase.statusColor}`}>
                      {phase.status}
                    </span>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {phase.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="text-gold-600 mt-0.5 flex-shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
