'use client'

import { motion } from 'framer-motion'

export function MarketplacePreview() {
  return (
    <section id="marketplace" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Secure <span className="text-gold-500">Marketplace</span> Flow
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Buyers and verified vendors connect through smart contract escrow. Funds are held securely until delivery is confirmed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl overflow-hidden border border-white/10"
        >
          {/* Mock UI Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold-600/30" />
              <span className="font-display font-semibold">Dreaded Clawd Marketplace</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                Verified
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-gold-600/20 text-gold-400 rounded-full border border-gold-600/30">
                Escrow Active
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-0">
            {/* Buyer side */}
            <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Buyer</p>
                  <p className="text-xs text-white/50">0x7a3f...9c2d</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Order Amount</span>
                  <span className="text-gold-500">1.25 ETH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Escrow Status</span>
                  <span className="text-green-400">Funds Locked</span>
                </div>
              </div>
            </div>

            {/* Escrow flow */}
            <div className="p-6 lg:p-8 bg-gold-600/5 border-b lg:border-b-0 lg:border-r border-gold-600/20">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-14 h-14 rounded-xl bg-gold-600/20 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="font-display font-semibold text-gold-500 mb-1">Smart Contract Escrow</p>
                <p className="text-xs text-white/60 text-center">Funds released to vendor upon delivery confirmation</p>
                <div className="flex gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-gold-500/60 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 rounded-full bg-gold-500/40 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>

            {/* Vendor side */}
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Verified Vendor</p>
                  <p className="text-xs text-green-400">✓ Trust Score: 98%</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Rating</span>
                  <span className="text-gold-500">★★★★★ 4.9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Transactions</span>
                  <span className="text-white/80">1,247 completed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 p-6 border-t border-white/10 bg-white/5">
            {['Audited Smart Contracts', 'Verified Vendor Network', 'Dispute Resolution'].map(badge => (
              <div key={badge} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
