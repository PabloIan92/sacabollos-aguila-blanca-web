import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { InsuranceTrustBar } from './components/InsuranceTrustBar'
import { WhatIsPdr } from './components/WhatIsPdr'
import { Services } from './components/Services'
import { BeforeAfterGallery } from './components/BeforeAfterGallery'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { StickyBottomBar } from './components/StickyBottomBar'
import { LegalModal, LegalTab } from './components/LegalModal'
import { MessageCircle } from 'lucide-react'

export const App: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false)
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>('terminos')

  const handleOpenLegal = (tab: LegalTab) => {
    setActiveLegalTab(tab)
    setLegalModalOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#c0272d] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <InsuranceTrustBar />
        <WhatIsPdr />
        <Services />
        <BeforeAfterGallery />
        <ContactSection />
      </main>

      <Footer onOpenLegal={handleOpenLegal} />
      <StickyBottomBar />

      <LegalModal
        isOpen={legalModalOpen}
        initialTab={activeLegalTab}
        onClose={() => setLegalModalOpen(false)}
      />

      {/* Floating WhatsApp Bubble for Desktop */}
      <a
        href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20quisiera%20enviarles%20una%20foto%20para%20un%20presupuesto."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-6 right-6 z-50 p-3.5 rounded-2xl bg-[#c0272d] hover:bg-[#a51d23] text-white shadow-[4px_4px_0_rgba(18,58,107,0.35)] items-center gap-3 font-display font-black text-xs uppercase tracking-wider group transition-all hover:scale-105 active:scale-95 border-2 border-white/20"
        title="Enviar foto por WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="text-left">
          <span className="block leading-none text-sm">¿Tenés un bollo?</span>
          <span className="text-[11px] text-sky-100 font-sans font-semibold">Envianos tu foto</span>
        </div>
      </a>
    </div>
  )
}

export default App
