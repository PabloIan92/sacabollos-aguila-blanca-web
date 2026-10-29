import React from 'react'
import { Building2, Truck, PhoneCall, CheckCheck } from 'lucide-react'

export const B2BSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0c1017] via-[#122238] to-[#0c1017] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffb800]/20 border border-[#ffb800]/40 text-xs font-semibold text-[#ffb800] uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>División Corporativa y Flotas</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Soluciones a Escala para{' '}
              <span className="text-[#ffb800]">Concesionarias y Flotas</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              ¿Una tormenta de granizo dañó tu stock de vehículos 0km o parque automotor? En Águila Blanca contamos con capacidad operativa para procesar lotes de unidades simultáneas o desplegar técnicos especializados in-situ en tu playa de estacionamiento o depósito.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Auditoría de calidad bajo normas de fábrica</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Preserva el 100% del valor de venta del 0km</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Facturación A/B y contratos con aseguradoras</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tiempos de entrega récord por lote</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-md text-center space-y-5">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#ffb800] text-black flex items-center justify-center shadow-lg">
                <Truck className="w-7 h-7" />
              </div>

              <h3 className="font-display text-2xl font-bold text-white uppercase">
                Atención Preferencial B2B
              </h3>

              <p className="text-xs text-slate-300">
                Coordiná una visita técnica o peritaje de lote con nuestro responsable de operaciones corporativas.
              </p>

              <div className="pt-2">
                <a
                  href="https://wa.me/5491122334455?text=Hola,%20quisiera%20contactar%20con%20la%20Divisi%C3%B3n%20Flotas/Concesionarias%20de%20%C3%81guila%20Blanca."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-[#ffb800] hover:bg-[#ffc933] text-black font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#ffb800]/20 transition-all active:scale-95"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Contactar a División Flotas</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
