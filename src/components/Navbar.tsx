import React, { useState, useEffect } from 'react'
import { MessageCircle, Menu, X, ExternalLink, Cpu } from 'lucide-react'

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
          ? 'bg-[#07090c]/95 backdrop-blur-md border-b border-slate-800 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#07090c]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-white p-1 border-2 border-slate-700 shadow-md group-hover:border-[#ffb800] transition-colors">
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
                <span className="px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/50 text-[10px] font-mono font-bold text-emerald-400">
                  OEM PDR
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-wide uppercase">
                Centro Técnico Especializado en Granizo
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
            <a href="#planimetria" className="hover:text-[#ffb800] transition-colors flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-sky-400" />
              <span>Planimetría CAD</span>
            </a>
            <a href="#comparativa" className="hover:text-white transition-colors">
              Casos Reales
            </a>
            <a href="#beneficios" className="hover:text-white transition-colors">
              PDR vs Chapa
            </a>
            <a href="#homologaciones" className="hover:text-white transition-colors">
              Homologaciones OEM
            </a>
            <a href="#cotizador" className="hover:text-[#ffb800] transition-colors">
              Cotizador
            </a>
            <a href="#aseguradoras" className="hover:text-white transition-colors">
              Seguros
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://sacabollos-aguila-blanca-hnxlp5f1s-aguila-blanca.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-1.5 transition-all shadow-sm font-mono"
              title="Portal Interno del Taller"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#ffb800]" />
              <span>Portal Clientes/Taller</span>
            </a>

            <a
              href="#cotizador"
              className="px-4 py-2.5 text-xs sm:text-sm font-extrabold text-black bg-[#ffb800] hover:bg-[#ffc933] active:scale-95 rounded-lg flex items-center gap-2 shadow-lg shadow-[#ffb800]/20 transition-all font-display tracking-wider uppercase"
            >
              <MessageCircle className="w-4 h-4 text-black fill-black" />
              <span>Cotizar Peritaje</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#cotizador"
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
          <div className="sm:hidden mt-3 pt-4 pb-3 border-t border-slate-800 bg-[#07090c]/98 rounded-2xl p-4 shadow-2xl space-y-3 font-mono text-xs">
            <div className="grid grid-cols-1 gap-2">
              <a
                href="#planimetria"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-sky-950/40 border border-sky-800/40 text-sky-300"
              >
                ✦ Planimetría CAD e Inspección
              </a>
              <a
                href="#comparativa"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300"
              >
                Casos Reales Antes y Después
              </a>
              <a
                href="#beneficios"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300"
              >
                PDR vs Chapa Tradicional
              </a>
              <a
                href="#homologaciones"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300"
              >
                Homologaciones & Cumplimiento B2B
              </a>
              <a
                href="#cotizador"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-[#ffb800]/15 text-[#ffb800] font-bold"
              >
                Cotizador Rápido WhatsApp
              </a>
              <a
                href="#aseguradoras"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300"
              >
                Compañías de Seguros
              </a>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <a
                href="https://sacabollos-aguila-blanca-hnxlp5f1s-aguila-blanca.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-slate-300 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center gap-2"
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
