'use client'

import { useState } from 'react'
import Image from 'next/image'

const CONTRACT_ADDRESS = 'CytE1ijdRoKY1NLvbrA2hTeomUUuiyo5wdpFS1Wypump'

export function Footer() {
  const [copied, setCopied] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="border-t border-white/10 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Dreaded Clawd" width={36} height={36} className="rounded-lg" />
              <span className="font-display font-bold text-xl text-gold-500">Dreaded Clawd</span>
              <span className="text-gold-600 font-semibold text-sm">$DCLAW</span>
            </div>
            <p className="text-white/60 text-sm max-w-md mb-6">
              A decentralized trading network connecting verified vendors and buyers. Power in every trade.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://x.com/DreadedClawd" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold-500 text-sm transition-colors">Twitter</a>
              <a href="#" className="text-white/60 hover:text-gold-500 text-sm transition-colors">Telegram</a>
              <a href="#" className="text-white/60 hover:text-gold-500 text-sm transition-colors">Discord</a>
            </div>
          </div>

          {/* Contract & Audit */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Contract
            </h4>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
              <code className="text-xs text-white/70 truncate flex-1 font-mono">{CONTRACT_ADDRESS}</code>
              <button
                onClick={copyAddress}
                className="flex-shrink-0 p-2 rounded hover:bg-white/10 transition-colors"
                title="Copy address"
              >
                {copied ? (
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h2m8 0h2a2 2 0 012 2v2m2 4v6a2 2 0 01-2 2h-2m-6-6h.01M17 16h.01" />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-white/50 text-xs mt-2">Solana</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Security
            </h4>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm text-white/70">Security Audit</p>
              <p className="text-xs text-white/50 mt-1">Pending — Q2 2025</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-white/50 max-w-3xl">
            <strong className="text-white/70">Disclaimer:</strong> $DCLAW is a community-driven token. This website does not constitute financial advice.
            Cryptocurrency investments carry risk. Always do your own research. The information provided is for informational purposes only.
            Past performance does not guarantee future results.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2025 Dreaded Clawd. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white/80 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/80 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
