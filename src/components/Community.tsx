'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '12,847', label: 'Active Users' },
  { value: '342', label: 'Verified Vendors' },
  { value: '$2.4M', label: 'Total Volume' },
  { value: '48,291', label: 'Transactions' },
]

export function Community() {
  return (
    <section id="community" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            The <span className="text-gold-500">Network</span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Join a growing community of traders, vendors, and builders. Real volume. Real participants.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-8 text-center hover:border-gold-600/30 transition-colors"
            >
              <p className="font-display font-bold text-3xl lg:text-4xl text-gold-500 mb-2">{stat.value}</p>
              <p className="text-white/60 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-600/20 text-gold-500 border border-gold-600/50 rounded-lg font-medium hover:bg-gold-600/30 transition-colors"
          >
            Join the Network
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
