import React from 'react'
import { ExternalLink } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050709] text-slate-500 text-xs border-t border-white/5 py-12 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
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
            <p className="text-[10px] text-slate-400 uppercase">
              Taller Sacabollos Artesanal • PDR
            </p>
          </div>
        </div>

        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} Águila Blanca Sacabollos. Conservación 100% de la pintura original de fábrica.
        </p>

        <div>
          <a
            href="https://sacabollos-aguila-blanca-hnxlp5f1s-aguila-blanca.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 text-[11px] font-medium transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#ffb800]" />
            <span>Portal del Taller</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
