import React from 'react'
import { ExternalLink } from 'lucide-react'

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

        <div>
          <a
            href="https://sacabollos-aguila-blanca-hnxlp5f1s-aguila-blanca.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 text-white hover:bg-white/20 border border-white/20 text-[11px] font-mono font-bold uppercase transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#ffd166]" />
            <span>Portal del Taller</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
