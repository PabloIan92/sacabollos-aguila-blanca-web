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
          ? 'bg-[#0c1017]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3'
          : 'bg-gradient-to-b from-[#0c1017]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-1 border-2 border-[#1c4f8c] shadow-md group-hover:border-[#ffb800] transition-colors">
              <img
                src="/assets/logo-aguila-blanca.jpg"
                alt="Águila Blanca Sacabollos"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-[#ffb800] transition-colors">
                  Águila Blanca
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">
                Taller Sacabollos PDR • Especialistas en Granizo
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#beneficios" className="hover:text-white transition-colors">
              ¿Por qué PDR?
            </a>
            <a href="#comparativa" className="hover:text-white transition-colors">
              Antes y Después
            </a>
            <a href="#cotizador" className="hover:text-[#ffb800] transition-colors flex items-center gap-1">
              Cotizador Rápido
            </a>
            <a href="#aseguradoras" className="hover:text-white transition-colors">
              Seguros y Siniestros
            </a>
            <a href="#proceso" className="hover:text-white transition-colors">
              Cómo Trabajamos
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Preguntas
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://sacabollos-aguila-blanca-hnxlp5f1s-aguila-blanca.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg flex items-center gap-1.5 transition-all shadow-sm"
              title="Acceso al sistema de gestión de casos y turnos para clientes y personal"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#ffb800]" />
              <span>Acceso Taller</span>
            </a>

            <a
              href="#cotizador"
              className="px-4 py-2.5 text-xs sm:text-sm font-bold text-black bg-[#ffb800] hover:bg-[#ffc933] active:scale-95 rounded-lg flex items-center gap-2 shadow-lg shadow-[#ffb800]/20 transition-all font-display tracking-wide uppercase"
            >
              <MessageCircle className="w-4 h-4 text-black fill-black" />
              <span>Pedir Presupuesto</span>
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
              className="p-2 text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700 rounded-lg"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-4 pb-3 border-t border-white/10 bg-[#0c1017]/95 rounded-2xl p-4 shadow-2xl space-y-3">
            <div className="grid grid-cols-1 gap-2 text-base font-medium">
              <a
                href="#beneficios"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200"
              >
                ¿Por qué PDR vs Tradicional?
              </a>
              <a
                href="#comparativa"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200"
              >
                Antes y Después
              </a>
              <a
                href="#cotizador"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-[#ffb800]/15 text-[#ffb800] font-semibold"
              >
                Calculá tu Cotización
              </a>
              <a
                href="#aseguradoras"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200"
              >
                Compañías de Seguros
              </a>
              <a
                href="#proceso"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200"
              >
                Proceso de Reparación
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200"
              >
                Preguntas Frecuentes
              </a>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="https://sacabollos-aguila-blanca-hnxlp5f1s-aguila-blanca.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-slate-300 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center gap-2"
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
