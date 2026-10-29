import React, { useState } from 'react'
import { MessageCircle, Menu, X, ExternalLink } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#123a6b] text-white border-b border-white/15 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-white p-1 border-2 border-white/30 shadow-sm group-hover:border-[#ffb800] transition-colors">
              <img
                src="/assets/logo-aguila-blanca.jpg"
                alt="Águila Blanca Sacabollos"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-[#ffd166] transition-colors">
                  Águila Blanca
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-sky-200 font-mono tracking-wider uppercase">
                Taller Sacabollos Artesanal • PDR
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider font-mono text-sky-100">
            <a href="#que-es" className="hover:text-white transition-colors">
              ¿Qué es PDR?
            </a>
            <a href="#servicios" className="hover:text-white transition-colors">
              Qué Hacemos
            </a>
            <a href="#galeria" className="hover:text-white transition-colors">
              Antes y Después
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto y Turnos
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://sacabollos-aguila-blanca-hnxlp5f1s-aguila-blanca.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-mono font-bold uppercase text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded transition-all shadow-sm flex items-center gap-1.5"
              title="Portal Interno de Casos"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#ffd166]" />
              <span>Acceso Taller</span>
            </a>

            <a
              href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20quisiera%20enviarles%20una%20foto%20para%20cotizar%20un%20bollo%20de%20mi%20auto."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-white bg-[#c0272d] hover:bg-[#a51d23] active:scale-95 rounded shadow-[3px_3px_0_rgba(0,0,0,0.2)] transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Consultar WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20quisiera%20cotizar%20un%20arreglo."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#c0272d] rounded shadow"
              aria-label="Pedir Presupuesto"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/15 bg-[#123a6b]/98 px-4 py-4 space-y-3 font-mono text-xs">
            <div className="grid grid-cols-1 gap-2">
              <a
                href="#que-es"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-white/10 text-white"
              >
                ¿Qué es Sacabollos (PDR)?
              </a>
              <a
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-white/10 text-white"
              >
                Qué Hacemos
              </a>
              <a
                href="#galeria"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded hover:bg-white/10 text-white"
              >
                Fotos de Antes y Después
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded bg-white/15 text-[#ffd166] font-bold"
              >
                Contacto y Dónde Estamos
              </a>
            </div>

            <div className="pt-2 border-t border-white/15">
              <a
                href="https://sacabollos-aguila-blanca-hnxlp5f1s-aguila-blanca.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-xs font-mono font-bold uppercase text-white bg-white/10 border border-white/25 rounded flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#ffd166]" />
                <span>Portal Interno del Taller</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
