'use client'

import { motion } from 'framer-motion'

const utilities = [
  {
    title: 'Transaction Fee Reductions',
    description: 'Hold $DCLAW to unlock tiered fee discounts. Higher stakes mean lower costs on every trade.',
    tier: 'Up to 50% off',
  },
  {
    title: 'Staking Rewards',
    description: 'Stake your tokens to earn passive yield. Rewards distributed from protocol revenue and ecosystem growth.',
    tier: 'APY rewards',
  },
  {
    title: 'Governance Voting',
    description: 'Vote on protocol parameters, new features, and treasury allocation. Your tokens, your decisions.',
    tier: '1 token = 1 vote',
  },
  {
    title: 'Vendor Verification Access',
    description: 'Apply for verified vendor status. $DCLAW holders get priority review and reduced verification fees.',
    tier: 'Priority access',
  },
  {
    title: 'Premium Marketplace Features',
    description: 'Unlock featured listings, analytics dashboards, and advanced escrow options. Stand out in the network.',
    tier: 'Exclusive tools',
  },
]

export function TokenUtility() {
  return (
    <section id="utility" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="text-gold-500">$DCLAW</span> Utility
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Your token unlocks real value across the ecosystem. From fee savings to governance power, $DCLAW is built for active participants.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {utilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-6 border-l-4 border-gold-600"
            >
              <span className="text-xs font-medium text-gold-500 uppercase tracking-wider">{item.tier}</span>
              <h3 className="font-display font-semibold text-xl mt-2 mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
