import React from 'react'
import { MessageCircle } from 'lucide-react'

export const StickyBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#080a0e]/95 backdrop-blur-md border-t border-white/10 sm:hidden">
      <a
        href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20quisiera%20enviarles%20una%20foto%20para%20un%20presupuesto."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3.5 px-4 rounded-xl bg-[#ffb800] text-black font-display font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl active:scale-95"
      >
        <MessageCircle className="w-5 h-5 fill-black" />
        <span>Enviar Foto por WhatsApp</span>
      </a>
    </div>
  )
}
