import React from 'react'
import { CloudHail, Car, ShieldCheck, Building2, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: CloudHail,
    title: 'Daño por Granizo',
    badge: 'Especialistas',
    desc: 'Restauración artesanal de capot, techo, portón y laterales golpeados por tormentas de granizo seco. Devolvemos la chapa a su línea original sin tocar la pintura.',
    tag: 'Entrega en 24 a 48 hs',
  },
  {
    icon: Car,
    title: 'Portazos y Estacionamiento',
    badge: 'En el día',
    desc: '¿Te golpearon la puerta en el estacionamiento o cochera? Borramos el bollo y la nervadura en cuestión de horas. Venís a la mañana y te lo llevás a la tarde.',
    tag: 'Reparación Express',
  },
  {
    icon: ShieldCheck,
    title: 'Trámite con Seguros',
    badge: 'Presupuesto Oficial',
    desc: 'Trabajamos con todas las compañías de seguro del país. Armamos el presupuesto oficial con fotos técnicas para que tu póliza cubra el arreglo sin complicaciones.',
    tag: 'Sin costo de gestión',
  },
  {
    icon: Building2,
    title: 'Flotas y Concesionarias',
    badge: 'B2B & Lotes',
    desc: 'Capacidad para atender lotes de vehículos 0km o unidades corporativas afectadas por contingencias climáticas con cuadrillas dedicadas.',
    tag: 'Auditoría de fábrica',
  },
]

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-[#07090c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-[#ffb800]/15 text-[#ffb800] text-xs font-semibold uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-3">
            ¿Qué Hacemos en <span className="text-[#ffb800]">Águila Blanca?</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Soluciones directas y efectivas para que tu auto vuelva a estar perfecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-[#ffb800]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#ffb800]/10 text-[#ffb800] group-hover:bg-[#ffb800] group-hover:text-black flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] font-semibold text-slate-300">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white uppercase group-hover:text-[#ffb800] transition-colors">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-300 font-medium">
                  <span className="text-[#ffd166]">{s.tag}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
