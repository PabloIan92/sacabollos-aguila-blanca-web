import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhatIsPdr } from './components/WhatIsPdr'
import { Services } from './components/Services'
import { BeforeAfterGallery } from './components/BeforeAfterGallery'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { StickyBottomBar } from './components/StickyBottomBar'
import { MessageCircle } from 'lucide-react'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07090c] text-[#e2e8f0] flex flex-col selection:bg-[#ffb800] selection:text-black">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <WhatIsPdr />
        <Services />
        <BeforeAfterGallery />
        <ContactSection />
      </main>

      <Footer />
      <StickyBottomBar />

      {/* Floating WhatsApp Bubble for Desktop */}
      <a
        href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20quisiera%20enviarles%20una%20foto%20para%20un%20presupuesto."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#ffb800] hover:bg-[#ffc933] text-black shadow-2xl shadow-[#ffb800]/40 items-center gap-3 font-display font-black text-xs uppercase tracking-wider group transition-all hover:scale-105 active:scale-95 border-2 border-white/20"
        title="Enviar foto por WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-black" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>
        <div className="text-left">
          <span className="block leading-none text-sm">¿Tenés un bollo?</span>
          <span className="text-[11px] text-black/75 font-sans font-semibold">Envianos tu foto</span>
        </div>
      </a>
    </div>
  )
}

export default App
