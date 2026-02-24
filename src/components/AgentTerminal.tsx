'use client'

import { useEffect, useState } from 'react'

const LOG_LINES = [
  { delay: 0,    text: '> Initializing DCLAW agent v2.4.1...', color: 'text-white/60' },
  { delay: 800,  text: '> Connecting to on-chain data feeds...', color: 'text-white/60' },
  { delay: 1600, text: '> Market scan complete. 847 pairs analyzed.', color: 'text-white/60' },
  { delay: 2400, text: '> Signal detected: SOL/USDC momentum spike', color: 'text-gold-500' },
  { delay: 3200, text: '> Executing swap — 2.4 ETH → SOL', color: 'text-green-400' },
  { delay: 4000, text: '> Tx confirmed: 0x7a3f...c2d9 ✓', color: 'text-green-400' },
  { delay: 4800, text: '> Rebalancing portfolio allocation...', color: 'text-white/60' },
  { delay: 5600, text: '> Risk assessment: LOW — holding position', color: 'text-white/60' },
  { delay: 6400, text: '> Next scan in 60s. Agent standing by.', color: 'text-gold-500/70' },
]

export function AgentTerminal() {
  const [visible, setVisible] = useState<number[]>([])

  useEffect(() => {
    LOG_LINES.forEach((line, i) => {
      const timer = setTimeout(() => {
        setVisible(prev => [...prev, i])
      }, line.delay)
      return () => clearTimeout(timer)
    })
  }, [])

  return (
    <div className="w-full max-w-md glass rounded-xl overflow-hidden font-mono text-xs">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="ml-3 text-white/40 text-xs">dclaw-agent — live</span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-500">running</span>
        </span>
      </div>

      {/* Log body */}
      <div className="p-4 space-y-1.5 min-h-[220px]">
        {LOG_LINES.map((line, i) => (
          <div
            key={i}
            className={`transition-all duration-300 ${visible.includes(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'} ${line.color}`}
          >
            {line.text}
          </div>
        ))}
        {visible.length === LOG_LINES.length && (
          <span className="inline-block w-2 h-3.5 bg-gold-500 animate-pulse ml-0.5 align-middle" />
        )}
      </div>
    </div>
  )
}
