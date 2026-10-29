import React, { useState, useEffect } from 'react'
import { MessageCircle, Menu, X, ExternalLink } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080a0e]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#080a0e]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white p-1 border-2 border-slate-700 shadow-md group-hover:border-[#ffb800] transition-colors">
              <img
                src="/assets/logo-aguila-blanca.jpg"
                alt="Águila Blanca Sacabollos"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl sm:text-2xl font-black tracking-wider text-white uppercase group-hover:text-[#ffb800] transition-colors">
                  Águila Blanca
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wider uppercase">
                Taller Sacabollos Artesanal • PDR
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#que-es" className="hover:text-white transition-colors">
              ¿Qué es Sacabollos?
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
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-1.5 transition-all shadow-sm"
              title="Portal Interno de Casos"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#ffb800]" />
              <span>Acceso Taller</span>
            </a>

            <a
              href="https://wa.me/5491122334455?text=Hola%20%C3%81guila%20Blanca,%20quisiera%20enviarles%20una%20foto%20para%20cotizar%20un%20bollo%20de%20mi%20auto."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs sm:text-sm font-extrabold text-black bg-[#ffb800] hover:bg-[#ffc933] active:scale-95 rounded-xl flex items-center gap-2 shadow-lg shadow-[#ffb800]/25 transition-all font-display tracking-wider uppercase"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/5491122334455?text=Hola%20%C3%81guila%20Blanca,%20quisiera%20cotizar%20un%20arreglo."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black bg-[#ffb800] rounded-lg shadow-md"
              aria-label="Pedir Presupuesto"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 rounded-lg"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-3 border-t border-slate-800 bg-[#080a0e]/98 rounded-2xl p-4 shadow-2xl space-y-3 text-sm">
            <div className="grid grid-cols-1 gap-2 font-medium">
              <a
                href="#que-es"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200"
              >
                ¿Qué es Sacabollos (PDR)?
              </a>
              <a
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200"
              >
                Qué Hacemos
              </a>
              <a
                href="#galeria"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200"
              >
                Fotos de Antes y Después
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-[#ffb800]/15 text-[#ffb800] font-bold"
              >
                Contacto y Dónde Estamos
              </a>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <a
                href="https://sacabollos-aguila-blanca-hnxlp5f1s-aguila-blanca.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#ffb800]" />
                <span>Portal Interno del Taller</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
