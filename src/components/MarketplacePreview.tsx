'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Agent Reads Market',
    desc: 'DCLAW continuously ingests on-chain price feeds, liquidity depth, and wallet flow signals across supported chains.',
  },
  {
    step: '02',
    title: 'Strategy Formulated',
    desc: 'The agent runs its models, scores opportunities against risk parameters set by governance, and queues an action.',
  },
  {
    step: '03',
    title: 'Transaction Submitted',
    desc: 'Execution happens via smart contract call — atomic, verifiable, and logged on-chain for full transparency.',
  },
  {
    step: '04',
    title: 'Results Distributed',
    desc: 'Profits and performance metrics flow back to stakers. Every action is auditable by any token holder.',
  },
]

export function MarketplacePreview() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-gold-600 uppercase tracking-widest mb-4">How It Works</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            The Agent <span className="text-gold-500">Loop</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Four steps. Continuous cycle. Fully on-chain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative glass rounded-xl p-6"
            >
              <p className="font-display font-bold text-4xl text-gold-600/20 mb-4">{s.step}</p>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-gold-600/40 text-xl">→</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Live log panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-sm text-white/70">dclaw-agent / recent-executions</span>
            </div>
            <span className="text-xs font-mono text-white/40">live</span>
          </div>
          <div className="p-6 font-mono text-xs space-y-3">
            {[
              { time: '14:23:07', action: 'SWAP', detail: '1.8 ETH → USDC on Uniswap V3', status: 'CONFIRMED', color: 'text-green-400' },
              { time: '14:21:44', action: 'REBALANCE', detail: 'Reduced SOL exposure 18% → 12%', status: 'CONFIRMED', color: 'text-green-400' },
              { time: '14:18:12', action: 'SCAN', detail: '1,204 pairs evaluated, 2 signals flagged', status: 'COMPLETE', color: 'text-gold-500' },
              { time: '14:15:00', action: 'STAKE', detail: '44,000 $DCLAW staked by 3 new operators', status: 'CONFIRMED', color: 'text-green-400' },
              { time: '14:12:37', action: 'GOVERNANCE', detail: 'Proposal #14 passed — BTC allocation limit raised', status: 'EXECUTED', color: 'text-blue-400' },
            ].map((row) => (
              <div key={row.time} className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/70">
                <span className="text-white/30 w-16 flex-shrink-0">{row.time}</span>
                <span className="text-gold-500 w-20 flex-shrink-0">{row.action}</span>
                <span className="flex-1">{row.detail}</span>
                <span className={`ml-auto ${row.color}`}>{row.status}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
