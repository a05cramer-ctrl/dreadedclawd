'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '14,200+', label: 'Txns Executed' },
  { value: '$4.2M', label: 'Volume Processed' },
  { value: '3,891', label: 'Active Holders' },
  { value: '98.7%', label: 'Agent Uptime' },
]

export function Community() {
  return (
    <section id="community" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-gold-600 uppercase tracking-widest mb-4">The Network</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            The agent is <span className="text-gold-500">already working.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real numbers. Real execution. Token holders getting real results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map(stat => (
            <div key={stat.label} className="glass rounded-xl p-8 text-center hover:border-gold-600/30 transition-colors">
              <p className="font-display font-bold text-3xl lg:text-4xl text-gold-500 mb-2">{stat.value}</p>
              <p className="text-white/50 text-sm font-mono">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#" className="px-7 py-3.5 bg-gold-600 text-black font-semibold rounded-lg hover:bg-gold-500 transition-colors">
            Join the Network
          </a>
          <a href="#" className="px-7 py-3.5 text-white/70 border border-white/20 rounded-lg hover:bg-white/5 transition-colors font-mono text-sm">
            View on-chain logs →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
