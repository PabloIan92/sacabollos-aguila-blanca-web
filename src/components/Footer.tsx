import React from 'react'
import { MapPin, MessageCircle, Clock, ShieldCheck, ExternalLink } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#06080a] text-slate-400 text-xs border-t border-white/10 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 border border-white/20">
                <img
                  src="/assets/logo-aguila-blanca.jpg"
                  alt="Águila Blanca Sacabollos"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  Águila Blanca
                </span>
                <p className="text-[11px] text-slate-400 font-medium uppercase">
                  Taller Sacabollos PDR
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Centro técnico especializado en la reparación artesanal de abolladuras por granizo y golpes urbanos sin repintar ni alterar la pintura original de fábrica.
            </p>

            <div className="pt-2">
              <a
                href="https://sacabollos-aguila-blanca-hnxlp5f1s-aguila-blanca.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-medium"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#ffb800]" />
                <span>Sistema de Gestión del Taller</span>
              </a>
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  Reparación de Granizo Completo
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  Bollos de Estacionamiento y Portazos
                </a>
              </li>
              <li>
                <a href="#aseguradoras" className="hover:text-white transition-colors">
                  Gestión y Presupuestos para Seguros
                </a>
              </li>
              <li>
                <a href="#comparativa" className="hover:text-white transition-colors">
                  Desabollado en Paneles de Aluminio
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-white transition-colors">
                  Atención a Concesionarias y Flotas
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Horarios & Peritajes */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Horarios y Atención
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#ffb800] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Lunes a Viernes</span>
                  <span>08:00 a 18:30 hs (Peritaje continuo)</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#ffb800] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Sábados</span>
                  <span>08:30 a 13:00 hs (Con turno previo)</span>
                </div>
              </li>
              <li className="flex items-center gap-2 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Diagnósticos sin turno en el día</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Canales Directos
            </h4>
            <div className="space-y-3">
              <a
                href="#cotizador"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#ffb800]/50 transition-colors text-white"
              >
                <MessageCircle className="w-4 h-4 text-[#ffb800]" />
                <span className="font-medium">WhatsApp Peritajes 24/7</span>
              </a>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span className="text-white font-medium">Centro Técnico Especializado</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Instalaciones preparadas con cabinas de luz reflectométrica y acceso para camionetas y vehículos de gran porte.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Águila Blanca Sacabollos. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Tecnología PDR Certificada</span>
            <span>•</span>
            <span className="text-slate-400 font-medium">Conservación 100% Pintura Original</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
