import React from 'react'
import { Shield, Lock, Scale, FileText } from 'lucide-react'
import { LegalTab } from './LegalModal'

interface FooterProps {
  onOpenLegal: (tab: LegalTab) => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#0e2a4d] text-sky-200 text-xs border-t border-white/10 py-12 pb-28 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-white p-0.5 border border-white/20 shrink-0">
              <img
                src="/assets/logo-aguila-blanca.jpg"
                alt="Águila Blanca"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-display text-base font-bold uppercase tracking-wider text-white">
                Águila Blanca
              </span>
              <p className="text-[10px] text-sky-300 font-mono uppercase">
                Taller Sacabollos Artesanal • PDR Especializado
              </p>
            </div>
          </div>

          {/* Legal and Compliance Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-sky-200">
            <button
              onClick={() => onOpenLegal('terminos')}
              className="hover:text-white transition-colors flex items-center gap-1.5 underline-offset-4 hover:underline"
            >
              <FileText className="w-3.5 h-3.5 text-[#ffd166]" />
              <span>Términos y Garantía PDR</span>
            </button>

            <button
              onClick={() => onOpenLegal('privacidad')}
              className="hover:text-white transition-colors flex items-center gap-1.5 underline-offset-4 hover:underline"
            >
              <Lock className="w-3.5 h-3.5 text-emerald-300" />
              <span>Privacidad (Ley 25.326)</span>
            </button>

            <button
              onClick={() => onOpenLegal('consumidor')}
              className="hover:text-white transition-colors flex items-center gap-1.5 underline-offset-4 hover:underline"
            >
              <Scale className="w-3.5 h-3.5 text-sky-200" />
              <span>Defensa del Consumidor</span>
            </button>

            <button
              onClick={() => onOpenLegal('seguridad')}
              className="hover:text-white transition-colors flex items-center gap-1.5 underline-offset-4 hover:underline"
            >
              <Shield className="w-3.5 h-3.5 text-[#c0272d]" />
              <span>Seguridad SSL</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Cybersecurity notice */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-sky-300 font-sans text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Águila Blanca Sacabollos. Todos los derechos reservados. Reparación artesanal sin masilla ni repintado.
          </p>
          <div className="flex items-center gap-2 font-mono text-[10px] text-sky-300/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Navegación Cifrada TLS 1.3 • Cumplimiento Normativo República Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
