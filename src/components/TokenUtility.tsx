'use client'

import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Observer',
    requirement: '10K $DCLAW',
    features: ['Read-only agent dashboard', 'Live trade feed access', 'Community governance voting'],
    highlight: false,
  },
  {
    name: 'Operator',
    requirement: '100K $DCLAW',
    features: ['Full agent control panel', 'Custom strategy parameters', 'Reduced execution fees', 'Priority signal alerts', 'Governance multiplier 3x'],
    highlight: true,
  },
  {
    name: 'Architect',
    requirement: '500K $DCLAW',
    features: ['Deploy custom sub-agents', 'Protocol-level governance', 'Revenue sharing from fees', 'Early strategy access', 'Dedicated on-chain identity'],
    highlight: false,
  },
]

const utilities = [
  { label: 'Fee Reduction', desc: 'Up to 70% off execution fees based on staked amount.' },
  { label: 'Staking Yield', desc: 'Earn passive APY from protocol fee revenue.' },
  { label: 'Agent Access', desc: 'Unlock agent tiers and deploy custom strategies.' },
  { label: 'Governance', desc: 'Vote on agent parameters, risk limits, and expansion.' },
]

export function TokenUtility() {
  return (
    <section id="utility" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-gold-600 uppercase tracking-widest mb-4">Token Design</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Hold $DCLAW.<br /><span className="text-gold-500">Command the agent.</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            The more you hold, the deeper your access. Three tiers. Real utility.
          </p>
        </motion.div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl p-6 lg:p-8 relative ${
                tier.highlight
                  ? 'bg-gold-600/10 border-2 border-gold-600/60'
                  : 'glass border border-white/10'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-gold-600 text-black rounded-full">
                  Most Popular
                </span>
              )}
              <p className="text-xs font-mono text-gold-600/80 uppercase tracking-widest mb-2">{tier.requirement}</p>
              <h3 className="font-display font-bold text-2xl mb-5">{tier.name}</h3>
              <ul className="space-y-3">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="text-gold-500 mt-0.5 flex-shrink-0">→</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 block text-center py-3 rounded-lg text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? 'bg-gold-600 text-black hover:bg-gold-500'
                    : 'border border-white/20 text-white/70 hover:bg-white/5'
                }`}
              >
                Get Access
              </a>
            </motion.div>
          ))}
        </div>

        {/* Utility bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {utilities.map(u => (
            <div key={u.label} className="glass rounded-xl p-5">
              <p className="text-gold-500 font-display font-semibold mb-1">{u.label}</p>
              <p className="text-white/60 text-sm">{u.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
