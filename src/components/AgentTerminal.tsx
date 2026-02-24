'use client'

import { useEffect, useState } from 'react'

const LOG_LINES = [
  { delay: 0,    text: '> Initializing DCLAW network v2.4.1...', color: 'text-white/50' },
  { delay: 900,  text: '> Scanning verified vendor registry...', color: 'text-white/50' },
  { delay: 1800, text: '> 342 active vendors online', color: 'text-white/50' },
  { delay: 2700, text: '> New order matched: 0x7a3f...9c2d', color: 'text-gold-500' },
  { delay: 3600, text: '> Escrow deployed — funds secured ✓', color: 'text-green-400' },
  { delay: 4500, text: '> Smart contract verified on-chain', color: 'text-green-400' },
  { delay: 5400, text: '> Monitoring 48,291 active transactions...', color: 'text-white/50' },
  { delay: 6300, text: '> Network status: SECURE', color: 'text-gold-500/80' },
]

export function AgentTerminal() {
  const [visible, setVisible] = useState<number[]>([])

  useEffect(() => {
    const timers = LOG_LINES.map((line, i) =>
      setTimeout(() => setVisible(prev => [...prev, i]), line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="w-full max-w-lg mx-auto glass rounded-xl overflow-hidden font-mono text-xs">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-white/40">dclaw-network — live feed</span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-500">active</span>
        </span>
      </div>
      <div className="p-4 space-y-1.5 min-h-[160px]">
        {LOG_LINES.map((line, i) => (
          <div
            key={i}
            className={`transition-all duration-300 ${visible.includes(i) ? 'opacity-100' : 'opacity-0'} ${line.color}`}
          >
            {line.text}
          </div>
        ))}
        {visible.length === LOG_LINES.length && (
          <span className="inline-block w-1.5 h-3.5 bg-gold-500 animate-pulse ml-0.5 align-middle" />
        )}
      </div>
    </div>
  )
}
