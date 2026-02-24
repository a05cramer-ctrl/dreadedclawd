'use client'

import { useState } from 'react'
import Image from 'next/image'

const CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000'

export function Footer() {
  const [copied, setCopied] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="Dreaded Clawd" width={36} height={36} className="rounded-lg" />
              <span className="font-display font-bold text-lg">Dreaded Clawd</span>
              <span className="text-xs font-mono text-gold-600 border border-gold-600/30 px-1.5 py-0.5 rounded">$DCLAW</span>
            </div>
            <p className="text-white/50 text-sm max-w-xs mb-5 leading-relaxed">
              An autonomous on-chain AI agent. Market intelligence. Autonomous execution. Fully verifiable.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-white/50 hover:text-gold-500 text-sm font-mono transition-colors">Twitter</a>
              <a href="#" className="text-white/50 hover:text-gold-500 text-sm font-mono transition-colors">Telegram</a>
              <a href="#" className="text-white/50 hover:text-gold-500 text-sm font-mono transition-colors">Discord</a>
              <a href="#" className="text-white/50 hover:text-gold-500 text-sm font-mono transition-colors">GitHub</a>
            </div>
          </div>

          {/* Contract */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4">Contract</h4>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
              <code className="text-xs text-white/60 truncate flex-1 font-mono">{CONTRACT_ADDRESS}</code>
              <button
                onClick={copyAddress}
                className="flex-shrink-0 p-1.5 rounded hover:bg-white/10 transition-colors"
                title="Copy address"
              >
                {copied ? (
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h2m8 0h2a2 2 0 012 2v2m2 4v6a2 2 0 01-2 2h-2m-6-6h.01M17 16h.01" />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-white/40 text-xs mt-2 font-mono">Ethereum Mainnet</p>
          </div>

          {/* Security */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4">Security</h4>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 mb-3">
              <p className="text-sm text-white/60">Smart Contract Audit</p>
              <p className="text-xs text-white/40 mt-1 font-mono">Pending — Q2 2025</p>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm text-white/60">Multi-sig Treasury</p>
              <p className="text-xs text-green-500 mt-1 font-mono">Active ✓</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-white/40 max-w-3xl mb-6">
            <span className="text-white/60 font-semibold">Disclaimer:</span> $DCLAW is a community-driven cryptocurrency token. Nothing on this website constitutes financial advice. Crypto investments are highly speculative and carry significant risk of loss. Always conduct your own research. Past performance is not indicative of future results.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-white/30 text-xs font-mono">© 2025 Dreaded Clawd. All rights reserved.</p>
            <div className="flex gap-6 text-xs font-mono text-white/40">
              <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
              <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white/70 transition-colors">Docs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
