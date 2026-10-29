import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BeforeAfterSlider } from './components/BeforeAfterSlider'
import { PdrComparison } from './components/PdrComparison'
import { DamageCalculator } from './components/DamageCalculator'
import { InsurancePartners } from './components/InsurancePartners'
import { ProcessSteps } from './components/ProcessSteps'
import { B2BSection } from './components/B2BSection'
import { FaqSection } from './components/FaqSection'
import { Footer } from './components/Footer'
import { StickyBottomBar } from './components/StickyBottomBar'
import { MessageCircle } from 'lucide-react'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#e2e8f0] flex flex-col selection:bg-[#ffb800] selection:text-black">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <BeforeAfterSlider />
        <PdrComparison />
        <DamageCalculator />
        <InsurancePartners />
        <ProcessSteps />
        <B2BSection />
        <FaqSection />
      </main>

      <Footer />
      <StickyBottomBar />

      {/* Floating WhatsApp Bubble for Desktop */}
      <a
        href="#cotizador"
        className="hidden sm:flex fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#ffb800] hover:bg-[#ffc933] text-black shadow-2xl shadow-[#ffb800]/40 items-center gap-3 font-display font-bold text-xs uppercase tracking-wider group transition-all hover:scale-105 active:scale-95 border-2 border-white/20"
        title="Cotizá tu reparación por WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-black" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>
        <div className="text-left">
          <span className="block leading-none">¿Tenés un bollo?</span>
          <span className="text-[10px] text-black/70 font-sans font-semibold">Cotizá sin cargo</span>
        </div>
      </a>
    </div>
  )
}

export default App
