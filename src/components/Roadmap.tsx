'use client'

import { motion } from 'framer-motion'

const phases = [
  {
    phase: 1,
    title: 'Foundation & Token Launch',
    items: [
      'Smart contract development & audit',
      'Token deployment & liquidity provisioning',
      'Core team onboarding',
      'Community channels launch',
    ],
  },
  {
    phase: 2,
    title: 'Marketplace Beta',
    items: [
      'Alpha marketplace release',
      'Initial vendor onboarding',
      'Escrow smart contract integration',
      'User feedback & iteration',
    ],
  },
  {
    phase: 3,
    title: 'Vendor Verification Rollout',
    items: [
      'KYC/verification framework',
      'Trust score system',
      'Dispute resolution protocol',
      'Premium vendor tiers',
    ],
  },
  {
    phase: 4,
    title: 'Global Expansion & Partnerships',
    items: [
      'Multi-chain deployment',
      'Strategic partnerships',
      'Fiat on/off ramps',
      'Enterprise integrations',
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
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Roadmap
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A phased approach to building a sustainable, scalable decentralized marketplace.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold-600/50 via-gold-600/30 to-transparent" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-8 items-start"
              >
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-charcoal-900 border-2 border-gold-600 flex items-center justify-center">
                  <span className="font-display font-bold text-gold-500">{phase.phase}</span>
                </div>

                <div className="flex-1 glass rounded-xl p-6 sm:p-8">
                  <h3 className="font-display font-semibold text-xl text-gold-500 mb-4">
                    Phase {phase.phase}: {phase.title}
                  </h3>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white/80">
                        <span className="text-gold-500">✓</span>
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
