import React from 'react'
import { MessageCircle, ArrowUpRight } from 'lucide-react'

export const StickyBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0c1017]/95 backdrop-blur-lg border-t border-white/10 sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="#cotizador"
          className="py-3 px-3 rounded-xl bg-slate-800 text-slate-100 font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border border-slate-700"
        >
          <ArrowUpRight className="w-4 h-4 text-[#ffb800]" />
          <span>Cotizador</span>
        </a>

        <a
          href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20quisiera%20consultar%20por%20una%20reparación%20de%20mi%20auto."
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-3 rounded-xl bg-[#ffb800] text-black font-display font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
