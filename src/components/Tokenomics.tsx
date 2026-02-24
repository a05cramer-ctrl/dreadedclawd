'use client'

import { motion } from 'framer-motion'

const allocations = [
  { label: 'Total Supply', value: '1,000,000,000', subtext: '$DCLAW' },
  { label: 'Liquidity Allocation', value: '30%', subtext: '300M tokens' },
  { label: 'Community Allocation', value: '25%', subtext: '250M tokens' },
  { label: 'Ecosystem Growth Fund', value: '20%', subtext: '200M tokens' },
  { label: 'Staking Rewards', value: '15%', subtext: '150M tokens' },
  { label: 'Team & Advisors', value: '10%', subtext: '100M tokens, 24mo vest' },
]

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Tokenomics
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Structured for long-term sustainability. Transparent allocation with clear vesting schedules.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {allocations.map((item) => (
            <div
              key={item.label}
              className="glass rounded-xl p-6 lg:p-8 text-center hover:border-gold-600/30 transition-colors"
            >
              <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">{item.label}</p>
              <p className="font-display font-bold text-2xl lg:text-3xl text-gold-500">{item.value}</p>
              <p className="text-white/50 text-sm mt-1">{item.subtext}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/50 text-sm mt-8"
        >
          All allocations subject to smart contract vesting. No team tokens unlock before 12 months.
        </motion.p>
      </div>
    </section>
  )
}
