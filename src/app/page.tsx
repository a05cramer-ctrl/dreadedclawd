import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { TokenUtility } from '@/components/TokenUtility'
import { Tokenomics } from '@/components/Tokenomics'
import { Roadmap } from '@/components/Roadmap'
import { MarketplacePreview } from '@/components/MarketplacePreview'
import { Community } from '@/components/Community'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <TokenUtility />
      <Tokenomics />
      <Roadmap />
      <MarketplacePreview />
      <Community />
      <Footer />
    </main>
  )
}
