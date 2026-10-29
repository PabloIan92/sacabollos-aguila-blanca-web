import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e2a4d] text-sky-200 text-xs border-t border-white/10 py-10 pb-24 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-0.5 border border-white/20">
            <img
              src="/assets/logo-aguila-blanca.jpg"
              alt="Águila Blanca"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Águila Blanca
            </span>
            <p className="text-[10px] text-sky-300 font-mono uppercase">
              Taller Sacabollos Artesanal • PDR
            </p>
          </div>
        </div>

        <p className="text-sky-300 text-xs font-sans">
          © {new Date().getFullYear()} Águila Blanca Sacabollos. Conservación 100% de la pintura original de fábrica.
        </p>

        <div className="text-[11px] font-mono text-sky-300">
          <span>Atención a Particulares, Aseguradoras y Flotas</span>
        </div>
      </div>
    </footer>
  )
}
